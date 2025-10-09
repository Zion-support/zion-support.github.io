'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, DollarSign, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
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
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization'],
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
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '50% better ROI'],
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
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Personalization engine'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', 'Better deliverability'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot and sentiment analysis',
      icon: '🤖',
      price: '$149/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Sentiment analysis'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', 'Reduced support costs'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Customer Service'
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
      description: 'Create professional videos with AI-powered editing, content generation, and voice synthesis',
      icon: '🎥',
      price: '$199/month',
      features: ['AI video editing', 'Auto-generated content', 'Voice synthesis', 'Multi-language support', 'Template library', 'Brand customization'],
      benefits: ['90% time reduction', 'Professional quality', 'Unlimited exports', 'Cost-effective production'],
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
      benefits: ['99% voice accuracy', 'Multiple languages', 'Real-time processing', 'Natural intonation'],
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
      description: 'Create stunning fashion designs with AI-powered design tools and trend analysis',
      icon: '👗',
      price: '$159/month',
      features: ['AI design generation', 'Trend analysis', 'Color matching', 'Pattern creation', '3D visualization', 'Fabric simulation'],
      benefits: ['50% design time reduction', 'Trend-aware designs', 'Unlimited creativity', 'Market insights'],
      link: '/ai-fashion-design',
      popular: false,
      category: 'Design'
    },
    {
      title: 'AI Music Composition Suite',
      description: 'Compose original music with AI-powered composition tools and royalty-free licensing',
      icon: '🎵',
      price: '$119/month',
      features: ['AI composition', 'Multiple genres', 'Instrument simulation', 'Royalty-free music', 'Mood matching', 'Collaboration tools'],
      benefits: ['Unlimited compositions', 'Professional quality', 'No copyright issues', 'Custom branding'],
      link: '/ai-music-composition',
      popular: false,
      category: 'Content Creation'
    },
    {
      title: 'AI Fitness Coach Pro',
      description: 'Personalized fitness coaching with AI-powered workout plans and nutrition guidance',
      icon: '💪',
      price: '$89/month',
      features: ['Personalized workouts', 'Progress tracking', 'Nutrition advice', 'Goal setting', 'Wearable integration', 'Community features'],
      benefits: ['Better results', 'Motivation boost', 'Flexible scheduling', 'Health insights'],
      link: '/ai-fitness-coach',
      popular: false,
      category: 'Health & Wellness'
    },
    {
      title: 'AI Sales Automation Hub',
      description: 'Boost sales with AI-powered lead generation, conversion optimization, and CRM integration',
      icon: '💰',
      price: '$199/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'CRM integration', 'Pipeline management', 'Performance analytics'],
      benefits: ['35% more leads', '50% conversion increase', '25% revenue growth', 'Better lead quality'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales'
    },
    {
      title: 'AI Data Visualization Pro',
      description: 'Transform complex data into interactive visualizations and storytelling dashboards',
      icon: '📊',
      price: '$139/month',
      features: ['Interactive dashboards', 'Real-time visualization', 'Custom charts', 'Data storytelling', 'Collaborative features', 'Export options'],
      benefits: ['Faster insights', 'Better decisions', 'Stunning presentations', 'Data democratization'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics'
    },
    {
      title: 'AI 3D Generation Studio',
      description: 'Create 3D models and environments with AI technology for games, VR, and AR applications',
      icon: '🎮',
      price: '$249/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support', 'Physics simulation', 'Rendering optimization'],
      benefits: ['Professional 3D content', 'Time savings', 'Creative freedom', 'Industry standards'],
      link: '/ai-3d-generation',
      popular: false,
      category: 'Design'
    },
    {
      title: 'AI Customer Support Pro',
      description: 'Advanced customer support with AI-powered ticket management and sentiment analysis',
      icon: '🎧',
      price: '$169/month',
      features: ['Ticket automation', 'Sentiment analysis', 'Knowledge base', 'Multi-channel support', 'Escalation management', 'Performance metrics'],
      benefits: ['Faster resolution', 'Higher satisfaction', '24/7 availability', 'Reduced workload'],
      link: '/ai-customer-support',
      popular: true,
      category: 'Customer Service'
    },
    {
      title: 'AI Content Writer Pro',
      description: 'Generate high-quality content with AI-powered writing assistance and SEO optimization',
      icon: '✍️',
      price: '$79/month',
      features: ['Blog posts', 'Social media content', 'Product descriptions', 'SEO optimization', 'Plagiarism check', 'Tone adjustment'],
      benefits: ['10x content output', 'SEO optimized', 'Brand voice consistency', 'Quality assurance'],
      link: '/ai-content-writer',
      popular: true,
      category: 'Content Creation'
    },
    {
      title: 'AI Inventory Manager Pro',
      description: 'Optimize inventory with AI-powered demand forecasting and supply chain management',
      icon: '📦',
      price: '$149/month',
      features: ['Demand forecasting', 'Stock optimization', 'Reorder alerts', 'Analytics dashboard', 'Supplier management', 'Cost optimization'],
      benefits: ['30% inventory reduction', '99% stock accuracy', 'Zero stockouts', 'Reduced carrying costs'],
      link: '/ai-inventory-manager',
      popular: false,
      category: 'Operations'
    },
    {
      title: 'AI HR Assistant Pro',
      description: 'Streamline HR processes with AI-powered recruitment, management, and employee analytics',
      icon: '👥',
      price: '$189/month',
      features: ['Resume screening', 'Interview scheduling', 'Employee analytics', 'Performance tracking', 'Skills assessment', 'Retention insights'],
      benefits: ['50% faster hiring', 'Better candidate matching', 'Reduced bias', 'Improved retention'],
      link: '/ai-hr-assistant',
      popular: false,
      category: 'Human Resources'
    },
    {
      title: 'AI Financial Advisor Pro',
      description: 'Personalized financial planning with AI-powered investment advice and risk management',
      icon: '💼',
      price: '$299/month',
      features: ['Portfolio analysis', 'Risk assessment', 'Tax optimization', 'Retirement planning', 'Market insights', 'Goal tracking'],
      benefits: ['Better returns', 'Risk management', 'Tax savings', 'Financial security'],
      link: '/ai-financial-advisor',
      popular: false,
      category: 'Finance'
    },
    {
      title: 'AI Legal Assistant Pro',
      description: 'Legal document analysis and contract review with AI technology and compliance monitoring',
      icon: '⚖️',
      price: '$399/month',
      features: ['Contract analysis', 'Legal research', 'Document generation', 'Compliance checking', 'Risk assessment', 'Case law research'],
      benefits: ['Faster reviews', 'Risk identification', 'Cost savings', 'Compliance assurance'],
      link: '/ai-legal-assistant',
      popular: false,
      category: 'Legal'
    },
    {
      title: 'AI SEO Optimizer',
      description: 'Boost your website rankings with AI-powered SEO analysis and optimization recommendations',
      icon: '🔍',
      price: '$129/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis', 'Rank tracking', 'Link building'],
      benefits: ['Higher rankings', 'More organic traffic', 'Better visibility', 'Competitive advantage'],
      link: '/ai-seo-optimizer',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Translation Hub',
      description: 'Professional translation services with AI-powered accuracy and cultural adaptation',
      icon: '🌐',
      price: '$159/month',
      features: ['100+ languages', 'Cultural adaptation', 'Industry-specific terms', 'Real-time translation', 'Quality assurance', 'API integration'],
      benefits: ['99% accuracy', 'Cultural sensitivity', 'Faster delivery', 'Cost effective'],
      link: '/ai-translation-hub',
      popular: false,
      category: 'Communication'
    },
    {
      title: 'AI Security Monitor',
      description: 'Advanced cybersecurity monitoring with AI-powered threat detection and response',
      icon: '🛡️',
      price: '$199/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance monitoring', 'Security analytics', '24/7 monitoring'],
      benefits: ['Proactive protection', 'Faster response', 'Compliance assurance', 'Risk reduction'],
      link: '/ai-security-monitor',
      popular: true,
      category: 'Security'
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'Optimize your online store with AI-powered product recommendations and conversion optimization',
      icon: '🛒',
      price: '$179/month',
      features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer segmentation', 'A/B testing', 'Analytics dashboard'],
      benefits: ['Higher conversions', 'Increased revenue', 'Better customer experience', 'Data-driven decisions'],
      link: '/ai-ecommerce-optimizer',
      popular: true,
      category: 'E-commerce'
    },
    {
      title: 'AI Quantum Computing Simulator',
      description: 'Advanced quantum computing simulation and algorithm development platform for researchers and developers',
      icon: '⚛️',
      price: '$499/month',
      features: ['Quantum circuit design', 'Algorithm simulation', 'Error correction', 'Performance optimization', 'Cloud quantum access', 'Research tools'],
      benefits: ['Cutting-edge research', 'Quantum advantage', 'Future-proof technology', 'Academic collaboration'],
      link: '/ai-quantum-simulator',
      popular: false,
      category: 'Quantum Computing'
    },
    {
      title: 'AI Blockchain Analyzer',
      description: 'Comprehensive blockchain analysis with AI-powered transaction monitoring and smart contract auditing',
      icon: '⛓️',
      price: '$299/month',
      features: ['Transaction analysis', 'Smart contract auditing', 'DeFi monitoring', 'Risk assessment', 'Compliance tracking', 'Real-time alerts'],
      benefits: ['Enhanced security', 'Regulatory compliance', 'Risk mitigation', 'Market insights'],
      link: '/ai-blockchain-analyzer',
      popular: true,
      category: 'Blockchain'
    },
    {
      title: 'AI Metaverse Builder',
      description: 'Create immersive virtual worlds and metaverse experiences with AI-powered content generation',
      icon: '🌐',
      price: '$399/month',
      features: ['3D world generation', 'Avatar creation', 'Virtual events', 'NFT integration', 'Social features', 'VR/AR support'],
      benefits: ['Immersive experiences', 'Virtual presence', 'Digital assets', 'Community building'],
      link: '/ai-metaverse-builder',
      popular: true,
      category: 'Metaverse'
    },
    {
      title: 'AI Climate Intelligence',
      description: 'Environmental monitoring and climate change analysis with AI-powered predictive modeling',
      icon: '🌍',
      price: '$249/month',
      features: ['Climate modeling', 'Carbon tracking', 'Sustainability metrics', 'Environmental alerts', 'Green energy optimization', 'ESG reporting'],
      benefits: ['Environmental impact', 'Sustainability goals', 'Regulatory compliance', 'Green transformation'],
      link: '/ai-climate-intelligence',
      popular: false,
      category: 'Sustainability'
    },
    {
      title: 'AI Space Analytics',
      description: 'Satellite data analysis and space industry intelligence with AI-powered insights',
      icon: '🛰️',
      price: '$599/month',
      features: ['Satellite imagery analysis', 'Space debris tracking', 'Orbital mechanics', 'Launch optimization', 'Space weather', 'Mission planning'],
      benefits: ['Space industry insights', 'Mission success', 'Cost optimization', 'Risk reduction'],
      link: '/ai-space-analytics',
      popular: false,
      category: 'Space Technology'
    },
    {
      title: 'AI Biotech Accelerator',
      description: 'Drug discovery and biotechnology research acceleration with AI-powered molecular analysis',
      icon: '🧬',
      price: '$799/month',
      features: ['Drug discovery', 'Molecular modeling', 'Protein folding', 'Clinical trial optimization', 'Biomarker identification', 'Regulatory compliance'],
      benefits: ['Faster drug development', 'Reduced costs', 'Higher success rates', 'Life-saving innovations'],
      link: '/ai-biotech-accelerator',
      popular: true,
      category: 'Biotechnology'
    },
    {
      title: 'AI Autonomous Vehicle Simulator',
      description: 'Advanced simulation platform for autonomous vehicle testing and development',
      icon: '🚗',
      price: '$699/month',
      features: ['Vehicle simulation', 'Traffic modeling', 'Safety testing', 'Route optimization', 'Sensor simulation', 'Real-world testing'],
      benefits: ['Safer vehicles', 'Faster development', 'Cost reduction', 'Regulatory compliance'],
      link: '/ai-autonomous-vehicle-simulator',
      popular: false,
      category: 'Autonomous Systems'
    },
    {
      title: 'AI Smart City Platform',
      description: 'Comprehensive smart city management with AI-powered urban planning and optimization',
      icon: '🏙️',
      price: '$1,299/month',
      features: ['Urban planning', 'Traffic optimization', 'Energy management', 'Waste management', 'Public safety', 'Citizen services'],
      benefits: ['Efficient cities', 'Better quality of life', 'Resource optimization', 'Sustainable development'],
      link: '/ai-smart-city-platform',
      popular: true,
      category: 'Smart Cities'
    },
    {
      title: 'AI Edge Computing Manager',
      description: 'Intelligent edge computing orchestration and optimization for distributed systems',
      icon: '📡',
      price: '$349/month',
      features: ['Edge orchestration', 'Latency optimization', 'Resource management', 'Security monitoring', 'Auto-scaling', 'Performance analytics'],
      benefits: ['Lower latency', 'Better performance', 'Cost efficiency', 'Scalability'],
      link: '/ai-edge-computing-manager',
      popular: false,
      category: 'Edge Computing'
    },
    {
      title: 'AI Digital Twin Creator',
      description: 'Create digital twins of physical assets with AI-powered monitoring and predictive maintenance',
      icon: '👥',
      price: '$449/month',
      features: ['3D modeling', 'Real-time monitoring', 'Predictive maintenance', 'Performance optimization', 'Simulation', 'IoT integration'],
      benefits: ['Asset optimization', 'Predictive insights', 'Reduced downtime', 'Cost savings'],
      link: '/ai-digital-twin-creator',
      popular: true,
      category: 'Digital Twins'
    },
    {
      title: 'AI Neural Interface Designer',
      description: 'Brain-computer interface development and neural signal processing with AI technology',
      icon: '🧠',
      price: '$999/month',
      features: ['Neural signal processing', 'BCI development', 'Cognitive enhancement', 'Medical applications', 'Research tools', 'Safety protocols'],
      benefits: ['Medical breakthroughs', 'Enhanced capabilities', 'Research advancement', 'Therapeutic applications'],
      link: '/ai-neural-interface-designer',
      popular: false,
      category: 'Neural Technology'
    },
    {
      title: 'AI Robotic Process Automation',
      description: 'Advanced RPA with AI decision-making capabilities for complex business processes',
      icon: '🤖',
      price: '$199/month',
      features: ['Process automation', 'AI decision making', 'Exception handling', 'Workflow optimization', 'Integration hub', 'Analytics dashboard'],
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalability'],
      link: '/ai-robotic-process-automation',
      popular: true,
      category: 'RPA'
    },
    {
      title: 'AI Augmented Reality Studio',
      description: 'Create immersive AR experiences with AI-powered content generation and spatial computing',
      icon: '🥽',
      price: '$399/month',
      features: ['AR content creation', 'Spatial mapping', 'Object recognition', 'Gesture control', 'Multi-platform support', 'Real-time rendering'],
      benefits: ['Immersive experiences', 'Enhanced productivity', 'Interactive content', 'Future-ready technology'],
      link: '/ai-augmented-reality-studio',
      popular: true,
      category: 'Augmented Reality'
    },
    {
      title: 'AI Cybersecurity Shield',
      description: 'Advanced AI-powered cybersecurity with threat detection, prevention, and response automation',
      icon: '🛡️',
      price: '$299/month',
      features: ['Threat detection', 'Automated response', 'Vulnerability scanning', 'Incident analysis', 'Compliance monitoring', 'Security training'],
      benefits: ['Enhanced security', 'Faster response', 'Reduced risk', 'Compliance assurance'],
      link: '/ai-cybersecurity-shield',
      popular: true,
      category: 'Cybersecurity'
    },
    {
      title: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with AI-powered forecasting and optimization',
      icon: '📦',
      price: '$249/month',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Supplier management', 'Risk assessment', 'Sustainability tracking'],
      benefits: ['Cost reduction', 'Efficiency gains', 'Risk mitigation', 'Sustainability'],
      link: '/ai-supply-chain-optimizer',
      popular: false,
      category: 'Supply Chain'
    },
    {
      title: 'AI Energy Management System',
      description: 'Smart energy optimization with AI-powered grid management and renewable energy integration',
      icon: '⚡',
      price: '$199/month',
      features: ['Energy optimization', 'Grid management', 'Renewable integration', 'Demand response', 'Carbon tracking', 'Cost analysis'],
      benefits: ['Energy savings', 'Sustainability', 'Cost reduction', 'Grid stability'],
      link: '/ai-energy-management-system',
      popular: false,
      category: 'Energy'
    },
    {
      title: 'AI Predictive Maintenance Pro',
      description: 'Advanced predictive maintenance with AI-powered failure prediction and optimization',
      icon: '🔧',
      price: '$179/month',
      features: ['Failure prediction', 'Maintenance scheduling', 'Asset monitoring', 'Performance optimization', 'Cost analysis', 'ROI tracking'],
      benefits: ['Reduced downtime', 'Cost savings', 'Extended asset life', 'Improved reliability'],
      link: '/ai-predictive-maintenance-pro',
      popular: true,
      category: 'Maintenance'
    },
    {
      title: 'AI Content Moderation Suite',
      description: 'Automated content moderation with AI-powered detection and classification of inappropriate content',
      icon: '🔍',
      price: '$149/month',
      features: ['Content detection', 'Automated moderation', 'Sentiment analysis', 'Policy enforcement', 'User reporting', 'Analytics dashboard'],
      benefits: ['Safer platforms', 'Reduced manual work', 'Consistent moderation', 'Scalable solutions'],
      link: '/ai-content-moderation-suite',
      popular: false,
      category: 'Content Moderation'
    },
    {
      title: 'AI Personalization Engine',
      description: 'Advanced personalization with AI-powered user behavior analysis and content customization',
      icon: '🎯',
      price: '$129/month',
      features: ['User profiling', 'Behavior analysis', 'Content customization', 'A/B testing', 'Recommendation engine', 'Performance tracking'],
      benefits: ['Higher engagement', 'Better user experience', 'Increased conversions', 'Data-driven insights'],
      link: '/ai-personalization-engine',
      popular: true,
      category: 'Personalization'
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, decision-making, and intelligent automation',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
      color: 'text-purple-400',
      category: 'AI Development'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Named Entity Recognition', 'Text Summarization'],
      color: 'text-blue-400',
      category: 'Language AI'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and visual intelligence',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'OCR Processing', 'Medical Imaging'],
      color: 'text-green-400',
      category: 'Visual AI'
    },
    {
      title: 'AI Automation Suite',
      description: 'Intelligent process automation with decision-making capabilities and workflow optimization',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'RPA Integration', 'Smart Routing'],
      color: 'text-cyan-400',
      category: 'Automation'
    },
    {
      title: 'AI Data Intelligence',
      description: 'Transform complex data into interactive visualizations and actionable business insights',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Interactive Dashboards', 'Real-time Visualization', 'Custom Charts', 'Data Storytelling', 'Predictive Modeling', 'Anomaly Detection'],
      color: 'text-orange-400',
      category: 'Data Science'
    },
    {
      title: 'AI 3D & AR Solutions',
      description: 'Create 3D models, environments, and augmented reality experiences with AI technology',
      icon: Cube,
      price: '$1,600/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support', 'Spatial Computing', 'Mixed Reality'],
      color: 'text-pink-400',
      category: 'Immersive Tech'
    },
    {
      title: 'AI Voice & Audio',
      description: 'Advanced voice cloning, text-to-speech, and audio processing solutions',
      icon: Mic,
      price: '$1,300/month',
      features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support', 'Audio Enhancement', 'Voice Biometrics'],
      color: 'text-indigo-400',
      category: 'Audio AI'
    },
    {
      title: 'AI Content Intelligence',
      description: 'Automated content creation, optimization, and management for marketing and communication',
      icon: FileText,
      price: '$1,000/month',
      features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Content Strategy', 'Brand Voice Training'],
      color: 'text-yellow-400',
      category: 'Content AI'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced forecasting, trend analysis, and predictive modeling with machine learning',
      icon: TrendingUp,
      price: '$1,700/month',
      features: ['Sales Forecasting', 'Demand Prediction', 'Risk Assessment', 'Trend Analysis', 'Market Intelligence', 'Scenario Planning'],
      color: 'text-red-400',
      category: 'Predictive AI'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce, content, and user experience',
      icon: Target,
      price: '$1,400/month',
      features: ['Product Recommendations', 'Content Personalization', 'User Behavior Analysis', 'A/B Testing', 'Collaborative Filtering', 'Real-time Adaptation'],
      color: 'text-teal-400',
      category: 'Personalization'
    },
    {
      title: 'AI Security & Fraud Detection',
      description: 'Advanced fraud prevention, security monitoring, and threat intelligence',
      icon: Shield,
      price: '$1,900/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System', 'Threat Intelligence', 'Compliance Monitoring'],
      color: 'text-red-500',
      category: 'Security AI'
    },
    {
      title: 'AI Document Intelligence',
      description: 'Intelligent document analysis, data extraction, and automated processing',
      icon: Search,
      price: '$1,200/month',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Form Recognition', 'Contract Analysis', 'Knowledge Management'],
      color: 'text-gray-400',
      category: 'Document AI'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnosis, treatment planning, and healthcare optimization',
      icon: Stethoscope,
      price: '$2,200/month',
      features: ['Medical Imaging', 'Diagnostic Support', 'Treatment Planning', 'Drug Discovery', 'Patient Monitoring', 'Clinical Decision Support'],
      color: 'text-emerald-400',
      category: 'Healthcare AI'
    },
    {
      title: 'AI Financial Intelligence',
      description: 'Advanced financial analysis, trading algorithms, and risk management',
      icon: DollarSign,
      price: '$1,800/month',
      features: ['Algorithmic Trading', 'Risk Assessment', 'Portfolio Optimization', 'Fraud Detection', 'Credit Scoring', 'Market Analysis'],
      color: 'text-green-500',
      category: 'FinTech AI'
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management, logistics optimization, and demand forecasting',
      icon: Truck,
      price: '$1,600/month',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Quality Control', 'Sustainability Tracking'],
      color: 'text-blue-500',
      category: 'Supply Chain AI'
    },
    {
      title: 'AI Energy Management',
      description: 'Smart energy optimization, renewable energy integration, and sustainability solutions',
      icon: Zap,
      price: '$1,500/month',
      features: ['Energy Optimization', 'Renewable Integration', 'Grid Management', 'Carbon Tracking', 'Predictive Maintenance', 'Smart Buildings'],
      color: 'text-yellow-500',
      category: 'Energy AI'
    },
    {
      title: 'AI Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning algorithms for complex optimization and pattern recognition',
      icon: Brain,
      price: '$2,500/month',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Pattern Recognition', 'Quantum Neural Networks', 'Hybrid Classical-Quantum', 'Research Support'],
      color: 'text-purple-600',
      category: 'Quantum AI'
    },
    {
      title: 'AI Autonomous Systems',
      description: 'Development and deployment of fully autonomous systems with AI decision-making capabilities',
      icon: Cpu,
      price: '$2,200/month',
      features: ['Autonomous Vehicles', 'Robotic Systems', 'Drone Operations', 'Smart Infrastructure', 'Self-Healing Networks', 'Adaptive Control'],
      color: 'text-cyan-600',
      category: 'Autonomous AI'
    },
    {
      title: 'AI Metaverse Development',
      description: 'Create immersive virtual worlds and metaverse experiences with AI-powered content generation',
      icon: Globe,
      price: '$1,800/month',
      features: ['Virtual World Creation', 'Avatar AI', 'Virtual Events', 'NFT Integration', 'Spatial Computing', 'Social AI'],
      color: 'text-pink-600',
      category: 'Metaverse AI'
    },
    {
      title: 'AI Space Technology',
      description: 'Space industry AI solutions for satellite operations, mission planning, and space exploration',
      icon: Globe,
      price: '$2,800/month',
      features: ['Satellite Operations', 'Mission Planning', 'Space Debris Tracking', 'Orbital Mechanics', 'Space Weather', 'Launch Optimization'],
      color: 'text-indigo-600',
      category: 'Space AI'
    },
    {
      title: 'AI Biotechnology',
      description: 'AI-powered biotechnology solutions for drug discovery, genomics, and medical research',
      icon: Stethoscope,
      price: '$2,100/month',
      features: ['Drug Discovery', 'Genomics Analysis', 'Protein Folding', 'Clinical Trials', 'Biomarker Discovery', 'Personalized Medicine'],
      color: 'text-green-600',
      category: 'Bio AI'
    },
    {
      title: 'AI Climate Intelligence',
      description: 'Environmental monitoring and climate change analysis with AI-powered predictive modeling',
      icon: Globe,
      price: '$1,600/month',
      features: ['Climate Modeling', 'Carbon Tracking', 'Environmental Monitoring', 'Sustainability Analytics', 'Green Energy', 'ESG Reporting'],
      color: 'text-emerald-600',
      category: 'Climate AI'
    },
    {
      title: 'AI Neural Interfaces',
      description: 'Brain-computer interface development and neural signal processing with AI technology',
      icon: Brain,
      price: '$3,000/month',
      features: ['Neural Signal Processing', 'BCI Development', 'Cognitive Enhancement', 'Medical Applications', 'Research Tools', 'Safety Protocols'],
      color: 'text-violet-600',
      category: 'Neural AI'
    },
    {
      title: 'AI Digital Twins',
      description: 'Create and manage digital twins of physical assets with AI-powered monitoring and simulation',
      icon: Cpu,
      price: '$1,700/month',
      features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Maintenance', 'Performance Optimization', 'Simulation', 'IoT Integration'],
      color: 'text-blue-600',
      category: 'Digital Twin AI'
    },
    {
      title: 'AI Edge Intelligence',
      description: 'Edge computing AI solutions for real-time processing and decision-making at the edge',
      icon: Cpu,
      price: '$1,400/month',
      features: ['Edge Processing', 'Real-time Analytics', 'Latency Optimization', 'Resource Management', 'Security', 'Auto-scaling'],
      color: 'text-orange-600',
      category: 'Edge AI'
    },
    {
      title: 'AI Blockchain Intelligence',
      description: 'Blockchain analysis and DeFi solutions with AI-powered insights and automation',
      icon: Lock,
      price: '$1,900/month',
      features: ['Blockchain Analysis', 'DeFi Optimization', 'Smart Contract Auditing', 'Risk Assessment', 'Compliance', 'Trading Algorithms'],
      color: 'text-yellow-600',
      category: 'Blockchain AI'
    },
    {
      title: 'AI Cybersecurity Intelligence',
      description: 'Advanced AI-powered cybersecurity with threat detection, prevention, and automated response',
      icon: Shield,
      price: '$2,000/month',
      features: ['Threat Detection', 'Automated Response', 'Vulnerability Assessment', 'Incident Analysis', 'Compliance Monitoring', 'Security Training'],
      color: 'text-red-600',
      category: 'Security AI'
    },
    {
      title: 'AI Smart Cities',
      description: 'Comprehensive smart city solutions with AI-powered urban planning and management',
      icon: Building,
      price: '$2,300/month',
      features: ['Urban Planning', 'Traffic Optimization', 'Energy Management', 'Waste Management', 'Public Safety', 'Citizen Services'],
      color: 'text-teal-600',
      category: 'Smart City AI'
    },
    {
      title: 'AI Supply Chain Intelligence',
      description: 'Intelligent supply chain management with AI-powered optimization and risk management',
      icon: Truck,
      price: '$1,600/month',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Risk Assessment', 'Sustainability'],
      color: 'text-amber-600',
      category: 'Supply Chain AI'
    },
    {
      title: 'AI Content Intelligence',
      description: 'Advanced content analysis, generation, and moderation with AI technology',
      icon: FileText,
      price: '$1,300/month',
      features: ['Content Analysis', 'Automated Generation', 'Moderation', 'Sentiment Analysis', 'SEO Optimization', 'Brand Voice'],
      color: 'text-rose-600',
      category: 'Content AI'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Migration & Management',
      description: 'Comprehensive cloud migration, setup, optimization, and management services',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Multi-cloud Strategy', 'Disaster Recovery'],
      color: 'text-blue-400',
      category: 'Cloud Computing'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions with threat detection, prevention, and compliance',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance Management', 'Penetration Testing'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'GitOps Implementation'],
      color: 'text-green-400',
      category: 'DevOps'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and analytics',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Data Migration', 'Real-time Analytics'],
      color: 'text-purple-400',
      category: 'Data Management'
    },
    {
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting for digital transformation, optimization, and innovation',
      icon: Briefcase,
      price: '$1,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Change Management', 'ROI Analysis'],
      color: 'text-yellow-400',
      category: 'Consulting'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design and implement robust network infrastructure solutions with security and performance optimization',
      icon: Globe,
      price: '$1,400/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring', 'SD-WAN Solutions', 'Network Automation'],
      color: 'text-indigo-400',
      category: 'Networking'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development with modern frameworks',
      icon: Smartphone,
      price: '$1,500/month',
      features: ['iOS/Android Apps', 'Cross-platform Development', 'UI/UX Design', 'App Store Optimization', 'Progressive Web Apps', 'Mobile Security'],
      color: 'text-pink-400',
      category: 'Mobile Development'
    },
    {
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies and performance optimization',
      icon: Code,
      price: '$1,200/month',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization', 'Progressive Web Apps', 'Microservices Architecture'],
      color: 'text-cyan-400',
      category: 'Web Development'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Business intelligence and data analytics solutions with real-time insights',
      icon: BarChart,
      price: '$1,300/month',
      features: ['Data Warehousing', 'Business Intelligence', 'Reporting Dashboards', 'Data Mining', 'Predictive Analytics', 'Data Visualization'],
      color: 'text-orange-400',
      category: 'Data Analytics'
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support and system maintenance services with proactive monitoring',
      icon: Wrench,
      price: '$800/month',
      features: ['24/7 Support', 'System Maintenance', 'Software Updates', 'Hardware Management', 'Remote Monitoring', 'Help Desk Services'],
      color: 'text-gray-400',
      category: 'Support'
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development, cryptocurrency solutions, and Web3 applications',
      icon: Lock,
      price: '$2,000/month',
      features: ['Smart Contracts', 'DApp Development', 'Token Creation', 'DeFi Solutions', 'NFT Marketplaces', 'Web3 Integration'],
      color: 'text-yellow-500',
      category: 'Blockchain'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Internet of Things development, implementation, and edge computing solutions',
      icon: Cpu,
      price: '$1,600/month',
      features: ['IoT Device Development', 'Sensor Integration', 'Data Collection', 'Real-time Monitoring', 'Edge Computing', 'IoT Security'],
      color: 'text-green-500',
      category: 'IoT'
    },
    {
      title: 'AI Infrastructure',
      description: 'AI infrastructure setup, GPU clusters, and machine learning platform deployment',
      icon: Brain,
      price: '$1,800/month',
      features: ['GPU Cluster Setup', 'ML Platform Deployment', 'Model Serving', 'Data Pipeline Setup', 'AI Model Training', 'MLOps Implementation'],
      color: 'text-purple-500',
      category: 'AI Infrastructure'
    },
    {
      title: 'Enterprise Integration',
      description: 'Enterprise system integration, API development, and legacy system modernization',
      icon: Link,
      price: '$1,400/month',
      features: ['API Development', 'System Integration', 'Legacy Modernization', 'Data Synchronization', 'Workflow Automation', 'Enterprise Architecture'],
      color: 'text-blue-500',
      category: 'Integration'
    },
    {
      title: 'Disaster Recovery & Backup',
      description: 'Comprehensive disaster recovery, backup solutions, and business continuity planning',
      icon: HardDrive,
      price: '$1,100/month',
      features: ['Backup Solutions', 'Disaster Recovery', 'Business Continuity', 'Data Replication', 'Recovery Testing', 'Compliance Backup'],
      color: 'text-red-500',
      category: 'Data Protection'
    },
    {
      title: 'Compliance & Governance',
      description: 'IT compliance, governance, and regulatory adherence solutions',
      icon: FileCheck,
      price: '$1,300/month',
      features: ['Compliance Management', 'Audit Preparation', 'Policy Development', 'Risk Assessment', 'Regulatory Reporting', 'Governance Framework'],
      color: 'text-indigo-500',
      category: 'Compliance'
    },
    {
      title: 'Quantum Computing Infrastructure',
      description: 'Quantum computing infrastructure setup and management for research and enterprise applications',
      icon: Cpu,
      price: '$3,500/month',
      features: ['Quantum Hardware Setup', 'Quantum Software Stack', 'Quantum Algorithms', 'Research Support', 'Training Programs', 'Maintenance'],
      color: 'text-purple-600',
      category: 'Quantum Computing'
    },
    {
      title: 'Edge Computing Solutions',
      description: 'Edge computing infrastructure and management for distributed systems and IoT applications',
      icon: Cpu,
      price: '$1,800/month',
      features: ['Edge Infrastructure', 'Latency Optimization', 'Resource Management', 'Security', 'Monitoring', 'Auto-scaling'],
      color: 'text-cyan-600',
      category: 'Edge Computing'
    },
    {
      title: '5G Network Implementation',
      description: '5G network design, implementation, and optimization for enterprise and carrier applications',
      icon: Globe,
      price: '$2,200/month',
      features: ['5G Network Design', 'Infrastructure Setup', 'Performance Optimization', 'Security Implementation', 'Testing & Validation', 'Maintenance'],
      color: 'text-blue-600',
      category: '5G Networks'
    },
    {
      title: 'AI Infrastructure Management',
      description: 'AI infrastructure setup, GPU clusters, and machine learning platform deployment and management',
      icon: Brain,
      price: '$2,500/month',
      features: ['GPU Cluster Setup', 'ML Platform Deployment', 'Model Serving', 'Data Pipeline Setup', 'AI Model Training', 'MLOps Implementation'],
      color: 'text-purple-600',
      category: 'AI Infrastructure'
    },
    {
      title: 'Blockchain Infrastructure',
      description: 'Blockchain infrastructure setup, smart contract development, and DeFi platform implementation',
      icon: Lock,
      price: '$2,800/month',
      features: ['Blockchain Setup', 'Smart Contract Development', 'DeFi Platforms', 'Token Creation', 'Security Auditing', 'Maintenance'],
      color: 'text-yellow-600',
      category: 'Blockchain'
    },
    {
      title: 'IoT Platform Development',
      description: 'Comprehensive IoT platform development and management for connected devices and systems',
      icon: Cpu,
      price: '$1,900/month',
      features: ['IoT Platform Design', 'Device Integration', 'Data Collection', 'Real-time Monitoring', 'Security Implementation', 'Analytics'],
      color: 'text-green-600',
      category: 'IoT'
    },
    {
      title: 'Metaverse Infrastructure',
      description: 'Metaverse infrastructure development and management for virtual worlds and immersive experiences',
      icon: Globe,
      price: '$2,600/month',
      features: ['Virtual World Infrastructure', 'Avatar Systems', 'Virtual Events', 'NFT Integration', 'VR/AR Support', 'Social Features'],
      color: 'text-pink-600',
      category: 'Metaverse'
    },
    {
      title: 'Space Technology Infrastructure',
      description: 'Space technology infrastructure and satellite communication systems for space industry applications',
      icon: Globe,
      price: '$3,200/month',
      features: ['Satellite Communication', 'Ground Station Setup', 'Mission Control Systems', 'Data Processing', 'Security', 'Monitoring'],
      color: 'text-indigo-600',
      category: 'Space Technology'
    },
    {
      title: 'Biotechnology IT Solutions',
      description: 'IT solutions for biotechnology and pharmaceutical companies with specialized compliance and security',
      icon: Stethoscope,
      price: '$2,400/month',
      features: ['Lab Information Systems', 'Data Management', 'Compliance Systems', 'Security Implementation', 'Research Tools', 'Regulatory Support'],
      color: 'text-green-600',
      category: 'Biotechnology'
    },
    {
      title: 'Climate Technology Solutions',
      description: 'IT solutions for climate monitoring, environmental data management, and sustainability tracking',
      icon: Globe,
      price: '$1,700/month',
      features: ['Environmental Monitoring', 'Data Collection', 'Climate Modeling', 'Sustainability Tracking', 'Reporting Systems', 'Analytics'],
      color: 'text-emerald-600',
      category: 'Climate Technology'
    },
    {
      title: 'Smart City Infrastructure',
      description: 'Comprehensive smart city infrastructure development and management for urban environments',
      icon: Building,
      price: '$2,900/month',
      features: ['Urban Infrastructure', 'Traffic Management', 'Energy Systems', 'Waste Management', 'Public Safety', 'Citizen Services'],
      color: 'text-teal-600',
      category: 'Smart Cities'
    },
    {
      title: 'Digital Twin Infrastructure',
      description: 'Digital twin infrastructure development and management for physical asset monitoring and simulation',
      icon: Cpu,
      price: '$2,100/month',
      features: ['3D Modeling Systems', 'Real-time Monitoring', 'Simulation Platforms', 'IoT Integration', 'Analytics', 'Visualization'],
      color: 'text-blue-600',
      category: 'Digital Twins'
    },
    {
      title: 'Neural Interface Technology',
      description: 'Neural interface technology infrastructure and development for brain-computer interfaces',
      icon: Brain,
      price: '$3,800/month',
      features: ['Neural Signal Processing', 'BCI Hardware', 'Software Development', 'Safety Systems', 'Research Tools', 'Medical Applications'],
      color: 'text-violet-600',
      category: 'Neural Technology'
    },
    {
      title: 'Autonomous Systems Infrastructure',
      description: 'Infrastructure for autonomous systems including vehicles, drones, and robotic systems',
      icon: Cpu,
      price: '$2,700/month',
      features: ['Autonomous Vehicle Infrastructure', 'Drone Management', 'Robotic Systems', 'Safety Systems', 'Monitoring', 'Maintenance'],
      color: 'text-cyan-600',
      category: 'Autonomous Systems'
    },
    {
      title: 'Cybersecurity Operations Center',
      description: '24/7 cybersecurity operations center with advanced threat detection and response capabilities',
      icon: Shield,
      price: '$2,200/month',
      features: ['24/7 Monitoring', 'Threat Detection', 'Incident Response', 'Vulnerability Management', 'Security Training', 'Compliance'],
      color: 'text-red-600',
      category: 'Cybersecurity'
    },
    {
      title: 'Data Center Modernization',
      description: 'Modern data center design, implementation, and optimization for enterprise applications',
      icon: Database,
      price: '$1,600/month',
      features: ['Data Center Design', 'Infrastructure Setup', 'Performance Optimization', 'Security Implementation', 'Monitoring', 'Maintenance'],
      color: 'text-gray-600',
      category: 'Data Centers'
    },
    {
      title: 'Hybrid Cloud Solutions',
      description: 'Hybrid cloud infrastructure design and management for seamless public and private cloud integration',
      icon: Cloud,
      price: '$1,800/month',
      features: ['Hybrid Cloud Design', 'Multi-cloud Management', 'Data Migration', 'Security Integration', 'Cost Optimization', 'Monitoring'],
      color: 'text-blue-600',
      category: 'Hybrid Cloud'
    },
    {
      title: 'API Gateway Management',
      description: 'API gateway design, implementation, and management for microservices and enterprise integration',
      icon: Link,
      price: '$1,200/month',
      features: ['API Gateway Setup', 'Microservices Management', 'Security Implementation', 'Rate Limiting', 'Monitoring', 'Documentation'],
      color: 'text-orange-600',
      category: 'API Management'
    },
    {
      title: 'Real-time Analytics Platform',
      description: 'Real-time analytics platform development and management for streaming data and instant insights',
      icon: BarChart,
      price: '$1,500/month',
      features: ['Streaming Analytics', 'Real-time Processing', 'Data Visualization', 'Alert Systems', 'Performance Monitoring', 'Scalability'],
      color: 'text-green-600',
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
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch holographic-text floating"
                data-text="Zion Tech Group"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect holographic-text" role="doc-subtitle">
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
                  className="cyber-button-advanced px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
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
                <article key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 energy-pulse ${service.popular ? 'ring-2 ring-cyan-400 quantum-card' : 'holographic-card'}`}>
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
                      className="cyber-button-advanced px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
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
                <article key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300 neural-network">
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

          {/* Market Pricing & Benefits Section */}
          <section className="mb-16" aria-labelledby="pricing-heading">
            <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text holographic-text">
              Market-Leading Pricing & Benefits
            </h2>
            
            {/* Market Analysis */}
            <div className="cyber-card p-8 mb-12 max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center neon-text">Industry Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">$50M+</div>
                  <div className="text-gray-300 mb-2">Annual Savings Delivered</div>
                  <div className="text-sm text-gray-400">Across all client implementations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-gray-300 mb-2">Process Automation Rate</div>
                  <div className="text-sm text-gray-400">Industry average: 45%</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                  <div className="text-gray-300 mb-2">Average ROI</div>
                  <div className="text-sm text-gray-400">Within first 12 months</div>
                </div>
              </div>
            </div>
            
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
              <h3 className="text-2xl font-bold text-white mb-4 neon-text holographic-text">Competitive Market Pricing</h3>
              <p className="text-gray-300 mb-6 max-w-4xl mx-auto">
                Our pricing is 40-60% below market rates while delivering superior results. Industry leaders charge $2,000-5,000/month for similar services. 
                We provide enterprise-grade solutions at startup-friendly prices with 24/7 support, regular updates, and comprehensive training included.
              </p>
              
              {/* Detailed Pricing Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="quantum-card p-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">$79-499</div>
                  <div className="text-gray-300 mb-2">Micro SAAS Solutions</div>
                  <div className="text-sm text-gray-400 mb-4">Market rate: $200-1,200</div>
                  <div className="text-xs text-green-400">60% savings</div>
                </div>
                <div className="quantum-card p-6">
                  <div className="text-3xl font-bold text-purple-400 mb-2">$1,000-3,000</div>
                  <div className="text-gray-300 mb-2">AI Services</div>
                  <div className="text-sm text-gray-400 mb-4">Market rate: $2,500-6,000</div>
                  <div className="text-xs text-green-400">50% savings</div>
                </div>
                <div className="quantum-card p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">$800-2,500</div>
                  <div className="text-gray-300 mb-2">IT Services</div>
                  <div className="text-sm text-gray-400 mb-4">Market rate: $1,500-4,000</div>
                  <div className="text-xs text-green-400">40% savings</div>
                </div>
                <div className="quantum-card p-6">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">$2,000-5,000</div>
                  <div className="text-gray-300 mb-2">Enterprise Solutions</div>
                  <div className="text-sm text-gray-400 mb-4">Market rate: $5,000-12,000</div>
                  <div className="text-xs text-green-400">55% savings</div>
                </div>
              </div>
              
              {/* Value Proposition */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4">What's Included in Every Plan:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />24/7 Technical Support</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Regular Updates & Maintenance</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Comprehensive Training</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Data Security & Compliance</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Custom Integration Support</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Performance Monitoring</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-4">Why Choose Zion Tech Group:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><TrendingUp className="w-4 h-4 text-purple-400 mr-2" />Proven 300% ROI Track Record</li>
                    <li className="flex items-center"><TrendingUp className="w-4 h-4 text-purple-400 mr-2" />$50M+ in Client Savings</li>
                    <li className="flex items-center"><TrendingUp className="w-4 h-4 text-purple-400 mr-2" />95% Process Automation Rate</li>
                    <li className="flex items-center"><TrendingUp className="w-4 h-4 text-purple-400 mr-2" />Fortune 500 Client Base</li>
                    <li className="flex items-center"><TrendingUp className="w-4 h-4 text-purple-400 mr-2" />Cutting-Edge Technology</li>
                    <li className="flex items-center"><TrendingUp className="w-4 h-4 text-purple-400 mr-2" />Global 24/7 Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information & Marketing */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text holographic-text">
              Get In Touch - Start Your Transformation Today
            </h2>
            
            {/* Marketing CTA */}
            <div className="cyber-card p-8 mb-12 max-w-6xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 neon-text">Ready to Transform Your Business?</h3>
              <p className="text-lg text-gray-300 mb-6 max-w-4xl mx-auto">
                Join 500+ companies that have already transformed their operations with our AI and IT solutions. 
                Get a free consultation and discover how we can help you achieve 300% ROI within 12 months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button-advanced px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
            
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