console.log("main.tsx: Start");
import React from 'react';
import ReactDOM from 'react-dom/client';

// Integrate axe-core accessibility auditing in development
if (process.env.NODE_ENV !== 'production') {
  // Dynamically require to avoid bundling in production
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}
import App from './App.tsx';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Adjust the path if your i18n.js is elsewhere
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { showApiError } from '@/utils/apiErrorHandler';
import './utils/globalFetchInterceptor';
import './utils/consoleErrorToast';
import ToastProvider from './components/ToastProvider';

// Import i18n configuration
import './i18n';
import { LanguageProvider } from '@/context/LanguageContext';
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';

// Import auth and notification providers
import { AuthProvider } from '@/context/auth/AuthProvider';
import { NotificationProvider } from './context';

// Import analytics provider
import { AnalyticsProvider } from './context/AnalyticsContext';
import { ViewModeProvider } from './context/ViewModeContext';
import { registerServiceWorker } from './serviceWorkerRegistration';

// Initialize a React Query client with global error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

try {
  // Render the app with proper provider structure
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
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
      </Provider>
    </React.StrictMode>,
  );
} catch (error) {
  console.error("Global error caught in main.tsx:", error);
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

// Error handling for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason)
  // In production, you might want to send this to an error reporting service
})

// Error handling for uncaught errors
window.addEventListener('error', (event) => {
  console.error('Uncaught error:', event.error)
  // In production, you might want to send this to an error reporting service
})

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available, show update prompt
                if (confirm('New content is available! Would you like to update?')) {
                  newWorker.postMessage({ type: 'SKIP_WAITING' })
                  window.location.reload()
                }
              }
            })
          }
        })
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppWrapper>
            <App />
          </AppWrapper>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
);

registerServiceWorker();
