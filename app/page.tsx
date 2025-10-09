'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
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
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl"></div>
            <div className="relative z-10 py-16 px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300">
                  Advanced AI & IT Solutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge artificial intelligence, quantum computing, and innovative IT solutions. 
                We deliver enterprise-grade technology that drives growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Get Started Today
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
                      <a href="/ai-analytics" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
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
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🤖</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Chatbot Builder</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Create intelligent chatbots for customer support, sales, and lead generation with no coding required.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$99/month</div>
                      <a href="/ai-chatbot-builder" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📧</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Email Marketing</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Automated email campaigns with AI optimization, personalization, and advanced analytics for maximum ROI.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$179/month</div>
                      <a href="/ai-email-marketing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📱</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Mobile App Builder</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$399/month</div>
                      <a href="/ai-mobile-builder" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔍</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI SEO Optimizer</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$129/month</div>
                      <a href="/ai-seo-optimizer" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💰</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Invoice Generator</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Automated invoice creation, payment tracking, and financial reporting with AI-powered insights.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$79/month</div>
                      <a href="/ai-invoice-generator" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎯</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Lead Scoring</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Intelligent lead scoring and qualification with AI-powered predictive analytics and automated follow-ups.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2">$89/month</div>
                      <a href="/ai-lead-scoring" className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📈</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Social Media Manager</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Automated social media posting, engagement, and analytics with AI content optimization and scheduling.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-teal-400 mb-2">$159/month</div>
                      <a href="/ai-social-media-manager" className="text-teal-400 hover:text-teal-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🛒</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI E-commerce Assistant</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Complete e-commerce automation with AI product recommendations, pricing optimization, and inventory management.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-violet-400 mb-2">$249/month</div>
                      <a href="/ai-ecommerce-assistant" className="text-violet-400 hover:text-violet-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📝</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Document Processor</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Intelligent document processing, OCR, data extraction, and automated workflow management with AI.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-amber-400 mb-2">$119/month</div>
                      <a href="/ai-document-processor" className="text-amber-400 hover:text-amber-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎨</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Design Studio</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      AI-powered graphic design, logo creation, brand identity, and visual content generation for businesses.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-rose-400 mb-2">$189/month</div>
                      <a href="/ai-design-studio" className="text-rose-400 hover:text-rose-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔐</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Security Monitor</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Real-time security monitoring, threat detection, and automated incident response with AI intelligence.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-emerald-400 mb-2">$199/month</div>
                      <a href="/ai-security-monitor" className="text-emerald-400 hover:text-emerald-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📊</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Financial Planner</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Intelligent financial planning, budgeting, investment analysis, and automated financial reporting.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-sky-400 mb-2">$169/month</div>
                      <a href="/ai-financial-planner" className="text-sky-400 hover:text-sky-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🏥</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Health Tracker</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Personal health monitoring, fitness tracking, nutrition analysis, and AI-powered health insights.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-lime-400 mb-2">$79/month</div>
                      <a href="/ai-health-tracker" className="text-lime-400 hover:text-lime-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎓</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Learning Platform</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Personalized learning paths, AI tutoring, skill assessment, and automated course creation.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-fuchsia-400 mb-2">$139/month</div>
                      <a href="/ai-learning-platform" className="text-fuchsia-400 hover:text-fuchsia-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
              </div>
            </div>
            
            {/* Advanced Micro SAAS Solutions */}
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
                Advanced Micro SAAS Solutions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🧠</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Code Generator</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Generate production-ready code in multiple languages with AI assistance, debugging, and optimization.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-emerald-400 mb-2">$89/month</div>
                      <a href="/ai-code-generator" className="text-emerald-400 hover:text-emerald-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎬</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Video Creator</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Create professional videos with AI script generation, voice synthesis, and automated editing.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$199/month</div>
                      <a href="/ai-video-creator" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎵</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Music Composer</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Generate royalty-free music, sound effects, and jingles with AI-powered composition and mixing.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">$149/month</div>
                      <a href="/ai-music-composer" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📱</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI App Builder</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Build native mobile and web apps with AI assistance, drag-and-drop interface, and instant deployment.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$299/month</div>
                      <a href="/ai-app-builder" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔍</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Market Research</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Automated market analysis, competitor research, trend identification, and business intelligence reports.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$179/month</div>
                      <a href="/ai-market-research" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🏪</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Store Optimizer</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Optimize e-commerce stores with AI-powered product recommendations, pricing, and conversion optimization.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$229/month</div>
                      <a href="/ai-store-optimizer" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📊</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Data Pipeline</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Automated data collection, processing, and analysis with real-time insights and predictive modeling.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$159/month</div>
                      <a href="/ai-data-pipeline" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎯</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI A/B Testing</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Intelligent A/B testing with AI-powered hypothesis generation, automated testing, and optimization.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2">$119/month</div>
                      <a href="/ai-ab-testing" className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🌐</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Website Builder</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Create stunning websites with AI design, content generation, SEO optimization, and hosting.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-teal-400 mb-2">$99/month</div>
                      <a href="/ai-website-builder" className="text-teal-400 hover:text-teal-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💬</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Live Chat</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Intelligent live chat with AI-powered responses, sentiment analysis, and automated customer support.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$69/month</div>
                      <a href="/ai-live-chat" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📈</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Growth Hacker</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Automated growth strategies, viral marketing campaigns, and user acquisition optimization with AI.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$189/month</div>
                      <a href="/ai-growth-hacker" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔐</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Password Manager</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      Secure password management with AI-powered security analysis, breach detection, and auto-generation.
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$39/month</div>
                      <a href="/ai-password-manager" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
              </div>
            </div>

            {/* IT Services & Infrastructure */}
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
                IT Services & Infrastructure
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">☁️</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cloud Migration</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Seamless cloud migration with AWS, Azure, and GCP. 99.9% uptime guarantee and 24/7 expert support.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$1,299/month</div>
                    <a href="/cloud-migration" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔒</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cybersecurity Suite</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Comprehensive security solutions with threat detection, vulnerability assessment, and automated response.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2">$799/month</div>
                    <a href="/cybersecurity-suite" className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚙️</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">DevOps & CI/CD</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Streamline development workflows with automated testing, deployment, and monitoring solutions.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$599/month</div>
                    <a href="/devops-cicd" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗄️</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Database Management</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Database design, optimization, migration, and management with AI-powered performance tuning.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-teal-400 mb-2">$399/month</div>
                    <a href="/database-management" className="text-teal-400 hover:text-teal-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌐</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Network Solutions</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Enterprise networking, VPN setup, load balancing, and network security with 24/7 monitoring.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$699/month</div>
                    <a href="/network-solutions" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Mobile App Development</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Native and cross-platform mobile applications with AI integration and modern UX design.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$1,999/month</div>
                    <a href="/mobile-app-development" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛠️</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Consulting</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Strategic IT planning, technology assessment, and digital transformation consulting.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$299/hour</div>
                    <a href="/it-consulting" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Support & Maintenance</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    24/7 technical support, system monitoring, and proactive maintenance with guaranteed response times.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$499/month</div>
                    <a href="/it-support-maintenance" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔧</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">System Integration</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Seamless integration of disparate systems, APIs, and third-party applications with real-time data sync.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$899/month</div>
                    <a href="/system-integration" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💾</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Data Backup & Recovery</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Automated backup solutions, disaster recovery planning, and data restoration with 99.99% reliability.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$199/month</div>
                    <a href="/data-backup-recovery" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏢</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Enterprise Solutions</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Large-scale enterprise IT solutions including ERP integration, custom software, and digital transformation.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-violet-400 mb-2">Custom Pricing</div>
                    <a href="/enterprise-solutions" className="text-violet-400 hover:text-violet-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔐</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Identity & Access Management</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Secure identity management, single sign-on, multi-factor authentication, and access control solutions.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2">$349/month</div>
                    <a href="/identity-access-management" className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Performance Optimization</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    System performance tuning, bottleneck identification, and optimization for maximum efficiency and speed.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$599/month</div>
                    <a href="/performance-optimization" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌍</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Global IT Services</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Worldwide IT support, multi-region deployment, and international compliance with local regulations.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-teal-400 mb-2">$1,199/month</div>
                    <a href="/global-it-services" className="text-teal-400 hover:text-teal-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎓</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Training & Certification</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Comprehensive IT training programs, certification preparation, and skill development for your team.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$199/person</div>
                    <a href="/it-training-certification" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
              </div>
            </div>

            {/* Advanced AI Services */}
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
                Advanced AI Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🧠</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Machine Learning Models</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Custom ML model development, training, and deployment with advanced algorithms and real-time inference.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$2,499/month</div>
                    <a href="/machine-learning-models" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👁️</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Computer Vision</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Advanced image recognition, object detection, facial recognition, and visual AI solutions.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$1,899/month</div>
                    <a href="/computer-vision" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗣️</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Natural Language Processing</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Advanced NLP solutions including sentiment analysis, language translation, and text generation.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$1,599/month</div>
                    <a href="/natural-language-processing" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤖</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Chatbots & Virtual Assistants</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Intelligent conversational AI with context awareness, multi-language support, and seamless integration.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$799/month</div>
                    <a href="/ai-chatbots-virtual-assistants" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔮</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Predictive Analytics</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Advanced predictive modeling, forecasting, and trend analysis with real-time data processing.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$1,299/month</div>
                    <a href="/predictive-analytics" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Recommendation Engines</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Personalized recommendation systems for e-commerce, content, and product suggestions with high accuracy.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">$999/month</div>
                    <a href="/ai-recommendation-engines" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Search & Discovery</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Intelligent search solutions with semantic understanding, voice search, and contextual results.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$699/month</div>
                    <a href="/ai-search-discovery" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Process Automation</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    End-to-end process automation with AI decision-making, exception handling, and continuous optimization.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$1,199/month</div>
                    <a href="/ai-process-automation" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
              </div>
            </div>

            {/* Emerging Technologies */}
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
                Emerging Technologies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚛️</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Quantum Computing</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Next-generation quantum computing solutions for complex optimization and cryptographic applications.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">Custom Pricing</div>
                    <a href="/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤖</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Robotics & Automation</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Intelligent robotics solutions for manufacturing, logistics, and service industries with AI integration.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$2,999/month</div>
                    <a href="/robotics-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌐</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IoT & Edge Computing</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Connected device solutions with edge AI processing, real-time analytics, and smart infrastructure.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$1,499/month</div>
                    <a href="/iot-edge-computing" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⛓️</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Blockchain & Web3</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Decentralized applications, smart contracts, NFT platforms, and Web3 infrastructure solutions.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$1,799/month</div>
                    <a href="/blockchain-web3" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🧬</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Biotech AI</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    AI-powered biotechnology solutions for drug discovery, genetic analysis, and personalized medicine.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-teal-400 mb-2">$3,499/month</div>
                    <a href="/biotech-ai" className="text-teal-400 hover:text-teal-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚗</div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Autonomous Systems</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Self-driving vehicles, autonomous drones, and intelligent transportation systems with AI control.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2">$4,999/month</div>
                    <a href="/autonomous-systems" className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
                Get Started Today
              </h3>
              <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h4>
                <p className="text-gray-300 mb-6 text-base sm:text-lg">
                  Contact us for a free consultation and discover how our AI and IT solutions can revolutionize your operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:+13024640950"
                    onClick={handlePhoneClick}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-5 h-5" />
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                  <p>🌐 https://ziontechgroup.com</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default HomePage;