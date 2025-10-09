'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import PerformanceOptimizer from '../src/components/PerformanceOptimizer';
import SEOOptimizer from '../src/components/SEOOptimizer';
import AccessibilityEnhancer from '../src/components/AccessibilityEnhancer';
import Analytics from '../src/components/Analytics';
import SecurityEnhancer from '../src/components/SecurityEnhancer';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('../src/components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('../src/components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('../src/components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('../src/components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('../src/components/ContentNewsletterSignup'));

// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render
    setTimeout(() => {
      import('../src/components/ContentPromotionBanner');
      import('../src/components/ContentCarousel');
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

  // Enhanced Micro SAAS Services with real capabilities and market pricing
  const microSAASServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Advanced AI-powered project management with predictive analytics, resource optimization, and automated risk assessment',
      icon: '📊',
      price: '$199/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '50% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Project Management'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Comprehensive social media automation with AI content creation, optimal posting times, and engagement analytics',
      icon: '📱',
      price: '$149/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Hashtag optimization', 'Competitor analysis'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '60% better ROI'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence platform with real-time analytics, predictive insights, and automated reporting',
      icon: '📈',
      price: '$299/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Custom reports', 'Data visualization'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', '90% faster decisions'],
      link: '/ai-analytics',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Complete email marketing automation with AI content generation, segmentation, and performance optimization',
      icon: '📧',
      price: '$179/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Deliverability optimization'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', '35% higher CTR'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent 24/7 customer support with natural language processing, multi-language support, and seamless human handoff',
      icon: '🤖',
      price: '$249/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Integration APIs'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', '60% cost savings'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Customer Service'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with security vulnerability detection, performance optimization, and best practice recommendations',
      icon: '🔍',
      price: '$129/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Code quality metrics', 'Refactoring suggestions'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', '50% faster reviews'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development'
    },
    {
      title: 'AI Content Generator Pro',
      description: 'Advanced AI content creation platform for blogs, social media, marketing materials, and technical documentation',
      icon: '✍️',
      price: '$99/month',
      features: ['Multi-format content', 'SEO optimization', 'Brand voice training', 'Plagiarism detection', 'Content calendar', 'Performance tracking'],
      benefits: ['10x content output', '80% time savings', '40% better engagement', 'SEO-optimized content'],
      link: '/ai-content-generation',
      popular: false,
      category: 'Content Creation'
    },
    {
      title: 'AI SEO Optimizer',
      description: 'Comprehensive SEO analysis and optimization tool with keyword research, competitor analysis, and technical SEO audits',
      icon: '🎯',
      price: '$199/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis', 'Rank tracking', 'Link building suggestions'],
      benefits: ['300% organic traffic increase', '50% better rankings', '90% time savings', 'ROI tracking'],
      link: '/ai-seo-optimizer',
      popular: false,
      category: 'SEO'
    },
    {
      title: 'AI Invoice Generator',
      description: 'Automated invoicing system with AI-powered pricing suggestions, payment tracking, and financial analytics',
      icon: '💰',
      price: '$79/month',
      features: ['Automated invoicing', 'AI pricing suggestions', 'Payment tracking', 'Financial analytics', 'Tax calculations', 'Client management'],
      benefits: ['90% time savings', '30% faster payments', 'Reduced errors', 'Better cash flow'],
      link: '/ai-invoice-generator',
      popular: false,
      category: 'Finance'
    },
    {
      title: 'AI Lead Scoring Platform',
      description: 'Intelligent lead qualification and scoring system with predictive analytics and automated nurturing workflows',
      icon: '🎯',
      price: '$159/month',
      features: ['Lead scoring algorithms', 'Predictive analytics', 'Automated nurturing', 'CRM integration', 'Behavior tracking', 'Conversion optimization'],
      benefits: ['40% higher conversion', '60% better lead quality', '50% time savings', 'ROI tracking'],
      link: '/ai-lead-scoring',
      popular: false,
      category: 'Sales'
    },
    {
      title: 'AI Sales Forecasting',
      description: 'Advanced sales prediction and forecasting with machine learning algorithms and market trend analysis',
      icon: '📊',
      price: '$229/month',
      features: ['Sales predictions', 'Market analysis', 'Trend identification', 'Risk assessment', 'Scenario planning', 'Performance tracking'],
      benefits: ['85% forecast accuracy', '30% revenue increase', 'Better planning', 'Risk mitigation'],
      link: '/ai-sales-forecasting',
      popular: false,
      category: 'Sales'
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'Complete e-commerce optimization platform with product recommendations, pricing optimization, and customer insights',
      icon: '🛒',
      price: '$349/month',
      features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer insights', 'Conversion optimization', 'Analytics dashboard'],
      benefits: ['35% revenue increase', '50% better conversions', '25% inventory reduction', 'Customer satisfaction boost'],
      link: '/ai-ecommerce-optimizer',
      popular: false,
      category: 'E-commerce'
    },
    {
      title: 'AI Design Assistant',
      description: 'AI-powered design tool for creating logos, marketing materials, and visual content with brand consistency',
      icon: '🎨',
      price: '$119/month',
      features: ['Logo generation', 'Marketing materials', 'Brand consistency', 'Template library', 'Color palette suggestions', 'Export options'],
      benefits: ['80% design time savings', 'Professional quality', 'Brand consistency', 'Cost effective'],
      link: '/ai-design-assistant',
      popular: false,
      category: 'Design'
    },
    {
      title: 'AI Document Processor',
      description: 'Intelligent document processing with OCR, data extraction, classification, and workflow automation',
      icon: '📄',
      price: '$139/month',
      features: ['OCR processing', 'Data extraction', 'Document classification', 'Workflow automation', 'Search functionality', 'Version control'],
      benefits: ['90% time savings', '99% accuracy', 'Automated workflows', 'Better organization'],
      link: '/ai-document-processor',
      popular: false,
      category: 'Document Management'
    },
    {
      title: 'AI Security Monitor',
      description: 'Real-time security monitoring and threat detection with AI-powered analysis and automated response',
      icon: '🔒',
      price: '$199/month',
      features: ['Real-time monitoring', 'Threat detection', 'Automated response', 'Compliance tracking', 'Incident management', 'Security reports'],
      benefits: ['99.9% security uptime', 'Faster threat response', 'Compliance assurance', 'Risk reduction'],
      link: '/ai-security-monitor',
      popular: false,
      category: 'Security'
    },
    {
      title: 'AI Performance Tracker',
      description: 'Comprehensive performance monitoring and optimization for websites, applications, and business processes',
      icon: '⚡',
      price: '$149/month',
      features: ['Performance monitoring', 'Optimization suggestions', 'Real-time alerts', 'Historical analysis', 'Benchmarking', 'Custom metrics'],
      benefits: ['40% performance improvement', 'Proactive monitoring', 'Better user experience', 'Cost optimization'],
      link: '/ai-performance-tracker',
      popular: false,
      category: 'Performance'
    },
    {
      title: 'AI Voice Assistant',
      description: 'Custom voice assistants for customer service, internal operations, and hands-free productivity',
      icon: '🎤',
      price: '$179/month',
      features: ['Voice recognition', 'Natural language processing', 'Custom commands', 'Integration APIs', 'Multi-language support', 'Analytics'],
      benefits: ['Hands-free operation', 'Improved accessibility', '24/7 availability', 'Cost savings'],
      link: '/ai-voice-assistant',
      popular: false,
      category: 'Voice Technology'
    },
    {
      title: 'AI HR Assistant',
      description: 'Intelligent HR management with recruitment automation, employee analytics, and performance tracking',
      icon: '👥',
      price: '$199/month',
      features: ['Recruitment automation', 'Employee analytics', 'Performance tracking', 'Compliance monitoring', 'Training recommendations', 'Retention insights'],
      benefits: ['50% faster hiring', 'Better employee retention', 'Reduced HR costs', 'Data-driven decisions'],
      link: '/ai-hr-assistant',
      popular: false,
      category: 'Human Resources'
    },
    {
      title: 'AI Inventory Manager',
      description: 'Smart inventory management with demand forecasting, automated reordering, and optimization algorithms',
      icon: '📦',
      price: '$169/month',
      features: ['Demand forecasting', 'Automated reordering', 'Inventory optimization', 'Supplier management', 'Cost tracking', 'Analytics dashboard'],
      benefits: ['30% inventory reduction', '99% stock accuracy', 'Reduced waste', 'Better cash flow'],
      link: '/ai-inventory-manager',
      popular: false,
      category: 'Inventory Management'
    },
    {
      title: 'AI Customer Insights',
      description: 'Deep customer analytics and insights platform with behavioral analysis and personalized recommendations',
      icon: '👤',
      price: '$229/month',
      features: ['Behavioral analysis', 'Customer segmentation', 'Personalization engine', 'Churn prediction', 'Lifetime value analysis', 'Recommendation engine'],
      benefits: ['40% better retention', '60% higher LTV', 'Personalized experiences', 'Data-driven marketing'],
      link: '/ai-customer-insights',
      popular: false,
      category: 'Customer Analytics'
    },
    {
      title: 'AI A/B Testing Platform',
      description: 'Advanced A/B testing and experimentation platform with AI-powered test design and statistical analysis',
      icon: '🧪',
      price: '$159/month',
      features: ['Test design', 'Statistical analysis', 'Automated testing', 'Result interpretation', 'Recommendation engine', 'Performance tracking'],
      benefits: ['Faster test cycles', 'Better insights', 'Higher conversion rates', 'Data-driven optimization'],
      link: '/ai-ab-testing',
      popular: false,
      category: 'Testing'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced predictive analytics platform for forecasting trends, customer behavior, and business outcomes',
      icon: '🔮',
      price: '$299/month',
      features: ['Trend forecasting', 'Behavior prediction', 'Risk assessment', 'Scenario modeling', 'Machine learning models', 'Real-time insights'],
      benefits: ['Better decision making', 'Risk mitigation', 'Opportunity identification', 'Competitive advantage'],
      link: '/ai-predictive-analytics',
      popular: false,
      category: 'Analytics'
    }
  ];

  // Enhanced AI Services with real capabilities and market pricing
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, recommendation systems, and intelligent decision-making',
      icon: Brain,
      price: '$2,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
      color: 'text-purple-400',
      category: 'Machine Learning'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and conversational AI',
      icon: MessageSquare,
      price: '$1,800/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Voice Recognition'],
      color: 'text-blue-400',
      category: 'NLP'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, facial recognition, and visual intelligence',
      icon: Eye,
      price: '$2,200/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'OCR Processing', 'Quality Inspection'],
      color: 'text-green-400',
      category: 'Computer Vision'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities and workflow optimization',
      icon: Zap,
      price: '$1,600/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'Integration APIs', 'Monitoring Dashboard'],
      color: 'text-cyan-400',
      category: 'Automation'
    },
    {
      title: 'AI Consulting & Strategy',
      description: 'Strategic AI implementation planning, technology assessment, and digital transformation guidance',
      icon: Target,
      price: '$3,000/month',
      features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning', 'Change Management', 'Training Programs'],
      color: 'text-orange-400',
      category: 'Consulting'
    },
    {
      title: 'AI Data Analytics',
      description: 'Advanced data analytics with AI-powered insights, pattern recognition, and predictive modeling',
      icon: BarChart,
      price: '$2,200/month',
      features: ['Data Mining', 'Pattern Recognition', 'Predictive Modeling', 'Real-time Analytics', 'Custom Dashboards', 'Report Generation'],
      color: 'text-pink-400',
      category: 'Analytics'
    },
    {
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions with threat detection, anomaly detection, and automated response',
      icon: Shield,
      price: '$2,800/month',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Security Monitoring', 'Incident Analysis', 'Compliance Tracking'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Medical AI applications for diagnosis assistance, treatment recommendations, and patient monitoring',
      icon: Heart,
      price: '$3,500/month',
      features: ['Diagnosis Assistance', 'Treatment Recommendations', 'Patient Monitoring', 'Medical Imaging', 'Drug Discovery', 'Clinical Trials'],
      color: 'text-emerald-400',
      category: 'Healthcare'
    },
    {
      title: 'AI Financial Services',
      description: 'Financial AI applications for fraud detection, risk assessment, and algorithmic trading',
      icon: CreditCard,
      price: '$2,800/month',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Market Analysis', 'Regulatory Compliance'],
      color: 'text-yellow-400',
      category: 'Fintech'
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'Supply chain intelligence with demand forecasting, route optimization, and inventory management',
      icon: Truck,
      price: '$2,200/month',
      features: ['Demand Forecasting', 'Route Optimization', 'Inventory Management', 'Supplier Analysis', 'Risk Assessment', 'Cost Optimization'],
      color: 'text-indigo-400',
      category: 'Supply Chain'
    }
  ];

  // Enhanced IT Services with comprehensive offerings
  const itServices = [
    {
      title: 'Cloud Services & Migration',
      description: 'Complete cloud migration, setup, and optimization services across AWS, Azure, and Google Cloud',
      icon: Cloud,
      price: '$1,800/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Disaster Recovery', 'Monitoring Setup'],
      color: 'text-blue-400',
      category: 'Cloud Computing'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions with threat detection, vulnerability assessment, and incident response',
      icon: Shield,
      price: '$2,200/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance Management', 'Security Training'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring',
      icon: Settings,
      price: '$1,500/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Performance Optimization'],
      color: 'text-green-400',
      category: 'DevOps'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and backup solutions',
      icon: Database,
      price: '$1,200/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services', 'Monitoring & Alerts'],
      color: 'text-purple-400',
      category: 'Database'
    },
    {
      title: 'Network Solutions',
      description: 'Network design, implementation, and monitoring with security and performance optimization',
      icon: Globe,
      price: '$1,400/month',
      features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting', 'Security Hardening', 'Performance Optimization'],
      color: 'text-cyan-400',
      category: 'Networking'
    },
    {
      title: 'IT Infrastructure',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee and 24/7 monitoring',
      icon: Cpu,
      price: '$1,600/month',
      features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions', 'Monitoring', 'Maintenance'],
      color: 'text-orange-400',
      category: 'Infrastructure'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT planning, technology assessment, and digital transformation consulting',
      icon: Target,
      price: '$2,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Vendor Management', 'Budget Planning', 'Implementation Support'],
      color: 'text-pink-400',
      category: 'Consulting'
    },
    {
      title: 'IT Support & Maintenance',
      description: '24/7 IT support and maintenance with proactive monitoring and rapid response',
      icon: Users,
      price: '$1,300/month',
      features: ['24/7 Support', 'Proactive Monitoring', 'Rapid Response', 'Remote Assistance', 'Hardware Maintenance', 'Software Updates'],
      color: 'text-indigo-400',
      category: 'Support'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs and certification preparation for your team',
      icon: GraduationCap,
      price: '$800/month',
      features: ['Technical Training', 'Certification Prep', 'Hands-on Labs', 'Progress Tracking', 'Custom Curriculum', 'Expert Instructors'],
      color: 'text-yellow-400',
      category: 'Training'
    },
    {
      title: 'IT Disaster Recovery',
      description: 'Comprehensive disaster recovery planning and implementation with testing and validation',
      icon: Lock,
      price: '$1,500/month',
      features: ['Disaster Recovery Planning', 'Backup Strategies', 'Testing & Validation', 'Recovery Procedures', 'Documentation', 'Regular Updates'],
      color: 'text-emerald-400',
      category: 'Disaster Recovery'
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
              Powerful, affordable AI-powered tools designed for modern businesses. Choose from 25+ specialized solutions.
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
              Advanced artificial intelligence solutions for enterprise applications. Custom AI development and implementation.
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
              Comprehensive IT solutions for modern enterprise infrastructure. 24/7 support and monitoring.
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