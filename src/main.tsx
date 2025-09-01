import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
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

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Import analytics provider
import { AnalyticsProvider } from './context/AnalyticsContext';
import { initGA } from './lib/gtag';
import ErrorBoundary from './components/ErrorBoundary';

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

initGA();
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
                  <LanguageProvider authState={{ isAuthenticated: false, user: null }}>
                    <ErrorBoundary>
                      <App />
                      <LanguageDetectionPopup />
                    </ErrorBoundary>
                  </LanguageProvider>
                </AnalyticsProvider>
              </NotificationProvider>
            </AuthProvider>
          </Router>
        </WhitelabelProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
