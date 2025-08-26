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
import { LanguageProvider } from './context/LanguageContext';
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup.tsx';

// Import auth and notification providers
import { AuthProvider } from '@/context/auth/AuthProvider';
import { NotificationProvider, WhitelabelProvider } from './context';

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
                    <LanguageProvider authState={{ isAuthenticated: false, user: null }}>
                      <ViewModeProvider>
                        <AppLayout>
                          <App />
                        </AppLayout>
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
    </React.StrictMode>
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

// Render the app with proper provider structure
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <AuthProvider>
          <NotificationProvider>
            <AnalyticsProvider>
              <WhitelabelProvider>
                <LanguageProvider authState={{ isAuthenticated: false, user: null }}>
                  <App />
                  <LanguageDetectionPopup />
                </LanguageProvider>
              </WhitelabelProvider>
            </AnalyticsProvider>
          </NotificationProvider>
        </AuthProvider>
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
);
