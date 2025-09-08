import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { showApiError } from '@/utils/apiErrorHandler';
import './utils/globalFetchInterceptor';

// Service worker registration function
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });
      
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
      
      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New service worker available
              if (confirm('New version available! Reload to update?')) {
                window.location.reload();
              }
            }
          });
        }
      });
      
      return registration;
    } catch (error) {
      console.error('Service worker registration failed:', error);
      throw error;
    }
  }
  throw new Error('Service workers not supported');
};

// Import auth and notification providers
import { AuthProvider } from '@/context/auth/AuthProvider';
import { NotificationProvider } from './context';
import { Provider } from 'react-redux';
import { store } from './store';

// Import analytics provider
import { AnalyticsProvider } from './context/AnalyticsContext';
import { ViewModeProvider } from './context/ViewModeContext';
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

window.addEventListener('unhandledrejection', (e) => {
  const message = (e.reason && e.reason.message) || 'Unhandled promise rejection';
  console.error('Unhandled rejection:', e.reason);
  displayFatalError(message);
});

registerServiceWorker();
