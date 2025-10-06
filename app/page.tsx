import { Suspense, lazy } from 'react';
import Link from 'next/link';

// Lazy load heavy components - temporarily disabled
// const UnifiedContentPromotion = lazy(
//   () => import('./components/UnifiedContentPromotion'),
// );
// const InteractiveAIROICalculator = lazy(
//   () => import('./components/InteractiveAIROICalculator'),
// );
// const ContentShowcase = lazy(() => import('./components/ContentShowcase'));
// const InteractiveContentShowcase2026 = lazy(
//   () => import('./components/InteractiveContentShowcase2026'),
// );

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
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> ad3f5667eee57a9969ff433042f2200dd6375572

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <main id="main-content" className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Pioneering the future with advanced AI and IT solutions that transform businesses and drive innovation
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> ad3f5667eee57a9969ff433042f2200dd6375572
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </main>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Unified Content Promotion - temporarily disabled */}
        {/* <Suspense fallback={<LoadingFallback height="h-32" />}>
          <UnifiedContentPromotion />
        </Suspense> */}

        {/* Interactive AI ROI Calculator - temporarily disabled */}
        {/* <section className="my-16">
          <Suspense fallback={<LoadingFallback height="h-64" />}>
            <InteractiveAIROICalculator />
        {/* Main Content */}
        <main className="container mx-auto px-4 py-16">
          {/* Unified Content Promotion */}
          <Suspense fallback={<LoadingFallback height="h-32" />}>
            <UnifiedContentPromotion />
          </Suspense>
        </section> */}

        {/* Content Showcase - temporarily disabled */}
        {/* <section className="my-16">
          <Suspense fallback={<LoadingFallback height="h-48" />}>
        {/* Content Showcase */}
        <section className='my-16'>
          <Suspense fallback={<LoadingFallback height='h-48' />}>
            <ContentShowcase />
          </Suspense>
        </section> */}

        {/* Interactive Content Showcase 2026 - temporarily disabled */}
        {/* <section className="my-16">
          <Suspense fallback={<LoadingFallback height="h-48" />}>
            <InteractiveContentShowcase2026 />
          </Suspense>
        </section> */}
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
    </div>
            
            <div className="max-w-6xl mx-auto">
              {/* Hero Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Expert Team</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>

              {/* Services Section */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                  Our Services
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="group p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-50 to-white">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      AI Solutions
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Cutting-edge artificial intelligence solutions including machine learning, natural language processing, and computer vision to revolutionize your business operations.
                    </p>
                  </div>
                  
                  <div className="group p-6 border border-gray-200 rounded-xl hover:border-green-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-green-50 to-white">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      IT Services
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, and 24/7 technical support for seamless operations.
                    </p>
                  </div>
                  
                  <div className="group p-6 border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-purple-50 to-white">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Development
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Custom software development, mobile apps, web applications, and digital transformation solutions tailored to your specific business requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-lg mb-8 opacity-90">
                    Let's discuss how our AI and IT solutions can drive your success
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Get Started
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
          
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
>>>>>>> ad3f5667eee57a9969ff433042f2200dd6375572
            </div>
          </section>
        </main>
      </div>
    </>
  );
}