import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
=======
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import LoadingSpinner from './app/components/LoadingSpinner';
>>>>>>> cursor/analyze-improve-and-deploy-application-3b5b
  );
}

export default App;