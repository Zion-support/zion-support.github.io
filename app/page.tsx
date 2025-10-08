import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import FuturisticNavigation from './components/FuturisticNavigation';
import FuturisticFooter from './components/FuturisticFooter';
import FuturisticDesignSystem from './components/FuturisticDesignSystem';

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
    <>
      <FuturisticDesignSystem />
      <div className="min-h-screen animated-bg">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {/* Navigation */}
        <FuturisticNavigation />

        {/* Content Promotion Banner */}
        <ContentPromotionBanner />

      <main id="main-content" className="container mx-auto px-4 py-16" role="main">
        {/* Hero Section */}
        <section
          className={`text-center mb-16 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          aria-labelledby="hero-heading"
        >
          <h1 id="hero-heading" className="text-6xl md:text-8xl font-bold text-white mb-6 holographic">
            Zion Tech Group
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-400 mb-8 neon-glow-blue" role="doc-subtitle">
            Advanced AI and IT Solutions
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
            Transform your business with our cutting-edge technology and achieve 300% ROI.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="futuristic-card float">
              <div className="text-4xl mb-4 neon-glow-blue">🚀</div>
              <h3 className="font-semibold text-white mb-3 text-xl">AI-Powered Solutions</h3>
              <p className="text-gray-300">Transform your business with cutting-edge artificial intelligence and achieve 300% ROI</p>
            </div>
            <div className="futuristic-card float-delayed">
              <div className="text-4xl mb-4 neon-glow-green">⚡</div>
              <h3 className="font-semibold text-white mb-3 text-xl">Lightning Fast</h3>
              <p className="text-gray-300">Optimized performance and rapid deployment with 99.9% uptime SLA</p>
            </div>
            <div className="futuristic-card float">
              <div className="text-4xl mb-4 neon-glow-purple">🔒</div>
              <h3 className="font-semibold text-white mb-3 text-xl">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with SOC 2 compliance and 24/7 monitoring</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-center text-white mb-16 neon-glow-blue">
            Our Core Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <article className="futuristic-card hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6 neon-glow-blue">🤖</div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Harness the power of artificial intelligence to drive innovation and efficiency in
                your organization. Achieve 300% ROI with our cutting-edge AI technology.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Machine Learning Models</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Natural Language Processing</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Computer Vision</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Predictive Analytics</li>
              </ul>
              <div className="mt-6 text-cyan-400 font-semibold">Starting at $1,500/month</div>
            </article>

            <article className="futuristic-card hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6 neon-glow-green">🔄</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-6">
                Transform your business processes with cutting-edge technology and expert
                consultation. Reduce costs by 70% and improve efficiency by 90%.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Process Automation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Legacy System Modernization</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Workflow Optimization</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Change Management</li>
              </ul>
              <div className="mt-6 text-green-400 font-semibold">Starting at $2,500/month</div>
            </article>

            <article className="futuristic-card hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6 neon-glow-purple">☁️</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Cloud Services</h3>
              <p className="text-gray-300 mb-6">
                Scale your infrastructure with secure, reliable, and efficient cloud solutions.
                Achieve 99.9% uptime with our enterprise-grade infrastructure.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Cloud Migration</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Infrastructure as Code</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>DevOps & CI/CD</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>24/7 Monitoring</li>
              </ul>
              <div className="mt-6 text-purple-400 font-semibold">Starting at $1,200/month</div>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/services"
              className="inline-block cyber-button text-lg px-10 py-4"
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
        <section className="text-center futuristic-card p-12 mb-16" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-5xl md:text-6xl font-bold text-white mb-6 neon-glow-blue">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already using our AI solutions to drive growth and efficiency.
            Achieve 300% ROI within the first 6 months.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="inline-flex items-center cyber-button text-lg px-10 py-4"
              aria-label="Call us at (302) 464-0950"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: (302) 464-0950
            </a>
            
            <a
              href="/contact"
              className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 font-semibold text-lg px-10 py-4 rounded-lg"
              aria-label="Contact us via form"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get Free Consultation
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
            <div className="flex items-center justify-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Free initial consultation
            </div>
            <div className="flex items-center justify-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Custom solution design
            </div>
            <div className="flex items-center justify-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              24/7 support available
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FuturisticFooter />
    </div>
    </>
  );
};

export default HomePage;