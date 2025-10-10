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
  
  // Analytics tracking
  usePageTracking('Home Page', '/');
  
  useEffect(() => {
    // Mark as loaded after component mounts
    setIsLoaded(true);
    preloadComponents();
    
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
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
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'SEO optimization', 'Brand voice consistency'],
      benefits: ['Save 40+ hours/week', 'Consistent quality', 'SEO optimized', 'Multi-platform ready'],
      category: 'Content Marketing',
      popular: true
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics',
      description: 'Intelligent data analysis and business intelligence with predictive insights',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: ['Predictive analytics', 'Real-time dashboards', 'Custom reports', 'Data visualization', 'Trend analysis'],
      benefits: ['Data-driven decisions', 'Predict future trends', 'Automated reporting', 'ROI optimization'],
      category: 'Business Intelligence',
      popular: false
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and automated security monitoring using machine learning',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: ['Threat detection', 'Anomaly monitoring', 'Automated response', 'Compliance reporting', '24/7 monitoring'],
      benefits: ['Proactive security', 'Reduce false positives', 'Compliance ready', 'Cost effective'],
      category: 'Security',
      popular: false
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      price: 'Custom pricing',
      features: ['Cloud migration', 'Auto-scaling', 'Disaster recovery', 'Cost optimization', 'Security compliance'],
      benefits: ['99.9% uptime', 'Scalable resources', 'Global reach', 'Reduced costs'],
      category: 'Infrastructure'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices',
      price: 'Project-based',
      features: ['Full-stack development', 'API integration', 'Database design', 'Testing & QA', 'Maintenance'],
      benefits: ['Custom solutions', 'Modern tech stack', 'Scalable architecture', 'Ongoing support'],
      category: 'Development'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive data solutions including warehousing, ETL, and analytics',
      price: 'Custom pricing',
      features: ['Data warehousing', 'ETL processes', 'Data governance', 'Analytics setup', 'Migration services'],
      benefits: ['Clean data', 'Better insights', 'Compliance ready', 'Automated processes'],
      category: 'Data'
    }
  ];

  const microSaasServices = [
    {
      icon: BarChart,
      title: 'Zion Analytics Pro',
      description: 'Business intelligence platform with real-time dashboards and reporting',
      price: '$99/month',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Team collaboration', 'API access'],
      benefits: ['Instant insights', 'Easy setup', 'No coding required', 'Scalable'],
      category: 'Analytics'
    },
    {
      icon: MessageCircle,
      title: 'Zion Chat AI',
      description: 'AI-powered customer support chatbot with natural language processing',
      price: '$149/month',
      features: ['Multi-channel support', 'Sentiment analysis', 'CRM integration', 'Custom training', 'Analytics'],
      benefits: ['24/7 support', 'Reduce costs', 'Better customer experience', 'Easy deployment'],
      category: 'Customer Service'
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform',
      price: '$199/month',
      features: ['Threat monitoring', 'Vulnerability scanning', 'Compliance reporting', 'Incident response', 'Security training'],
      benefits: ['Proactive security', 'Compliance ready', 'Expert support', 'Cost effective'],
      category: 'Security'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <PerformanceOptimizer />
      <SEOOptimizer />
      <AccessibilityEnhancer>
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Hero Section */}
          <section className="relative overflow-hidden pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    AI & IT Solutions
                  </span>
                  <br />
                  <span className="text-3xl md:text-5xl">for Modern Business</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Transform your business with cutting-edge artificial intelligence and technology solutions. 
                  From AI chatbots to cloud infrastructure, we deliver results that matter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    onClick={handlePhoneClick}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(302) 464-0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Get Started</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="py-16 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  AI Services
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Leverage the power of artificial intelligence to automate, optimize, and transform your business operations.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {aiServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                        {service.popular && (
                          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                        <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IT Services Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  IT Services
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Complete technology solutions to modernize your infrastructure and accelerate growth.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {itServices.map((service, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-colors duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Micro SAAS Section */}
          <section className="py-16 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Micro SAAS Solutions
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Ready-to-use business tools powered by AI and automation.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {microSaasServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                      Try Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our AI and IT solutions can help you achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    onClick={handlePhoneClick}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(302) 464-0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Us</span>
                  </a>
                </div>
                <div className="mt-8 text-gray-400">
                  <p>364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </AccessibilityEnhancer>
    </div>
  );
};

export default HomePage;
