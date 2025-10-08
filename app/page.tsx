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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 gradient-animated opacity-10"></div>
      
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Content Promotion Banner */}
      <ContentPromotionBanner />

      <main id="main-content" className="container mx-auto px-4 py-16 relative z-10" role="main">
        {/* Hero Section */}
        <section
          className={`text-center mb-16 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          aria-labelledby="hero-heading"
        >
          <h1 id="hero-heading" className="text-6xl md:text-8xl font-bold text-white mb-6 neon-text">
            <span className="text-gradient">Zion Tech Group</span>
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-300 mb-8 font-light" role="doc-subtitle">
            Advanced AI and IT Solutions
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Leading provider of enterprise AI solutions, quantum computing, blockchain, IoT, and autonomous systems.
            Transform your business with our cutting-edge technology and futuristic innovations.
          </p>
          
          {/* Futuristic CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <button className="btn-futuristic text-lg px-8 py-4 float-animation">
              Explore Our Services
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 pulse-glow">
              Get Free Consultation
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">
            Our Services
          </h2>

          <Suspense fallback={<ServiceCardSkeleton />}>
            <article className="card-futuristic glass-dark p-8 hover:shadow-2xl transition-all duration-500 slide-in-left">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-gradient">AI Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Harness the power of artificial intelligence to drive innovation and efficiency in
                your organization with cutting-edge machine learning and automation.
              </p>
              <div className="mt-4">
                <span className="text-cyan-400 text-sm font-semibold">Starting at $1,500/month</span>
              </div>
            </article>
          </Suspense>

          <Suspense fallback={<ServiceCardSkeleton />}>
            <article className="card-futuristic glass-dark p-8 hover:shadow-2xl transition-all duration-500 fade-in-up">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-gradient">Quantum Computing</h3>
              <p className="text-gray-300 leading-relaxed">
                Revolutionary quantum computing solutions for solving complex optimization problems
                and advancing scientific research.
              </p>
              <div className="mt-4">
                <span className="text-cyan-400 text-sm font-semibold">Starting at $8,000/month</span>
              </div>
            </article>
          </Suspense>

          <Suspense fallback={<ServiceCardSkeleton />}>
            <article className="card-futuristic glass-dark p-8 hover:shadow-2xl transition-all duration-500 slide-in-right">
              <div className="text-4xl mb-4">⛓️</div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-gradient">Blockchain</h3>
              <p className="text-gray-300 leading-relaxed">
                Secure, transparent blockchain solutions including smart contracts, DeFi protocols,
                and enterprise applications.
              </p>
              <div className="mt-4">
                <span className="text-cyan-400 text-sm font-semibold">Starting at $4,500/month</span>
              </div>
            </article>
          </Suspense>
        </section>

        {/* Additional Services Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <article className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-lg font-semibold text-white mb-2">IoT Solutions</h3>
            <p className="text-gray-300 text-sm">Connected devices and smart systems</p>
            <div className="mt-2">
              <span className="text-cyan-400 text-xs font-semibold">From $2,500/month</span>
            </div>
          </article>

          <article className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500">
            <div className="text-3xl mb-3">☁️</div>
            <h3 className="text-lg font-semibold text-white mb-2">Cloud Services</h3>
            <p className="text-gray-300 text-sm">Scalable cloud infrastructure</p>
            <div className="mt-2">
              <span className="text-cyan-400 text-xs font-semibold">From $1,200/month</span>
            </div>
          </article>

          <article className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
            <p className="text-gray-300 text-sm">Advanced security solutions</p>
            <div className="mt-2">
              <span className="text-cyan-400 text-xs font-semibold">From $3,000/month</span>
            </div>
          </article>

          <article className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-white mb-2">Data Analytics</h3>
            <p className="text-gray-300 text-sm">Business intelligence and insights</p>
            <div className="mt-2">
              <span className="text-cyan-400 text-xs font-semibold">From $2,800/month</span>
            </div>
          </article>
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
        <section className="text-center py-16" aria-labelledby="cta-heading">
          <div className="card-futuristic glass-dark p-12 max-w-4xl mx-auto">
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 text-gradient">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the technological revolution with our cutting-edge AI, quantum computing, and blockchain solutions.
              Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="btn-futuristic text-lg px-8 py-4 float-animation"
                aria-label="Call us at (302) 464-0950"
              >
                📞 Call Us: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 pulse-glow"
              >
                ✉️ Email Us
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
