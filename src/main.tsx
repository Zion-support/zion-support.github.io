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

import { LanguageProvider } from '@/context/LanguageContext';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
import { store } from '@/store';
import { Provider as ReduxProvider } from 'react-redux';

// Import auth and notification providers
import { AuthProvider } from './context/auth/AuthProvider';
import { NotificationProvider } from './components/ui/notification';

// Providers trimmed for build
// import { AnalyticsProvider } from './context/AnalyticsContext';
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

=======
const rootElement = document.getElementById('root');

function renderApp() {
  const app = (
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <WhitelabelProvider>
            <Router>
              <AuthProvider>
                <LanguageProvider authState={{ isAuthenticated: false, user: null }}>
                  <ViewModeProvider>
                    <App />
                  </ViewModeProvider>
                  {/* LanguageDetectionPopup removed */}
                </LanguageProvider>
              </AuthProvider>
            </Router>
          </WhitelabelProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  );

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
      <QueryClientProvider client={queryClient}>
        <WhitelabelProvider>
          <Router>
            <AuthProvider>
              <NotificationProvider>
                
                  <LanguageProvider authState={{ isAuthenticated: false, user: null }}>
                    <AppLayout>
                      <App />
                    </AppLayout>
                  </LanguageProvider>
                
              </NotificationProvider>
            </AuthProvider>
          </Router>
        </WhitelabelProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
=======
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
