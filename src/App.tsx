import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Header } from './components/header/Header';
import { Footer } from './components/Footer';
import { NotificationProvider } from './components/ui/NotificationSystem';
import { ThemeProvider } from './context/ThemeContext';
import { ModernLoader } from './components/ui/ModernLoader';
import { AccessibilityEnhancer } from './components/accessibility/AccessibilityEnhancer';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.default })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.default })));
const ComprehensivePricing = lazy(() => import('./pages/ComprehensivePricing2025').then(module => ({ default: module.default })));
const SimplePage = lazy(() => import('./pages/SimplePage').then(module => ({ default: module.default })));
const SettingsPage = lazy(() => import('./pages/SettingsPage').then(module => ({ default: module.default })));
const AnalyticsDashboard = lazy(() => import('./components/dashboard/AnalyticsDashboard').then(module => ({ default: module.default })));
const PerformanceMonitor = lazy(() => import('./components/monitoring/PerformanceMonitor').then(module => ({ default: module.default })));
const ComprehensiveServicesShowcase = lazy(() => import('./pages/ComprehensiveServicesShowcase').then(module => ({ default: module.default })));
const EnhancedHomePage = lazy(() => import('./pages/EnhancedHomePage').then(module => ({ default: module.default })));
const EnhancedPricingPage = lazy(() => import('./pages/EnhancedPricingPage').then(module => ({ default: module.default })));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-zion-blue-dark">
    <ModernLoader size="lg" variant="spinner" text="Loading..." />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <AccessibilityEnhancer>
          <ErrorBoundary fallback={<div>Something went wrong. Please refresh the page.</div>}>
            <div className="App">
              <Header />
              <main id="main-content" className="min-h-screen">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/*" element={<ServicesPage />} />
                  <Route path="/pricing" element={<ComprehensivePricing />} />
                  <Route path="/enhanced-pricing" element={<EnhancedPricingPage />} />
                  <Route path="/enhanced-home" element={<EnhancedHomePage />} />
                  <Route path="/comprehensive-services" element={<SimplePage />} />
                  <Route path="/solutions" element={<SimplePage />} />
                  <Route path="/solutions/*" element={<SimplePage />} />
                  <Route path="/about" element={<SimplePage />} />
                  <Route path="/about/*" element={<SimplePage />} />
                  <Route path="/contact" element={<SimplePage />} />
                  <Route path="/blog" element={<SimplePage />} />
                  <Route path="/blog/*" element={<SimplePage />} />
                  <Route path="/careers" element={<SimplePage />} />
                  <Route path="/partners" element={<SimplePage />} />
                  <Route path="/press" element={<SimplePage />} />
                  <Route path="/case-studies" element={<SimplePage />} />
                  <Route path="/research-development" element={<SimplePage />} />
                  <Route path="/docs" element={<SimplePage />} />
                  <Route path="/api" element={<SimplePage />} />
                  <Route path="/developer" element={<SimplePage />} />
                  <Route path="/help" element={<SimplePage />} />
                  <Route path="/training" element={<SimplePage />} />
                  <Route path="/community" element={<SimplePage />} />
                  <Route path="/support" element={<SimplePage />} />
                  <Route path="/sitemap" element={<SimplePage />} />
                  <Route path="/comprehensive-sitemap" element={<SimplePage />} />
                  <Route path="/privacy-policy" element={<SimplePage />} />
                  <Route path="/terms-of-service" element={<SimplePage />} />
                  <Route path="/cookie-policy" element={<SimplePage />} />
                  <Route path="/request-quote" element={<SimplePage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/analytics" element={<AnalyticsDashboard />} />
                  <Route path="/monitoring" element={<PerformanceMonitor />} />
                  <Route path="/services-showcase" element={<ComprehensiveServicesShowcase />} />
                  <Route path="*" element={<SimplePage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </AccessibilityEnhancer>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
