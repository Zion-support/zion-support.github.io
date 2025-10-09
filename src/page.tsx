'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
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

  const microSAASServices = [
    {
      title: 'AI Project Manager',
      description: 'Revolutionary project management platform powered by advanced AI algorithms that optimize resource allocation, predict project risks, and automate workflow management for maximum efficiency and success.',
      icon: '📊',
      price: '$99/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '50% faster project completion'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Transform your social media presence with our cutting-edge AI platform that creates engaging content, optimizes posting schedules, and provides deep audience insights to maximize your brand impact across all platforms.',
      icon: '📱',
      price: '$79/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Multi-platform management', 'Trend analysis'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '60% better content performance'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Unlock the power of your data with our intelligent analytics platform that uses machine learning to identify patterns, predict trends, and provide actionable insights that drive business growth and competitive advantage.',
      icon: '📈',
      price: '$149/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reporting'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', '90% faster decision making'],
      link: '/ai-analytics-dashboard',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI Email Marketing',
      description: 'Revolutionize your email marketing strategy with our AI-powered platform that creates personalized, high-converting email campaigns, optimizes send times, and delivers exceptional ROI through intelligent automation and segmentation.',
      icon: '📧',
      price: '$99/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Personalization engine'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', '300% better engagement'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot and human handoff',
      icon: '🤖',
      price: '$149/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Integration APIs'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', '60% cost savings'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Support'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection, security scanning, and optimization',
      icon: '🔍',
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Code quality metrics', 'Refactoring suggestions'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', '50% faster reviews'],
      link: '/ai-code-generation',
      popular: false
    },
    {
      title: 'AI Content Generator',
      description: 'Create high-quality content with AI-powered writing assistance and optimization',
      icon: '✍️',
      price: '$69/month',
      features: ['AI writing assistance', 'Content optimization', 'SEO integration', 'Multi-language support'],
      benefits: ['300% content output increase', '50% time saved', '40% better SEO rankings'],
      link: '/ai-content-generation',
      popular: true
    },
    {
      title: 'AI SEO Optimizer',
      description: 'Boost your search rankings with AI-powered SEO analysis and optimization',
      icon: '🎯',
      price: '$79/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis'],
      benefits: ['60% ranking improvement', '80% organic traffic increase', '35% conversion boost'],
      link: '/ai-marketing',
      popular: true
    },
    {
      title: 'AI Invoice Generator',
      description: 'Automate invoicing with AI-powered invoice creation and payment tracking',
      icon: '💰',
      price: '$49/month',
      features: ['Auto invoice generation', 'Payment tracking', 'Tax calculations', 'Multi-currency support'],
      benefits: ['90% time saved', '100% accuracy', '50% faster payments'],
      link: '/ai-invoice-generator',
      popular: false
    },
    {
      title: 'AI Lead Scoring',
      description: 'Identify high-value prospects with AI-powered lead qualification and scoring',
      icon: '🎯',
      price: '$89/month',
      features: ['Lead qualification', 'Behavioral analysis', 'Scoring algorithms', 'CRM integration'],
      benefits: ['45% conversion increase', '60% sales efficiency', '35% revenue growth'],
      link: '/ai-lead-scoring',
      popular: true
    },
    {
      title: 'AI Sales Forecasting',
      description: 'Predict sales outcomes with AI-powered forecasting and trend analysis',
      icon: '📊',
      price: '$119/month',
      features: ['Sales predictions', 'Trend analysis', 'Risk assessment', 'Performance tracking'],
      benefits: ['85% forecast accuracy', '40% better planning', '25% revenue increase'],
      link: '/ai-sales-forecasting',
      popular: true
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'Maximize online sales with AI-powered product recommendations and optimization',
      icon: '🛒',
      price: '$129/month',
      features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer insights'],
      benefits: ['35% sales increase', '50% cart abandonment reduction', '40% customer satisfaction'],
      link: '/ai-ecommerce-optimizer',
      popular: true
    },
    {
      title: 'AI Design Assistant',
      description: 'Create stunning visuals with AI-powered design tools and templates',
      icon: '🎨',
      price: '$79/month',
      features: ['AI design generation', 'Template library', 'Brand consistency', 'Export options'],
      benefits: ['70% design time saved', 'Professional quality', 'Brand consistency'],
      link: '/ai-design-assistant',
      popular: false
    },
    {
      title: 'AI Document Processor',
      description: 'Extract and process information from documents with AI-powered automation',
      icon: '📄',
      price: '$99/month',
      features: ['Document extraction', 'Data validation', 'Format conversion', 'Batch processing'],
      benefits: ['80% processing time saved', '99% accuracy', '50% cost reduction'],
      link: '/ai-document-processor',
      popular: true
    },
    {
      title: 'AI Security Monitor',
      description: 'Protect your business with AI-powered security monitoring and threat detection',
      icon: '🔒',
      price: '$199/month',
      features: ['Real-time monitoring', 'Threat detection', 'Incident response', 'Compliance reporting'],
      benefits: ['99.9% security uptime', '90% threat reduction', '24/7 protection'],
      link: '/ai-security-monitor',
      popular: true
    },
    {
      title: 'AI Performance Tracker',
      description: 'Monitor and optimize business performance with AI-powered analytics',
      icon: '📈',
      price: '$89/month',
      features: ['Performance metrics', 'KPI tracking', 'Automated reports', 'Trend analysis'],
      benefits: ['30% performance improvement', '50% reporting time saved', 'Data-driven decisions'],
      link: '/ai-performance-tracker',
      popular: false
    },
    {
      title: 'AI Voice Assistant',
      description: 'Build custom voice assistants with AI-powered speech recognition and processing',
      icon: '🎤',
      price: '$149/month',
      features: ['Voice recognition', 'Natural language processing', 'Custom commands', 'Multi-language support'],
      benefits: ['60% task automation', '24/7 availability', 'Improved user experience'],
      link: '/ai-voice-assistant',
      popular: true
    },
    {
      title: 'AI HR Assistant',
      description: 'Streamline HR processes with AI-powered recruitment and employee management',
      icon: '👥',
      price: '$119/month',
      features: ['Resume screening', 'Candidate matching', 'Employee analytics', 'Performance tracking'],
      benefits: ['50% hiring time reduction', '40% better candidate quality', '30% HR efficiency'],
      link: '/ai-hr-assistant',
      popular: true
    },
    {
      title: 'AI Inventory Manager',
      description: 'Optimize inventory with AI-powered demand forecasting and stock management',
      icon: '📦',
      price: '$99/month',
      features: ['Demand forecasting', 'Stock optimization', 'Reorder alerts', 'Analytics dashboard'],
      benefits: ['25% inventory cost reduction', '40% stockout prevention', '60% efficiency gain'],
      link: '/ai-inventory-manager',
      popular: false
    },
    {
      title: 'AI Customer Insights',
      description: 'Understand customers better with AI-powered behavior analysis and insights',
      icon: '👤',
      price: '$109/month',
      features: ['Customer segmentation', 'Behavior analysis', 'Predictive modeling', 'Personalization'],
      benefits: ['35% customer retention', '50% personalization accuracy', '40% engagement increase'],
      link: '/ai-customer-insights',
      popular: true
    },
    {
      title: 'AI A/B Testing Platform',
      description: 'Optimize conversions with AI-powered A/B testing and experimentation',
      icon: '🧪',
      price: '$79/month',
      features: ['Automated testing', 'Statistical analysis', 'Winner selection', 'Performance tracking'],
      benefits: ['45% conversion improvement', '70% testing efficiency', 'Data-driven optimization'],
      link: '/ai-ab-testing',
      popular: false
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Predict future outcomes with AI-powered forecasting and trend analysis',
      icon: '🔮',
      price: '$159/month',
      features: ['Predictive modeling', 'Trend analysis', 'Risk assessment', 'Scenario planning'],
      benefits: ['80% prediction accuracy', '50% better planning', '30% risk reduction'],
      link: '/ai-predictive-analytics',
      popular: true
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate business processes with AI-powered workflow optimization',
      icon: '⚙️',
      price: '$129/month',
      features: ['Process automation', 'Workflow optimization', 'Task routing', 'Performance monitoring'],
      benefits: ['60% process efficiency', '50% time saved', '40% error reduction'],
      link: '/ai-workflow-automation',
      popular: true
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, decision-making, and intelligent automation',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'AutoML', 'MLOps'],
      benefits: ['40% better predictions', '60% faster model deployment', 'Reduced manual work', 'Higher accuracy'],
      color: 'text-purple-400',
      category: 'Core AI'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Voice Recognition'],
      benefits: ['90% accuracy in text analysis', 'Multi-language support', 'Real-time processing', 'Cost effective'],
      color: 'text-blue-400',
      category: 'Language AI'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and visual intelligence',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'OCR', 'Medical Imaging'],
      benefits: ['95% accuracy in detection', 'Real-time processing', 'Multi-format support', 'Industry specific'],
      color: 'text-green-400',
      category: 'Visual AI'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities and workflow optimization',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      color: 'text-cyan-400'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnosis, treatment planning, and patient care optimization',
      icon: Stethoscope,
      price: '$2,500/month',
      features: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Monitoring', 'Treatment Optimization'],
      color: 'text-red-400'
    },
    {
      title: 'AI Financial Services',
      description: 'Fintech AI for fraud detection, risk assessment, and algorithmic trading',
      icon: CreditCard,
      price: '$2,200/month',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'],
      color: 'text-yellow-400'
    },
    {
      title: 'AI E-commerce Platform',
      description: 'Complete e-commerce AI solution with personalization and optimization',
      icon: ShoppingCart,
      price: '$1,800/month',
      features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights'],
      color: 'text-orange-400'
    },
    {
      title: 'AI Mobile Development',
      description: 'AI-powered mobile app development with intelligent features',
      icon: Smartphone,
      price: '$1,600/month',
      features: ['AI App Development', 'Voice Integration', 'Image Recognition', 'Predictive Features'],
      color: 'text-indigo-400'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Migration & Services',
      description: 'Comprehensive cloud migration, setup, optimization, and management services',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Auto-scaling', 'Disaster Recovery'],
      benefits: ['50% cost reduction', '99.9% uptime', 'Faster deployment', 'Scalable infrastructure'],
      color: 'text-blue-400',
      category: 'Cloud'
    },
    {
      title: 'Cybersecurity Suite',
      description: 'Advanced security solutions with threat detection, prevention, and incident response',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing', 'Compliance'],
      benefits: ['99.9% threat detection', 'Real-time protection', 'Reduced security risks', 'Compliance ready'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'GitOps'],
      benefits: ['80% faster deployment', 'Reduced errors', 'Better collaboration', 'Automated processes'],
      color: 'text-green-400',
      category: 'DevOps'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, and management with AI-powered tuning and monitoring',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      color: 'text-purple-400'
    },
    {
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure design, implementation, and management',
      icon: Building,
      price: '$1,800/month',
      features: ['Network Design', 'Server Setup', 'Storage Solutions', 'Infrastructure Monitoring'],
      color: 'text-cyan-400'
    },
    {
      title: 'Network Solutions',
      description: 'Advanced networking solutions with security and performance optimization',
      icon: Globe,
      price: '$1,400/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring'],
      color: 'text-orange-400'
    },
    {
      title: 'System Administration',
      description: 'Comprehensive system administration and maintenance services',
      icon: Wrench,
      price: '$1,100/month',
      features: ['System Monitoring', 'Performance Tuning', 'Security Updates', 'Backup Management'],
      color: 'text-yellow-400'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology consulting services',
      icon: Target,
      price: '$1,500/month',
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Management', 'Digital Transformation'],
      color: 'text-pink-400'
    }
  ];

  return (
    <>
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-advanced cyber-matrix-bg particle-field">
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

        <main id="main-content" className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 pt-20 sm:pt-24" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 cyber-scan-line ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-advanced neon-pulse glitch"
                data-text="Zion Tech Group"
              >
                Zion Tech Group
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-6 sm:mb-8 font-medium neon-pulse cyber-scan-effect" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-8 sm:mb-12">
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-sm sm:text-base lg:text-lg neon-text">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-sm sm:text-base lg:text-lg neon-text">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-sm sm:text-base lg:text-lg neon-text">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-sm sm:text-base lg:text-lg neon-text">Global Reach</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </Link>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">+1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>

          {/* Micro SAAS Services Section */}
          <section className="mb-12 sm:mb-16 lg:mb-20" aria-labelledby="micro-saas-heading">
            <h2 id="micro-saas-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Powerful, affordable AI-powered tools designed for modern businesses
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {microSAASServices.map((service, index) => (
                <article key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'cyber-glow-advanced ring-2 ring-cyan-400' : 'holographic-card-advanced'}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <div className="inline-block bg-gradient-to-r from-purple-500/20 to-cyan-500/20 px-3 py-1 rounded-full text-xs font-medium text-cyan-400 mb-2">
                      {service.category}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 neon-text">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-gray-400 ml-5">
                          +{service.features.length - 4} more features
                        </li>
                      )}
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
                    <div className="text-lg font-bold text-cyan-400 mb-2 neon-text">{service.price}</div>
                    <Link 
                      to={service.link} 
                      className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      Learn More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center">
              <a 
                href="/micro-saas" 
                className="cyber-button px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                View All Micro SAAS Solutions
              </a>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="mb-12 sm:mb-16 lg:mb-20" aria-labelledby="ai-services-heading">
            <h2 id="ai-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              AI Services & Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Advanced artificial intelligence solutions for enterprise applications
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {aiServices.map((service, index) => (
                <article key={index} className="quantum-entanglement p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-gray-400 ml-5">
                          +{service.features.length - 4} more features
                        </li>
                      )}
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
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <Link 
                      to="/ai-services" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center">
              <a 
                href="/ai-services" 
                className="cyber-button px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                View All AI Services
              </a>
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-12 sm:mb-16 lg:mb-20" aria-labelledby="it-services-heading">
            <h2 id="it-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              IT Services & Infrastructure
            </h2>
            <p className="text-lg text-gray-300 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Comprehensive IT solutions for modern enterprise infrastructure
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {itServices.map((service, index) => (
                <article key={index} className="holographic-card-advanced p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-gray-400 ml-5">
                          +{service.features.length - 4} more features
                        </li>
                      )}
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
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <Link 
                      to="/it-services" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center">
              <a 
                href="/it-services" 
                className="cyber-button px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                View All IT Services
              </a>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="mb-16" aria-labelledby="stats-heading">
            <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our Impact
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text">500+</div>
                <div className="text-sm text-gray-300">Clients Served</div>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2 neon-text">$50M+</div>
                <div className="text-sm text-gray-300">Cost Savings</div>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-pink-400 mb-2 neon-text">95%</div>
                <div className="text-sm text-gray-300">Process Automation</div>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2 neon-text">300%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12 sm:mb-16 lg:mb-20" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Ready to transform your business? Contact us for a free consultation and discover how our solutions can drive your success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-glow-advanced p-6 text-center hover:scale-105 transition-all duration-300">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a 
                  href="tel:+13024640950" 
                  onClick={handlePhoneClick}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="holographic-card-advanced p-6 text-center hover:scale-105 transition-all duration-300">
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="quantum-entanglement p-6 text-center hover:scale-105 transition-all duration-300">
                <Location className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  View on Map
                </a>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get a free consultation and discover how our AI and IT solutions can revolutionize your operations and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Free Consultation
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
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;