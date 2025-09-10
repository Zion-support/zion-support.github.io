<<<<<<< HEAD
import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// For now, we'll use simple components until pages are created
const HomePage = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Zion Tech Group</h1>
      <p className="text-xl text-gray-300">Advanced AI & Technology Solutions</p>
=======
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Services = React.lazy(() => import('./pages/Services'));

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-cyan-500/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-500 font-bold text-lg">
        ZION
      </div>
      <div className="mt-4 text-center">
        <div className="text-cyan-500 text-sm animate-pulse">Loading amazing experiences...</div>
      </div>
>>>>>>> 51ecdee898e0f4ef436b73e6c8197c3d4a98485c
    </div>
  </div>
);

<<<<<<< HEAD
const ServicesPage = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="text-xl text-gray-300">Comprehensive technology solutions</p>
    </div>
  </div>
);

const SolutionsPage = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Solutions</h1>
      <p className="text-xl text-gray-300">Innovative technology solutions</p>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-xl text-gray-300">Learn about our mission and values</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-xl text-gray-300">Get in touch with our team</p>
    </div>
  </div>
);

const PricingPage = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Pricing</h1>
      <p className="text-xl text-gray-300">Flexible pricing options</p>
    </div>
  </div>
);

const NotFoundPage = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-300">The page you're looking for doesn't exist</p>
    </div>
  </div>
);

// Service Pages
const AISolutions = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">AI Solutions</h1>
      <p className="text-xl text-gray-300">Advanced artificial intelligence services</p>
    </div>
  </div>
);

const QuantumComputing = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Quantum Computing</h1>
      <p className="text-xl text-gray-300">Next-generation quantum solutions</p>
    </div>
  </div>
);

const Cybersecurity = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Cybersecurity</h1>
      <p className="text-xl text-gray-300">Advanced security solutions</p>
    </div>
  </div>
);

// Enhanced loading component with accessibility
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900" role="status" aria-label="Loading page">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4" aria-hidden="true"></div>
      <p className="text-gray-400">Loading...</p>
      <span className="sr-only">Please wait while the page loads</span>
    </div>
  </div>
);

// Enhanced error fallback component with better UX
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900" role="alert">
    <div className="text-center max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold text-red-500 mb-4">Something went wrong</h2>
      <p className="text-gray-400 mb-4">We apologize for the inconvenience. Please try again.</p>
      <details className="mb-4 text-left">
        <summary className="cursor-pointer text-gray-300 hover:text-white">Technical Details</summary>
        <pre className="text-gray-400 text-sm mt-2 p-2 bg-gray-800 rounded overflow-auto">{error.message}</pre>
      </details>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Try loading the page again"
      >
        Try again
      </button>
    </div>
  </div>
);

export default function App() {
  // Performance monitoring and analytics
  useEffect(() => {
    // Track page load performance
    if (typeof window !== 'undefined' && 'performance' in window) {
      const loadTime = performance.now();
      console.log(`App loaded in ${loadTime.toFixed(2)}ms`);
      
      // Track Core Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then((vitals) => {
          if (vitals.onCLS) vitals.onCLS(console.log);
          if (vitals.onINP) vitals.onINP(console.log); // INP replaces FID
          if (vitals.onFCP) vitals.onFCP(console.log);
          if (vitals.onLCP) vitals.onLCP(console.log);
          if (vitals.onTTFB) vitals.onTTFB(console.log);
        });
      }
    }
  }, []);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/services/ai" element={<AISolutions />} />
            <Route path="/services/quantum" element={<QuantumComputing />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
=======
function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative">
          <main className="flex-1 relative z-10">
            <Suspense fallback={<EnhancedLoadingSpinner />}>
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/services" element={<Services />} />
                {/* Catch-all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
>>>>>>> 51ecdee898e0f4ef436b73e6c8197c3d4a98485c
