import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import { AnalyticsProvider } from './app/contexts/AnalyticsContext';
// import PerformanceOptimizer from './app/components/PerformanceOptimizer';
// import EnhancedSEO from './app/components/EnhancedSEO';
// import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
// import ErrorBoundary from './app/components/ErrorBoundary';
// import LoadingStates from './app/components/LoadingStates';

// import PerformanceMonitor from './app/components/PerformanceMonitor';
// import MetaManager from './app/components/MetaManager';
// import EnhancedAnalytics from './app/components/EnhancedAnalytics';
// import AdvancedLoadingStates from './app/components/AdvancedLoadingStates';

// Pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';

const App: React.FC = () => {

  return (
    <HelmetProvider>
      <AnalyticsProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            <main className="relative z-10" id="main-content" role="main">
              <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
              </div>}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </AnalyticsProvider>
    </HelmetProvider>
  );
};

export default App;