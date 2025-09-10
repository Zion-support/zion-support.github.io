import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';

// Simple page components for now
const Home = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Zion Tech Group</h1>
      <p className="text-xl text-gray-300">Advanced AI & Technology Solutions</p>
    </div>
  </div>
);

const About = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-xl text-gray-300">Learn about our mission and values</p>
    </div>
  </div>
);

const Contact = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-xl text-gray-300">Get in touch with our team</p>
    </div>
  </div>
);

const Blog = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-xl text-gray-300">Latest insights and updates</p>
    </div>
  </div>
);

const FAQ = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">FAQ</h1>
      <p className="text-xl text-gray-300">Frequently asked questions</p>
    </div>
  </div>
);

const Privacy = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-xl text-gray-300">Your privacy is important to us</p>
    </div>
  </div>
);

const Terms = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
      <p className="text-xl text-gray-300">Terms and conditions</p>
    </div>
  </div>
);

const Sitemap = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
      <p className="text-xl text-gray-300">Site navigation</p>
    </div>
  </div>
);

const Services = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="text-xl text-gray-300">Comprehensive technology solutions</p>
    </div>
  </div>
);

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
    </div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
      <p className="text-gray-300 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <div className="App">
            <Suspense fallback={<EnhancedLoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/*" element={<Services />} />
                {/* Catch-all route for SPA routing */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;