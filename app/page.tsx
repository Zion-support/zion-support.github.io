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
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text holographic-text"
                data-text="Zion Tech Group"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
                  aria-label="Call us at (302) 464-0950"
                >
                  <Phone className="w-5 h-5" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:info@ziontechgroup.com"
                  className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
                  aria-label="Email us at info@ziontechgroup.com"
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </a>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-300">AI Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                <div className="text-2xl font-bold text-white mb-1">100+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                <div className="text-2xl font-bold text-white mb-1">99%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge AI solutions designed to transform your business operations and drive innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Lead Generation */}
              <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">AI Lead Generation</h3>
                <p className="text-gray-300 mb-4 text-center">
                  Intelligent lead scoring and qualification with AI-powered predictive analytics and automated nurturing.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-red-400 mb-2">$149/month</div>
                  <a href="/ai-lead-generation" className="text-red-400 hover:text-red-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>

              {/* AI Sales Forecasting */}
              <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 text-center">📈</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">AI Sales Forecasting</h3>
                <p className="text-gray-300 mb-4 text-center">
                  Advanced sales forecasting with machine learning algorithms and predictive analytics.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-emerald-400 mb-2">$199/month</div>
                  <a href="/ai-sales-forecasting" className="text-emerald-400 hover:text-emerald-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>

              {/* AI E-commerce Optimizer */}
              <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 text-center">🛒</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">AI E-commerce Optimizer</h3>
                <p className="text-gray-300 mb-4 text-center">
                  Optimize your e-commerce platform with AI-powered recommendations and automated pricing strategies.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-violet-400 mb-2">$249/month</div>
                  <a href="/ai-ecommerce-optimizer" className="text-violet-400 hover:text-violet-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>

              {/* AI Design Assistant */}
              <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 text-center">🎨</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">AI Design Assistant</h3>
                <p className="text-gray-300 mb-4 text-center">
                  Create stunning designs with AI-powered tools for graphics, logos, and marketing materials.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-rose-400 mb-2">$129/month</div>
                  <a href="/ai-design-assistant" className="text-rose-400 hover:text-rose-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>

              {/* AI Document Processor */}
              <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 text-center">📄</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">AI Document Processor</h3>
                <p className="text-gray-300 mb-4 text-center">
                  Intelligent document processing, OCR, data extraction, and automated form filling with AI accuracy.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-amber-400 mb-2">$179/month</div>
                  <a href="/ai-document-processing" className="text-amber-400 hover:text-amber-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>

              {/* AI Security Monitor */}
              <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 text-center">🔐</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">AI Security Monitor</h3>
                <p className="text-gray-300 mb-4 text-center">
                  Advanced security monitoring with AI-powered threat detection and automated response systems.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-slate-400 mb-2">$299/month</div>
                  <a href="/ai-cybersecurity" className="text-slate-400 hover:text-slate-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Advanced AI Services */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-indigo-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive suite of AI-powered services designed for enterprise-level solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quantum Computing */}
              <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 text-center">⚛️</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Quantum Computing</h3>
                <p className="text-gray-300 mb-4 text-center">
                  Next-generation quantum computing capabilities for complex problem solving and optimization.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400 mb-2">Custom Pricing</div>
                  <a href="/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>

              {/* Autonomous Systems */}
              <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 text-center">🤖</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Autonomous Systems</h3>
                <p className="text-gray-300 mb-4 text-center">
                  Self-managing systems that adapt and optimize themselves using advanced AI algorithms.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2">Custom Pricing</div>
                  <a href="/autonomous-systems" className="text-cyan-400 hover:text-cyan-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>

              {/* Business Intelligence */}
              <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Business Intelligence</h3>
                <p className="text-gray-300 mb-4 text-center">
                  Advanced analytics and insights to drive data-driven decision making across your organization.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-2">Custom Pricing</div>
                  <a href="/business-intelligence" className="text-green-400 hover:text-green-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our experts to discuss how our AI solutions can help your business grow and innovate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
                aria-label="Call us at (302) 464-0950"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
                aria-label="Email us at info@ziontechgroup.com"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>(302) 464-0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Content */}
        <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse rounded-lg mx-4"></div>}>
          <ContentPromotionBanner />
        </Suspense>
        
        <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg mx-4"></div>}>
          <ContentCarousel />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-gray-800 animate-pulse rounded-lg mx-4"></div>}>
          <DynamicContentShowcase />
        </Suspense>
        
        <Suspense fallback={<div className="h-48 bg-gray-800 animate-pulse rounded-lg mx-4"></div>}>
          <ContentStatistics />
        </Suspense>
        
        <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse rounded-lg mx-4"></div>}>
          <ContentNewsletterSignup />
        </Suspense>
      </div>
      
      <Footer />
    </>
  );
};

export default HomePage;