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
      title: 'AI Real Estate Assistant',
      description: 'Intelligent property analysis, market insights, and automated property management',
      icon: '🏠',
      price: '$199/month',
      features: ['Property valuation', 'Market analysis', 'Tenant screening', 'Rent optimization', 'Maintenance scheduling', 'Investment insights'],
      benefits: ['25% higher property values', '40% faster tenant placement', '30% reduced vacancy rates', 'Automated management'],
      link: '/ai-real-estate-assistant',
      popular: true,
      category: 'Real Estate'
    },
    {
      title: 'AI Healthcare Assistant',
      description: 'AI-powered patient management, diagnosis support, and healthcare optimization',
      icon: '🏥',
      price: '$299/month',
      features: ['Patient monitoring', 'Diagnosis support', 'Treatment recommendations', 'Appointment scheduling', 'Medical records analysis', 'Drug interaction checks'],
      benefits: ['Improved patient outcomes', 'Reduced diagnosis time', 'Better treatment accuracy', 'Streamlined workflows'],
      link: '/ai-healthcare-assistant',
      popular: true,
      category: 'Healthcare'
    },
    {
      title: 'AI Education Platform',
      description: 'Personalized learning experiences with AI-powered curriculum and student progress tracking',
      icon: '🎓',
      price: '$149/month',
      features: ['Personalized learning paths', 'Adaptive assessments', 'Progress tracking', 'Content generation', 'Student analytics', 'Parent dashboards'],
      benefits: ['40% better learning outcomes', 'Personalized education', 'Real-time progress tracking', 'Engaging content'],
      link: '/ai-education-platform',
      popular: true,
      category: 'Education'
    },
    {
      title: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with demand forecasting and logistics optimization',
      icon: '🚚',
      price: '$229/month',
      features: ['Demand forecasting', 'Route optimization', 'Inventory management', 'Supplier analysis', 'Risk assessment', 'Cost optimization'],
      benefits: ['30% cost reduction', '50% faster delivery', '99% on-time delivery', 'Reduced waste'],
      link: '/ai-supply-chain-optimizer',
      popular: true,
      category: 'Supply Chain'
    },
    {
      title: 'AI Energy Management',
      description: 'Smart energy optimization and renewable energy integration for businesses',
      icon: '⚡',
      price: '$189/month',
      features: ['Energy consumption analysis', 'Renewable integration', 'Cost optimization', 'Carbon tracking', 'Predictive maintenance', 'Smart grid management'],
      benefits: ['35% energy savings', '50% carbon reduction', 'Smart automation', 'Cost optimization'],
      link: '/ai-energy-management',
      popular: false,
      category: 'Energy'
    },
    {
      title: 'AI Legal Document Analyzer',
      description: 'Automated legal document review, contract analysis, and compliance monitoring',
      icon: '⚖️',
      price: '$399/month',
      features: ['Contract analysis', 'Risk assessment', 'Compliance checking', 'Document generation', 'Legal research', 'Case law analysis'],
      benefits: ['80% faster reviews', 'Risk identification', 'Cost savings', 'Compliance assurance'],
      link: '/ai-legal-analyzer',
      popular: false,
      category: 'Legal'
    },
    {
      title: 'AI Agriculture Assistant',
      description: 'Smart farming solutions with crop monitoring, yield prediction, and resource optimization',
      icon: '🌾',
      price: '$179/month',
      features: ['Crop monitoring', 'Yield prediction', 'Weather analysis', 'Resource optimization', 'Pest detection', 'Market insights'],
      benefits: ['25% higher yields', '30% resource savings', 'Better crop health', 'Market optimization'],
      link: '/ai-agriculture-assistant',
      popular: false,
      category: 'Agriculture'
    },
    {
      title: 'AI Travel Planner',
      description: 'Intelligent travel planning with personalized recommendations and cost optimization',
      icon: '✈️',
      price: '$99/month',
      features: ['Personalized itineraries', 'Price optimization', 'Real-time updates', 'Local insights', 'Booking automation', 'Travel analytics'],
      benefits: ['50% cost savings', 'Perfect itineraries', 'Time optimization', 'Stress-free travel'],
      link: '/ai-travel-planner',
      popular: true,
      category: 'Travel'
    },
    {
      title: 'AI Event Management',
      description: 'Automated event planning, attendee management, and real-time event analytics',
      icon: '🎉',
      price: '$159/month',
      features: ['Event planning', 'Attendee management', 'Vendor coordination', 'Real-time analytics', 'Feedback collection', 'ROI tracking'],
      benefits: ['60% time savings', 'Better attendee experience', 'Higher ROI', 'Streamlined planning'],
      link: '/ai-event-management',
      popular: false,
      category: 'Events'
    },
    {
      title: 'AI Restaurant Manager',
      description: 'Smart restaurant operations with inventory management, menu optimization, and customer analytics',
      icon: '🍽️',
      price: '$199/month',
      features: ['Inventory management', 'Menu optimization', 'Customer analytics', 'Staff scheduling', 'Cost control', 'Quality monitoring'],
      benefits: ['25% cost reduction', '30% revenue increase', 'Better customer satisfaction', 'Operational efficiency'],
      link: '/ai-restaurant-manager',
      popular: true,
      category: 'Food & Beverage'
    },
    {
      title: 'AI Fleet Management',
      description: 'Intelligent fleet tracking, maintenance scheduling, and route optimization',
      icon: '🚛',
      price: '$249/month',
      features: ['Fleet tracking', 'Maintenance scheduling', 'Route optimization', 'Driver analytics', 'Fuel optimization', 'Safety monitoring'],
      benefits: ['20% fuel savings', '30% maintenance reduction', 'Improved safety', 'Better efficiency'],
      link: '/ai-fleet-management',
      popular: false,
      category: 'Transportation'
    },
    {
      title: 'AI Insurance Assistant',
      description: 'Automated insurance processing, risk assessment, and claims management',
      icon: '🛡️',
      price: '$299/month',
      features: ['Risk assessment', 'Claims processing', 'Policy optimization', 'Fraud detection', 'Customer service', 'Underwriting support'],
      benefits: ['70% faster processing', 'Better risk assessment', 'Fraud prevention', 'Cost reduction'],
      link: '/ai-insurance-assistant',
      popular: false,
      category: 'Insurance'
    },
    {
      title: 'AI Construction Manager',
      description: 'Smart construction project management with progress tracking and resource optimization',
      icon: '🏗️',
      price: '$279/month',
      features: ['Project tracking', 'Resource optimization', 'Safety monitoring', 'Progress analytics', 'Cost control', 'Quality assurance'],
      benefits: ['25% faster completion', '30% cost savings', 'Better safety', 'Quality improvement'],
      link: '/ai-construction-manager',
      popular: false,
      category: 'Construction'
    },
    {
      title: 'AI Manufacturing Optimizer',
      description: 'Intelligent manufacturing process optimization and quality control',
      icon: '🏭',
      price: '$329/month',
      features: ['Process optimization', 'Quality control', 'Predictive maintenance', 'Supply chain integration', 'Energy management', 'Safety monitoring'],
      benefits: ['40% efficiency increase', '50% quality improvement', '30% cost reduction', 'Zero downtime'],
      link: '/ai-manufacturing-optimizer',
      popular: true,
      category: 'Manufacturing'
    },
    {
      title: 'AI Retail Analytics',
      description: 'Advanced retail analytics with customer behavior insights and inventory optimization',
      icon: '🛍️',
      price: '$179/month',
      features: ['Customer analytics', 'Inventory optimization', 'Price optimization', 'Sales forecasting', 'Trend analysis', 'Store performance'],
      benefits: ['35% sales increase', '25% inventory reduction', 'Better customer insights', 'Optimized pricing'],
      link: '/ai-retail-analytics',
      popular: true,
      category: 'Retail'
    },
    {
      title: 'AI Banking Assistant',
      description: 'Intelligent banking operations with fraud detection and customer service automation',
      icon: '🏦',
      price: '$399/month',
      features: ['Fraud detection', 'Customer service', 'Risk assessment', 'Loan processing', 'Compliance monitoring', 'Financial analytics'],
      benefits: ['99% fraud detection', '80% faster processing', 'Better compliance', 'Cost reduction'],
      link: '/ai-banking-assistant',
      popular: false,
      category: 'Banking'
    },
    {
      title: 'AI Logistics Optimizer',
      description: 'Smart logistics management with route optimization and delivery tracking',
      icon: '📦',
      price: '$199/month',
      features: ['Route optimization', 'Delivery tracking', 'Warehouse management', 'Fleet coordination', 'Cost optimization', 'Performance analytics'],
      benefits: ['30% delivery time reduction', '25% cost savings', 'Better tracking', 'Improved efficiency'],
      link: '/ai-logistics-optimizer',
      popular: true,
      category: 'Logistics'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Comprehensive marketing automation with campaign optimization and lead nurturing',
      icon: '📢',
      price: '$149/month',
      features: ['Campaign automation', 'Lead nurturing', 'Email marketing', 'Social media management', 'Analytics & reporting', 'A/B testing'],
      benefits: ['200% lead conversion', '50% time savings', 'Better ROI', 'Automated nurturing'],
      link: '/ai-marketing-automation',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Customer Analytics',
      description: 'Deep customer insights with behavior analysis and predictive modeling',
      icon: '👥',
      price: '$129/month',
      features: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Lifetime value', 'Personalization', 'Retention strategies'],
      benefits: ['40% retention increase', 'Better personalization', 'Predictive insights', 'Higher lifetime value'],
      link: '/ai-customer-analytics',
      popular: true,
      category: 'Analytics'
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
      title: 'AI Quantum Computing Solutions',
      description: 'Quantum computing algorithms and optimization for complex problem solving',
      icon: Cpu,
      price: '$5,000/month',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Machine Learning', 'Research Support'],
      color: 'text-purple-600',
      category: 'Quantum Computing'
    },
    {
      title: 'AI Autonomous Systems',
      description: 'Self-driving vehicles, drones, and autonomous robotics solutions',
      icon: Car,
      price: '$3,500/month',
      features: ['Autonomous Vehicles', 'Drone Technology', 'Robotics', 'Navigation Systems', 'Safety Protocols', 'Fleet Management'],
      color: 'text-blue-600',
      category: 'Autonomous Systems'
    },
    {
      title: 'AI Edge Computing',
      description: 'Edge AI solutions for real-time processing and IoT applications',
      icon: Cpu,
      price: '$2,200/month',
      features: ['Edge Processing', 'IoT Integration', 'Real-time Analytics', 'Low Latency', 'Offline Capability', 'Resource Optimization'],
      color: 'text-green-600',
      category: 'Edge Computing'
    },
    {
      title: 'AI Blockchain Solutions',
      description: 'Blockchain integration with AI for smart contracts and decentralized applications',
      icon: Lock,
      price: '$2,800/month',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Technology', 'Decentralized AI', 'Token Economics', 'Security Protocols'],
      color: 'text-yellow-600',
      category: 'Blockchain AI'
    },
    {
      title: 'AI Metaverse Development',
      description: 'Virtual worlds, AR/VR experiences, and immersive AI-powered environments',
      icon: Cube,
      price: '$4,000/month',
      features: ['Virtual Worlds', 'AR/VR Integration', 'Avatar Technology', 'Spatial Computing', 'Virtual Commerce', 'Social AI'],
      color: 'text-pink-600',
      category: 'Metaverse'
    },
    {
      title: 'AI Climate Solutions',
      description: 'Environmental monitoring, climate modeling, and sustainability optimization',
      icon: Globe,
      price: '$2,500/month',
      features: ['Climate Modeling', 'Environmental Monitoring', 'Carbon Footprint', 'Sustainability Metrics', 'Green Technology', 'Climate Prediction'],
      color: 'text-emerald-600',
      category: 'Climate AI'
    },
    {
      title: 'AI Space Technology',
      description: 'Space exploration, satellite management, and aerospace AI solutions',
      icon: Plane,
      price: '$4,500/month',
      features: ['Satellite Management', 'Space Exploration', 'Aerospace Optimization', 'Orbital Mechanics', 'Space Weather', 'Mission Planning'],
      color: 'text-indigo-600',
      category: 'Space AI'
    },
    {
      title: 'AI Neuroscience',
      description: 'Brain-computer interfaces, neural networks, and cognitive AI solutions',
      icon: Brain,
      price: '$3,200/month',
      features: ['Brain-Computer Interface', 'Neural Networks', 'Cognitive Computing', 'Mental Health AI', 'Learning Enhancement', 'Memory Optimization'],
      color: 'text-purple-600',
      category: 'Neuroscience AI'
    },
    {
      title: 'AI Biotechnology',
      description: 'Drug discovery, genetic analysis, and medical AI solutions',
      icon: Stethoscope,
      price: '$3,800/month',
      features: ['Drug Discovery', 'Genetic Analysis', 'Protein Folding', 'Medical Imaging', 'Personalized Medicine', 'Biomarker Detection'],
      color: 'text-red-600',
      category: 'Biotech AI'
    },
    {
      title: 'AI Cybersecurity Advanced',
      description: 'Advanced threat detection, zero-trust security, and AI-powered defense systems',
      icon: Shield,
      price: '$2,600/month',
      features: ['Zero-Trust Security', 'Advanced Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Security Orchestration', 'Compliance Automation'],
      color: 'text-red-600',
      category: 'Advanced Security'
    },
    {
      title: 'AI Digital Twin',
      description: 'Digital replicas of physical systems for simulation and optimization',
      icon: Settings,
      price: '$2,900/month',
      features: ['System Simulation', 'Predictive Maintenance', 'Performance Optimization', 'Real-time Monitoring', 'Virtual Testing', 'Lifecycle Management'],
      color: 'text-cyan-600',
      category: 'Digital Twin'
    },
    {
      title: 'AI Conversational AI',
      description: 'Advanced chatbots, virtual assistants, and natural language understanding',
      icon: MessageSquare,
      price: '$1,800/month',
      features: ['Advanced Chatbots', 'Voice Assistants', 'Multilingual Support', 'Context Understanding', 'Emotion Recognition', 'Conversation Analytics'],
      color: 'text-blue-600',
      category: 'Conversational AI'
    },
    {
      title: 'AI Computer Vision Advanced',
      description: 'Advanced image recognition, video analysis, and visual intelligence',
      icon: Eye,
      price: '$2,400/month',
      features: ['Advanced Object Detection', 'Facial Recognition', 'Medical Imaging', 'Autonomous Vision', '3D Reconstruction', 'Real-time Processing'],
      color: 'text-green-600',
      category: 'Advanced Vision'
    },
    {
      title: 'AI Natural Language Processing Advanced',
      description: 'Advanced text understanding, language generation, and semantic analysis',
      icon: FileText,
      price: '$2,100/month',
      features: ['Language Generation', 'Semantic Analysis', 'Sentiment Analysis', 'Language Translation', 'Text Summarization', 'Question Answering'],
      color: 'text-orange-600',
      category: 'Advanced NLP'
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
      description: 'Quantum computing hardware setup, software development, and quantum algorithm implementation',
      icon: Cpu,
      price: '$8,000/month',
      features: ['Quantum Hardware Setup', 'Quantum Software Development', 'Algorithm Implementation', 'Quantum Networking', 'Research Support', 'Training Programs'],
      color: 'text-purple-600',
      category: 'Quantum Computing'
    },
    {
      title: '5G & Edge Computing',
      description: '5G network implementation, edge computing infrastructure, and IoT connectivity solutions',
      icon: Globe,
      price: '$3,500/month',
      features: ['5G Network Setup', 'Edge Computing Infrastructure', 'IoT Connectivity', 'Low Latency Solutions', 'Network Optimization', 'Mobile Edge Computing'],
      color: 'text-blue-600',
      category: '5G & Edge'
    },
    {
      title: 'Autonomous Systems Integration',
      description: 'Integration of autonomous vehicles, drones, and robotics into existing infrastructure',
      icon: Car,
      price: '$4,200/month',
      features: ['Autonomous Vehicle Integration', 'Drone Fleet Management', 'Robotics Integration', 'Safety Systems', 'Fleet Coordination', 'Regulatory Compliance'],
      color: 'text-green-600',
      category: 'Autonomous Systems'
    },
    {
      title: 'Metaverse Development Platform',
      description: 'Virtual world creation, AR/VR integration, and immersive experience development',
      icon: Cube,
      price: '$5,500/month',
      features: ['Virtual World Creation', 'AR/VR Development', 'Avatar Systems', 'Virtual Commerce', 'Spatial Computing', 'Social Integration'],
      color: 'text-pink-600',
      category: 'Metaverse'
    },
    {
      title: 'Blockchain & Web3 Infrastructure',
      description: 'Blockchain network setup, smart contract development, and Web3 application infrastructure',
      icon: Lock,
      price: '$3,800/month',
      features: ['Blockchain Networks', 'Smart Contract Development', 'DeFi Solutions', 'NFT Platforms', 'Web3 Integration', 'Token Economics'],
      color: 'text-yellow-600',
      category: 'Blockchain'
    },
    {
      title: 'AI Infrastructure & MLOps',
      description: 'AI infrastructure setup, machine learning operations, and model deployment platforms',
      icon: Brain,
      price: '$4,500/month',
      features: ['AI Infrastructure Setup', 'MLOps Implementation', 'Model Deployment', 'GPU Clusters', 'Data Pipelines', 'Model Monitoring'],
      color: 'text-purple-600',
      category: 'AI Infrastructure'
    },
    {
      title: 'Cybersecurity Advanced',
      description: 'Advanced cybersecurity solutions with zero-trust architecture and AI-powered threat detection',
      icon: Shield,
      price: '$3,200/month',
      features: ['Zero-Trust Architecture', 'Advanced Threat Detection', 'Security Orchestration', 'Incident Response', 'Compliance Automation', 'Penetration Testing'],
      color: 'text-red-600',
      category: 'Advanced Security'
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Comprehensive digital transformation strategy and implementation for enterprise organizations',
      icon: Briefcase,
      price: '$2,500/month',
      features: ['Digital Strategy', 'Process Automation', 'Technology Assessment', 'Change Management', 'ROI Analysis', 'Implementation Planning'],
      color: 'text-cyan-600',
      category: 'Digital Transformation'
    },
    {
      title: 'Cloud-Native Development',
      description: 'Microservices architecture, containerization, and cloud-native application development',
      icon: Cloud,
      price: '$2,800/month',
      features: ['Microservices Architecture', 'Container Orchestration', 'Serverless Computing', 'API Development', 'Cloud-Native Apps', 'DevOps Integration'],
      color: 'text-blue-600',
      category: 'Cloud-Native'
    },
    {
      title: 'Data Engineering & Analytics',
      description: 'Big data processing, data warehousing, and advanced analytics platform development',
      icon: Database,
      price: '$2,600/month',
      features: ['Big Data Processing', 'Data Warehousing', 'ETL/ELT Pipelines', 'Real-time Analytics', 'Data Lake Architecture', 'Business Intelligence'],
      color: 'text-orange-600',
      category: 'Data Engineering'
    },
    {
      title: 'IoT & Smart City Solutions',
      description: 'Internet of Things implementation, smart city infrastructure, and connected device management',
      icon: Cpu,
      price: '$3,200/month',
      features: ['IoT Device Management', 'Smart City Infrastructure', 'Sensor Networks', 'Data Collection', 'Real-time Monitoring', 'Urban Analytics'],
      color: 'text-green-600',
      category: 'IoT & Smart Cities'
    },
    {
      title: 'Augmented & Virtual Reality',
      description: 'AR/VR application development, immersive experiences, and mixed reality solutions',
      icon: Eye,
      price: '$3,500/month',
      features: ['AR Application Development', 'VR Experience Creation', 'Mixed Reality Solutions', '3D Content Creation', 'Spatial Computing', 'Immersive Analytics'],
      color: 'text-purple-600',
      category: 'AR/VR'
    },
    {
      title: 'High-Performance Computing',
      description: 'HPC infrastructure setup, parallel processing, and scientific computing solutions',
      icon: Cpu,
      price: '$4,000/month',
      features: ['HPC Infrastructure', 'Parallel Processing', 'Scientific Computing', 'Simulation Platforms', 'Research Computing', 'Performance Optimization'],
      color: 'text-indigo-600',
      category: 'HPC'
    },
    {
      title: 'Green IT & Sustainability',
      description: 'Sustainable IT solutions, energy-efficient computing, and carbon footprint reduction',
      icon: Globe,
      price: '$2,200/month',
      features: ['Green Computing', 'Energy Efficiency', 'Carbon Footprint Reduction', 'Sustainable Infrastructure', 'Renewable Energy Integration', 'Environmental Monitoring'],
      color: 'text-emerald-600',
      category: 'Green IT'
    },
    {
      title: 'Space Technology Solutions',
      description: 'Satellite communication, space data processing, and aerospace technology solutions',
      icon: Plane,
      price: '$5,000/month',
      features: ['Satellite Communication', 'Space Data Processing', 'Aerospace Technology', 'Orbital Mechanics', 'Space Weather Monitoring', 'Mission Control Systems'],
      color: 'text-indigo-600',
      category: 'Space Technology'
    },
    {
      title: 'Biotechnology IT Solutions',
      description: 'Bioinformatics, genetic data processing, and medical technology infrastructure',
      icon: Stethoscope,
      price: '$4,200/month',
      features: ['Bioinformatics Platforms', 'Genetic Data Processing', 'Medical Imaging Systems', 'Drug Discovery IT', 'Clinical Trial Management', 'Healthcare Analytics'],
      color: 'text-red-600',
      category: 'Biotech IT'
    },
    {
      title: 'Financial Technology Solutions',
      description: 'FinTech infrastructure, payment systems, and financial data processing',
      icon: DollarSign,
      price: '$3,800/month',
      features: ['Payment Systems', 'Financial Data Processing', 'Trading Platforms', 'Risk Management Systems', 'Regulatory Compliance', 'Digital Banking'],
      color: 'text-green-600',
      category: 'FinTech'
    },
    {
      title: 'Gaming & Entertainment Technology',
      description: 'Game development infrastructure, streaming platforms, and entertainment technology solutions',
      icon: Gamepad2,
      price: '$2,900/month',
      features: ['Game Development Infrastructure', 'Streaming Platforms', 'Cloud Gaming', 'Virtual Events', 'Content Delivery Networks', 'Interactive Media'],
      color: 'text-pink-600',
      category: 'Gaming & Entertainment'
    },
    {
      title: 'Educational Technology Solutions',
      description: 'E-learning platforms, educational analytics, and digital learning infrastructure',
      icon: GraduationCap,
      price: '$2,400/month',
      features: ['E-learning Platforms', 'Educational Analytics', 'Digital Learning Tools', 'Student Information Systems', 'Learning Management Systems', 'Educational AI'],
      color: 'text-blue-600',
      category: 'EdTech'
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mb-12">
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mb-12">
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mb-12">
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