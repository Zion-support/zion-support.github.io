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
          <h2 id="services-heading" className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus-within:ring-4 focus-within:ring-indigo-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Solutions</h3>
              <p className="text-gray-600 mb-4">
          <Suspense fallback={<ServiceCardSkeleton />}>
            <article className="card-futuristic glass-dark p-8 hover:shadow-2xl transition-all duration-500 slide-in-left">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-gradient">AI Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Harness the power of artificial intelligence to drive innovation and efficiency in
                your organization with cutting-edge machine learning and automation.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Machine Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
              </ul>
              <div className="mt-4">
                <span className="text-cyan-400 text-sm font-semibold">Starting at $1,500/month</span>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus-within:ring-4 focus-within:ring-indigo-300">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">
                Transform your business processes with cutting-edge technology and expert
                consultation.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Process Automation</li>
                <li>• Legacy System Modernization</li>
                <li>• Workflow Optimization</li>
                <li>• Change Management</li>
              </ul>
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

            <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus-within:ring-4 focus-within:ring-indigo-300">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cloud Services</h3>
              <p className="text-gray-600 mb-4">
                Scale your infrastructure with secure, reliable, and efficient cloud solutions.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Cloud Migration</li>
                <li>• Infrastructure as Code</li>
                <li>• DevOps & CI/CD</li>
                <li>• 24/7 Monitoring</li>
              </ul>
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
        <section className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-12" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <a
            href="tel:+13024640950"
            onClick={handlePhoneClick}
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            aria-label="Call us at (302) 464-0950"
          >
            Contact Us: (302) 464-0950
          </a>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using our AI solutions to drive growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13026009898"
              onClick={handlePhoneClick}
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
              aria-label="Call us at (302) 600-9898"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: (302) 600-9898
            </a>
            
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
              aria-label="Contact us via form"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get Free Consultation
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>✓ Free initial consultation</p>
            <p>✓ Custom solution design</p>
            <p>✓ 24/7 support available</p>
          </div>
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
