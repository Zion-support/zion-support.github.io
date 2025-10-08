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
    <div className="min-h-screen particles cyber-grid">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 futuristic-btn z-50"
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
          <h1 id="hero-heading" className="text-6xl md:text-8xl font-bold gradient-text mb-6 glitch" data-text="Zion Tech Group">
            Zion Tech Group
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-300 mb-8 neon-glow" role="doc-subtitle">
            Advanced AI and IT Solutions
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
            Transform your business with our cutting-edge technology and futuristic innovations.
          </p>
        </section>

        {/* Services Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">
            Our Services
          </h2>

          <Suspense fallback={<ServiceCardSkeleton />}>
            <article className="futuristic-card p-8 holographic">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold text-white mb-4 gradient-text">AI Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Harness the power of artificial intelligence to drive innovation and efficiency in
                your organization. Our advanced AI systems learn, adapt, and optimize your business processes.
              </p>
              <div className="mt-4">
                <span className="text-cyan-400 font-bold">Starting at $1,500/month</span>
              </div>
            </article>
          </Suspense>

          <Suspense fallback={<ServiceCardSkeleton />}>
            <article className="futuristic-card p-8 holographic">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-semibold text-white mb-4 gradient-text">Digital Transformation</h3>
              <p className="text-gray-300 leading-relaxed">
                Transform your business processes with cutting-edge technology and expert
                consultation. Embrace the future with our comprehensive digital solutions.
              </p>
              <div className="mt-4">
                <span className="text-cyan-400 font-bold">Starting at $2,500/month</span>
              </div>
            </article>
          </Suspense>

          <Suspense fallback={<ServiceCardSkeleton />}>
            <article className="futuristic-card p-8 holographic">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-semibold text-white mb-4 gradient-text">Cloud Services</h3>
              <p className="text-gray-300 leading-relaxed">
                Scale your infrastructure with secure, reliable, and efficient cloud solutions.
                Experience unlimited scalability and enterprise-grade security.
              </p>
              <div className="mt-4">
                <span className="text-cyan-400 font-bold">Starting at $1,200/month</span>
              </div>
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
          <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the future of technology with our cutting-edge solutions. Transform your business today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="futuristic-btn text-lg px-8 py-4 neon-glow"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="futuristic-card px-8 py-4 text-white border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300"
            >
              ✉️ Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
