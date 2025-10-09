'use client';

import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from './Router';

// Utils
import { performanceOptimizer, performanceMonitor } from './utils/performanceUtils';
import { seoOptimizer } from './utils/seoUtils';
import { accessibilityEnhancer } from './utils/accessibilityUtils';
import { collectPerformanceMetrics } from './utils/performanceUtils';

// Enhanced Components
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import UserExperienceEnhancer from './components/UserExperienceEnhancer';
import SecurityEnhancer from './components/SecurityEnhancer';

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      performanceOptimizer();
      performanceMonitor();
      seoOptimizer();
      accessibilityEnhancer();
      collectPerformanceMetrics();
    }
  }, []);

  return (
    <HelmetProvider>
      <div className="App">
        {/* Enhanced Components */}
        <PerformanceOptimizer />
        <SEOOptimizer />
        <AccessibilityEnhancer />
        <UserExperienceEnhancer />
        <SecurityEnhancer />
        
        {/* Main App Content with Router */}
        <AppRouter />
      </div>
    </HelmetProvider>
  );
};

export default App;