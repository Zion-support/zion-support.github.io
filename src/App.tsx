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
      gcTime: 10 * 60 * 1000, // 10 minutes
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
          <LanguageProvider>
            <WhitelabelProvider>
              <AuthProvider>
                <NotificationProvider>
                  <AnalyticsProvider>
                    <ViewModeProvider>
                      <Router>
                        <Suspense fallback={<AppLoadingFallback />}>
                          <AppLayout config={appConfig} />
                        </Suspense>
                      </Router>
                    </ViewModeProvider>
                  </AnalyticsProvider>
                </NotificationProvider>
              </AuthProvider>
            </WhitelabelProvider>
          </LanguageProvider>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;