'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Atom, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Rocket, Microscope, Layers, Cpu as Processor, Wifi, HardDrive, Server, Monitor, Keyboard, Mouse, Headphones, Printer, Scanner, Archive, Download, Upload, Share, Link, ExternalLink, Maximize, Minimize, RotateCcw, Play, Pause, Stop, SkipForward, SkipBack, Volume2, VolumeX, Mic, MicOff, Video as VideoIcon, VideoOff, Camera as CameraIcon, CameraOff, Image, Images, File, Files, Folder, FolderOpen, Trash2, Edit, Save, Copy, Cut, Paste, Undo, Redo, Search as SearchIcon, Filter, SortAsc, SortDesc, Grid, List, Layout, Sidebar, Menu, X, Plus, Minus, MoreHorizontal, MoreVertical, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, ChevronsUp, ChevronsDown, ChevronsLeft, ChevronsRight, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, RotateCw, RefreshCw, RefreshCcw, Rotate3D, FlipHorizontal, FlipVertical, Crop, Scissors as ScissorsIcon, Paintbrush as PaintbrushIcon, Palette as PaletteIcon, Droplets, Sun, Moon, Sunrise, Sunset, Cloud as CloudIcon, CloudRain, CloudSnow, CloudLightning, Wind, Thermometer, Gauge, Battery, BatteryCharging, Power, Wifi as WifiIcon, WifiOff, Signal, SignalZero, SignalOne, SignalTwo, SignalThree, SignalFour, SignalHigh, SignalLow, SignalMedium, SignalNone, SignalStrong, SignalWeak, SignalZero as SignalZeroIcon, SignalOne as SignalOneIcon, SignalTwo as SignalTwoIcon, SignalThree as SignalThreeIcon, SignalFour as SignalFourIcon, SignalHigh as SignalHighIcon, SignalLow as SignalLowIcon, SignalMedium as SignalMediumIcon, SignalNone as SignalNoneIcon, SignalStrong as SignalStrongIcon, SignalWeak as SignalWeakIcon } from 'lucide-react';
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
    const timer = setTimeout(() => setIsVisible(true), 100);
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

  // Real Micro SAAS Services with actual functionality and pricing
  const microSAASServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization and timeline prediction',
      icon: '📊',
      price: '$199/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Budget optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation and smart scheduling',
      icon: '📱',
      price: '$149/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Hashtag optimization', 'Competitor analysis'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '50% better ROI'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      icon: '📈',
      price: '$299/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reports'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', '25% faster decisions'],
      link: '/ai-analytics-dashboard',
      popular: true,
      category: 'Analytics',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Transform your email marketing with AI-powered content generation and automation',
      icon: '📧',
      price: '$199/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Deliverability optimization'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', '35% higher click rates'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot',
      icon: '🤖',
      price: '$249/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Integration APIs'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', '60% cost savings'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Support',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection and optimization',
      icon: '🔍',
      price: '$179/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Custom rules', 'Team collaboration'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', 'Faster deployment'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      title: 'AI Content Generator',
      description: 'Create high-quality content with AI-powered writing and optimization tools',
      icon: '✍️',
      price: '$129/month',
      features: ['AI writing assistant', 'SEO optimization', 'Content planning', 'Multi-format support', 'Brand voice training', 'Plagiarism detection'],
      benefits: ['10x content production', '50% better SEO', 'Consistent brand voice', 'Time savings'],
      link: '/ai-content-generation',
      popular: false,
      category: 'Content',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      title: 'AI Data Visualizer',
      description: 'Transform complex data into stunning visualizations with AI-powered insights',
      icon: '📊',
      price: '$219/month',
      features: ['Auto-chart generation', 'Interactive dashboards', 'Real-time updates', 'Custom templates', 'Export options', 'Collaboration tools'],
      benefits: ['Faster insights', 'Better decisions', 'Professional presentations', 'Data storytelling'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      title: 'AI Workflow Automator',
      description: 'Automate complex business processes with intelligent workflow management',
      icon: '⚡',
      price: '$279/month',
      features: ['Process automation', 'Smart triggers', 'Integration hub', 'Custom workflows', 'Analytics & monitoring', 'Error handling'],
      benefits: ['80% process automation', '50% time savings', 'Reduced errors', 'Scalable operations'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      title: 'AI Sales Assistant',
      description: 'Boost sales performance with AI-powered lead scoring and automation',
      icon: '💼',
      price: '$199/month',
      features: ['Lead scoring', 'Sales forecasting', 'Email automation', 'CRM integration', 'Performance analytics', 'Coaching insights'],
      benefits: ['35% more qualified leads', '25% higher close rates', 'Automated follow-ups', 'Better forecasting'],
      link: '/ai-sales-automation',
      popular: false,
      category: 'Sales',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      title: 'AI Video Generator',
      description: 'Create professional videos with AI-powered editing and generation tools',
      icon: '🎬',
      price: '$349/month',
      features: ['AI video generation', 'Auto-editing', 'Voice synthesis', 'Template library', 'Brand customization', 'Multi-platform export'],
      benefits: ['10x faster production', 'Professional quality', 'Cost-effective', 'Scalable content'],
      link: '/ai-video-generation',
      popular: false,
      category: 'Media',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      title: 'AI Voice Cloner',
      description: 'Create realistic voice clones for content creation and accessibility',
      icon: '🎤',
      price: '$199/month',
      features: ['Voice synthesis', 'Emotion control', 'Multi-language support', 'Real-time generation', 'API access', 'Custom training'],
      benefits: ['Natural voice quality', 'Accessibility features', 'Content scalability', 'Cost savings'],
      link: '/ai-voice-cloning',
      popular: false,
      category: 'Media',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    }
  ];

  // Enhanced AI Services with real capabilities
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$2,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
      color: 'text-purple-400',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      benefits: ['40% better predictions', '60% faster insights', 'Custom solutions', 'Ongoing support']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,800/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Voice Recognition'],
      color: 'text-blue-400',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      benefits: ['95% accuracy', 'Multi-language support', 'Real-time processing', 'Scalable solutions']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$2,200/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'Quality Control', 'Security Monitoring'],
      color: 'text-green-400',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      benefits: ['99% accuracy', 'Real-time processing', 'Custom models', 'Integration ready']
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,900/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'Integration Hub', 'Monitoring Dashboard'],
      color: 'text-cyan-400',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      benefits: ['80% automation', '50% cost reduction', '24/7 operation', 'Scalable processes']
    },
    {
      title: 'Quantum AI Computing',
      description: 'Next-generation quantum computing solutions for complex problem solving',
      icon: Atom,
      price: '$5,000/month',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Research Support', 'Custom Development'],
      color: 'text-yellow-400',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      benefits: ['Exponential speedup', 'Complex optimization', 'Future-proof technology', 'Research partnership']
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing systems with AI-powered decision making and adaptation',
      icon: Cpu,
      price: '$3,500/month',
      features: ['Self-Healing Systems', 'Adaptive Learning', 'Predictive Maintenance', 'Resource Optimization', 'Fault Tolerance', 'Performance Monitoring'],
      color: 'text-red-400',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      benefits: ['99.9% uptime', 'Self-optimization', 'Reduced maintenance', 'Intelligent scaling']
    }
  ];

  // Comprehensive IT Services with market pricing
  const itServices = [
    {
      title: 'Cloud Services & Migration',
      description: 'Complete cloud migration, setup, and optimization services',
      icon: Cloud,
      price: '$1,999/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Disaster Recovery', '24/7 Monitoring'],
      color: 'text-blue-400',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      benefits: ['50% cost reduction', '99.9% uptime', 'Scalable infrastructure', 'Expert support']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$2,499/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance Management', 'Security Training'],
      color: 'text-red-400',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      benefits: ['Zero breaches', '24/7 monitoring', 'Compliance ready', 'Expert team']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,799/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Performance Optimization'],
      color: 'text-green-400',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      benefits: ['10x faster deployment', 'Zero downtime', 'Automated testing', 'Scalable processes']
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$1,299/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services', '24/7 Support'],
      color: 'text-purple-400',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      benefits: ['3x performance boost', 'Zero data loss', 'Automated backups', 'Expert optimization']
    },
    {
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management services',
      icon: Wifi,
      price: '$1,599/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Monitoring Setup', 'Disaster Recovery', '24/7 Support'],
      color: 'text-cyan-400',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      benefits: ['99.9% uptime', 'Enhanced security', 'Optimized performance', 'Scalable design']
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support and maintenance for all your technology needs',
      icon: Headphones,
      price: '$999/month',
      features: ['24/7 Support', 'Remote Assistance', 'Hardware Maintenance', 'Software Updates', 'Security Patches', 'Performance Monitoring'],
      color: 'text-orange-400',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      benefits: ['Instant response', 'Proactive maintenance', 'Cost-effective', 'Expert team']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services', 'micro SAAS', 'IT services']}
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
            'Business Intelligence',
            'Micro SAAS',
            'IT Services'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-302-464-0950',
            contactType: 'Customer Service',
            areaServed: 'US',
            availableLanguage: 'en',
            email: 'kleber@ziontechgroup.com'
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
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Global Reach</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>

          {/* Micro SAAS Services Section */}
          <section className="mb-16" aria-labelledby="micro-saas-heading">
            <h2 id="micro-saas-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Powerful, affordable AI-powered tools designed for modern businesses
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {microSAASServices.map((service, index) => (
                <article key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    </div>
                  )}
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-2 neon-text">{service.price}</div>
                    <div className="flex flex-col gap-2">
                      <a 
                        href={service.link} 
                        className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                      >
                        Learn More
                      </a>
                      <a 
                        href={`mailto:${service.contact}`}
                        className="text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        Contact: {service.contact}
                      </a>
                      <a 
                        href={`tel:${service.phone}`}
                        className="text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        Phone: {service.phone}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* AI Services Section */}
          <section className="mb-16" aria-labelledby="ai-services-heading">
            <h2 id="ai-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              AI Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Advanced artificial intelligence solutions for enterprise applications
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {aiServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className={`w-8 h-8 ${service.color} mr-3`} />
                    <h3 className="text-xl font-bold text-white neon-text">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-2 neon-text">{service.price}</div>
                    <div className="flex flex-col gap-2">
                      <a 
                        href="/contact" 
                        className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                      >
                        Get Started
                      </a>
                      <a 
                        href={`mailto:${service.contact}`}
                        className="text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {service.contact}
                      </a>
                      <a 
                        href={`tel:${service.phone}`}
                        className="text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {service.phone}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-16" aria-labelledby="it-services-heading">
            <h2 id="it-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              IT Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive IT solutions for modern businesses
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {itServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className={`w-8 h-8 ${service.color} mr-3`} />
                    <h3 className="text-xl font-bold text-white neon-text">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-2 neon-text">{service.price}</div>
                    <div className="flex flex-col gap-2">
                      <a 
                        href="/contact" 
                        className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                      >
                        Get Started
                      </a>
                      <a 
                        href={`mailto:${service.contact}`}
                        className="text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {service.contact}
                      </a>
                      <a 
                        href={`tel:${service.phone}`}
                        className="text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {service.phone}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <div className="cyber-card p-8 text-center">
              <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your AI and IT needs. Our expert team is ready to help you achieve unprecedented growth and efficiency.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 sm:col-span-2 lg:col-span-1">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-cyan-400">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;