<<<<<<< HEAD
<<<<<<< HEAD
// // // console.log("main.tsx: Start"),
import React from 'react',
import ReactDOM from 'react-dom/client',
import App from './App.tsx',
import './index.css',
import { HelmetProvider } from 'react-helmet-async',
import { BrowserRouter as Router } from 'react-router-dom',
import { QueryClient, QueryClientProvider } from '@tanstack/react-query',
import { showApiError } from '@/utils/apiErrorHandler',
import './utils/globalFetchInterceptor',
=======
// console.log(&quot;main.tsx: Start&quot;);
=======

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './utils/globalFetchInterceptor';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Import i18n configuration
<<<<<<< HEAD
import './i18n',
import { LanguageProvider } from '@/context/LanguageContext',
import { CurrencyProvider } from '@/context/CurrencyContext',
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup',
import { WhitelabelProvider } from '@/context/WhitelabelContext',
import { AppLayout } from '@/layout/AppLayout',
// Import auth and notification providers
import { AuthProvider } from '@/context/auth/AuthProvider',
import { NotificationProvider } from './context',
// Import analytics provider
import { AnalyticsProvider } from './context/AnalyticsContext',
import { ViewModeProvider } from './context/ViewModeContext',
import { CartProvider } from './context/CartContext',
import { registerServiceWorker } from './serviceWorkerRegistration',
=======
import './i18n';

// Import auth and notification providers

// Import analytics provider

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
// Initialize a React Query client with global error handling
const _queryClient = new QueryClient(_{_defaultOptions: {
    queries: {
      onError: (error) => showApiError(error)},
<<<<<<< HEAD
    mutations: {
      onError: (error) => showApiError(error)}}}),

try {
<<<<<<< HEAD
  // // // console.log("main.tsx: Before ReactDOM.createRoot"),
=======
  // console.log(&quot;main.tsx: Before ReactDOM.createRoot&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  // Render the app with proper provider structure
=======
    mutations: {_onError: (_error) => showApiError(error)}}});

try {_// Render the app with proper provider structure
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <WhitelabelProvider>
            <Router>
              <AuthProvider>
                <NotificationProvider>
                  <AnalyticsProvider>
                    <CurrencyProvider>
                      <LanguageProvider authState={_{ isAuthenticated: false, _user: null}}>
                        <ViewModeProvider>
                          <CartProvider>
                            <AppLayout>
                              <App />
                            </AppLayout>
                          </CartProvider>
                        </ViewModeProvider>
                        <LanguageDetectionPopup />
                      </LanguageProvider>
                    </CurrencyProvider>
                  </AnalyticsProvider>
                </NotificationProvider>
              </AuthProvider>
            </Router>
          </WhitelabelProvider>
        </QueryClientProvider>
      </HelmetProvider>
<<<<<<< HEAD
    </React.StrictMode>),
  // // // console.log("main.tsx: After ReactDOM.createRoot")
} catch (error) {
  console.error("Global error caught in main.tsx:", error),
  // // // console.log("main.tsx: Global error caught"),
  const rootElement = document.getElementById('root'),
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px, text-align: center, font-family: sans-serif,">
=======
    </React.StrictMode>,
  );
<<<<<<< HEAD
  // console.log(&quot;main.tsx: After ReactDOM.createRoot&quot;);
} catch (error) {
  console.error(&quot;Global error caught in main.tsx:&quot;, error);
  // console.log(&quot;main.tsx: Global error caught&quot;);
  const rootElement = document.getElementById('root');
=======
  
} catch (error) {_const _rootElement = document.getElementById('root');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  if (rootElement) {
    rootElement.innerHTML = `
      <div style=&quot;padding: 20px; text-align: center; font-family: sans-serif;&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        <h1>Application Error</h1>
        <p>A critical error occurred while loading the application.</p>
        <p>Error: ${(error as Error).message}</p>
        <pre>${_(error as Error).stack}</pre>
        <p>Please check the console for more details.</p>
      </div>
    `
  }
}

registerServiceWorker(),
