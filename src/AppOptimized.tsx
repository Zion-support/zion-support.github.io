import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import SEOHead from './components/SEOHead';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';
import App from '../App';

const AppOptimized: React.FC = () => {
  // Initialize performance monitoring
  usePerformanceMonitor();

  return (
    <ErrorBoundary>
      <Router>
        <SEOHead />
        <AccessibilityEnhancer />
        <App />
      </Router>
    </ErrorBoundary>
  );
};

export default AppOptimized;