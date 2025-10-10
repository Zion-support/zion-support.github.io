'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, DollarSign, Award, Rocket, Layers, Workflow, BarChart3, MessageSquare, Headphones, Monitor, HardDrive, Wifi, Printer, Router, Package, Heart, Eye, Mic } from 'lucide-react';

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
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      })
    }
  }, []);

  // Featured AI Services
  const featuredAIServices = [
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis for 24/7 customer support.',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration', 'Real-time Learning'],
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions'],
      popular: true
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform and predictive modeling.',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection', 'Custom Data Models'],
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization'],
      popular: true
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation across industries.',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics', 'Real-time Processing'],
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction'],
      popular: false
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'AI-powered cybersecurity solutions for threat detection, prevention, and automated response.',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Vulnerability Assessment', 'Incident Response'],
      benefits: ['Enhanced security', 'Automated protection', 'Faster response', 'Reduced false positives'],
      popular: true
    },
    {
      icon: Heart,
      title: 'AI Healthcare Solutions',
      description: 'Medical AI solutions for diagnosis assistance, treatment recommendations, and patient monitoring.',
      price: '$999/month',
      marketPrice: '$2000-8000/month',
      features: ['Diagnostic Assistance', 'Treatment Recommendations', 'Patient Monitoring', 'Drug Discovery', 'Medical Imaging'],
      benefits: ['Improved diagnosis accuracy', 'Faster treatment decisions', 'Patient safety', 'Cost reduction'],
      popular: false
    },
    {
      icon: DollarSign,
      title: 'AI Financial Analysis',
      description: 'Advanced financial modeling and analysis using AI to predict market trends and optimize investments.',
      price: '$699/month',
      marketPrice: '$1200-4000/month',
      features: ['Market Prediction', 'Risk Assessment', 'Portfolio Optimization', 'Automated Trading', 'Financial Reporting'],
      benefits: ['Better investment decisions', 'Risk mitigation', 'Automated analysis', 'Compliance assurance'],
      popular: true
    }
  ];

  // Featured IT Services
  const featuredITServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services.',
      price: '$2,500/month',
      marketPrice: '$4000-15000/month',
      features: ['Cloud Architecture Design', 'Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery', 'Auto-scaling'],
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support'],
      popular: true
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response.',
      price: '$1,800/month',
      marketPrice: '$3000-12000/month',
      features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring', 'Compliance Management'],
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team'],
      popular: true
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems.',
      price: '$1,200/month',
      marketPrice: '$2000-8000/month',
      features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration', 'Security Hardening'],
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support'],
      popular: false
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code.',
      price: '$2,200/month',
      marketPrice: '$3500-10000/month',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing'],
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows'],
      popular: true
    }
  ];

  // Featured Micro SaaS
  const featuredMicroSaaS = [
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      price: '$89/month',
      marketPrice: '$150-500/month',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors'],
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      popular: true
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing'],
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      popular: true
    },
    {
      icon: FileText,
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      price: '$49/month',
      marketPrice: '$100-300/month',
      features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking'],
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays', 'Automated follow-ups', 'Professional invoices'],
      popular: true
    },
    {
      icon: Target,
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration'],
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization'],
      popular: false
    }
  ];

  // Stats data
  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: Brain },
    { number: '1000+', label: 'Projects Completed', icon: Rocket },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Expert Support', icon: Headphones }
  ];

  return (
    <>
      <PerformanceOptimizer />
      <SEOOptimizer />
      <AccessibilityEnhancer />
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI & IT Solutions
                </span>
                <br />
                <span className="text-white">That Transform</span>
                <br />
                <span className="text-cyan-400">Your Business</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Leading provider of cutting-edge AI services, IT solutions, and micro SaaS tools. 
                We help businesses leverage technology to achieve unprecedented growth and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Call: (302) 464-0950
                </a>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured AI Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="text-cyan-400">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions that revolutionize how businesses operate and compete.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredAIServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                        <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                      </div>
                    </div>
                    {service.popular && (
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href="/services"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured IT Services */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="text-purple-400">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions that provide the foundation for digital transformation and business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredITServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-purple-400 font-semibold">{service.price}</span>
                        <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                      </div>
                    </div>
                    {service.popular && (
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href="/services"
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Micro SaaS */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="text-green-400">Micro SaaS</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use business tools with AI and automation that solve real-world problems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredMicroSaaS.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-green-400 font-semibold">{service.price}</span>
                        <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                      </div>
                    </div>
                    {service.popular && (
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href="/services"
                      className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that trust Zion Tech Group for their AI and IT needs. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Free Consultation
              </a>
              <a
                href="/services"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default HomePage;