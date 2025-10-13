import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
import './app/styles/futuristic-enhanced.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import ErrorBoundary from './app/components/ErrorBoundary';
import Breadcrumb from './app/components/Breadcrumb';
import PerformanceOptimizer from './app/components/EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import { AnalyticsProvider } from './app/components/EnhancedAnalytics';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import FuturisticBackground from './app/components/FuturisticBackground';

// Import pages directly for now
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <AnalyticsProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <FuturisticBackground />
            <ErrorBoundary>
              <Navigation />
              <Breadcrumb />
              <main className="relative z-10">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                </Routes>
              </main>
              <Footer />
            </ErrorBoundary>
            <PerformanceOptimizer />
            <AccessibilityEnhancer />
            <PerformanceMonitor />
          </div>
        </Router>
      </AnalyticsProvider>
    </HelmetProvider>
  );
};

export default App;