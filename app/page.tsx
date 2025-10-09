'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Mic, Cube, DollarSign } from 'lucide-react';
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
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 animate-pulse border border-cyan-500/20" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded mb-2"></div>
    <div className="h-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded w-5/6"></div>
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

  // Real Micro SAAS Services with actual functionality and pricing
  const microSAASServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization and timeline prediction. Real-time collaboration and automated reporting.',
      icon: '📊',
      price: '$99/month',
      originalPrice: '$199/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Real-time reporting', 'Resource optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', 'Real-time insights'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-project-manager',
      demoUrl: 'https://demo.ziontechgroup.com/ai-project-manager'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation, smart scheduling, and advanced analytics. Supports all major platforms.',
      icon: '📱',
      price: '$79/month',
      originalPrice: '$149/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Multi-platform support', 'Hashtag optimization'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', 'Automated posting'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-social-media',
      demoUrl: 'https://demo.ziontechgroup.com/ai-social-media'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics, real-time dashboards, and predictive modeling.',
      icon: '📈',
      price: '$149/month',
      originalPrice: '$299/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reports'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', 'Data-driven decisions'],
      link: '/ai-analytics',
      popular: true,
      category: 'Analytics',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-analytics',
      demoUrl: 'https://demo.ziontechgroup.com/ai-analytics'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Transform your email marketing with AI-powered content generation, smart segmentation, and advanced automation workflows.',
      icon: '📧',
      price: '$99/month',
      originalPrice: '$199/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Deliverability optimization'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', 'Higher deliverability'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-email',
      demoUrl: 'https://demo.ziontechgroup.com/ai-email'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot, natural language processing, and seamless human handoff.',
      icon: '🤖',
      price: '$149/month',
      originalPrice: '$299/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Integration APIs'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', 'Cost savings'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Support',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-support',
      demoUrl: 'https://demo.ziontechgroup.com/ai-support'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection, security vulnerability scanning, and performance optimization.',
      icon: '🔍',
      price: '$89/month',
      originalPrice: '$179/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Code quality metrics', 'Best practices suggestions'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', 'Security compliance'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-code-review',
      demoUrl: 'https://demo.ziontechgroup.com/ai-code-review'
    },
    {
      title: 'AI Video Generator Pro',
      description: 'Create professional videos with AI-powered editing, content generation, voice synthesis, and multi-language support.',
      icon: '🎥',
      price: '$199/month',
      originalPrice: '$399/month',
      features: ['AI video editing', 'Auto-generated content', 'Voice synthesis', 'Multi-language support', 'Template library', 'HD/4K export'],
      benefits: ['90% time reduction', 'Professional quality', 'Unlimited exports', 'No technical skills required'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Content Creation',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-video',
      demoUrl: 'https://demo.ziontechgroup.com/ai-video'
    },
    {
      title: 'AI Voice Cloning Studio',
      description: 'Create realistic voice clones for content creation, accessibility, and multilingual applications with high-quality synthesis.',
      icon: '🎤',
      price: '$129/month',
      originalPrice: '$259/month',
      features: ['High-quality voice cloning', 'Multiple voice options', 'Real-time synthesis', 'API integration', 'Emotion control', 'Multiple languages'],
      benefits: ['99% voice accuracy', 'Multiple languages', 'Real-time processing', 'Commercial use rights'],
      link: '/ai-voice-cloning',
      popular: false,
      category: 'Audio',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-voice',
      demoUrl: 'https://demo.ziontechgroup.com/ai-voice'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management, smart routing, and exception handling.',
      icon: '⚡',
      price: '$179/month',
      originalPrice: '$359/month',
      features: ['Process automation', 'Smart routing', 'Exception handling', 'Analytics dashboard', 'Custom triggers', 'Integration connectors'],
      benefits: ['80% process automation', '60% cost reduction', 'Real-time monitoring', 'Scalable workflows'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-workflow',
      demoUrl: 'https://demo.ziontechgroup.com/ai-workflow'
    },
    {
      title: 'AI Fashion Design Studio',
      description: 'Create stunning fashion designs with AI-powered design tools, trend analysis, and color matching technology.',
      icon: '👗',
      price: '$159/month',
      originalPrice: '$319/month',
      features: ['AI design generation', 'Trend analysis', 'Color matching', 'Pattern creation', '3D visualization', 'Fabric simulation'],
      benefits: ['50% design time reduction', 'Trend-aware designs', 'Unlimited creativity', 'Professional quality'],
      link: '/ai-fashion-design',
      popular: false,
      category: 'Design',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-fashion',
      demoUrl: 'https://demo.ziontechgroup.com/ai-fashion'
    },
    {
      title: 'AI Music Composition Suite',
      description: 'Compose original music with AI-powered composition tools, multiple genres, and royalty-free licensing.',
      icon: '🎵',
      price: '$119/month',
      originalPrice: '$239/month',
      features: ['AI composition', 'Multiple genres', 'Instrument simulation', 'Royalty-free music', 'Custom styles', 'Export options'],
      benefits: ['Unlimited compositions', 'Professional quality', 'No copyright issues', 'Multiple formats'],
      link: '/ai-music-composition',
      popular: false,
      category: 'Audio',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-music',
      demoUrl: 'https://demo.ziontechgroup.com/ai-music'
    },
    {
      title: 'AI Fitness Coach Pro',
      description: 'Personalized fitness coaching with AI-powered workout plans, progress tracking, and nutrition advice.',
      icon: '💪',
      price: '$89/month',
      originalPrice: '$179/month',
      features: ['Personalized workouts', 'Progress tracking', 'Nutrition advice', 'Goal setting', 'Wearable integration', 'Community features'],
      benefits: ['Better results', 'Motivation boost', 'Flexible scheduling', 'Personalized plans'],
      link: '/ai-fitness-coach',
      popular: false,
      category: 'Health',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-fitness',
      demoUrl: 'https://demo.ziontechgroup.com/ai-fitness'
    },
    {
      title: 'AI Sales Automation Platform',
      description: 'Boost sales with AI-powered lead generation, conversion optimization, and automated follow-up systems.',
      icon: '💰',
      price: '$199/month',
      originalPrice: '$399/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'CRM integration', 'Pipeline management', 'Performance analytics'],
      benefits: ['35% more leads', '50% conversion increase', '25% revenue growth', 'Automated nurturing'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-sales',
      demoUrl: 'https://demo.ziontechgroup.com/ai-sales'
    },
    {
      title: 'AI Data Visualization Pro',
      description: 'Transform complex data into interactive visualizations with AI-powered insights and storytelling capabilities.',
      icon: '📊',
      price: '$139/month',
      originalPrice: '$279/month',
      features: ['Interactive dashboards', 'Real-time visualization', 'Custom charts', 'Data storytelling', 'Export options', 'Collaboration tools'],
      benefits: ['Faster insights', 'Better decisions', 'Stunning presentations', 'Real-time updates'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-data-viz',
      demoUrl: 'https://demo.ziontechgroup.com/ai-data-viz'
    },
    {
      title: 'AI 3D Generation Studio',
      description: 'Create 3D models and environments with AI technology, texture creation, and VR/AR support.',
      icon: '🎮',
      price: '$249/month',
      originalPrice: '$499/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support', 'Export formats', 'Cloud rendering'],
      benefits: ['Professional 3D content', 'Time savings', 'Creative freedom', 'Multiple formats'],
      link: '/ai-3d-generation',
      popular: false,
      category: '3D Graphics',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-3d',
      demoUrl: 'https://demo.ziontechgroup.com/ai-3d'
    },
    {
      title: 'AI Customer Support Hub',
      description: 'Advanced customer support with AI-powered ticket management, sentiment analysis, and multi-channel support.',
      icon: '🎧',
      price: '$169/month',
      originalPrice: '$339/month',
      features: ['Ticket automation', 'Sentiment analysis', 'Knowledge base', 'Multi-channel support', 'Performance metrics', 'Integration APIs'],
      benefits: ['Faster resolution', 'Higher satisfaction', '24/7 availability', 'Reduced workload'],
      link: '/ai-customer-support',
      popular: true,
      category: 'Support',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-support-hub',
      demoUrl: 'https://demo.ziontechgroup.com/ai-support-hub'
    },
    {
      title: 'AI Content Writer Pro',
      description: 'Generate high-quality content with AI-powered writing assistance, SEO optimization, and brand voice consistency.',
      icon: '✍️',
      price: '$79/month',
      originalPrice: '$159/month',
      features: ['Blog posts', 'Social media content', 'Product descriptions', 'SEO optimization', 'Multiple languages', 'Brand voice training'],
      benefits: ['10x content output', 'SEO optimized', 'Brand voice consistency', 'Multiple formats'],
      link: '/ai-content-writer',
      popular: true,
      category: 'Content',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-content',
      demoUrl: 'https://demo.ziontechgroup.com/ai-content'
    },
    {
      title: 'AI Inventory Manager',
      description: 'Optimize inventory with AI-powered demand forecasting, stock optimization, and automated reorder systems.',
      icon: '📦',
      price: '$149/month',
      originalPrice: '$299/month',
      features: ['Demand forecasting', 'Stock optimization', 'Reorder alerts', 'Analytics dashboard', 'Supplier integration', 'Cost optimization'],
      benefits: ['30% inventory reduction', '99% stock accuracy', 'Zero stockouts', 'Cost savings'],
      link: '/ai-inventory-manager',
      popular: false,
      category: 'Inventory',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-inventory',
      demoUrl: 'https://demo.ziontechgroup.com/ai-inventory'
    },
    {
      title: 'AI HR Assistant Pro',
      description: 'Streamline HR processes with AI-powered recruitment, employee analytics, and performance tracking.',
      icon: '👥',
      price: '$189/month',
      originalPrice: '$379/month',
      features: ['Resume screening', 'Interview scheduling', 'Employee analytics', 'Performance tracking', 'Compliance monitoring', 'Training recommendations'],
      benefits: ['50% faster hiring', 'Better candidate matching', 'Reduced bias', 'Improved retention'],
      link: '/ai-hr-assistant',
      popular: false,
      category: 'HR',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-hr',
      demoUrl: 'https://demo.ziontechgroup.com/ai-hr'
    },
    {
      title: 'AI Financial Advisor',
      description: 'Personalized financial planning with AI-powered investment advice, portfolio analysis, and risk assessment.',
      icon: '💼',
      price: '$299/month',
      originalPrice: '$599/month',
      features: ['Portfolio analysis', 'Risk assessment', 'Tax optimization', 'Retirement planning', 'Market insights', 'Goal tracking'],
      benefits: ['Better returns', 'Risk management', 'Tax savings', 'Personalized advice'],
      link: '/ai-financial-advisor',
      popular: false,
      category: 'Finance',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-finance',
      demoUrl: 'https://demo.ziontechgroup.com/ai-finance'
    },
    {
      title: 'AI Legal Assistant Pro',
      description: 'Legal document analysis and contract review with AI technology, compliance checking, and risk assessment.',
      icon: '⚖️',
      price: '$399/month',
      originalPrice: '$799/month',
      features: ['Contract analysis', 'Legal research', 'Document generation', 'Compliance checking', 'Risk assessment', 'Case law research'],
      benefits: ['Faster reviews', 'Risk identification', 'Cost savings', 'Improved accuracy'],
      link: '/ai-legal-assistant',
      popular: false,
      category: 'Legal',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-legal',
      demoUrl: 'https://demo.ziontechgroup.com/ai-legal'
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making with real-time processing capabilities.',
      icon: Brain,
      price: '$1,500/month',
      originalPrice: '$3,000/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'Real-time Processing', 'A/B Testing'],
      color: 'text-purple-400',
      category: 'AI/ML',
      apiEndpoint: 'https://api.ziontechgroup.com/ml-solutions',
      demoUrl: 'https://demo.ziontechgroup.com/ml-solutions'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, language understanding, and multilingual processing.',
      icon: MessageSquare,
      price: '$1,200/month',
      originalPrice: '$2,400/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Entity Recognition', 'Topic Modeling'],
      color: 'text-blue-400',
      category: 'AI/NLP',
      apiEndpoint: 'https://api.ziontechgroup.com/nlp-solutions',
      demoUrl: 'https://demo.ziontechgroup.com/nlp-solutions'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and real-time processing.',
      icon: Eye,
      price: '$1,800/month',
      originalPrice: '$3,600/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'OCR Processing', 'Real-time Streaming'],
      color: 'text-green-400',
      category: 'AI/Vision',
      apiEndpoint: 'https://api.ziontechgroup.com/computer-vision',
      demoUrl: 'https://demo.ziontechgroup.com/computer-vision'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities and exception handling.',
      icon: Zap,
      price: '$1,400/month',
      originalPrice: '$2,800/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'Integration APIs', 'Monitoring Dashboard'],
      color: 'text-cyan-400',
      category: 'Automation',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-automation',
      demoUrl: 'https://demo.ziontechgroup.com/ai-automation'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visualizations with AI-powered insights and storytelling.',
      icon: BarChart,
      price: '$1,100/month',
      originalPrice: '$2,200/month',
      features: ['Interactive Dashboards', 'Real-time Visualization', 'Custom Charts', 'Data Storytelling', 'Export Options', 'Collaboration Tools'],
      color: 'text-orange-400',
      category: 'Analytics',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-data-viz',
      demoUrl: 'https://demo.ziontechgroup.com/ai-data-viz'
    },
    {
      title: 'AI 3D Generation',
      description: 'Create 3D models and environments with AI technology, texture creation, and VR/AR support.',
      icon: Cube,
      price: '$1,600/month',
      originalPrice: '$3,200/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support', 'Cloud Rendering', 'Export Formats'],
      color: 'text-pink-400',
      category: '3D Graphics',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-3d-generation',
      demoUrl: 'https://demo.ziontechgroup.com/ai-3d-generation'
    },
    {
      title: 'AI Voice Synthesis',
      description: 'Advanced voice cloning and text-to-speech solutions with emotion control and multi-language support.',
      icon: Mic,
      price: '$1,300/month',
      originalPrice: '$2,600/month',
      features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support', 'Real-time Processing', 'API Integration'],
      color: 'text-indigo-400',
      category: 'Audio',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-voice-synthesis',
      demoUrl: 'https://demo.ziontechgroup.com/ai-voice-synthesis'
    },
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for marketing and communication with brand voice consistency.',
      icon: FileText,
      price: '$1,000/month',
      originalPrice: '$2,000/month',
      features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Multi-language', 'Brand Voice Training'],
      color: 'text-yellow-400',
      category: 'Content',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-content-generation',
      demoUrl: 'https://demo.ziontechgroup.com/ai-content-generation'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced forecasting and trend analysis with machine learning and real-time data processing.',
      icon: TrendingUp,
      price: '$1,700/month',
      originalPrice: '$3,400/month',
      features: ['Sales Forecasting', 'Demand Prediction', 'Risk Assessment', 'Trend Analysis', 'Real-time Updates', 'Custom Models'],
      color: 'text-red-400',
      category: 'Analytics',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-predictive',
      demoUrl: 'https://demo.ziontechgroup.com/ai-predictive'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce and content with real-time personalization.',
      icon: Target,
      price: '$1,400/month',
      originalPrice: '$2,800/month',
      features: ['Product Recommendations', 'Content Personalization', 'User Behavior Analysis', 'A/B Testing', 'Real-time Updates', 'Multi-channel Support'],
      color: 'text-teal-400',
      category: 'Recommendation',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-recommendations',
      demoUrl: 'https://demo.ziontechgroup.com/ai-recommendations'
    },
    {
      title: 'AI Fraud Detection',
      description: 'Advanced fraud prevention and security monitoring with real-time detection and machine learning.',
      icon: Shield,
      price: '$1,900/month',
      originalPrice: '$3,800/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System', 'Machine Learning Models', 'Integration APIs'],
      color: 'text-red-500',
      category: 'Security',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-fraud-detection',
      demoUrl: 'https://demo.ziontechgroup.com/ai-fraud-detection'
    },
    {
      title: 'AI Document Processing',
      description: 'Intelligent document analysis and data extraction with OCR and automated classification.',
      icon: Search,
      price: '$1,200/month',
      originalPrice: '$2,400/month',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Form Recognition', 'Batch Processing', 'API Integration'],
      color: 'text-gray-400',
      category: 'Document Processing',
      apiEndpoint: 'https://api.ziontechgroup.com/ai-document-processing',
      demoUrl: 'https://demo.ziontechgroup.com/ai-document-processing'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Services & Migration',
      description: 'Cloud migration, setup, and optimization services with 24/7 monitoring and support.',
      icon: Cloud,
      price: '$1,299/month',
      originalPrice: '$2,599/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', '24/7 Monitoring', 'Disaster Recovery'],
      color: 'text-blue-400',
      category: 'Cloud',
      apiEndpoint: 'https://api.ziontechgroup.com/cloud-services',
      demoUrl: 'https://demo.ziontechgroup.com/cloud-services'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions with threat detection, prevention, and incident response capabilities.',
      icon: Shield,
      price: '$1,599/month',
      originalPrice: '$3,199/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing', 'Compliance Auditing'],
      color: 'text-red-400',
      category: 'Security',
      apiEndpoint: 'https://api.ziontechgroup.com/cybersecurity',
      demoUrl: 'https://demo.ziontechgroup.com/cybersecurity'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring.',
      icon: Settings,
      price: '$1,199/month',
      originalPrice: '$2,399/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Performance Optimization'],
      color: 'text-green-400',
      category: 'DevOps',
      apiEndpoint: 'https://api.ziontechgroup.com/devops',
      demoUrl: 'https://demo.ziontechgroup.com/devops'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and monitoring.',
      icon: Database,
      price: '$899/month',
      originalPrice: '$1,799/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'AI Optimization', 'Real-time Monitoring'],
      color: 'text-purple-400',
      category: 'Database',
      apiEndpoint: 'https://api.ziontechgroup.com/database-services',
      demoUrl: 'https://demo.ziontechgroup.com/database-services'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting for digital transformation, technology assessment, and process optimization.',
      icon: Briefcase,
      price: '$1,000/month',
      originalPrice: '$2,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Technology Roadmap', 'Change Management'],
      color: 'text-yellow-400',
      category: 'Consulting',
      apiEndpoint: 'https://api.ziontechgroup.com/it-consulting',
      demoUrl: 'https://demo.ziontechgroup.com/it-consulting'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design and implement robust network infrastructure solutions with security and performance optimization.',
      icon: Globe,
      price: '$1,400/month',
      originalPrice: '$2,800/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring', 'Disaster Recovery', 'Scalability Planning'],
      color: 'text-indigo-400',
      category: 'Networking',
      apiEndpoint: 'https://api.ziontechgroup.com/network-infrastructure',
      demoUrl: 'https://demo.ziontechgroup.com/network-infrastructure'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development with modern UI/UX design.',
      icon: Smartphone,
      price: '$1,500/month',
      originalPrice: '$3,000/month',
      features: ['iOS/Android Apps', 'Cross-platform Development', 'UI/UX Design', 'App Store Optimization', 'Performance Optimization', 'Maintenance & Support'],
      color: 'text-pink-400',
      category: 'Mobile',
      apiEndpoint: 'https://api.ziontechgroup.com/mobile-development',
      demoUrl: 'https://demo.ziontechgroup.com/mobile-development'
    },
    {
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies, performance optimization, and responsive design.',
      icon: Code,
      price: '$1,200/month',
      originalPrice: '$2,400/month',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization', 'Responsive Design', 'SEO Optimization'],
      color: 'text-cyan-400',
      category: 'Web',
      apiEndpoint: 'https://api.ziontechgroup.com/web-development',
      demoUrl: 'https://demo.ziontechgroup.com/web-development'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Business intelligence and data analytics solutions with real-time dashboards and reporting.',
      icon: BarChart,
      price: '$1,300/month',
      originalPrice: '$2,600/month',
      features: ['Data Warehousing', 'Business Intelligence', 'Reporting Dashboards', 'Data Mining', 'Real-time Analytics', 'Custom Reports'],
      color: 'text-orange-400',
      category: 'Analytics',
      apiEndpoint: 'https://api.ziontechgroup.com/data-analytics',
      demoUrl: 'https://demo.ziontechgroup.com/data-analytics'
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support and system maintenance services with 24/7 availability.',
      icon: Wrench,
      price: '$800/month',
      originalPrice: '$1,600/month',
      features: ['24/7 Support', 'System Maintenance', 'Software Updates', 'Hardware Management', 'Remote Support', 'Preventive Maintenance'],
      color: 'text-gray-400',
      category: 'Support',
      apiEndpoint: 'https://api.ziontechgroup.com/it-support',
      demoUrl: 'https://demo.ziontechgroup.com/it-support'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Blockchain development and cryptocurrency solutions with smart contracts and DeFi applications.',
      icon: Lock,
      price: '$2,000/month',
      originalPrice: '$4,000/month',
      features: ['Smart Contracts', 'DApp Development', 'Token Creation', 'DeFi Solutions', 'NFT Development', 'Blockchain Consulting'],
      color: 'text-yellow-500',
      category: 'Blockchain',
      apiEndpoint: 'https://api.ziontechgroup.com/blockchain-solutions',
      demoUrl: 'https://demo.ziontechgroup.com/blockchain-solutions'
    },
    {
      title: 'IoT Solutions',
      description: 'Internet of Things development and implementation with real-time monitoring and data collection.',
      icon: Cpu,
      price: '$1,600/month',
      originalPrice: '$3,200/month',
      features: ['IoT Device Development', 'Sensor Integration', 'Data Collection', 'Real-time Monitoring', 'Edge Computing', 'Cloud Integration'],
      color: 'text-green-500',
      category: 'IoT',
      apiEndpoint: 'https://api.ziontechgroup.com/iot-solutions',
      demoUrl: 'https://demo.ziontechgroup.com/iot-solutions'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology, micro SAAS services, and comprehensive IT solutions."
        keywords="AI solutions, micro SAAS, IT services, digital transformation, machine learning, automation, cloud services, cybersecurity"
        canonicalUrl="https://ziontechgroup.com"
      />
      <Analytics />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <SecurityEnhancer />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Futuristic Background Effects */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <Navigation />
        
        {/* Hero Section with Futuristic Design */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8">
                <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-300 font-medium">Advanced AI & IT Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  Transform Your Business
                </span>
                <br />
                <span className="text-white">
                  with AI-Powered Solutions
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Achieve <span className="text-cyan-400 font-semibold">300% ROI</span>, 
                <span className="text-purple-400 font-semibold"> 70% cost reduction</span>, and 
                <span className="text-pink-400 font-semibold"> 90% efficiency gains</span> with our 
                cutting-edge AI technology and comprehensive IT services.
              </p>

              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <a 
                  href="tel:+13024640950" 
                  onClick={handlePhoneClick}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">+1 (302) 464-0950</span>
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  <MailIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center text-gray-300">
                  <Location className="w-5 h-5 mr-2" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="/services" 
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center"
                >
                  Explore Our Services
                  <Arrow className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/contact" 
                  className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center"
                >
                  Get Free Consultation
                  <Arrow className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Micro SAAS Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful, affordable AI-powered tools designed to transform your business operations and boost productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {microSAASServices.map((service, index) => (
                <div
                  key={service.title}
                  className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    service.popular ? 'ring-2 ring-cyan-400/50' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-center">
                      <span className="inline-block bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-2">
                    <a
                      href={service.link}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </a>
                    <a
                      href={service.demoUrl}
                      className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-white transition-all duration-300"
                    >
                      Try Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Services & Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced artificial intelligence solutions tailored to your business needs and industry requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={service.title}
                  className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl mb-4">
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-3xl font-bold text-purple-400">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-center">
                      <span className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <Check className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-2">
                    <a
                      href={`/ai-solutions/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </a>
                    <a
                      href={service.demoUrl}
                      className="w-full border border-purple-400 text-purple-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      View Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  IT Services & Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services and solutions to support your digital transformation journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={service.title}
                  className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl mb-4">
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-center">
                      <span className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-2">
                    <a
                      href={`/it-services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </a>
                    <a
                      href={service.demoUrl}
                      className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-white transition-all duration-300"
                    >
                      View Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Get started with our AI-powered solutions today. Contact us for a free consultation and discover how we can help you achieve your business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl mb-4">
                  <PhoneIcon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak with our experts</p>
                <a 
                  href="tel:+13024640950" 
                  onClick={handlePhoneClick}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  +1 (302) 464-0950
                </a>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl mb-4">
                  <MailIcon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">Send us your requirements</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-purple-400 hover:text-purple-300 font-semibold"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-2xl mb-4">
                  <Location className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">Our office location</p>
                <p className="text-pink-400 font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Free Consultation
                <Arrow className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;