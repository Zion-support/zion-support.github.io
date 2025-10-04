import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import PerformanceMonitor from './components/PerformanceMonitor';
import SEOHead from './components/SEOHead';

// Lazy load components for better performance
const NewContentPromotionalBanner2026 = lazy(() => import('./components/NewContentPromotionalBanner2026'));

const HomePage = React.memo(function HomePage() {
  return (
    <ErrorBoundary>
      <SEOHead />
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/images/hero-bg.jpg" as="image" />
      <main role="main">
      {/* Hero Section */}
      <section 
        className="text-center py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 
            id="hero-heading"
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              {' '}AI-Powered Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
            and enterprise IT solutions that drive growth, efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            role="region"
            aria-label="Company Statistics"
          >
            <div className="stat-item">
              <div className="text-3xl font-bold text-blue-600" aria-label="500 plus projects delivered">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-bold text-blue-600" aria-label="99.9 percent uptime guarantee">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-bold text-blue-600" aria-label="24/7 expert support">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-bold text-blue-600" aria-label="2 million plus cost savings">$2M+</div>
              <div className="text-gray-600">Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured New Content Section */}
      <section 
        className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600"
        aria-labelledby="featured-content-heading"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold mb-4">
              <span className="text-2xl mr-2" aria-hidden="true">✨</span>
              JUST PUBLISHED — October 2025
            </div>
            <h2 
              id="featured-content-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Latest AI Transformation Success Stories
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Real-world implementations delivering millions in savings and unprecedented accuracy
            </p>
          </div>
          
          {/* Lazy load the promotional banner */}
          <Suspense fallback={
            <div className="flex justify-center items-center py-20">
              <LoadingSpinner />
            </div>
          }>
            <NewContentPromotionalBanner2026 />
          </Suspense>
        </div>
      </section>
      </main>
      <PerformanceMonitor />
    </ErrorBoundary>
  );
});

export default HomePage;
