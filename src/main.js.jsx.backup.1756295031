console.log("main.tsx: Start");
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
<<<<<<< HEAD
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './utils/globalFetchInterceptor';
import './utils/consoleErrorToast';
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
=======
import App from './App.js';
import './index.css';
// import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import './utils/globalFetchInterceptor';
// import './utils/consoleErrorToast';
// Import i18n configuration
// import './i18n';
// import { LanguageProvider } from '@/context/LanguageContext';
// import { LanguageDetectionPopup } from './components/LanguageDetectionPopup';
// import { WhitelabelProvider } from '@/context/WhitelabelContext';
// import { AppLayout } from '@/layout/AppLayout';
// Import auth and notification providers
// import { AuthProvider } from './context/auth/AuthProvider';
// import { NotificationProvider } from './context/notifications/NotificationContext';
// Import analytics provider
// import { AnalyticsProvider } from './context/AnalyticsContext';
// import { ViewModeProvider } from './context/ViewModeContext';
>>>>>>> cursor/expand-services-and-deploy-updates-6593
// Initialize a React Query client with global error handling
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});
const rootElement = document.getElementById('root');
function renderApp() {
<<<<<<< HEAD
    const app = (<React.StrictMode>
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
    </React.StrictMode>);
=======
    const app = React.createElement(React.StrictMode, null,
        React.createElement(Router, null,
            React.createElement(App, null)
        )
    );
>>>>>>> cursor/expand-services-and-deploy-updates-6593
    if (rootElement?.hasChildNodes()) {
        hydrateRoot(rootElement, app);
    }
    else if (rootElement) {
        createRoot(rootElement).render(app);
    }
}
function displayFatalError(message) {
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
}
catch (error) {
    console.error('Global error caught in main.tsx:', error);
    displayFatalError(error.message);
}
window.addEventListener('error', (e) => {
    console.error('Unhandled error:', e.error || e.message);
    displayFatalError(e.message);
});
// Render the app with proper provider structure
<<<<<<< HEAD
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <WhitelabelProvider>
          <Router>
            <AuthProvider>
              <NotificationProvider>
                <AnalyticsProvider>
                  <LanguageProvider authState={{ isAuthenticated: false, user: null }}>
                    <AppLayout>
                      <App />
                    </AppLayout>
                    <LanguageDetectionPopup />
                  </LanguageProvider>
                </AnalyticsProvider>
              </NotificationProvider>
            </AuthProvider>
          </Router>
        </WhitelabelProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>);
=======
// Note: This section was commented out as it was causing duplicate rendering
// The main render function above handles the app rendering
>>>>>>> cursor/expand-services-and-deploy-updates-6593
