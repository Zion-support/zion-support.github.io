import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import PerformanceMonitor from "./components/PerformanceMonitor";
import LoadingSpinner from "./components/LoadingSpinner";
import EnhancedAccessibility from "./components/EnhancedAccessibility";
import SEOHead from "./components/SEOHead";
import ErrorBoundary from "./components/ErrorBoundary";
// Lazy load components for better performance
const LazyServices = React.lazy(() => import('./components/Services'));
const LazyAbout = React.lazy(() => import('./components/About'));
const LazyContact = React.lazy(() => import('./components/Contact'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <SEOHead />
        <PerformanceMonitor />
        <React.Suspense fallback={
          <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <LoadingSpinner size="lg" text="Loading application..." />
          </div>
        }>
          <Routes>
            <Route path="/" element={<div>Welcome to Zion Tech Group</div>} />
            <Route path="/services" element={<LazyServices />} />
            <Route path="/about" element={<LazyAbout />} />
            <Route path="/contact" element={<LazyContact />} />
          </Routes>
        </React.Suspense>
        <EnhancedAccessibility />
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;