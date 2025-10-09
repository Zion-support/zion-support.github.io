'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
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
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">🤖</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Services</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text">Starting at $1,500/month</div>
                  <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">📢</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Marketing</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Revolutionary AI-powered marketing automation, ad optimization, and content generation.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2 neon-text">Starting at $199/month</div>
                  <a href="/ai-marketing" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">⚙️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Automation</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Intelligent automation of business processes with decision-making capabilities and exception handling.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2 neon-text">Starting at $399/month</div>
                  <a href="/ai-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
          </div>
          {/* Secondary Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🏥</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Healthcare</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">Starting at $1,999/month</div>
                  <a href="/ai-healthcare" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💰</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Fintech</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Revolutionary AI-powered financial services including trading, fraud detection, and risk management.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">Starting at $1,499/month</div>
                  <a href="/ai-fintech" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
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
          {/* Micro SAAS Services Grid */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
              Micro SAAS Solutions
            </h3>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto px-4">
              Over 100+ AI-powered micro SAAS tools designed to streamline your business operations. 
              Each tool is built with cutting-edge AI technology and offers enterprise-grade features at affordable prices.
            </p>
            
            {/* Business Productivity Tools */}
            <div className="mb-12">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                Business Productivity Tools
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💻</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI-Powered CRM</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Intelligent customer relationship management with AI insights, automated follow-ups, predictive analytics, and 500+ integrations.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$149/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/ai-crm" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📊</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Analytics Dashboard</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Real-time business intelligence with AI-powered insights, custom dashboards, automated reporting, and 100+ data sources.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$199/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/ai-analytics" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">✍️</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Content Studio</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Complete content creation suite with AI writing, image generation, video editing, social media automation, and 50+ templates.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">$299/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/ai-content-studio" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🤖</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Chatbot Builder</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Create intelligent chatbots for customer support, sales, and lead generation with no coding required. 24/7 availability.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$99/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/ai-chatbot-builder" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📧</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Email Marketing</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Automated email campaigns with AI optimization, personalization, A/B testing, and advanced analytics for maximum ROI.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$179/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/ai-email-marketing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📱</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Mobile App Builder</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Build native mobile apps with AI assistance, drag-and-drop interface, instant deployment, and cross-platform support.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$399/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/ai-mobile-builder" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔍</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI SEO Optimizer</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Automated SEO analysis, keyword research, content optimization, ranking tracking, and competitor analysis with AI insights.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$129/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/ai-seo-optimizer" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💰</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Invoice Generator</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Automated invoice creation, payment tracking, financial reporting, and tax compliance with AI-powered insights.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$79/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/ai-invoice-generator" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
              </div>
            </div>

            {/* Marketing & Sales Tools */}
            <div className="mb-12">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                Marketing & Sales Tools
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎨</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Design Studio</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Create stunning graphics, logos, and marketing materials with AI-powered design tools and 1000+ templates.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">$35/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/ai-design-studio" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📱</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Landing Page Builder</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Build high-converting landing pages with AI optimization, A/B testing, and conversion tracking.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$29/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/landing-page-builder" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📈</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Ad Campaign Manager</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Automated ad campaign management with AI optimization across Google, Facebook, LinkedIn, and TikTok.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$79/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/ad-campaign-manager" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎯</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Lead Scoring AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered lead scoring and qualification with automated follow-ups and conversion optimization.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$149/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/lead-scoring-ai" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📊</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Social Media AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-driven social media management with content creation, scheduling, and performance analytics.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$45/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/social-media-ai" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎬</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Video Marketing AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered video creation, editing, and optimization for social media and marketing campaigns.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$199/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/video-marketing-ai" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📧</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Email Sequence AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Automated email sequences with AI personalization, A/B testing, and conversion optimization.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$89/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/email-sequence-ai" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎪</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Event Marketing AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered event management, promotion, and attendee engagement with automated follow-ups.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$129/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/event-marketing-ai" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
              </div>
            </div>

            {/* Developer & Technical Tools */}
            <div className="mb-12">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                Developer & Technical Tools
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💻</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Code Assistant AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered code completion, debugging, and optimization for 50+ programming languages with real-time suggestions.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$39/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/code-assistant-ai" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔧</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">API Builder Pro</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Create and manage APIs with AI assistance, documentation generation, testing tools, and monitoring.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$59/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/api-builder-pro" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🐛</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Bug Tracker AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2">$25/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/bug-tracker-ai" className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📚</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Doc Generator AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Automatically generate technical documentation, API docs, and user guides from code with AI assistance.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$19/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/doc-generator-ai" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔒</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Security Scanner AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered security scanning, vulnerability assessment, and automated security recommendations.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$99/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/security-scanner-ai" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">⚡</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Performance Monitor AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered application performance monitoring with automated optimization suggestions and alerts.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$79/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/performance-monitor-ai" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🧪</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Test Generator AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered test case generation, automated testing, and quality assurance with intelligent coverage analysis.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$149/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/test-generator-ai" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔄</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">CI/CD Pipeline AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-optimized continuous integration and deployment pipelines with automated testing and rollback capabilities.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$199/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/cicd-pipeline-ai" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
              </div>
            </div>

            {/* E-commerce & Finance Tools */}
            <div className="mb-12">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                E-commerce & Finance Tools
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🛒</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">E-commerce AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered e-commerce optimization with product recommendations, pricing strategies, and inventory management.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$299/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/ecommerce-ai" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💳</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Payment Processor AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-optimized payment processing with fraud detection, transaction analysis, and automated reconciliation.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$199/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/payment-processor-ai" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📊</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Financial Analytics AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered financial analysis, forecasting, and risk assessment with automated reporting and insights.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$249/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/financial-analytics-ai" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🏦</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Banking Integration AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered banking integration with automated reconciliation, transaction categorization, and financial insights.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$179/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/banking-integration-ai" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📈</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Trading Bot AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered trading bot with automated strategies, risk management, and real-time market analysis.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$399/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/trading-bot-ai" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💼</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Portfolio Manager AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered portfolio management with automated rebalancing, risk assessment, and performance optimization.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$299/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/portfolio-manager-ai" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔍</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Fraud Detection AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered fraud detection and prevention with real-time monitoring and automated risk assessment.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2">$199/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/fraud-detection-ai" className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📋</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Compliance AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered compliance monitoring and reporting with automated regulatory updates and risk assessment.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$349/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/compliance-ai" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
              </div>
            </div>

            {/* Healthcare & Life Sciences Tools */}
            <div className="mb-12">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                Healthcare & Life Sciences Tools
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🏥</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Medical Imaging AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered medical image analysis with automated diagnosis assistance and radiology reporting.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$1,999/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/medical-imaging-ai" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🧬</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Drug Discovery AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered drug discovery and development with molecular analysis and clinical trial optimization.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$4,999/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/drug-discovery-ai" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">👩‍⚕️</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Patient Management AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered patient management with automated scheduling, health monitoring, and treatment recommendations.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$799/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/patient-management-ai" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🧠</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Mental Health AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered mental health assessment and support with automated therapy recommendations and monitoring.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">$599/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/mental-health-ai" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💊</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Pharmacy AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered pharmacy management with automated drug interactions, inventory optimization, and patient counseling.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$899/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/pharmacy-ai" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔬</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Lab Management AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered laboratory management with automated test scheduling, result analysis, and quality control.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$1,299/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/lab-management-ai" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📋</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Clinical Trial AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered clinical trial management with patient recruitment, data analysis, and regulatory compliance.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$2,499/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/clinical-trial-ai" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🏥</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Hospital Management AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered hospital management with resource optimization, patient flow, and operational efficiency.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$3,999/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/hospital-management-ai" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
              </div>
            </div>

            {/* Education & Training Tools */}
            <div className="mb-12">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                Education & Training Tools
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎓</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Learning Management AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered learning management with personalized content, automated assessments, and progress tracking.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$199/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/learning-management-ai" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🤖</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Tutor</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered tutoring system with personalized learning paths, real-time feedback, and adaptive content.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$149/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/ai-tutor" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📝</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Assessment AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered assessment creation and grading with automated feedback and performance analytics.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$99/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/assessment-ai" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎯</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Skill Assessment AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered skill assessment and gap analysis with personalized learning recommendations.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$79/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/skill-assessment-ai" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📚</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Content Creation AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered educational content creation with automated curriculum generation and multimedia support.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$179/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/content-creation-ai" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">👥</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Collaboration AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered collaboration tools with automated group formation, project management, and peer learning.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$129/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/collaboration-ai" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎮</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Gamification AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered gamification with automated reward systems, progress tracking, and engagement optimization.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">$89/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/gamification-ai" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📊</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Learning Analytics AI</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered learning analytics with performance insights, predictive modeling, and intervention recommendations.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$159/month</div>
                      <div className="text-xs text-gray-400 mb-2">Free 14-day trial</div>
                      <a href="/learning-analytics-ai" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                        Start Free Trial →
                      </a>
                    </div>
                  </article>
                </Suspense>
              </div>
            </div>
          </div>
          {/* IT Services & Infrastructure */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
              IT Services & Infrastructure
            </h3>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto px-4">
              Comprehensive IT solutions designed to modernize your infrastructure, enhance security, and optimize performance. 
              Our enterprise-grade services ensure 99.9% uptime and 24/7 expert support.
            </p>
            
            {/* Cloud & Infrastructure Services */}
            <div className="mb-12">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                Cloud & Infrastructure Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">☁️</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cloud Migration</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Seamless cloud migration with AWS, Azure, and GCP. 99.9% uptime guarantee, 24/7 expert support, and zero-downtime migration.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$1,299/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/cloud-migration" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏗️</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Infrastructure as Code</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Automated infrastructure provisioning with Terraform, Ansible, and Kubernetes. Scalable, repeatable, and version-controlled.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$899/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/infrastructure-as-code" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cloud Optimization</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    AI-powered cloud cost optimization, performance tuning, and resource management. Save up to 40% on cloud costs.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$599/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/cloud-optimization" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔄</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Disaster Recovery</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Comprehensive disaster recovery solutions with automated backups, failover systems, and RTO/RPO optimization.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$799/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/disaster-recovery" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
              </div>
            </div>

            {/* Security & Compliance Services */}
            <div className="mb-12">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                Security & Compliance Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔒</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cybersecurity Suite</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Comprehensive security solutions with threat detection, vulnerability assessment, automated response, and 24/7 SOC monitoring.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2">$799/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free security audit included</div>
                    <a href="/cybersecurity-suite" className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛡️</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Penetration Testing</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Professional penetration testing and vulnerability assessments with detailed reports and remediation guidance.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$2,999/project</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/penetration-testing" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📋</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Compliance Management</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    GDPR, HIPAA, SOX, and industry-specific compliance management with automated monitoring and reporting.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$1,299/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free compliance assessment</div>
                    <a href="/compliance-management" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔐</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Identity & Access Management</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Enterprise IAM solutions with SSO, MFA, role-based access control, and privileged access management.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$699/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/identity-access-management" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
              </div>
            </div>

            {/* Development & DevOps Services */}
            <div className="mb-12">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                Development & DevOps Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚙️</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">DevOps & CI/CD</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Streamline development workflows with automated testing, deployment, monitoring, and infrastructure management.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$599/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/devops-cicd" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🐳</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Container Orchestration</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Kubernetes and Docker container orchestration with automated scaling, service mesh, and monitoring.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$799/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/container-orchestration" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Mobile App Development</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Native and cross-platform mobile applications with AI integration, modern UX design, and enterprise security.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$1,999/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/mobile-app-development" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌐</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Web Development</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Modern web applications with React, Node.js, and cloud deployment. Responsive design and performance optimization.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-teal-400 mb-2">$1,499/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/web-development" className="text-teal-400 hover:text-teal-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
              </div>
            </div>

            {/* Data & Analytics Services */}
            <div className="mb-12">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                Data & Analytics Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗄️</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Database Management</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Database design, optimization, migration, and management with AI-powered performance tuning and 24/7 monitoring.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-teal-400 mb-2">$399/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/database-management" className="text-teal-400 hover:text-teal-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Data Analytics Platform</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Enterprise data analytics platform with real-time processing, machine learning, and interactive dashboards.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$1,199/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/data-analytics-platform" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔄</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Data Integration</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    ETL/ELT data integration services with real-time processing, data quality management, and API connectivity.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$899/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/data-integration" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Business Intelligence</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Advanced BI solutions with interactive dashboards, automated reporting, and predictive analytics.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">$1,499/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/business-intelligence" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
              </div>
            </div>

            {/* Network & Infrastructure Services */}
            <div className="mb-12">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                Network & Infrastructure Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌐</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Network Solutions</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Enterprise networking, VPN setup, load balancing, and network security with 24/7 monitoring and management.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$699/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/network-solutions" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛠️</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Consulting</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Strategic IT planning, technology assessment, digital transformation consulting, and architecture design.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$299/hour</div>
                    <div className="text-xs text-gray-400 mb-2">Free initial consultation</div>
                    <a href="/it-consulting" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Support & Maintenance</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Comprehensive IT support, system maintenance, and troubleshooting with guaranteed response times and SLA.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$499/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/it-support" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔧</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Managed IT Services</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Complete IT management including monitoring, maintenance, updates, and 24/7 support with proactive issue resolution.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$1,299/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/managed-it-services" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
          {/* Advanced AI Services */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
              Advanced AI Services
            </h3>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto px-4">
              Cutting-edge AI solutions powered by machine learning, deep learning, and neural networks. 
              Transform your business with intelligent automation, predictive analytics, and cognitive computing.
            </p>
            
            {/* Core AI Services */}
            <div className="mb-12">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                Core AI Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤖</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Services</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Comprehensive AI solutions including machine learning, natural language processing, computer vision, and predictive analytics.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$1,500/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📢</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Marketing</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Revolutionary AI-powered marketing automation, ad optimization, content generation, and customer journey personalization.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">$199/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-marketing" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚙️</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Automation</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Intelligent automation of business processes with decision-making capabilities, exception handling, and 500+ integrations.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$399/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏥</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Healthcare</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Cutting-edge AI solutions for medical imaging, drug discovery, personalized medicine, and clinical decision support.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$1,999/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-healthcare" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💰</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Fintech</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Revolutionary AI-powered financial services including trading, fraud detection, risk management, and algorithmic trading.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$1,499/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-fintech" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚛️</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Quantum Computing</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Next-generation quantum computing capabilities for complex problem solving, optimization, and advanced cryptography.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">Custom Pricing</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
              </div>
            </div>

            {/* AI Business Solutions */}
            <div className="mb-12">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                AI Business Solutions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💬</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Customer Support</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Revolutionary AI-powered customer support with chatbots, omnichannel communication, and intelligent automation.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$199/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-customer-support" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Sales Automation</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Boost sales by 300% with intelligent lead scoring, automated outreach, CRM integration, and predictive analytics.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$299/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-sales-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Workflow Automation</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Automate any business process with intelligent workflows, 90% time savings, and 500+ integrations.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$99/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-workflow-automation" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Data Visualization</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Transform data into actionable insights with AI-powered visualization, interactive dashboards, and 100+ data sources.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$149/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-data-visualization" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Lead Generation</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Generate high-quality leads with AI-powered prospecting, email sequences, and automated follow-ups.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">$199/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-lead-generation" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Document Processing</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Automatically extract, process, and analyze documents with AI-powered OCR and intelligent data extraction.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$149/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-document-processing" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🧠</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Content Generation</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    AI-powered content creation for blogs, social media, marketing materials, and technical documentation.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$179/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-content-generation" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔒</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Cybersecurity</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    AI-powered threat detection, vulnerability assessment, and automated security response with 24/7 monitoring.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2">$799/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-cybersecurity" className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
              </div>
            </div>

            {/* AI E-commerce Solutions */}
            <div className="mb-12">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                AI E-commerce Solutions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛒</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI E-commerce</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    AI-powered e-commerce optimization with product recommendations, pricing strategies, and inventory management.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$599/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-ecommerce-solutions" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Mobile Apps</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    AI-powered mobile applications with intelligent features, personalization, and advanced analytics.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$1,299/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-mobile-app-development" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Data Analytics</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Advanced AI data analytics with machine learning, predictive modeling, and real-time insights.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$899/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-data-analytics" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤖</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Chatbots</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Intelligent chatbots for customer support, sales, and lead generation with natural language processing.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$299/month</div>
                    <div className="text-xs text-gray-400 mb-2">Free consultation included</div>
                    <a href="/ai-chatbots" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                      Get Quote →
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
          {/* Emerging Technologies Grid */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
              Emerging Technologies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤖</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Robotics</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Intelligent robotic solutions for manufacturing, healthcare, and service industries.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2">Custom Pricing</div>
                  <a href="/robotics" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌐</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">IoT & Edge</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Connected devices and edge computing solutions for smart cities and industrial automation.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-2">Starting at $499/month</div>
                  <a href="/iot-edge-computing" className="text-green-400 hover:text-green-300 font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔗</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Blockchain & Web3</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Decentralized solutions, smart contracts, and Web3 applications for the future of business.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400 mb-2">Starting at $699/month</div>
                  <a href="/blockchain-web3" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🧠</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Business Intelligence</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Data-driven insights and predictive analytics to optimize business performance and decision-making.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-400 mb-2">Starting at $399/month</div>
                  <a href="/business-intelligence" className="text-pink-400 hover:text-pink-300 font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* IT Services Grid */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
              IT Services & Infrastructure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛠️</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">DevOps & CI/CD</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Streamline development workflows with automated testing, deployment, and monitoring solutions.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-2">Starting at $299/month</div>
                  <a href="/devops" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Mobile Development</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Native and cross-platform mobile applications with AI integration and modern UX design.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-400 mb-2">Starting at $1,299/month</div>
                  <a href="/ai-mobile-app-development" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗄️</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Database Services</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Database design, optimization, migration, and management with AI-powered performance tuning.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-teal-400 mb-2">Starting at $199/month</div>
                  <a href="/database" className="text-teal-400 hover:text-teal-300 font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* Micro SAAS Solutions Section */}
        <section className="mb-16" aria-labelledby="micro-saas-heading">
          <h2 id="micro-saas-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Micro SAAS Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
            Affordable, powerful AI-driven tools for modern businesses. 50+ ready-to-use applications.
          </p>
          {/* Productivity Tools */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
              Productivity & Business Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📝</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Writing Assistant</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-2">$29/month</div>
                  <a href="/ai-writing-assistant" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Smart Analytics</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Real-time business analytics with AI insights, automated reports, and predictive forecasting.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-2">$49/month</div>
                  <a href="/smart-analytics" className="text-green-400 hover:text-green-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📅</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Scheduler</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Intelligent scheduling with calendar optimization, meeting coordination, and time management.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400 mb-2">$19/month</div>
                  <a href="/ai-scheduler" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💰</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Expense Tracker</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered expense management with receipt scanning, categorization, and budget insights.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400 mb-2">$15/month</div>
                  <a href="/expense-tracker" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Task Manager Pro</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Advanced task management with AI prioritization, team collaboration, and progress tracking.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-400 mb-2">$39/month</div>
                  <a href="/task-manager-pro" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">CRM Lite</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-400 mb-2">$59/month</div>
                  <a href="/crm-lite" className="text-pink-400 hover:text-pink-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📧</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Email Optimizer</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2">$25/month</div>
                  <a href="/email-optimizer" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Social Media Manager</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-driven social media management with content creation, scheduling, and performance analytics.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-400 mb-2">$45/month</div>
                  <a href="/social-media-manager" className="text-orange-400 hover:text-orange-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* Marketing & Sales Tools */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
              Marketing & Sales Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎨</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Design Studio</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Create stunning graphics, logos, and marketing materials with AI-powered design tools.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-400 mb-2">$35/month</div>
                  <a href="/ai-design-studio" className="text-pink-400 hover:text-pink-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Landing Page Builder</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Build high-converting landing pages with AI optimization and A/B testing capabilities.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-2">$29/month</div>
                  <a href="/landing-page-builder" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">SEO Optimizer</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered SEO analysis and optimization with keyword research and content suggestions.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-2">$49/month</div>
                  <a href="/seo-optimizer" className="text-green-400 hover:text-green-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Ad Campaign Manager</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400 mb-2">$79/month</div>
                  <a href="/ad-campaign-manager" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* Developer Tools */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
              Developer Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💻</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Code Assistant</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered code completion, debugging, and optimization for multiple programming languages.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2">$39/month</div>
                  <a href="/code-assistant" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔧</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">API Builder</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Create and manage APIs with AI assistance, documentation generation, and testing tools.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-400 mb-2">$59/month</div>
                  <a href="/api-builder" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🐛</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Bug Tracker Pro</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-red-400 mb-2">$25/month</div>
                  <a href="/bug-tracker-pro" className="text-red-400 hover:text-red-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📚</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Doc Generator</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Automatically generate technical documentation, API docs, and user guides from code.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400 mb-2">$19/month</div>
                  <a href="/doc-generator" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* Statistics Section */}
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentStatistics />
        </Suspense>
        {/* Content Carousel */}
        <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentCarousel />
        </Suspense>
        {/* Dynamic Content Showcase */}
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <DynamicContentShowcase />
        </Suspense>
        {/* Newsletter Signup */}
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentNewsletterSignup />
        </Suspense>

        {/* Contact Section */}
        <section className="mb-16" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Get in touch with our experts to discuss your AI and IT needs. We're here to help you achieve unprecedented growth.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6 neon-text">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                        +1 (302) 464-0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Address</p>
                      <p className="text-white font-semibold">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Business Hours</p>
                      <p className="text-white font-semibold">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        24/7 Emergency Support Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Contact Form */}
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6 neon-text">Get Free Consultation</h3>
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
                      placeholder="Enter your full name"
                      required
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
                      placeholder="Enter your email"
                      required
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
                      placeholder="Enter your phone number"
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