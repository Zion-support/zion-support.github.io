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
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Leading provider of enterprise AI solutions, quantum computing, blockchain, IoT, and autonomous systems.
            Transform your business with our cutting-edge technology and futuristic innovations.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-semibold text-white mb-2">AI-Powered Solutions</h3>
              <p className="text-sm text-gray-300">Transform your business with cutting-edge artificial intelligence</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-300">Optimized performance and rapid deployment</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-sm text-gray-300">Bank-level security for your critical data</p>
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
          <h2 id="services-heading" className="text-3xl font-bold text-white mb-8 text-center">
            Our Core Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="card-futuristic glass-dark p-8 hover:shadow-2xl transition-all duration-500 slide-in-left">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-gradient">AI Solutions</h3>
                <p className="text-gray-300 leading-relaxed">
                  Harness the power of artificial intelligence to drive innovation and efficiency in
                  your organization with cutting-edge machine learning and automation.
                </p>
                <ul className="text-sm text-gray-400 space-y-1 mt-4">
                  <li>• Machine Learning Models</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Predictive Analytics</li>
                </ul>
                <div className="mt-4">
                  <span className="text-cyan-400 text-sm font-semibold">Starting at $1,500/month</span>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="card-futuristic glass-dark p-8 hover:shadow-2xl transition-all duration-500 slide-in-up">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-gradient">Quantum Computing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Next-generation quantum computing capabilities for complex problem solving
                  and optimization challenges that traditional computers cannot handle.
                </p>
                <ul className="text-sm text-gray-400 space-y-1 mt-4">
                  <li>• Quantum Algorithms</li>
                  <li>• Optimization Problems</li>
                  <li>• Cryptography</li>
                  <li>• Simulation</li>
                </ul>
                <div className="mt-4">
                  <span className="text-purple-400 text-sm font-semibold">Custom Pricing</span>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="card-futuristic glass-dark p-8 hover:shadow-2xl transition-all duration-500 slide-in-right">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-gradient">Autonomous Systems</h3>
                <p className="text-gray-300 leading-relaxed">
                  Self-managing and self-optimizing systems for enterprise operations
                  that adapt and improve over time without human intervention.
                </p>
                <ul className="text-sm text-gray-400 space-y-1 mt-4">
                  <li>• Self-Healing Systems</li>
                  <li>• Adaptive Learning</li>
                  <li>• Predictive Maintenance</li>
                  <li>• Process Optimization</li>
                </ul>
                <div className="mt-4">
                  <span className="text-green-400 text-sm font-semibold">Starting at $2,500/month</span>
                </div>
              </article>
            </Suspense>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/services"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300"
            >
              View All Services
            </a>
          </div>
        </section>

        {/* Additional Services Grid */}
        <section className="mb-16" aria-labelledby="additional-services-heading">
          <h2 id="additional-services-heading" className="text-3xl font-bold text-white mb-8 text-center">
            Additional Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-futuristic glass-dark p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="text-lg font-semibold text-white mb-2">Blockchain Solutions</h3>
              <p className="text-sm text-gray-300">Decentralized applications and smart contracts</p>
            </div>
            
            <div className="card-futuristic glass-dark p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg font-semibold text-white mb-2">IoT Integration</h3>
              <p className="text-sm text-gray-300">Internet of Things connectivity and management</p>
            </div>
            
            <div className="card-futuristic glass-dark p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold text-white mb-2">Data Analytics</h3>
              <p className="text-sm text-gray-300">Advanced data processing and insights</p>
            </div>
            
            <div className="card-futuristic glass-dark p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
              <p className="text-sm text-gray-300">Enterprise-grade security solutions</p>
            </div>
          </div>
        </section>

        {/* Dynamic Content Showcase */}
        <Suspense fallback={<div className="h-64 bg-white bg-opacity-10 rounded-lg animate-pulse"></div>}>
          <DynamicContentShowcase />
        </Suspense>

        {/* Content Statistics */}
        <Suspense fallback={<div className="h-32 bg-white bg-opacity-10 rounded-lg animate-pulse"></div>}>
          <ContentStatistics />
        </Suspense>

        {/* Content Carousel */}
        <Suspense fallback={<div className="h-96 bg-white bg-opacity-10 rounded-lg animate-pulse"></div>}>
          <ContentCarousel />
        </Suspense>

        {/* Contact Section */}
        <section className="text-center py-16" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss how our AI and IT solutions can revolutionize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-555-0123"
              onClick={handlePhoneClick}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
            >
              Call Us: +1 (555) 012-3456
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </section>

        {/* Content Newsletter Signup */}
        <Suspense fallback={<div className="h-32 bg-white bg-opacity-10 rounded-lg animate-pulse"></div>}>
          <ContentNewsletterSignup />
        </Suspense>
      </main>
    </div>
  );
};

export default HomePage;