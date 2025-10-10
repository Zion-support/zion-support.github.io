'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { ServiceCardSkeleton, StatsSkeleton } from './components/EnhancedLoadingStates';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

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

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    preloadComponents();
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'header_phone'
      });
    }
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence to transform your business operations and decision-making processes.'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security measures to protect your data and systems from threats.'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built specifically for your unique requirements.'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights that drive business growth.'
    },
    {
      icon: Users,
      title: 'Team Augmentation',
      description: 'Expert developers and consultants to enhance your existing team capabilities.'
    }
  ];

  const services = [
    {
      title: 'AI Services',
      description: 'Comprehensive AI solutions including machine learning, natural language processing, and computer vision.',
      icon: Brain,
      href: '/ai-services'
    },
    {
      title: 'IT Services',
      description: 'Full-stack development, cloud infrastructure, and technical consulting services.',
      icon: Cloud,
      href: '/it-services'
    },
    {
      title: 'Micro SaaS',
      description: 'Specialized software tools and applications designed for specific business needs.',
      icon: Code,
      href: '/micro-saas'
    }
  ];

  return (
    <React.Fragment>
      <SEOOptimizer
        title="Zion Tech Group - AI & IT Solutions"
        description="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, cloud infrastructure, and custom software development."
        keywords="AI solutions, IT services, cloud computing, software development, machine learning, cybersecurity"
        enablePreloading={true}
        enableCodeSplitting={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableReducedMotion={true}
      >
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          
          <main id="main-content" className="relative pt-20 pb-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Hero Section */}
              <section className="text-center py-20">
                <div className="mb-8">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Transform Your Business with
                    <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      AI & Technology
                    </span>
                  </h1>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                    Leading provider of AI and IT solutions. We help companies transform their operations with cutting-edge technology.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+13024640950" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                    onClick={handlePhoneClick}
                  >
                    Call +1 (302) 464-0950
                  </a>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center"
                  >
                    Email Us
                  </a>
                </div>
              </section>

              {/* Features Section */}
              <section className="py-20">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Why Choose Zion Tech Group?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    We deliver innovative solutions that drive real business value and competitive advantage.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                      <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Services Section */}
              <section className="py-20">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Our Services
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Comprehensive technology solutions tailored to your business needs.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                      <service.icon className="w-16 h-16 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <a 
                        href={service.href}
                        className="inline-flex items-center text-cyan-400 hover:text-white transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact Section */}
              <section className="py-20">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                      Let's discuss how our AI and IT solutions can help you achieve your goals.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="tel:+13024640950" 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      Call +1 (302) 464-0950
                    </a>
                    <a 
                      href="mailto:kleber@ziontechgroup.com" 
                      className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center"
                    >
                      Email kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </main>

          <Footer />
        </div>
      </AccessibilityEnhancer>
    </React.Fragment>
  );
};

HomePage.displayName = 'HomePage';
export default HomePage;