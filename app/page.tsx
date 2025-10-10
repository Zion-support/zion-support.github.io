'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, DollarSign, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FuturisticHero from '../src/components/FuturisticHero';
import MicroSAASServices from '../src/components/MicroSAASServices';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import SEOEnhancer from './components/SEOEnhancer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import EnhancedSEOOptimizer from './components/EnhancedSEOOptimizer';
import EnhancedPerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import EnhancedAnalytics from './components/EnhancedAnalytics';
import SecurityEnhancer from './components/SecurityEnhancer';
import ErrorBoundary from './components/ErrorBoundary';
import ServiceWorker from './components/ServiceWorker';
import { ServiceCardSkeleton, HeroSkeleton } from './components/LoadingSkeleton';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import EnhancedSEO from './components/EnhancedSEO';

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

// Loading skeleton component - now imported from LoadingSkeleton.tsx

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setIsHydrated(true);
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

  // Contact information
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <ErrorBoundary>
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services', 'artificial intelligence', 'business intelligence', 'data analytics', 'cybersecurity', 'cloud migration', 'DevOps', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com"
        ogImage="https://ziontechgroup.com/og-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Advanced AI and IT Solutions",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          }
        }}
      >
        <div className="min-h-screen bg-slate-900">
          <Navigation />
          
          {/* Futuristic Hero Section */}
          <FuturisticHero />
          
          {/* Micro SAAS Services Section */}
          <MicroSAASServices />

          {/* AI Services Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2 mb-6">
                  <Brain className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-purple-300">AI Services</span>
                </div>
                
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  <span className="block">Advanced AI</span>
                  <span className="block cyber-text">Solutions</span>
                </h2>
                
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Harness the power of artificial intelligence with our comprehensive suite of AI services 
                  designed to transform your business operations and drive innovation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* AI Service Cards */}
                <div className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    Machine Learning
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Advanced machine learning models and algorithms to solve complex business problems and drive data-driven decisions.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">Starting at $299/month</span>
                    <Arrow className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    Computer Vision
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Image recognition, object detection, and visual analysis solutions for automated visual inspection and analysis.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-400">Starting at $399/month</span>
                    <Arrow className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    Natural Language Processing
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Text analysis, sentiment analysis, and language understanding solutions for automated content processing.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400">Starting at $249/month</span>
                    <Arrow className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Bot className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                    AI Chatbots
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Intelligent conversational AI solutions for customer service, support, and automated interactions.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-400">Starting at $199/month</span>
                    <Arrow className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BarChart className="w-8 h-8 text-violet-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors">
                    Predictive Analytics
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Advanced predictive modeling and forecasting solutions to anticipate trends and optimize business outcomes.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-violet-400">Starting at $349/month</span>
                    <Arrow className="w-5 h-5 text-violet-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-rose-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-rose-400 transition-colors">
                    AI Security
                  </h3>
                  <p className="text-gray-300 mb-6">
                    AI-powered security solutions for threat detection, fraud prevention, and automated security monitoring.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-rose-400">Starting at $449/month</span>
                    <Arrow className="w-5 h-5 text-rose-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* IT Services Section */}
          <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                  <Settings className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">IT Services</span>
                </div>
                
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  <span className="block">Enterprise IT</span>
                  <span className="block cyber-text">Solutions</span>
                </h2>
                
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive IT services and infrastructure solutions to support your digital transformation 
                  and ensure optimal performance and security.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* IT Service Cards */}
                <div className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    Cloud Services
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Scalable cloud infrastructure and migration services to modernize your IT environment and reduce costs.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-400">Starting at $199/month</span>
                    <Arrow className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    Cybersecurity
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Advanced security solutions to protect your business from cyber threats and ensure compliance.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-400">Starting at $299/month</span>
                    <Arrow className="w-5 h-5 text-red-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    Data Management
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Comprehensive data management solutions including storage, backup, and disaster recovery services.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400">Starting at $149/month</span>
                    <Arrow className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    DevOps & CI/CD
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Automated deployment pipelines and DevOps practices to accelerate development and improve reliability.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-400">Starting at $249/month</span>
                    <Arrow className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                    IT Consulting
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Strategic IT consulting services to help you plan, implement, and optimize your technology infrastructure.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-yellow-400">Starting at $199/hour</span>
                    <Arrow className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    Managed IT Services
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Complete IT management services including monitoring, maintenance, and 24/7 support for your infrastructure.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">Starting at $399/month</span>
                    <Arrow className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-cyan-100 mb-8">
                  Contact us today to discuss your AI and IT needs. Our experts are ready to help you achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="/contact"
                    className="futuristic-btn px-8 py-4 text-lg font-semibold"
                    onClick={handlePhoneClick}
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-2 text-white hover:text-cyan-100 transition-colors text-lg font-medium"
                    onClick={handlePhoneClick}
                  >
                    <Phone className="w-5 h-5" />
                    <span>+1 302 464 0950</span>
                  </a>
                </div>
                <div className="mt-8 text-cyan-100">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </SEOOptimizer>
    </ErrorBoundary>
  );
};

export default HomePage;