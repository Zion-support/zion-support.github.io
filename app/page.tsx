import React, { useCallback, useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Dynamically import heavy components for better performance

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Content Promotion Banner */}
      <ContentPromotionBanner />

      <main id="main-content" className="container mx-auto px-4 py-16" role="main">
        {/* Hero Section */}
        <section
          className={`text-center mb-16 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          aria-labelledby="hero-heading"
        >
          <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Zion Tech Group
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8" role="doc-subtitle">
            Advanced AI and IT Solutions
          </p>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
            Transform your business with our cutting-edge technology and achieve unprecedented growth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ai-services"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Explore AI Services
            </a>
            <a
              href="/micro-saas"
              className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
            >
              View Micro SAAS
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">
            Our Services
          </h2>

          <Suspense fallback={<ServiceCardSkeleton />}>
            <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Solutions</h3>
              <p className="text-gray-600 mb-4">
                Harness the power of artificial intelligence to drive innovation and efficiency in
                your organization. From machine learning to computer vision, we deliver cutting-edge AI solutions.
              </p>
              <a href="/ai-services" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Learn More →
              </a>
            </article>
          </Suspense>

          <Suspense fallback={<ServiceCardSkeleton />}>
            <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">IT Services</h3>
              <p className="text-gray-600 mb-4">
                Transform your business processes with cutting-edge technology and expert
                consultation. Complete IT infrastructure and support solutions.
              </p>
              <a href="/it-services" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Learn More →
              </a>
            </article>
          </Suspense>

          <Suspense fallback={<ServiceCardSkeleton />}>
            <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Micro SAAS</h3>
              <p className="text-gray-600 mb-4">
                Innovative micro software-as-a-service solutions that scale your business
                with affordable, powerful tools.
              </p>
              <a href="/micro-saas" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Learn More →
              </a>
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
        <section className="text-center" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
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
      
      <Footer />
    </div>
  );
};

export default HomePage;
