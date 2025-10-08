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
    <div className="min-h-screen relative">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Content Promotion Banner */}
      <ContentPromotionBanner />

      <main id="main-content" className="container mx-auto px-4 py-16 relative z-10" role="main">
        {/* Hero Section */}
        <section
          className={`text-center mb-16 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} relative`}
          aria-labelledby="hero-heading"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl floating"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl floating" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl floating" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative z-10">
            <h1 id="hero-heading" className="text-6xl md:text-8xl font-bold gradient-text mb-6 glitch" data-text="Zion Tech Group">
              Zion Tech Group
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8" role="doc-subtitle">
              Advanced AI and IT Solutions
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
              Transform your business with our cutting-edge technology and innovative approaches.
            </p>
          </div>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8 relative z-10">
            <div className="futuristic-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🚀</div>
              <h3 className="font-semibold text-white mb-3 text-center">AI-Powered Solutions</h3>
              <p className="text-sm text-gray-300 text-center">Transform your business with cutting-edge artificial intelligence</p>
            </div>
            <div className="futuristic-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">⚡</div>
              <h3 className="font-semibold text-white mb-3 text-center">Lightning Fast</h3>
              <p className="text-sm text-gray-300 text-center">Optimized performance and rapid deployment</p>
            </div>
            <div className="futuristic-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🔒</div>
              <h3 className="font-semibold text-white mb-3 text-center">Enterprise Security</h3>
              <p className="text-sm text-gray-300 text-center">Bank-level security for your critical data</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16 relative" aria-labelledby="services-heading">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="relative z-10">
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12">
              Our Core Services
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <article className="futuristic-card p-8 hover:scale-105 transition-all duration-300 group">
                <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🤖</div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">AI Solutions</h3>
                <p className="text-gray-300 mb-6 text-center">
                  Harness the power of artificial intelligence to drive innovation and efficiency in
                  your organization.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Machine Learning Models</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Natural Language Processing</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Computer Vision</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Predictive Analytics</li>
                </ul>
              </article>

              <article className="futuristic-card p-8 hover:scale-105 transition-all duration-300 group">
                <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🔄</div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">Digital Transformation</h3>
                <p className="text-gray-300 mb-6 text-center">
                  Transform your business processes with cutting-edge technology and expert
                  consultation.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Process Automation</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Legacy System Modernization</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Workflow Optimization</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Change Management</li>
                </ul>
              </article>

              <article className="futuristic-card p-8 hover:scale-105 transition-all duration-300 group">
                <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">☁️</div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">Cloud Services</h3>
                <p className="text-gray-300 mb-6 text-center">
                  Scale your infrastructure with secure, reliable, and efficient cloud solutions.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Cloud Migration</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Infrastructure as Code</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>DevOps & CI/CD</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>24/7 Monitoring</li>
                </ul>
              </article>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/services"
              className="cyber-button text-lg px-8 py-4"
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
        <section className="text-center relative overflow-hidden rounded-2xl p-12 futuristic-card" aria-labelledby="cta-heading">
          <div className="absolute inset-0 holographic"></div>
          <div className="relative z-10">
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using our AI solutions to drive growth and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 neon-glow-purple shadow-lg"
                aria-label="Call us at +1 302 464 0950"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: +1 302 464 0950
              </a>
              
              <a
                href="/contact"
                className="cyber-button text-lg px-8 py-4"
                aria-label="Contact us via form"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get Free Consultation
              </a>
            </div>
            
            <div className="mt-8 text-sm text-gray-400 space-y-2">
              <p className="flex items-center justify-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>Free initial consultation</p>
              <p className="flex items-center justify-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>Custom solution design</p>
              <p className="flex items-center justify-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>24/7 support available</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
