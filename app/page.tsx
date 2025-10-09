'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, DollarSign, Truck, Link, RefreshCw, FileCheck, X, Menu } from 'lucide-react';
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
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment',
      icon: '📊',
      price: '$99/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Budget optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost savings'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation, smart scheduling, and audience engagement',
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
      description: 'Transform your data into actionable insights with AI-powered analytics and real-time reporting',
      icon: '📈',
      price: '$149/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Custom reports', 'Predictive modeling'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', 'Faster decision making'],
      link: '/ai-analytics',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Transform your email marketing with AI-powered content generation, automation, and personalization',
      icon: '📧',
      price: '$99/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Deliverability optimization'],
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
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Sentiment analysis'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', '50% cost reduction'],
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
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', 'Faster development cycles'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development'
    },
    {
      title: 'AI Video Generator Pro',
      description: 'Create professional videos with AI-powered editing, content generation, and multi-platform optimization',
      icon: '🎥',
      price: '$199/month',
      features: ['AI video editing', 'Auto-generated content', 'Voice synthesis', 'Multi-language support', 'Brand customization', 'Social media optimization'],
      benefits: ['90% time reduction', 'Professional quality', 'Unlimited exports', 'Multi-platform ready'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Content Creation'
    },
    {
      title: 'AI Voice Cloning Studio',
      description: 'Create realistic voice clones for content creation, accessibility, and multilingual support',
      icon: '🎤',
      price: '$129/month',
      features: ['High-quality voice cloning', 'Multiple voice options', 'Real-time synthesis', 'API integration', 'Emotion control', 'Accent adaptation'],
      benefits: ['99% voice accuracy', 'Multiple languages', 'Real-time processing', 'Unlimited usage'],
      link: '/ai-voice-cloning',
      popular: false,
      category: 'Content Creation'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management and exception handling',
      icon: '⚡',
      price: '$179/month',
      features: ['Process automation', 'Smart routing', 'Exception handling', 'Analytics dashboard', 'Custom triggers', 'Integration hub'],
      benefits: ['80% process automation', '60% cost reduction', 'Real-time monitoring', 'Error reduction'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation'
    },
    {
      title: 'AI Fashion Design Studio',
      description: 'Create stunning fashion designs with AI-powered design tools, trend analysis, and sustainability insights',
      icon: '👗',
      price: '$159/month',
      features: ['AI design generation', 'Trend analysis', 'Color matching', 'Pattern creation', 'Sustainability scoring', '3D visualization'],
      benefits: ['50% design time reduction', 'Trend-aware designs', 'Unlimited creativity', 'Sustainable practices'],
      link: '/ai-fashion-design',
      popular: false,
      category: 'Design'
    },
    {
      title: 'AI Music Composition Suite',
      description: 'Compose original music with AI-powered composition tools, genre adaptation, and royalty-free licensing',
      icon: '🎵',
      price: '$119/month',
      features: ['AI composition', 'Multiple genres', 'Instrument simulation', 'Royalty-free music', 'Mood matching', 'Collaboration tools'],
      benefits: ['Unlimited compositions', 'Professional quality', 'No copyright issues', 'Genre flexibility'],
      link: '/ai-music-composition',
      popular: false,
      category: 'Creative'
    },
    {
      title: 'AI Fitness Coach Pro',
      description: 'Personalized fitness coaching with AI-powered workout plans, nutrition guidance, and progress tracking',
      icon: '💪',
      price: '$89/month',
      features: ['Personalized workouts', 'Progress tracking', 'Nutrition advice', 'Goal setting', 'Injury prevention', 'Community features'],
      benefits: ['Better results', 'Motivation boost', 'Flexible scheduling', 'Health optimization'],
      link: '/ai-fitness-coach',
      popular: false,
      category: 'Health & Wellness'
    },
    {
      title: 'AI Sales Automation Pro',
      description: 'Boost sales with AI-powered lead generation, conversion optimization, and customer relationship management',
      icon: '💰',
      price: '$199/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'CRM integration', 'Pipeline optimization', 'Performance analytics'],
      benefits: ['35% more leads', '50% conversion increase', '25% revenue growth', 'Better customer relationships'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales'
    },
    {
      title: 'AI Data Visualization Pro',
      description: 'Transform complex data into interactive visualizations with AI-powered insights and storytelling',
      icon: '📊',
      price: '$139/month',
      features: ['Interactive dashboards', 'Real-time visualization', 'Custom charts', 'Data storytelling', 'Automated insights', 'Export options'],
      benefits: ['Faster insights', 'Better decisions', 'Stunning presentations', 'Data democratization'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics'
    },
    {
      title: 'AI 3D Generation Studio',
      description: 'Create 3D models and environments with AI technology for gaming, AR/VR, and architectural visualization',
      icon: '🎮',
      price: '$249/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support', 'Physics simulation', 'Rendering optimization'],
      benefits: ['Professional 3D content', 'Time savings', 'Creative freedom', 'Industry-ready output'],
      link: '/ai-3d-generation',
      popular: false,
      category: '3D & VR'
    },
    {
      title: 'AI Customer Support Pro',
      description: 'Advanced customer support with AI-powered ticket management, sentiment analysis, and knowledge base',
      icon: '🎧',
      price: '$169/month',
      features: ['Ticket automation', 'Sentiment analysis', 'Knowledge base', 'Multi-channel support', 'Escalation management', 'Performance metrics'],
      benefits: ['Faster resolution', 'Higher satisfaction', '24/7 availability', 'Reduced workload'],
      link: '/ai-customer-support',
      popular: true,
      category: 'Support'
    },
    {
      title: 'AI Content Writer Pro',
      description: 'Generate high-quality content with AI-powered writing assistance, SEO optimization, and brand voice consistency',
      icon: '✍️',
      price: '$79/month',
      features: ['Blog posts', 'Social media content', 'Product descriptions', 'SEO optimization', 'Brand voice training', 'Plagiarism detection'],
      benefits: ['10x content output', 'SEO optimized', 'Brand voice consistency', 'Quality assurance'],
      link: '/ai-content-writer',
      popular: true,
      category: 'Content Creation'
    },
    {
      title: 'AI Inventory Manager Pro',
      description: 'Optimize inventory with AI-powered demand forecasting, stock optimization, and supply chain management',
      icon: '📦',
      price: '$149/month',
      features: ['Demand forecasting', 'Stock optimization', 'Reorder alerts', 'Analytics dashboard', 'Supplier management', 'Cost optimization'],
      benefits: ['30% inventory reduction', '99% stock accuracy', 'Zero stockouts', 'Cost savings'],
      link: '/ai-inventory-manager',
      popular: false,
      category: 'Operations'
    },
    {
      title: 'AI HR Assistant Pro',
      description: 'Streamline HR processes with AI-powered recruitment, employee management, and performance analytics',
      icon: '👥',
      price: '$189/month',
      features: ['Resume screening', 'Interview scheduling', 'Employee analytics', 'Performance tracking', 'Bias detection', 'Compliance monitoring'],
      benefits: ['50% faster hiring', 'Better candidate matching', 'Reduced bias', 'Improved retention'],
      link: '/ai-hr-assistant',
      popular: false,
      category: 'HR'
    },
    {
      title: 'AI Financial Advisor Pro',
      description: 'Personalized financial planning with AI-powered investment advice, risk assessment, and portfolio optimization',
      icon: '💼',
      price: '$299/month',
      features: ['Portfolio analysis', 'Risk assessment', 'Tax optimization', 'Retirement planning', 'Market analysis', 'Goal tracking'],
      benefits: ['Better returns', 'Risk management', 'Tax savings', 'Financial security'],
      link: '/ai-financial-advisor',
      popular: false,
      category: 'Finance'
    },
    {
      title: 'AI Legal Assistant Pro',
      description: 'Legal document analysis and contract review with AI technology, compliance checking, and risk assessment',
      icon: '⚖️',
      price: '$399/month',
      features: ['Contract analysis', 'Legal research', 'Document generation', 'Compliance checking', 'Risk assessment', 'Case law analysis'],
      benefits: ['Faster reviews', 'Risk identification', 'Cost savings', 'Compliance assurance'],
      link: '/ai-legal-assistant',
      popular: false,
      category: 'Legal'
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'Optimize your e-commerce store with AI-powered product recommendations, pricing optimization, and conversion tracking',
      icon: '🛒',
      price: '$179/month',
      features: ['Product recommendations', 'Pricing optimization', 'Conversion tracking', 'Customer segmentation', 'Inventory management', 'A/B testing'],
      benefits: ['25% revenue increase', '40% conversion boost', 'Better customer experience', 'Data-driven decisions'],
      link: '/ai-ecommerce-optimizer',
      popular: true,
      category: 'E-commerce'
    },
    {
      title: 'AI Real Estate Assistant',
      description: 'AI-powered property analysis, market insights, and investment recommendations for real estate professionals',
      icon: '🏠',
      price: '$199/month',
      features: ['Property valuation', 'Market analysis', 'Investment recommendations', 'Lead generation', 'Document processing', 'Client management'],
      benefits: ['Faster valuations', 'Better investment decisions', 'More qualified leads', 'Time savings'],
      link: '/ai-real-estate-assistant',
      popular: false,
      category: 'Real Estate'
    },
    {
      title: 'AI Healthcare Assistant',
      description: 'AI-powered patient management, diagnosis support, and treatment recommendations for healthcare providers',
      icon: '🏥',
      price: '$299/month',
      features: ['Patient management', 'Diagnosis support', 'Treatment recommendations', 'Medical records analysis', 'Appointment scheduling', 'Compliance tracking'],
      benefits: ['Improved patient care', 'Faster diagnosis', 'Better outcomes', 'Reduced errors'],
      link: '/ai-healthcare-assistant',
      popular: false,
      category: 'Healthcare'
    },
    {
      title: 'AI Education Platform',
      description: 'Personalized learning experiences with AI-powered curriculum adaptation and progress tracking',
      icon: '🎓',
      price: '$149/month',
      features: ['Personalized learning', 'Progress tracking', 'Adaptive curriculum', 'Assessment tools', 'Parent dashboard', 'Teacher analytics'],
      benefits: ['Better learning outcomes', 'Personalized education', 'Progress visibility', 'Engagement boost'],
      link: '/ai-education-platform',
      popular: false,
      category: 'Education'
    },
    {
      title: 'AI Supply Chain Optimizer',
      description: 'Optimize supply chain operations with AI-powered demand forecasting, route optimization, and risk management',
      icon: '🚚',
      price: '$229/month',
      features: ['Demand forecasting', 'Route optimization', 'Risk management', 'Supplier analytics', 'Cost optimization', 'Sustainability tracking'],
      benefits: ['20% cost reduction', 'Improved efficiency', 'Risk mitigation', 'Sustainability gains'],
      link: '/ai-supply-chain-optimizer',
      popular: false,
      category: 'Supply Chain'
    },
    {
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced threat detection and security monitoring with AI-powered analysis and automated response',
      icon: '🔒',
      price: '$249/month',
      features: ['Threat detection', 'Security monitoring', 'Automated response', 'Vulnerability scanning', 'Incident analysis', 'Compliance reporting'],
      benefits: ['Faster threat detection', 'Reduced security risks', 'Automated response', 'Compliance assurance'],
      link: '/ai-cybersecurity-monitor',
      popular: true,
      category: 'Security'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Comprehensive marketing automation with AI-powered campaign optimization and customer journey mapping',
      icon: '📢',
      price: '$199/month',
      features: ['Campaign automation', 'Customer journey mapping', 'A/B testing', 'Performance analytics', 'Lead nurturing', 'ROI optimization'],
      benefits: ['40% better ROI', 'Automated campaigns', 'Better targeting', 'Increased conversions'],
      link: '/ai-marketing-automation',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Quality Assurance',
      description: 'Automated quality testing and assurance with AI-powered defect detection and process optimization',
      icon: '✅',
      price: '$159/month',
      features: ['Automated testing', 'Defect detection', 'Process optimization', 'Quality metrics', 'Regression testing', 'Performance monitoring'],
      benefits: ['90% defect reduction', 'Faster testing cycles', 'Improved quality', 'Cost savings'],
      link: '/ai-quality-assurance',
      popular: false,
      category: 'Quality Assurance'
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, decision-making, and intelligent automation',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
      benefits: ['40% better predictions', '60% faster insights', 'Custom solutions', 'Scalable architecture'],
      color: 'text-purple-400',
      category: 'Core AI'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Entity Recognition', 'Text Summarization'],
      benefits: ['90% accuracy', 'Multi-language support', 'Real-time processing', 'Custom models'],
      color: 'text-blue-400',
      category: 'Language AI'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and visual intelligence',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'OCR Processing', 'Medical Imaging'],
      benefits: ['95% accuracy', 'Real-time processing', 'Industry-specific models', 'Edge deployment'],
      color: 'text-green-400',
      category: 'Visual AI'
    },
    {
      title: 'AI Automation Platform',
      description: 'Intelligent process automation with decision-making capabilities and workflow optimization',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'RPA Integration', 'Smart Routing'],
      benefits: ['80% automation', '60% cost reduction', 'Error elimination', 'Scalable processes'],
      color: 'text-cyan-400',
      category: 'Automation'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visualizations with AI-powered insights',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Interactive Dashboards', 'Real-time Visualization', 'Custom Charts', 'Data Storytelling', 'Automated Insights', 'Mobile Responsive'],
      benefits: ['Faster insights', 'Better decisions', 'Stunning presentations', 'Data democratization'],
      color: 'text-orange-400',
      category: 'Analytics'
    },
    {
      title: 'AI 3D Generation',
      description: 'Create 3D models and environments with AI technology for gaming, AR/VR, and visualization',
      icon: Cube,
      price: '$1,600/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support', 'Physics Simulation', 'Rendering Optimization'],
      benefits: ['Professional quality', 'Time savings', 'Creative freedom', 'Industry-ready output'],
      color: 'text-pink-400',
      category: '3D & VR'
    },
    {
      title: 'AI Voice Synthesis',
      description: 'Advanced voice cloning, text-to-speech, and voice analysis solutions',
      icon: Mic,
      price: '$1,300/month',
      features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support', 'Voice Analysis', 'Real-time Synthesis'],
      benefits: ['99% voice accuracy', 'Natural speech', 'Multiple languages', 'Real-time processing'],
      color: 'text-indigo-400',
      category: 'Voice AI'
    },
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for marketing, communication, and documentation',
      icon: FileText,
      price: '$1,000/month',
      features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Technical Documentation', 'Creative Writing'],
      benefits: ['10x content output', 'SEO optimized', 'Brand consistency', 'Quality assurance'],
      color: 'text-yellow-400',
      category: 'Content AI'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced forecasting and trend analysis with machine learning and statistical modeling',
      icon: TrendingUp,
      price: '$1,700/month',
      features: ['Sales Forecasting', 'Demand Prediction', 'Risk Assessment', 'Trend Analysis', 'Scenario Planning', 'Market Intelligence'],
      benefits: ['85% accuracy', 'Better planning', 'Risk mitigation', 'Competitive advantage'],
      color: 'text-red-400',
      category: 'Predictive AI'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce, content, and user experience',
      icon: Target,
      price: '$1,400/month',
      features: ['Product Recommendations', 'Content Personalization', 'User Behavior Analysis', 'A/B Testing', 'Real-time Updates', 'Cross-platform Sync'],
      benefits: ['35% conversion increase', 'Better user experience', 'Higher engagement', 'Revenue growth'],
      color: 'text-teal-400',
      category: 'Recommendation AI'
    },
    {
      title: 'AI Fraud Detection',
      description: 'Advanced fraud prevention and security monitoring with real-time threat detection',
      icon: Shield,
      price: '$1,900/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System', 'Behavioral Analysis', 'Compliance Monitoring'],
      benefits: ['99% detection rate', 'False positive reduction', 'Real-time alerts', 'Compliance assurance'],
      color: 'text-red-500',
      category: 'Security AI'
    },
    {
      title: 'AI Document Processing',
      description: 'Intelligent document analysis, data extraction, and automated document management',
      icon: Search,
      price: '$1,200/month',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Form Recognition', 'Contract Analysis', 'Compliance Checking'],
      benefits: ['95% accuracy', 'Faster processing', 'Cost reduction', 'Error elimination'],
      color: 'text-gray-400',
      category: 'Document AI'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Medical AI solutions for diagnosis support, treatment recommendations, and patient care',
      icon: Stethoscope,
      price: '$2,500/month',
      features: ['Diagnosis Support', 'Medical Imaging Analysis', 'Treatment Recommendations', 'Patient Monitoring', 'Drug Discovery', 'Clinical Trials'],
      benefits: ['Improved accuracy', 'Faster diagnosis', 'Better outcomes', 'Cost savings'],
      color: 'text-emerald-400',
      category: 'Healthcare AI'
    },
    {
      title: 'AI Financial Services',
      description: 'Financial AI solutions for trading, risk management, and investment optimization',
      icon: DollarSign,
      price: '$2,200/month',
      features: ['Algorithmic Trading', 'Risk Management', 'Credit Scoring', 'Fraud Detection', 'Portfolio Optimization', 'Market Analysis'],
      benefits: ['Better returns', 'Risk reduction', 'Automated trading', 'Market insights'],
      color: 'text-yellow-500',
      category: 'FinTech AI'
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'Supply chain AI for demand forecasting, logistics optimization, and inventory management',
      icon: Truck,
      price: '$1,800/month',
      features: ['Demand Forecasting', 'Route Optimization', 'Inventory Management', 'Supplier Analytics', 'Risk Assessment', 'Sustainability Tracking'],
      benefits: ['20% cost reduction', 'Improved efficiency', 'Risk mitigation', 'Sustainability gains'],
      color: 'text-blue-500',
      category: 'Supply Chain AI'
    },
    {
      title: 'AI Quality Assurance',
      description: 'Automated quality testing and assurance with AI-powered defect detection and optimization',
      icon: CheckCircle,
      price: '$1,300/month',
      features: ['Automated Testing', 'Defect Detection', 'Process Optimization', 'Quality Metrics', 'Regression Testing', 'Performance Monitoring'],
      benefits: ['90% defect reduction', 'Faster testing', 'Improved quality', 'Cost savings'],
      color: 'text-green-500',
      category: 'Quality AI'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Services & Migration',
      description: 'Comprehensive cloud migration, setup, optimization, and management services across all major platforms',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Multi-cloud Strategy', 'Disaster Recovery'],
      benefits: ['40% cost reduction', '99.9% uptime', 'Scalable infrastructure', 'Enhanced security'],
      color: 'text-blue-400',
      category: 'Cloud Computing'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions with threat detection, prevention, and incident response capabilities',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing', 'Compliance Auditing'],
      benefits: ['99% threat detection', 'Faster response times', 'Compliance assurance', 'Risk reduction'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring solutions',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'GitOps Workflows'],
      benefits: ['50% faster deployments', '90% fewer errors', 'Automated processes', 'Better collaboration'],
      color: 'text-green-400',
      category: 'DevOps'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and performance monitoring',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'AI-powered Optimization', 'Real-time Monitoring'],
      benefits: ['60% performance boost', 'Zero data loss', 'Automated optimization', 'Cost savings'],
      color: 'text-purple-400',
      category: 'Database'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting for digital transformation, technology assessment, and process optimization',
      icon: Briefcase,
      price: '$1,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'ROI Analysis', 'Change Management'],
      benefits: ['Better technology decisions', 'Cost optimization', 'Improved efficiency', 'Competitive advantage'],
      color: 'text-yellow-400',
      category: 'Consulting'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design and implement robust network infrastructure solutions with security and performance optimization',
      icon: Globe,
      price: '$1,400/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring', 'SD-WAN Solutions', 'Network Automation'],
      benefits: ['99.9% uptime', 'Enhanced security', 'Better performance', 'Reduced costs'],
      color: 'text-indigo-400',
      category: 'Networking'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development with modern frameworks and best practices',
      icon: Smartphone,
      price: '$1,500/month',
      features: ['iOS/Android Apps', 'Cross-platform Development', 'UI/UX Design', 'App Store Optimization', 'Push Notifications', 'Analytics Integration'],
      benefits: ['Faster time to market', 'Better user experience', 'Cross-platform efficiency', 'App store success'],
      color: 'text-pink-400',
      category: 'Mobile Development'
    },
    {
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies, performance optimization, and responsive design',
      icon: Code,
      price: '$1,200/month',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization', 'Progressive Web Apps', 'SEO Optimization'],
      benefits: ['Faster loading times', 'Better user experience', 'SEO optimized', 'Mobile responsive'],
      color: 'text-cyan-400',
      category: 'Web Development'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Business intelligence and data analytics solutions with AI-powered insights and real-time reporting',
      icon: BarChart,
      price: '$1,300/month',
      features: ['Data Warehousing', 'Business Intelligence', 'Reporting Dashboards', 'Data Mining', 'Predictive Analytics', 'Real-time Processing'],
      benefits: ['Better decisions', 'Faster insights', 'Data-driven culture', 'Competitive advantage'],
      color: 'text-orange-400',
      category: 'Data & Analytics'
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support and system maintenance services with proactive monitoring and management',
      icon: Wrench,
      price: '$800/month',
      features: ['24/7 Support', 'System Maintenance', 'Software Updates', 'Hardware Management', 'Proactive Monitoring', 'Help Desk Services'],
      benefits: ['Reduced downtime', 'Faster resolution', 'Proactive maintenance', 'Cost predictability'],
      color: 'text-gray-400',
      category: 'Support'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Blockchain development and cryptocurrency solutions with smart contracts and DeFi applications',
      icon: Lock,
      price: '$2,000/month',
      features: ['Smart Contracts', 'DApp Development', 'Token Creation', 'DeFi Solutions', 'NFT Platforms', 'Blockchain Integration'],
      benefits: ['Transparent transactions', 'Reduced costs', 'Enhanced security', 'New business models'],
      color: 'text-yellow-500',
      category: 'Blockchain'
    },
    {
      title: 'IoT Solutions',
      description: 'Internet of Things development and implementation with edge computing and real-time analytics',
      icon: Cpu,
      price: '$1,600/month',
      features: ['IoT Device Development', 'Sensor Integration', 'Data Collection', 'Real-time Monitoring', 'Edge Computing', 'Predictive Maintenance'],
      benefits: ['Operational efficiency', 'Cost reduction', 'Predictive insights', 'Automated processes'],
      color: 'text-green-500',
      category: 'IoT'
    },
    {
      title: 'AI Infrastructure',
      description: 'AI infrastructure setup, GPU clusters, and machine learning platform deployment and management',
      icon: Brain,
      price: '$2,500/month',
      features: ['GPU Cluster Setup', 'ML Platform Deployment', 'Model Training Infrastructure', 'AI Pipeline Management', 'Edge AI Deployment', 'Performance Optimization'],
      benefits: ['Faster AI development', 'Scalable infrastructure', 'Cost optimization', 'Better performance'],
      color: 'text-purple-500',
      category: 'AI Infrastructure'
    },
    {
      title: 'Enterprise Integration',
      description: 'Enterprise system integration, API management, and legacy system modernization services',
      icon: Link,
      price: '$1,800/month',
      features: ['System Integration', 'API Management', 'Legacy Modernization', 'Data Synchronization', 'Workflow Automation', 'Real-time Processing'],
      benefits: ['Improved efficiency', 'Better data flow', 'Reduced complexity', 'Cost savings'],
      color: 'text-cyan-500',
      category: 'Integration'
    },
    {
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation services including strategy, implementation, and change management',
      icon: RefreshCw,
      price: '$2,200/month',
      features: ['Digital Strategy', 'Process Digitization', 'Technology Modernization', 'Change Management', 'Training & Support', 'ROI Measurement'],
      benefits: ['Competitive advantage', 'Improved efficiency', 'Better customer experience', 'Future-ready business'],
      color: 'text-indigo-500',
      category: 'Digital Transformation'
    },
    {
      title: 'Compliance & Governance',
      description: 'IT compliance, governance, and regulatory adherence services for various industry standards',
      icon: FileCheck,
      price: '$1,400/month',
      features: ['Compliance Auditing', 'Governance Framework', 'Risk Assessment', 'Policy Development', 'Training Programs', 'Audit Support'],
      benefits: ['Regulatory compliance', 'Risk mitigation', 'Audit readiness', 'Peace of mind'],
      color: 'text-emerald-500',
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto mb-12">
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
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

          {/* Pricing & Benefits Section */}
          <section className="mb-16" aria-labelledby="pricing-heading">
            <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Zion Tech Group?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Proven ROI</h3>
                <p className="text-gray-300 mb-4">Our clients see an average 300% ROI within the first year of implementation</p>
                <div className="text-2xl font-bold text-cyan-400">300% ROI</div>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Cost Savings</h3>
                <p className="text-gray-300 mb-4">Reduce operational costs by up to 70% with our AI-powered automation</p>
                <div className="text-2xl font-bold text-green-400">70% Cost Reduction</div>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Efficiency Gains</h3>
                <p className="text-gray-300 mb-4">Boost productivity by 90% with intelligent process automation</p>
                <div className="text-2xl font-bold text-purple-400">90% Efficiency Boost</div>
              </div>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">Market-Leading Pricing</h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                Our competitive pricing starts from just $79/month for micro SAAS solutions, with enterprise AI services beginning at $1,000/month. 
                All plans include 24/7 support, regular updates, and comprehensive training.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">$79</div>
                  <div className="text-gray-300">Micro SAAS Starting</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">$1,000</div>
                  <div className="text-gray-300">AI Services Starting</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">$800</div>
                  <div className="text-gray-300">IT Services Starting</div>
                </div>
              </div>
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