'use client';
import React, { useState, useEffect, useCallback, memo, lazy, Suspense } from 'react';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { ServiceCardSkeleton, StatsSkeleton } from './components/EnhancedLoadingStates';
<<<<<<< HEAD
import StructuredData from './components/StructuredData';
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-9619
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));

// Performance optimization: Debounce scroll events
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
  </div>
));

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'Phone Number',
        value: 1
      });
    }
  }, []);

<<<<<<< HEAD
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence and machine learning solutions tailored to your business needs.'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke software solutions designed specifically for your requirements.'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our analytics solutions.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhance productivity with our collaboration and communication tools.'
    }
  ];

  return (
    <React.Fragment>
      <SEOOptimizer
        title="Zion Tech Group - AI & IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services."
        keywords="AI solutions, IT services, cybersecurity, cloud computing, digital transformation"
        image="/images/og-image.jpg"
        url="https://ziontechgroup.com"
        type="website"
=======
  return (
    <React.Fragment>
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-9619
        enableLazyLoading={true}
        enablePreloading={true}
        enableCodeSplitting={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
<<<<<<< HEAD
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <PerformanceOptimizer
        enableLazyLoading={true}
        enablePreloading={true}
        enableCodeSplitting={true}
      >
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <section id="main-content" className="relative pt-20 pb-16 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center">
                <div className="mb-8">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 animate-fade-in">
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    Leading AI & IT Solutions Provider
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-slide-up">
                    Transform Your Business with
                    <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                      AI & Technology
                    </span>
                  </h1>
                  <p className="text-gray-300 mb-8 text-center leading-relaxed text-lg max-w-4xl mx-auto animate-fade-in delay-200">
                    Unlock the power of artificial intelligence and cutting-edge technology. We deliver enterprise-grade solutions that drive real business value, increase efficiency by 300%, and accelerate your digital transformation journey.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up delay-300">
                  <a 
                    href="tel:+13024640950" 
                    className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 text-center shadow-2xl hover:shadow-blue-500/25"
                    onClick={handlePhoneClick}
                    aria-label="Call us at +1 302 464 0950"
                  >
                    <span className="flex items-center justify-center">
                      Call +1 302 464 0950
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 text-center hover:shadow-2xl hover:shadow-cyan-500/25"
                    aria-label="Email us at kleber@ziontechgroup.com"
                  >
                    <span className="flex items-center justify-center">
                      Email Us
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </div>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in delay-500">
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                    <div className="text-gray-300 text-sm font-medium">Projects Completed</div>
                    <div className="text-cyan-400 text-xs mt-1">Successfully Delivered</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                    <div className="text-gray-300 text-sm font-medium">Happy Clients</div>
                    <div className="text-purple-400 text-xs mt-1">Worldwide</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                    <div className="text-gray-300 text-sm font-medium">Support</div>
                    <div className="text-green-400 text-xs mt-1">Always Available</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
                    <div className="text-gray-300 text-sm font-medium">Success Rate</div>
                    <div className="text-orange-400 text-xs mt-1">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Showcase */}
          <section className="py-16 bg-slate-800/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Our Core Services
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
                  <p className="text-gray-300 mb-6">
                    Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Machine Learning Models</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Natural Language Processing</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Computer Vision</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />AI Automation</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure</h3>
                  <p className="text-gray-300 mb-6">
                    Scalable and secure cloud solutions that grow with your business and ensure maximum uptime.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Cloud Migration</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Server Management</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Auto-scaling</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />24/7 Monitoring</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
                  <p className="text-gray-300 mb-6">
                    Comprehensive security solutions to protect your digital assets and ensure compliance.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Threat Detection</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Security Audits</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Compliance Management</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Incident Response</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  We combine cutting-edge technology with industry expertise to deliver solutions that drive real business value.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4">
                        <feature.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 bg-slate-800/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Don't just take our word for it. Here's what our satisfied clients have to say about our services.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Zion Tech Group transformed our business with their AI solutions. We've seen a 300% increase in efficiency and our ROI has been outstanding."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-cyan-400 font-bold">JS</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">John Smith</div>
                      <div className="text-gray-400 text-sm">CEO, TechCorp</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "The team's expertise in AI and cloud solutions is unmatched. They delivered exactly what we needed and exceeded our expectations."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-400 font-bold">MJ</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Maria Johnson</div>
                      <div className="text-gray-400 text-sm">CTO, InnovateLabs</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Outstanding service and support. Their AI automation solutions have revolutionized our workflow and saved us countless hours."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-400 font-bold">RB</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Robert Brown</div>
                      <div className="text-gray-400 text-sm">Founder, StartupXYZ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that have already transformed their operations with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                  onClick={handlePhoneClick}
                  aria-label="Call us at +1 302 464 0950"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center"
                  aria-label="Email us at kleber@ziontechgroup.com"
                >
                  Email kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Get answers to common questions about our AI and IT solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
                  <h3 className="text-xl font-semibold text-white mb-3">What AI services do you offer?</h3>
                  <p className="text-gray-300">
                    We provide comprehensive AI solutions including machine learning models, natural language processing, computer vision, AI automation, and custom AI development tailored to your business needs.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
                  <h3 className="text-xl font-semibold text-white mb-3">How long does implementation take?</h3>
                  <p className="text-gray-300">
                    Implementation timelines vary based on project complexity. Simple AI solutions can be deployed in 2-4 weeks, while comprehensive digital transformation projects may take 3-6 months.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Do you provide ongoing support?</h3>
                  <p className="text-gray-300">
                    Yes, we offer 24/7 support and maintenance for all our solutions. Our team ensures your systems run smoothly and provides updates and optimizations as needed.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
                  <h3 className="text-xl font-semibold text-white mb-3">What's your success rate?</h3>
                  <p className="text-gray-300">
                    We maintain a 99% success rate with our clients, delivering projects on time and within budget. Our track record speaks to our commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Structured Data */}
          <StructuredData type="Organization" />
          <StructuredData type="WebSite" />
          <StructuredData type="WebPage" />
          <StructuredData type="Service" />
          <StructuredData type="LocalBusiness" />
        </div>
      </PerformanceOptimizer>
=======
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
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50">
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
                Transform your business with our cutting-edge technology and achieve unprecedented growth. We serve Fortune 500 companies,
                startups, and enterprises worldwide with proven results and 24/7 expert support.
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
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
                </a>
              </div>
              {/* Contact Info */}
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm mb-2">
                  📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-300 text-sm">
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive AI and IT solutions designed to transform your business operations.
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors">
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
                      className="w-full cyber-button text-center py-4">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-9619
    </React.Fragment>
  );
};

HomePage.displayName = 'HomePage';

export default HomePage;