import React, { Suspense, lazy, memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import ErrorBoundary from './components/ErrorBoundary';
import { LoadingSpinner } from './components/LoadingSpinner';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { PWAUpdatePrompt } from './components/PWAUpdatePrompt';

// Core pages - lazy loaded for better performance
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/Services'));
const ContactPage = lazy(() => import('./pages/Contact'));
const AboutPage = lazy(() => import('./pages/About'));

// 404 Page component
const NotFoundPage = memo(() => (
  <div className="min-h-screen flex items-center justify-center text-white">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg">Page not found</p>
    </div>
  </div>
));
NotFoundPage.displayName = 'NotFoundPage';

const App = memo(() => {
  return (
    <ErrorBoundary>
      <PerformanceMonitor>
        <ThemeProvider>
          <WhitelabelProvider>
            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
              <Header />
              
              <main className="flex-1">
                <Suspense fallback={<LoadingSpinner fullScreen />}>
                  <Routes>
                    {/* Core Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    
                    {/* 404 Route */}
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              <SonnerToaster />
              <PWAUpdatePrompt />
            </div>
          </WhitelabelProvider>
        </ThemeProvider>
      </PerformanceMonitor>
    </ErrorBoundary>
  );
});

App.displayName = 'App';

export default App;