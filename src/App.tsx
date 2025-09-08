import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { LanguageProvider } from './context/LanguageContext';
import { WhitelabelProvider } from './context/WhitelabelContext';
import { AuthProvider } from './context/auth/AuthProvider';
import { NotificationProvider } from './context/notifications/NotificationProvider';
import { AnalyticsProvider } from './context/AnalyticsContext';
import { ViewModeProvider } from './context/ViewModeContext';
import { AppLayout } from './layout/AppLayout';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/LoadingSpinner';
import { AppConfig } from './types/app';

// Initialize React Query client with better configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error: any) => {
        // Don't retry on 4xx errors
        if (error?.status >= 400 && error?.status < 500) {
          return false;
        }
        return failureCount < 3;
      },
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
    mutations: {
      retry: 1,
    },
  },
});

// App configuration
const appConfig: AppConfig = {
  name: 'Zion Tech Group',
  version: '1.0.0',
  environment: (process.env.NODE_ENV as any) || 'development',
  apiUrl: process.env.REACT_APP_API_URL || '/api',
  features: {
    analytics: true,
    notifications: true,
    multiLanguage: true,
    darkMode: true,
  },
};

// Loading fallback component
const AppLoadingFallback: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-purple flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner size="large" color="white" />
      <p className="mt-4 text-zion-slate-light">Loading Zion App...</p>
    </div>
  </div>
);

// Main App component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Suspense fallback={<AppLoadingFallback />}>
              <LanguageProvider>
                <WhitelabelProvider>
                  <AuthProvider>
                    <NotificationProvider>
                      <AnalyticsProvider>
                        <ViewModeProvider>
                          <AppLayout>
                            <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-purple text-white">
                              <div className="container mx-auto px-4 py-8">
                                <div className="text-center">
                                  <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-zion-slate-light bg-clip-text text-transparent">
                                    {appConfig.name}
                                  </h1>
                                  <p className="text-xl text-zion-slate-light mb-8">
                                    Innovative IT Solutions & AI Services
                                  </p>
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                                      <h3 className="text-lg font-semibold mb-2">AI Services</h3>
                                      <p className="text-sm text-zion-slate-light">
                                        Advanced AI-powered solutions for modern businesses
                                      </p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                                      <h3 className="text-lg font-semibold mb-2">IT Services</h3>
                                      <p className="text-sm text-zion-slate-light">
                                        Comprehensive managed IT and cybersecurity solutions
                                      </p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                                      <h3 className="text-lg font-semibold mb-2">Micro SAAS</h3>
                                      <p className="text-sm text-zion-slate-light">
                                        Scalable software solutions for growing businesses
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </AppLayout>
                        </ViewModeProvider>
                      </AnalyticsProvider>
                    </NotificationProvider>
                  </AuthProvider>
                </WhitelabelProvider>
              </LanguageProvider>
            </Suspense>
          </Router>
          {/* {process.env.NODE_ENV === 'development' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )} */}
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;