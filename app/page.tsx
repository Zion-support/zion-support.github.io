'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));

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
      (window as { gtag: (event: string, data: object) => void }).gtag('event', 'phone_click', {
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
        enablePreloading={true}
        enableCodeSplitting={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Navigation */}
        <Navigation />
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {/* Content Promotion Banner */}
        <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
          <ContentPromotionBanner />
        </Suspense>

        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch"
                data-text="Zion Tech Group"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
                <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
                <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
                </div>
                <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Global Reach</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities</p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="cyber-button w-full sm:w-auto text-center"
                  aria-label="Call us at (302) 464-0950"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive AI and IT solutions designed to transform your business operations
            </p>

            {/* Micro SAAS Services Grid */}
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
                Micro SAAS Solutions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💻</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI-Powered CRM</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Intelligent customer relationship management with AI insights, automated follow-ups, and predictive analytics.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$149/month</div>
                      <a href="/ai-crm" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📊</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Analytics Dashboard</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Real-time business intelligence with AI-powered insights, custom dashboards, and automated reporting.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$199/month</div>
                      <a href="/ai-analytics-dashboard" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">✍️</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Content Studio</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Complete content creation suite with AI writing, image generation, video editing, and social media automation.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">$299/month</div>
                      <a href="/ai-content-studio" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📋</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Project Manager</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Intelligent project management with AI-powered task optimization, resource allocation, and risk prediction.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$199/month</div>
                      <a href="/ai-project-manager" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
              </div>
            </div>

            {/* IT Services Grid */}
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
                IT Services & Solutions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">☁️</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Cloud Migration</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Expert cloud migration services for AWS, Azure, and Google Cloud with zero downtime guarantee.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$2,500/month</div>
                      <a href="/cloud-migration" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔒</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Cybersecurity Solutions</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Comprehensive cybersecurity services including threat detection, incident response, and compliance.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2">$1,999/month</div>
                      <a href="/cybersecurity-solutions" className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🛠️</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">IT Infrastructure</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Complete IT infrastructure setup, management, and optimization for maximum performance and reliability.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$3,500/month</div>
                      <a href="/it-infrastructure" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📱</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Mobile App Development</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Custom mobile app development for iOS and Android with AI-powered features and modern UI/UX.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$5,000/project</div>
                      <a href="/ai-mobile-app-development" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
              </div>
            </div>

            {/* AI Services Grid */}
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
                Advanced AI Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🤖</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Chatbot Builder</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Create intelligent chatbots with natural language processing and machine learning capabilities.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$399/month</div>
                      <a href="/ai-chatbot-builder" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📈</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Data Analytics</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Advanced data analytics with AI-powered insights, predictive modeling, and automated reporting.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$799/month</div>
                      <a href="/ai-data-analytics" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🛒</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI E-commerce Solutions</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered e-commerce solutions with personalized recommendations and automated customer service.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">$1,299/month</div>
                      <a href="/ai-ecommerce-solutions" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">⚛️</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Quantum Computing</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Next-generation quantum computing capabilities for complex problem solving and optimization.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">Custom Pricing</div>
                      <a href="/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Get Started Today
            </h2>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Ready to transform your business with cutting-edge AI and IT solutions? 
              Contact us for a free consultation and discover how we can help you achieve your goals.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="cyber-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">📞</div>
                      <div>
                        <p className="text-white font-semibold">Phone</p>
                        <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          +1 (302) 464-0950
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">✉️</div>
                      <div>
                        <p className="text-white font-semibold">Email</p>
                        <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          kleber@ziontechgroup.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">📍</div>
                      <div>
                        <p className="text-white font-semibold">Address</p>
                        <p className="text-gray-300">
                          364 E Main St STE 1008<br />
                          Middletown, DE 19709
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">🌐</div>
                      <div>
                        <p className="text-white font-semibold">Website</p>
                        <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          https://ziontechgroup.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="cyber-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-services">AI Services</option>
                        <option value="it-services">IT Services</option>
                        <option value="micro-saas">Micro SAAS Solutions</option>
                        <option value="consulting">IT Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Tell us about your project or requirements"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full cyber-button text-center py-4"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;