import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
// Removed feat/i18n-implementation and main markers
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/index'; // Adjust the path if your i18n.js is elsewhere
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { showApiError } from '@/utils/apiErrorHandler';
import './utils/globalFetchInterceptor';
import './utils/consoleErrorToast';
import ToastProvider from './components/ToastProvider';
import { GlobalLoaderProvider } from '@/context/GlobalLoaderContext';
import { store } from './store';
import { WhitelabelProvider } from './context/WhitelabelContext';
import { AuthProvider } from './context/auth';
import { NotificationProvider } from './context/NotificationContext';
import { AnalyticsProvider } from './context/AnalyticsContext';
import { LanguageProvider } from './context/LanguageContext';
import { ViewModeProvider } from './context/ViewModeContext';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { ReferralMiddleware } from './components/referral/ReferralMiddleware';
import { AppLayout } from './layout/AppLayout';
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup';
import { initializeGlobalErrorHandlers } from './utils/globalAppErrors';

// Import i18n configuration
import './i18n';

// Register service worker
import { register } from './serviceWorkerRegistration';

// Performance monitoring
import { performanceMonitor, setupGlobalErrorHandlers } from './utils/performance-monitor';
import ErrorBoundary from './components/ErrorBoundary';

// Create QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontFamily: 'sans-serif'
  }}>
    <div>Loading...</div>
  </div>
);

// Global error handler function
const handleGlobalError = (error: Error) => {
  console.error('Global error caught:', error);
  // Initialize global error handlers if not already done
  initializeGlobalErrorHandlers();
};

// Export for global access
(window as any).handleGlobalError = handleGlobalError;

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif', color: '#333' }}>
    <h1>Application Error</h1>
    <p>A critical error occurred while loading the application.</p>
    <p>Error: {error.message}</p>
    <p>Please check the console for more details.</p>
    <button 
      onClick={resetErrorBoundary}
      style={{ 
        padding: '10px 20px', 
        marginTop: '10px', 
        background: '#007bff', 
        color: 'white', 
        border: 'none', 
        borderRadius: '4px', 
        cursor: 'pointer' 
      }}
    >
      Reload Page
    </button>
  </div>
);

// Initialize global error handlers early
initializeGlobalErrorHandlers();
setupGlobalErrorHandlers();

// Set up global error handlers
window.addEventListener('error', (event) => {
  if (event.error) {
    handleGlobalError(event.error);
  }
});

window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason;
  const errorMessage = typeof reason === 'string' ? reason : 'Unknown error';
  handleGlobalError(new Error(errorMessage));
});

try {
  console.log("main.tsx: Before ReactDOM.createRoot");
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found');
  }

  // Render the app with proper provider structure
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, errorInfo) => {
          console.error('Error caught by boundary:', error, errorInfo);
        }}
        onReset={() => {
          window.location.reload();
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Provider store={store}>
            <GlobalLoaderProvider>
              <I18nextProvider i18n={i18n}>
                <HelmetProvider>
                  <QueryClientProvider client={queryClient}>
                    <WhitelabelProvider>
                      <Router>
                        <AuthProvider>
                          <NotificationProvider>
                            <AnalyticsProvider>
                              <LanguageProvider authState={{ isAuthenticated: false, user: null }}>
                                <ViewModeProvider>
                                  <CartProvider>
                                    <FavoritesProvider>
                                      <ReferralMiddleware>
                                        <ToastProvider>
                                          <AppLayout>
                                            <App />
                                          </AppLayout>
                                        </ToastProvider>
                                      </ReferralMiddleware>
                                    </FavoritesProvider>
                                  </CartProvider>
                                </ViewModeProvider>
                                <LanguageDetectionPopup />
                              </LanguageProvider>
                            </AnalyticsProvider>
                          </NotificationProvider>
                        </AuthProvider>
                      </Router>
                    </WhitelabelProvider>
                  </QueryClientProvider>
                </HelmetProvider>
              </I18nextProvider>
            </GlobalLoaderProvider>
          </Provider>
        </Suspense>
      </ErrorBoundary>
    </React.StrictMode>,
  );

  console.log("main.tsx: After ReactDOM.createRoot");

  // Register service worker in production
  if (import.meta.env.PROD) {
    register();
  }

  // Initialize performance monitoring
  performanceMonitor.reportMetrics();
} catch (error) {
  console.error("Global error caught in main.tsx:", error);
  handleGlobalError(error as Error);
}
