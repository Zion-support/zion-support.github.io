import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';

// Lazy load heavy components
const UnifiedContentPromotion = lazy(() => import('./components/UnifiedContentPromotion'));
const InteractiveAIROICalculator = lazy(() => import('./components/InteractiveAIROICalculator'));
const ContentShowcase = lazy(() => import('./components/ContentShowcase'));
const InteractiveContentShowcase2026 = lazy(() => import('./components/InteractiveContentShowcase2026'));

// Loading component
const LoadingSpinner = () => (
  <div className="animate-pulse bg-gray-200 h-32 rounded flex items-center justify-center">
    <div className="text-gray-500">Loading...</div>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Enterprise
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Transformation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains with our 
              AI-powered enterprise solutions and autonomous systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<LoadingSpinner />}>
            <UnifiedContentPromotion />
          </Suspense>
        </div>
      </section>

      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<LoadingSpinner />}>
            <InteractiveAIROICalculator />
          </Suspense>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<LoadingSpinner />}>
            <ContentShowcase />
          </Suspense>
        </div>
      </section>

      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<LoadingSpinner />}>
            <InteractiveContentShowcase2026 />
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ enterprises already achieving remarkable results with our AI solutions.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            Start Your AI Journey
          </Link>
        </div>
      </section>
    </div>
  );
}