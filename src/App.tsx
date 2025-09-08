import React, { Suspense } from 'react';
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
// import { LoadingSpinner } from './components/LoadingSpinner';
import { AppConfig } from './types/app';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Initialize React Query client with better configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error: unknown) => {
        // Don't retry on 4xx errors
        if (error && typeof error === 'object' && 'status' in error) {
          const status = (error as { status: number }).status;
          if (status >= 400 && status < 500) {
            return false;
          }
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
  environment: (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development',
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
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
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
            <LanguageProvider>
              <WhitelabelProvider>
                <AuthProvider>
                  <NotificationProvider>
                    <AnalyticsProvider>
                      <ViewModeProvider>
                        <Suspense fallback={<AppLoadingFallback />}>
                          <AppLayout config={appConfig}>
                            <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/about" element={<About />} />
                              <Route path="/contact" element={<Contact />} />
                              <Route path="*" element={<NotFound />} />
                            </Routes>
                          </AppLayout>
                        </Suspense>
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