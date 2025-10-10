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
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
            Transform your business with our cutting-edge technology.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white bg-opacity-50 rounded-lg p-4">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Solutions</h3>
              <p className="text-sm text-gray-600">Transform your business with cutting-edge artificial intelligence</p>
            </div>
            <div className="bg-white bg-opacity-50 rounded-lg p-4">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-600">Optimized performance and rapid deployment</p>
            </div>
            <div className="bg-white bg-opacity-50 rounded-lg p-4">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-sm text-gray-600">Bank-level security for your critical data</p>
            </div>
          </div>
          
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
        <section className="mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Services</h3>
                <p className="text-gray-600 mb-4">
                  Advanced artificial intelligence solutions including ML, NLP, and computer vision.
                </p>
                <div className="text-lg font-semibold text-blue-600">Starting at $1,500/month</div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quantum Computing</h3>
                <p className="text-gray-600 mb-4">
                  Next-generation quantum computing capabilities for complex problem solving.
                </p>
                <div className="text-lg font-semibold text-purple-600">Custom Pricing</div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Autonomous Systems</h3>
                <p className="text-gray-600 mb-4">
                  Self-managing and self-optimizing systems for enterprise operations.
                </p>
                <div className="text-lg font-semibold text-green-600">Starting at $2,500/month</div>
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
            <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
            <p className="text-gray-300 text-sm">Data insights and reporting</p>
            <div className="mt-2">
              <span className="text-cyan-400 text-xs font-semibold">From $1,800/month</span>
            </div>
          </article>
        </section>

        {/* Dynamic Content Showcase */}
        <Suspense fallback={<div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>}>
          <DynamicContentShowcase />
        </Suspense>

        {/* Content Statistics */}
        <Suspense fallback={<div className="h-32 bg-gray-200 rounded-lg animate-pulse mb-16"></div>}>
          <ContentStatistics />
        </Suspense>

        {/* Content Carousel */}
        <Suspense fallback={<div className="h-64 bg-gray-200 rounded-lg animate-pulse mb-16"></div>}>
          <ContentCarousel />
        </Suspense>

        {/* Newsletter Signup */}
        <Suspense fallback={<div className="h-48 bg-gray-200 rounded-lg animate-pulse mb-16"></div>}>
          <ContentNewsletterSignup />
        </Suspense>

        {/* Contact Section */}
        <section className="text-center py-16 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              onClick={handlePhoneClick}
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300"
            >
              📞 Call Now: (123) 456-7890
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
            >
              Get Free Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;