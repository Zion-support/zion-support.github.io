import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import LoadingSpinner from './app/components/LoadingSpinner';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./app/Home'));
const About = React.lazy(() => import('./app/about/About'));
const Services = React.lazy(() => import('./app/Services'));
const Contact = React.lazy(() => import('./app/Contact'));
const NotFound = React.lazy(() => import('./app/404'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-slate-50">
          <ErrorBoundary>
            <Navigation />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Footer />
            <PerformanceMonitor />
            <AccessibilityEnhancer />
            <EnhancedAccessibility />
          </ErrorBoundary>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;