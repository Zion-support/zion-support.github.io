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
      link: '/ai-analytics',
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
      title: 'AI Video Generator',
      description: 'Create professional videos with AI-powered editing and content generation',
      icon: '🎥',
      price: '$199/month',
      features: ['AI video editing', 'Auto-generated content', 'Voice synthesis', 'Multi-language support'],
      benefits: ['90% time reduction', 'Professional quality', 'Unlimited exports'],
      link: '/ai-video-generation',
      popular: true
    },
    {
      title: 'AI Voice Cloning',
      description: 'Create realistic voice clones for content creation and accessibility',
      icon: '🎤',
      price: '$129/month',
      features: ['High-quality voice cloning', 'Multiple voice options', 'Real-time synthesis', 'API integration'],
      benefits: ['99% voice accuracy', 'Multiple languages', 'Real-time processing'],
      link: '/ai-voice-cloning',
      popular: false
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management',
      icon: '⚡',
      price: '$179/month',
      features: ['Process automation', 'Smart routing', 'Exception handling', 'Analytics dashboard'],
      benefits: ['80% process automation', '60% cost reduction', 'Real-time monitoring'],
      link: '/ai-workflow-automation',
      popular: true
    },
    {
      title: 'AI Fashion Design',
      description: 'Create stunning fashion designs with AI-powered design tools',
      icon: '👗',
      price: '$159/month',
      features: ['AI design generation', 'Trend analysis', 'Color matching', 'Pattern creation'],
      benefits: ['50% design time reduction', 'Trend-aware designs', 'Unlimited creativity'],
      link: '/ai-fashion-design',
      popular: false
    },
    {
      title: 'AI Music Composition',
      description: 'Compose original music with AI-powered composition tools',
      icon: '🎵',
      price: '$119/month',
      features: ['AI composition', 'Multiple genres', 'Instrument simulation', 'Royalty-free music'],
      benefits: ['Unlimited compositions', 'Professional quality', 'No copyright issues'],
      link: '/ai-music-composition',
      popular: false
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness coaching with AI-powered workout plans',
      icon: '💪',
      price: '$89/month',
      features: ['Personalized workouts', 'Progress tracking', 'Nutrition advice', 'Goal setting'],
      benefits: ['Better results', 'Motivation boost', 'Flexible scheduling'],
      link: '/ai-fitness-coach',
      popular: false
    },
    {
      title: 'AI Sales Automation',
      description: 'Boost sales with AI-powered lead generation and conversion optimization',
      icon: '💰',
      price: '$199/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'CRM integration'],
      benefits: ['35% more leads', '50% conversion increase', '25% revenue growth'],
      link: '/ai-sales-automation',
      popular: true
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visualizations',
      icon: '📊',
      price: '$139/month',
      features: ['Interactive dashboards', 'Real-time visualization', 'Custom charts', 'Data storytelling'],
      benefits: ['Faster insights', 'Better decisions', 'Stunning presentations'],
      link: '/ai-data-visualization',
      popular: false
    },
    {
      title: 'AI 3D Generation',
      description: 'Create 3D models and environments with AI technology',
      icon: '🎮',
      price: '$249/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support'],
      benefits: ['Professional 3D content', 'Time savings', 'Creative freedom'],
      link: '/ai-3d-generation',
      popular: false
    },
    {
      title: 'AI Customer Support',
      description: 'Advanced customer support with AI-powered ticket management',
      icon: '🎧',
      price: '$169/month',
      features: ['Ticket automation', 'Sentiment analysis', 'Knowledge base', 'Multi-channel support'],
      benefits: ['Faster resolution', 'Higher satisfaction', '24/7 availability'],
      link: '/ai-customer-support',
      popular: true
    },
    {
      title: 'AI Content Writer',
      description: 'Generate high-quality content with AI-powered writing assistance',
      icon: '✍️',
      price: '$79/month',
      features: ['Blog posts', 'Social media content', 'Product descriptions', 'SEO optimization'],
      benefits: ['10x content output', 'SEO optimized', 'Brand voice consistency'],
      link: '/ai-content-writer',
      popular: true
    },
    {
      title: 'AI Inventory Manager',
      description: 'Optimize inventory with AI-powered demand forecasting',
      icon: '📦',
      price: '$149/month',
      features: ['Demand forecasting', 'Stock optimization', 'Reorder alerts', 'Analytics dashboard'],
      benefits: ['30% inventory reduction', '99% stock accuracy', 'Zero stockouts'],
      link: '/ai-inventory-manager',
      popular: false
    },
    {
      title: 'AI HR Assistant',
      description: 'Streamline HR processes with AI-powered recruitment and management',
      icon: '👥',
      price: '$189/month',
      features: ['Resume screening', 'Interview scheduling', 'Employee analytics', 'Performance tracking'],
      benefits: ['50% faster hiring', 'Better candidate matching', 'Reduced bias'],
      link: '/ai-hr-assistant',
      popular: false
    },
    {
      title: 'AI Financial Advisor',
      description: 'Personalized financial planning with AI-powered investment advice',
      icon: '💼',
      price: '$299/month',
      features: ['Portfolio analysis', 'Risk assessment', 'Tax optimization', 'Retirement planning'],
      benefits: ['Better returns', 'Risk management', 'Tax savings'],
      link: '/ai-financial-advisor',
      popular: false
    },
    {
      title: 'AI Legal Assistant',
      description: 'Legal document analysis and contract review with AI technology',
      icon: '⚖️',
      price: '$399/month',
      features: ['Contract analysis', 'Legal research', 'Document generation', 'Compliance checking'],
      benefits: ['Faster reviews', 'Risk identification', 'Cost savings'],
      link: '/ai-legal-assistant',
      popular: false
    },
    {
      title: 'AI Real Estate Assistant',
      description: 'Property analysis, market insights, and investment recommendations',
      icon: '🏠',
      price: '$179/month',
      features: ['Property valuation', 'Market analysis', 'Investment scoring', 'Rental income prediction'],
      benefits: ['25% better investment decisions', '40% time savings', 'Higher ROI'],
      link: '/ai-real-estate-assistant',
      popular: true
    },
    {
      title: 'AI Supply Chain Optimizer',
      description: 'Optimize supply chain operations with AI-powered demand forecasting',
      icon: '📦',
      price: '$299/month',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Risk assessment'],
      benefits: ['30% cost reduction', '50% faster delivery', '99% stock accuracy'],
      link: '/ai-supply-chain-optimizer',
      popular: true
    },
    {
      title: 'AI Healthcare Assistant',
      description: 'Medical diagnosis support and patient care optimization',
      icon: '🏥',
      price: '$499/month',
      features: ['Symptom analysis', 'Treatment recommendations', 'Patient monitoring', 'Medical records analysis'],
      benefits: ['90% diagnosis accuracy', '40% faster consultations', 'Better patient outcomes'],
      link: '/ai-healthcare-assistant',
      popular: false
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'Boost online sales with AI-powered product recommendations and pricing',
      icon: '🛒',
      price: '$199/month',
      features: ['Dynamic pricing', 'Product recommendations', 'Cart abandonment recovery', 'Customer segmentation'],
      benefits: ['35% sales increase', '25% higher conversion', '60% more revenue'],
      link: '/ai-ecommerce-optimizer',
      popular: true
    },
    {
      title: 'AI Energy Manager',
      description: 'Optimize energy consumption and reduce costs with smart energy management',
      icon: '⚡',
      price: '$149/month',
      features: ['Energy monitoring', 'Cost optimization', 'Usage prediction', 'Green energy integration'],
      benefits: ['30% energy savings', '50% cost reduction', 'Carbon footprint tracking'],
      link: '/ai-energy-manager',
      popular: false
    },
    {
      title: 'AI Travel Planner',
      description: 'Personalized travel planning with AI-powered recommendations and booking',
      icon: '✈️',
      price: '$89/month',
      features: ['Trip planning', 'Price monitoring', 'Itinerary optimization', 'Local recommendations'],
      benefits: ['40% travel savings', 'Perfect itineraries', 'Real-time updates'],
      link: '/ai-travel-planner',
      popular: true
    },
    {
      title: 'AI Learning Platform',
      description: 'Personalized education with AI-powered adaptive learning paths',
      icon: '🎓',
      price: '$129/month',
      features: ['Adaptive learning', 'Progress tracking', 'Skill assessment', 'Personalized content'],
      benefits: ['50% faster learning', '90% retention rate', 'Customized curriculum'],
      link: '/ai-learning-platform',
      popular: true
    },
    {
      title: 'AI Event Manager',
      description: 'Streamline event planning with AI-powered coordination and optimization',
      icon: '🎉',
      price: '$159/month',
      features: ['Event planning', 'Vendor management', 'Attendee insights', 'Budget optimization'],
      benefits: ['60% planning time saved', '30% cost reduction', 'Higher attendance'],
      link: '/ai-event-manager',
      popular: false
    },
    {
      title: 'AI Restaurant Manager',
      description: 'Optimize restaurant operations with AI-powered menu and staff management',
      icon: '🍽️',
      price: '$189/month',
      features: ['Menu optimization', 'Staff scheduling', 'Inventory management', 'Customer analytics'],
      benefits: ['25% profit increase', '40% waste reduction', 'Better customer satisfaction'],
      link: '/ai-restaurant-manager',
      popular: false
    },
    {
      title: 'AI Insurance Assistant',
      description: 'Automated insurance processing and risk assessment with AI',
      icon: '🛡️',
      price: '$249/month',
      features: ['Claims processing', 'Risk assessment', 'Policy optimization', 'Fraud detection'],
      benefits: ['80% faster processing', '60% cost reduction', 'Better risk management'],
      link: '/ai-insurance-assistant',
      popular: false
    },
    {
      title: 'AI Manufacturing Optimizer',
      description: 'Optimize production processes with AI-powered quality control and efficiency',
      icon: '🏭',
      price: '$399/month',
      features: ['Quality control', 'Production optimization', 'Predictive maintenance', 'Supply chain integration'],
      benefits: ['20% efficiency increase', '50% defect reduction', '30% cost savings'],
      link: '/ai-manufacturing-optimizer',
      popular: true
    },
    {
      title: 'AI Agriculture Assistant',
      description: 'Smart farming solutions with AI-powered crop monitoring and optimization',
      icon: '🌾',
      price: '$199/month',
      features: ['Crop monitoring', 'Weather prediction', 'Pest detection', 'Yield optimization'],
      benefits: ['30% yield increase', '40% water savings', 'Better crop quality'],
      link: '/ai-agriculture-assistant',
      popular: false
    },
    {
      title: 'AI Logistics Manager',
      description: 'Optimize logistics and transportation with AI-powered route and fleet management',
      icon: '🚛',
      price: '$279/month',
      features: ['Route optimization', 'Fleet management', 'Delivery tracking', 'Cost analysis'],
      benefits: ['35% fuel savings', '50% faster delivery', 'Real-time tracking'],
      link: '/ai-logistics-manager',
      popular: true
    },
    {
      title: 'AI Security Monitor',
      description: 'Advanced security monitoring with AI-powered threat detection and response',
      icon: '🔒',
      price: '$329/month',
      features: ['Threat detection', 'Access control', 'Incident response', 'Security analytics'],
      benefits: ['99% threat detection', 'Real-time alerts', 'Automated response'],
      link: '/ai-security-monitor',
      popular: true
    },
    {
      title: 'AI Content Moderator',
      description: 'Automated content moderation with AI-powered safety and compliance checking',
      icon: '👁️',
      price: '$149/month',
      features: ['Content filtering', 'Spam detection', 'Inappropriate content removal', 'Compliance monitoring'],
      benefits: ['95% accuracy', '24/7 monitoring', 'Reduced manual work'],
      link: '/ai-content-moderator',
      popular: false
    },
    {
      title: 'AI Translation Service',
      description: 'Real-time translation with AI-powered language processing and cultural adaptation',
      icon: '🌐',
      price: '$99/month',
      features: ['Real-time translation', 'Cultural adaptation', 'Voice translation', 'Document translation'],
      benefits: ['99% accuracy', '100+ languages', 'Cultural context'],
      link: '/ai-translation-service',
      popular: true
    },
    {
      title: 'AI Personal Assistant',
      description: 'Comprehensive personal productivity with AI-powered task and schedule management',
      icon: '🤖',
      price: '$79/month',
      features: ['Task management', 'Schedule optimization', 'Email automation', 'Meeting coordination'],
      benefits: ['50% productivity boost', 'Time optimization', 'Stress reduction'],
      link: '/ai-personal-assistant',
      popular: true
    },
    {
      title: 'AI Weather Predictor',
      description: 'Advanced weather forecasting with AI-powered climate analysis and predictions',
      icon: '🌤️',
      price: '$119/month',
      features: ['Weather forecasting', 'Climate analysis', 'Agricultural predictions', 'Risk assessment'],
      benefits: ['95% accuracy', 'Long-term predictions', 'Industry-specific insights'],
      link: '/ai-weather-predictor',
      popular: false
    },
    {
      title: 'AI Stock Trader',
      description: 'Automated stock trading with AI-powered market analysis and portfolio optimization',
      icon: '📈',
      price: '$399/month',
      features: ['Market analysis', 'Portfolio optimization', 'Risk management', 'Automated trading'],
      benefits: ['25% better returns', 'Risk reduction', '24/7 monitoring'],
      link: '/ai-stock-trader',
      popular: true
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
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visualizations',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Interactive Dashboards', 'Real-time Visualization', 'Custom Charts', 'Data Storytelling'],
      color: 'text-orange-400'
    },
    {
      title: 'AI 3D Generation',
      description: 'Create 3D models and environments with AI technology',
      icon: Cube,
      price: '$1,600/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support'],
      color: 'text-pink-400'
    },
    {
      title: 'AI Voice Synthesis',
      description: 'Advanced voice cloning and text-to-speech solutions',
      icon: Mic,
      price: '$1,300/month',
      features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support'],
      color: 'text-indigo-400'
    },
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for marketing and communication',
      icon: FileText,
      price: '$1,000/month',
      features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'],
      color: 'text-yellow-400'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced forecasting and trend analysis with machine learning',
      icon: TrendingUp,
      price: '$1,700/month',
      features: ['Sales Forecasting', 'Demand Prediction', 'Risk Assessment', 'Trend Analysis'],
      color: 'text-red-400'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce and content',
      icon: Target,
      price: '$1,400/month',
      features: ['Product Recommendations', 'Content Personalization', 'User Behavior Analysis', 'A/B Testing'],
      color: 'text-teal-400'
    },
    {
      title: 'AI Fraud Detection',
      description: 'Advanced fraud prevention and security monitoring',
      icon: Shield,
      price: '$1,900/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System'],
      color: 'text-red-500'
    },
    {
      title: 'AI Document Processing',
      description: 'Intelligent document analysis and data extraction',
      icon: Search,
      price: '$1,200/month',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Form Recognition'],
      color: 'text-gray-400'
    },
    {
      title: 'AI Quantum Computing',
      description: 'Advanced quantum algorithms and quantum machine learning solutions',
      icon: Cpu,
      price: '$5,000/month',
      features: ['Quantum Algorithms', 'Quantum ML', 'Optimization Problems', 'Cryptography'],
      color: 'text-purple-500'
    },
    {
      title: 'AI Edge Computing',
      description: 'Deploy AI models on edge devices for real-time processing',
      icon: Smartphone,
      price: '$2,500/month',
      features: ['Edge AI Models', 'Real-time Processing', 'Low Latency', 'Offline Capability'],
      color: 'text-cyan-500'
    },
    {
      title: 'AI Autonomous Systems',
      description: 'Self-driving vehicles and autonomous robotics solutions',
      icon: Car,
      price: '$8,000/month',
      features: ['Autonomous Vehicles', 'Robotics', 'Path Planning', 'Sensor Fusion'],
      color: 'text-green-500'
    },
    {
      title: 'AI Metaverse Solutions',
      description: 'Virtual and augmented reality experiences with AI integration',
      icon: Gamepad2,
      price: '$3,500/month',
      features: ['VR/AR Development', 'Virtual Worlds', 'Avatar Creation', 'Spatial Computing'],
      color: 'text-pink-500'
    },
    {
      title: 'AI Blockchain Integration',
      description: 'AI-powered blockchain solutions and smart contract optimization',
      icon: Lock,
      price: '$4,200/month',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Generation', 'Crypto Analytics'],
      color: 'text-yellow-500'
    },
    {
      title: 'AI Climate Solutions',
      description: 'Environmental monitoring and climate change mitigation with AI',
      icon: Globe,
      price: '$2,800/month',
      features: ['Climate Modeling', 'Carbon Tracking', 'Renewable Energy', 'Environmental Monitoring'],
      color: 'text-green-400'
    },
    {
      title: 'AI Space Technology',
      description: 'Space exploration and satellite data analysis with AI',
      icon: Plane,
      price: '$6,500/month',
      features: ['Satellite Analysis', 'Space Mission Planning', 'Astronomical Data', 'Orbital Mechanics'],
      color: 'text-blue-500'
    },
    {
      title: 'AI Biotech Solutions',
      description: 'Biotechnology and pharmaceutical research with AI acceleration',
      icon: Stethoscope,
      price: '$7,000/month',
      features: ['Drug Discovery', 'Genome Analysis', 'Protein Folding', 'Clinical Trials'],
      color: 'text-red-500'
    },
    {
      title: 'AI Financial Trading',
      description: 'Advanced algorithmic trading and financial market analysis',
      icon: TrendingUp,
      price: '$5,500/month',
      features: ['Algorithmic Trading', 'Market Analysis', 'Risk Management', 'Portfolio Optimization'],
      color: 'text-green-600'
    },
    {
      title: 'AI Cybersecurity AI',
      description: 'AI-powered cybersecurity with advanced threat detection and response',
      icon: Shield,
      price: '$4,800/month',
      features: ['Threat Intelligence', 'Behavioral Analysis', 'Incident Response', 'Security Automation'],
      color: 'text-red-600'
    },
    {
      title: 'AI Smart Cities',
      description: 'Urban planning and smart city infrastructure with AI optimization',
      icon: Building,
      price: '$6,000/month',
      features: ['Traffic Optimization', 'Energy Management', 'Public Safety', 'Resource Planning'],
      color: 'text-indigo-500'
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
      title: 'IT Consulting',
      description: 'Strategic IT consulting for digital transformation and optimization',
      icon: Briefcase,
      price: '$1,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization'],
      color: 'text-yellow-400'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design and implement robust network infrastructure solutions',
      icon: Globe,
      price: '$1,400/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring'],
      color: 'text-indigo-400'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development',
      icon: Smartphone,
      price: '$1,500/month',
      features: ['iOS/Android Apps', 'Cross-platform Development', 'UI/UX Design', 'App Store Optimization'],
      color: 'text-pink-400'
    },
    {
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies',
      icon: Code,
      price: '$1,200/month',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization'],
      color: 'text-cyan-400'
    },
    {
      title: 'Data Analytics',
      description: 'Business intelligence and data analytics solutions',
      icon: BarChart,
      price: '$1,300/month',
      features: ['Data Warehousing', 'Business Intelligence', 'Reporting Dashboards', 'Data Mining'],
      color: 'text-orange-400'
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support and system maintenance services',
      icon: Wrench,
      price: '$800/month',
      features: ['24/7 Support', 'System Maintenance', 'Software Updates', 'Hardware Management'],
      color: 'text-gray-400'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Blockchain development and cryptocurrency solutions',
      icon: Lock,
      price: '$2,000/month',
      features: ['Smart Contracts', 'DApp Development', 'Token Creation', 'DeFi Solutions'],
      color: 'text-yellow-500'
    },
    {
      title: 'IoT Solutions',
      description: 'Internet of Things development and implementation',
      icon: Cpu,
      price: '$1,600/month',
      features: ['IoT Device Development', 'Sensor Integration', 'Data Collection', 'Real-time Monitoring'],
      color: 'text-green-500'
    },
    {
      title: 'Quantum Computing Services',
      description: 'Quantum computing infrastructure and algorithm development',
      icon: Cpu,
      price: '$8,500/month',
      features: ['Quantum Hardware', 'Algorithm Development', 'Quantum Software', 'Research Support'],
      color: 'text-purple-600'
    },
    {
      title: '5G Network Solutions',
      description: '5G network deployment and optimization services',
      icon: Globe,
      price: '$3,200/month',
      features: ['5G Infrastructure', 'Network Optimization', 'Edge Computing', 'IoT Integration'],
      color: 'text-blue-600'
    },
    {
      title: 'Edge Computing Services',
      description: 'Edge computing infrastructure and distributed processing',
      icon: Smartphone,
      price: '$2,800/month',
      features: ['Edge Infrastructure', 'Distributed Processing', 'Low Latency', 'Real-time Analytics'],
      color: 'text-cyan-600'
    },
    {
      title: 'AR/VR Development',
      description: 'Augmented and virtual reality application development',
      icon: Gamepad2,
      price: '$4,500/month',
      features: ['AR/VR Apps', '3D Modeling', 'Spatial Computing', 'Immersive Experiences'],
      color: 'text-pink-600'
    },
    {
      title: 'Digital Twin Solutions',
      description: 'Digital twin creation and management for physical assets',
      icon: Building,
      price: '$5,500/month',
      features: ['Digital Twins', 'Simulation', 'Predictive Maintenance', 'Asset Management'],
      color: 'text-indigo-600'
    },
    {
      title: 'Robotic Process Automation',
      description: 'RPA implementation and intelligent automation solutions',
      icon: Settings,
      price: '$2,200/month',
      features: ['Process Automation', 'Workflow Design', 'Bot Development', 'Integration'],
      color: 'text-orange-600'
    },
    {
      title: 'Microservices Architecture',
      description: 'Microservices design and implementation for scalable applications',
      icon: Code,
      price: '$3,800/month',
      features: ['Architecture Design', 'Service Development', 'API Management', 'Scalability'],
      color: 'text-teal-600'
    },
    {
      title: 'Serverless Computing',
      description: 'Serverless architecture design and implementation',
      icon: Cloud,
      price: '$2,500/month',
      features: ['Serverless Design', 'Function Development', 'Event Processing', 'Cost Optimization'],
      color: 'text-cyan-600'
    },
    {
      title: 'AI Infrastructure',
      description: 'AI/ML infrastructure setup and management services',
      icon: Brain,
      price: '$4,200/month',
      features: ['ML Infrastructure', 'GPU Clusters', 'Model Deployment', 'Data Pipelines'],
      color: 'text-purple-600'
    },
    {
      title: 'Zero Trust Security',
      description: 'Zero trust security architecture implementation',
      icon: Shield,
      price: '$3,500/month',
      features: ['Security Architecture', 'Identity Management', 'Access Control', 'Threat Protection'],
      color: 'text-red-600'
    },
    {
      title: 'Green IT Solutions',
      description: 'Sustainable and energy-efficient IT infrastructure',
      icon: Globe,
      price: '$2,800/month',
      features: ['Energy Efficiency', 'Carbon Footprint', 'Sustainable Hardware', 'Green Data Centers'],
      color: 'text-green-600'
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