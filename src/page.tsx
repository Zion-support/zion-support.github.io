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
      price: '$199/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '50% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      marketPrice: '$299/month'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation and smart scheduling',
      icon: '📱',
      price: '$149/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Multi-platform management', 'Trend analysis'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '60% better targeting'],
      link: '/ai-social-media-manager',
      popular: true,
      marketPrice: '$249/month'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      icon: '📈',
      price: '$299/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reports'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', '25% better decisions'],
      link: '/ai-analytics-dashboard',
      popular: true,
      marketPrice: '$499/month'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Transform your email marketing with AI-powered content generation and automation',
      icon: '📧',
      price: '$199/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Personalization'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', '35% higher CTR'],
      link: '/ai-email-marketing',
      popular: true,
      marketPrice: '$399/month'
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
      marketPrice: '$399/month'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection and optimization',
      icon: '🔍',
      price: '$179/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Code suggestions', 'Best practices'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', '50% faster development'],
      link: '/ai-code-generation',
      popular: false,
      marketPrice: '$299/month'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation for blogs, social media, and marketing materials',
      icon: '✍️',
      price: '$129/month',
      features: ['Blog writing', 'Social media posts', 'Email templates', 'Ad copy generation', 'SEO optimization', 'Brand voice matching'],
      benefits: ['80% time saved', '300% more content', '40% better engagement', '50% cost reduction'],
      link: '/ai-content-generation',
      popular: true,
      marketPrice: '$249/month'
    },
    {
      title: 'AI SEO Optimizer',
      description: 'AI-driven SEO analysis and optimization recommendations',
      icon: '🎯',
      price: '$199/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis', 'Rank tracking', 'Link building'],
      benefits: ['150% traffic increase', '80% ranking improvement', '60% more leads', '45% revenue growth'],
      link: '/ai-seo-optimizer',
      popular: true,
      marketPrice: '$399/month'
    },
    {
      title: 'AI Invoice Generator',
      description: 'Automated invoicing with AI-powered customization and payment tracking',
      icon: '💰',
      price: '$99/month',
      features: ['Auto invoice generation', 'Payment tracking', 'Custom templates', 'Tax calculations', 'Client management', 'Analytics'],
      benefits: ['90% time saved', '50% faster payments', 'Zero errors', '100% accuracy'],
      link: '/ai-invoice-generator',
      popular: false,
      marketPrice: '$199/month'
    },
    {
      title: 'AI Lead Scoring',
      description: 'Intelligent lead qualification and scoring system',
      icon: '🎯',
      price: '$179/month',
      features: ['Lead scoring', 'Behavioral analysis', 'Predictive modeling', 'CRM integration', 'Automated follow-up', 'ROI tracking'],
      benefits: ['60% better conversion', '40% more qualified leads', '35% higher close rate', '50% time saved'],
      link: '/ai-lead-scoring',
      popular: true,
      marketPrice: '$349/month'
    },
    {
      title: 'AI Sales Forecasting',
      description: 'Advanced sales predictions and revenue forecasting',
      icon: '📊',
      price: '$249/month',
      features: ['Sales predictions', 'Revenue forecasting', 'Trend analysis', 'Risk assessment', 'Performance tracking', 'Custom reports'],
      benefits: ['85% accuracy', '40% better planning', '30% revenue increase', '50% risk reduction'],
      link: '/ai-sales-forecasting',
      popular: true,
      marketPrice: '$499/month'
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'E-commerce optimization with AI-powered recommendations and automation',
      icon: '🛒',
      price: '$299/month',
      features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer insights', 'Conversion optimization', 'Analytics'],
      benefits: ['45% conversion increase', '30% revenue growth', '60% better recommendations', '40% cost reduction'],
      link: '/ai-ecommerce-optimizer',
      popular: true,
      marketPrice: '$599/month'
    },
    {
      title: 'AI Design Assistant',
      description: 'AI-powered design tool for graphics, logos, and marketing materials',
      icon: '🎨',
      price: '$149/month',
      features: ['Logo generation', 'Graphic design', 'Brand guidelines', 'Template library', 'Color matching', 'Export options'],
      benefits: ['80% time saved', 'Professional designs', 'Brand consistency', '50% cost reduction'],
      link: '/ai-design-assistant',
      popular: false,
      marketPrice: '$299/month'
    },
    {
      title: 'AI Document Processor',
      description: 'Intelligent document processing and data extraction',
      icon: '📄',
      price: '$199/month',
      features: ['OCR processing', 'Data extraction', 'Document classification', 'Workflow automation', 'API integration', 'Batch processing'],
      benefits: ['90% accuracy', '80% time saved', 'Zero manual entry', '100% automation'],
      link: '/ai-document-processor',
      popular: true,
      marketPrice: '$399/month'
    },
    {
      title: 'AI Security Monitor',
      description: 'Real-time security monitoring and threat detection',
      icon: '🔒',
      price: '$349/month',
      features: ['Threat detection', 'Real-time monitoring', 'Incident response', 'Compliance tracking', 'Security reports', '24/7 alerts'],
      benefits: ['99% threat detection', '60% faster response', 'Zero breaches', '100% compliance'],
      link: '/ai-security-monitor',
      popular: true,
      marketPrice: '$699/month'
    },
    {
      title: 'AI Performance Tracker',
      description: 'Comprehensive performance tracking and optimization',
      icon: '⚡',
      price: '$179/month',
      features: ['Performance monitoring', 'Bottleneck detection', 'Optimization suggestions', 'Real-time alerts', 'Historical analysis', 'Custom metrics'],
      benefits: ['40% performance boost', '60% faster loading', '50% fewer issues', '30% cost savings'],
      link: '/ai-performance-tracker',
      popular: false,
      marketPrice: '$349/month'
    },
    {
      title: 'AI Voice Assistant',
      description: 'Custom voice assistants for business applications',
      icon: '🎤',
      price: '$299/month',
      features: ['Voice recognition', 'Natural language processing', 'Custom commands', 'Integration APIs', 'Multi-language support', 'Analytics'],
      benefits: ['80% hands-free operation', '60% productivity increase', '24/7 availability', '50% cost reduction'],
      link: '/ai-voice-assistant',
      popular: true,
      marketPrice: '$599/month'
    },
    {
      title: 'AI HR Assistant',
      description: 'Intelligent HR management and employee services',
      icon: '👥',
      price: '$249/month',
      features: ['Employee management', 'Recruitment automation', 'Performance tracking', 'Payroll integration', 'Compliance monitoring', 'Analytics'],
      benefits: ['70% time saved', '50% better hiring', '40% employee satisfaction', '60% cost reduction'],
      link: '/ai-hr-assistant',
      popular: true,
      marketPrice: '$499/month'
    },
    {
      title: 'AI Inventory Manager',
      description: 'Smart inventory management with predictive analytics',
      icon: '📦',
      price: '$199/month',
      features: ['Inventory tracking', 'Demand forecasting', 'Reorder automation', 'Cost optimization', 'Supplier management', 'Analytics'],
      benefits: ['30% cost reduction', '50% fewer stockouts', '40% better forecasting', '60% time saved'],
      link: '/ai-inventory-manager',
      popular: false,
      marketPrice: '$399/month'
    },
    {
      title: 'AI Customer Insights',
      description: 'Deep customer insights and behavior analysis',
      icon: '👤',
      price: '$279/month',
      features: ['Customer profiling', 'Behavior analysis', 'Predictive modeling', 'Segmentation', 'Personalization', 'ROI tracking'],
      benefits: ['60% better targeting', '40% higher engagement', '35% revenue increase', '50% better retention'],
      link: '/ai-customer-insights',
      popular: true,
      marketPrice: '$549/month'
    },
    {
      title: 'AI A/B Testing Platform',
      description: 'Advanced A/B testing with AI-powered optimization',
      icon: '🧪',
      price: '$199/month',
      features: ['A/B testing', 'Statistical analysis', 'Automated optimization', 'Multi-variate testing', 'Real-time results', 'Recommendations'],
      benefits: ['40% better conversion', '60% faster testing', '85% statistical confidence', '50% time saved'],
      link: '/ai-ab-testing',
      popular: false,
      marketPrice: '$399/month'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Future outcome predictions and trend analysis',
      icon: '🔮',
      price: '$399/month',
      features: ['Predictive modeling', 'Trend analysis', 'Risk assessment', 'Scenario planning', 'Custom algorithms', 'Real-time insights'],
      benefits: ['85% prediction accuracy', '40% better decisions', '60% risk reduction', '50% competitive advantage'],
      link: '/ai-predictive-analytics',
      popular: true,
      marketPrice: '$799/month'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation and optimization',
      icon: '⚙️',
      price: '$229/month',
      features: ['Process automation', 'Workflow optimization', 'Task scheduling', 'Integration APIs', 'Monitoring', 'Analytics'],
      benefits: ['80% process automation', '60% time saved', '50% cost reduction', '90% accuracy'],
      link: '/ai-workflow-automation',
      popular: true,
      marketPrice: '$449/month'
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Platform',
      description: 'Complete ML platform with custom model development and deployment',
      icon: Brain,
      price: '$2,999/month',
      features: ['Custom Model Development', 'Data Pipeline Setup', 'Model Training', 'Deployment & Monitoring', 'A/B Testing', 'AutoML'],
      benefits: ['85% accuracy improvement', '60% faster development', '40% cost reduction', '99.9% uptime'],
      color: 'text-purple-400',
      marketPrice: '$4,999/month'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,999/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Voice Recognition'],
      benefits: ['90% accuracy', '50+ languages', 'Real-time processing', 'Custom training'],
      color: 'text-blue-400',
      marketPrice: '$3,499/month'
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Advanced image and video analysis with object detection and recognition',
      icon: Eye,
      price: '$2,499/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'OCR Processing', 'Quality Control'],
      benefits: ['95% accuracy', 'Real-time processing', 'Custom models', 'API integration'],
      color: 'text-green-400',
      marketPrice: '$4,999/month'
    },
    {
      title: 'AI Process Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,799/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'RPA Integration', 'Monitoring'],
      benefits: ['80% automation', '60% time saved', '50% cost reduction', 'Zero errors'],
      color: 'text-cyan-400',
      marketPrice: '$3,299/month'
    },
    {
      title: 'AI Data Analytics',
      description: 'Advanced data analytics with AI-powered insights and predictions',
      icon: BarChart,
      price: '$2,299/month',
      features: ['Predictive Analytics', 'Data Visualization', 'Trend Analysis', 'Anomaly Detection', 'Custom Dashboards', 'Real-time Insights'],
      benefits: ['70% better insights', '50% faster analysis', '40% revenue increase', 'Real-time monitoring'],
      color: 'text-orange-400',
      marketPrice: '$4,499/month'
    },
    {
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions with threat detection and prevention',
      icon: Shield,
      price: '$2,799/month',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Compliance Monitoring', 'Risk Assessment', '24/7 Monitoring'],
      benefits: ['99% threat detection', '60% faster response', 'Zero breaches', '100% compliance'],
      color: 'text-red-400',
      marketPrice: '$5,999/month'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Medical AI solutions for diagnosis, treatment, and patient care',
      icon: Heart,
      price: '$3,999/month',
      features: ['Medical Imaging', 'Diagnosis Support', 'Drug Discovery', 'Patient Monitoring', 'Treatment Planning', 'Clinical Trials'],
      benefits: ['90% diagnosis accuracy', '40% faster treatment', '30% cost reduction', 'Lives saved'],
      color: 'text-pink-400',
      marketPrice: '$7,999/month'
    },
    {
      title: 'AI Fintech Solutions',
      description: 'Financial AI applications for trading, risk management, and fraud detection',
      icon: CreditCard,
      price: '$2,599/month',
      features: ['Algorithmic Trading', 'Risk Management', 'Fraud Detection', 'Credit Scoring', 'Regulatory Compliance', 'Real-time Analysis'],
      benefits: ['95% fraud detection', '40% better returns', '60% risk reduction', 'Real-time processing'],
      color: 'text-yellow-400',
      marketPrice: '$5,499/month'
    },
    {
      title: 'AI Mobile Development',
      description: 'AI-powered mobile applications with intelligent features',
      icon: Smartphone,
      price: '$1,999/month',
      features: ['Mobile AI Integration', 'Voice Recognition', 'Image Processing', 'Personalization', 'Offline AI', 'Cross-platform'],
      benefits: ['60% better UX', '40% engagement increase', '50% faster development', 'Native performance'],
      color: 'text-indigo-400',
      marketPrice: '$3,999/month'
    },
    {
      title: 'AI E-commerce Platform',
      description: 'Complete AI-powered e-commerce solutions with personalization',
      icon: ShoppingCart,
      price: '$2,999/month',
      features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights', 'Search Optimization', 'Analytics'],
      benefits: ['45% conversion increase', '30% revenue growth', '60% better recommendations', '40% cost reduction'],
      color: 'text-emerald-400',
      marketPrice: '$5,999/month'
    },
    {
      title: 'AI Research & Development',
      description: 'Custom AI research and development for cutting-edge solutions',
      icon: Code,
      price: '$4,999/month',
      features: ['Custom Algorithm Development', 'Research & Prototyping', 'Patent Development', 'Technology Transfer', 'Consulting', 'Training'],
      benefits: ['Innovation leadership', 'Competitive advantage', 'IP development', 'Future-proofing'],
      color: 'text-violet-400',
      marketPrice: '$9,999/month'
    },
    {
      title: 'AI Edge Computing',
      description: 'AI solutions deployed at the edge for real-time processing',
      icon: Cpu,
      price: '$2,199/month',
      features: ['Edge AI Deployment', 'Real-time Processing', 'Low Latency', 'Offline Capability', 'IoT Integration', 'Resource Optimization'],
      benefits: ['90% latency reduction', 'Real-time processing', 'Offline operation', 'Cost efficiency'],
      color: 'text-teal-400',
      marketPrice: '$4,499/month'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Complete cloud migration, setup, and optimization services',
      icon: Cloud,
      price: '$2,499/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Auto-scaling', 'Disaster Recovery'],
      benefits: ['99.9% uptime', '40% cost reduction', '60% faster deployment', '100% scalability'],
      color: 'text-blue-400',
      marketPrice: '$4,999/month'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$2,999/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance Management', 'Penetration Testing'],
      benefits: ['99% threat detection', 'Zero breaches', '60% faster response', '100% compliance'],
      color: 'text-red-400',
      marketPrice: '$5,999/month'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,999/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'GitOps'],
      benefits: ['80% faster deployment', '90% fewer errors', '50% time saved', '99.9% reliability'],
      color: 'text-green-400',
      marketPrice: '$3,999/month'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$1,599/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Replication', 'Monitoring'],
      benefits: ['60% performance boost', 'Zero data loss', '99.9% availability', '50% cost reduction'],
      color: 'text-purple-400',
      marketPrice: '$3,299/month'
    },
    {
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure design, implementation, and management',
      icon: Cpu,
      price: '$2,299/month',
      features: ['Server Management', 'Network Design', 'Storage Solutions', 'Virtualization', 'Monitoring', 'Maintenance'],
      benefits: ['99.9% uptime', '40% cost reduction', '60% better performance', '24/7 support'],
      color: 'text-cyan-400',
      marketPrice: '$4,599/month'
    },
    {
      title: 'Network Solutions',
      description: 'Advanced networking solutions with security and optimization',
      icon: Globe,
      price: '$1,799/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Monitoring', 'Troubleshooting', 'Upgrades'],
      benefits: ['99.9% reliability', '50% faster speeds', 'Zero downtime', 'Advanced security'],
      color: 'text-orange-400',
      marketPrice: '$3,599/month'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT planning and digital transformation consulting',
      icon: Target,
      price: '$1,999/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'ROI Analysis', 'Implementation', 'Training'],
      benefits: ['40% better strategy', '60% cost savings', '50% faster implementation', 'Future-proofing'],
      color: 'text-indigo-400',
      marketPrice: '$3,999/month'
    },
    {
      title: 'IT Support & Maintenance',
      description: '24/7 IT support and proactive maintenance services',
      icon: Clock,
      price: '$1,299/month',
      features: ['24/7 Support', 'Proactive Monitoring', 'Preventive Maintenance', 'Issue Resolution', 'Updates', 'Documentation'],
      benefits: ['24/7 availability', '90% faster resolution', 'Preventive maintenance', 'Zero downtime'],
      color: 'text-teal-400',
      marketPrice: '$2,599/month'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training and certification programs',
      icon: GraduationCap,
      price: '$999/month',
      features: ['Technical Training', 'Certification Programs', 'Skill Assessment', 'Custom Curriculum', 'Online Learning', 'Certification'],
      benefits: ['100% certification rate', '60% skill improvement', 'Career advancement', 'Team productivity'],
      color: 'text-yellow-400',
      marketPrice: '$1,999/month'
    },
    {
      title: 'Disaster Recovery',
      description: 'Comprehensive disaster recovery and business continuity solutions',
      icon: Lock,
      price: '$1,499/month',
      features: ['Backup Solutions', 'Recovery Planning', 'Testing', 'Monitoring', 'Documentation', 'Training'],
      benefits: ['99.9% data protection', 'RTO < 4 hours', 'RPO < 1 hour', 'Zero data loss'],
      color: 'text-pink-400',
      marketPrice: '$2,999/month'
    },
    {
      title: 'IT Automation',
      description: 'Intelligent IT process automation and optimization',
      icon: Zap,
      price: '$1,799/month',
      features: ['Process Automation', 'Workflow Optimization', 'RPA Integration', 'Monitoring', 'Analytics', 'Custom Scripts'],
      benefits: ['80% automation', '60% time saved', '50% cost reduction', 'Zero errors'],
      color: 'text-emerald-400',
      marketPrice: '$3,599/month'
    },
    {
      title: 'Global IT Support',
      description: 'Worldwide IT support with multi-language capabilities',
      icon: Globe,
      price: '$2,199/month',
      features: ['Global Coverage', 'Multi-language Support', '24/7 Availability', 'Local Expertise', 'Cultural Adaptation', 'Compliance'],
      benefits: ['Global reach', 'Local expertise', '24/7 support', 'Cultural sensitivity'],
      color: 'text-violet-400',
      marketPrice: '$4,399/month'
    }
  ];

  const specializedSolutions = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum algorithms and quantum security implementations',
      icon: Sparkles,
      price: 'Custom Pricing',
      features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development', 'Quantum Simulation', 'Cryptography'],
      benefits: ['Exponential speedup', 'Unbreakable security', 'Future-proofing', 'Competitive advantage'],
      color: 'text-purple-400',
      marketPrice: '$50,000+/month'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations',
      icon: Cpu,
      price: 'Custom Pricing',
      features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring', 'Adaptive Learning', 'Autonomous Decision Making'],
      benefits: ['99.9% uptime', '60% cost reduction', 'Zero human intervention', 'Continuous optimization'],
      color: 'text-cyan-400',
      marketPrice: '$25,000+/month'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, smart contracts, and Web3 applications',
      icon: Globe,
      price: '$4,999/month',
      features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions', 'NFT Platforms', 'DAO Governance'],
      benefits: ['Decentralized security', 'Transparent operations', 'Global accessibility', 'Future-proof technology'],
      color: 'text-blue-400',
      marketPrice: '$9,999/month'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions',
      icon: Settings,
      price: '$2,999/month',
      features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation', 'Protocol Integration', 'Scalable Architecture'],
      benefits: ['Real-time processing', 'Reduced latency', 'Cost efficiency', 'Scalable deployment'],
      color: 'text-green-400',
      marketPrice: '$5,999/month'
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights and predictive analytics for decision-making',
      icon: BarChart,
      price: '$2,499/month',
      features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards', 'Predictive Modeling', 'Real-time Reporting'],
      benefits: ['40% better decisions', '60% faster insights', '30% revenue increase', 'Data-driven culture'],
      color: 'text-orange-400',
      marketPrice: '$4,999/month'
    },
    {
      title: 'Robotics Solutions',
      description: 'Intelligent robotic solutions for manufacturing and service industries',
      icon: Settings,
      price: 'Custom Pricing',
      features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems', 'Quality Control', 'Safety Systems'],
      benefits: ['80% automation', '60% productivity increase', 'Zero errors', '24/7 operation'],
      color: 'text-red-400',
      marketPrice: '$15,000+/month'
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
                    {service.marketPrice && (
                      <div className="text-sm text-gray-400 mb-2">
                        Market Price: <span className="line-through">{service.marketPrice}</span>
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
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-1 neon-text ${service.color}`}>{service.price}</div>
                    {service.marketPrice && (
                      <div className="text-sm text-gray-400 mb-2">
                        Market Price: <span className="line-through">{service.marketPrice}</span>
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
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-1 neon-text ${service.color}`}>{service.price}</div>
                    {service.marketPrice && (
                      <div className="text-sm text-gray-400 mb-2">
                        Market Price: <span className="line-through">{service.marketPrice}</span>
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
              Cutting-edge technologies and specialized solutions for the future
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {specializedSolutions.map((service, index) => (
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
                    <div className={`text-lg font-bold mb-1 neon-text ${service.color}`}>{service.price}</div>
                    {service.marketPrice && (
                      <div className="text-sm text-gray-400 mb-2">
                        Market Price: <span className="line-through">{service.marketPrice}</span>
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