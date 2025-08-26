import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';
import './index.css';

import { LanguageProvider } from '@/context/LanguageContext.jsx';
import { WhitelabelProvider } from '@/context/WhitelabelContext.jsx';
import { AppLayout } from '@/layout/AppLayout';
import { store } from '@/store';
import { Provider as ReduxProvider } from 'react-redux';
import { AuthProvider } from './context/auth/AuthProvider.jsx';
import { NotificationProvider } from './components/ui/notification.jsx';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1, refetchOnWindowFocus: false } },
});

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <WhitelabelProvider>
          <ReduxProvider store={store}>
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
          </ReduxProvider>
        </WhitelabelProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
