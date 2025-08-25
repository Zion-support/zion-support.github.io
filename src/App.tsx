import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load only the pages we know work
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServices'));

// Enhanced loading component with skeleton
const PageLoader = () => (
  <div className="loading-overlay">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
      <p className="text-lg">Loading amazing content...</p>
    </div>
  </div>
);

const baseRoutes = [
  { path: '/', element: <MicroSaasServicesPage /> },
  { path: '/micro-saas-services', element: <MicroSaasServicesPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/comprehensive-services', element: <ComprehensiveServicesPage /> },
];

function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {baseRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        
        {/* Enhanced user experience components */}
        <PerformanceOptimizer />
        <AccessibilityEnhancer />
      </div>
    </ErrorBoundary>
  );
}

export default App;