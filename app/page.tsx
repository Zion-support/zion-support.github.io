'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, DollarSign, Award, Rocket, Layers, Workflow, BarChart3, MessageSquare, Headphones, Monitor, HardDrive, Wifi, Printer, Router, Package, Heart, Eye, Mic } from 'lucide-react';
import { usePageTracking, useEventTracking } from './components/EnhancedAnalytics';

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
}

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
  
  // Analytics tracking
  usePageTracking('Home Page', '/');
  const { trackButtonClick, trackPhoneClick, trackEmailClick, trackServiceView } = useEventTracking();
  
  useEffect(() => {
    preloadComponents();
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as {gtag: (command: string, action: string, parameters: Record<string, unknown>) => void}).gtag;
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, []);

  // Real AI Services with actual capabilities and pricing
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: ['Natural language processing', 'Multi-language support', 'Sentiment analysis', 'CRM integration', 'Real-time learning'],
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions'],
      category: 'Customer Service',
      popular: true
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing',
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: ['Blog post generation', 'Social media content', 'Email marketing campaigns', 'SEO optimization', 'Brand voice customization'],
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      category: 'Content',
      popular: true
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Intelligent data analysis and business intelligence with predictive insights and automated reporting',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: ['Predictive analytics', 'Real-time dashboards', 'Automated reporting', 'Data visualization', 'Machine learning insights'],
      benefits: ['Data-driven decisions', 'Automated insights', 'Real-time monitoring', 'ROI optimization'],
      category: 'Analytics',
      popular: false
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and GCP expertise',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: ['Multi-cloud deployment', 'Auto-scaling', 'Disaster recovery', 'Security compliance', '24/7 monitoring'],
      benefits: ['99.9% uptime', 'Cost optimization', 'Scalable infrastructure', 'Enhanced security'],
      category: 'Infrastructure',
      popular: true
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and compliance',
      price: '$799/month',
      marketPrice: '$1500-8000/month',
      features: ['Threat monitoring', 'Vulnerability scanning', 'Compliance management', 'Incident response', 'Security training'],
      benefits: ['Protect against threats', 'Compliance assurance', 'Risk reduction', 'Peace of mind'],
      category: 'Security',
      popular: true
    }
  ];

  const microSaasServices = [
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Real-time business analytics and reporting dashboard',
      price: '$99/month',
      marketPrice: '$200-800/month',
      features: ['Real-time data', 'Custom reports', 'Team collaboration', 'API integration', 'Mobile access'],
      benefits: ['Better insights', 'Faster decisions', 'Team alignment', 'Cost effective'],
      category: 'Analytics',
      popular: true
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '500+', label: 'Projects Delivered' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime Guarantee' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '24/7', label: 'Support Available' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5★', label: 'Client Rating' }
  ];

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
          description: 'Leading provider of AI and IT solutions for modern businesses',
          services: [
            'AI Solutions',
            'IT Services',
            'Cloud Computing',
            'Cybersecurity',
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  AI & IT Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Leading provider of cutting-edge artificial intelligence, quantum computing, and digital transformation services. 
                Accelerate your business growth with our advanced technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="/consultation"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={() => trackButtonClick('Get Started', 'hero')}
                >
                  Get Started Today
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium"
                  onClick={handlePhoneClick}
                >
                  <Phone className="w-5 h-5" />
                  <span>(302) 464-0950</span>
                </a>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Services Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations and drive growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <div className="text-cyan-400 font-bold">{service.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <a
                    href={`/ai-services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    onClick={() => trackServiceView(service.title)}
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT Infrastructure & Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete technology solutions to support and scale your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <div className="text-purple-400 font-bold">{service.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <a
                    href={`/it-services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center py-2 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                    onClick={() => trackServiceView(service.title)}
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a free consultation and discover how our AI and IT solutions can accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/consultation"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={() => trackButtonClick('Free Consultation', 'contact')}
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium"
                  onClick={handlePhoneClick}
                >
                  <Phone className="w-5 h-5" />
                  <span>(302) 464-0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default HomePage;