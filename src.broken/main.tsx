<<<<<<< HEAD
console.log('main.tsx: Start');
import React from 'react';
=======
 import React from 'react';
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './utils/globalFetchInterceptor';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Import i18n configuration //Initialize a React Query client with global error handling const queryClient = new QueryClient ({
  defaultOptions: {
<<<<<<< HEAD
    queries: {
      onError: error => showApiError(error),
    },
    mutations: {
      onError: error => showApiError(error),
    },
  },
});

try {
  console.log('main.tsx: Before ReactDOM.createRoot');
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
                    <CurrencyProvider>
                      <LanguageProvider
                        authState={{ isAuthenticated: false, user: null }}
                      >
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
    </React.StrictMode>
  );
  console.log('main.tsx: After ReactDOM.createRoot');
} catch (error) {
  console.error('Global error caught in main.tsx:', error);
  console.log('main.tsx: Global error caught');
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
=======
  queries: {
  onError: (error) => showApiError (error) 
};
//Render the app with proper provider structure queryClient 
}> <WhitelabelProvider> <Router> <AuthProvider> <NotificationProvider> <AnalyticsProvider> <CurrencyProvider> <LanguageProvider authState= {
  {
  isAuthenticated: false, user: null 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
}
}> <ViewModeProvider> <CartProvider> <AppLayout> <App /> </AppLayout> </CartProvider> </ViewModeProvider> <LanguageDetectionPopup /> </LanguageProvider> </CurrencyProvider> </AnalyticsProvider> </NotificationProvider> </AuthProvider> </Router> </WhitelabelProvider> </QueryClientProvider> </HelmetProvider> if (rootElement) {
  rootElement.innerHTML = `<div style="padding: 20px;
text-align: center;
font-family: sans-serif;
" > >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 <h1>Application Error</h1> <p>A critical error occurred while loading the application.</p> <p>Error: $ {
  (error as Error) .message 
}</p> <pre>$ {
  (error as Error) .stack 
}</pre> <p>Please check the console for more details.</p> </div> ` 
}
}registerServiceWorker ();
