console.log('main.tsx: Start');
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './utils/globalFetchInterceptor';
  defaultOptions: {
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

}> <ViewModeProvider> <CartProvider> <AppLayout> <App /> </AppLayout> </CartProvider> </ViewModeProvider> <LanguageDetectionPopup /> </LanguageProvider> </CurrencyProvider> </AnalyticsProvider> </NotificationProvider> </AuthProvider> </Router> </WhitelabelProvider> </QueryClientProvider> </HelmetProvider> if (rootElement) {
  rootElement.innerHTML = `<div style="padding: 20px;
text-align: center;
font-family: sans-serif;
" >   (error as Error) .message 
}</p> <pre>$ {
  (error as Error) .stack 
}</pre> <p>Please check the console for more details.</p> </div> ` 

}registerServiceWorker ();
