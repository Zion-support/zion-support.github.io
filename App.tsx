'use client';
import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/globals.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import { PageLoader } from './app/components/LoadingStates';
import ErrorBoundary from './app/components/ErrorBoundary';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(() => import('./app/5g-data-analytics/page'));
const FiveGEdgeComputingPage = React.lazy(() => import('./app/5g-edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
const FiveGIoTSolutionsPage = React.lazy(() => import('./app/5g-iot-solutions/page'));
const FiveGMobileApplicationsPage = React.lazy(() => import('./app/5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = React.lazy(() => import('./app/5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = React.lazy(() => import('./app/5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = React.lazy(() => import('./app/5g-smart-city-solutions/page'));
const FiveGSolutionsPage = React.lazy(() => import('./app/5g-solutions/page'));

// Main App Component
function App() {
  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            <main>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  
                  {/* 5G Solutions Routes */}
                  <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                  <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                  <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                  <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                  <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                  <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                  <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                  <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;
