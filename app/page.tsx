import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Lazy load components for better performance
const ContentShowcase = lazy(() => import('./components/ContentShowcase'));
const InteractiveContentShowcase2026 = lazy(() => import('./components/InteractiveContentShowcase2026'));
const InteractiveAIROICalculator = lazy(() => import('./components/InteractiveAIROICalculator'));
const UnifiedContentPromotion = lazy(() => import('./components/UnifiedContentPromotion'));

// Loading fallback component
const LoadingFallback: React.FC<{ height?: string }> = ({ height = 'h-32' }) => (
  <div className={`animate-pulse bg-gray-200 rounded-lg ${height} w-full`} />
);

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology." />
        <meta name="keywords" content="AI solutions, enterprise technology, quantum computing, autonomous systems, business intelligence" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Advanced AI Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Transform your enterprise with cutting-edge AI technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-16">
          {/* Unified Content Promotion */}
          <section className="my-16">
            <Suspense fallback={<LoadingFallback height="h-32" />}>
              <UnifiedContentPromotion />
            </Suspense>
          </section>

          {/* Content Showcase */}
          <section className="my-16">
            <Suspense fallback={<LoadingFallback height="h-48" />}>
              <ContentShowcase />
            </Suspense>
          </section>

          {/* Interactive Content Showcase 2026 */}
          <section className="my-16">
            <Suspense fallback={<LoadingFallback height="h-48" />}>
              <InteractiveContentShowcase2026 />
            </Suspense>
          </section>

          {/* Interactive AI ROI Calculator */}
          <section className="my-16">
            <Suspense fallback={<LoadingFallback height="h-64" />}>
              <InteractiveAIROICalculator />
            </Suspense>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-2xl text-center">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl mb-8">
                Join hundreds of companies already achieving 300% ROI with our AI solutions.
              </p>
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 inline-block"
              >
                Start Your Transformation
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;