import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./app/Home'));
const About = React.lazy(() => import('./app/about'));
const Services = React.lazy(() => import('./app/services'));
const Contact = React.lazy(() => import('./app/contact'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-slate-900 text-white">
          <ErrorBoundary>
            <PerformanceMonitor>
              <AccessibilityEnhancer>
                <Navigation />
                <main className="flex-1">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="*" element={<div>404 - Page Not Found</div>} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </AccessibilityEnhancer>
            </PerformanceMonitor>
          </ErrorBoundary>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;