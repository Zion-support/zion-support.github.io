import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  
  const app = (
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
    </React.StrictMode>
  );

  root.render(app);
  
  // Register service worker for PWA functionality
  registerServiceWorker();
} else {
  console.error('Root element not found');
}
