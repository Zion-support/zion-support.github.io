'use client';
import React, { useState, useEffect, useCallback, memo, lazy, Suspense } from 'react';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { ServiceCardSkeleton, StatsSkeleton } from './components/EnhancedLoadingStates';
import StructuredData from './components/StructuredData';
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

// ServiceCardSkeleton is imported from EnhancedLoadingStates

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
        enableLazyLoading={true}
        enablePreloading={true}
        enableCodeSplitting={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
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
    </React.Fragment>
  );
};

HomePage.displayName = 'HomePage';

export default HomePage;