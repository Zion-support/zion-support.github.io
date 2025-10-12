<<<<<<< HEAD
<<<<<<< HEAD
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';


// Main App Component;
function App() {
  return (
            <Suspense fallback={<LoadingSpinner />}>

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title>App - Zion Tech Group</title>
        <meta name="description" content="Professional app services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">App</h1>
          <p className="text-lg text-gray-300 mb-8">Professional app services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
// Lazy load components for better performance
const Home = lazy(() => import('./page'));
const About = lazy(() => import('./about/page'));
const Services = lazy(() => import('./services/page'));
const Contact = lazy(() => import('./contact/page'));
const NotFound = lazy(() => import('./not-found/page'));
// Error fallback component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>Content</div>
  );
    <div className = "min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
        <p className="text-gray-300 mb-4">{error.message}</p>
        <button >
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          Try again
        </button>
      </div>
    </div>;
  );
}
function App() {
  return (
    <div>Content</div>
  );
    <HelmetProvider >
      <ErrorBoundary FallbackComponent = {ErrorFallback}>
        <Router >
          <div className="App">
            <Suspense fallback={              <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="text-white">Loading...</div>
              </div>
            }>
              <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>;
  );
}
export default App;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
