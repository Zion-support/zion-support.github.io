'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

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
        event_label: 'main_phone_number',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg particle-system">
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
          className={`text-center mb-16 transition-all duration-1000 cyber-scan-line floating ${
            isLoaded && isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          aria-labelledby="hero-heading"
        >
          <h1 
            id="hero-heading" 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text glitch"
            data-text="Zion Tech Group"
          >
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-glow" role="doc-subtitle">
            Advanced AI and IT Solutions
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
            Transform your business with our cutting-edge technology and achieve unprecedented growth.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12">
            <div className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl mb-3 floating">🚀</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-glow">AI-Powered Solutions</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
            </div>
            <div className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl mb-3 floating">⚡</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-glow">Proven Results</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
            </div>
            <div className="futuristic-card holographic p-4 sm:p-6 sm:col-span-2 lg:col-span-1 hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl mb-3 floating">🔒</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-glow">Enterprise Security</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
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
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card holographic p-4 sm:p-6 energy-pulse hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line floating">🤖</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Services</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-glow">Starting at $1,500/month</div>
                  <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card holographic p-4 sm:p-6 energy-pulse hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line floating">📢</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Marketing</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Revolutionary AI-powered marketing automation, ad optimization, and content generation.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2 neon-glow">Starting at $199/month</div>
                  <a href="/ai-marketing" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card holographic p-4 sm:p-6 energy-pulse hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line floating">⚙️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Automation</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Intelligent automation of business processes with decision-making capabilities and exception handling.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2 neon-glow">Starting at $399/month</div>
                  <a href="/ai-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
          </div>

          {/* Secondary Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center floating">🏥</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-glow">AI Healthcare</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2 neon-glow">Starting at $1,999/month</div>
                  <a href="/ai-healthcare" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center floating">💰</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-glow">AI Fintech</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Revolutionary AI-powered financial services including trading, fraud detection, and risk management.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2 neon-glow">Starting at $1,499/month</div>
                  <a href="/ai-fintech" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center floating">⚛️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-glow">Quantum Computing</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Next-generation quantum computing capabilities for complex problem solving and optimization.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2 neon-glow">Custom Pricing</div>
                  <a href="/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
          </div>

          {/* Micro SAAS Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center floating">💻</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-glow">AI Document Processor</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Intelligent document processing with OCR, data extraction, and automated workflows. Process 10,000+ documents daily.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2 neon-glow">$99/month</div>
                  <a href="/ai-document-processor" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center floating">📊</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-glow">AI Analytics Dashboard</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Real-time business intelligence with predictive analytics, custom dashboards, and automated reporting.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-glow">$149/month</div>
                  <a href="/ai-analytics-dashboard" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center floating">🤖</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-glow">AI Customer Support Bot</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Advanced chatbot with natural language processing, 24/7 support, and seamless human handoff capabilities.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2 neon-glow">$79/month</div>
                  <a href="/ai-customer-support-bot" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center floating">📧</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-glow">AI Email Marketing</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Intelligent email campaigns with personalization, A/B testing, and automated follow-ups. 95% open rates guaranteed.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2 neon-glow">$199/month</div>
                  <a href="/ai-email-marketing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center floating">🔍</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-glow">AI SEO Optimizer</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Automated SEO analysis, keyword research, content optimization, and rank tracking. Boost your search visibility by 300%.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2 neon-glow">$129/month</div>
                  <a href="/ai-seo-optimizer" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center floating">💳</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-glow">AI Payment Processor</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Smart payment processing with fraud detection, automated reconciliation, and multi-currency support.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2 neon-glow">2.9% + $0.30</div>
                  <a href="/ai-payment-processor" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center floating">📱</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-glow">AI Mobile App Builder</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  No-code mobile app development with AI assistance. Create iOS and Android apps in minutes, not months.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2 neon-glow">$299/month</div>
                  <a href="/ai-mobile-app-builder" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center floating">🎯</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-glow">AI Lead Generator</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Automated lead generation with AI-powered prospecting, email sequences, and CRM integration. Generate 500+ qualified leads monthly.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2 neon-glow">$179/month</div>
                  <a href="/ai-lead-generator" className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center floating">🔐</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-glow">AI Security Scanner</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Advanced cybersecurity scanning with threat detection, vulnerability assessment, and automated security patches.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-emerald-400 mb-2 neon-glow">$249/month</div>
                  <a href="/ai-security-scanner" className="text-emerald-400 hover:text-emerald-300 font-medium text-sm sm:text-base hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
          </div>

          {/* Additional Micro SAAS Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 floating">📝</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4 neon-glow">AI Content Writer</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Generate high-quality content for blogs, social media, and marketing materials with AI assistance.
              </p>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400 mb-2 neon-glow">$49/month</div>
                <a href="/ai-content-writer" className="text-blue-400 hover:text-blue-300 text-sm hover:neon-glow">Learn More →</a>
              </div>
            </article>

            <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 floating">📈</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4 neon-glow">AI Social Media Manager</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Automated social media posting, engagement tracking, and content optimization across all platforms.
              </p>
              <div className="text-center">
                <div className="text-lg font-bold text-pink-400 mb-2 neon-glow">$89/month</div>
                <a href="/ai-social-media-manager" className="text-pink-400 hover:text-pink-300 text-sm hover:neon-glow">Learn More →</a>
              </div>
            </article>

            <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 floating">🎨</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4 neon-glow">AI Design Assistant</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Create stunning graphics, logos, and marketing materials with AI-powered design tools.
              </p>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400 mb-2 neon-glow">$69/month</div>
                <a href="/ai-design-assistant" className="text-purple-400 hover:text-purple-300 text-sm hover:neon-glow">Learn More →</a>
              </div>
            </article>

            <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 floating">📊</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4 neon-glow">AI Data Visualizer</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Transform complex data into interactive charts, graphs, and dashboards automatically.
              </p>
              <div className="text-center">
                <div className="text-lg font-bold text-cyan-400 mb-2 neon-glow">$99/month</div>
                <a href="/ai-data-visualizer" className="text-cyan-400 hover:text-cyan-300 text-sm hover:neon-glow">Learn More →</a>
              </div>
            </article>

            <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 floating">🔔</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4 neon-glow">AI Notification System</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Smart notification management with intelligent routing and personalized delivery.
              </p>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400 mb-2 neon-glow">$39/month</div>
                <a href="/ai-notification-system" className="text-orange-400 hover:text-orange-300 text-sm hover:neon-glow">Learn More →</a>
              </div>
            </article>

            <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 floating">📋</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4 neon-glow">AI Task Manager</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Intelligent task management with automated prioritization and deadline tracking.
              </p>
              <div className="text-center">
                <div className="text-lg font-bold text-green-400 mb-2 neon-glow">$59/month</div>
                <a href="/ai-task-manager" className="text-green-400 hover:text-green-300 text-sm hover:neon-glow">Learn More →</a>
              </div>
            </article>

            <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 floating">💬</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4 neon-glow">AI Chat Translator</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Real-time translation for 100+ languages with context-aware accuracy and cultural adaptation.
              </p>
              <div className="text-center">
                <div className="text-lg font-bold text-indigo-400 mb-2 neon-glow">$79/month</div>
                <a href="/ai-chat-translator" className="text-indigo-400 hover:text-indigo-300 text-sm hover:neon-glow">Learn More →</a>
              </div>
            </article>

            <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 floating">📸</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4 neon-glow">AI Image Generator</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Create professional images, illustrations, and graphics from text descriptions using advanced AI.
              </p>
              <div className="text-center">
                <div className="text-lg font-bold text-rose-400 mb-2 neon-glow">$119/month</div>
                <a href="/ai-image-generator" className="text-rose-400 hover:text-rose-300 text-sm hover:neon-glow">Learn More →</a>
              </div>
            </article>

            <article className="futuristic-card holographic p-4 sm:p-6 hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 floating">🎵</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4 neon-glow">AI Audio Processor</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Advanced audio processing, noise reduction, and voice enhancement for professional quality sound.
              </p>
              <div className="text-center">
                <div className="text-lg font-bold text-violet-400 mb-2 neon-glow">$89/month</div>
                <a href="/ai-audio-processor" className="text-violet-400 hover:text-violet-300 text-sm hover:neon-glow">Learn More →</a>
              </div>
            </article>
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;