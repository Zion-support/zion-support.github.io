'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));

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
      (window as { gtag: (command: string, action: string, params: Record<string, string>) => void }).gtag('event', 'phone_click', {
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
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered pricing optimization and payment tracking',
      icon: '💰',
      price: '$49/month',
      features: ['Auto-invoice generation', 'Smart pricing', 'Payment tracking', 'Tax calculations'],
      benefits: ['90% time saved', '30% faster payments', 'Zero errors'],
      link: '/ai-invoice-generator',
      popular: true
    },
    {
      title: 'AI Lead Scoring',
      description: 'Intelligent lead qualification and scoring with predictive analytics',
      icon: '🎯',
      price: '$79/month',
      features: ['Predictive scoring', 'Behavioral analysis', 'CRM integration', 'Real-time updates'],
      benefits: ['50% higher conversion', '35% more qualified leads', '60% time saved'],
      link: '/ai-lead-scoring',
      popular: true
    },
    {
      title: 'AI Sales Forecasting',
      description: 'Advanced sales predictions with machine learning and trend analysis',
      icon: '📊',
      price: '$129/month',
      features: ['ML predictions', 'Trend analysis', 'Scenario planning', 'ROI forecasting'],
      benefits: ['85% accuracy', '40% better planning', '25% revenue increase'],
      link: '/ai-sales-forecasting',
      popular: true
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'Complete e-commerce optimization with AI-powered recommendations and pricing',
      icon: '🛒',
      price: '$199/month',
      features: ['Product recommendations', 'Dynamic pricing', 'Inventory optimization', 'Customer insights'],
      benefits: ['35% sales increase', '20% higher AOV', '50% inventory efficiency'],
      link: '/ai-ecommerce-optimizer',
      popular: true
    },
    {
      title: 'AI Design Assistant',
      description: 'AI-powered design tool for logos, graphics, and marketing materials',
      icon: '🎨',
      price: '$69/month',
      features: ['Logo generation', 'Graphic design', 'Brand consistency', 'Template library'],
      benefits: ['80% design time saved', 'Professional quality', 'Unlimited revisions'],
      link: '/ai-design-assistant',
      popular: false
    },
    {
      title: 'AI Document Processor',
      description: 'Intelligent document processing with OCR and data extraction',
      icon: '📄',
      price: '$89/month',
      features: ['OCR processing', 'Data extraction', 'Document classification', 'Workflow automation'],
      benefits: ['95% accuracy', '90% time saved', 'Zero manual entry'],
      link: '/ai-document-processor',
      popular: true
    },
    {
      title: 'AI Security Monitor',
      description: 'Real-time security monitoring with AI-powered threat detection',
      icon: '🔒',
      price: '$149/month',
      features: ['Threat detection', 'Real-time alerts', 'Vulnerability scanning', 'Compliance monitoring'],
      benefits: ['99.9% uptime', 'Zero breaches', '24/7 monitoring'],
      link: '/ai-security-monitor',
      popular: true
    },
    {
      title: 'AI Performance Tracker',
      description: 'Comprehensive performance tracking with AI insights and recommendations',
      icon: '⚡',
      price: '$99/month',
      features: ['Performance metrics', 'AI insights', 'Optimization tips', 'Real-time monitoring'],
      benefits: ['40% performance boost', 'Proactive optimization', 'Detailed analytics'],
      link: '/ai-performance-tracker',
      popular: false
    },
    {
      title: 'AI Voice Assistant',
      description: 'Custom voice assistants for business operations and customer service',
      icon: '🎤',
      price: '$179/month',
      features: ['Voice commands', 'Natural language', 'Multi-language', 'Custom training'],
      benefits: ['Hands-free operation', '24/7 availability', 'Multilingual support'],
      link: '/ai-voice-assistant',
      popular: true
    },
    {
      title: 'AI HR Assistant',
      description: 'Intelligent HR management with recruitment and employee analytics',
      icon: '👥',
      price: '$119/month',
      features: ['Resume screening', 'Employee analytics', 'Performance tracking', 'Compliance monitoring'],
      benefits: ['60% faster hiring', 'Better candidate matching', 'Reduced bias'],
      link: '/ai-hr-assistant',
      popular: true
    },
    {
      title: 'AI Inventory Manager',
      description: 'Smart inventory management with predictive analytics and optimization',
      icon: '📦',
      price: '$89/month',
      features: ['Demand forecasting', 'Stock optimization', 'Reorder alerts', 'Cost analysis'],
      benefits: ['30% inventory reduction', 'Zero stockouts', '20% cost savings'],
      link: '/ai-inventory-manager',
      popular: true
    },
    {
      title: 'AI Customer Insights',
      description: 'Deep customer insights with AI-powered analytics and segmentation',
      icon: '👤',
      price: '$99/month',
      features: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Personalization'],
      benefits: ['25% higher retention', '40% better targeting', 'Personalized experiences'],
      link: '/ai-customer-insights',
      popular: true
    },
    {
      title: 'AI A/B Testing Platform',
      description: 'Advanced A/B testing with AI-powered optimization and insights',
      icon: '🧪',
      price: '$79/month',
      features: ['Automated testing', 'Statistical analysis', 'AI optimization', 'Real-time results'],
      benefits: ['50% faster testing', 'Higher conversion rates', 'Data-driven decisions'],
      link: '/ai-ab-testing',
      popular: false
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Future outcome predictions with machine learning and trend analysis',
      icon: '🔮',
      price: '$159/month',
      features: ['Future predictions', 'Trend analysis', 'Risk assessment', 'Scenario modeling'],
      benefits: ['90% prediction accuracy', 'Proactive planning', 'Risk mitigation'],
      link: '/ai-predictive-analytics',
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
      icon: Heart,
      price: '$2,500/month',
      features: ['Medical Imaging AI', 'Diagnostic Assistance', 'Treatment Planning', 'Patient Monitoring'],
      color: 'text-red-400'
    },
    {
      title: 'AI Financial Services',
      description: 'Fintech AI solutions for fraud detection, risk assessment, and trading',
      icon: CreditCard,
      price: '$2,200/month',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'],
      color: 'text-yellow-400'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Advanced AI security solutions for threat detection and prevention',
      icon: Shield,
      price: '$1,800/month',
      features: ['Threat Detection', 'Anomaly Detection', 'Security Analytics', 'Incident Response'],
      color: 'text-orange-400'
    },
    {
      title: 'AI Content Generation',
      description: 'AI-powered content creation for marketing, blogs, and social media',
      icon: FileText,
      price: '$1,100/month',
      features: ['Content Writing', 'SEO Optimization', 'Social Media Posts', 'Video Scripts'],
      color: 'text-pink-400'
    },
    {
      title: 'AI Data Analytics',
      description: 'Advanced data analysis with AI insights and predictive modeling',
      icon: BarChart,
      price: '$1,600/month',
      features: ['Data Mining', 'Predictive Modeling', 'Business Intelligence', 'Real-time Analytics'],
      color: 'text-indigo-400'
    },
    {
      title: 'AI Voice & Speech',
      description: 'Voice recognition, synthesis, and conversational AI solutions',
      icon: Music,
      price: '$1,300/month',
      features: ['Speech Recognition', 'Voice Synthesis', 'Conversational AI', 'Multi-language Support'],
      color: 'text-teal-400'
    },
    {
      title: 'AI Robotics',
      description: 'Intelligent robotics solutions for manufacturing and automation',
      icon: Settings,
      price: '$3,000/month',
      features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems'],
      color: 'text-gray-400'
    },
    {
      title: 'AI Edge Computing',
      description: 'AI solutions optimized for edge devices and IoT applications',
      icon: Smartphone,
      price: '$1,700/month',
      features: ['Edge AI Models', 'IoT Integration', 'Real-time Processing', 'Offline Capabilities'],
      color: 'text-emerald-400'
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
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee',
      icon: Cpu,
      price: '$999/month',
      features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions'],
      color: 'text-cyan-400'
    },
    {
      title: 'Network Solutions',
      description: 'Network design, implementation, and monitoring solutions',
      icon: Globe,
      price: '$1,099/month',
      features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting'],
      color: 'text-orange-400'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology roadmap development',
      icon: Target,
      price: '$1,400/month',
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Management', 'Digital Transformation'],
      color: 'text-indigo-400'
    },
    {
      title: 'IT Support & Maintenance',
      description: '24/7 IT support and proactive maintenance services',
      icon: Users,
      price: '$1,299/month',
      features: ['24/7 Support', 'Proactive Monitoring', 'Remote Management', 'Help Desk Services'],
      color: 'text-pink-400'
    },
    {
      title: 'IT Training & Certification',
      description: 'Staff development and technology training programs',
      icon: GraduationCap,
      price: '$799/month',
      features: ['Technology Training', 'Certification Programs', 'Skill Assessment', 'Custom Curriculum'],
      color: 'text-yellow-400'
    },
    {
      title: 'IT Disaster Recovery',
      description: 'Comprehensive disaster recovery and business continuity solutions',
      icon: Lock,
      price: '$1,499/month',
      features: ['Backup Strategies', 'Recovery Planning', 'Testing & Validation', 'Business Continuity'],
      color: 'text-red-400'
    },
    {
      title: 'IT Automation',
      description: 'IT process automation and workflow optimization',
      icon: Zap,
      price: '$1,199/month',
      features: ['Process Automation', 'Workflow Optimization', 'Script Development', 'Integration Services'],
      color: 'text-teal-400'
    },
    {
      title: 'Global IT Support',
      description: 'Worldwide IT support with multi-language capabilities',
      icon: Globe,
      price: '$1,599/month',
      features: ['Multi-language Support', 'Global Coverage', 'Time Zone Coverage', 'Local Expertise'],
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

          {/* Specialized Solutions Section */}
          <section className="mb-16" aria-labelledby="specialized-heading">
            <h2 id="specialized-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Specialized Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Cutting-edge technologies for next-generation business solutions
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <article className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Quantum Computing</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                  Next-generation quantum algorithms and quantum security implementations
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Quantum Algorithm Development
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Quantum Security
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Optimization Problems
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Research & Development
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold mb-2 neon-text text-purple-400">Custom Pricing</div>
                  <a 
                    href="/quantum-computing" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-purple-400 border border-purple-400 hover:bg-purple-400 hover:text-slate-900"
                  >
                    Learn More
                  </a>
                </div>
              </article>

              <article className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Autonomous Systems</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                  Self-managing and self-optimizing systems for enterprise operations
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Self-Healing Systems
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Predictive Maintenance
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Resource Optimization
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Performance Monitoring
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold mb-2 neon-text text-cyan-400">Custom Pricing</div>
                  <a 
                    href="/autonomous-systems" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                  >
                    Learn More
                  </a>
                </div>
              </article>

              <article className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Blockchain & Web3</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                  Decentralized solutions, smart contracts, and Web3 applications
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Smart Contract Development
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      DApp Creation
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Token Economics
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      DeFi Solutions
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold mb-2 neon-text text-green-400">$1,999/month</div>
                  <a 
                    href="/blockchain-web3" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-green-400 border border-green-400 hover:bg-green-400 hover:text-slate-900"
                  >
                    Learn More
                  </a>
                </div>
              </article>

              <article className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">IoT & Edge Computing</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                  Connected devices and edge computing solutions
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-orange-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Device Management
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Edge Analytics
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Real-time Processing
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Security Implementation
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold mb-2 neon-text text-orange-400">$1,499/month</div>
                  <a 
                    href="/iot-edge-computing" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-slate-900"
                  >
                    Learn More
                  </a>
                </div>
              </article>

              <article className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Business Intelligence</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                  Data-driven insights and predictive analytics for decision-making
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-indigo-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Data Warehousing
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      ETL Processes
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Advanced Analytics
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Executive Dashboards
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold mb-2 neon-text text-indigo-400">$1,799/month</div>
                  <a 
                    href="/business-intelligence" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-indigo-400 border border-indigo-400 hover:bg-indigo-400 hover:text-slate-900"
                  >
                    Learn More
                  </a>
                </div>
              </article>

              <article className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-slate-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Robotics Solutions</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                  Intelligent robotic solutions for manufacturing and service industries
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Robotic Process Automation
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Computer Vision Integration
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Human-Robot Collaboration
                    </li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      Maintenance Systems
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold mb-2 neon-text text-gray-400">Custom Pricing</div>
                  <a 
                    href="/robotics" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-gray-400 border border-gray-400 hover:bg-gray-400 hover:text-slate-900"
                  >
                    Learn More
                  </a>
                </div>
              </article>
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