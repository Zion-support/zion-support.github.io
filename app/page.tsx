import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';

// Lazy load heavy components
const LazyServicesSection = lazy(() => import('./components/LazyServicesSection'));
const LazyAIToolsSection = lazy(() => import('./components/LazyAIToolsSection'));

const HomePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI and IT solutions for modern businesses",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 302 464 0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta name="keywords" content="AI solutions, IT services, cloud infrastructure, digital transformation, machine learning, artificial intelligence" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI and IT solutions for modern businesses." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container-responsive py-12">
          <div className="text-center">
            <h1 className="text-responsive-xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-responsive text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-responsive bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center">
                Get Started
              </a>
              <a href="/about" className="btn-responsive border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center">
                Learn More
              </a>
            </div>
          </div>
          
          {/* Services Preview */}
          <Suspense fallback={<div className="mt-20 text-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div></div>}>
            <LazyServicesSection />
          </Suspense>
          
          {/* AI Tools Preview */}
          <Suspense fallback={<div className="mt-20 text-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div></div>}>
            <LazyAIToolsSection />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default HomePage;