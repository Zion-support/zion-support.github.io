import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render
    setTimeout(() => {
      import('./components/ContentPromotionBanner');
      import('./components/ContentCarousel');
    }, 100);
  }
};

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    // Preload components
    preloadComponents();
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Navigation */}
      <Navigation />
      
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Content Promotion Banner */}
      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <ContentPromotionBanner />
      </Suspense>

      <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
        {/* Hero Section */}
        <section
          className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
            isLoaded && isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          aria-labelledby="hero-heading"
        >
          <h1 
            id="hero-heading" 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text"
          >
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow" role="doc-subtitle">
            Advanced AI and IT Solutions
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence, quantum computing, 
            and autonomous systems. We deliver enterprise-grade solutions that drive innovation and growth.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Call us at +1 302 464 0950"
            >
              📞 Call Now: +1 302 464 0950
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              ✉️ Get Quote
            </a>
          </div>
        </section>

        {/* Primary Services Section */}
        <section className="mb-20" aria-labelledby="primary-services-heading">
          <h2 
            id="primary-services-heading" 
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center cyber-text"
          >
            Our Core Services
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">🤖</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Services</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <div className="text-center">
                  <a 
                    href="/ai-services" 
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">📢</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Marketing</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Revolutionary AI-powered marketing automation, ad optimization, and content generation.
                </p>
                <div className="text-center">
                  <a 
                    href="/ai-marketing" 
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">⚙️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Automation</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Intelligent automation of business processes with decision-making capabilities and exception handling.
                </p>
                <div className="text-center">
                  <a 
                    href="/ai-automation" 
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            </Suspense>
          </div>
        </section>

        {/* Secondary Services Section */}
        <section className="mb-20" aria-labelledby="secondary-services-heading">
          <h2 
            id="secondary-services-heading" 
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center cyber-text"
          >
            Specialized Solutions
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-lg font-bold text-white mb-3">AI Healthcare</h3>
              <p className="text-gray-300 text-sm mb-4">Medical AI solutions for diagnosis and treatment optimization.</p>
              <a href="/ai-healthcare" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">Learn More →</a>
            </article>

            <article className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-white mb-3">AI Fintech</h3>
              <p className="text-gray-300 text-sm mb-4">Financial AI applications for risk assessment and fraud detection.</p>
              <a href="/ai-fintech" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">Learn More →</a>
            </article>

            <article className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-white mb-3">Data Analytics</h3>
              <p className="text-gray-300 text-sm mb-4">Advanced data insights and business intelligence solutions.</p>
              <a href="/ai-data-analytics" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">Learn More →</a>
            </article>

            <article className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-lg font-bold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300 text-sm mb-4">AI-powered security solutions for threat detection and prevention.</p>
              <a href="/cybersecurity" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">Learn More →</a>
            </article>
          </div>
        </section>

        {/* Micro SAAS Section */}
        <section className="mb-20" aria-labelledby="micro-saas-heading">
          <h2 
            id="micro-saas-heading" 
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center cyber-text"
          >
            Micro SAAS Solutions
          </h2>
          
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">50+ Ready-to-Use Applications</h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Deploy powerful AI and IT applications instantly with our comprehensive micro SAAS platform. 
                No development time, immediate results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-white mb-2">Instant Deployment</h4>
                <p className="text-gray-300">Deploy applications in minutes, not months.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h4 className="text-xl font-bold text-white mb-2">Customizable</h4>
                <p className="text-gray-300">Tailor applications to your specific needs.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="text-xl font-bold text-white mb-2">Scalable</h4>
                <p className="text-gray-300">Grow with your business requirements.</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="/micro-saas" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Micro SAAS →
              </a>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-20" aria-labelledby="additional-services-heading">
          <h2 
            id="additional-services-heading" 
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center cyber-text"
          >
            Additional Services
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">Cloud Infrastructure</h3>
              <p className="text-gray-300 mb-4">Scalable cloud solutions for modern businesses.</p>
              <a href="/ai-cloud-infrastructure" className="text-cyan-400 hover:text-cyan-300 font-semibold">Learn More →</a>
            </article>

            <article className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">DevOps</h3>
              <p className="text-gray-300 mb-4">Streamlined development and deployment processes.</p>
              <a href="/devops" className="text-cyan-400 hover:text-cyan-300 font-semibold">Learn More →</a>
            </article>

            <article className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">E-commerce Solutions</h3>
              <p className="text-gray-300 mb-4">AI-powered e-commerce platforms and tools.</p>
              <a href="/ai-ecommerce-solutions" className="text-cyan-400 hover:text-cyan-300 font-semibold">Learn More →</a>
            </article>
          </div>
        </section>

        {/* Statistics Section */}
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentStatistics />
        </Suspense>

        {/* Content Carousel */}
        <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentCarousel />
        </Suspense>

        {/* Dynamic Content Showcase */}
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <DynamicContentShowcase />
        </Suspense>

        {/* Newsletter Signup */}
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentNewsletterSignup />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;