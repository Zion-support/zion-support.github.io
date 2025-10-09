'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Atom, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Rocket, Cpu as Processor, Layers, Workflow, BarChart3, PieChart as Chart, TrendingUp as Growth, Target as Aim, Brain as Intelligence, Zap as Energy, Shield as Protection, Globe as World, Users as Team, Award as Achievement, Lock as Security, Database as Data, Cloud as CloudComputing, Code as Programming, Smartphone as Mobile, Settings as Configuration, FileText as Document, Search as Find, Bot as Robot, Palette as Design, Camera as Photo, Music as Audio, Video as Media, Gamepad2 as Gaming, ShoppingCart as Ecommerce, CreditCard as Payment, Building as Office, Factory as Manufacturing, Car as Automotive, Plane as Aviation, Ship as Maritime, Train as Railway, Home as Residential, Heart as Health, Stethoscope as Medical, GraduationCap as Education, Briefcase as Business, Wrench as Tools, Hammer as Construction, Paintbrush as Art, Scissors as Craft, BookOpen as Learning, Calculator as Math, Calendar as Schedule, Clock3 as Time, Compass as Direction, Navigation as Nav, PieChart as Analytics, TrendingDown as Decline, Activity as Performance } from 'lucide-react';
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
  <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200/20 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200/20 rounded mb-2"></div>
    <div className="h-4 bg-gray-200/20 rounded w-5/6"></div>
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

  // Enhanced Micro SAAS Services with real pricing and features
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
      marketPrice: '$299',
      savings: '33%'
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
      marketPrice: '$249',
      savings: '40%'
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
      marketPrice: '$499',
      savings: '40%'
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
      marketPrice: '$349',
      savings: '43%'
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
      marketPrice: '$399',
      savings: '38%'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection and optimization',
      icon: '🔍',
      price: '$179/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Best practice suggestions', 'Team collaboration'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', 'Faster development cycles'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development',
      marketPrice: '$299',
      savings: '40%'
    },
    {
      title: 'AI SEO Optimizer Pro',
      description: 'AI-powered SEO analysis and optimization recommendations for better search rankings',
      icon: '🔍',
      price: '$199/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis', 'Rank tracking', 'Performance monitoring'],
      benefits: ['150% organic traffic increase', '40% better rankings', '60% time saved', '25% conversion boost'],
      link: '/ai-seo-optimizer',
      popular: true,
      category: 'SEO',
      marketPrice: '$349',
      savings: '43%'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation for blogs, social media, and marketing materials',
      icon: '✍️',
      price: '$149/month',
      features: ['Blog writing', 'Social media posts', 'Email templates', 'Ad copy generation', 'Product descriptions', 'Multi-language support'],
      benefits: ['80% content creation time saved', '300% more content output', '40% better engagement', '50% cost reduction'],
      link: '/ai-content-generation',
      popular: true,
      category: 'Content',
      marketPrice: '$249',
      savings: '40%'
    },
    {
      title: 'AI Data Visualization',
      description: 'Advanced data visualization and reporting tools with AI insights',
      icon: '📊',
      price: '$229/month',
      features: ['Interactive charts', 'Custom dashboards', 'Real-time updates', 'Export options', 'AI insights', 'Collaboration tools'],
      benefits: ['60% faster reporting', '45% better insights', '80% time saved', '30% improved decisions'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics',
      marketPrice: '$399',
      savings: '43%'
    },
    {
      title: 'AI Lead Generation',
      description: 'Automated lead generation and qualification system with AI scoring',
      icon: '🎯',
      price: '$299/month',
      features: ['Lead scoring', 'Contact discovery', 'Email outreach', 'CRM integration', 'Qualification automation', 'Performance tracking'],
      benefits: ['200% more qualified leads', '50% higher conversion', '70% time saved', '35% cost reduction'],
      link: '/ai-lead-generation',
      popular: true,
      category: 'Sales',
      marketPrice: '$499',
      savings: '40%'
    },
    {
      title: 'AI Sales Automation',
      description: 'Intelligent sales process automation and optimization',
      icon: '💼',
      price: '$349/month',
      features: ['Sales pipeline management', 'Deal tracking', 'Forecasting', 'Performance analytics', 'Automated follow-ups', 'CRM integration'],
      benefits: ['45% sales increase', '60% time saved', '30% better forecasting', '25% higher close rates'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales',
      marketPrice: '$599',
      savings: '42%'
    },
    {
      title: 'AI E-commerce Solutions',
      description: 'AI-powered e-commerce optimization and management platform',
      icon: '🛒',
      price: '$399/month',
      features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer insights', 'Personalization', 'Analytics dashboard'],
      benefits: ['35% revenue increase', '50% better conversions', '40% inventory optimization', '60% customer satisfaction'],
      link: '/ai-ecommerce-solutions',
      popular: true,
      category: 'E-commerce',
      marketPrice: '$699',
      savings: '43%'
    },
    {
      title: 'AI Financial Analyzer',
      description: 'AI-powered financial analysis and forecasting for business intelligence',
      icon: '💰',
      price: '$279/month',
      features: ['Financial forecasting', 'Risk analysis', 'Budget optimization', 'Investment insights', 'Cash flow management', 'Reporting automation'],
      benefits: ['50% better forecasting', '40% risk reduction', '60% time saved', '25% cost savings'],
      link: '/ai-financial-analyzer',
      popular: false,
      category: 'Finance',
      marketPrice: '$499',
      savings: '44%'
    },
    {
      title: 'AI Healthcare Assistant',
      description: 'AI-powered healthcare management and patient care optimization',
      icon: '🏥',
      price: '$449/month',
      features: ['Patient management', 'Diagnostic assistance', 'Treatment optimization', 'Scheduling automation', 'Compliance tracking', 'Analytics dashboard'],
      benefits: ['30% efficiency increase', '40% better outcomes', '50% time saved', '35% cost reduction'],
      link: '/ai-healthcare',
      popular: true,
      category: 'Healthcare',
      marketPrice: '$799',
      savings: '44%'
    },
    {
      title: 'AI Mobile App Builder',
      description: 'AI-powered mobile app development and deployment platform',
      icon: '📱',
      price: '$399/month',
      features: ['No-code development', 'AI design assistance', 'Cross-platform support', 'App store optimization', 'Analytics integration', 'Push notifications'],
      benefits: ['80% faster development', '60% cost reduction', '90% easier maintenance', '40% better user experience'],
      link: '/ai-mobile-app-development',
      popular: true,
      category: 'Development',
      marketPrice: '$699',
      savings: '43%'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Intelligent business process automation with AI decision-making',
      icon: '⚙️',
      price: '$329/month',
      features: ['Process automation', 'Workflow optimization', 'Decision trees', 'Exception handling', 'Integration APIs', 'Performance monitoring'],
      benefits: ['70% process efficiency', '50% time saved', '40% error reduction', '60% cost savings'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation',
      marketPrice: '$599',
      savings: '45%'
    }
  ];

  // Enhanced AI Services
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$2,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
      color: 'text-purple-400',
      marketPrice: '$4,000',
      savings: '38%'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,800/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Voice Recognition'],
      color: 'text-blue-400',
      marketPrice: '$3,000',
      savings: '40%'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$2,200/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'OCR Processing', 'Quality Control'],
      color: 'text-green-400',
      marketPrice: '$3,500',
      savings: '37%'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,900/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'Integration APIs', 'Performance Monitoring'],
      color: 'text-cyan-400',
      marketPrice: '$3,200',
      savings: '41%'
    },
    {
      title: 'Quantum AI Computing',
      description: 'Next-generation quantum algorithms for complex problem solving',
      icon: Atom,
      price: 'Custom Pricing',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Research & Development', 'Custom Solutions', 'Expert Consultation'],
      color: 'text-pink-400',
      marketPrice: 'Contact for pricing',
      savings: 'Competitive rates'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations',
      icon: Settings,
      price: '$3,500/month',
      features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring', 'Adaptive Learning', 'Scalable Architecture'],
      color: 'text-orange-400',
      marketPrice: '$5,500',
      savings: '36%'
    }
  ];

  // Enhanced IT Services
  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and optimization services',
      icon: Cloud,
      price: '$1,999/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Monitoring & Alerting', 'Disaster Recovery'],
      color: 'text-blue-400',
      marketPrice: '$3,200',
      savings: '38%'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$2,499/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance Management', 'Penetration Testing'],
      color: 'text-red-400',
      marketPrice: '$4,000',
      savings: '38%'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,799/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Performance Optimization'],
      color: 'text-green-400',
      marketPrice: '$2,999',
      savings: '40%'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$1,299/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Scalability Planning', 'Migration Services'],
      color: 'text-purple-400',
      marketPrice: '$2,199',
      savings: '41%'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, smart contracts, and Web3 applications',
      icon: Layers,
      price: '$2,999/month',
      features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions', 'NFT Platforms', 'Security Audits'],
      color: 'text-yellow-400',
      marketPrice: '$4,999',
      savings: '40%'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions',
      icon: Wifi,
      price: '$2,199/month',
      features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation', 'Data Integration', 'Scalable Architecture'],
      color: 'text-indigo-400',
      marketPrice: '$3,599',
      savings: '39%'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services', 'micro SAAS', 'business intelligence']}
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
            'Micro SAAS Solutions'
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
              Powerful, affordable AI-powered tools designed for modern businesses. Save up to 45% compared to market rates.
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
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
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
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-lg font-bold text-cyan-400 neon-text">{service.price}</span>
                      {service.marketPrice && (
                        <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                      )}
                    </div>
                    {service.savings && (
                      <div className="text-xs text-green-400 font-semibold mb-2">Save {service.savings}</div>
                    )}
                    <a 
                      href={service.link} 
                      className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      Learn More
                    </a>
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
              Advanced artificial intelligence solutions for enterprise applications. Save up to 41% compared to market rates.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {aiServices.map((service, index) => (
                <a
                  key={index}
                  href={`/ai-services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="cyber-card p-6 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className={`w-8 h-8 ${service.color} mr-3`} />
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-cyan-400">{service.price}</span>
                      {service.marketPrice && service.marketPrice !== 'Contact for pricing' && (
                        <div className="text-xs text-gray-400 line-through">{service.marketPrice}</div>
                      )}
                    </div>
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-16" aria-labelledby="it-services-heading">
            <h2 id="it-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              IT Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive IT solutions for modern enterprises. Save up to 41% compared to market rates.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {itServices.map((service, index) => (
                <a
                  key={index}
                  href={`/it-services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="cyber-card p-6 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className={`w-8 h-8 ${service.color} mr-3`} />
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-cyan-400">{service.price}</span>
                      {service.marketPrice && (
                        <div className="text-xs text-gray-400 line-through">{service.marketPrice}</div>
                      )}
                    </div>
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <div className="cyber-card p-8 text-center">
              <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your AI and IT needs. Our experts are ready to help you achieve your business goals.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a 
                    href="tel:+13024640950" 
                    onClick={handlePhoneClick}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a 
                    href="mailto:kleber@ziontechgroup.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <address className="text-cyan-400 not-italic">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </address>
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
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
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