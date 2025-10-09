'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Atom, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, DollarSign, BarChart3, Mic, Headphones, Monitor, Laptop, Server, HardDrive, Wifi, Bluetooth, Battery, Cpu as Processor, Database as DataIcon, Cloud as CloudIcon, Code as CodeIcon, Smartphone as MobileIcon, Settings as SettingsIcon, FileText as DocumentIcon, Search as SearchIcon, Bot as BotIcon, Palette as DesignIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as GamingIcon, ShoppingCart as CartIcon, CreditCard as PaymentIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HealthIcon, Stethoscope as MedicalIcon, GraduationCap as EducationIcon, Briefcase as BusinessIcon, Wrench as ToolIcon, Hammer as ConstructionIcon, Paintbrush as ArtIcon, Scissors as CutIcon, BookOpen as BookIcon, Calculator as CalcIcon, Calendar as CalendarIcon, Clock3 as TimeIcon, Compass as NavigationIcon, Navigation as NavIcon, PieChart as ChartIcon, TrendingDown as DownIcon, Activity as ActivityIcon, Atom as ScienceIcon } from 'lucide-react';
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

  // Enhanced Micro SAAS Services with 50+ real services
  const microSAASServices = [
    // AI & Machine Learning Services
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization and timeline prediction',
      icon: '📊',
      price: '$199/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Budget optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'AI & ML'
    },
    {
      title: 'AI Writing Assistant Pro',
      description: 'Advanced AI-powered writing tool for content creation, editing, and optimization',
      icon: '✍️',
      price: '$89/month',
      features: ['Content generation', 'Grammar checking', 'Style optimization', 'SEO writing', 'Multi-language support', 'Brand voice consistency'],
      benefits: ['10x faster writing', '95% error reduction', 'SEO-optimized content', 'Consistent brand voice'],
      link: '/ai-writing-assistant',
      popular: true,
      category: 'AI & ML'
    },
    {
      title: 'AI CRM Intelligence',
      description: 'Smart CRM with AI-powered customer insights and automated sales processes',
      icon: '👥',
      price: '$299/month',
      features: ['Customer analytics', 'Lead scoring', 'Sales forecasting', 'Automated follow-ups', 'Sentiment analysis', 'Churn prediction'],
      benefits: ['40% better conversions', 'Automated workflows', 'Customer insights', 'Sales optimization'],
      link: '/ai-crm',
      popular: true,
      category: 'AI & ML'
    },
    {
      title: 'AI Healthcare Assistant',
      description: 'AI-powered healthcare management and patient care optimization system',
      icon: '🏥',
      price: '$399/month',
      features: ['Patient monitoring', 'Diagnostic assistance', 'Treatment optimization', 'Medical imaging analysis', 'Health records management', 'Appointment scheduling'],
      benefits: ['95% diagnostic accuracy', 'Faster patient care', 'Reduced errors', 'Cost savings'],
      link: '/ai-healthcare',
      popular: false,
      category: 'AI & ML'
    },
    {
      title: 'AI Fintech Analyzer',
      description: 'Advanced financial analysis and fraud detection with AI-powered insights',
      icon: '💳',
      price: '$349/month',
      features: ['Fraud detection', 'Risk assessment', 'Credit scoring', 'Algorithmic trading', 'Regulatory compliance', 'Real-time analytics'],
      benefits: ['99.9% fraud detection', 'Real-time processing', 'Regulatory compliance', 'Risk mitigation'],
      link: '/ai-fintech',
      popular: true,
      category: 'AI & ML'
    },
    {
      title: 'AI Cybersecurity Shield',
      description: 'AI-powered threat detection and prevention system for enterprise security',
      icon: '🛡️',
      price: '$399/month',
      features: ['Threat detection', 'Anomaly detection', 'Behavioral analysis', 'Incident response', 'Risk assessment', 'Compliance monitoring'],
      benefits: ['99.9% threat detection', 'Real-time monitoring', 'Automated response', 'Reduced false positives'],
      link: '/ai-cybersecurity',
      popular: true,
      category: 'AI & ML'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Complete marketing automation platform with AI-powered campaign optimization',
      icon: '📈',
      price: '$249/month',
      features: ['Campaign automation', 'Lead scoring', 'Email marketing', 'Social media management', 'A/B testing', 'ROI tracking'],
      benefits: ['300% more leads', '50% better conversion', 'Automated nurturing', 'ROI optimization'],
      link: '/ai-marketing',
      popular: true,
      category: 'AI & ML'
    },
    {
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots with natural language processing and automation',
      icon: '🤖',
      price: '$179/month',
      features: ['Natural language processing', 'Multi-language support', 'Integration APIs', 'Analytics dashboard', 'Custom training', 'Human handoff'],
      benefits: ['24/7 customer support', '90% query resolution', 'Cost savings', 'Better customer experience'],
      link: '/ai-chatbot-builder',
      popular: true,
      category: 'AI & ML'
    },
    {
      title: 'AI Data Analytics Pro',
      description: 'Advanced data analytics platform with AI-powered insights and predictions',
      icon: '📊',
      price: '$299/month',
      features: ['Predictive analytics', 'Data visualization', 'Real-time dashboards', 'Custom reports', 'Machine learning', 'API integration'],
      benefits: ['Better insights', 'Faster decisions', 'Predictive capabilities', 'Data-driven culture'],
      link: '/ai-data-analytics',
      popular: true,
      category: 'AI & ML'
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
      category: 'AI & ML'
    },

    // Business & Productivity Tools
    {
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization and automation',
      icon: '✅',
      price: '$149/month',
      features: ['Smart prioritization', 'Automated scheduling', 'Progress tracking', 'Team collaboration', 'Deadline management', 'Productivity analytics'],
      benefits: ['50% productivity boost', 'Better organization', 'Automated workflows', 'Team efficiency'],
      link: '/task-manager-pro',
      popular: false,
      category: 'Productivity'
    },
    {
      title: 'AI Expense Tracker',
      description: 'AI-powered expense management and financial tracking for businesses',
      icon: '💰',
      price: '$199/month',
      features: ['Expense tracking', 'Receipt OCR', 'Budget management', 'Approval workflows', 'Reporting & analytics', 'Integration APIs'],
      benefits: ['Automated tracking', 'Cost control', 'Compliance', 'Financial insights'],
      link: '/expense-tracker',
      popular: true,
      category: 'Productivity'
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
      category: 'Sales'
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
      category: 'Automation'
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
      category: 'Marketing'
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
      category: 'E-commerce'
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
      category: 'Finance'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management',
      icon: '⚙️',
      price: '$249/month',
      features: ['Process automation', 'Workflow design', 'Integration APIs', 'Error handling', 'Monitoring', 'Custom triggers'],
      benefits: ['80% process reduction', 'Error elimination', 'Cost savings', 'Scalable automation'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation'
    },
    {
      title: 'AI Sales Automation',
      description: 'Intelligent sales process automation with AI-powered lead nurturing',
      icon: '💼',
      price: '$299/month',
      features: ['Lead scoring', 'Email sequences', 'Follow-up automation', 'CRM integration', 'Performance analytics', 'A/B testing'],
      benefits: ['50% more conversions', 'Automated nurturing', 'Better lead quality', 'ROI tracking'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales'
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
      category: 'Marketing'
    },

    // Content & Creative Services
    {
      title: 'AI Content Generator',
      description: 'Create high-quality content for blogs, social media, and marketing with AI',
      icon: '✍️',
      price: '$129/month',
      features: ['Blog writing', 'Social media posts', 'Email templates', 'Ad copy generation', 'SEO optimization', 'Brand voice consistency'],
      benefits: ['10x content output', '50% time savings', '40% better engagement', 'SEO-optimized content'],
      link: '/ai-content-generation',
      popular: true,
      category: 'Content'
    },
    {
      title: 'AI Video Generator Pro',
      description: 'Create professional videos with AI-powered editing and content generation',
      icon: '🎬',
      price: '$399/month',
      features: ['AI video creation', 'Auto-editing', 'Voice synthesis', 'Text-to-video', 'Template library', 'Brand customization'],
      benefits: ['90% time savings', 'Professional quality', 'Unlimited videos', 'Multi-language support'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Content'
    },
    {
      title: 'AI Voice Cloning Studio',
      description: 'Create realistic voice clones for content, presentations, and customer service',
      icon: '🎤',
      price: '$299/month',
      features: ['Voice cloning', 'Text-to-speech', 'Emotion control', 'Multi-language', 'Voice training', 'API integration'],
      benefits: ['Natural voice quality', 'Cost-effective', 'Scalable', 'Custom voices'],
      link: '/ai-voice-cloning',
      popular: true,
      category: 'Content'
    },
    {
      title: 'AI Music Composer',
      description: 'Generate royalty-free music and soundtracks with AI composition',
      icon: '🎵',
      price: '$199/month',
      features: ['AI composition', 'Multiple genres', 'Custom length', 'Royalty-free', 'Commercial use', 'High quality'],
      benefits: ['Unlimited music', 'No copyright issues', 'Custom compositions', 'Professional quality'],
      link: '/ai-music-composition',
      popular: false,
      category: 'Content'
    },
    {
      title: 'AI Fashion Designer',
      description: 'AI-powered fashion design and trend prediction for retail businesses',
      icon: '👗',
      price: '$349/month',
      features: ['Design generation', 'Trend analysis', 'Color matching', 'Size optimization', 'Market research', 'Style recommendations'],
      benefits: ['Faster design cycles', 'Trend accuracy', 'Cost reduction', 'Market insights'],
      link: '/ai-fashion-design',
      popular: false,
      category: 'Design'
    },
    {
      title: 'AI 3D Generation Studio',
      description: 'Create 3D models, animations, and virtual environments with AI',
      icon: '🎨',
      price: '$499/month',
      features: ['3D model generation', 'Animation creation', 'Texture mapping', 'Rendering', 'VR/AR support', 'Export formats'],
      benefits: ['Professional 3D content', 'Time savings', 'No 3D skills needed', 'High quality output'],
      link: '/ai-3d-generation',
      popular: false,
      category: 'Design'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into stunning, interactive visualizations',
      icon: '📊',
      price: '$199/month',
      features: ['Interactive charts', 'Real-time data', 'Custom dashboards', 'Export options', 'Collaboration tools', 'Mobile responsive'],
      benefits: ['Better insights', 'Faster decisions', 'Professional presentations', 'Data storytelling'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics'
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness and nutrition plans powered by AI analysis',
      icon: '💪',
      price: '$149/month',
      features: ['Personalized plans', 'Progress tracking', 'Nutrition analysis', 'Workout videos', 'Health monitoring', 'Goal setting'],
      benefits: ['Better results', '24/7 guidance', 'Personalized approach', 'Health insights'],
      link: '/ai-fitness-coach',
      popular: true,
      category: 'Health'
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
      category: 'Support'
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
      category: 'Development'
    },

    // New Advanced Services
    {
      title: 'AI Legal Assistant Pro',
      description: 'AI-powered legal research, document analysis, and compliance management',
      icon: '⚖️',
      price: '$399/month',
      features: ['Legal research', 'Document analysis', 'Compliance monitoring', 'Contract review', 'Risk assessment', 'Case law analysis'],
      benefits: ['80% time savings', 'Better accuracy', 'Cost reduction', 'Compliance assurance'],
      link: '/ai-legal-assistant',
      popular: false,
      category: 'Professional'
    },
    {
      title: 'AI Real Estate Analyzer',
      description: 'Intelligent real estate market analysis and property valuation with AI',
      icon: '🏠',
      price: '$299/month',
      features: ['Market analysis', 'Property valuation', 'Investment insights', 'Risk assessment', 'Trend prediction', 'Portfolio optimization'],
      benefits: ['Accurate valuations', 'Market insights', 'Investment optimization', 'Risk mitigation'],
      link: '/ai-real-estate',
      popular: false,
      category: 'Real Estate'
    },
    {
      title: 'AI Manufacturing Intelligence',
      description: 'Smart manufacturing with AI-powered process optimization and predictive maintenance',
      icon: '🏭',
      price: '$499/month',
      features: ['Predictive maintenance', 'Process optimization', 'Quality control', 'Supply chain management', 'Energy optimization', 'Safety monitoring'],
      benefits: ['25% efficiency gain', 'Reduced downtime', 'Cost savings', 'Safety improvement'],
      link: '/ai-manufacturing',
      popular: false,
      category: 'Manufacturing'
    },
    {
      title: 'AI Transportation Optimizer',
      description: 'Intelligent transportation management with AI-powered route optimization and fleet management',
      icon: '🚛',
      price: '$399/month',
      features: ['Route optimization', 'Fleet management', 'Demand forecasting', 'Fuel optimization', 'Driver analytics', 'Maintenance scheduling'],
      benefits: ['20% fuel savings', 'Route optimization', 'Fleet efficiency', 'Cost reduction'],
      link: '/ai-transportation',
      popular: false,
      category: 'Logistics'
    },
    {
      title: 'AI HR Management Suite',
      description: 'Intelligent HR management with AI-powered recruitment and employee analytics',
      icon: '👔',
      price: '$249/month',
      features: ['Talent acquisition', 'Employee analytics', 'Performance management', 'Retention analysis', 'Skills assessment', 'Workforce planning'],
      benefits: ['50% better hiring', 'Employee satisfaction', 'Retention improvement', 'Workforce optimization'],
      link: '/ai-hr-management',
      popular: false,
      category: 'HR'
    },
    {
      title: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with AI-powered optimization and forecasting',
      icon: '📦',
      price: '$449/month',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Supplier management', 'Risk assessment', 'Cost optimization'],
      benefits: ['30% cost reduction', '95% accuracy', 'Risk mitigation', 'Efficiency gains'],
      link: '/ai-supply-chain',
      popular: false,
      category: 'Supply Chain'
    },
    {
      title: 'AI Quality Assurance Pro',
      description: 'Automated quality control and testing with AI-powered defect detection',
      icon: '🔍',
      price: '$299/month',
      features: ['Automated testing', 'Defect detection', 'Quality metrics', 'Process optimization', 'Compliance monitoring', 'Performance analysis'],
      benefits: ['90% defect reduction', 'Faster testing', 'Cost savings', 'Quality improvement'],
      link: '/ai-quality-assurance',
      popular: false,
      category: 'Quality'
    },
    {
      title: 'AI Energy Management',
      description: 'Smart energy management with AI-powered optimization and cost reduction',
      icon: '⚡',
      price: '$349/month',
      features: ['Energy monitoring', 'Cost optimization', 'Predictive maintenance', 'Renewable integration', 'Demand forecasting', 'Carbon tracking'],
      benefits: ['25% energy savings', 'Cost reduction', 'Sustainability', 'Efficiency gains'],
      link: '/ai-energy-management',
      popular: false,
      category: 'Energy'
    },
    {
      title: 'AI Retail Analytics',
      description: 'Intelligent retail analytics with AI-powered customer insights and inventory optimization',
      icon: '🛍️',
      price: '$299/month',
      features: ['Customer analytics', 'Inventory optimization', 'Price optimization', 'Demand forecasting', 'Customer segmentation', 'Sales prediction'],
      benefits: ['30% sales increase', 'Inventory optimization', 'Customer insights', 'Cost reduction'],
      link: '/ai-retail-analytics',
      popular: false,
      category: 'Retail'
    },
    {
      title: 'AI Education Platform',
      description: 'AI-powered educational platform with personalized learning and assessment',
      icon: '🎓',
      price: '$199/month',
      features: ['Personalized learning', 'Adaptive assessment', 'Progress tracking', 'Content generation', 'Student analytics', 'Automated grading'],
      benefits: ['Better learning outcomes', 'Personalized education', 'Time savings', 'Improved engagement'],
      link: '/ai-education',
      popular: false,
      category: 'Education'
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
      benefits: ['40% better predictions', '60% faster insights', 'ROI tracking', 'Scalable models']
    },
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced business intelligence with AI-driven insights and automated reporting',
      icon: BarChart,
      price: '$3,200/month',
      features: ['AI Insights', 'Automated Reporting', 'Predictive Analytics', 'Real-time Dashboards', 'Data Integration', 'Custom Visualizations'],
      color: 'text-blue-400',
      benefits: ['50% faster insights', 'Automated reporting', 'Better decisions', 'Competitive advantage']
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with AI-powered optimization and forecasting',
      icon: Globe,
      price: '$4,500/month',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Risk Assessment', 'Cost Optimization'],
      color: 'text-green-400',
      benefits: ['30% cost reduction', '95% accuracy', 'Risk mitigation', 'Efficiency gains']
    },
    {
      title: 'AI Quality Assurance',
      description: 'Automated quality control and testing with AI-powered defect detection',
      icon: Shield,
      price: '$2,800/month',
      features: ['Automated Testing', 'Defect Detection', 'Quality Metrics', 'Process Optimization', 'Compliance Monitoring', 'Performance Analysis'],
      color: 'text-red-400',
      benefits: ['90% defect reduction', 'Faster testing', 'Cost savings', 'Quality improvement']
    },
    {
      title: 'AI Human Resources',
      description: 'Intelligent HR management with AI-powered recruitment and employee analytics',
      icon: Users,
      price: '$2,200/month',
      features: ['Talent Acquisition', 'Employee Analytics', 'Performance Management', 'Retention Analysis', 'Skills Assessment', 'Workforce Planning'],
      color: 'text-orange-400',
      benefits: ['50% better hiring', 'Employee satisfaction', 'Retention improvement', 'Workforce optimization']
    },
    {
      title: 'AI Legal Assistant',
      description: 'AI-powered legal research, document analysis, and compliance management',
      icon: FileText,
      price: '$3,500/month',
      features: ['Legal Research', 'Document Analysis', 'Compliance Monitoring', 'Contract Review', 'Risk Assessment', 'Case Law Analysis'],
      color: 'text-indigo-400',
      benefits: ['80% time savings', 'Better accuracy', 'Cost reduction', 'Compliance assurance']
    },
    {
      title: 'AI Real Estate Analytics',
      description: 'Intelligent real estate market analysis and property valuation with AI',
      icon: Home,
      price: '$2,600/month',
      features: ['Market Analysis', 'Property Valuation', 'Investment Insights', 'Risk Assessment', 'Trend Prediction', 'Portfolio Optimization'],
      color: 'text-teal-400',
      benefits: ['Accurate valuations', 'Market insights', 'Investment optimization', 'Risk mitigation']
    },
    {
      title: 'AI Manufacturing Intelligence',
      description: 'Smart manufacturing with AI-powered process optimization and predictive maintenance',
      icon: Factory,
      price: '$4,200/month',
      features: ['Predictive Maintenance', 'Process Optimization', 'Quality Control', 'Supply Chain Management', 'Energy Optimization', 'Safety Monitoring'],
      color: 'text-amber-400',
      benefits: ['25% efficiency gain', 'Reduced downtime', 'Cost savings', 'Safety improvement']
    },
    {
      title: 'AI Transportation & Logistics',
      description: 'Intelligent transportation management with AI-powered route optimization and fleet management',
      icon: Truck,
      price: '$3,800/month',
      features: ['Route Optimization', 'Fleet Management', 'Demand Forecasting', 'Fuel Optimization', 'Driver Analytics', 'Maintenance Scheduling'],
      color: 'text-cyan-400',
      benefits: ['20% fuel savings', 'Route optimization', 'Fleet efficiency', 'Cost reduction']
    }
  ];

  // Enhanced IT Services
  const itServices = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, management, and optimization',
      icon: Cloud,
      price: '$1,999/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Monitoring & Alerting', 'Backup & Recovery'],
      color: 'text-blue-400',
      benefits: ['99.9% uptime', 'Cost optimization', 'Scalable infrastructure', 'Expert support']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services with threat detection and prevention',
      icon: Shield,
      price: '$2,499/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance Management', 'Security Training'],
      color: 'text-red-400',
      benefits: ['Advanced protection', '24/7 monitoring', 'Compliance assurance', 'Risk mitigation']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,799/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Performance Optimization'],
      color: 'text-green-400',
      benefits: ['Faster deployments', 'Reduced errors', 'Better collaboration', 'Scalable processes']
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$1,299/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services', 'Monitoring & Analytics'],
      color: 'text-purple-400',
      benefits: ['Optimized performance', 'Data security', 'Reliable backups', 'Expert management']
    },
    {
      title: 'Network Infrastructure',
      description: 'Network design, implementation, and monitoring solutions',
      icon: Wifi,
      price: '$1,599/month',
      features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting', 'Security Configuration', 'Performance Optimization'],
      color: 'text-cyan-400',
      benefits: ['Reliable connectivity', 'Security', 'Performance', 'Expert support']
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support and maintenance services',
      icon: Wrench,
      price: '$999/month',
      features: ['24/7 Support', 'System Maintenance', 'Software Updates', 'Hardware Management', 'User Training', 'Troubleshooting'],
      color: 'text-orange-400',
      benefits: ['Minimal downtime', 'Proactive maintenance', 'Expert support', 'Cost savings']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <SEOOptimizer
        title="Zion Tech Group - AI & IT Solutions | Micro SAAS Services"
        description="Transform your business with our comprehensive AI and IT solutions. 50+ micro SAAS services, enterprise AI solutions, and cutting-edge technology services. Contact us at +1 302 464 0950."
        keywords={['AI services', 'IT solutions', 'micro SAAS', 'business automation', 'AI consulting', 'enterprise solutions']}
        canonicalUrl="https://ziontechgroup.com"
      />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <Analytics />
      <SecurityEnhancer />
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section with Enhanced Futuristic Design */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-600/20 to-pink-500/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
          
          <div className="container mx-auto text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform Your Business with 
                <span className="text-cyan-400 font-semibold"> 50+ AI-Powered Micro SAAS Services</span> 
                and Enterprise Solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  <PhoneIcon className="inline w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  <MailIcon className="inline w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
              
              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cyber-card">
                  <div className="text-2xl font-bold text-cyan-400">50+</div>
                  <div className="text-sm text-gray-300">Micro SAAS Services</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cyber-card">
                  <div className="text-2xl font-bold text-purple-400">300%</div>
                  <div className="text-sm text-gray-300">Average ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cyber-card">
                  <div className="text-2xl font-bold text-pink-400">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cyber-card">
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-sm text-gray-300">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Micro SAAS Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Micro SAAS Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of AI-powered micro SAAS solutions designed to transform your business operations
              </p>
            </div>

            {/* Service Categories Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['All', 'AI & ML', 'Productivity', 'Sales', 'Marketing', 'Content', 'E-commerce', 'Finance', 'Health', 'Education'].map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-cyan-500/20 transition-all duration-300 cyber-card"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {microSAASServices.map((service, index) => (
                <article key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.title}</h3>
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
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-3 neon-text">{service.price}</div>
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
          </div>
        </section>

        {/* Enhanced AI Services Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Enterprise AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI services designed for enterprise-scale transformation and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-pink-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-4 neon-text">{service.price}</div>
                    <a 
                      href="mailto:kleber@ziontechgroup.com?subject=Interest in AI Services"
                      className="cyber-button px-6 py-3 font-medium transition-all duration-300 hover:scale-105"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced IT Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                IT Services & Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services to support your digital transformation journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-pink-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-4 neon-text">{service.price}</div>
                    <a 
                      href="mailto:kleber@ziontechgroup.com?subject=Interest in IT Services"
                      className="cyber-button px-6 py-3 font-medium transition-all duration-300 hover:scale-105"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Get started with our AI and IT solutions today. Contact us for a free consultation and see how we can help your business achieve 300% ROI.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <PhoneIcon className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-cyan-200 hover:text-white transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <MailIcon className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-200 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Location className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-cyan-200 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover:scale-105"
              >
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors hover:scale-105"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;