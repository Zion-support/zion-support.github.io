import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './context/LanguageContext';
import { WhitelabelProvider } from './context/WhitelabelContext';
import { AuthProvider } from './context/auth/AuthProvider';
import { NotificationProvider } from './context/notifications/NotificationProvider';
import { AnalyticsProvider } from './context/AnalyticsContext';
import { ViewModeProvider } from './context/ViewModeContext';
import { AppLayout } from './layout/AppLayout';

// Initialize React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <LanguageProvider>
            <WhitelabelProvider>
              <AuthProvider>
                <NotificationProvider>
                  <AnalyticsProvider>
                    <ViewModeProvider>
                      <AppLayout>
                        <div className="min-h-screen bg-zion-blue text-white flex items-center justify-center">
                          <div className="text-center">
                            <h1 className="text-2xl font-bold mb-2">Zion App</h1>
                            <p className="text-zion-slate-light">Build placeholder to restore Netlify deployment.</p>
                          </div>
                        </div>
                      </AppLayout>
                    </ViewModeProvider>
                  </AnalyticsProvider>
                </NotificationProvider>
              </AuthProvider>
            </WhitelabelProvider>
          </LanguageProvider>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;