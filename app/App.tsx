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