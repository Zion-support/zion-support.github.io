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

  const microSAASServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment',
      icon: '📊',
      price: '$99/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Budget optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation, smart scheduling, and audience analysis',
      icon: '📱',
      price: '$79/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Hashtag optimization', 'Competitor analysis'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '60% better ROI'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling',
      icon: '📈',
      price: '$149/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reports'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', '50% faster decisions'],
      link: '/ai-analytics-dashboard',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Transform your email marketing with AI-powered content generation, automation, and personalization',
      icon: '📧',
      price: '$99/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Personalization'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', '35% higher CTR'],
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
      popular: false,
      category: 'Development'
    },
    {
      title: 'AI Content Generator',
      description: 'Create high-quality content with AI-powered writing, editing, and optimization tools',
      icon: '✍️',
      price: '$49/month',
      features: ['AI writing assistant', 'Content optimization', 'SEO optimization', 'Plagiarism detection', 'Tone adjustment', 'Multi-language support'],
      benefits: ['10x faster content creation', '40% better SEO scores', '80% time saved', 'Higher engagement'],
      link: '/ai-content-generation',
      popular: true,
      category: 'Content'
    },
    {
      title: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword optimization, and content suggestions for better rankings',
      icon: '🎯',
      price: '$69/month',
      features: ['Keyword research', 'On-page optimization', 'Content suggestions', 'Ranking tracking', 'Competitor analysis', 'Technical SEO audit'],
      benefits: ['50% better rankings', '40% more organic traffic', '60% time saved', 'Higher conversion rates'],
      link: '/ai-seo-optimizer',
      popular: true,
      category: 'SEO'
    },
    {
      title: 'AI Invoice Generator',
      description: 'Automated invoicing with AI-powered templates, payment tracking, and financial insights',
      icon: '💰',
      price: '$39/month',
      features: ['AI-generated invoices', 'Payment tracking', 'Financial insights', 'Automated reminders', 'Multi-currency support', 'Tax calculations'],
      benefits: ['90% faster invoicing', '50% faster payments', 'Reduced errors', 'Better cash flow'],
      link: '/ai-invoice-generator',
      popular: false,
      category: 'Finance'
    },
    {
      title: 'AI Lead Scoring',
      description: 'Intelligent lead qualification with AI-powered scoring and conversion prediction',
      icon: '🎯',
      price: '$79/month',
      features: ['AI lead scoring', 'Conversion prediction', 'Behavioral analysis', 'CRM integration', 'Automated follow-ups', 'ROI tracking'],
      benefits: ['60% higher conversion', '40% more qualified leads', '35% shorter sales cycles', 'Better targeting'],
      link: '/ai-lead-scoring',
      popular: true,
      category: 'Sales'
    },
    {
      title: 'AI Design Studio',
      description: 'AI-powered graphic design, logo creation, and brand identity tools',
      icon: '🎨',
      price: '$59/month',
      features: ['AI logo generation', 'Graphic design tools', 'Brand identity creation', 'Template library', 'Color palette generator', 'Font pairing'],
      benefits: ['10x faster design', 'Professional quality', 'Consistent branding', 'Cost effective'],
      link: '/ai-design-studio',
      popular: true,
      category: 'Design'
    },
    {
      title: 'AI Video Creator',
      description: 'Automated video production with AI-powered editing, effects, and optimization',
      icon: '🎬',
      price: '$129/month',
      features: ['AI video editing', 'Auto-generated captions', 'Voice synthesis', 'Template library', 'Social media optimization', 'Analytics'],
      benefits: ['80% faster production', 'Professional quality', 'Higher engagement', 'Cost effective'],
      link: '/ai-video-creator',
      popular: true,
      category: 'Video'
    },
    {
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security analysis and breach monitoring',
      icon: '🔐',
      price: '$29/month',
      features: ['Secure password storage', 'AI security analysis', 'Breach monitoring', 'Auto-fill', 'Multi-device sync', 'Team sharing'],
      benefits: ['Enhanced security', 'Convenient access', 'Breach protection', 'Team collaboration'],
      link: '/ai-password-manager',
      popular: false,
      category: 'Security'
    },
    {
      title: 'AI Expense Tracker',
      description: 'Smart expense management with AI-powered categorization and financial insights',
      icon: '💳',
      price: '$39/month',
      features: ['AI categorization', 'Receipt scanning', 'Expense reports', 'Budget tracking', 'Tax preparation', 'Financial insights'],
      benefits: ['90% time saved', 'Better budgeting', 'Tax ready', 'Financial clarity'],
      link: '/ai-expense-tracker',
      popular: true,
      category: 'Finance'
    },
    {
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with AI-powered optimization and conflict resolution',
      icon: '📅',
      price: '$49/month',
      features: ['AI scheduling', 'Conflict resolution', 'Time zone handling', 'Calendar integration', 'Meeting optimization', 'Availability sync'],
      benefits: ['50% time saved', 'Fewer conflicts', 'Better meetings', 'Improved productivity'],
      link: '/ai-scheduler',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI HR Assistant',
      description: 'Intelligent HR management with AI-powered recruitment, onboarding, and employee insights',
      icon: '👥',
      price: '$199/month',
      features: ['AI recruitment', 'Resume screening', 'Onboarding automation', 'Employee analytics', 'Performance tracking', 'Compliance monitoring'],
      benefits: ['60% faster hiring', 'Better candidate matching', 'Reduced bias', 'Improved retention'],
      link: '/ai-hr-assistant',
      popular: true,
      category: 'HR'
    },
    {
      title: 'AI Inventory Manager',
      description: 'Smart inventory management with AI-powered demand forecasting and optimization',
      icon: '📦',
      price: '$149/month',
      features: ['Demand forecasting', 'Inventory optimization', 'Reorder automation', 'Supplier management', 'Analytics dashboard', 'Cost tracking'],
      benefits: ['30% cost reduction', '50% fewer stockouts', 'Better cash flow', 'Optimized inventory'],
      link: '/ai-inventory-manager',
      popular: true,
      category: 'Operations'
    },
    {
      title: 'AI Voice Assistant',
      description: 'Custom voice assistants with AI-powered natural language processing and task automation',
      icon: '🎤',
      price: '$89/month',
      features: ['Voice recognition', 'Natural language processing', 'Task automation', 'Multi-language support', 'Custom commands', 'Integration APIs'],
      benefits: ['Hands-free operation', 'Improved accessibility', 'Faster task completion', 'Better user experience'],
      link: '/ai-voice-assistant',
      popular: false,
      category: 'Voice'
    },
    {
      title: 'AI A/B Testing Platform',
      description: 'Intelligent A/B testing with AI-powered experiment design and statistical analysis',
      icon: '🧪',
      price: '$99/month',
      features: ['AI experiment design', 'Statistical analysis', 'Automated testing', 'Conversion optimization', 'Real-time results', 'Insights dashboard'],
      benefits: ['40% better conversions', 'Faster testing cycles', 'Data-driven decisions', 'Higher ROI'],
      link: '/ai-ab-testing',
      popular: true,
      category: 'Testing'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced predictive modeling with AI-powered forecasting and trend analysis',
      icon: '🔮',
      price: '$199/month',
      features: ['Predictive modeling', 'Trend analysis', 'Forecasting', 'Risk assessment', 'Scenario planning', 'Custom models'],
      benefits: ['Better predictions', 'Reduced risks', 'Strategic planning', 'Competitive advantage'],
      link: '/ai-predictive-analytics',
      popular: true,
      category: 'Analytics'
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
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'RPA Integration', 'Smart Routing'],
      benefits: ['80% process automation', '50% cost reduction', '24/7 operation', 'Error reduction'],
      color: 'text-cyan-400',
      category: 'Automation'
    },
    {
      title: 'AI Data Analytics',
      description: 'Advanced data analytics with AI-powered insights, pattern recognition, and predictive modeling',
      icon: BarChart,
      price: '$1,600/month',
      features: ['AI Insights', 'Pattern Recognition', 'Predictive Modeling', 'Real-time Analytics', 'Data Visualization', 'Anomaly Detection'],
      benefits: ['60% faster insights', 'Better decision making', 'Proactive alerts', 'Competitive advantage'],
      color: 'text-indigo-400',
      category: 'Analytics'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Intelligent security solutions with threat detection, prevention, and automated response',
      icon: Shield,
      price: '$2,000/month',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Security Monitoring', 'Fraud Prevention', 'Compliance'],
      benefits: ['99.9% threat detection', 'Real-time protection', 'Reduced false positives', 'Compliance ready'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Medical AI solutions for diagnosis, treatment planning, and patient care optimization',
      icon: Stethoscope,
      price: '$2,500/month',
      features: ['Medical Imaging', 'Diagnosis Support', 'Treatment Planning', 'Drug Discovery', 'Patient Monitoring', 'Clinical Trials'],
      benefits: ['Improved accuracy', 'Faster diagnosis', 'Better outcomes', 'Cost effective'],
      color: 'text-emerald-400',
      category: 'Healthcare'
    },
    {
      title: 'AI Financial Services',
      description: 'Financial AI solutions for trading, risk management, fraud detection, and investment optimization',
      icon: CreditCard,
      price: '$2,200/month',
      features: ['Algorithmic Trading', 'Risk Assessment', 'Fraud Detection', 'Credit Scoring', 'Portfolio Optimization', 'Regulatory Compliance'],
      benefits: ['Higher returns', 'Risk reduction', 'Real-time monitoring', 'Regulatory compliance'],
      color: 'text-yellow-400',
      category: 'Fintech'
    },
    {
      title: 'AI E-commerce Solutions',
      description: 'E-commerce AI for personalization, recommendation engines, and customer experience optimization',
      icon: ShoppingCart,
      price: '$1,800/month',
      features: ['Personalization', 'Recommendation Engine', 'Price Optimization', 'Inventory Management', 'Customer Analytics', 'Chat Support'],
      benefits: ['30% higher conversion', '40% more revenue', 'Better customer experience', 'Reduced cart abandonment'],
      color: 'text-pink-400',
      category: 'E-commerce'
    },
    {
      title: 'AI Supply Chain',
      description: 'Supply chain optimization with AI-powered demand forecasting, logistics, and inventory management',
      icon: Factory,
      price: '$1,900/month',
      features: ['Demand Forecasting', 'Logistics Optimization', 'Inventory Management', 'Supplier Analytics', 'Risk Assessment', 'Cost Optimization'],
      benefits: ['25% cost reduction', '50% better forecasting', 'Reduced waste', 'Improved efficiency'],
      color: 'text-orange-400',
      category: 'Supply Chain'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing automation with AI-powered campaigns, personalization, and optimization',
      icon: Target,
      price: '$1,300/month',
      features: ['Campaign Automation', 'Personalization', 'A/B Testing', 'Customer Segmentation', 'Content Generation', 'Performance Analytics'],
      benefits: ['50% higher engagement', '40% better ROI', 'Automated optimization', 'Scalable campaigns'],
      color: 'text-violet-400',
      category: 'Marketing'
    },
    {
      title: 'AI Voice & Speech',
      description: 'Voice AI solutions for speech recognition, synthesis, and conversational interfaces',
      icon: Bot,
      price: '$1,100/month',
      features: ['Speech Recognition', 'Voice Synthesis', 'Conversational AI', 'Voice Analytics', 'Multi-language', 'Real-time Processing'],
      benefits: ['95% accuracy', 'Natural conversations', 'Multi-language support', 'Real-time response'],
      color: 'text-teal-400',
      category: 'Voice AI'
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
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'AI Optimization', 'Monitoring'],
      benefits: ['60% better performance', 'Zero data loss', 'Automated optimization', 'Cost effective'],
      color: 'text-purple-400',
      category: 'Database'
    },
    {
      title: 'Network Infrastructure',
      description: 'Enterprise network design, implementation, and optimization with security focus',
      icon: Globe,
      price: '$1,399/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Monitoring', 'VPN Setup', 'Load Balancing'],
      benefits: ['99.9% uptime', 'Enhanced security', 'Better performance', 'Scalable design'],
      color: 'text-cyan-400',
      category: 'Networking'
    },
    {
      title: 'IT Support & Maintenance',
      description: '24/7 IT support, maintenance, and management services for business continuity',
      icon: Wrench,
      price: '$999/month',
      features: ['24/7 Support', 'Proactive Monitoring', 'System Maintenance', 'User Training', 'Help Desk', 'Remote Management'],
      benefits: ['Minimal downtime', 'Faster resolution', 'Proactive maintenance', 'User satisfaction'],
      color: 'text-orange-400',
      category: 'Support'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development with modern technologies',
      icon: Smartphone,
      price: '$1,799/month',
      features: ['Native Development', 'Cross-platform', 'UI/UX Design', 'API Integration', 'App Store Deployment', 'Maintenance'],
      benefits: ['High performance', 'Cross-platform compatibility', 'Modern design', 'Scalable solutions'],
      color: 'text-pink-400',
      category: 'Mobile'
    },
    {
      title: 'System Integration',
      description: 'API development, system integration, and data synchronization services',
      icon: Code,
      price: '$1,499/month',
      features: ['API Development', 'System Integration', 'Data Synchronization', 'Legacy Modernization', 'Third-party Integration', 'Documentation'],
      benefits: ['Seamless integration', 'Data consistency', 'Improved efficiency', 'Future-proof solutions'],
      color: 'text-indigo-400',
      category: 'Integration'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT planning, architecture design, and technology roadmap development',
      icon: Briefcase,
      price: '$1,999/month',
      features: ['Strategic Planning', 'Architecture Design', 'Technology Roadmap', 'Vendor Selection', 'Cost Analysis', 'Implementation'],
      benefits: ['Strategic alignment', 'Cost optimization', 'Technology leadership', 'Competitive advantage'],
      color: 'text-teal-400',
      category: 'Consulting'
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup, disaster recovery, and business continuity solutions',
      icon: Lock,
      price: '$799/month',
      features: ['Automated Backup', 'Disaster Recovery', 'Business Continuity', 'Data Encryption', 'Testing', 'Documentation'],
      benefits: ['Zero data loss', 'Fast recovery', 'Business continuity', 'Compliance ready'],
      color: 'text-yellow-400',
      category: 'Backup'
    },
    {
      title: 'Performance Optimization',
      description: 'System performance tuning, optimization, and monitoring for maximum efficiency',
      icon: Activity,
      price: '$1,099/month',
      features: ['Performance Analysis', 'System Tuning', 'Monitoring Setup', 'Capacity Planning', 'Optimization', 'Reporting'],
      benefits: ['Better performance', 'Cost optimization', 'Proactive monitoring', 'Scalable solutions'],
      color: 'text-emerald-400',
      category: 'Performance'
    },
    {
      title: 'Compliance & Governance',
      description: 'IT compliance, governance, and regulatory adherence services',
      icon: CheckSquare,
      price: '$1,299/month',
      features: ['Compliance Assessment', 'Policy Development', 'Audit Support', 'Training', 'Documentation', 'Monitoring'],
      benefits: ['Regulatory compliance', 'Risk reduction', 'Audit readiness', 'Best practices'],
      color: 'text-violet-400',
      category: 'Compliance'
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
              Powerful, affordable AI-powered tools designed for modern businesses. Choose from 20+ specialized solutions.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['All', 'Productivity', 'Marketing', 'Analytics', 'Content', 'Sales', 'Design', 'Finance', 'HR', 'Operations'].map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {microSAASServices.map((service, index) => (
                <article key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
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
                    <div className="text-xl font-bold text-cyan-400 mb-3 neon-text">{service.price}</div>
                    <a 
                      href={service.link} 
                      className="cyber-button px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 inline-block"
                    >
                      Learn More
                    </a>
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
          <section className="mb-16" aria-labelledby="ai-services-heading">
            <h2 id="ai-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              AI Services & Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Advanced artificial intelligence solutions for enterprise applications. Transform your business with cutting-edge AI technology.
            </p>
            
            {/* AI Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {aiServices.map((service, index) => (
                <article key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-3 py-1 rounded-full text-xs font-medium text-purple-400 mb-2">
                      {service.category}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 neon-text">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
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
                    <div className={`text-lg font-bold mb-3 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/ai-services" 
                      className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </a>
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
          <section className="mb-16" aria-labelledby="it-services-heading">
            <h2 id="it-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              IT Services & Infrastructure
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive IT solutions for modern enterprise infrastructure. Scale, secure, and optimize your technology stack.
            </p>
            
            {/* IT Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {itServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-3 py-1 rounded-full text-xs font-medium text-cyan-400 mb-2">
                      {service.category}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 neon-text">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
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
                    <div className={`text-lg font-bold mb-3 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/it-services" 
                      className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </a>
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
          <section className="mb-16" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Ready to transform your business? Contact us for a free consultation and discover how our solutions can drive your success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
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