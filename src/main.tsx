console.log("main.tsx: Start");
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// Removed feat/i18n-implementation and main markers
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Adjust the path if your i18n.js is elsewhere
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import './index.css';

// Import i18n configuration
import './i18n';
import { LanguageProvider } from '@/context/LanguageContext';
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
import { ReferralMiddleware } from '@/components/referral/ReferralMiddleware';

// Import auth and notification providers
import { AuthProvider } from '@/context/auth/AuthProvider';
import { NotificationProvider } from './context';
import { Provider } from 'react-redux';
import { store } from './store';

// Import analytics provider
import { AnalyticsProvider } from './context/AnalyticsContext';
import { ViewModeProvider } from './context/ViewModeContext';
import { CartProvider } from './context/CartContext';
import { registerServiceWorker } from './serviceWorkerRegistration';

// Initialize a React Query client with global error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => showApiError(error),
    },
    mutations: {
      onError: (error) => showApiError(error),
    },
  },
});

try {
  console.log("main.tsx: Before ReactDOM.createRoot");
  // Removed initGA() call as it's undefined and likely superseded by AnalyticsProvider
  // Render the app with proper provider structure
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
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
      {/* Removed duplicate main marker */}
    </React.StrictMode>,
  );

  if (rootElement?.hasChildNodes()) {
    hydrateRoot(rootElement, app);
  } else if (rootElement) {
    createRoot(rootElement).render(app);
  }
}

function displayFatalError(message: string) {
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding:20px;text-align:center;font-family:sans-serif;">
        <h1>Application Error</h1>
        <p>${message}</p>
      </div>`;
  }
}

try {
  renderApp();
} catch (error) {
  console.error('Global error caught in main.tsx:', error);
  displayFatalError((error as Error).message);
}

window.addEventListener('error', (e) => {
  console.error('Unhandled error:', e.error || e.message);
  displayFatalError(e.message);
});

window.addEventListener('unhandledrejection', (e) => {
  const message = (e.reason && e.reason.message) || 'Unhandled promise rejection';
  console.error('Unhandled rejection:', e.reason);
  displayFatalError(message);
});

registerServiceWorker();

// Global fallback for images that fail to load
// Replace broken images (e.g., offline Unsplash links) with a local placeholder
document.addEventListener(
  'error',
  (event) => {
    const target = event.target as HTMLElement;
    if (target instanceof HTMLImageElement && !target.dataset.fallback) {
      target.dataset.fallback = 'true';
      target.src = '/placeholder.svg';
    }
  },
  true,
);
