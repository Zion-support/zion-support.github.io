'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Atom, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import LoadingSpinner from './components/LoadingSpinner';
import PerformanceMonitor from './components/PerformanceMonitor';
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

// Loading skeleton component - now using improved LoadingSpinner
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6" role="status" aria-label="Loading service card">
    <LoadingSpinner size="md" text="Loading service..." />
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
      category: 'Productivity'
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
      category: 'Content'
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
      category: 'Sales'
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
      category: 'Healthcare'
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
      category: 'Finance'
    },
    {
      title: 'AI Mobile App Builder',
      description: 'Create intelligent mobile applications with AI-powered features and automation',
      icon: '📱',
      price: '$499/month',
      features: ['AI integration', 'Smart features', 'User behavior analysis', 'Personalization', 'Voice recognition', 'Image processing'],
      benefits: ['Enhanced user experience', 'Smart automation', 'Personalized content', 'Advanced features'],
      link: '/ai-mobile-app-development',
      popular: false,
      category: 'Development'
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
      category: 'Security'
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
      category: 'Marketing'
    },
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
      category: 'Finance'
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
      category: 'Support'
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
      category: 'Analytics'
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
      category: 'Marketing'
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
      category: 'Analytics'
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
      title: 'AI 3D Generation Studio',
      description: 'Create 3D models, animations, and virtual environments with AI',
      icon: '🎨',
      price: '$499/month',
      features: ['3D model generation', 'Animation creation', 'Texture mapping', 'Rendering', 'VR/AR support', 'Export formats'],
      benefits: ['Professional 3D content', 'Time savings', 'No 3D skills needed', 'High quality output'],
      link: '/ai-3d-generation',
      popular: false,
      category: 'Design'
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
    },
    {
      title: 'AI Education Platform',
      description: 'Personalized learning platform with AI-powered adaptive education and assessment',
      icon: GraduationCap,
      price: '$2,400/month',
      features: ['Personalized Learning', 'Adaptive Assessment', 'Progress Tracking', 'Content Recommendation', 'Learning Analytics', 'Skill Gap Analysis'],
      color: 'text-pink-400',
      benefits: ['Better learning outcomes', 'Personalized experience', 'Progress tracking', 'Skill development']
    },
    {
      title: 'AI Energy Management',
      description: 'Smart energy management with AI-powered optimization and consumption analytics',
      icon: Zap,
      price: '$2,900/month',
      features: ['Energy Optimization', 'Consumption Analytics', 'Predictive Maintenance', 'Demand Response', 'Renewable Integration', 'Cost Analysis'],
      color: 'text-yellow-400',
      benefits: ['30% energy savings', 'Cost reduction', 'Sustainability', 'Efficiency gains']
    },
    {
      title: 'AI Insurance Analytics',
      description: 'Intelligent insurance risk assessment and claims processing with AI',
      icon: Shield,
      price: '$3,600/month',
      features: ['Risk Assessment', 'Claims Processing', 'Fraud Detection', 'Underwriting', 'Customer Analytics', 'Policy Optimization'],
      color: 'text-emerald-400',
      benefits: ['Accurate risk assessment', 'Faster claims', 'Fraud prevention', 'Cost reduction']
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
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Advanced AI for medical diagnosis, drug discovery, and patient care',
      icon: Stethoscope,
      price: '$3,500/month',
      features: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Monitoring', 'Diagnostic Assistance', 'Treatment Optimization', 'Clinical Trials'],
      color: 'text-pink-400',
      benefits: ['95% diagnostic accuracy', 'Faster drug development', 'Improved patient outcomes', 'Cost reduction']
    },
    {
      title: 'AI Fintech Solutions',
      description: 'AI-powered financial services including fraud detection and algorithmic trading',
      icon: CreditCard,
      price: '$2,999/month',
      features: ['Fraud Detection', 'Algorithmic Trading', 'Risk Assessment', 'Credit Scoring', 'Regulatory Compliance', 'Real-time Analytics'],
      color: 'text-emerald-400',
      benefits: ['99.9% fraud detection', 'Real-time processing', 'Regulatory compliance', 'Risk mitigation']
    },
    {
      title: 'AI Mobile App Development',
      description: 'Intelligent mobile applications with AI-powered features and automation',
      icon: Smartphone,
      price: '$2,200/month',
      features: ['AI Integration', 'Smart Features', 'User Behavior Analysis', 'Personalization', 'Voice Recognition', 'Image Processing'],
      color: 'text-indigo-400',
      benefits: ['Enhanced user experience', 'Smart automation', 'Personalized content', 'Advanced features']
    },
    {
      title: 'AI CRM Solutions',
      description: 'Intelligent customer relationship management with AI-powered insights',
      icon: Users,
      price: '$1,800/month',
      features: ['Customer Analytics', 'Lead Scoring', 'Sales Forecasting', 'Automated Follow-ups', 'Sentiment Analysis', 'Churn Prediction'],
      color: 'text-orange-400',
      benefits: ['40% better conversions', 'Automated workflows', 'Customer insights', 'Sales optimization']
    },
    {
      title: 'AI Email Assistant',
      description: 'Intelligent email management with smart categorization and automated responses',
      icon: Mail,
      price: '$149/month',
      features: ['Smart Categorization', 'Auto-responses', 'Priority Detection', 'Spam Filtering', 'Scheduling', 'Template Generation'],
      color: 'text-cyan-400',
      benefits: ['50% time savings', 'Better organization', 'Automated responses', 'Improved productivity']
    },
    {
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling and calendar management with AI optimization',
      icon: Calendar,
      price: '$199/month',
      features: ['Smart Scheduling', 'Conflict Resolution', 'Time Optimization', 'Meeting Analytics', 'Auto-booking', 'Integration APIs'],
      color: 'text-violet-400',
      benefits: ['Eliminate scheduling conflicts', 'Optimize time usage', 'Automated booking', 'Better productivity']
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
      title: 'Enterprise Security Solutions',
      description: 'Comprehensive security solutions for enterprise-grade protection',
      icon: Shield,
      price: '$3,500/month',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response', 'Threat Intelligence', 'Security Training'],
      color: 'text-red-400',
      benefits: ['99.9% threat detection', 'Compliance ready', 'Risk mitigation', '24/7 monitoring']
    },
    {
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure design, implementation, and management',
      icon: Settings,
      price: '$2,800/month',
      features: ['Infrastructure Design', 'Server Management', 'Network Setup', 'Storage Solutions', 'Backup & Recovery', 'Performance Monitoring'],
      color: 'text-green-400',
      benefits: ['99.9% uptime', 'Scalable infrastructure', 'Cost optimization', 'Proactive maintenance']
    },
    {
      title: 'Data Center Solutions',
      description: 'Enterprise data center design, implementation, and management services',
      icon: Database,
      price: '$4,200/month',
      features: ['Data Center Design', 'Power & Cooling', 'Security Systems', 'Monitoring & Management', 'Disaster Recovery', 'Compliance'],
      color: 'text-purple-400',
      benefits: ['High availability', 'Energy efficiency', 'Security compliance', 'Scalable design']
    },
    {
      title: 'Network Security & Firewall',
      description: 'Advanced network security with next-generation firewall solutions',
      icon: Lock,
      price: '$2,200/month',
      features: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions', 'Network Monitoring', 'Threat Prevention', 'Compliance'],
      color: 'text-orange-400',
      benefits: ['Advanced threat protection', 'Network visibility', 'Compliance ready', '24/7 monitoring']
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting and digital transformation advisory services',
      icon: Briefcase,
      price: '$2,500/month',
      features: ['Digital Strategy', 'Technology Roadmap', 'Architecture Design', 'Vendor Selection', 'Change Management', 'ROI Analysis'],
      color: 'text-indigo-400',
      benefits: ['Strategic guidance', 'Technology alignment', 'Cost optimization', 'Future-proofing']
    },
    {
      title: 'Managed IT Services',
      description: 'Comprehensive managed IT services for complete business support',
      icon: Users,
      price: '$1,800/month',
      features: ['24/7 Support', 'Remote Monitoring', 'Proactive Maintenance', 'Help Desk', 'Software Management', 'Security Updates'],
      color: 'text-cyan-400',
      benefits: ['Reduced downtime', 'Cost predictability', 'Expert support', 'Proactive maintenance']
    },
    {
      title: 'Cloud Security & Compliance',
      description: 'Specialized cloud security and compliance management services',
      icon: Shield,
      price: '$2,600/month',
      features: ['Cloud Security Assessment', 'Compliance Auditing', 'Data Protection', 'Access Management', 'Security Monitoring', 'Incident Response'],
      color: 'text-amber-400',
      benefits: ['Cloud security', 'Compliance assurance', 'Data protection', 'Risk mitigation']
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management and optimization',
      icon: BarChart,
      price: '$1,500/month',
      features: ['Asset Discovery', 'Inventory Management', 'License Management', 'Cost Optimization', 'Lifecycle Planning', 'Compliance Tracking'],
      color: 'text-teal-400',
      benefits: ['Cost optimization', 'License compliance', 'Asset visibility', 'Lifecycle management']
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions for business continuity',
      icon: Database,
      price: '$1,900/month',
      features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Replication', 'Recovery Testing', 'Cloud Backup', 'Business Continuity'],
      color: 'text-pink-400',
      benefits: ['Data protection', 'Quick recovery', 'Business continuity', 'Compliance ready']
    },
    {
      title: 'IT Training & Support',
      description: 'Comprehensive IT training and user support services',
      icon: GraduationCap,
      price: '$1,200/month',
      features: ['User Training', 'Technical Support', 'Documentation', 'Best Practices', 'Security Awareness', 'Software Training'],
      color: 'text-violet-400',
      benefits: ['User empowerment', 'Reduced support tickets', 'Better adoption', 'Security awareness']
    },
    {
      title: 'IT Performance Optimization',
      description: 'IT infrastructure performance optimization and tuning services',
      icon: Zap,
      price: '$2,300/month',
      features: ['Performance Analysis', 'System Tuning', 'Capacity Planning', 'Optimization', 'Monitoring Setup', 'Performance Reports'],
      color: 'text-yellow-400',
      benefits: ['Improved performance', 'Cost optimization', 'Better efficiency', 'Proactive monitoring']
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
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation advisory services',
      icon: Briefcase,
      price: '$2,200/month',
      features: ['Digital Strategy', 'Technology Roadmap', 'Architecture Design', 'Vendor Selection', 'Change Management', 'ROI Analysis'],
      color: 'text-indigo-400',
      benefits: ['Strategic guidance', 'Technology alignment', 'Cost optimization', 'Future-proofing']
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud migration services with zero downtime and data integrity',
      icon: Cloud,
      price: '$3,500/month',
      features: ['Zero-downtime Migration', 'Data Integrity', 'Application Modernization', 'Security Hardening', 'Performance Optimization', 'Training & Support'],
      color: 'text-sky-400',
      benefits: ['Zero downtime', '100% data integrity', 'Improved performance', 'Cost savings']
    },
    {
      title: 'Compliance & Governance',
      description: 'Comprehensive compliance management and governance frameworks',
      icon: FileText,
      price: '$1,800/month',
      features: ['GDPR Compliance', 'SOX Compliance', 'HIPAA Compliance', 'Audit Preparation', 'Policy Development', 'Risk Assessment'],
      color: 'text-amber-400',
      benefits: ['Regulatory compliance', 'Risk mitigation', 'Audit readiness', 'Policy enforcement']
    },
    {
      title: 'Developer Tools',
      description: 'Advanced development tools and platforms for modern software development',
      icon: Code,
      price: '$1,200/month',
      features: ['IDE Integration', 'Code Quality Tools', 'Testing Frameworks', 'Version Control', 'Build Automation', 'Documentation Tools'],
      color: 'text-emerald-400',
      benefits: ['Faster development', 'Better code quality', 'Automated testing', 'Team collaboration']
    },
    {
      title: 'Marketing Tools',
      description: 'Comprehensive marketing technology stack and automation tools',
      icon: Target,
      price: '$1,500/month',
      features: ['Marketing Automation', 'Analytics & Reporting', 'Lead Management', 'Email Campaigns', 'Social Media Tools', 'A/B Testing'],
      color: 'text-pink-400',
      benefits: ['Automated marketing', 'Better lead quality', 'ROI tracking', 'Campaign optimization']
    },
    {
      title: 'Productivity Solutions',
      description: 'Enterprise productivity tools and collaboration platforms',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Collaboration Tools', 'Project Management', 'Document Management', 'Communication Platforms', 'Workflow Automation', 'Analytics'],
      color: 'text-teal-400',
      benefits: ['Improved productivity', 'Better collaboration', 'Streamlined workflows', 'Team efficiency']
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
    },
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise-grade solutions for large organizations',
      icon: Building,
      price: 'Custom Pricing',
      features: ['Enterprise Architecture', 'Legacy Modernization', 'Digital Transformation', 'Change Management', 'Training & Support', 'ROI Optimization'],
      color: 'text-indigo-400',
      benefits: ['Scalable solutions', 'Future-proof architecture', 'Digital transformation', 'Competitive advantage'],
      category: 'Enterprise'
    },
    {
      title: 'Analytics Tools',
      description: 'Advanced analytics and business intelligence tools for data-driven decisions',
      icon: BarChart3,
      price: '$1,800/month',
      features: ['Advanced Analytics', 'Predictive Modeling', 'Data Visualization', 'Real-time Dashboards', 'Custom Reports', 'API Integration'],
      color: 'text-emerald-400',
      benefits: ['Better insights', 'Faster decisions', 'Data-driven culture', 'Competitive intelligence'],
      category: 'Analytics'
    },
    {
      title: 'Business Apps',
      description: 'Custom business applications tailored to specific industry needs',
      icon: Briefcase,
      price: '$2,500/month',
      features: ['Custom Development', 'Industry Solutions', 'Integration APIs', 'Mobile Apps', 'Web Applications', 'Maintenance & Support'],
      color: 'text-violet-400',
      benefits: ['Tailored solutions', 'Industry expertise', 'Seamless integration', 'Ongoing support'],
      category: 'Applications'
    },
    {
      title: 'Expense Tracker Pro',
      description: 'AI-powered expense management and financial tracking for businesses',
      icon: Calculator,
      price: '$299/month',
      features: ['Expense Tracking', 'Receipt OCR', 'Budget Management', 'Approval Workflows', 'Reporting & Analytics', 'Integration APIs'],
      color: 'text-rose-400',
      benefits: ['Automated tracking', 'Cost control', 'Compliance', 'Financial insights'],
      category: 'Finance'
    },
    {
      title: 'Task Manager Pro',
      description: 'Advanced project and task management with AI-powered optimization',
      icon: CheckCircle,
      price: '$199/month',
      features: ['Task Management', 'Project Planning', 'Team Collaboration', 'Time Tracking', 'Resource Allocation', 'Progress Analytics'],
      color: 'text-lime-400',
      benefits: ['Better organization', 'Team efficiency', 'Project success', 'Resource optimization'],
      category: 'Productivity'
    },
    {
      title: 'Smart Analytics',
      description: 'Intelligent analytics platform with AI-powered insights and recommendations',
      icon: TrendingUp,
      price: '$1,600/month',
      features: ['AI Insights', 'Predictive Analytics', 'Anomaly Detection', 'Custom Dashboards', 'Real-time Alerts', 'Data Integration'],
      color: 'text-amber-400',
      benefits: ['Intelligent insights', 'Proactive alerts', 'Better decisions', 'Competitive advantage'],
      category: 'Analytics'
    }
  ];

  return (
    <>
      <SEOHead
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services', 'cybersecurity', 'business intelligence']}
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
      <PerformanceMonitor />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
        enableReducedMotion={true}
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
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading promotion banner..." />}>
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