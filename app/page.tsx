import { Suspense, lazy } from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet-async';

// Lazy load heavy components
const UnifiedContentPromotion = lazy(
  () => import('./components/UnifiedContentPromotion'),
);
const InteractiveAIROICalculator = lazy(
  () => import('./components/InteractiveAIROICalculator'),
);
const ContentShowcase = lazy(() => import('./components/ContentShowcase'));
const InteractiveContentShowcase2026 = lazy(
  () => import('./components/InteractiveContentShowcase2026'),
);

// Loading component for Suspense fallback
const LoadingFallback = ({ height = 'h-32' }: { height?: string }) => (
  <div className={`${height} bg-gray-200 animate-pulse rounded`}></div>
);

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Advanced AI and IT Solutions',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
    },
    offers: {
      '@type': 'Offer',
      description: 'AI Enterprise Transformation Services',
      price: '300% ROI Guaranteed',
      priceCurrency: 'USD',
    },
  };

  return (
    <div>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions. We deliver cutting-edge technology services to transform your business." />
        <meta name="keywords" content="AI, artificial intelligence, IT solutions, enterprise automation, business intelligence" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Advanced AI & IT Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence and IT solutions. 
              We deliver enterprise-grade automation, business intelligence, and digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <Suspense fallback={<LoadingFallback height="h-64" />}>
        <UnifiedContentPromotion />
      </Suspense>

      <Suspense fallback={<LoadingFallback height="h-96" />}>
        <InteractiveAIROICalculator />
      </Suspense>

      <Suspense fallback={<LoadingFallback height="h-80" />}>
        <ContentShowcase />
      </Suspense>

      <Suspense fallback={<LoadingFallback height="h-96" />}>
        <InteractiveContentShowcase2026 />
      </Suspense>
    </div>
  );
}