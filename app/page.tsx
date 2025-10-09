import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';

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
        event_label: 'main_phone_number'
      });
    }
  }, []);

  return (
    <>
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services']}
        canonicalUrl="https://ziontechgroup.com"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'TechCompany',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
          foundingDate: '2020',
          numberOfEmployees: '50-100',
          industry: 'Technology',
          services: [
            'AI Solutions',
            'Quantum Computing',
            'Autonomous Systems',
            'Digital Transformation',
            'Cloud Services',
            'Automation',
            'Business Intelligence'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-302-464-0950',
            contactType: 'Customer Service',
            areaServed: 'US',
            availableLanguage: 'en'
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            addressCountry: 'US'
          }
        }}
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer />
      <Analytics />
      <SecurityEnhancer />

      <main className="relative">
        {/* Hero Section */}
        <section 
          className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ${
            isLoaded && isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          aria-labelledby="hero-heading"
        >
          <div className="max-w-6xl mx-auto">
            <h1 
              id="hero-heading" 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text holographic-text"
              data-text="Zion Tech Group"
            >
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect" role="doc-subtitle">
              Advanced AI and IT Solutions
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI, quantum computing, and autonomous systems. 
              We deliver enterprise-grade solutions that drive innovation and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                onClick={handlePhoneClick}
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center"
                onClick={handlePhoneClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">🤖</div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Services</h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    Comprehensive AI solutions including machine learning, natural language processing, and computer vision.
                  </p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400 mb-2">$1,500/month</div>
                    <a href="/ai-services" className="text-red-400 hover:text-red-300 font-medium">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>

              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">☁️</div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">IT Services</h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    Complete IT infrastructure, cloud migration, and cybersecurity solutions.
                  </p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400 mb-2">$2,500/month</div>
                    <a href="/it-services" className="text-red-400 hover:text-red-300 font-medium">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>

              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">⚡</div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">Micro SAAS</h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    50+ AI-powered tools and applications for business automation and productivity.
                  </p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400 mb-2">$99/month</div>
                    <a href="/micro-saas" className="text-red-400 hover:text-red-300 font-medium">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and discover how our solutions can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center"
                onClick={handlePhoneClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;