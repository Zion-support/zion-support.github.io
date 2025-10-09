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
    // Preload critical components after initial render
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

  const microSAASServices = [
    {
      title: 'AI Project Manager',
      description: 'Intelligent project planning with AI-powered resource optimization and timeline prediction',
      icon: '📊',
      price: '$99/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy'],
      link: '/ai-project-manager',
      popular: true
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation and smart scheduling',
      icon: '📱',
      price: '$79/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach'],
      link: '/ai-social-media-manager',
      popular: true
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      icon: '📈',
      price: '$149/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift'],
      link: '/ai-analytics-dashboard',
      popular: true
    },
    {
      title: 'AI Email Marketing',
      description: 'Transform your email marketing with AI-powered content generation and automation',
      icon: '📧',
      price: '$99/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved'],
      link: '/ai-email-marketing',
      popular: true
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot',
      icon: '🤖',
      price: '$149/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically'],
      link: '/ai-customer-support-bot',
      popular: true
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection and optimization',
      icon: '🔍',
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality'],
      link: '/ai-code-generation',
      popular: false
    },
    {
      title: 'AI Invoice Generator',
      description: 'Automated invoicing with smart templates and AI-powered customization',
      icon: '🧾',
      price: '$59/month',
      features: ['Smart templates', 'Auto-calculation', 'Multi-currency support', 'Payment tracking'],
      benefits: ['90% time saved', 'Zero calculation errors', 'Faster payments'],
      link: '/ai-invoice-generator',
      popular: false
    },
    {
      title: 'AI Lead Scoring',
      description: 'Intelligent lead qualification and scoring with machine learning algorithms',
      icon: '🎯',
      price: '$129/month',
      features: ['ML-powered scoring', 'Behavioral analysis', 'Lead prioritization', 'CRM integration'],
      benefits: ['60% better conversion', '35% sales increase', '50% time saved'],
      link: '/ai-lead-scoring',
      popular: false
    },
    {
      title: 'AI Sales Forecasting',
      description: 'Advanced sales predictions and analytics with AI-powered forecasting',
      icon: '📊',
      price: '$199/month',
      features: ['Predictive analytics', 'Trend analysis', 'Revenue forecasting', 'Risk assessment'],
      benefits: ['85% accuracy', '40% better planning', '30% revenue increase'],
      link: '/ai-sales-forecasting',
      popular: false
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'E-commerce optimization and conversion boost with AI-powered insights',
      icon: '🛒',
      price: '$179/month',
      features: ['Conversion optimization', 'Price optimization', 'Inventory management', 'Customer insights'],
      benefits: ['45% conversion increase', '30% revenue growth', '25% cost reduction'],
      link: '/ai-ecommerce-optimizer',
      popular: false
    },
    {
      title: 'AI Design Assistant',
      description: 'AI-powered design tool and automation for creative professionals',
      icon: '🎨',
      price: '$89/month',
      features: ['Auto-design generation', 'Brand consistency', 'Template library', 'Collaboration tools'],
      benefits: ['70% faster design', 'Consistent branding', '50% time saved'],
      link: '/ai-design-assistant',
      popular: false
    },
    {
      title: 'AI Document Processor',
      description: 'Intelligent document processing and analysis with OCR and AI',
      icon: '📄',
      price: '$109/month',
      features: ['OCR technology', 'Document classification', 'Data extraction', 'Workflow automation'],
      benefits: ['95% accuracy', '80% time saved', 'Zero manual errors'],
      link: '/ai-document-processor',
      popular: false
    },
    {
      title: 'AI Security Monitor',
      description: 'Real-time security monitoring and alerts with AI-powered threat detection',
      icon: '🔒',
      price: '$159/month',
      features: ['Threat detection', 'Real-time alerts', 'Vulnerability scanning', 'Compliance monitoring'],
      benefits: ['99.9% threat detection', '50% faster response', 'Zero false positives'],
      link: '/ai-security-monitor',
      popular: false
    },
    {
      title: 'AI Performance Tracker',
      description: 'Comprehensive performance tracking and insights for teams and individuals',
      icon: '📈',
      price: '$139/month',
      features: ['Performance analytics', 'Goal tracking', 'Team insights', 'Productivity metrics'],
      benefits: ['35% productivity increase', 'Better goal achievement', 'Data-driven decisions'],
      link: '/ai-performance-tracker',
      popular: false
    },
    {
      title: 'AI Voice Assistant',
      description: 'Custom voice assistants and automation for business processes',
      icon: '🎤',
      price: '$169/month',
      features: ['Voice commands', 'Natural language processing', 'Custom workflows', 'Multi-language support'],
      benefits: ['60% faster operations', 'Hands-free efficiency', '24/7 availability'],
      link: '/ai-voice-assistant',
      popular: false
    },
    {
      title: 'AI HR Assistant',
      description: 'Intelligent HR management and automation for human resources',
      icon: '👥',
      price: '$149/month',
      features: ['Resume screening', 'Interview scheduling', 'Employee analytics', 'Compliance tracking'],
      benefits: ['70% faster hiring', 'Better candidate matching', 'Reduced bias'],
      link: '/ai-hr-assistant',
      popular: false
    },
    {
      title: 'AI Inventory Manager',
      description: 'Smart inventory management and optimization with predictive analytics',
      icon: '📦',
      price: '$129/month',
      features: ['Demand forecasting', 'Stock optimization', 'Reorder automation', 'Cost analysis'],
      benefits: ['30% cost reduction', 'Zero stockouts', '25% efficiency increase'],
      link: '/ai-inventory-manager',
      popular: false
    },
    {
      title: 'AI Customer Insights',
      description: 'Deep customer insights and analytics for better business decisions',
      icon: '👁️',
      price: '$189/month',
      features: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Personalization'],
      benefits: ['40% better targeting', '25% churn reduction', '50% ROI increase'],
      link: '/ai-customer-insights',
      popular: false
    },
    {
      title: 'AI Workflow Automation',
      description: 'Process automation and optimization with intelligent workflow management',
      icon: '⚙️',
      price: '$199/month',
      features: ['Process automation', 'Workflow optimization', 'Task routing', 'Performance monitoring'],
      benefits: ['80% process efficiency', '60% time saved', 'Zero manual errors'],
      link: '/ai-workflow-automation',
      popular: false
    },
    {
      title: 'AI A/B Testing Platform',
      description: 'Advanced A/B testing and optimization with AI-powered insights',
      icon: '🧪',
      price: '$119/month',
      features: ['Automated testing', 'Statistical analysis', 'Conversion optimization', 'Real-time results'],
      benefits: ['50% better results', 'Faster testing cycles', 'Data-driven decisions'],
      link: '/ai-ab-testing',
      popular: false
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Future outcome predictions and forecasting with advanced machine learning',
      icon: '🔮',
      price: '$229/month',
      features: ['Predictive modeling', 'Trend forecasting', 'Risk assessment', 'Scenario planning'],
      benefits: ['90% prediction accuracy', 'Better strategic planning', 'Risk mitigation'],
      link: '/ai-predictive-analytics',
      popular: false
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation for all platforms and marketing needs',
      icon: '✍️',
      price: '$79/month',
      features: ['Multi-format content', 'Brand voice consistency', 'SEO optimization', 'Content scheduling'],
      benefits: ['300% content output', 'Consistent quality', 'SEO-optimized content'],
      link: '/ai-content-generation',
      popular: false
    },
    {
      title: 'AI SEO Optimizer',
      description: 'AI-driven SEO optimization and analysis for better search rankings',
      icon: '🎯',
      price: '$119/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Rank tracking'],
      benefits: ['200% traffic increase', 'Top 3 rankings', '50% time saved'],
      link: '/ai-marketing',
      popular: false
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'],
      color: 'text-purple-400'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      color: 'text-blue-400'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      color: 'text-green-400'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      color: 'text-cyan-400'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Medical AI applications for diagnostics, treatment planning, and patient care',
      icon: '🏥',
      price: '$2,500/month',
      features: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Monitoring', 'Diagnostic Assistance'],
      color: 'text-red-400'
    },
    {
      title: 'AI Fintech Applications',
      description: 'Financial AI solutions for fraud detection, risk assessment, and trading',
      icon: '💳',
      price: '$2,200/month',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'],
      color: 'text-yellow-400'
    },
    {
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions for threat detection and prevention',
      icon: Shield,
      price: '$1,900/month',
      features: ['Threat Detection', 'Anomaly Detection', 'Security Analytics', 'Incident Response'],
      color: 'text-orange-400'
    },
    {
      title: 'AI Data Analytics',
      description: 'Advanced data insights and visualization with AI-powered analytics',
      icon: BarChart3,
      price: '$1,600/month',
      features: ['Data Visualization', 'Pattern Recognition', 'Predictive Modeling', 'Business Intelligence'],
      color: 'text-indigo-400'
    },
    {
      title: 'AI Voice & Speech',
      description: 'Voice synthesis, speech recognition, and conversational AI solutions',
      icon: '🎤',
      price: '$1,700/month',
      features: ['Speech Recognition', 'Voice Synthesis', 'Conversational AI', 'Audio Processing'],
      color: 'text-pink-400'
    },
    {
      title: 'AI Video Generation',
      description: 'AI-powered video creation, editing, and content generation',
      icon: '🎬',
      price: '$2,000/month',
      features: ['Video Generation', 'Content Creation', 'Video Editing', 'Motion Graphics'],
      color: 'text-teal-400'
    },
    {
      title: 'AI Music Composition',
      description: 'AI-generated music, audio content, and sound design solutions',
      icon: '🎵',
      price: '$1,400/month',
      features: ['Music Generation', 'Audio Processing', 'Sound Design', 'Composition Tools'],
      color: 'text-violet-400'
    },
    {
      title: 'AI 3D Generation',
      description: '3D model generation, visualization, and virtual reality solutions',
      icon: '🎮',
      price: '$2,300/month',
      features: ['3D Modeling', 'Virtual Reality', 'Augmented Reality', '3D Visualization'],
      color: 'text-emerald-400'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and optimization services',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'],
      color: 'text-blue-400'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      color: 'text-red-400'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      color: 'text-green-400'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      color: 'text-purple-400'
    },
    {
      title: 'IT Infrastructure',
      description: 'Enterprise IT infrastructure setup and management',
      icon: Cpu,
      price: '$1,399/month',
      features: ['Server Management', 'Network Setup', 'Hardware Procurement', 'Infrastructure Monitoring'],
      color: 'text-cyan-400'
    },
    {
      title: 'Network Services',
      description: 'Network design, implementation, and management solutions',
      icon: Globe,
      price: '$1,099/month',
      features: ['Network Design', 'Wireless Solutions', 'VPN Setup', 'Network Security'],
      color: 'text-indigo-400'
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights and analytics for better decision making',
      icon: BarChart,
      price: '$1,499/month',
      features: ['Data Warehousing', 'Report Generation', 'Dashboard Creation', 'Data Visualization'],
      color: 'text-yellow-400'
    },
    {
      title: 'Compliance & Governance',
      description: 'Regulatory compliance and IT governance solutions',
      icon: CheckSquare,
      price: '$1,299/month',
      features: ['Compliance Auditing', 'Policy Development', 'Risk Assessment', 'Regulatory Reporting'],
      color: 'text-orange-400'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology advisory services',
      icon: Users,
      price: '$1,000/month',
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Digital Transformation'],
      color: 'text-pink-400'
    },
    {
      title: 'System Administration',
      description: 'System management, maintenance, and optimization services',
      icon: Settings,
      price: '$1,199/month',
      features: ['System Monitoring', 'Performance Tuning', 'User Management', 'System Updates'],
      color: 'text-teal-400'
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud migration and hybrid cloud solutions',
      icon: Cloud,
      price: '$1,500/month',
      features: ['Migration Planning', 'Data Transfer', 'Application Migration', 'Hybrid Cloud Setup'],
      color: 'text-violet-400'
    },
    {
      title: 'IT Support & Maintenance',
      description: '24/7 IT management and technical support services',
      icon: Headphones,
      price: '$1,299/month',
      features: ['24/7 Support', 'Remote Assistance', 'Issue Resolution', 'Preventive Maintenance'],
      color: 'text-emerald-400'
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
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