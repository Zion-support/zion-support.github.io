import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

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
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Content Promotion Banner */}
      <ContentPromotionBanner />

      <main id="main-content" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" role="main">
        {/* Hero Section */}
        <section
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          aria-labelledby="hero-heading"
        >
          <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Zion Tech Group
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8" role="doc-subtitle">
            Advanced AI and IT Solutions
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
            Transform your business with our cutting-edge technology.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12">
            <div className="bg-white bg-opacity-50 rounded-lg p-4 sm:p-6 hover:bg-opacity-70 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">AI-Powered Solutions</h3>
              <p className="text-xs sm:text-sm text-gray-600">Transform your business with cutting-edge artificial intelligence</p>
            </div>
            <div className="bg-white bg-opacity-50 rounded-lg p-4 sm:p-6 hover:bg-opacity-70 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Lightning Fast</h3>
              <p className="text-xs sm:text-sm text-gray-600">Optimized performance and rapid deployment</p>
            </div>
            <div className="bg-white bg-opacity-50 rounded-lg p-4 sm:p-6 hover:bg-opacity-70 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl mb-3">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Enterprise Security</h3>
              <p className="text-xs sm:text-sm text-gray-600">Bank-level security for your critical data</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Our Core Services
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <article className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus-within:ring-4 focus-within:ring-indigo-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤖</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">AI Solutions</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Harness the power of artificial intelligence to drive innovation and efficiency in
                your organization.
              </p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1 mb-3 sm:mb-4">
                <li>• Machine Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
              </ul>
              <div className="text-sm sm:text-base lg:text-lg font-semibold text-blue-600">Starting at $1,500/month</div>
            </article>

            <article className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus-within:ring-4 focus-within:ring-indigo-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔄</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Digital Transformation</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Transform your business processes with cutting-edge technology and expert
                consultation.
              </p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1 mb-3 sm:mb-4">
                <li>• Process Automation</li>
                <li>• Legacy System Modernization</li>
                <li>• Workflow Optimization</li>
                <li>• Change Management</li>
              </ul>
              <div className="text-sm sm:text-base lg:text-lg font-semibold text-green-600">Starting at $2,500/month</div>
            </article>

            <article className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus-within:ring-4 focus-within:ring-indigo-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">☁️</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Cloud Services</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Scale your infrastructure with secure, reliable, and efficient cloud solutions.
              </p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1 mb-3 sm:mb-4">
                <li>• Cloud Migration</li>
                <li>• Infrastructure as Code</li>
                <li>• DevOps & CI/CD</li>
                <li>• 24/7 Monitoring</li>
              </ul>
              <div className="text-sm sm:text-base lg:text-lg font-semibold text-purple-600">Starting at $1,200/month</div>
            </article>
          </div>
          
          <div className="text-center mt-8">
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
        <section className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 sm:p-8 lg:p-12" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join hundreds of companies already using our AI solutions to drive growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="inline-flex items-center bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg text-sm sm:text-base"
              aria-label="Call us at (302) 464-0950"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">Call: </span>(302) 464-0950
            </a>
            
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg text-sm sm:text-base"
              aria-label="Contact us via form"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get Free Consultation
            </a>
          </div>
          
          <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500 space-y-1">
            <p>✓ Free initial consultation</p>
            <p>✓ Custom solution design</p>
            <p>✓ 24/7 support available</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
