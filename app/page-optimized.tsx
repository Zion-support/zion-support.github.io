'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Star, CheckCircle, TrendingUp, Globe, Target, Award } from 'lucide-react';

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

  const handleEmailClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'email_click', {
        event_category: 'engagement',
        event_label: 'main_email'
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
            className={`text-center mb-16 transition-all duration-1000 ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:scale-105 transition-all duration-300 border border-white/20">
                  <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:scale-105 transition-all duration-300 border border-white/20">
                  <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:scale-105 transition-all duration-300 border border-white/20">
                  <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:scale-105 transition-all duration-300 border border-white/20">
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
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
                  aria-label="Call us at (302) 464-0950"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:info@ziontechgroup.com"
                  onClick={handleEmailClick}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
                  aria-label="Email us at info@ziontechgroup.com"
                >
                  ✉️ Email: info@ziontechgroup.com
                </a>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16" aria-labelledby="services-heading">
            <div className="text-center mb-12">
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:scale-105 transition-all duration-300 border border-white/20 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and predictive analytics.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Machine Learning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Natural Language Processing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Predictive Analytics</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Computer Vision</li>
                </ul>
              </div>

              {/* Cloud Services */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:scale-105 transition-all duration-300 border border-white/20 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Services</h3>
                <p className="text-gray-300 mb-6">
                  Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Cloud Migration</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Infrastructure as Code</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />DevOps & CI/CD</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Container Orchestration</li>
                </ul>
              </div>

              {/* Cybersecurity */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:scale-105 transition-all duration-300 border border-white/20 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive security solutions to protect your digital assets and ensure compliance.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Security Audits</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Penetration Testing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Compliance Management</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Incident Response</li>
                </ul>
              </div>

              {/* Digital Transformation */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:scale-105 transition-all duration-300 border border-white/20 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
                <p className="text-gray-300 mb-6">
                  Complete digital transformation strategies to modernize your business processes and systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Process Automation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Legacy Modernization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Workflow Optimization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Change Management</li>
                </ul>
              </div>

              {/* Business Intelligence */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:scale-105 transition-all duration-300 border border-white/20 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Business Intelligence</h3>
                <p className="text-gray-300 mb-6">
                  Data-driven insights and analytics to help you make informed business decisions.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Data Visualization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Predictive Modeling</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Real-time Dashboards</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />KPI Tracking</li>
                </ul>
              </div>

              {/* Custom Development */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:scale-105 transition-all duration-300 border border-white/20 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Custom Development</h3>
                <p className="text-gray-300 mb-6">
                  Tailored software solutions built to meet your specific business requirements.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Web Applications</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Mobile Apps</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />API Development</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />System Integration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16" aria-labelledby="stats-heading">
            <div className="text-center mb-12">
              <h2 id="stats-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Impact
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Measurable results that drive business success
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">$50M+</div>
                <div className="text-lg text-gray-300">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-lg text-gray-300">Process Automation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">300%</div>
                <div className="text-lg text-gray-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-lg text-gray-300">Projects Delivered</div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <div className="text-center mb-8">
                <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Let's discuss how our AI and IT solutions can accelerate your digital transformation journey.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl mb-4">
                    <Phone className="text-cyan-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">(302) 464-0950</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">
                    <Mail className="text-blue-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">info@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">
                    <MapPin className="text-green-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">Middletown, DE</p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block mr-4"
                  aria-label="Call us at (302) 464-0950"
                >
                  📞 Call Now
                </a>
                <a 
                  href="mailto:info@ziontechgroup.com"
                  onClick={handleEmailClick}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
                  aria-label="Email us at info@ziontechgroup.com"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </section>

          {/* Dynamic Content Sections */}
          <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
            <ContentCarousel />
          </Suspense>

          <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
            <DynamicContentShowcase />
          </Suspense>

          <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
            <ContentStatistics />
          </Suspense>

          <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
            <ContentNewsletterSignup />
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;