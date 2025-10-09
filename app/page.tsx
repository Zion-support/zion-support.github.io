'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, CheckCircle, TrendingUp, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Music, Video, Stethoscope, Briefcase, Wrench, Navigation, Zap as Lightning, Target as Crosshair, Shield as Security, CheckCircle as Check, Phone as PhoneIcon, Mail as MailIcon, Cube, Mic, DollarSign, Truck, Link, HardDrive, FileCheck } from 'lucide-react';;
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import SEOEnhancer from './components/SEOEnhancer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import EnhancedSEOOptimizer from './components/EnhancedSEOOptimizer';
import EnhancedPerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import EnhancedAnalytics from './components/EnhancedAnalytics';
import SecurityEnhancer from './components/SecurityEnhancer';
import ErrorBoundary from './components/ErrorBoundary';
import ServiceWorker from './components/ServiceWorker';
import { ServiceCardSkeleton, HeroSkeleton } from './components/LoadingSkeleton';

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

// Loading skeleton component - now imported from LoadingSkeleton.tsx

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
      title: 'AI CRM Intelligence Suite',
      description: 'Advanced customer relationship management with AI-powered insights, lead scoring, and automated follow-ups',
      icon: '👥',
      price: '$149/month',
      features: ['Smart lead scoring', 'Automated follow-ups', 'Customer insights', 'Sales forecasting', 'Pipeline management', 'Integration hub'],
      benefits: ['50% more qualified leads', '35% faster sales cycles', '90% customer satisfaction', '25% revenue increase'],
      link: '/ai-crm',
      popular: true,
      category: 'Sales'
    },
    {
      title: 'AI Healthcare Assistant Pro',
      description: 'Medical AI assistant for symptom analysis, treatment recommendations, and patient monitoring',
      icon: '🏥',
      price: '$299/month',
      features: ['Symptom analysis', 'Treatment recommendations', 'Patient monitoring', 'Medical imaging analysis', 'Drug interaction checks', 'Health tracking'],
      benefits: ['Improved diagnosis accuracy', 'Faster treatment', 'Better patient outcomes', 'Reduced medical errors'],
      link: '/ai-healthcare',
      popular: true,
      category: 'Healthcare'
    },
    {
      title: 'AI Fintech Analyzer',
      description: 'Advanced financial analysis with AI-powered investment advice, risk assessment, and portfolio optimization',
      icon: '💰',
      price: '$199/month',
      features: ['Portfolio analysis', 'Risk assessment', 'Investment recommendations', 'Market insights', 'Tax optimization', 'Goal tracking'],
      benefits: ['Better returns', 'Risk management', 'Tax savings', 'Financial security'],
      link: '/ai-fintech',
      popular: true,
      category: 'Finance'
    },
    {
      title: 'AI Mobile App Builder',
      description: 'Create native mobile apps with AI-powered design, development, and deployment automation',
      icon: '📱',
      price: '$179/month',
      features: ['AI-powered design', 'Code generation', 'App store optimization', 'Cross-platform support', 'Real-time testing', 'Analytics integration'],
      benefits: ['90% faster development', 'Professional quality', 'Cost-effective', 'Easy maintenance'],
      link: '/ai-mobile-app-development',
      popular: true,
      category: 'Development'
    },
    {
      title: 'AI Cybersecurity Shield',
      description: 'Advanced cybersecurity monitoring with AI-powered threat detection, prevention, and incident response',
      icon: '🛡️',
      price: '$249/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance monitoring', 'Security analytics', '24/7 monitoring'],
      benefits: ['Proactive protection', 'Faster response', 'Compliance assurance', 'Risk reduction'],
      link: '/ai-cybersecurity',
      popular: true,
      category: 'Security'
    },
    {
      title: 'AI Marketing Automation Hub',
      description: 'Comprehensive marketing automation with AI-powered campaigns, personalization, and analytics',
      icon: '🎯',
      price: '$129/month',
      features: ['Campaign automation', 'Personalization engine', 'A/B testing', 'Lead nurturing', 'Analytics dashboard', 'Multi-channel support'],
      benefits: ['300% engagement increase', '50% conversion boost', '80% time saved', 'Better ROI'],
      link: '/ai-marketing',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, scheduling, and productivity insights',
      icon: '✅',
      price: '$79/month',
      features: ['Smart prioritization', 'Auto-scheduling', 'Productivity insights', 'Team collaboration', 'Deadline tracking', 'Performance analytics'],
      benefits: ['60% productivity boost', 'Better time management', 'Reduced stress', 'Goal achievement'],
      link: '/task-manager-pro',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Expense Tracker Pro',
      description: 'Smart expense management with AI-powered categorization, budgeting, and financial insights',
      icon: '💳',
      price: '$59/month',
      features: ['Auto-categorization', 'Smart budgeting', 'Receipt scanning', 'Tax preparation', 'Spending insights', 'Goal tracking'],
      benefits: ['90% time saved', 'Better budgeting', 'Tax savings', 'Financial control'],
      link: '/expense-tracker',
      popular: false,
      category: 'Finance'
    },
    {
      title: 'AI Chatbot Builder Pro',
      description: 'Create intelligent chatbots with AI-powered natural language processing and multi-platform deployment',
      icon: '🤖',
      price: '$89/month',
      features: ['Natural language processing', 'Multi-platform deployment', 'Custom training', 'Analytics dashboard', 'Human handoff', 'Integration APIs'],
      benefits: ['24/7 customer support', '90% query resolution', 'Cost reduction', 'Better customer experience'],
      link: '/ai-chatbot-builder',
      popular: true,
      category: 'Customer Service'
    },
    {
      title: 'AI Data Analytics Pro',
      description: 'Advanced data analytics with AI-powered insights, predictive modeling, and interactive dashboards',
      icon: '📈',
      price: '$159/month',
      features: ['AI-powered insights', 'Predictive modeling', 'Interactive dashboards', 'Real-time analytics', 'Custom reports', 'Data visualization'],
      benefits: ['Faster insights', 'Better decisions', 'Data-driven growth', 'Competitive advantage'],
      link: '/ai-data-analytics',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI Lead Generation Pro',
      description: 'Automated lead generation with AI-powered prospecting, qualification, and nurturing',
      icon: '🎯',
      price: '$119/month',
      features: ['Smart prospecting', 'Lead qualification', 'Automated nurturing', 'CRM integration', 'Performance tracking', 'ROI analytics'],
      benefits: ['300% more leads', '50% higher quality', '80% time saved', 'Better conversion rates'],
      link: '/ai-lead-generation',
      popular: true,
      category: 'Sales'
    },
    {
      title: 'AI Document Processor Pro',
      description: 'Intelligent document processing with AI-powered extraction, analysis, and automation',
      icon: '📄',
      price: '$99/month',
      features: ['OCR processing', 'Data extraction', 'Document classification', 'Form recognition', 'Contract analysis', 'Knowledge management'],
      benefits: ['95% accuracy', '90% time saved', 'Better organization', 'Reduced errors'],
      link: '/ai-document-processing',
      popular: false,
      category: 'Productivity'
    },
    {
      title: 'AI SEO Optimizer Pro',
      description: 'Advanced SEO optimization with AI-powered keyword research, content optimization, and ranking analysis',
      icon: '🔍',
      price: '$109/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis', 'Rank tracking', 'Link building'],
      benefits: ['Higher rankings', 'More organic traffic', 'Better visibility', 'Competitive advantage'],
      link: '/ai-seo-optimizer',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI E-commerce Solutions',
      description: 'Complete e-commerce optimization with AI-powered recommendations, pricing, and customer insights',
      icon: '🛒',
      price: '$139/month',
      features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer segmentation', 'A/B testing', 'Analytics dashboard'],
      benefits: ['Higher conversions', 'Increased revenue', 'Better customer experience', 'Data-driven decisions'],
      link: '/ai-ecommerce-solutions',
      popular: true,
      category: 'E-commerce'
    },
    {
      title: 'AI Financial Analyzer Pro',
      description: 'Advanced financial analysis with AI-powered insights, forecasting, and investment recommendations',
      icon: '💼',
      price: '$179/month',
      features: ['Financial forecasting', 'Risk analysis', 'Investment recommendations', 'Portfolio optimization', 'Tax planning', 'Goal tracking'],
      benefits: ['Better financial decisions', 'Risk management', 'Tax optimization', 'Wealth building'],
      link: '/ai-financial-analyzer',
      popular: false,
      category: 'Finance'
    },
    {
      title: 'AI Email Assistant Pro',
      description: 'Intelligent email management with AI-powered composition, scheduling, and response automation',
      icon: '📧',
      price: '$69/month',
      features: ['Smart composition', 'Auto-scheduling', 'Response suggestions', 'Email analytics', 'Spam filtering', 'Priority management'],
      benefits: ['50% time saved', 'Better communication', 'Reduced stress', 'Improved productivity'],
      link: '/ai-email-assistant',
      popular: false,
      category: 'Productivity'
    },
    {
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with AI-powered optimization, conflict resolution, and calendar management',
      icon: '📅',
      price: '$79/month',
      features: ['Smart scheduling', 'Conflict resolution', 'Calendar optimization', 'Meeting insights', 'Time zone handling', 'Integration support'],
      benefits: ['Better time management', 'Reduced conflicts', 'Optimized schedules', 'Improved efficiency'],
      link: '/ai-scheduler',
      popular: false,
      category: 'Productivity'
    },
    {
      title: 'AI Content Generator Pro',
      description: 'Advanced content creation with AI-powered writing, optimization, and multi-format support',
      icon: '✍️',
      price: '$89/month',
      features: ['Multi-format writing', 'SEO optimization', 'Brand voice training', 'Plagiarism detection', 'Content planning', 'Performance tracking'],
      benefits: ['10x content output', 'SEO optimized', 'Brand consistency', 'Quality assurance'],
      link: '/ai-content-generation',
      popular: true,
      category: 'Content Creation'
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
      title: 'AI Real Estate Analyzer',
      description: 'Advanced property analysis with AI-powered market insights, valuation, and investment recommendations',
      icon: '🏠',
      price: '$199/month',
      features: ['Property valuation', 'Market analysis', 'Investment scoring', 'Neighborhood insights', 'Rental yield prediction', 'Risk assessment'],
      benefits: ['Better investment decisions', 'Accurate valuations', 'Market timing', 'Risk mitigation'],
      link: '/ai-real-estate-analyzer',
      popular: false,
      category: 'Real Estate'
    },
    {
      title: 'AI Healthcare Assistant',
      description: 'AI-powered healthcare solutions for diagnosis support, treatment planning, and patient monitoring',
      icon: '🏥',
      price: '$299/month',
      features: ['Symptom analysis', 'Treatment recommendations', 'Patient monitoring', 'Medical imaging analysis', 'Drug interaction checks', 'Health tracking'],
      benefits: ['Improved diagnosis accuracy', 'Faster treatment', 'Better patient outcomes', 'Reduced medical errors'],
      link: '/ai-healthcare-assistant',
      popular: false,
      category: 'Healthcare'
    },
    {
      title: 'AI Supply Chain Optimizer',
      description: 'Optimize your supply chain with AI-powered demand forecasting, logistics, and inventory management',
      icon: '🚚',
      price: '$249/month',
      features: ['Demand forecasting', 'Route optimization', 'Inventory management', 'Supplier analytics', 'Risk assessment', 'Cost optimization'],
      benefits: ['30% cost reduction', '99% on-time delivery', 'Reduced waste', 'Better supplier relationships'],
      link: '/ai-supply-chain-optimizer',
      popular: false,
      category: 'Supply Chain'
    },
    {
      title: 'AI Energy Management',
      description: 'Smart energy optimization with AI-powered consumption analysis and renewable energy integration',
      icon: '⚡',
      price: '$179/month',
      features: ['Energy consumption analysis', 'Cost optimization', 'Renewable integration', 'Predictive maintenance', 'Carbon tracking', 'Smart grid management'],
      benefits: ['25% energy savings', 'Reduced carbon footprint', 'Lower costs', 'Sustainable operations'],
      link: '/ai-energy-management',
      popular: false,
      category: 'Energy'
    },
    {
      title: 'AI Education Platform',
      description: 'Personalized learning with AI-powered curriculum adaptation and student progress tracking',
      icon: '🎓',
      price: '$149/month',
      features: ['Personalized learning paths', 'Adaptive assessments', 'Progress tracking', 'Content generation', 'Student analytics', 'Teacher insights'],
      benefits: ['Better learning outcomes', 'Personalized education', 'Teacher efficiency', 'Student engagement'],
      link: '/ai-education-platform',
      popular: false,
      category: 'Education'
    },
    {
      title: 'AI Manufacturing Intelligence',
      description: 'Optimize manufacturing processes with AI-powered quality control, predictive maintenance, and efficiency analysis',
      icon: '🏭',
      price: '$299/month',
      features: ['Quality control', 'Predictive maintenance', 'Process optimization', 'Defect detection', 'Production planning', 'Equipment monitoring'],
      benefits: ['Reduced defects', 'Lower maintenance costs', 'Increased efficiency', 'Better quality'],
      link: '/ai-manufacturing-intelligence',
      popular: false,
      category: 'Manufacturing'
    },
    {
      title: 'AI Insurance Analytics',
      description: 'Advanced insurance risk assessment and fraud detection with AI-powered analytics',
      icon: '🛡️',
      price: '$199/month',
      features: ['Risk assessment', 'Fraud detection', 'Claims processing', 'Underwriting support', 'Customer analytics', 'Pricing optimization'],
      benefits: ['Reduced fraud', 'Better risk assessment', 'Faster claims', 'Improved pricing'],
      link: '/ai-insurance-analytics',
      popular: false,
      category: 'Insurance'
    },
    {
      title: 'AI Transportation Optimizer',
      description: 'Optimize transportation and logistics with AI-powered route planning and fleet management',
      icon: '🚛',
      price: '$179/month',
      features: ['Route optimization', 'Fleet management', 'Fuel efficiency', 'Driver analytics', 'Maintenance scheduling', 'Delivery tracking'],
      benefits: ['Reduced fuel costs', 'Faster deliveries', 'Better fleet utilization', 'Lower maintenance'],
      link: '/ai-transportation-optimizer',
      popular: false,
      category: 'Transportation'
    },
    {
      title: 'AI Agriculture Intelligence',
      description: 'Smart farming solutions with AI-powered crop monitoring, yield prediction, and resource optimization',
      icon: '🌾',
      price: '$199/month',
      features: ['Crop monitoring', 'Yield prediction', 'Soil analysis', 'Weather integration', 'Pest detection', 'Resource optimization'],
      benefits: ['Increased yields', 'Reduced waste', 'Better crop health', 'Sustainable farming'],
      link: '/ai-agriculture-intelligence',
      popular: false,
      category: 'Agriculture'
    },
    {
      title: 'AI Retail Intelligence',
      description: 'Optimize retail operations with AI-powered customer insights, inventory management, and sales forecasting',
      icon: '🛍️',
      price: '$179/month',
      features: ['Customer analytics', 'Inventory optimization', 'Sales forecasting', 'Price optimization', 'Store layout analysis', 'Staff scheduling'],
      benefits: ['Increased sales', 'Better inventory management', 'Improved customer experience', 'Optimized operations'],
      link: '/ai-retail-intelligence',
      popular: false,
      category: 'Retail'
    },
    {
      title: 'AI Gaming Assistant',
      description: 'Enhance gaming experiences with AI-powered character creation, procedural generation, and player analytics',
      icon: '🎮',
      price: '$129/month',
      features: ['Character generation', 'Procedural content', 'Player analytics', 'Difficulty adjustment', 'Narrative generation', 'Multiplayer optimization'],
      benefits: ['Enhanced gameplay', 'Dynamic content', 'Better player engagement', 'Reduced development time'],
      link: '/ai-gaming-assistant',
      popular: false,
      category: 'Gaming'
    },
    {
      title: 'AI Event Management',
      description: 'Streamline event planning with AI-powered attendee management, scheduling, and logistics optimization',
      icon: '🎪',
      price: '$149/month',
      features: ['Attendee management', 'Schedule optimization', 'Venue selection', 'Catering coordination', 'Logistics planning', 'Post-event analytics'],
      benefits: ['Smoother events', 'Better attendee experience', 'Cost optimization', 'Data-driven insights'],
      link: '/ai-event-management',
      popular: false,
      category: 'Events'
    },
    {
      title: 'AI Travel Optimizer',
      description: 'Personalized travel planning with AI-powered recommendations, booking optimization, and itinerary management',
      icon: '✈️',
      price: '$99/month',
      features: ['Personalized recommendations', 'Price optimization', 'Itinerary planning', 'Weather integration', 'Local insights', 'Booking management'],
      benefits: ['Better travel experiences', 'Cost savings', 'Time optimization', 'Personalized recommendations'],
      link: '/ai-travel-optimizer',
      popular: false,
      category: 'Travel'
    },
    {
      title: 'AI Legal Research Assistant',
      description: 'Accelerate legal research with AI-powered case law analysis, document review, and precedent identification',
      icon: '⚖️',
      price: '$199/month',
      features: ['Case law research', 'Document analysis', 'Precedent identification', 'Legal writing assistance', 'Compliance checking', 'Contract review'],
      benefits: ['Faster research', 'Better case preparation', 'Reduced errors', 'Time savings'],
      link: '/ai-legal-research',
      popular: false,
      category: 'Legal'
    },
    {
      title: 'AI Marketing Intelligence',
      description: 'Comprehensive marketing analytics with AI-powered campaign optimization and customer insights',
      icon: '📊',
      price: '$179/month',
      features: ['Campaign optimization', 'Customer segmentation', 'ROI analysis', 'Competitor tracking', 'Content performance', 'Lead scoring'],
      benefits: ['Higher ROI', 'Better targeting', 'Improved campaigns', 'Data-driven decisions'],
      link: '/ai-marketing-intelligence',
      popular: false,
      category: 'Marketing'
    },
    {
      title: 'AI Quality Assurance',
      description: 'Automated quality testing with AI-powered test generation, execution, and defect detection',
      icon: '🔍',
      price: '$159/month',
      features: ['Automated testing', 'Test generation', 'Defect detection', 'Performance testing', 'Regression testing', 'Test analytics'],
      benefits: ['Faster testing', 'Better coverage', 'Reduced bugs', 'Lower costs'],
      link: '/ai-quality-assurance',
      popular: false,
      category: 'Quality Assurance'
    },
    {
      title: 'AI Blockchain Analytics',
      description: 'Advanced blockchain analysis with AI-powered transaction monitoring and smart contract auditing',
      icon: '⛓️',
      price: '$249/month',
      features: ['Transaction analysis', 'Smart contract auditing', 'Risk assessment', 'Compliance monitoring', 'Fraud detection', 'Market analysis'],
      benefits: ['Better security', 'Risk mitigation', 'Compliance assurance', 'Fraud prevention'],
      link: '/ai-blockchain-analytics',
      popular: false,
      category: 'Blockchain'
    },
    {
      title: 'AI Space Analytics',
      description: 'Space industry analytics with AI-powered satellite data analysis and space mission optimization',
      icon: '🚀',
      price: '$399/month',
      features: ['Satellite data analysis', 'Mission planning', 'Orbital mechanics', 'Weather prediction', 'Resource optimization', 'Risk assessment'],
      benefits: ['Better mission success', 'Cost optimization', 'Risk reduction', 'Data insights'],
      link: '/ai-space-analytics',
      popular: false,
      category: 'Space'
    },
    {
      title: 'AI Quantum Computing',
      description: 'Quantum computing solutions with AI-powered algorithm optimization and quantum machine learning',
      icon: '⚛️',
      price: '$499/month',
      features: ['Quantum algorithm design', 'Quantum machine learning', 'Optimization problems', 'Cryptography', 'Simulation', 'Error correction'],
      benefits: ['Exponential speedup', 'Complex problem solving', 'Advanced cryptography', 'Future-ready technology'],
      link: '/ai-quantum-computing',
      popular: false,
      category: 'Quantum Computing'
    }
  ];
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection, security scanning, and optimization suggestions',
      icon: '🔍',
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Code quality metrics', 'Refactoring suggestions'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', 'Faster development cycles'],
      link: '/ai-code-generation',
      popular: true,
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
      title: 'AI Real Estate Analyzer',
      description: 'Advanced property analysis with AI-powered market insights, valuation, and investment recommendations',
      icon: '🏠',
      price: '$199/month',
      features: ['Property valuation', 'Market analysis', 'Investment scoring', 'Neighborhood insights', 'Rental yield prediction', 'Risk assessment'],
      benefits: ['Better investment decisions', 'Accurate valuations', 'Market timing', 'Risk mitigation'],
      link: '/ai-real-estate-analyzer',
      popular: false,
      category: 'Real Estate'
    },
    {
      title: 'AI Healthcare Assistant',
      description: 'AI-powered healthcare solutions for diagnosis support, treatment planning, and patient monitoring',
      icon: '🏥',
      price: '$299/month',
      features: ['Symptom analysis', 'Treatment recommendations', 'Patient monitoring', 'Medical imaging analysis', 'Drug interaction checks', 'Health tracking'],
      benefits: ['Improved diagnosis accuracy', 'Faster treatment', 'Better patient outcomes', 'Reduced medical errors'],
      link: '/ai-healthcare-assistant',
      popular: false,
      category: 'Healthcare'
    },
    {
      title: 'AI Supply Chain Optimizer',
      description: 'Optimize your supply chain with AI-powered demand forecasting, logistics, and inventory management',
      icon: '🚚',
      price: '$249/month',
      features: ['Demand forecasting', 'Route optimization', 'Inventory management', 'Supplier analytics', 'Risk assessment', 'Cost optimization'],
      benefits: ['30% cost reduction', '99% on-time delivery', 'Reduced waste', 'Better supplier relationships'],
      link: '/ai-supply-chain-optimizer',
      popular: false,
      category: 'Supply Chain'
    },
    {
      title: 'AI Energy Management',
      description: 'Smart energy optimization with AI-powered consumption analysis and renewable energy integration',
      icon: '⚡',
      price: '$179/month',
      features: ['Energy consumption analysis', 'Cost optimization', 'Renewable integration', 'Predictive maintenance', 'Carbon tracking', 'Smart grid management'],
      benefits: ['25% energy savings', 'Reduced carbon footprint', 'Lower costs', 'Sustainable operations'],
      link: '/ai-energy-management',
      popular: false,
      category: 'Energy'
    },
    {
      title: 'AI Education Platform',
      description: 'Personalized learning with AI-powered curriculum adaptation and student progress tracking',
      icon: '🎓',
      price: '$149/month',
      features: ['Personalized learning paths', 'Adaptive assessments', 'Progress tracking', 'Content generation', 'Student analytics', 'Teacher insights'],
      benefits: ['Better learning outcomes', 'Personalized education', 'Teacher efficiency', 'Student engagement'],
      link: '/ai-education-platform',
      popular: false,
      category: 'Education'
    },
    {
      title: 'AI Manufacturing Intelligence',
      description: 'Optimize manufacturing processes with AI-powered quality control, predictive maintenance, and efficiency analysis',
      icon: '🏭',
      price: '$299/month',
      features: ['Quality control', 'Predictive maintenance', 'Process optimization', 'Defect detection', 'Production planning', 'Equipment monitoring'],
      benefits: ['Reduced defects', 'Lower maintenance costs', 'Increased efficiency', 'Better quality'],
      link: '/ai-manufacturing-intelligence',
      popular: false,
      category: 'Manufacturing'
    },
    {
      title: 'AI Insurance Analytics',
      description: 'Advanced insurance risk assessment and fraud detection with AI-powered analytics',
      icon: '🛡️',
      price: '$199/month',
      features: ['Risk assessment', 'Fraud detection', 'Claims processing', 'Underwriting support', 'Customer analytics', 'Pricing optimization'],
      benefits: ['Reduced fraud', 'Better risk assessment', 'Faster claims', 'Improved pricing'],
      link: '/ai-insurance-analytics',
      popular: false,
      category: 'Insurance'
    },
    {
      title: 'AI Transportation Optimizer',
      description: 'Optimize transportation and logistics with AI-powered route planning and fleet management',
      icon: '🚛',
      price: '$179/month',
      features: ['Route optimization', 'Fleet management', 'Fuel efficiency', 'Driver analytics', 'Maintenance scheduling', 'Delivery tracking'],
      benefits: ['Reduced fuel costs', 'Faster deliveries', 'Better fleet utilization', 'Lower maintenance'],
      link: '/ai-transportation-optimizer',
      popular: false,
      category: 'Transportation'
    },
    {
      title: 'AI Agriculture Intelligence',
      description: 'Smart farming solutions with AI-powered crop monitoring, yield prediction, and resource optimization',
      icon: '🌾',
      price: '$199/month',
      features: ['Crop monitoring', 'Yield prediction', 'Soil analysis', 'Weather integration', 'Pest detection', 'Resource optimization'],
      benefits: ['Increased yields', 'Reduced waste', 'Better crop health', 'Sustainable farming'],
      link: '/ai-agriculture-intelligence',
      popular: false,
      category: 'Agriculture'
    },
    {
      title: 'AI Retail Intelligence',
      description: 'Optimize retail operations with AI-powered customer insights, inventory management, and sales forecasting',
      icon: '🛍️',
      price: '$179/month',
      features: ['Customer analytics', 'Inventory optimization', 'Sales forecasting', 'Price optimization', 'Store layout analysis', 'Staff scheduling'],
      benefits: ['Increased sales', 'Better inventory management', 'Improved customer experience', 'Optimized operations'],
      link: '/ai-retail-intelligence',
      popular: false,
      category: 'Retail'
    },
    {
      title: 'AI Gaming Assistant',
      description: 'Enhance gaming experiences with AI-powered character creation, procedural generation, and player analytics',
      icon: '🎮',
      price: '$129/month',
      features: ['Character generation', 'Procedural content', 'Player analytics', 'Difficulty adjustment', 'Narrative generation', 'Multiplayer optimization'],
      benefits: ['Enhanced gameplay', 'Dynamic content', 'Better player engagement', 'Reduced development time'],
      link: '/ai-gaming-assistant',
      popular: false,
      category: 'Gaming'
    },
    {
      title: 'AI Event Management',
      description: 'Streamline event planning with AI-powered attendee management, scheduling, and logistics optimization',
      icon: '🎪',
      price: '$149/month',
      features: ['Attendee management', 'Schedule optimization', 'Venue selection', 'Catering coordination', 'Logistics planning', 'Post-event analytics'],
      benefits: ['Smoother events', 'Better attendee experience', 'Cost optimization', 'Data-driven insights'],
      link: '/ai-event-management',
      popular: false,
      category: 'Events'
    },
    {
      title: 'AI Travel Optimizer',
      description: 'Personalized travel planning with AI-powered recommendations, booking optimization, and itinerary management',
      icon: '✈️',
      price: '$99/month',
      features: ['Personalized recommendations', 'Price optimization', 'Itinerary planning', 'Weather integration', 'Local insights', 'Booking management'],
      benefits: ['Better travel experiences', 'Cost savings', 'Time optimization', 'Personalized recommendations'],
      link: '/ai-travel-optimizer',
      popular: false,
      category: 'Travel'
    },
    {
      title: 'AI Legal Research Assistant',
      description: 'Accelerate legal research with AI-powered case law analysis, document review, and precedent identification',
      icon: '⚖️',
      price: '$199/month',
      features: ['Case law research', 'Document analysis', 'Precedent identification', 'Legal writing assistance', 'Compliance checking', 'Contract review'],
      benefits: ['Faster research', 'Better case preparation', 'Reduced errors', 'Time savings'],
      link: '/ai-legal-research',
      popular: false,
      category: 'Legal'
    },
    {
      title: 'AI Marketing Intelligence',
      description: 'Comprehensive marketing analytics with AI-powered campaign optimization and customer insights',
      icon: '📊',
      price: '$179/month',
      features: ['Campaign optimization', 'Customer segmentation', 'ROI analysis', 'Competitor tracking', 'Content performance', 'Lead scoring'],
      benefits: ['Higher ROI', 'Better targeting', 'Improved campaigns', 'Data-driven decisions'],
      link: '/ai-marketing-intelligence',
      popular: false,
      category: 'Marketing'
    },
    {
      title: 'AI Quality Assurance',
      description: 'Automated quality testing with AI-powered test generation, execution, and defect detection',
      icon: '🔍',
      price: '$159/month',
      features: ['Automated testing', 'Test generation', 'Defect detection', 'Performance testing', 'Regression testing', 'Test analytics'],
      benefits: ['Faster testing', 'Better coverage', 'Reduced bugs', 'Lower costs'],
      link: '/ai-quality-assurance',
      popular: false,
      category: 'Quality Assurance'
    },
    {
      title: 'AI Blockchain Analytics',
      description: 'Advanced blockchain analysis with AI-powered transaction monitoring and smart contract auditing',
      icon: '⛓️',
      price: '$249/month',
      features: ['Transaction analysis', 'Smart contract auditing', 'Risk assessment', 'Compliance monitoring', 'Fraud detection', 'Market analysis'],
      benefits: ['Better security', 'Risk mitigation', 'Compliance assurance', 'Fraud prevention'],
      link: '/ai-blockchain-analytics',
      popular: false,
      category: 'Blockchain'
    },
    {
      title: 'AI Space Analytics',
      description: 'Space industry analytics with AI-powered satellite data analysis and space mission optimization',
      icon: '🚀',
      price: '$399/month',
      features: ['Satellite data analysis', 'Mission planning', 'Orbital mechanics', 'Weather prediction', 'Resource optimization', 'Risk assessment'],
      benefits: ['Better mission success', 'Cost optimization', 'Risk reduction', 'Data insights'],
      link: '/ai-space-analytics',
      popular: false,
      category: 'Space'
    },
    {
      title: 'AI Quantum Computing',
      description: 'Quantum computing solutions with AI-powered algorithm optimization and quantum machine learning',
      icon: '⚛️',
      price: '$499/month',
      features: ['Quantum algorithm design', 'Quantum machine learning', 'Optimization problems', 'Cryptography', 'Simulation', 'Error correction'],
      benefits: ['Exponential speedup', 'Complex problem solving', 'Advanced cryptography', 'Future-ready technology'],
      link: '/ai-quantum-computing',
      popular: false,
      category: 'Quantum Computing'
    }
  ];
      popular: true,
      category: 'E-commerce'
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
      title: 'AI Business Intelligence',
      description: 'Advanced business intelligence with AI-powered insights, forecasting, and strategic decision support',
      icon: BarChart,
      price: '$1,800/month',
      features: ['Strategic Planning', 'Market Analysis', 'Competitive Intelligence', 'ROI Optimization', 'Risk Assessment', 'Performance Metrics'],
      color: 'text-blue-400',
      category: 'Business Intelligence'
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with AI-powered logistics optimization and demand forecasting',
      icon: Globe,
      price: '$1,600/month',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Quality Control', 'Sustainability Tracking'],
      color: 'text-green-400',
      category: 'Supply Chain AI'
    },
    {
      title: 'AI Quality Assurance',
      description: 'Automated quality testing with AI-powered test generation, execution, and defect detection',
      icon: Shield,
      price: '$1,200/month',
      features: ['Automated Testing', 'Test Generation', 'Defect Detection', 'Performance Testing', 'Regression Testing', 'Test Analytics'],
      color: 'text-red-400',
      category: 'Quality Assurance'
    },
    {
      title: 'AI Human Resources',
      description: 'Streamline HR processes with AI-powered recruitment, management, and employee analytics',
      icon: Users,
      price: '$1,400/month',
      features: ['Resume Screening', 'Interview Scheduling', 'Employee Analytics', 'Performance Tracking', 'Skills Assessment', 'Retention Insights'],
      color: 'text-pink-400',
      category: 'Human Resources'
    },
    {
      title: 'AI Legal Assistant',
      description: 'Legal document analysis and contract review with AI technology and compliance monitoring',
      icon: FileText,
      price: '$1,800/month',
      features: ['Contract Analysis', 'Legal Research', 'Document Generation', 'Compliance Checking', 'Risk Assessment', 'Case Law Research'],
      color: 'text-indigo-400',
      category: 'Legal AI'
    },
    {
      title: 'AI Real Estate Analytics',
      description: 'Advanced property analysis with AI-powered market insights, valuation, and investment recommendations',
      icon: Home,
      price: '$1,500/month',
      features: ['Property Valuation', 'Market Analysis', 'Investment Scoring', 'Neighborhood Insights', 'Rental Yield Prediction', 'Risk Assessment'],
      color: 'text-yellow-400',
      category: 'Real Estate AI'
    },
    {
      title: 'AI Manufacturing Intelligence',
      description: 'Optimize manufacturing processes with AI-powered quality control, predictive maintenance, and efficiency analysis',
      icon: Factory,
      price: '$1,700/month',
      features: ['Quality Control', 'Predictive Maintenance', 'Process Optimization', 'Defect Detection', 'Production Planning', 'Equipment Monitoring'],
      color: 'text-orange-400',
      category: 'Manufacturing AI'
    },
    {
      title: 'AI Transportation & Logistics',
      description: 'Optimize transportation and logistics with AI-powered route planning and fleet management',
      icon: Truck,
      price: '$1,400/month',
      features: ['Route Optimization', 'Fleet Management', 'Fuel Efficiency', 'Driver Analytics', 'Maintenance Scheduling', 'Delivery Tracking'],
      color: 'text-cyan-400',
      category: 'Transportation AI'
    },
    {
      title: 'AI Education Platform',
      description: 'Personalized learning with AI-powered curriculum adaptation and student progress tracking',
      icon: GraduationCap,
      price: '$1,300/month',
      features: ['Personalized Learning Paths', 'Adaptive Assessments', 'Progress Tracking', 'Content Generation', 'Student Analytics', 'Teacher Insights'],
      color: 'text-emerald-400',
      category: 'Education AI'
    },
    {
      title: 'AI Energy Management',
      description: 'Smart energy optimization with AI-powered consumption analysis and renewable energy integration',
      icon: Zap,
      price: '$1,500/month',
      features: ['Energy Optimization', 'Renewable Integration', 'Grid Management', 'Carbon Tracking', 'Predictive Maintenance', 'Smart Buildings'],
      color: 'text-yellow-500',
      category: 'Energy AI'
    },
    {
      title: 'AI Autonomous Systems',
      description: 'Self-managing AI systems with autonomous decision-making and adaptive learning capabilities',
      icon: Settings,
      price: '$2,200/month',
      features: ['Autonomous Decision-Making', 'Adaptive Learning', 'Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Continuous Improvement'],
      color: 'text-purple-500',
      category: 'Autonomous Systems'
    },
    {
      title: 'AI Blockchain Intelligence',
      description: 'Advanced blockchain analysis with AI-powered transaction monitoring and smart contract auditing',
      icon: Lock,
      price: '$1,800/month',
      features: ['Transaction Analysis', 'Smart Contract Auditing', 'Risk Assessment', 'Compliance Monitoring', 'Fraud Detection', 'Market Analysis'],
      color: 'text-orange-500',
      category: 'Blockchain AI'
    },
    {
      title: 'AI Space Analytics',
      description: 'Space industry analytics with AI-powered satellite data analysis and space mission optimization',
      icon: Globe,
      price: '$2,500/month',
      features: ['Satellite Data Analysis', 'Mission Planning', 'Orbital Mechanics', 'Weather Prediction', 'Resource Optimization', 'Risk Assessment'],
      color: 'text-blue-500',
      category: 'Space AI'
    },
    {
      title: 'AI Robotics Solutions',
      description: 'Intelligent robotics with AI-powered automation, computer vision, and autonomous navigation',
      icon: Cpu,
      price: '$2,000/month',
      features: ['Computer Vision', 'Autonomous Navigation', 'Object Recognition', 'Path Planning', 'Human-Robot Interaction', 'Predictive Maintenance'],
      color: 'text-cyan-500',
      category: 'Robotics AI'
    },
    {
      title: 'AI IoT Intelligence',
      description: 'Smart IoT solutions with AI-powered device management, data analysis, and predictive maintenance',
      icon: Globe,
      price: '$1,600/month',
      features: ['Device Management', 'Data Analysis', 'Predictive Maintenance', 'Energy Optimization', 'Security Monitoring', 'Automated Responses'],
      color: 'text-green-500',
      category: 'IoT AI'
    },
    {
      title: 'AI Metaverse Solutions',
      description: 'Virtual world creation with AI-powered avatars, environments, and immersive experiences',
      icon: Eye,
      price: '$2,200/month',
      features: ['Avatar Generation', 'Environment Creation', 'Virtual Interactions', 'AI NPCs', 'Immersive Experiences', 'Cross-Platform Support'],
      color: 'text-pink-500',
      category: 'Metaverse AI'
    },
    {
      title: 'AI Climate Intelligence',
      description: 'Environmental AI solutions for climate monitoring, carbon tracking, and sustainability optimization',
      icon: Globe,
      price: '$1,800/month',
      features: ['Climate Monitoring', 'Carbon Tracking', 'Sustainability Optimization', 'Environmental Forecasting', 'Resource Management', 'Impact Analysis'],
      color: 'text-emerald-500',
      category: 'Climate AI'
    },
    {
      title: 'AI Digital Twin',
      description: 'Create digital replicas of physical systems with AI-powered monitoring and optimization',
      icon: Database,
      price: '$2,000/month',
      features: ['Digital Replication', 'Real-time Monitoring', 'Predictive Modeling', 'Performance Optimization', 'Simulation Capabilities', 'Maintenance Planning'],
      color: 'text-indigo-500',
      category: 'Digital Twin AI'
    },
    {
      title: 'AI Edge Computing',
      description: 'Edge AI solutions for real-time processing, low latency, and distributed intelligence',
      icon: Cpu,
      price: '$1,700/month',
      features: ['Real-time Processing', 'Low Latency', 'Distributed Intelligence', 'Edge Analytics', 'Offline Capability', 'Resource Optimization'],
      color: 'text-teal-500',
      category: 'Edge AI'
    },
    {
      title: 'AI Insurance Analytics',
      description: 'Advanced insurance risk assessment and fraud detection with AI-powered analytics',
      icon: Shield,
      price: '$1,600/month',
      features: ['Risk Assessment', 'Fraud Detection', 'Claims Processing', 'Underwriting Support', 'Customer Analytics', 'Pricing Optimization'],
      color: 'text-red-500',
      category: 'Insurance AI'
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
      title: 'Enterprise Security Solutions',
      description: 'Advanced security solutions with threat detection, prevention, and compliance management',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance Management', 'Penetration Testing'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure design, implementation, and management services',
      icon: Settings,
      price: '$1,199/month',
      features: ['Infrastructure Design', 'Server Management', 'Network Configuration', 'Storage Solutions', 'Backup Systems', 'Performance Monitoring'],
      color: 'text-green-400',
      category: 'Infrastructure'
    },
    {
      title: 'Data Center Solutions',
      description: 'Modern data center design, implementation, and management with energy efficiency optimization',
      icon: Database,
      price: '$1,400/month',
      features: ['Data Center Design', 'Cooling Systems', 'Power Management', 'Security Systems', 'Monitoring Solutions', 'Disaster Recovery'],
      color: 'text-purple-400',
      category: 'Data Center'
    },
    {
      title: 'Network Security & Firewall',
      description: 'Advanced network security solutions with firewall configuration and threat protection',
      icon: Lock,
      price: '$1,300/month',
      features: ['Firewall Configuration', 'Intrusion Detection', 'VPN Setup', 'Network Monitoring', 'Threat Prevention', 'Security Auditing'],
      color: 'text-orange-400',
      category: 'Network Security'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting for digital transformation, optimization, and innovation',
      icon: Briefcase,
      price: '$1,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Change Management', 'ROI Analysis'],
      color: 'text-yellow-400',
      category: 'Consulting'
    },
    {
      title: 'Managed IT Services',
      description: 'Comprehensive managed IT services with 24/7 support and proactive monitoring',
      icon: Users,
      price: '$800/month',
      features: ['24/7 Support', 'Proactive Monitoring', 'System Maintenance', 'Software Updates', 'Help Desk Services', 'Performance Optimization'],
      color: 'text-cyan-400',
      category: 'Managed Services'
    },
    {
      title: 'Cloud Security & Compliance',
      description: 'Advanced cloud security solutions with compliance management and data protection',
      icon: Shield,
      price: '$1,500/month',
      features: ['Cloud Security', 'Compliance Management', 'Data Encryption', 'Access Control', 'Audit Logging', 'Threat Detection'],
      color: 'text-indigo-400',
      category: 'Cloud Security'
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset management with lifecycle tracking and optimization',
      icon: BarChart,
      price: '$900/month',
      features: ['Asset Tracking', 'Lifecycle Management', 'Cost Optimization', 'License Management', 'Inventory Control', 'Depreciation Tracking'],
      color: 'text-pink-400',
      category: 'Asset Management'
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions with business continuity planning',
      icon: Database,
      price: '$1,100/month',
      features: ['Backup Solutions', 'Disaster Recovery', 'Business Continuity', 'Data Replication', 'Recovery Testing', 'Compliance Backup'],
      color: 'text-red-500',
      category: 'Data Protection'
    },
    {
      title: 'IT Training & Support',
      description: 'Comprehensive IT training and support services for teams and organizations',
      icon: GraduationCap,
      price: '$700/month',
      features: ['Technical Training', 'Certification Programs', 'User Support', 'Documentation', 'Best Practices', 'Knowledge Transfer'],
      color: 'text-emerald-400',
      category: 'Training'
    },
    {
      title: 'IT Performance Optimization',
      description: 'Advanced IT performance optimization with monitoring and tuning services',
      icon: Zap,
      price: '$1,200/month',
      features: ['Performance Monitoring', 'System Tuning', 'Capacity Planning', 'Load Balancing', 'Optimization Analysis', 'Performance Reports'],
      color: 'text-yellow-500',
      category: 'Performance'
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
      title: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development, cryptocurrency solutions, and Web3 applications',
      icon: Lock,
      price: '$2,500/month',
      features: ['Smart Contracts', 'DApp Development', 'Token Creation', 'DeFi Solutions', 'NFT Marketplaces', 'Web3 Integration'],
      color: 'text-yellow-500',
      category: 'Blockchain'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Internet of Things development, implementation, and edge computing solutions',
      icon: Cpu,
      price: '$1,800/month',
      features: ['IoT Device Development', 'Sensor Integration', 'Data Collection', 'Real-time Monitoring', 'Edge Computing', 'IoT Security'],
      color: 'text-green-500',
      category: 'IoT'
    },
    {
      title: 'AI Infrastructure',
      description: 'AI infrastructure setup, GPU clusters, and machine learning platform deployment',
      icon: Brain,
      price: '$2,200/month',
      features: ['GPU Cluster Setup', 'ML Platform Deployment', 'Model Serving', 'Data Pipeline Setup', 'AI Model Training', 'MLOps Implementation'],
      color: 'text-purple-500',
      category: 'AI Infrastructure'
    },
    {
      title: 'Enterprise Integration',
      description: 'Enterprise system integration, API development, and legacy system modernization',
      icon: Link,
      price: '$1,600/month',
      features: ['API Development', 'System Integration', 'Legacy Modernization', 'Data Synchronization', 'Workflow Automation', 'Enterprise Architecture'],
      color: 'text-blue-500',
      category: 'Integration'
    },
    {
      title: 'Quantum Computing Infrastructure',
      description: 'Quantum computing setup, optimization, and quantum algorithm development',
      icon: Cpu,
      price: '$3,000/month',
      features: ['Quantum Hardware Setup', 'Algorithm Development', 'Quantum Simulation', 'Error Correction', 'Quantum Networking', 'Research Support'],
      color: 'text-cyan-500',
      category: 'Quantum Computing'
    },
    {
      title: '5G & Wireless Solutions',
      description: '5G network implementation, wireless optimization, and mobile infrastructure',
      icon: Globe,
      price: '$2,000/month',
      features: ['5G Network Design', 'Wireless Optimization', 'Mobile Infrastructure', 'Signal Analysis', 'Coverage Planning', 'Performance Monitoring'],
      color: 'text-orange-500',
      category: 'Wireless'
    },
    {
      title: 'Data Center Modernization',
      description: 'Modern data center design, implementation, and management with energy efficiency optimization',
      icon: Database,
      price: '$2,200/month',
      features: ['Data Center Design', 'Cooling Systems', 'Power Management', 'Security Systems', 'Monitoring Solutions', 'Disaster Recovery'],
      color: 'text-purple-500',
      category: 'Data Center'
    },
    {
      title: 'Microservices Architecture',
      description: 'Microservices design, implementation, and container orchestration solutions',
      icon: Settings,
      price: '$1,800/month',
      features: ['Microservices Design', 'Container Orchestration', 'Service Mesh', 'API Gateway', 'Load Balancing', 'Monitoring & Logging'],
      color: 'text-teal-500',
      category: 'Microservices'
    },
    {
      title: 'Serverless Computing',
      description: 'Serverless architecture design, implementation, and optimization',
      icon: Cloud,
      price: '$1,500/month',
      features: ['Serverless Design', 'Function Optimization', 'Event-driven Architecture', 'Auto-scaling', 'Cost Optimization', 'Performance Monitoring'],
      color: 'text-cyan-500',
      category: 'Serverless'
    },
    {
      title: 'Hybrid Cloud Solutions',
      description: 'Hybrid cloud architecture, multi-cloud management, and cloud migration',
      icon: Cloud,
      price: '$2,000/month',
      features: ['Hybrid Architecture', 'Multi-cloud Management', 'Cloud Migration', 'Data Synchronization', 'Security Management', 'Cost Optimization'],
      color: 'text-blue-500',
      category: 'Hybrid Cloud'
    },
    {
      title: 'Edge Computing Solutions',
      description: 'Edge computing infrastructure, deployment, and optimization for real-time processing',
      icon: Cpu,
      price: '$1,700/month',
      features: ['Edge Infrastructure', 'Real-time Processing', 'Low Latency Solutions', 'Distributed Computing', 'Edge Analytics', 'Offline Capability'],
      color: 'text-green-500',
      category: 'Edge Computing'
    },
    {
      title: 'API Management Platform',
      description: 'Comprehensive API management, development, and monitoring solutions',
      icon: Settings,
      price: '$1,400/month',
      features: ['API Gateway', 'API Development', 'Rate Limiting', 'Authentication', 'Monitoring & Analytics', 'Documentation'],
      color: 'text-indigo-500',
      category: 'API Management'
    },
    {
      title: 'DevSecOps Solutions',
      description: 'Security-integrated DevOps with automated security testing and compliance',
      icon: Shield,
      price: '$1,900/month',
      features: ['Security Integration', 'Automated Testing', 'Compliance Automation', 'Vulnerability Scanning', 'Security Monitoring', 'Incident Response'],
      color: 'text-red-500',
      category: 'DevSecOps'
    },
    {
      title: 'Multi-Cloud Management',
      description: 'Multi-cloud strategy, management, and optimization across different cloud providers',
      icon: Cloud,
      price: '$2,300/month',
      features: ['Multi-cloud Strategy', 'Provider Management', 'Cost Optimization', 'Security Management', 'Data Governance', 'Performance Monitoring'],
      color: 'text-blue-500',
      category: 'Multi-Cloud'
    },
    {
      title: 'Container Security',
      description: 'Container security solutions, vulnerability scanning, and runtime protection',
      icon: Shield,
      price: '$1,600/month',
      features: ['Container Scanning', 'Runtime Protection', 'Vulnerability Management', 'Compliance Monitoring', 'Security Policies', 'Threat Detection'],
      color: 'text-red-500',
      category: 'Container Security'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Infrastructure automation, provisioning, and management using code',
      icon: Code,
      price: '$1,500/month',
      features: ['Infrastructure Automation', 'Code-based Provisioning', 'Version Control', 'Automated Deployment', 'Configuration Management', 'Monitoring'],
      color: 'text-green-500',
      category: 'IaC'
    },
    {
      title: 'Zero Trust Security',
      description: 'Zero trust security architecture implementation and management',
      icon: Shield,
      price: '$2,100/month',
      features: ['Zero Trust Architecture', 'Identity Management', 'Access Control', 'Network Segmentation', 'Continuous Monitoring', 'Threat Detection'],
      color: 'text-red-500',
      category: 'Zero Trust'
    },
    {
      title: 'Cloud Cost Optimization',
      description: 'Cloud cost analysis, optimization, and automated cost management',
      icon: DollarSign,
      price: '$1,200/month',
      features: ['Cost Analysis', 'Resource Optimization', 'Automated Scaling', 'Budget Management', 'Cost Alerts', 'ROI Analysis'],
      color: 'text-green-500',
      category: 'Cost Optimization'
    },
    {
      title: 'Disaster Recovery as a Service',
      description: 'Comprehensive disaster recovery solutions with automated failover and testing',
      icon: Database,
      price: '$1,800/month',
      features: ['Automated Failover', 'Recovery Testing', 'Data Replication', 'Backup Management', 'RTO/RPO Optimization', 'Compliance Monitoring'],
      color: 'text-orange-500',
      category: 'DRaaS'
    }
  ];

  return (
    <ErrorBoundary>
      <EnhancedSEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services', 'artificial intelligence', 'business intelligence', 'data analytics', 'cybersecurity', 'cloud migration', 'DevOps', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com"
        ogImage="https://ziontechgroup.com/og-image.jpg"
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
      <EnhancedPerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePreloading={true}
        enableCriticalCSS={true}
        enableResourceHints={true}
        enableServiceWorker={true}
        enableWebVitals={true}
        enableCompression={true}
      />
      <EnhancedAccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
        enableAriaLabels={true}
        enableReducedMotion={true}
        enableSkipLinks={true}
        enableColorContrast={true}
        enableFontScaling={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <EnhancedAnalytics
        enableGoogleAnalytics={true}
        enableGoogleTagManager={true}
        enableCustomEvents={true}
        enablePerformanceTracking={true}
        enableUserBehaviorTracking={true}
        enableConversionTracking={true}
        enableHeatmapTracking={false}
      />
      <ServiceWorker />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced neural-network-bg matrix-rain-advanced particle-field quantum-field cyber-circuit">
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
          <Suspense fallback={<HeroSkeleton />}>
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
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch cyber-glitch"
                data-text="Zion Tech Group"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect cyber-scan-lines" role="doc-subtitle">
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
                  className="holographic-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
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
          <Suspense fallback={<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {Array.from({ length: 8 }).map((_, i) => <ServiceCardSkeleton key={i} />)}
          </div>}>
          <section className="mb-16" aria-labelledby="micro-saas-heading">
            <h2 id="micro-saas-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Powerful, affordable AI-powered tools designed for modern businesses
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
              {microSAASServices.map((service, index) => (
                <article key={index} className={`quantum-card p-6 hover:scale-105 transition-all duration-300 energy-pulse ${service.popular ? 'ring-2 ring-cyan-400 neon-border' : ''}`}>
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
          </Suspense>

          {/* AI Services Section */}
          <Suspense fallback={<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {Array.from({ length: 8 }).map((_, i) => <ServiceCardSkeleton key={i} />)}
          </div>}>
          <section className="mb-16" aria-labelledby="ai-services-heading">
            <h2 id="ai-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              AI Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Advanced artificial intelligence solutions for enterprise applications
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
              {aiServices.map((service, index) => (
                <article key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300 holographic">
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
          </Suspense>

          {/* IT Services Section */}
          <Suspense fallback={<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {Array.from({ length: 8 }).map((_, i) => <ServiceCardSkeleton key={i} />)}
          </div>}>
          <section className="mb-16" aria-labelledby="it-services-heading">
            <h2 id="it-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              IT Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive IT solutions for modern enterprise infrastructure
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
              {itServices.map((service, index) => (
                <article key={index} className="quantum-card p-6 hover:scale-105 transition-all duration-300 energy-pulse">
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
          </Suspense>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;