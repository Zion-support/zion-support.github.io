console.log("main.tsx: Start");
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
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
import { AuthProvider } from './context/auth/AuthProvider';
import { NotificationProvider } from './context/notifications/NotificationContext';

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
});

// Performance monitoring setup
if (import.meta.env.DEV) {
  console.log('🚀 Zion Tech Group - Development Mode');
}

const rootElement = document.getElementById('root');

function renderApp() {
  const app = (
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <WhitelabelProvider>
            <Router>
              <AuthProvider>
                <NotificationProvider>
                  <AnalyticsProvider>
                    <ViewModeProvider>
                      <LanguageProvider authState={{ isAuthenticated: false, user: null }}>
                        <AppLayout>
                          <App />
                        </AppLayout>
                      </LanguageProvider>
                    </ViewModeProvider>
                  </AnalyticsProvider>
                </NotificationProvider>
              </AuthProvider>
            </Router>
          </WhitelabelProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  );

  if (rootElement) {
    if (rootElement.hasChildNodes()) {
      // Hydrate if server-side rendered
      hydrateRoot(rootElement, app);
    } else {
      // Create new root if no SSR
      const root = createRoot(rootElement);
      root.render(app);
    }
  }
}

// Register service worker
registerServiceWorker();

// Render the app
renderApp();
