'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Target, Globe, Database, Smartphone, Settings, TrendingUp, Award, Lock, Sparkles, Eye, MessageSquare, FileText, Search, Bot, Palette, Camera, Music, Video, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Monitor, Headphones, Mic, Image, FileImage, Layers, GitBranch, Terminal, Wifi, HardDrive, Cpu as Processor, WifiOff, RefreshCw, Download, Upload, Share2, Copy, Edit, Trash2, Plus, Minus, Maximize, Minimize, RotateCcw, RotateCw, Move, Grip, Filter, SortAsc, SortDesc, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, X, Check as CheckIcon, AlertCircle, Info, ExternalLink, Link, Lock as LockIcon, Unlock, Eye as EyeIcon, EyeOff, Bell, BellOff, Volume2, VolumeX, Play, Pause, Stop, SkipForward, SkipBack, Repeat, Shuffle, Heart as HeartIcon, ThumbsUp, ThumbsDown, MessageCircle, Send, Paperclip, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Meh as MehIcon, Server, Network, Router, Switch, Firewall, Key, Certificate, Bug, AlertTriangle, Activity as ActivityIcon, Zap as ZapIcon, Globe as GlobeIcon, Shield as ShieldIcon, Database as DatabaseIcon, Cloud as CloudIcon, Code as CodeIcon, Smartphone as SmartphoneIcon, Settings as SettingsIcon, BarChart as BarChartIcon, FileText as FileTextIcon, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Globe2 as Globe2Icon, Map as MapIcon, Navigation as NavigationIcon, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon, Zap as LightningIcon, Target as CrosshairIcon, Shield as SecurityIcon, Users as PeopleIcon, Star as StarIcon, CheckCircle as CheckIcon, ArrowRight as ArrowIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as LocationIcon, Grid, Package, Microscope, Atom, Dna, Cpu as CpuIcon, CircuitBoard, Cpu as CpuIcon2 } from 'lucide-react';
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
  <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
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

  const services = [
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      description: 'Advanced artificial intelligence solutions including machine learning, NLP, and computer vision.',
      price: 'Starting at $800/month',
      color: 'from-purple-500 to-pink-500',
      link: '/ai-services',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'AI Automation']
    },
    {
      id: 'it-services',
      name: 'IT Services',
      icon: Cloud,
      description: 'Comprehensive IT infrastructure, cybersecurity, and managed services.',
      price: 'Starting at $299/month',
      color: 'from-blue-500 to-cyan-500',
      link: '/it-services',
      features: ['Cloud Infrastructure', 'Cybersecurity', 'DevOps', 'Managed Services']
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS',
      icon: Zap,
      description: '50+ AI-powered micro SAAS tools for business automation and productivity.',
      price: 'Starting at $14/month',
      color: 'from-green-500 to-emerald-500',
      link: '/micro-saas',
      features: ['AI Content Generation', 'SEO Optimization', 'Analytics Dashboard', 'Chatbot Builder']
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      icon: Atom,
      description: 'Next-generation quantum algorithms and quantum security implementations.',
      price: 'Custom Pricing',
      color: 'from-indigo-500 to-purple-500',
      link: '/quantum-computing',
      features: ['Quantum Algorithms', 'Quantum Security', 'Optimization', 'Research & Development']
    },
    {
      id: 'autonomous-systems',
      name: 'Autonomous Systems',
      icon: Cpu,
      description: 'Self-managing and self-optimizing systems for enterprise operations.',
      price: 'Custom Pricing',
      color: 'from-orange-500 to-red-500',
      link: '/autonomous-systems',
      features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring']
    },
    {
      id: 'blockchain-web3',
      name: 'Blockchain & Web3',
      icon: Link,
      description: 'Decentralized solutions, smart contracts, and Web3 applications.',
      price: 'Starting at $1,999/month',
      color: 'from-yellow-500 to-orange-500',
      link: '/blockchain-web3',
      features: ['Smart Contracts', 'DApp Creation', 'Token Economics', 'DeFi Solutions']
    }
  ];

  const stats = [
    { number: '50+', label: 'AI Services', icon: Brain },
    { number: '$14', label: 'Starting Price', icon: DollarSign },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '24/7', label: 'Support', icon: Clock },
    { number: '99.9%', label: 'Uptime', icon: Shield },
    { number: '50+', label: 'Countries', icon: Globe }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings',
      color: 'text-green-400'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions and data',
      color: 'text-blue-400'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all services',
      color: 'text-purple-400'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and data scientists with proven track records',
      color: 'text-cyan-400'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Achieve 300% ROI with our cutting-edge technology."
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
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
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch"
                data-text="Zion Tech Group"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <benefit.icon className={`w-8 h-8 ${benefit.color} mb-3 mx-auto neon-pulse`} />
                    <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
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
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16" aria-labelledby="stats-heading">
            <h2 id="stats-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-7xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 cyber-card energy-pulse text-center">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive AI and IT solutions designed to transform your business operations
            </p>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <Suspense key={service.id} fallback={<ServiceCardSkeleton />}>
                  <article className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300 group">
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 neon-text group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Pricing and CTA */}
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-cyan-400 mb-4 neon-text">
                        {service.price}
                      </div>
                      <a 
                        href={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-all duration-300 hover:neon-glow group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </article>
                </Suspense>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 sm:p-12 cyber-card holographic-border">
              <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-purple-100 mb-8 text-center max-w-3xl mx-auto">
                Get started with our AI and IT solutions today and see the difference cutting-edge technology can make.
              </p>
              
              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-medium text-lg">+1 302 464 0950</div>
                  <div className="text-purple-100 text-sm">Call us anytime</div>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-medium text-lg">kleber@ziontechgroup.com</div>
                  <div className="text-purple-100 text-sm">Email us</div>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-medium text-lg">Middletown, DE</div>
                  <div className="text-purple-100 text-sm">Visit us</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors text-center"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>

          {/* Content Showcase */}
          <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
            <DynamicContentShowcase />
          </Suspense>
          
          {/* Content Statistics */}
          <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
            <ContentStatistics />
          </Suspense>
          
          {/* Content Carousel */}
          <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
            <ContentCarousel />
          </Suspense>
          
          {/* Newsletter Signup */}
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