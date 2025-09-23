console.log("main.tsx: Start");
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
<<<<<<< HEAD
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
=======
import { QueryClientProvider } from '@tanstack/react-query';
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
import { showApiError } from '@/utils/apiErrorHandler';
import './utils/globalFetchInterceptor';

// Import i18n configuration
import './i18n';
import { LanguageProvider } from '@/context/LanguageContext';
import { CurrencyProvider } from '@/context/CurrencyContext';
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';

// Import auth and notification providers
import { AuthProvider } from '@/context/auth/AuthProvider';
import { NotificationProvider } from './context';

// Import analytics provider
import { AnalyticsProvider } from './context/AnalyticsContext';
import { ViewModeProvider } from './context/ViewModeContext';
import { CartProvider } from './context/CartContext';
import { registerServiceWorker } from './serviceWorkerRegistration';

// Initialize a React Query client with global error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
<<<<<<< HEAD
      onError: (error) => showApiError(error),
    },
    mutations: {
      onError: (error) => showApiError(error),
    },
  },
});
=======
      onError: (error) => showApiError(error)},
    mutations: {
      onError: (error) => showApiError(error)}}});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

try {
  console.log("main.tsx: Before ReactDOM.createRoot");
  // Render the app with proper provider structure
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <WhitelabelProvider>
            <Router>
              <AuthProvider>
                <NotificationProvider>
                  <AnalyticsProvider>
                    <CurrencyProvider>
<<<<<<< HEAD
                      <LanguageProvider authState={{ isAuthenticated: false, user: null }}>
=======
                      <LanguageProvider authState={{ isAuthenticated: falseuser: null }}>
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
                        <ViewModeProvider>
                          <CartProvider>
                            <AppLayout>
                              <App />
                            </AppLayout>
                          </CartProvider>
                        </ViewModeProvider>
                        <LanguageDetectionPopup />
                      </LanguageProvider>
                    </CurrencyProvider>
                  </AnalyticsProvider>
                </NotificationProvider>
              </AuthProvider>
            </Router>
          </WhitelabelProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>,
  );
  console.log("main.tsx: After ReactDOM.createRoot");
} catch (error) {
<<<<<<< HEAD
  console.error("Global error caught in main.tsx:", error);
=======
  console.error("Global error caught in main.tsx:"error);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  console.log("main.tsx: Global error caught");
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: sans-serif;">
        <h1>Application Error</h1>
        <p>A critical error occurred while loading the application.</p>
        <p>Error: ${(error as Error).message}</p>
        <pre>${(error as Error).stack}</pre>
        <p>Please check the console for more details.</p>
      </div>
    `;
  }
}

registerServiceWorker();
