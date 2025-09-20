import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import PerformanceMonitor from "./components/PerformanceMonitor";
import EnhancedPerformanceMonitor from "./components/EnhancedPerformanceMonitor";
import BundleAnalyzer from "./components/BundleAnalyzer";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import LoadingSpinner from "./components/LoadingSpinner";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import EnhancedAccessibility from "./components/EnhancedAccessibility";
import EnhancedSEO from "./components/EnhancedSEO";
import ErrorBoundary from "./components/ErrorBoundary";
import SecurityMonitor from "./components/SecurityMonitor";
// Lazy load components for better performance
const LazyHome = React.lazy(() => import('./components/Home'));
const LazyServices = React.lazy(() => import('./components/Services'));
const LazyAbout = React.lazy(() => import('./components/About'));
const LazyContact = React.lazy(() => import('./components/Contact'));
const LazyDashboard = React.lazy(() => import('./components/InteractiveDashboard'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <EnhancedSEO />
        <SecurityMonitor />
        <AccessibilityEnhancer>
          <PerformanceMonitor />
          <EnhancedPerformanceMonitor />
          <BundleAnalyzer />
          <React.Suspense fallback={
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
              <LoadingSpinner size="lg" text="Loading application..." />
            </div>
          }>
            <Routes>
              <Route path="/" element={<LazyHome />} />
              <Route path="/services" element={<LazyServices />} />
              <Route path="/about" element={<LazyAbout />} />
              <Route path="/contact" element={<LazyContact />} />
              <Route path="/dashboard" element={<LazyDashboard />} />
            </Routes>
          </React.Suspense>
          <PerformanceOptimizer />
          <EnhancedAccessibility />
        </AccessibilityEnhancer>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
