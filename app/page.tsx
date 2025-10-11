'use client';
<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Cloud, Shield, Zap, ArrowRight, Star, CheckCircle, Users, BarChart, Globe, Database, Target, Phone, Mail, MapPin, Clock, Award, Rocket, TrendingUp, Settings, Play, Download, RefreshCw, Bell, Heart, DollarSign, Lock, AlertTriangle, Activity, Eye, Mic, Workflow, MessageCircle, FileText, Code, Smartphone, Wifi, Package, MessageSquare, CheckSquare, ShoppingCart, Sparkles } from 'lucide-react';

const HomePage: React.FC = () => {
=======
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
// import { ServiceCardSkeleton, StatsSkeleton } from './components/EnhancedLoadingStates';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, DollarSign, Award, Rocket, Layers, Workflow, BarChart3, MessageSquare, Headphones, Monitor, HardDrive, Wifi, Printer, Router, Package, Heart, DollarSign as Dollar, Award as Trophy, Rocket as Launch, Layers as Stack, Workflow as Process, BarChart3 as Analytics, MessageSquare as Chat, Headphones as Support, Monitor as Screen, HardDrive as Storage, Wifi as Network, Printer as Print, Router as Gateway, Package as Box, Eye, Mic } from 'lucide-react';

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
>>>>>>> origin/main
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

<<<<<<< HEAD
  // Analytics tracking for phone clicks
=======
  // Analytics tracking for phone clicks - optimized
>>>>>>> origin/main
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
<<<<<<< HEAD
      title: 'AI Analytics',
      description: 'Advanced data insights and predictive analytics powered by machine learning algorithms.',
      price: 'Starting at $299/month',
      features: ['Real-time dashboards', 'Predictive modeling', 'Custom reports', 'API integration']
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities and exception handling.',
      price: 'Starting at $499/month',
      features: ['Workflow automation', 'Smart routing', 'Exception handling', 'Performance monitoring']
    },
    {
      icon: MessageCircle,
      title: 'AI Customer Support',
      description: '24/7 intelligent customer support with natural language processing and sentiment analysis.',
      price: 'Starting at $199/month',
      features: ['Multi-channel support', 'Sentiment analysis', 'Escalation management', 'Analytics dashboard']
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable insights with advanced AI-powered analytics.',
      price: 'Starting at $399/month',
      features: ['Data visualization', 'Trend analysis', 'Custom metrics', 'Real-time alerts']
    }
  ];

  // IT Services with comprehensive solutions
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud solutions with 99.9% uptime guarantee.',
      price: 'Starting at $999/month',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Security monitoring', '24/7 support']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      price: 'Starting at $799/month',
      features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Compliance monitoring']
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices.',
      price: 'Starting at $150/hour',
      features: ['Full-stack development', 'API development', 'Database design', 'Quality assurance']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      price: 'Starting at $5,000/project',
      features: ['Native development', 'Cross-platform', 'UI/UX design', 'App store deployment']
    }
  ];

  // Micro SAAS Services with real pricing
  const microSaasServices = [
    {
      icon: BarChart,
      title: 'Zion Analytics Pro',
      description: 'Business intelligence platform with AI-powered insights.',
      price: '$99/month',
      features: ['Real-time analytics', 'Custom dashboards', 'Data visualization', 'Export capabilities']
    },
    {
      icon: MessageCircle,
      title: 'Zion Chat AI',
      description: 'AI-powered customer support chatbot with natural language processing.',
      price: '$149/month',
      features: ['24/7 support', 'Multi-language', 'Integration APIs', 'Analytics dashboard']
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'AI-powered cybersecurity monitoring and threat detection.',
      price: '$199/month',
      features: ['Real-time monitoring', 'Threat detection', 'Automated response', 'Compliance reporting']
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution.',
      price: '$79/month',
      features: ['Automated backups', 'Encryption', 'Point-in-time recovery', 'Multi-region storage']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Leading AI & IT Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Transform Your Business
              </span>
              <br />
              <span className="text-white relative">
                With AI & IT Solutions
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-sm -z-10"></div>
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Achieve 300% ROI with our cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center space-x-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 relative">
              Comprehensive IT Services
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 blur-sm -z-10"></div>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete IT solutions to support your business growth and digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 relative">
              Micro SAAS Solutions
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-pink-400/20 blur-sm -z-10"></div>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful, affordable micro SAAS tools to streamline your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4 relative">
            Ready to Transform Your Business?
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-sm -z-10"></div>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss how our AI and IT solutions can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="inline-flex items-center space-x-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">Call (302) 464-0950</span>
            </a>
=======
        {/* Navigation */}
        <Navigation />
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
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
>>>>>>> origin/main
          </div>
        </div>
      </section>
    </div>
  );
};
<<<<<<< HEAD

export default HomePage;
=======
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        
        {/* Content Promotion Banner */}
        <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
          <ContentPromotionBanner />
        </Suspense>
        
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24 quantum-energy-field" role="main">
          {/* Hero Section */}
          <section
className={`text-center mb-16 transition-all duration-1000 cyber-scan-line holographic-card-enhanced quantum-pulse-enhanced ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch-enhanced neon-text-enhanced"
                data-text="Zion Tech Group"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text-enhanced neon-glow" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth. We serve Fortune 500 companies,
                startups, and enterprises worldwide with proven results and 24/7 expert support.
              </p>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
>>>>>>> origin/main
