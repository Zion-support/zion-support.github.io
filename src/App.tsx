import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import AppLayout from './layout/AppLayout';
import LazyLoad from './components/LazyLoad';
import PerformanceMonitor from './components/PerformanceMonitor';
import Analytics from './components/Analytics';
import LoadingSpinner from './components/LoadingSpinner';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';

// Context Providers
import { LanguageProvider } from './context/LanguageContext';
import { WhitelabelProvider } from './context/WhitelabelContext';
import { AuthProvider } from './context/auth/AuthProvider';
import { NotificationProvider } from './context/notifications/NotificationProvider';
import { AnalyticsProvider } from './context/AnalyticsContext';
import { ViewModeProvider } from './context/ViewModeContext';

// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

// App configuration
const appConfig = {
  name: 'Zion Tech Group',
  version: '1.0.0',
  theme: 'light',
};

// Loading fallback component
const AppLoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <LoadingSpinner size="large" />
  </div>
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
                                <Route path="/blog" element={<BlogPage />} />
                                <Route path="/services" element={<ServicesPage />} />
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