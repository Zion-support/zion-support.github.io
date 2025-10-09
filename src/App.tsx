import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load components for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const MicroSAASPage = lazy(() => import('./pages/MicroSAASPage'));

// Import utility components
import PerformanceEnhancer from './utils/performanceEnhancer';
import SEOEnhancer from './utils/seoEnhancer';
import AccessibilityEnhancer from './utils/accessibilityEnhancer';
import SecurityEnhancer from './utils/securityEnhancer';
import UserExperienceEnhancer from './utils/userExperienceEnhancer';

// Import global styles
import '../app/globals.css';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize performance enhancements
    PerformanceEnhancer.init();
    SEOEnhancer.init();
    AccessibilityEnhancer.init();
    SecurityEnhancer.init();
    UserExperienceEnhancer.init();

    // Mark as loaded
    setIsLoaded(true);

    // Cleanup on unmount
    return () => {
      PerformanceEnhancer.cleanup();
      SEOEnhancer.cleanup();
      AccessibilityEnhancer.cleanup();
      SecurityEnhancer.cleanup();
      UserExperienceEnhancer.cleanup();
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading Zion Tech Group...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Suspense fallback={
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white text-lg">Loading...</p>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/micro-saas" element={<MicroSAASPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;