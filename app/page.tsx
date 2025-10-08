import React, { useCallback, useState, useEffect, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Loading skeleton component
const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Analytics tracking for phone clicks
  const handlePhoneClick = useCallback(() => {
    if (
      typeof window !== 'undefined' &&
      (
        window as unknown as {
          gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void;
        }
      ).gtag
    ) {
      (
        window as unknown as {
          gtag: (command: string, action: string, parameters: Record<string, unknown>) => void;
        }
      ).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number',
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Enterprise Technology</title>
        <meta 
          name="description" 
          content="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with cutting-edge technology. Contact us at (302) 464-0950." 
        />
        <meta 
          name="keywords" 
          content="AI solutions, enterprise AI, quantum computing, autonomous systems, digital transformation, automation, cloud services, AI consulting, business intelligence, machine learning, Zion Tech Group" 
        />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with cutting-edge technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "description": "Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "Customer Service",
              "areaServed": "US",
              "availableLanguage": "en"
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
              "https://twitter.com/ziontechgroup",
              "https://linkedin.com/company/ziontechgroup"
            ],
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "industry": "Technology",
            "services": [
              "AI Solutions",
              "Digital Transformation", 
              "Cloud Services",
              "Automation",
              "Business Intelligence",
              "Quantum Computing",
              "Autonomous Systems"
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {/* Content Promotion Banner */}
        <Suspense fallback={<div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-600 animate-pulse"></div>}>
          <ContentPromotionBanner />
        </Suspense>

      <main id="main-content" className="container mx-auto px-4 py-16" role="main">
        {/* Hero Section */}
        <section
          className={`text-center mb-16 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          aria-labelledby="hero-heading"
        >
          <h1 id="hero-heading" className="text-5xl font-bold text-gray-900 mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8" role="doc-subtitle">
            Advanced AI and IT Solutions
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
            Transform your business with our cutting-edge technology.
          </p>
        </section>

        {/* Services Section */}
        <section className="mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Services</h3>
                <p className="text-gray-600 mb-4">
                  Advanced artificial intelligence solutions including ML, NLP, and computer vision.
                </p>
                <div className="text-lg font-semibold text-blue-600">Starting at $1,500/month</div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quantum Computing</h3>
                <p className="text-gray-600 mb-4">
                  Next-generation quantum computing capabilities for complex problem solving.
                </p>
                <div className="text-lg font-semibold text-purple-600">Custom Pricing</div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Autonomous Systems</h3>
                <p className="text-gray-600 mb-4">
                  Self-managing and self-optimizing systems for enterprise operations.
                </p>
                <div className="text-lg font-semibold text-green-600">Starting at $2,500/month</div>
              </article>
            </Suspense>
          </div>
          
          <div className="text-center">
            <a 
              href="/services"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              View All Services
            </a>
          </div>
        </section>

        {/* Content Carousel */}
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-2xl"></div>}>
          <ContentCarousel />
        </Suspense>

        {/* Dynamic Content Showcase */}
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-2xl"></div>}>
          <DynamicContentShowcase />
        </Suspense>

        {/* Content Statistics */}
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-2xl"></div>}>
          <ContentStatistics />
        </Suspense>

        {/* Newsletter Signup */}
        <Suspense fallback={<div className="h-64 bg-gradient-to-r from-indigo-600 to-purple-600 animate-pulse rounded-2xl"></div>}>
          <ContentNewsletterSignup />
        </Suspense>

        {/* Call to Action Section */}
        <section className="text-center" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <a
            href="tel:+13024640950"
            onClick={handlePhoneClick}
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            aria-label="Call us at (302) 464-0950"
          >
            Contact Us: (302) 464-0950
          </a>
        </section>
      </main>
      </div>
    </>
  );
};

export default HomePage;
