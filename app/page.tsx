'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
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
    setTimeout(() => {
      import('./components/ContentPromotionBanner');
      import('./components/ContentCarousel');
    }, 100);
  }
};

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="cyber-card p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-700 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded w-5/6"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    preloadComponents();
    return () => clearTimeout(timer);
  }, []);

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
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services', 'micro saas', 'ai tools']}
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
            'Business Intelligence',
            'Micro SAAS Solutions'
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
        enableSkipLinks={true}
        enableARIALabels={true}
      />
      <Analytics
        enableGoogleAnalytics={true}
        enablePerformanceMonitoring={true}
        enableErrorTracking={true}
        enableUserBehaviorTracking={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
        enableContentTypeSniffingProtection={true}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field cyber-matrix-bg particle-field-advanced cyber-grid-advanced">
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
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text holographic-text glitch"
                data-text="Zion Tech Group"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Global Reach</h3>
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

          {/* Enterprise Services Section */}
          <section className="mb-16" aria-labelledby="enterprise-services-heading">
            <h2 id="enterprise-services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Enterprise AI Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive AI and IT solutions designed to transform your business operations
            </p>
            
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
              
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="quantum-card p-4 sm:p-6 energy-pulse">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">⚛️</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">Quantum Computing</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Next-generation quantum computing capabilities for complex problem solving and optimization.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2 neon-text">Custom Pricing</div>
                    <a href="/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
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
            
            {/* Productivity & Business Tools */}
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
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💻</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI-Powered CRM</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Intelligent customer relationship management with AI insights, automated follow-ups, and predictive analytics.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-400 mb-2">$149/month</div>
                    <a href="/ai-crm" className="text-orange-400 hover:text-orange-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📧</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Email Assistant</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Smart email management with AI-powered responses, scheduling, and priority classification.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-indigo-400 mb-2">$39/month</div>
                    <a href="/ai-email-assistant" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                      Try Free →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Sales Forecasting</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Advanced sales forecasting with AI predictions, trend analysis, and revenue optimization recommendations.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-emerald-400 mb-2">$199/month</div>
                    <a href="/ai-sales-forecasting" className="text-emerald-400 hover:text-emerald-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Lead Scoring</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Intelligent lead scoring and qualification with AI-powered predictive analytics and automated nurturing.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-400 mb-2">$149/month</div>
                    <a href="/ai-lead-scoring" className="text-red-400 hover:text-red-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💰</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Invoice Generator</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Automated invoice creation, payment tracking, and financial reporting with AI-powered insights.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-indigo-400 mb-2">$79/month</div>
                    <a href="/ai-invoice-generator" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
              </div>
            </div>

            {/* Marketing & Content Tools */}
            <div className="mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                Marketing & Content Tools
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">✍️</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Content Studio</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Complete content creation suite with AI writing, image generation, video editing, and social media automation.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-pink-400 mb-2">$299/month</div>
                    <a href="/ai-content-studio" className="text-pink-400 hover:text-pink-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤖</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Chatbot Builder</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Create intelligent chatbots for customer support, sales, and lead generation with no coding required.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400 mb-2">$99/month</div>
                    <a href="/ai-chatbot-builder" className="text-green-400 hover:text-green-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Social Media Manager</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Automated social media posting, engagement, and analytics with AI content optimization and scheduling.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-teal-400 mb-2">$159/month</div>
                    <a href="/ai-social-media-manager" className="text-teal-400 hover:text-teal-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI SEO Optimizer</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400 mb-2">$129/month</div>
                    <a href="/ai-seo-optimizer" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Analytics Dashboard</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Real-time business intelligence with AI-powered insights, custom dashboards, and automated reporting.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-2">$199/month</div>
                    <a href="/ai-analytics-dashboard" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎨</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Design Assistant</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    AI-powered design tool for logos, graphics, and visual content with automated brand consistency.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-rose-400 mb-2">$129/month</div>
                    <a href="/ai-design-assistant" className="text-rose-400 hover:text-rose-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📹</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Video Generator</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Create professional videos with AI-powered editing, voice synthesis, and automated content generation.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-violet-400 mb-2">$199/month</div>
                    <a href="/ai-video-generation" className="text-violet-400 hover:text-violet-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎵</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Music Composer</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Generate original music tracks, sound effects, and audio content with AI-powered composition tools.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400 mb-2">$89/month</div>
                    <a href="/ai-music-composition" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
              </div>
            </div>

            {/* E-commerce & Sales Tools */}
            <div className="mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                E-commerce & Sales Tools
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛒</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI E-commerce Optimizer</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Optimize e-commerce performance with AI-powered product recommendations, pricing, and conversion optimization.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-violet-400 mb-2">$249/month</div>
                    <a href="/ai-ecommerce-solutions" className="text-violet-400 hover:text-violet-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Mobile App Builder</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400 mb-2">$399/month</div>
                    <a href="/ai-mobile-app-development" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💳</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Payment Processor</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Intelligent payment processing with fraud detection, automated reconciliation, and smart routing.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-emerald-400 mb-2">$179/month</div>
                    <a href="/ai-payment-processor" className="text-emerald-400 hover:text-emerald-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📦</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Inventory Manager</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Smart inventory management with demand forecasting, automated reordering, and optimization algorithms.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-400 mb-2">$149/month</div>
                    <a href="/ai-inventory-manager" className="text-orange-400 hover:text-orange-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
              </div>
            </div>

            {/* Specialized Industry Tools */}
            <div className="mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                Specialized Industry Tools
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏥</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Healthcare Assistant</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Medical AI tools for diagnosis assistance, patient monitoring, and healthcare workflow optimization.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400 mb-2">$1,999/month</div>
                    <a href="/ai-healthcare" className="text-green-400 hover:text-green-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💰</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Fintech Solutions</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Revolutionary AI-powered financial services including trading, fraud detection, and risk management.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-indigo-400 mb-2">$1,499/month</div>
                    <a href="/ai-fintech" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎓</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Education Platform</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Personalized learning platform with AI tutoring, adaptive curriculum, and progress tracking.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400 mb-2">$299/month</div>
                    <a href="/ai-education-platform" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏠</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Real Estate Assistant</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Property valuation, market analysis, and automated property management with AI insights.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-amber-400 mb-2">$199/month</div>
                    <a href="/ai-real-estate-assistant" className="text-amber-400 hover:text-amber-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚗</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Fleet Manager</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Intelligent fleet management with route optimization, maintenance scheduling, and fuel efficiency.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-400 mb-2">$349/month</div>
                    <a href="/ai-fleet-manager" className="text-slate-400 hover:text-slate-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌱</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Agriculture Monitor</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Smart farming solutions with crop monitoring, yield prediction, and automated irrigation systems.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400 mb-2">$249/month</div>
                    <a href="/ai-agriculture-monitor" className="text-green-400 hover:text-green-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏭</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Manufacturing Optimizer</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Industrial AI for production optimization, quality control, and predictive maintenance.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-400 mb-2">$499/month</div>
                    <a href="/ai-manufacturing-optimizer" className="text-gray-400 hover:text-gray-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏪</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Retail Assistant</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Smart retail solutions with customer behavior analysis, inventory optimization, and personalized recommendations.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-pink-400 mb-2">$179/month</div>
                    <a href="/ai-retail-assistant" className="text-pink-400 hover:text-pink-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
              </div>
            </div>

            {/* Advanced AI Tools */}
            <div className="mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
                Advanced AI Tools
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔐</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Security Monitor</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Real-time security monitoring with AI threat detection, automated response, and compliance reporting.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-400 mb-2">$299/month</div>
                    <a href="/ai-cybersecurity" className="text-slate-400 hover:text-slate-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📝</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Document Processor</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Intelligent document processing, OCR, data extraction, and automated form filling with AI accuracy.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-amber-400 mb-2">$179/month</div>
                    <a href="/ai-document-processing" className="text-amber-400 hover:text-amber-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎤</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Voice Cloning</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    High-quality voice synthesis and cloning technology for audio content creation and personalization.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400 mb-2">$149/month</div>
                    <a href="/ai-voice-cloning" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎨</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI 3D Generator</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Create stunning 3D models, animations, and visualizations with AI-powered design tools.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-2">$199/month</div>
                    <a href="/ai-3d-generation" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👗</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Fashion Designer</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    AI-powered fashion design with trend analysis, pattern generation, and virtual try-on technology.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-pink-400 mb-2">$249/month</div>
                    <a href="/ai-fashion-design" className="text-pink-400 hover:text-pink-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💪</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Fitness Coach</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Personalized fitness training with AI workout plans, nutrition guidance, and progress tracking.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-400 mb-2">$79/month</div>
                    <a href="/ai-fitness-coach" className="text-orange-400 hover:text-orange-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔬</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Data Analytics</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Advanced data analysis with AI insights, predictive modeling, and automated reporting for business intelligence.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400 mb-2">$299/month</div>
                    <a href="/ai-data-analytics" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
                
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤖</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Code Generator</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Automated code generation with AI assistance, bug detection, and intelligent refactoring for developers.
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400 mb-2">$199/month</div>
                    <a href="/ai-code-generation" className="text-green-400 hover:text-green-300 font-medium text-sm">
                      Learn More →
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <div className="max-w-4xl mx-auto">
              <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
                Get in touch with our AI experts to discuss your project and discover how our solutions can drive your success.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-4 neon-text">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="text-cyan-400 w-5 h-5" />
                      <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        +1 (302) 464-0950
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-cyan-400 w-5 h-5" />
                      <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-cyan-400 w-5 h-5" />
                      <span className="text-gray-300">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="text-cyan-400 w-5 h-5" />
                      <span className="text-gray-300">
                        Mon-Fri: 9AM-6PM EST<br />
                        24/7 Support Available
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-4 neon-text">Quick Contact</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="your@email.com"
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