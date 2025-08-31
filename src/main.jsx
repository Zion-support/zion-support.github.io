// // // // // // // console.log("main.tsx: Start");
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
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
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
// Initialize a React Query client with global error handling
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});
const renderApp() {
    const app = (
        <React.StrictMode>
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
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    if (rootElement?.hasChildNodes()) {
        hydrateRoot(rootElement, app)}
    else if (rootElement) {
        createRoot(rootElement).render(app)}
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
function displayFatalError(message) {
    if (rootElement) {
        rootElement.innerHTML = `
      <div style="padding:20px;text-align:center;font-family:sans-serif;">
        <h1>Application Error</h1>
        <p>${message}</p>
    // // // // // // // console.error('Global error caught in main.tsx:', error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    displayFatalError(error.message);
window.addEventListener('error', (e) => {
    // // // // // // // console.error('Unhandled error:', e.error || e.message);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    displayFatalError(e.message);
});
=======
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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