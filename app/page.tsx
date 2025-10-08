import React, { useCallback, useState, useEffect, Suspense, lazy } from 'react';

// Import components
import ContentPromotionBanner from './components/ContentPromotionBanner';
import ContentCarousel from './components/ContentCarousel';
import DynamicContentShowcase from './components/DynamicContentShowcase';
import ContentStatistics from './components/ContentStatistics';
import ContentNewsletterSignup from './components/ContentNewsletterSignup';

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
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
          className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded && isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          aria-labelledby="hero-heading"
        >
          <h1 
            id="hero-heading" 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium" role="doc-subtitle">
            Advanced AI and IT Solutions
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
            Transform your business with our cutting-edge technology and achieve unprecedented growth.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
            >
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business operations
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-5xl mb-6 text-center">🤖</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">AI Services</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Starting at $1,500/month</div>
                  <a href="/ai-services" className="text-blue-600 hover:text-blue-700 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-5xl mb-6 text-center">⚛️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Quantum Computing</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Next-generation quantum computing capabilities for complex problem solving and optimization.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">Custom Pricing</div>
                  <a href="/quantum-computing" className="text-purple-600 hover:text-purple-700 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-5xl mb-6 text-center">🔄</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Autonomous Systems</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Self-managing and self-optimizing systems for enterprise operations and infrastructure.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">Starting at $2,500/month</div>
                  <a href="/autonomous-systems" className="text-green-600 hover:text-green-700 font-medium">
                    Learn More →
                  </a>
                </div>
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
        <ContentCarousel />

        {/* Dynamic Content Showcase */}
        <DynamicContentShowcase />

        {/* Content Statistics */}
        <ContentStatistics />

        {/* Newsletter Signup */}
        <ContentNewsletterSignup />

        {/* Call to Action Section */}
        <section className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-12" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of enterprises that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
