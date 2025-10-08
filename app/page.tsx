import React, { useCallback, useState, useEffect, Suspense, lazy } from 'react';

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
    <div className="min-h-screen animated-bg relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="matrix-bg absolute inset-0 opacity-10"></div>
      
      {/* Cyber Grid Overlay */}
      <div className="cyber-grid absolute inset-0 opacity-5"></div>
      
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-md z-50 neon-glow"
      >
        Skip to main content
      </a>

      {/* Content Promotion Banner */}
      <ContentPromotionBanner />

      <main id="main-content" className="container mx-auto px-4 py-16 relative z-10" role="main">
        {/* Hero Section */}
        <section
          className={`text-center mb-20 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          aria-labelledby="hero-heading"
        >
          <div className="floating">
            <h1 id="hero-heading" className="text-6xl md:text-8xl font-bold mb-8">
              <span className="holographic glitch" data-text="Zion Tech Group">
                Zion Tech Group
              </span>
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-cyan-400 mb-8 neon-glow" role="doc-subtitle">
            Advanced AI and IT Solutions
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
            Transform your business with our cutting-edge technology and innovative micro SAAS solutions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <button className="glass-card px-8 py-4 text-white hover:text-cyan-400 transition-all duration-300 hover:neon-glow hover-lift">
              Explore Our Services
            </button>
            <button className="neon-border px-8 py-4 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 pulse-neon">
              Get Free Consultation
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="holographic">Our Services</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="glass-card p-8 hover:neon-glow hover-lift transition-all duration-300 group">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  AI Solutions
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Harness the power of artificial intelligence to drive innovation and efficiency in
                  your organization with our cutting-edge AI services.
                </p>
                <div className="mt-6">
                  <span className="text-cyan-400 font-semibold">Starting at $1,500/month</span>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="glass-card p-8 hover:neon-glow hover-lift transition-all duration-300 group">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💻</div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  Micro SAAS
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Affordable, powerful AI-driven tools for modern businesses. Get started with our
                  comprehensive micro SAAS solutions.
                </p>
                <div className="mt-6">
                  <span className="text-cyan-400 font-semibold">Starting at $79/month</span>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="glass-card p-8 hover:neon-glow hover-lift transition-all duration-300 group">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚙️</div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  IT Services
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Comprehensive IT solutions including cloud, security, DevOps, and infrastructure
                  management for your business.
                </p>
                <div className="mt-6">
                  <span className="text-cyan-400 font-semibold">Starting at $1,200/month</span>
                </div>
              </article>
            </Suspense>
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
        <section className="text-center py-20" aria-labelledby="cta-heading">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-8">
              <span className="holographic">Ready to Get Started?</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Transform your business with our cutting-edge AI and IT solutions. 
              Get a free consultation and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="neon-border px-8 py-4 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 pulse-neon font-semibold"
                aria-label="Call us at +1 302 464 0950"
              >
                📞 +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="glass-card px-8 py-4 text-white hover:text-cyan-400 transition-all duration-300 hover:neon-glow font-semibold"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-white/60">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
