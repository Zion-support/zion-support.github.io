import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.jsx';
import { ErrorBoundary } from 'react-error-boundary';

// Lazy load pages with better chunking
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const ComprehensiveServices = lazy(() => import('./pages/ComprehensiveServices.jsx'));
const ComprehensivePricing = lazy(() => import('./pages/ComprehensivePricing.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));

const LoadingSpinner = () => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-zion-purple border-t-transparent rounded-full animate-spin mx-auto mb-4" style={{ animationDelay: '-0.5s' }}></div>
      </div>
      <p className="text-zion-cyan text-lg font-medium">Loading Zion Tech Group...</p>
      <p className="text-zion-slate-light text-sm mt-2">Preparing your experience</p>
    </div>
  </div>
);

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center px-4">
    <div className="text-center max-w-md">
      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-zion-slate-light mb-6">
        We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
      </p>
      <div className="space-y-3">
        <button
          onClick={resetErrorBoundary}
          className="w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="w-full px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors"
        >
          Go Home
        </button>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <details className="mt-6 text-left">
          <summary className="text-zion-slate-light cursor-pointer">Error Details</summary>
          <pre className="mt-2 p-4 bg-zion-slate-dark rounded-lg text-xs text-red-400 overflow-auto">
            {error.message}
          </pre>
        </details>
      )}
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('App Error:', error, errorInfo);
        // You could send this to an error reporting service here
      }}
    >
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
          <AppHeader />
          <main className="flex-1 pt-16 lg:pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
                <Route path="/comprehensive-pricing" element={<ComprehensivePricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                {/* 404 route */}
                <Route path="*" element={
                  <div className="min-h-screen bg-futuristic flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-6xl font-bold text-zion-cyan mb-4">404</h1>
                      <p className="text-xl text-zion-slate-light mb-8">Page not found</p>
                      <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
                      >
                        Go Back
                      </button>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ChatAssistant />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;