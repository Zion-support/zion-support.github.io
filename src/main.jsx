<<<<<<< HEAD
=======
// // // // // // // console.log("main.tsx: Start");
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from "./App.tsx";
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './utils/globalFetchInterceptor';
import './utils/consoleErrorToast';
// Import i18n configuration
import './i18n';
import { LanguageProvider } from '@/context/LanguageContext';
import { LanguageDetectionPopup } from "./components/LanguageDetectionPopup";
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
// Import auth and notification providers
import { AuthProvider } from "./context/auth/AuthProvider";
import { NotificationProvider } from "./context/notifications/NotificationContext";
// Import analytics provider
import { AnalyticsProvider } from "./context/AnalyticsContext";
import { ViewModeProvider } from "./context/ViewModeContext";
<<<<<<< HEAD

=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
// Initialize a React Query client with global error handling
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});
<<<<<<< HEAD

const renderApp = () => {
=======
const renderApp() {
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
    const app = (
        <React.StrictMode>
            <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                    <WhitelabelProvider>
                        <Router>
                            <AuthProvider>
                                <NotificationProvider>
                                    <AnalyticsProvider>
<<<<<<< HEAD
                                        <LanguageProvider authState={{
                                            isAuthenticated: false,
                                            user: null
                                        }}>
=======
                                        <LanguageProvider authState = {
  { isAuthenticated: false,
  user: null 
}}>
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
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
<<<<<<< HEAD

    const container = document.getElementById('root');
    if (!container) {
        throw new Error('Root element not found');
    }

    // Check if we're hydrating or creating a new root
    if (container.hasChildNodes()) {
        // Hydrate existing content
        hydrateRoot(container, app);
    } else {
        // Create new root
        const root = createRoot(container);
        root.render(app);
    }
};

// Initialize the app
renderApp();
=======
    if (rootElement?.hasChildNodes()) {
        hydrateRoot(rootElement, app)}
    else if (rootElement) {
        createRoot(rootElement).render(app)}
}
function displayFatalError(message) {
    if (rootElement) {
        rootElement.innerHTML = `
      <div style="padding:20px;text-align:center;font-family:sans-serif;">
        <h1>Application Error</h1>
        <p>${message}</p>
    // // // // // // // console.error('Global error caught in main.tsx:', error);
    displayFatalError(error.message);
window.addEventListener('error', (e) => {
    // // // // // // // console.error('Unhandled error:', e.error || e.message);
    displayFatalError(e.message);
});
      </div>`}
}
try {
    renderApp()}
catch (error) {
    console.error('Global error caught in main.tsx:', error);
    displayFatalError(error.message)}
window.addEventListener('error', (e) => {
    console.error('Unhandled error:', e.error || e.message);
    displayFatalError(e.message)});
// Render the app with proper provider structure
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <WhitelabelProvider>
          <Router>
            <AuthProvider>
              <NotificationProvider>
                <AnalyticsProvider>
                  <LanguageProvider authState = {
  { isAuthenticated: false,
  user: null 
}}>
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
}}}}}}}
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
