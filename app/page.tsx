import React, { Suspense } from 'react';
import Link from 'next/link';

// Lazy load components for better performance
const UnifiedContentPromotion = React.lazy(() => import('./components/UnifiedContentPromotion'));
const InteractiveAIROICalculator = React.lazy(() => import('./components/InteractiveAIROICalculator'));
const ContentShowcase = React.lazy(() => import('./components/ContentShowcase'));
const InteractiveContentShowcase2026 = React.lazy(() => import('./components/InteractiveContentShowcase2026'));

// Loading fallback component
const LoadingFallback = ({ height = 'h-32' }: { height?: string }) => (
  <div className={`animate-pulse bg-gray-200 ${height} rounded flex items-center justify-center`}>
    <div className="text-gray-500">Loading...</div>
  </div>
);

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            AI-Powered Enterprise Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI technology. Achieve 300% ROI, 
            70% cost reduction, and 90% efficiency gains with our proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Unified Content Promotion */}
        <Suspense fallback={<LoadingFallback height="h-32" />}>
          <UnifiedContentPromotion />
        </Suspense>

        {/* Interactive AI ROI Calculator */}
        <section className="my-16">
          <Suspense fallback={<LoadingFallback height="h-64" />}>
            <InteractiveAIROICalculator />
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
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-2xl text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl mb-8">
              Join hundreds of companies already achieving 300% ROI with our AI
              solutions.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 inline-block"
            >
              Start Your Transformation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}