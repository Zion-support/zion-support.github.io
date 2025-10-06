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

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion Tech Group",
  "description": "Leading provider of enterprise AI solutions, quantum computing, and autonomous systems",
  "url": "https://ziontechgroup.com",
  "logo": "https://ziontechgroup.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-302-464-0950",
    "contactType": "customer service",
    "email": "kleber@ziontechgroup.com"
  }
};

const HomePage: React.FC = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading provider of AI-powered enterprise solutions and digital transformation services',
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
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US',
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
    ],
    offers: {
      '@type': 'Offer',
      name: 'AI Enterprise Transformation Services',
      description: 'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
      price: '50000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology." />
        <meta name="keywords" content="AI solutions, enterprise technology, quantum computing, autonomous systems, business intelligence" />
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Pioneering the future with advanced AI and IT solutions that transform businesses and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
              >
                View Services
              </Link>
            </div>
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
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 inline-block"
            >
              Start Your Transformation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;