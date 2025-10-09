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
      description: 'Intelligent project planning with AI-powered resource optimization and timeline prediction',
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
      description: 'Automate your social media with AI-powered content creation and smart scheduling',
      icon: '📱',
      price: '$79/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Hashtag optimization', 'Competitor analysis'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '50% better ROI'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      icon: '📈',
      price: '$149/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reports'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', 'Real-time decision making'],
      link: '/ai-analytics-dashboard',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Transform your email marketing with AI-powered content generation and automation',
      icon: '📧',
      price: '$99/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Deliverability optimization'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', '35% higher click rates'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot',
      icon: '🤖',
      price: '$149/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Integration APIs'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', '24/7 availability'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Customer Service'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection and optimization',
      icon: '🔍',
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Code quality metrics', 'Best practices suggestions'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', 'Faster development cycles'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development'
    },
    {
      title: 'AI Content Generator',
      description: 'Create high-quality content with AI-powered writing assistance for blogs, social media, and marketing',
      icon: '✍️',
      price: '$69/month',
      features: ['Blog post generation', 'Social media content', 'Email templates', 'SEO optimization', 'Tone adjustment', 'Plagiarism check'],
      benefits: ['10x faster content creation', '50% better engagement', 'SEO-optimized content', 'Consistent brand voice'],
      link: '/ai-content-generation',
      popular: true,
      category: 'Content'
    },
    {
      title: 'AI SEO Optimizer',
      description: 'Boost your search rankings with AI-powered SEO analysis and optimization recommendations',
      icon: '🎯',
      price: '$89/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO audit', 'Competitor analysis', 'Rank tracking', 'Link building suggestions'],
      benefits: ['200% organic traffic increase', 'Top 3 rankings', 'Comprehensive SEO strategy', 'Monthly reporting'],
      link: '/ai-seo-optimizer',
      popular: true,
      category: 'SEO'
    },
    {
      title: 'AI Invoice Generator',
      description: 'Automate invoicing with AI-powered invoice creation, tracking, and payment management',
      icon: '💰',
      price: '$49/month',
      features: ['Auto invoice generation', 'Payment tracking', 'Recurring billing', 'Tax calculations', 'Client management', 'Payment reminders'],
      benefits: ['90% time saved on invoicing', 'Faster payments', 'Reduced errors', 'Professional invoices'],
      link: '/ai-invoice-generator',
      popular: false,
      category: 'Finance'
    },
    {
      title: 'AI Lead Scoring',
      description: 'Identify high-value prospects with AI-powered lead qualification and scoring system',
      icon: '🎯',
      price: '$79/month',
      features: ['Lead scoring algorithms', 'Behavioral analysis', 'Predictive modeling', 'CRM integration', 'Lead nurturing', 'Conversion tracking'],
      benefits: ['300% better lead quality', '50% higher conversion rates', 'Automated lead prioritization', 'ROI optimization'],
      link: '/ai-lead-scoring',
      popular: true,
      category: 'Sales'
    },
    {
      title: 'AI Sales Forecasting',
      description: 'Predict sales outcomes with AI-powered forecasting and revenue prediction models',
      icon: '📊',
      price: '$129/month',
      features: ['Revenue forecasting', 'Sales pipeline analysis', 'Trend identification', 'Risk assessment', 'Goal tracking', 'Performance metrics'],
      benefits: ['95% forecast accuracy', 'Better resource planning', 'Risk mitigation', 'Data-driven decisions'],
      link: '/ai-sales-forecasting',
      popular: false,
      category: 'Sales'
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'Maximize your online store performance with AI-powered e-commerce optimization tools',
      icon: '🛒',
      price: '$199/month',
      features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer insights', 'Conversion optimization', 'Personalization'],
      benefits: ['40% increase in sales', '25% higher AOV', '60% better conversion rates', 'Personalized shopping experience'],
      link: '/ai-ecommerce-optimizer',
      popular: true,
      category: 'E-commerce'
    },
    {
      title: 'AI Design Assistant',
      description: 'Create stunning visuals with AI-powered design tools for graphics, logos, and marketing materials',
      icon: '🎨',
      price: '$59/month',
      features: ['Logo generation', 'Graphic design', 'Brand guidelines', 'Template library', 'Color palette suggestions', 'Design variations'],
      benefits: ['Professional designs instantly', 'Consistent brand identity', 'Cost-effective design', 'Unlimited revisions'],
      link: '/ai-design-assistant',
      popular: false,
      category: 'Design'
    },
    {
      title: 'AI Document Processor',
      description: 'Extract and process information from documents with AI-powered OCR and data extraction',
      icon: '📄',
      price: '$89/month',
      features: ['OCR processing', 'Data extraction', 'Document classification', 'Form processing', 'Workflow automation', 'API integration'],
      benefits: ['95% accuracy in data extraction', '80% time saved', 'Automated workflows', 'Error reduction'],
      link: '/ai-document-processor',
      popular: true,
      category: 'Automation'
    },
    {
      title: 'AI Security Monitor',
      description: 'Protect your business with AI-powered security monitoring and threat detection',
      icon: '🔒',
      price: '$179/month',
      features: ['Threat detection', 'Anomaly monitoring', 'Security alerts', 'Vulnerability scanning', 'Incident response', 'Compliance reporting'],
      benefits: ['99.9% threat detection', 'Real-time monitoring', 'Reduced security risks', 'Compliance assurance'],
      link: '/ai-security-monitor',
      popular: true,
      category: 'Security'
    },
    {
      title: 'AI Performance Tracker',
      description: 'Monitor and optimize business performance with AI-powered analytics and insights',
      icon: '📈',
      price: '$99/month',
      features: ['KPI tracking', 'Performance analytics', 'Goal monitoring', 'Trend analysis', 'Automated reports', 'Alert system'],
      benefits: ['Real-time performance insights', 'Data-driven optimization', 'Goal achievement tracking', 'Automated reporting'],
      link: '/ai-performance-tracker',
      popular: false,
      category: 'Analytics'
    },
    {
      title: 'AI Voice Assistant',
      description: 'Create custom voice assistants for customer service, sales, and internal operations',
      icon: '🎤',
      price: '$149/month',
      features: ['Voice recognition', 'Natural language processing', 'Custom commands', 'Integration APIs', 'Multi-language support', 'Analytics dashboard'],
      benefits: ['Hands-free operations', 'Improved accessibility', '24/7 voice support', 'Custom voice solutions'],
      link: '/ai-voice-assistant',
      popular: true,
      category: 'Voice AI'
    },
    {
      title: 'AI HR Assistant',
      description: 'Streamline HR operations with AI-powered recruitment, employee management, and analytics',
      icon: '👥',
      price: '$119/month',
      features: ['Resume screening', 'Candidate matching', 'Employee analytics', 'Performance tracking', 'HR automation', 'Compliance monitoring'],
      benefits: ['60% faster hiring', 'Better candidate matching', 'Reduced HR workload', 'Improved employee satisfaction'],
      link: '/ai-hr-assistant',
      popular: false,
      category: 'HR'
    },
    {
      title: 'AI Inventory Manager',
      description: 'Optimize inventory with AI-powered demand forecasting and stock management',
      icon: '📦',
      price: '$89/month',
      features: ['Demand forecasting', 'Stock optimization', 'Reorder automation', 'Inventory analytics', 'Supplier management', 'Cost optimization'],
      benefits: ['30% inventory reduction', '95% stock accuracy', 'Reduced carrying costs', 'Automated reordering'],
      link: '/ai-inventory-manager',
      popular: true,
      category: 'Operations'
    },
    {
      title: 'AI Customer Insights',
      description: 'Understand your customers better with AI-powered behavioral analysis and insights',
      icon: '👤',
      price: '$79/month',
      features: ['Customer segmentation', 'Behavioral analysis', 'Churn prediction', 'Lifetime value calculation', 'Personalization', 'Sentiment analysis'],
      benefits: ['Deep customer understanding', 'Reduced churn rates', 'Higher customer lifetime value', 'Personalized experiences'],
      link: '/ai-customer-insights',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI A/B Testing Platform',
      description: 'Optimize conversions with AI-powered A/B testing and experimentation platform',
      icon: '🧪',
      price: '$99/month',
      features: ['Automated testing', 'Statistical analysis', 'Conversion optimization', 'Multivariate testing', 'Results visualization', 'Recommendation engine'],
      benefits: ['Higher conversion rates', 'Data-driven decisions', 'Automated optimization', 'Faster testing cycles'],
      link: '/ai-ab-testing',
      popular: false,
      category: 'Optimization'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Predict future outcomes with AI-powered predictive modeling and forecasting',
      icon: '🔮',
      price: '$149/month',
      features: ['Predictive modeling', 'Trend forecasting', 'Risk assessment', 'Scenario planning', 'Machine learning', 'Custom algorithms'],
      benefits: ['Accurate predictions', 'Risk mitigation', 'Strategic planning', 'Competitive advantage'],
      link: '/ai-predictive-analytics',
      popular: true,
      category: 'Analytics'
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
      color: 'text-purple-400',
      category: 'Core AI'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Voice Recognition'],
      color: 'text-blue-400',
      category: 'Language AI'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'OCR Processing', 'Quality Inspection'],
      color: 'text-green-400',
      category: 'Visual AI'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'RPA Integration', 'Smart Scheduling'],
      color: 'text-cyan-400',
      category: 'Automation'
    },
    {
      title: 'AI Consulting & Strategy',
      description: 'Comprehensive AI strategy development and implementation planning',
      icon: Target,
      price: '$2,500/month',
      features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning', 'Change Management', 'Training Programs'],
      color: 'text-orange-400',
      category: 'Consulting'
    },
    {
      title: 'AI Data Analytics',
      description: 'Advanced data analytics with AI-powered insights and visualization',
      icon: BarChart,
      price: '$1,600/month',
      features: ['Data Mining', 'Pattern Recognition', 'Predictive Modeling', 'Real-time Analytics', 'Custom Dashboards', 'Data Visualization'],
      color: 'text-pink-400',
      category: 'Analytics'
    },
    {
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions with threat detection and prevention',
      icon: Shield,
      price: '$1,800/month',
      features: ['Threat Detection', 'Anomaly Detection', 'Security Monitoring', 'Incident Response', 'Fraud Prevention', 'Compliance Management'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Medical AI applications for diagnosis, treatment, and patient care',
      icon: Heart,
      price: '$2,200/month',
      features: ['Medical Imaging', 'Diagnostic Assistance', 'Drug Discovery', 'Patient Monitoring', 'Treatment Optimization', 'Clinical Trials'],
      color: 'text-emerald-400',
      category: 'Healthcare'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and optimization services',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Auto-scaling', 'Disaster Recovery'],
      color: 'text-blue-400',
      category: 'Infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing', 'Compliance Auditing'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Microservices Architecture'],
      color: 'text-green-400',
      category: 'Development'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Data Migration', 'Query Optimization'],
      color: 'text-purple-400',
      category: 'Data Management'
    },
    {
      title: 'IT Infrastructure',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee',
      icon: Cpu,
      price: '$999/month',
      features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions', 'Monitoring & Alerting', '24/7 Support'],
      color: 'text-cyan-400',
      category: 'Infrastructure'
    },
    {
      title: 'Network Solutions',
      description: 'Network design, implementation, and monitoring solutions',
      icon: Globe,
      price: '$1,099/month',
      features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting', 'Security Configuration', 'Performance Optimization'],
      color: 'text-indigo-400',
      category: 'Networking'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology advisory services',
      icon: Target,
      price: '$1,400/month',
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Cost Analysis', 'Digital Transformation', 'Change Management'],
      color: 'text-orange-400',
      category: 'Consulting'
    },
    {
      title: 'IT Support & Maintenance',
      description: '24/7 IT management and technical support services',
      icon: Users,
      price: '$799/month',
      features: ['24/7 Support', 'Remote Monitoring', 'Proactive Maintenance', 'Issue Resolution', 'User Training', 'Documentation'],
      color: 'text-pink-400',
      category: 'Support'
    }
  ];

  const specializedSolutions = [
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum algorithms and quantum security implementations',
      icon: '⚛️',
      price: 'Custom',
      features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development', 'Quantum Machine Learning', 'Cryptography'],
      benefits: ['Exponential computing power', 'Unbreakable security', 'Revolutionary algorithms', 'Future-proof technology'],
      link: '/quantum-computing',
      popular: true,
      category: 'Emerging Tech'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations',
      icon: '🤖',
      price: 'Custom',
      features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring', 'Adaptive Learning', 'Decision Making'],
      benefits: ['Zero-downtime operations', 'Self-optimization', 'Reduced human intervention', 'Continuous improvement'],
      link: '/autonomous-systems',
      popular: true,
      category: 'Automation'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, smart contracts, and Web3 applications',
      icon: '⛓️',
      price: '$1,999/month',
      features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions', 'NFT Platforms', 'DAO Governance'],
      benefits: ['Decentralized security', 'Transparent transactions', 'Tokenization opportunities', 'Community governance'],
      link: '/blockchain-web3',
      popular: true,
      category: 'Web3'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions',
      icon: '🌐',
      price: '$1,499/month',
      features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation', 'Data Integration', 'Predictive Maintenance'],
      benefits: ['Real-time insights', 'Reduced latency', 'Scalable connectivity', 'Smart automation'],
      link: '/iot-edge-computing',
      popular: false,
      category: 'IoT'
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights and predictive analytics for decision-making',
      icon: '📊',
      price: '$1,799/month',
      features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards', 'KPI Tracking', 'Strategic Planning'],
      benefits: ['Data-driven decisions', 'Competitive advantage', 'Performance optimization', 'Strategic insights'],
      link: '/business-intelligence',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'Robotics Solutions',
      description: 'Intelligent robotic solutions for manufacturing and service industries',
      icon: '🦾',
      price: 'Custom',
      features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems', 'Quality Control', 'Assembly Lines'],
      benefits: ['Increased productivity', 'Consistent quality', 'Reduced costs', '24/7 operations'],
      link: '/robotics',
      popular: false,
      category: 'Robotics'
    },
    {
      title: 'AR/VR Solutions',
      description: 'Immersive experiences and virtual reality applications',
      icon: '🥽',
      price: '$2,299/month',
      features: ['Virtual Reality Development', 'Augmented Reality Apps', '3D Modeling', 'Interactive Experiences', 'Training Simulations', 'Virtual Meetings'],
      benefits: ['Immersive experiences', 'Enhanced training', 'Remote collaboration', 'Innovative solutions'],
      link: '/ar-vr-solutions',
      popular: true,
      category: 'Immersive Tech'
    },
    {
      title: 'Smart Cities',
      description: 'Urban technology solutions for sustainable and efficient cities',
      icon: '🏙️',
      price: 'Custom',
      features: ['Traffic Management', 'Energy Optimization', 'Waste Management', 'Public Safety', 'Citizen Services', 'Environmental Monitoring'],
      benefits: ['Sustainable development', 'Improved quality of life', 'Efficient resource use', 'Smart governance'],
      link: '/smart-cities',
      popular: false,
      category: 'Smart Cities'
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced neural-network-advanced matrix-rain particle-field-advanced">
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
            className={`text-center mb-16 transition-all duration-1000 cyber-scan-line-advanced ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-advanced neon-pulse-advanced glitch"
                data-text="Zion Tech Group"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse-advanced cyber-scan-effect-advanced" role="doc-subtitle">
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

          {/* Specialized Solutions Section */}
          <section className="mb-16" aria-labelledby="specialized-heading">
            <h2 id="specialized-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Specialized Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Cutting-edge technologies and emerging solutions for the future
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {specializedSolutions.map((solution, index) => (
                <article key={index} className={`holographic-card-advanced p-6 hover:scale-105 transition-all duration-300 ${solution.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {solution.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-purple-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    </div>
                  )}
                  <div className="text-4xl mb-4 text-center">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{solution.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
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
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400 mb-2 neon-text">{solution.price}</div>
                    <a 
                      href={solution.link} 
                      className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
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