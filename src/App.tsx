import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

// Lazy load only the pages we know work
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));

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
];

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="app">
          {/* Header */}
          <Header />
          
          {/* Hero Section for Home Page */}
          <Routes>
            <Route path="/" element={<HeroSection />} />
          </Routes>
          
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

          {/* Footer */}
          <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;