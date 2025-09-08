console.log("main.tsx: Start");
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
let showApiError = (error: unknown) => console.error(error);

// Import i18n configuration
import './i18n';
const LanguageProvider: React.FC<{ children: React.ReactNode; authState?: any }> = ({ children }) => <>{children}</>;
const LanguageDetectionPopup: React.FC = () => null;
const WhitelabelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;

// Import auth and notification providers
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;
const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;

// Import analytics provider
const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;
const ViewModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;
const registerServiceWorker = () => {};

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
    </React.StrictMode>,
  );
  console.log("main.tsx: After ReactDOM.createRoot");
} catch (error) {
  console.error("Global error caught in main.tsx:", error);
  console.log("main.tsx: Global error caught");
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

registerServiceWorker();
