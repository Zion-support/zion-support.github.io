'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Atom, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
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
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Budget optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Legal Document Analyzer',
      description: 'Advanced AI-powered legal document analysis and contract review with compliance checking',
      icon: '⚖️',
      price: '$399/month',
      features: ['Contract analysis', 'Compliance checking', 'Risk assessment', 'Legal research', 'Document comparison', 'Automated summaries'],
      benefits: ['90% time savings', '99% accuracy', 'Risk mitigation', 'Cost reduction'],
      link: '/ai-legal-analyzer',
      popular: true,
      category: 'Legal'
    },
    {
      title: 'AI Real Estate Assistant',
      description: 'Comprehensive real estate analysis, market predictions, and property valuation using AI',
      icon: '🏠',
      price: '$299/month',
      features: ['Property valuation', 'Market analysis', 'Investment insights', 'Price predictions', 'Neighborhood data', 'ROI calculations'],
      benefits: ['Accurate valuations', 'Market insights', 'Investment guidance', 'Time savings'],
      link: '/ai-real-estate',
      popular: true,
      category: 'Real Estate'
    },
    {
      title: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with predictive analytics and optimization',
      icon: '🚚',
      price: '$499/month',
      features: ['Demand forecasting', 'Inventory optimization', 'Supplier analysis', 'Risk management', 'Cost optimization', 'Performance tracking'],
      benefits: ['25% cost reduction', '30% efficiency gain', 'Risk mitigation', 'Better planning'],
      link: '/ai-supply-chain',
      popular: true,
      category: 'Logistics'
    },
    {
      title: 'AI HR Recruiter Pro',
      description: 'AI-powered recruitment and talent acquisition with intelligent candidate matching',
      icon: '👥',
      price: '$349/month',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Skills assessment', 'Background checks', 'Onboarding automation'],
      benefits: ['60% faster hiring', 'Better candidate quality', 'Reduced bias', 'Cost savings'],
      link: '/ai-hr-recruiter',
      popular: true,
      category: 'HR'
    },
    {
      title: 'AI Energy Management',
      description: 'Smart energy consumption monitoring and optimization for businesses and homes',
      icon: '⚡',
      price: '$199/month',
      features: ['Energy monitoring', 'Usage optimization', 'Cost analysis', 'Predictive maintenance', 'Carbon tracking', 'Smart controls'],
      benefits: ['30% energy savings', 'Cost reduction', 'Sustainability', 'Smart automation'],
      link: '/ai-energy-management',
      popular: false,
      category: 'Energy'
    },
    {
      title: 'AI Travel Planner',
      description: 'Intelligent travel planning with personalized recommendations and cost optimization',
      icon: '✈️',
      price: '$149/month',
      features: ['Trip planning', 'Price optimization', 'Itinerary creation', 'Booking automation', 'Travel alerts', 'Expense tracking'],
      benefits: ['Time savings', 'Cost optimization', 'Better experiences', 'Automated booking'],
      link: '/ai-travel-planner',
      popular: true,
      category: 'Travel'
    },
    {
      title: 'AI Event Management',
      description: 'Comprehensive event planning and management with AI-powered optimization',
      icon: '🎉',
      price: '$299/month',
      features: ['Event planning', 'Vendor management', 'Guest management', 'Budget tracking', 'Timeline optimization', 'Post-event analytics'],
      benefits: ['Streamlined planning', 'Cost control', 'Better execution', 'Data insights'],
      link: '/ai-event-management',
      popular: false,
      category: 'Events'
    },
    {
      title: 'AI Inventory Tracker',
      description: 'Smart inventory management with predictive analytics and automated reordering',
      icon: '📦',
      price: '$249/month',
      features: ['Real-time tracking', 'Predictive analytics', 'Automated reordering', 'Waste reduction', 'Cost optimization', 'Multi-location support'],
      benefits: ['Reduced waste', 'Cost savings', 'Better planning', 'Automated management'],
      link: '/ai-inventory-tracker',
      popular: true,
      category: 'Inventory'
    },
    {
      title: 'AI Customer Feedback Analyzer',
      description: 'Advanced sentiment analysis and customer feedback processing for business insights',
      icon: '💬',
      price: '$179/month',
      features: ['Sentiment analysis', 'Feedback categorization', 'Trend identification', 'Action recommendations', 'Multi-channel support', 'Real-time alerts'],
      benefits: ['Better insights', 'Improved satisfaction', 'Proactive management', 'Data-driven decisions'],
      link: '/ai-feedback-analyzer',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI Compliance Monitor',
      description: 'Automated compliance monitoring and reporting for various industry regulations',
      icon: '📋',
      price: '$399/month',
      features: ['Regulatory monitoring', 'Compliance reporting', 'Risk assessment', 'Audit preparation', 'Policy updates', 'Training modules'],
      benefits: ['Reduced risk', 'Automated reporting', 'Cost savings', 'Peace of mind'],
      link: '/ai-compliance-monitor',
      popular: false,
      category: 'Compliance'
    },
    {
      title: 'AI Translation Pro',
      description: 'Advanced AI-powered translation with context understanding and industry-specific terminology',
      icon: '🌐',
      price: '$199/month',
      features: ['100+ languages', 'Context understanding', 'Industry terminology', 'Real-time translation', 'Document processing', 'Voice translation'],
      benefits: ['Accurate translations', 'Time savings', 'Global reach', 'Professional quality'],
      link: '/ai-translation-pro',
      popular: true,
      category: 'Communication'
    },
    {
      title: 'AI Weather Predictor',
      description: 'Advanced weather prediction and climate analysis for business planning and agriculture',
      icon: '🌤️',
      price: '$149/month',
      features: ['Weather forecasting', 'Climate analysis', 'Risk assessment', 'Agricultural insights', 'Business planning', 'Alert systems'],
      benefits: ['Better planning', 'Risk mitigation', 'Cost savings', 'Accurate predictions'],
      link: '/ai-weather-predictor',
      popular: false,
      category: 'Analytics'
    },
    {
      title: 'AI Tax Optimizer',
      description: 'Intelligent tax planning and optimization for businesses and individuals',
      icon: '💰',
      price: '$299/month',
      features: ['Tax planning', 'Deduction optimization', 'Compliance checking', 'Filing automation', 'Audit protection', 'Multi-jurisdiction support'],
      benefits: ['Tax savings', 'Compliance assurance', 'Time savings', 'Audit protection'],
      link: '/ai-tax-optimizer',
      popular: true,
      category: 'Finance'
    },
    {
      title: 'AI Learning Management',
      description: 'AI-powered learning platform with personalized education and skill development',
      icon: '🎓',
      price: '$199/month',
      features: ['Personalized learning', 'Progress tracking', 'Skill assessment', 'Content curation', 'Certification management', 'Analytics dashboard'],
      benefits: ['Better learning outcomes', 'Personalized experience', 'Progress tracking', 'Skill development'],
      link: '/ai-learning-management',
      popular: true,
      category: 'Education'
    },
    {
      title: 'AI Restaurant Manager',
      description: 'Complete restaurant management solution with AI-powered operations optimization',
      icon: '🍽️',
      price: '$349/month',
      features: ['Menu optimization', 'Inventory management', 'Staff scheduling', 'Customer analytics', 'Cost control', 'Quality monitoring'],
      benefits: ['Increased efficiency', 'Cost reduction', 'Better service', 'Data insights'],
      link: '/ai-restaurant-manager',
      popular: false,
      category: 'Hospitality'
    },
    {
      title: 'AI Fleet Management',
      description: 'Intelligent fleet tracking and management with predictive maintenance and optimization',
      icon: '🚛',
      price: '$399/month',
      features: ['Fleet tracking', 'Route optimization', 'Predictive maintenance', 'Driver monitoring', 'Fuel optimization', 'Performance analytics'],
      benefits: ['Cost reduction', 'Better efficiency', 'Safety improvement', 'Maintenance optimization'],
      link: '/ai-fleet-management',
      popular: true,
      category: 'Logistics'
    },
    {
      title: 'AI Insurance Analyzer',
      description: 'AI-powered insurance analysis and risk assessment for better coverage decisions',
      icon: '🛡️',
      price: '$249/month',
      features: ['Policy analysis', 'Risk assessment', 'Coverage optimization', 'Claims processing', 'Fraud detection', 'Premium optimization'],
      benefits: ['Better coverage', 'Cost savings', 'Risk mitigation', 'Fraud prevention'],
      link: '/ai-insurance-analyzer',
      popular: false,
      category: 'Insurance'
    },
    {
      title: 'AI Construction Manager',
      description: 'Smart construction project management with AI-powered scheduling and resource optimization',
      icon: '🏗️',
      price: '$499/month',
      features: ['Project scheduling', 'Resource optimization', 'Safety monitoring', 'Progress tracking', 'Cost control', 'Quality assurance'],
      benefits: ['Project efficiency', 'Cost control', 'Safety improvement', 'Timely delivery'],
      link: '/ai-construction-manager',
      popular: true,
      category: 'Construction'
    },
    {
      title: 'AI Healthcare Assistant',
      description: 'AI-powered healthcare management with patient monitoring and treatment optimization',
      icon: '🏥',
      price: '$599/month',
      features: ['Patient monitoring', 'Treatment optimization', 'Diagnostic assistance', 'Appointment scheduling', 'Medical records', 'Compliance tracking'],
      benefits: ['Better patient care', 'Improved outcomes', 'Efficiency gains', 'Cost reduction'],
      link: '/ai-healthcare-assistant',
      popular: true,
      category: 'Healthcare'
    },
    {
      title: 'AI Agriculture Optimizer',
      description: 'Smart farming solutions with AI-powered crop monitoring and yield optimization',
      icon: '🌾',
      price: '$299/month',
      features: ['Crop monitoring', 'Yield prediction', 'Soil analysis', 'Weather integration', 'Pest detection', 'Resource optimization'],
      benefits: ['Increased yields', 'Resource efficiency', 'Cost reduction', 'Sustainable farming'],
      link: '/ai-agriculture-optimizer',
      popular: false,
      category: 'Agriculture'
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
      title: 'AI Research & Development',
      description: 'Cutting-edge AI research and development for next-generation solutions',
      icon: Atom,
      price: '$5,000/month',
      features: ['Advanced Research', 'Algorithm Development', 'Prototype Creation', 'Technology Innovation', 'Patent Development', 'Academic Collaboration'],
      color: 'text-yellow-400',
      benefits: ['Competitive advantage', 'Future-proof technology', 'Innovation leadership', 'Market differentiation']
    },
    {
      title: 'AI Ethics & Governance',
      description: 'Comprehensive AI ethics framework and governance solutions for responsible AI deployment',
      icon: Shield,
      price: '$3,500/month',
      features: ['Ethics Framework', 'Bias Detection', 'Fairness Auditing', 'Transparency Tools', 'Compliance Monitoring', 'Stakeholder Education'],
      color: 'text-green-400',
      benefits: ['Risk mitigation', 'Regulatory compliance', 'Trust building', 'Responsible AI']
    },
    {
      title: 'AI Edge Computing',
      description: 'Deploy AI models at the edge for real-time processing and reduced latency',
      icon: Cpu,
      price: '$2,800/month',
      features: ['Edge Deployment', 'Real-time Processing', 'Low Latency', 'Offline Capability', 'Resource Optimization', 'Security Hardening'],
      color: 'text-cyan-400',
      benefits: ['Faster processing', 'Reduced costs', 'Better privacy', 'Offline operation']
    },
    {
      title: 'AI Data Engineering',
      description: 'Advanced data engineering and pipeline development for AI applications',
      icon: Database,
      price: '$2,200/month',
      features: ['Data Pipeline Design', 'ETL/ELT Processes', 'Data Quality Management', 'Real-time Streaming', 'Data Lake Architecture', 'API Development'],
      color: 'text-blue-400',
      benefits: ['Scalable data infrastructure', 'Data quality assurance', 'Real-time processing', 'Cost optimization']
    },
    {
      title: 'AI Model Operations (MLOps)',
      description: 'End-to-end MLOps platform for model deployment, monitoring, and management',
      icon: Settings,
      price: '$3,000/month',
      features: ['Model Deployment', 'Version Control', 'Performance Monitoring', 'Automated Retraining', 'A/B Testing', 'Rollback Capabilities'],
      color: 'text-orange-400',
      benefits: ['Faster deployment', 'Better reliability', 'Automated management', 'Continuous improvement']
    },
    {
      title: 'AI Conversational Intelligence',
      description: 'Advanced conversational AI with natural language understanding and generation',
      icon: MessageSquare,
      price: '$2,600/month',
      features: ['NLP Processing', 'Intent Recognition', 'Context Management', 'Multi-language Support', 'Voice Integration', 'Sentiment Analysis'],
      color: 'text-pink-400',
      benefits: ['Natural interactions', 'Better user experience', 'Multi-language support', 'Context awareness']
    },
    {
      title: 'AI Predictive Maintenance',
      description: 'Intelligent predictive maintenance solutions for industrial equipment and machinery',
      icon: Wrench,
      price: '$3,200/month',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Safety Alerts', 'Performance Analytics'],
      color: 'text-red-400',
      benefits: ['Reduced downtime', 'Cost savings', 'Safety improvement', 'Optimized maintenance']
    },
    {
      title: 'AI Fraud Detection',
      description: 'Advanced fraud detection and prevention systems using machine learning',
      icon: Lock,
      price: '$2,900/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Anomaly Detection', 'Behavioral Analysis', 'Alert Management'],
      color: 'text-red-400',
      benefits: ['Real-time protection', 'Reduced false positives', 'Cost savings', 'Risk mitigation']
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Intelligent recommendation systems for personalized user experiences',
      icon: Target,
      price: '$2,400/month',
      features: ['Personalization', 'Collaborative Filtering', 'Content-based Filtering', 'Real-time Updates', 'A/B Testing', 'Performance Analytics'],
      color: 'text-purple-400',
      benefits: ['Increased engagement', 'Better conversion', 'Personalized experience', 'Revenue growth']
    },
    {
      title: 'AI Time Series Analysis',
      description: 'Advanced time series forecasting and analysis for business intelligence',
      icon: TrendingUp,
      price: '$2,100/month',
      features: ['Forecasting Models', 'Seasonality Detection', 'Anomaly Detection', 'Trend Analysis', 'Confidence Intervals', 'Real-time Updates'],
      color: 'text-emerald-400',
      benefits: ['Accurate forecasting', 'Better planning', 'Risk mitigation', 'Data-driven decisions']
    },
    {
      title: 'AI Image Recognition',
      description: 'Advanced computer vision and image recognition solutions',
      icon: Eye,
      price: '$2,300/month',
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'OCR Processing', 'Quality Assessment', 'Real-time Processing'],
      color: 'text-green-400',
      benefits: ['High accuracy', 'Real-time processing', 'Multi-format support', 'Scalable solutions']
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
      title: 'AI-Powered Infrastructure',
      description: 'Intelligent infrastructure management with AI-driven optimization and automation',
      icon: Cpu,
      price: '$3,500/month',
      features: ['AI Monitoring', 'Predictive Scaling', 'Automated Optimization', 'Smart Resource Allocation', 'Performance Tuning', 'Cost Intelligence'],
      color: 'text-purple-400',
      benefits: ['40% cost reduction', '99.99% uptime', 'Automated management', 'Predictive maintenance']
    },
    {
      title: 'Quantum-Safe Security',
      description: 'Next-generation security solutions designed to resist quantum computing attacks',
      icon: Shield,
      price: '$4,500/month',
      features: ['Quantum Cryptography', 'Post-Quantum Algorithms', 'Key Management', 'Threat Detection', 'Compliance Assurance', 'Future-Proofing'],
      color: 'text-yellow-400',
      benefits: ['Future-proof security', 'Quantum resistance', 'Advanced protection', 'Regulatory compliance']
    },
    {
      title: 'Edge Computing Solutions',
      description: 'Distributed computing infrastructure for low-latency, high-performance applications',
      icon: Globe,
      price: '$2,800/month',
      features: ['Edge Deployment', 'CDN Integration', 'Local Processing', 'Real-time Analytics', 'IoT Connectivity', 'Bandwidth Optimization'],
      color: 'text-cyan-400',
      benefits: ['Reduced latency', 'Better performance', 'Cost efficiency', 'Global reach']
    },
    {
      title: 'Hybrid Cloud Management',
      description: 'Seamless management of hybrid cloud environments across multiple providers',
      icon: Cloud,
      price: '$2,600/month',
      features: ['Multi-Cloud Orchestration', 'Workload Portability', 'Unified Management', 'Cost Optimization', 'Security Compliance', 'Disaster Recovery'],
      color: 'text-green-400',
      benefits: ['Vendor flexibility', 'Cost optimization', 'Risk mitigation', 'Unified control']
    },
    {
      title: 'AI DevOps Platform',
      description: 'Intelligent DevOps platform with AI-powered automation and optimization',
      icon: Settings,
      price: '$3,200/month',
      features: ['AI-Powered CI/CD', 'Automated Testing', 'Smart Deployment', 'Performance Monitoring', 'Anomaly Detection', 'Self-Healing Systems'],
      color: 'text-orange-400',
      benefits: ['Faster deployments', 'Reduced errors', 'Automated recovery', 'Continuous optimization']
    },
    {
      title: 'Zero-Trust Architecture',
      description: 'Comprehensive zero-trust security model implementation and management',
      icon: Lock,
      price: '$2,900/month',
      features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Risk Assessment', 'Policy Enforcement', 'Threat Response'],
      color: 'text-red-400',
      benefits: ['Enhanced security', 'Reduced attack surface', 'Compliance assurance', 'Risk mitigation']
    },
    {
      title: 'Data Center Modernization',
      description: 'Complete data center transformation with modern infrastructure and automation',
      icon: Building,
      price: '$4,000/month',
      features: ['Infrastructure Upgrade', 'Automation Implementation', 'Energy Optimization', 'Security Hardening', 'Capacity Planning', 'Migration Services'],
      color: 'text-indigo-400',
      benefits: ['Modern infrastructure', 'Energy efficiency', 'Improved security', 'Scalable architecture']
    },
    {
      title: 'Network Security Operations Center (SOC)',
      description: '24/7 security monitoring and incident response with AI-powered threat detection',
      icon: Eye,
      price: '$3,800/month',
      features: ['24/7 Monitoring', 'Threat Detection', 'Incident Response', 'Forensic Analysis', 'Compliance Reporting', 'Security Training'],
      color: 'text-pink-400',
      benefits: ['Continuous protection', 'Rapid response', 'Expert analysis', 'Compliance assurance']
    },
    {
      title: 'API Management Platform',
      description: 'Comprehensive API lifecycle management with security, monitoring, and analytics',
      icon: Code,
      price: '$2,400/month',
      features: ['API Gateway', 'Security Policies', 'Rate Limiting', 'Analytics Dashboard', 'Developer Portal', 'Version Management'],
      color: 'text-blue-400',
      benefits: ['Secure APIs', 'Better performance', 'Developer experience', 'API governance']
    },
    {
      title: 'Disaster Recovery as a Service (DRaaS)',
      description: 'Comprehensive disaster recovery solutions with automated failover and testing',
      icon: Shield,
      price: '$2,700/month',
      features: ['Automated Backup', 'Failover Testing', 'RTO/RPO Optimization', 'Multi-Site Replication', 'Recovery Planning', 'Compliance Assurance'],
      color: 'text-emerald-400',
      benefits: ['Business continuity', 'Minimal downtime', 'Automated recovery', 'Compliance ready']
    },
    {
      title: 'IT Service Management (ITSM)',
      description: 'Comprehensive IT service management with AI-powered automation and optimization',
      icon: Users,
      price: '$2,100/month',
      features: ['Service Desk', 'Incident Management', 'Change Management', 'Asset Management', 'Knowledge Base', 'Performance Analytics'],
      color: 'text-violet-400',
      benefits: ['Improved efficiency', 'Better service quality', 'Cost optimization', 'User satisfaction']
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
      title: 'Neural Interface Technology',
      description: 'Advanced brain-computer interface solutions for medical and research applications',
      icon: Brain,
      price: 'Custom Pricing',
      features: ['Neural Signal Processing', 'Brain-Computer Interface', 'Medical Applications', 'Research Tools', 'Rehabilitation Systems', 'Cognitive Enhancement'],
      color: 'text-purple-400',
      benefits: ['Medical breakthroughs', 'Research advancement', 'Quality of life improvement', 'Cutting-edge technology'],
      category: 'Neural'
    },
    {
      title: 'Space Technology Solutions',
      description: 'Satellite communication, space data processing, and space-based AI systems',
      icon: Globe,
      price: 'Custom Pricing',
      features: ['Satellite Communication', 'Space Data Analytics', 'Orbital Computing', 'Space Weather Monitoring', 'Earth Observation', 'Space AI Systems'],
      color: 'text-cyan-400',
      benefits: ['Global connectivity', 'Space insights', 'Advanced monitoring', 'Future technology'],
      category: 'Space'
    },
    {
      title: 'Biometric Security Systems',
      description: 'Advanced biometric authentication and identity verification solutions',
      icon: Eye,
      price: '$3,500/month',
      features: ['Facial Recognition', 'Fingerprint Analysis', 'Iris Scanning', 'Voice Recognition', 'Behavioral Biometrics', 'Multi-Modal Authentication'],
      color: 'text-green-400',
      benefits: ['Enhanced security', 'User convenience', 'Fraud prevention', 'Scalable solutions'],
      category: 'Security'
    },
    {
      title: 'Digital Twin Technology',
      description: 'Virtual replicas of physical systems for simulation, monitoring, and optimization',
      icon: Cpu,
      price: '$4,200/month',
      features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'Performance Monitoring', 'What-if Analysis', 'Optimization Engine'],
      color: 'text-blue-400',
      benefits: ['Better decision making', 'Risk reduction', 'Cost optimization', 'Innovation acceleration'],
      category: 'Simulation'
    },
    {
      title: 'Augmented Reality (AR) Solutions',
      description: 'Immersive AR applications for training, maintenance, and customer experience',
      icon: Eye,
      price: '$2,800/month',
      features: ['AR Applications', '3D Visualization', 'Interactive Training', 'Remote Assistance', 'Product Visualization', 'Spatial Computing'],
      color: 'text-pink-400',
      benefits: ['Enhanced training', 'Better customer experience', 'Remote collaboration', 'Innovative solutions'],
      category: 'AR/VR'
    },
    {
      title: 'Virtual Reality (VR) Platforms',
      description: 'Immersive VR experiences for training, simulation, and virtual collaboration',
      icon: Eye,
      price: '$3,200/month',
      features: ['VR Applications', 'Virtual Environments', 'Collaborative Spaces', 'Training Simulations', 'Virtual Events', 'Haptic Feedback'],
      color: 'text-indigo-400',
      benefits: ['Immersive experiences', 'Remote collaboration', 'Cost-effective training', 'Innovative engagement'],
      category: 'AR/VR'
    },
    {
      title: '5G Network Solutions',
      description: 'Next-generation 5G network deployment and optimization services',
      icon: Globe,
      price: '$3,800/month',
      features: ['5G Deployment', 'Network Optimization', 'Edge Computing', 'IoT Connectivity', 'Low Latency', 'High Bandwidth'],
      color: 'text-emerald-400',
      benefits: ['Ultra-fast connectivity', 'Low latency', 'Massive IoT support', 'Future-ready infrastructure'],
      category: 'Telecom'
    },
    {
      title: 'Smart City Solutions',
      description: 'Comprehensive smart city infrastructure and management systems',
      icon: Building,
      price: 'Custom Pricing',
      features: ['IoT Integration', 'Traffic Management', 'Energy Optimization', 'Public Safety', 'Environmental Monitoring', 'Citizen Services'],
      color: 'text-orange-400',
      benefits: ['Improved efficiency', 'Better quality of life', 'Sustainability', 'Data-driven decisions'],
      category: 'Smart City'
    },
    {
      title: 'Autonomous Vehicle Systems',
      description: 'AI-powered autonomous vehicle technology and fleet management solutions',
      icon: Car,
      price: 'Custom Pricing',
      features: ['Autonomous Driving', 'Fleet Management', 'Safety Systems', 'Route Optimization', 'Predictive Maintenance', 'Real-time Monitoring'],
      color: 'text-red-400',
      benefits: ['Enhanced safety', 'Efficiency gains', 'Cost reduction', 'Future mobility'],
      category: 'Automotive'
    },
    {
      title: 'Precision Medicine Platform',
      description: 'AI-powered personalized medicine and treatment optimization systems',
      icon: Stethoscope,
      price: '$5,500/month',
      features: ['Genomic Analysis', 'Treatment Optimization', 'Drug Discovery', 'Clinical Trials', 'Patient Monitoring', 'Outcome Prediction'],
      color: 'text-pink-400',
      benefits: ['Personalized treatment', 'Better outcomes', 'Faster drug development', 'Precision healthcare'],
      category: 'Healthcare'
    },
    {
      title: 'Climate Tech Solutions',
      description: 'AI-powered climate monitoring, prediction, and mitigation technologies',
      icon: Globe,
      price: '$3,600/month',
      features: ['Climate Modeling', 'Carbon Tracking', 'Renewable Energy', 'Environmental Monitoring', 'Sustainability Analytics', 'Green Technology'],
      color: 'text-green-400',
      benefits: ['Environmental impact', 'Sustainability', 'Cost savings', 'Regulatory compliance'],
      category: 'Climate'
    },
    {
      title: 'Advanced Robotics',
      description: 'Intelligent robotic systems for manufacturing, healthcare, and service industries',
      icon: Settings,
      price: 'Custom Pricing',
      features: ['Industrial Robotics', 'Service Robots', 'Medical Robotics', 'Collaborative Robots', 'AI Integration', 'Human-Robot Interaction'],
      color: 'text-cyan-400',
      benefits: ['Increased productivity', 'Improved safety', 'Cost efficiency', '24/7 operation'],
      category: 'Robotics'
    },
    {
      title: 'Metaverse Development',
      description: 'Comprehensive metaverse platform development and virtual world creation',
      icon: Globe,
      price: 'Custom Pricing',
      features: ['Virtual Worlds', 'Avatar Systems', 'Virtual Economy', 'Social Features', 'NFT Integration', 'Cross-Platform Support'],
      color: 'text-purple-400',
      benefits: ['Immersive experiences', 'New revenue streams', 'Global reach', 'Future technology'],
      category: 'Metaverse'
    },
    {
      title: 'Advanced Materials AI',
      description: 'AI-powered materials discovery and optimization for next-generation products',
      icon: Atom,
      price: '$4,800/month',
      features: ['Materials Discovery', 'Property Prediction', 'Optimization Algorithms', 'Simulation Tools', 'Quality Control', 'Innovation Pipeline'],
      color: 'text-yellow-400',
      benefits: ['Faster innovation', 'Better materials', 'Cost reduction', 'Competitive advantage'],
      category: 'Materials'
    },
    {
      title: 'Synthetic Biology Platform',
      description: 'AI-driven synthetic biology solutions for biotechnology and pharmaceutical applications',
      icon: Stethoscope,
      price: 'Custom Pricing',
      features: ['DNA Design', 'Protein Engineering', 'Biological Systems', 'Drug Development', 'Bioprocessing', 'Quality Control'],
      color: 'text-green-400',
      benefits: ['Faster development', 'Better products', 'Cost efficiency', 'Innovation acceleration'],
      category: 'Biotech'
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