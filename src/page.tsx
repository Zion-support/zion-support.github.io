'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
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

  // Enhanced Micro SAAS Services with real functionality
  const microSAASServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment',
      icon: '📊',
      price: '$99/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      marketPrice: '$150/month',
      savings: 'Save $51/month'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation, smart scheduling, and audience intelligence',
      icon: '📱',
      price: '$79/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Multi-platform management', 'Engagement optimization'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '60% better targeting'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing',
      marketPrice: '$120/month',
      savings: 'Save $41/month'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and real-time business intelligence',
      icon: '📈',
      price: '$149/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reports'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', '50% faster decisions'],
      link: '/ai-analytics',
      popular: true,
      category: 'Analytics',
      marketPrice: '$200/month',
      savings: 'Save $51/month'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Transform your email marketing with AI-powered content generation, automation, and advanced segmentation',
      icon: '📧',
      price: '$99/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Deliverability optimization'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', '35% higher CTR'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing',
      marketPrice: '$150/month',
      savings: 'Save $51/month'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot and seamless human handoff',
      icon: '🤖',
      price: '$149/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Integration APIs'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', '50% cost reduction'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Support',
      marketPrice: '$200/month',
      savings: 'Save $51/month'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection, security scanning, and optimization suggestions',
      icon: '🔍',
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Best practice recommendations', 'Team collaboration'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', '40% faster development'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development',
      marketPrice: '$130/month',
      savings: 'Save $41/month'
    },
    {
      title: 'AI Content Generator Pro',
      description: 'AI-powered content creation for blogs, social media, marketing materials, and technical documentation',
      icon: '✍️',
      price: '$199/month',
      features: ['Blog writing', 'Social media posts', 'Email templates', 'Ad copy generation', 'Technical docs', 'SEO optimization'],
      benefits: ['300% content output increase', '50% time saved', '40% better engagement', '60% SEO improvement'],
      link: '/ai-content-generation',
      popular: false,
      category: 'Content',
      marketPrice: '$250/month',
      savings: 'Save $51/month'
    },
    {
      title: 'AI SEO Optimizer',
      description: 'AI-driven SEO analysis and optimization with keyword research, content optimization, and competitor analysis',
      icon: '🎯',
      price: '$299/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis', 'Rank tracking', 'Performance monitoring'],
      benefits: ['80% SEO improvement', '60% organic traffic increase', '45% higher rankings', '35% conversion boost'],
      link: '/ai-marketing',
      popular: false,
      category: 'SEO',
      marketPrice: '$400/month',
      savings: 'Save $101/month'
    },
    {
      title: 'AI Data Visualization Studio',
      description: 'Advanced data visualization and reporting tools with AI-powered insights and interactive dashboards',
      icon: '📊',
      price: '$299/month',
      features: ['Interactive charts', 'Custom dashboards', 'Real-time updates', 'Export options', 'AI insights', 'Collaboration tools'],
      benefits: ['50% faster insights', '60% better decisions', '40% time saved', '35% accuracy improvement'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics',
      marketPrice: '$350/month',
      savings: 'Save $51/month'
    },
    {
      title: 'AI Video Generation Suite',
      description: 'AI-powered video creation with automated editing, voice synthesis, and multi-format output',
      icon: '🎬',
      price: '$399/month',
      features: ['AI video creation', 'Automated editing', 'Voice synthesis', 'Multi-format output', 'Template library', 'Brand customization'],
      benefits: ['90% time saved', '70% cost reduction', '60% quality improvement', '80% faster production'],
      link: '/ai-video-generation',
      popular: false,
      category: 'Video',
      marketPrice: '$500/month',
      savings: 'Save $101/month'
    },
    {
      title: 'AI Voice Cloning Studio',
      description: 'Realistic voice synthesis and cloning technology for content creation and accessibility',
      icon: '🎤',
      price: '$199/month',
      features: ['Voice cloning', 'Text-to-speech', 'Multi-language support', 'Emotion control', 'Custom voices', 'API integration'],
      benefits: ['95% voice accuracy', '80% time saved', '60% cost reduction', 'Unlimited usage'],
      link: '/ai-voice-cloning',
      popular: false,
      category: 'Audio',
      marketPrice: '$250/month',
      savings: 'Save $51/month'
    },
    {
      title: 'AI Music Composition',
      description: 'AI-generated music and soundtracks for content creators, businesses, and entertainment',
      icon: '🎵',
      price: '$149/month',
      features: ['AI music generation', 'Multiple genres', 'Custom compositions', 'Royalty-free', 'High-quality output', 'Commercial license'],
      benefits: ['100% original music', '90% time saved', '70% cost reduction', 'Unlimited downloads'],
      link: '/ai-music-composition',
      popular: false,
      category: 'Audio',
      marketPrice: '$200/month',
      savings: 'Save $51/month'
    },
    {
      title: 'AI Fashion Design Assistant',
      description: 'AI-powered fashion design and trend analysis for designers and retailers',
      icon: '👗',
      price: '$249/month',
      features: ['AI design generation', 'Trend analysis', 'Color matching', 'Pattern creation', 'Size optimization', 'Market insights'],
      benefits: ['80% design time saved', '60% trend accuracy', '40% cost reduction', '50% faster to market'],
      link: '/ai-fashion-design',
      popular: false,
      category: 'Design',
      marketPrice: '$300/month',
      savings: 'Save $51/month'
    },
    {
      title: 'AI Fitness Coach Pro',
      description: 'Personal AI fitness trainer with workout plans, nutrition advice, and progress tracking',
      icon: '💪',
      price: '$99/month',
      features: ['Personalized workouts', 'Nutrition planning', 'Progress tracking', 'Form analysis', 'Goal setting', 'Community features'],
      benefits: ['70% better results', '50% time saved', '60% motivation increase', '40% injury reduction'],
      link: '/ai-fitness-coach',
      popular: false,
      category: 'Health',
      marketPrice: '$150/month',
      savings: 'Save $51/month'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation with AI-powered decision making and exception handling',
      icon: '⚙️',
      price: '$199/month',
      features: ['Process automation', 'AI decision making', 'Exception handling', 'Integration APIs', 'Custom workflows', 'Analytics'],
      benefits: ['85% process automation', '60% time saved', '70% error reduction', '50% cost savings'],
      link: '/ai-workflow-automation',
      popular: false,
      category: 'Automation',
      marketPrice: '$250/month',
      savings: 'Save $51/month'
    },
    {
      title: 'AI Email Assistant Pro',
      description: 'Smart email management with AI-powered response suggestions, scheduling, and organization',
      icon: '📧',
      price: '$99/month',
      features: ['Email classification', 'Response suggestions', 'Scheduling', 'Follow-up reminders', 'Spam filtering', 'Priority sorting'],
      benefits: ['60% time saved', '40% response improvement', '50% organization boost', '30% stress reduction'],
      link: '/ai-email-assistant',
      popular: false,
      category: 'Productivity',
      marketPrice: '$130/month',
      savings: 'Save $31/month'
    },
    {
      title: 'AI Lead Generation Engine',
      description: 'Automated lead generation and qualification system with AI-powered scoring and outreach',
      icon: '🎯',
      price: '$349/month',
      features: ['Lead scoring', 'Contact discovery', 'Email outreach', 'CRM integration', 'Qualification', 'Follow-up automation'],
      benefits: ['200% more leads', '80% qualification accuracy', '60% conversion increase', '50% time saved'],
      link: '/ai-lead-generation',
      popular: false,
      category: 'Sales',
      marketPrice: '$450/month',
      savings: 'Save $101/month'
    },
    {
      title: 'AI Sales Automation Suite',
      description: 'Intelligent sales process automation with pipeline management and forecasting',
      icon: '💰',
      price: '$399/month',
      features: ['Sales pipeline management', 'Deal tracking', 'Forecasting', 'Performance analytics', 'Automated follow-ups', 'CRM integration'],
      benefits: ['50% sales increase', '40% pipeline efficiency', '60% forecast accuracy', '35% time saved'],
      link: '/ai-sales-automation',
      popular: false,
      category: 'Sales',
      marketPrice: '$500/month',
      savings: 'Save $101/month'
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'AI-powered e-commerce optimization with product recommendations and inventory management',
      icon: '🛒',
      price: '$499/month',
      features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer insights', 'A/B testing', 'Conversion optimization'],
      benefits: ['45% conversion increase', '30% revenue growth', '50% inventory efficiency', '60% customer satisfaction'],
      link: '/ai-ecommerce-solutions',
      popular: false,
      category: 'E-commerce',
      marketPrice: '$650/month',
      savings: 'Save $151/month'
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making with advanced algorithms',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
      color: 'text-purple-400',
      marketPrice: '$2,000/month',
      savings: 'Save $500/month'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, language understanding, and conversation AI',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Voice Recognition'],
      color: 'text-blue-400',
      marketPrice: '$1,600/month',
      savings: 'Save $400/month'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and visual intelligence',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'Quality Control', 'Medical Imaging'],
      color: 'text-green-400',
      marketPrice: '$2,200/month',
      savings: 'Save $400/month'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities and exception handling',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'Integration APIs', 'Monitoring'],
      color: 'text-cyan-400',
      marketPrice: '$1,800/month',
      savings: 'Save $400/month'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and optimization services with multi-cloud strategies',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Monitoring', 'Backup Solutions'],
      color: 'text-blue-400',
      marketPrice: '$1,600/month',
      savings: 'Save $301/month'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection, prevention, and incident response',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance', 'Penetration Testing'],
      color: 'text-red-400',
      marketPrice: '$2,000/month',
      savings: 'Save $401/month'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Performance Optimization'],
      color: 'text-green-400',
      marketPrice: '$1,500/month',
      savings: 'Save $301/month'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and monitoring',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Scaling', 'Migration'],
      color: 'text-purple-400',
      marketPrice: '$1,200/month',
      savings: 'Save $301/month'
    }
  ];

  const specializedSolutions = [
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum algorithms and quantum security implementations',
      icon: Sparkles,
      price: 'Custom',
      features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development'],
      color: 'text-purple-400',
      marketPrice: 'Custom',
      savings: 'Competitive pricing'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations',
      icon: Cpu,
      price: 'Custom',
      features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring'],
      color: 'text-cyan-400',
      marketPrice: 'Custom',
      savings: 'Competitive pricing'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, smart contracts, and Web3 applications',
      icon: Globe,
      price: '$1,999/month',
      features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions'],
      color: 'text-orange-400',
      marketPrice: '$2,500/month',
      savings: 'Save $501/month'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions for smart environments',
      icon: Smartphone,
      price: '$1,499/month',
      features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation'],
      color: 'text-green-400',
      marketPrice: '$1,800/month',
      savings: 'Save $301/month'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services', 'micro SAAS', 'AI tools']}
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
              Powerful, affordable AI-powered tools designed for modern businesses. Save up to $151/month compared to market rates.
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
                    <div className="text-lg font-bold text-cyan-400 mb-1 neon-text">{service.price}</div>
                    {service.marketPrice && (
                      <div className="text-sm text-gray-400 mb-2">
                        <span className="line-through">{service.marketPrice}</span>
                        <span className="text-green-400 ml-2 font-semibold">{service.savings}</span>
                      </div>
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
              Advanced artificial intelligence solutions for enterprise applications. Save up to $500/month compared to market rates.
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
                    <div className={`text-lg font-bold mb-1 neon-text ${service.color}`}>{service.price}</div>
                    {service.marketPrice && (
                      <div className="text-sm text-gray-400 mb-2">
                        <span className="line-through">{service.marketPrice}</span>
                        <span className="text-green-400 ml-2 font-semibold">{service.savings}</span>
                      </div>
                    )}
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
              Comprehensive IT solutions for modern enterprise infrastructure. Save up to $401/month compared to market rates.
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
                    <div className={`text-lg font-bold mb-1 neon-text ${service.color}`}>{service.price}</div>
                    {service.marketPrice && (
                      <div className="text-sm text-gray-400 mb-2">
                        <span className="line-through">{service.marketPrice}</span>
                        <span className="text-green-400 ml-2 font-semibold">{service.savings}</span>
                      </div>
                    )}
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

          {/* Specialized Solutions Section */}
          <section className="mb-16" aria-labelledby="specialized-heading">
            <h2 id="specialized-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Specialized Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Cutting-edge technologies for the future of business. Custom pricing available.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {specializedSolutions.map((service, index) => (
                <article key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Features:</h4>
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
                    <div className={`text-lg font-bold mb-1 neon-text ${service.color}`}>{service.price}</div>
                    {service.marketPrice && (
                      <div className="text-sm text-gray-400 mb-2">
                        <span className="line-through">{service.marketPrice}</span>
                        <span className="text-green-400 ml-2 font-semibold">{service.savings}</span>
                      </div>
                    )}
                    <a 
                      href="/specialized-solutions" 
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