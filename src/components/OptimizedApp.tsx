import React, { Suspense, lazy, useState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { motion } from 'framer-motion';

// Lazy load components for better performance
const UnifiedBannerSystem = lazy(() => import('./UnifiedBannerSystem'));
const EnhancedPerformanceMonitor = lazy(() => import('./EnhancedPerformanceMonitor'));
const SEOAccessibilityEnhancer = lazy(() => import('./SEOAccessibilityEnhancer'));

// Import banner configurations
import { getFeaturedBanners } from '../data/bannerConfigurations';

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// Error fallback component
const ErrorFallback: React.FC<{ error: Error; resetErrorBoundary: () => void }> = ({ 
  error,
  resetErrorBoundary 
}) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md mx-auto text-center p-6">
      <div className="text-red-600 text-6xl mb-4">⚠️</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
      <p className="text-gray-600 mb-4">We encountered an unexpected error. Please try refreshing the page.</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Try again
      </button>
      {process.env.NODE_ENV === 'development' && (
        <details className="mt-4 text-left">
          <summary className="cursor-pointer text-sm text-gray-500">Error details</summary>
          <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">{error.message}</pre>
        </details>
      )}
    </div>
  </div>
);

// Main content component
const MainContent: React.FC = () => {
  const [banners, setBanners] = useState(getFeaturedBanners(3));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Zion Tech Group</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Advanced AI and IT Solutions for the Future</p>
            <p className="text-lg mb-12 opacity-80">
              Transform your business with cutting-edge AI, quantum computing
              and autonomous systems. Experience the next generation of enterprise technology.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Explore Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Banners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our latest innovations and breakthrough technologies
            </p>
          </div>

          <Suspense fallback={<LoadingSpinner />}>
            <UnifiedBannerSystem
              banners={banners}
              autoRotate
              rotationInterval={6000}
              showNavigation
              maxVisible={3}
            />
          </Suspense>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">AI Solutions</h3>
              <p className="text-gray-600">
                Advanced artificial intelligence and machine learning solutions for enterprise applications.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Quantum Computing</h3>
              <p className="text-gray-600">
                Revolutionary quantum-enhanced computing platforms for unprecedented performance.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3">Automation</h3>
              <p className="text-gray-600">
                Complete automation suites for enterprise operations and workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

// Optimized App Component
const OptimizedApp: React.FC = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('Application Error: ', error, errorInfo);
        if (process.env.NODE_ENV === 'production') {
          // monitoring integration point
        }
      }}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <SEOAccessibilityEnhancer
          title="Zion Tech Group - Advanced AI and IT Solutions"
          description="Leading provider of AI-powered enterprise solutions, quantum computing, and autonomous systems. Transform your business with cutting-edge technology."
          keywords={["AI", "Artificial Intelligence", "Enterprise Solutions", "Quantum Computing", "Automation", "IT Services"]}
          canonicalUrl={typeof window !== 'undefined' ? window.location.href : undefined}
        />
      </Suspense>

      <MainContent />

      {/* Performance Monitoring */}
      <Suspense fallback={null}>
        <EnhancedPerformanceMonitor />
      </Suspense>
    </ErrorBoundary>
  );
};

export default OptimizedApp;