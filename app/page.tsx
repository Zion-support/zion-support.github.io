import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import FuturisticNavigation from './components/FuturisticNavigation';
import FuturisticFooter from './components/FuturisticFooter';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Futuristic Background */}
      <div className="futuristic-bg"></div>
      
      {/* Navigation */}
      <FuturisticNavigation />

      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-black px-4 py-2 rounded-md z-50"
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
          <h1 id="hero-heading" className="text-6xl font-bold neon-text mb-6 floating">
            Zion Tech Group
          </h1>
          <p className="text-2xl text-cyan-400 mb-8" role="doc-subtitle">
            Advanced AI and IT Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
            Transform your business with our cutting-edge technology.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-3 neon-text">🚀</div>
              <h3 className="font-semibold text-white mb-2 neon-text-purple">AI-Powered Solutions</h3>
              <p className="text-sm text-gray-300">Transform your business with cutting-edge artificial intelligence</p>
            </div>
            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-3 neon-text-pink">⚡</div>
              <h3 className="font-semibold text-white mb-2 neon-text">Lightning Fast</h3>
              <p className="text-sm text-gray-300">Optimized performance and rapid deployment</p>
            </div>
            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-3 neon-text">🔒</div>
              <h3 className="font-semibold text-white mb-2 neon-text-purple">Enterprise Security</h3>
              <p className="text-sm text-gray-300">Bank-level security for your critical data</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-4xl font-bold text-center neon-text mb-12">
            Our Core Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <article className="holographic-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 neon-text">🤖</div>
              <h3 className="text-2xl font-semibold text-white mb-4 neon-text-purple">AI Solutions</h3>
              <p className="text-gray-300 mb-4">
                Harness the power of artificial intelligence to drive innovation and efficiency in
                your organization.
              </p>
              <ul className="text-sm text-cyan-400 space-y-1 mb-4">
                <li>• Machine Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
              </ul>
              <div className="text-lg font-semibold text-cyan-400">Starting at $1,500/month</div>
            </article>

            <article className="holographic-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 neon-text-pink">💻</div>
              <h3 className="text-2xl font-semibold text-white mb-4 neon-text">Micro SAAS</h3>
              <p className="text-gray-300 mb-4">
                Powerful, affordable AI-driven tools that transform your business operations.
              </p>
              <ul className="text-sm text-cyan-400 space-y-1 mb-4">
                <li>• AI Code Review Assistant</li>
                <li>• Document Intelligence</li>
                <li>• Analytics Dashboard</li>
                <li>• Customer Support Bot</li>
              </ul>
              <div className="text-lg font-semibold text-cyan-400">Starting at $79/month</div>
            </article>

            <article className="holographic-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 neon-text">⚙️</div>
              <h3 className="text-2xl font-semibold text-white mb-4 neon-text-purple">IT Services</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive technology solutions including cloud, security, DevOps, and infrastructure.
              </p>
              <ul className="text-sm text-cyan-400 space-y-1 mb-4">
                <li>• Cloud Infrastructure</li>
                <li>• Cybersecurity</li>
                <li>• DevOps & CI/CD</li>
                <li>• Database Administration</li>
              </ul>
              <div className="text-lg font-semibold text-cyan-400">Starting at $1,200/month</div>
            </article>
          </div>

          {/* Additional Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="glass-card p-4 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-2 neon-text">📊</div>
              <h4 className="font-semibold text-white mb-2">AI Analytics</h4>
              <p className="text-xs text-gray-300">Advanced business intelligence</p>
            </div>
            <div className="glass-card p-4 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-2 neon-text-pink">🔄</div>
              <h4 className="font-semibold text-white mb-2">Automation</h4>
              <p className="text-xs text-gray-300">Process automation solutions</p>
            </div>
            <div className="glass-card p-4 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-2 neon-text">⚛️</div>
              <h4 className="font-semibold text-white mb-2">Quantum Computing</h4>
              <p className="text-xs text-gray-300">Next-gen computing power</p>
            </div>
            <div className="glass-card p-4 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-2 neon-text-purple">⛓️</div>
              <h4 className="font-semibold text-white mb-2">Blockchain</h4>
              <p className="text-xs text-gray-300">Web3 & blockchain solutions</p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="/services"
              className="cyber-button px-8 py-3 text-lg"
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
        <section className="text-center glass-card p-12 mb-16" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-4xl font-bold neon-text mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using our AI solutions to drive growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="cyber-button px-8 py-4 text-lg"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call: (302) 464-0950
            </a>
            
            <a
              href="/contact"
              className="glass-card px-8 py-4 text-lg font-semibold text-white hover:scale-105 transition-all duration-300"
              aria-label="Contact us via form"
            >
              ✉️ Get Free Consultation
            </a>
          </div>
          
          <div className="mt-8 text-sm text-cyan-400">
            <p>✓ Free initial consultation</p>
            <p>✓ Custom solution design</p>
            <p>✓ 24/7 support available</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FuturisticFooter />
    </div>
  );
};

export default HomePage;
