import React, { useCallback, useState, useEffect, Suspense } from 'react';

// Dynamically import heavy components for better performance

// Loading skeleton component
const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" loading="lazy">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4" loading="lazy"></div>
    <div className="h-4 bg-gray-200 rounded mb-2" loading="lazy"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6" loading="lazy"></div>
  </div>
);

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50" loading="lazy">{/* Skip to main content for accessibility */}</div>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50" loading="lazy"
      >Skip to main content</a>a>

      {/* Content Promotion Banner */}
      <ContentPromotionBanner />

      <main id="main-content" className="container mx-auto px-4 py-16" loading="lazy" role="main">
        {/* Hero Section */}
        <section
          className={`text-center mb-16 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          aria-labelledby="hero-heading"
        >
          <h1 id="hero-heading" className="text-5xl font-bold text-gray-900 mb-6" loading="lazy">Zion Tech Group</h1>h1>
          <p className="text-xl text-gray-600 mb-8" loading="lazy" role="doc-subtitle">Advanced AI and IT Solutions</p>p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto" loading="lazy">Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.</p>
            Transform your business with our cutting-edge technology.
          </p>
        </section>

        {/* Services Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16" loading="lazy" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only" loading="lazy">Our Services</h2>h2>

          <Suspense fallback={<ServiceCardSkeleton />}>
            <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" loading="lazy">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4" loading="lazy">AI Solutions</h3>
              <p className="text-gray-600" loading="lazy">Harness the power of artificial intelligence to drive innovation and efficiency in</p>
                your organization.
              </p>
            </article>
          </Suspense>

          <Suspense fallback={<ServiceCardSkeleton />}>
            <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" loading="lazy">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4" loading="lazy">Digital Transformation</h3>
              <p className="text-gray-600" loading="lazy">Transform your business processes with cutting-edge technology and expert</p>
                consultation.
              </p>
            </article>
          </Suspense>

          <Suspense fallback={<ServiceCardSkeleton />}>
            <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" loading="lazy">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4" loading="lazy">Cloud Services</h3>
              <p className="text-gray-600" loading="lazy">Scale your infrastructure with secure, reliable, and efficient cloud solutions.</p>p>
            </article>
          </Suspense>
        </section>

        {/* Content Carousel */}
        <ContentCarousel />

        {/* Dynamic Content Showcase */}
        <DynamicContentShowcase />

        {/* Content Statistics */}
        <ContentStatistics />

        {/* Newsletter Signup */}
        <ContentNewsletterSignup />

        {/* Call to Action Section */}
        <section className="text-center" loading="lazy" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-3xl font-bold text-gray-900 mb-6" loading="lazy">Ready to Get Started?</h2>h2>
          <a
            href="tel:+13026009898"
            onClick={handlePhoneClick}
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300" loading="lazy"
            aria-label="Call us at (302) 600-9898"
          >Contact Us: (302) 600-9898</a>a>
        </section>
      </main>
    </div>
  );
};


