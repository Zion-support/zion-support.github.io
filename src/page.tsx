'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Atom, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';
import { initializePerformanceOptimizations } from './utils/performanceOptimizations';

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
    
    // Initialize performance optimizations
    initializePerformanceOptimizations();
    
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
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization and timeline prediction',
      icon: '📊',
      price: '$199/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Budget optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      marketPrice: '$299-499',
      savings: 'Save $100-300/month'
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
      marketPrice: '$299-599',
      savings: 'Save $150-450/month'
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
      marketPrice: '$599-999',
      savings: 'Save $300-700/month'
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
      marketPrice: '$399-799',
      savings: 'Save $200-600/month'
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
      marketPrice: '$499-999',
      savings: 'Save $250-750/month'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection and optimization',
      icon: '🔍',
      price: '$179/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Code quality metrics', 'Team collaboration'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', 'Faster deployment'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development',
      marketPrice: '$299-599',
      savings: 'Save $120-420/month'
    },
    {
      title: 'AI Content Generator',
      description: 'Create high-quality content for blogs, social media, and marketing with AI',
      icon: '✍️',
      price: '$129/month',
      features: ['Blog writing', 'Social media posts', 'Email templates', 'Ad copy generation', 'SEO optimization', 'Brand voice consistency'],
      benefits: ['10x content output', '50% time savings', '40% better engagement', 'SEO-optimized content'],
      link: '/ai-content-generation',
      popular: true,
      category: 'Content',
      marketPrice: '$199-399',
      savings: 'Save $70-270/month'
    },
    {
      title: 'AI Lead Generation System',
      description: 'Automated lead generation and qualification with AI-powered targeting',
      icon: '🎯',
      price: '$349/month',
      features: ['Lead scoring', 'Contact discovery', 'Email outreach', 'CRM integration', 'Behavioral tracking', 'Conversion optimization'],
      benefits: ['300% more qualified leads', '60% conversion rate', '80% time savings', 'ROI tracking'],
      link: '/ai-lead-generation',
      popular: true,
      category: 'Sales',
      marketPrice: '$599-1299',
      savings: 'Save $250-950/month'
    },
    {
      title: 'AI Document Processor',
      description: 'Intelligent document analysis and data extraction with AI',
      icon: '📄',
      price: '$199/month',
      features: ['OCR processing', 'Data extraction', 'Document classification', 'Workflow automation', 'Template recognition', 'Batch processing'],
      benefits: ['95% accuracy', '90% time savings', 'Error reduction', 'Scalable processing'],
      link: '/ai-document-processing',
      popular: false,
      category: 'Automation',
      marketPrice: '$399-799',
      savings: 'Save $200-600/month'
    },
    {
      title: 'AI SEO Optimizer',
      description: 'AI-powered SEO analysis and optimization recommendations',
      icon: '🔍',
      price: '$179/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis', 'Rank tracking', 'Performance monitoring'],
      benefits: ['50% better rankings', '40% more organic traffic', 'ROI tracking', 'Automated reports'],
      link: '/ai-seo-optimizer',
      popular: true,
      category: 'Marketing',
      marketPrice: '$299-599',
      savings: 'Save $120-420/month'
    },
    {
      title: 'AI E-commerce Assistant',
      description: 'AI-powered e-commerce optimization and management tools',
      icon: '🛒',
      price: '$399/month',
      features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer insights', 'Personalization', 'Sales forecasting'],
      benefits: ['35% increase in sales', '25% higher AOV', '40% better conversion', 'Reduced cart abandonment'],
      link: '/ai-ecommerce-solutions',
      popular: true,
      category: 'E-commerce',
      marketPrice: '$799-1499',
      savings: 'Save $400-1100/month'
    },
    {
      title: 'AI Financial Analyzer',
      description: 'AI-powered financial analysis and forecasting for businesses',
      icon: '💰',
      price: '$299/month',
      features: ['Financial forecasting', 'Risk analysis', 'Budget optimization', 'Cash flow management', 'Investment insights', 'Compliance monitoring'],
      benefits: ['30% better financial decisions', '25% cost reduction', 'Risk mitigation', 'Automated reporting'],
      link: '/ai-financial-analyzer',
      popular: false,
      category: 'Finance',
      marketPrice: '$599-999',
      savings: 'Save $300-700/month'
    },
    {
      title: 'AI Video Generator',
      description: 'Create professional videos with AI-powered editing and generation',
      icon: '🎬',
      price: '$249/month',
      features: ['AI video creation', 'Auto-editing', 'Voice synthesis', 'Text-to-video', 'Template library', 'Brand customization'],
      benefits: ['90% time savings', 'Professional quality', 'Unlimited videos', 'No editing skills needed'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Content',
      marketPrice: '$499-999',
      savings: 'Save $250-750/month'
    },
    {
      title: 'AI Voice Cloning',
      description: 'Create realistic voice clones for content and presentations',
      icon: '🎤',
      price: '$199/month',
      features: ['Voice cloning', 'Text-to-speech', 'Multiple languages', 'Emotion control', 'Voice training', 'API integration'],
      benefits: ['Natural sounding voices', 'Multiple voice options', 'Cost-effective', 'Scalable solution'],
      link: '/ai-voice-cloning',
      popular: false,
      category: 'Content',
      marketPrice: '$399-799',
      savings: 'Save $200-600/month'
    },
    {
      title: 'AI Music Composer',
      description: 'Generate royalty-free music and soundtracks with AI',
      icon: '🎵',
      price: '$149/month',
      features: ['AI music generation', 'Multiple genres', 'Custom length', 'Royalty-free', 'Commercial use', 'High quality audio'],
      benefits: ['Unlimited music', 'No copyright issues', 'Custom compositions', 'Professional quality'],
      link: '/ai-music-composition',
      popular: false,
      category: 'Content',
      marketPrice: '$299-599',
      savings: 'Save $150-450/month'
    },
    {
      title: 'AI Fashion Designer',
      description: 'AI-powered fashion design and trend analysis platform',
      icon: '👗',
      price: '$299/month',
      features: ['AI design generation', 'Trend analysis', 'Color matching', 'Size optimization', 'Fabric suggestions', 'Market insights'],
      benefits: ['Faster design process', 'Trend prediction', 'Cost reduction', 'Market intelligence'],
      link: '/ai-fashion-design',
      popular: false,
      category: 'Design',
      marketPrice: '$599-1299',
      savings: 'Save $300-1000/month'
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized AI fitness training and nutrition planning',
      icon: '💪',
      price: '$99/month',
      features: ['Personalized workouts', 'Nutrition planning', 'Progress tracking', 'Form analysis', 'Goal setting', 'Motivation coaching'],
      benefits: ['Personalized training', '24/7 availability', 'Better results', 'Cost-effective'],
      link: '/ai-fitness-coach',
      popular: true,
      category: 'Health',
      marketPrice: '$199-399',
      savings: 'Save $100-300/month'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate complex business workflows with intelligent AI agents',
      icon: '⚙️',
      price: '$399/month',
      features: ['Workflow automation', 'AI agents', 'Process optimization', 'Integration APIs', 'Custom triggers', 'Analytics dashboard'],
      benefits: ['80% process reduction', 'Error elimination', 'Scalable automation', 'ROI tracking'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation',
      marketPrice: '$799-1499',
      savings: 'Save $400-1100/month'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into stunning visual insights with AI',
      icon: '📊',
      price: '$199/month',
      features: ['AI-powered charts', 'Interactive dashboards', 'Data storytelling', 'Custom templates', 'Real-time updates', 'Export options'],
      benefits: ['Better insights', 'Faster analysis', 'Professional visuals', 'Easy sharing'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics',
      marketPrice: '$399-799',
      savings: 'Save $200-600/month'
    },
    {
      title: 'AI Sales Automation',
      description: 'Intelligent sales process automation and optimization',
      icon: '💼',
      price: '$349/month',
      features: ['Sales pipeline management', 'Deal tracking', 'Forecasting', 'Performance analytics', 'Lead scoring', 'CRM integration'],
      benefits: ['Higher conversion rates', 'Better forecasting', 'Automated follow-ups', 'Sales insights'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales',
      marketPrice: '$599-1299',
      savings: 'Save $250-950/month'
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$2,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
      color: 'text-purple-400',
      benefits: ['40% better predictions', '60% faster insights', 'ROI tracking', 'Scalable models']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,800/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Voice Recognition'],
      color: 'text-blue-400',
      benefits: ['95% accuracy', 'Multi-language support', 'Real-time processing', 'Custom training']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$2,200/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'Quality Control', 'Medical Imaging'],
      color: 'text-green-400',
      benefits: ['99% accuracy', 'Real-time processing', 'Edge deployment', 'Custom models']
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,900/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'RPA Integration', 'Smart Routing'],
      color: 'text-cyan-400',
      benefits: ['80% process reduction', '90% error reduction', '24/7 operation', 'Cost savings']
    },
    {
      title: 'Quantum AI Computing',
      description: 'Next-generation quantum algorithms for complex problem solving',
      icon: Atom,
      price: '$5,000/month',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Research & Development', 'Custom Solutions'],
      color: 'text-yellow-400',
      benefits: ['Exponential speedup', 'Complex optimization', 'Future-proof technology', 'Competitive advantage']
    },
    {
      title: 'AI Cybersecurity',
      description: 'AI-powered threat detection and prevention systems',
      icon: Shield,
      price: '$2,800/month',
      features: ['Threat Detection', 'Anomaly Detection', 'Behavioral Analysis', 'Incident Response', 'Risk Assessment', 'Compliance Monitoring'],
      color: 'text-red-400',
      benefits: ['99.9% threat detection', 'Real-time monitoring', 'Automated response', 'Reduced false positives']
    }
  ];

  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and optimization services',
      icon: Cloud,
      price: '$1,999/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Auto-scaling', 'Disaster Recovery'],
      color: 'text-blue-400',
      benefits: ['50% cost reduction', '99.9% uptime', 'Global deployment', '24/7 monitoring']
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$2,499/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing', 'Compliance Auditing'],
      color: 'text-red-400',
      benefits: ['99.9% threat detection', 'Real-time monitoring', 'Zero-day protection', 'Compliance ready']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,799/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Blue-Green Deployments'],
      color: 'text-green-400',
      benefits: ['80% faster deployments', '90% fewer errors', 'Automated rollbacks', 'Zero-downtime updates']
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$1,299/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Data Migration', 'Query Optimization'],
      color: 'text-purple-400',
      benefits: ['300% performance boost', '99.99% availability', 'Automated backups', 'Real-time monitoring']
    },
    {
      title: 'Network Infrastructure',
      description: 'Enterprise-grade network design, implementation, and management',
      icon: Globe,
      price: '$1,599/month',
      features: ['Network Design', 'SD-WAN Implementation', 'Load Balancing', 'VPN Setup', 'Network Monitoring', 'Bandwidth Optimization'],
      color: 'text-cyan-400',
      benefits: ['40% faster speeds', '99.9% reliability', 'Global connectivity', 'Cost optimization']
    },
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services',
      icon: Users,
      price: '$899/month',
      features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base', 'User Training', 'System Maintenance'],
      color: 'text-orange-400',
      benefits: ['Instant response', '95% satisfaction', 'Proactive monitoring', 'User empowerment']
    }
  ];

  const specializedServices = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum algorithms and quantum security implementations',
      icon: Atom,
      price: 'Custom Pricing',
      features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development', 'Quantum Machine Learning', 'Cryptography'],
      color: 'text-yellow-400',
      benefits: ['Exponential speedup', 'Unbreakable security', 'Future-proof technology', 'Competitive advantage'],
      category: 'Quantum'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations',
      icon: Cpu,
      price: 'Custom Pricing',
      features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring', 'Adaptive Learning', 'Intelligent Automation'],
      color: 'text-green-400',
      benefits: ['Zero-downtime operations', 'Predictive maintenance', 'Cost optimization', 'Scalable intelligence'],
      category: 'Autonomous'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, smart contracts, and Web3 applications',
      icon: Lock,
      price: '$2,999/month',
      features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions', 'NFT Platforms', 'DAO Implementation'],
      color: 'text-purple-400',
      benefits: ['Decentralized security', 'Transparent operations', 'Tokenization', 'Community governance'],
      category: 'Blockchain'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions',
      icon: Globe,
      price: '$1,999/month',
      features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation', 'Data Collection', 'Remote Monitoring'],
      color: 'text-cyan-400',
      benefits: ['Real-time insights', 'Reduced latency', 'Cost efficiency', 'Scalable connectivity'],
      category: 'IoT'
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights and predictive analytics for decision-making',
      icon: BarChart,
      price: '$2,299/month',
      features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards', 'Predictive Modeling', 'Real-time Reporting'],
      color: 'text-blue-400',
      benefits: ['Data-driven decisions', 'Predictive insights', 'Real-time analytics', 'Competitive intelligence'],
      category: 'Analytics'
    },
    {
      title: 'Robotics Solutions',
      description: 'Intelligent robotic solutions for manufacturing and service industries',
      icon: Settings,
      price: 'Custom Pricing',
      features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems', 'Quality Control', 'Assembly Automation'],
      color: 'text-orange-400',
      benefits: ['Increased productivity', 'Consistent quality', '24/7 operation', 'Cost reduction'],
      category: 'Robotics'
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                    <div className="text-lg font-bold text-cyan-400 mb-1 neon-text">{service.price}</div>
                    <div className="text-xs text-gray-400 mb-1">Market: {service.marketPrice}</div>
                    <div className="text-xs text-green-400 font-semibold mb-3">{service.savings}</div>
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
              Advanced artificial intelligence solutions for enterprise applications
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {aiServices.map((service, index) => (
                <article key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/ai-services" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </a>
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
              Comprehensive IT solutions for modern enterprise infrastructure
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {itServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/it-services" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Specialized Services Section */}
          <section className="mb-16" aria-labelledby="specialized-services-heading">
            <h2 id="specialized-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Specialized Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Cutting-edge technologies for next-generation business solutions
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {specializedServices.map((service, index) => (
                <article key={index} className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
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
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/specialized-services" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Get In Touch
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
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
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
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
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
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
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;