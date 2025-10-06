import { Suspense, lazy } from 'react';
import Link from 'next/link';
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
    description:
      'Leading provider of AI-powered enterprise solutions and digital transformation services',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: 'Wilmington',
      addressRegion: 'DE',
    },
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
    ],
    offers: {
      '@type': 'Offer',
      description: 'AI Enterprise Transformation Services',
      price: '300% ROI Guaranteed',
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className='container mx-auto px-4 py-16'>
        {/* Unified Content Promotion */}
        <Suspense fallback={<LoadingFallback height='h-32' />}>
          <UnifiedContentPromotion />
        </Suspense>
        {/* Interactive AI ROI Calculator */}
        <section className='my-16'>
          <Suspense fallback={<LoadingFallback height='h-64' />}>
            <InteractiveAIROICalculator />
          </Suspense>
        </section>
        {/* Content Showcase */}
        <section className='my-16'>
          <Suspense fallback={<LoadingFallback height='h-48' />}>
            <ContentShowcase />
          </Suspense>
        </section>
        {/* Interactive Content Showcase 2026 */}
        <section className='my-16'>
          <Suspense fallback={<LoadingFallback height='h-48' />}>
            <InteractiveContentShowcase2026 />
          </Suspense>
        </section>
        {/* CTA Section */}
        <section className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-2xl text-center'>
          <div className='max-w-3xl mx-auto px-4'>
            <h2 className='text-4xl font-bold mb-6'>
              Ready to Transform Your Enterprise?
            </h2>
            <p className='text-xl mb-8'>
              Join hundreds of companies already achieving 300% ROI with our AI
              solutions.
            </p>
            <Link
              href='/contact'
              className='bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 inline-block'
            >
              Start Your Transformation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}