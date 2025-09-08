import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { LazyLoad } from './components/LazyLoad';
import { LoadingPage } from './components/LoadingPage';
import { ErrorPage } from './components/ErrorPage';
import Analytics from './components/Analytics';
import { AppConfig } from './types/app';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
  environment: (import.meta.env.MODE as any) || 'development',
  apiUrl: import.meta.env.VITE_API_URL || '/api',
  features: {
    analytics: true,
    notifications: true,
    multiLanguage: true,
    darkMode: true,
  },
};

// Loading fallback component
const AppLoadingFallback: React.FC = () => (
  <LoadingPage message="Loading Zion App..." />
);
// Main App component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <LanguageProvider>
              <WhitelabelProvider>
                <AuthProvider>
                  <NotificationProvider>
                    <AnalyticsProvider>
                      <ViewModeProvider>
                        <Suspense fallback={<AppLoadingFallback />}>
                          <AppLayout config={appConfig}>
                            <LazyLoad>
                              <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="*" element={<NotFound />} />
                              </Routes>
                            </LazyLoad>
                          </AppLayout>
                        </Suspense>
                        <PerformanceMonitor />
                        <Analytics 
                          trackingId={import.meta.env.VITE_GA_TRACKING_ID}
                          enablePerformanceTracking={true}
                          enableErrorTracking={true}
                          enablePageViewTracking={true}
                        />
                        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
                      </ViewModeProvider>
                    </AnalyticsProvider>
                  </NotificationProvider>
                </AuthProvider>
              </WhitelabelProvider>
            </LanguageProvider>
          </Router>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;