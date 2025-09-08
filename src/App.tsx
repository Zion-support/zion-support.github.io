import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import { AppLayout } from './layout/AppLayout';
import LazyLoad from './components/LazyLoad';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy loaded pages and components for better performance
import { 
  LazyHome, 
  LazyAbout, 
  LazyContact, 
  LazyNotFound,
  LazyAnalytics,
  LazyPerformanceMonitor 
} from './utils/lazyLoad';

// Context Providers
import { LanguageProvider } from './context/LanguageContext';
import { WhitelabelProvider } from './context/WhitelabelContext';
import { AuthProvider } from './context/auth/AuthProvider';
import { NotificationProvider } from './context/notifications/NotificationProvider';
import { AnalyticsProvider } from './context/AnalyticsContext';
import { ViewModeProvider } from './context/ViewModeContext';

// Security and PWA providers
import { SecurityProvider } from './utils/security';
import { PWAProvider, OfflineIndicator, UpdateAvailable } from './utils/pwa';

// SEO and Performance utilities
import { SEO } from './utils/seo';
import { usePerformanceMonitor } from './utils/performance';

// Create QueryClient instance with enhanced configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: (failureCount, error) => {
        // Don't retry on 4xx errors
        if (error instanceof Error && error.message.includes('4')) {
          return false;
        }
        return failureCount < 3;
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 1,
    },
  },
});

// App configuration
const appConfig = {
  name: 'Zion Tech Group',
  version: '1.0.0',
  theme: 'light',
};

// SEO configuration
const seoData = {
  title: 'Zion Tech Group - Advanced Technology Solutions',
  description: 'Leading provider of cutting-edge technology solutions, AI services, and digital transformation consulting.',
  keywords: ['technology', 'AI', 'digital transformation', 'consulting', 'software development'],
  image: '/images/og-image.jpg',
  url: window.location.href,
  type: 'website' as const,
  canonical: window.location.href,
};

// Loading fallback component with accessibility improvements
const AppLoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen" role="status" aria-label="Loading application">
    <LoadingSpinner size="large" />
    <span className="sr-only">Loading application, please wait...</span>
  </div>
);

// Performance monitoring component
const PerformanceWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { metrics, reportMetrics } = usePerformanceMonitor();

  React.useEffect(() => {
    if (metrics) {
      // Report metrics to analytics endpoint
      reportMetrics(import.meta.env.VITE_ANALYTICS_ENDPOINT);
    }
  }, [metrics, reportMetrics]);

  return <>{children}</>;
};

// Main App component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <SecurityProvider>
            <PWAProvider>
              <Router>
                <LanguageProvider>
                  <WhitelabelProvider>
                    <AuthProvider>
                      <NotificationProvider>
                        <AnalyticsProvider>
                          <ViewModeProvider>
                            <PerformanceWrapper>
                              <SEO data={seoData} />
                              <Suspense fallback={<AppLoadingFallback />}>
                                <AppLayout config={appConfig}>
                                  <LazyLoad>
                                    <Routes>
                                      <Route path="/" element={<LazyHome />} />
                                      <Route path="/about" element={<LazyAbout />} />
                                      <Route path="/contact" element={<LazyContact />} />
                                      <Route path="*" element={<LazyNotFound />} />
                                    </Routes>
                                  </LazyLoad>
                                </AppLayout>
                              </Suspense>
                              <LazyPerformanceMonitor />
                              <LazyAnalytics 
                                trackingId={import.meta.env.VITE_GA_TRACKING_ID}
                                enablePerformanceTracking={true}
                                enableErrorTracking={true}
                                enablePageViewTracking={true}
                              />
                              <OfflineIndicator />
                              <UpdateAvailable />
                              {/* <ReactQueryDevtools initialIsOpen={false} /> */}
                            </PerformanceWrapper>
                          </ViewModeProvider>
                        </AnalyticsProvider>
                      </NotificationProvider>
                    </AuthProvider>
                  </WhitelabelProvider>
                </LanguageProvider>
              </Router>
            </PWAProvider>
          </SecurityProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;