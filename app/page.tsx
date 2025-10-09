'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, DollarSign, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
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
      title: 'AI Business Intelligence Suite',
      description: 'Comprehensive business analytics with AI-powered insights, predictive modeling, and automated reporting',
      icon: '📈',
      price: '$149/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Automated reporting', 'Data visualization', 'KPI tracking', 'Trend analysis'],
      benefits: ['50% faster decisions', '35% revenue increase', '60% time saved', 'Better market insights'],
      link: '/ai-business-intelligence',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI CRM Intelligence Pro',
      description: 'Smart customer relationship management with AI-powered lead scoring, automation, and predictive insights',
      icon: '👥',
      price: '$129/month',
      features: ['AI lead scoring', 'Automated follow-ups', 'Customer segmentation', 'Sales forecasting', 'Pipeline management', 'Email automation'],
      benefits: ['45% more conversions', '30% higher close rates', '50% time saved', 'Better customer insights'],
      link: '/ai-crm-intelligence',
      popular: true,
      category: 'Sales'
    },
    {
      title: 'AI Healthcare Assistant Pro',
      description: 'Medical AI assistant for patient management, diagnosis support, and treatment recommendations',
      icon: '🏥',
      price: '$199/month',
      features: ['Patient management', 'Diagnosis support', 'Treatment recommendations', 'Medical records analysis', 'Appointment scheduling', 'Health monitoring'],
      benefits: ['Improved accuracy', 'Faster diagnosis', 'Better patient care', 'Reduced errors'],
      link: '/ai-healthcare-assistant',
      popular: false,
      category: 'Healthcare'
    },
    {
      title: 'AI Fintech Analyzer Pro',
      description: 'Advanced financial analysis with AI-powered risk assessment, fraud detection, and investment insights',
      icon: '💰',
      price: '$179/month',
      features: ['Risk assessment', 'Fraud detection', 'Investment analysis', 'Credit scoring', 'Market prediction', 'Portfolio optimization'],
      benefits: ['95% fraud detection', '30% better returns', 'Faster processing', 'Reduced risk'],
      link: '/ai-fintech-analyzer',
      popular: true,
      category: 'Finance'
    },
    {
      title: 'AI Mobile App Builder',
      description: 'No-code mobile app development with AI-powered design, testing, and deployment automation',
      icon: '📱',
      price: '$159/month',
      features: ['No-code development', 'AI design suggestions', 'Automated testing', 'Cross-platform support', 'App store optimization', 'Analytics integration'],
      benefits: ['80% faster development', '50% cost reduction', 'Professional quality', 'Easy maintenance'],
      link: '/ai-mobile-app-builder',
      popular: true,
      category: 'Development'
    },
    {
      title: 'AI Cybersecurity Shield',
      description: 'Advanced AI-powered security monitoring with threat detection, vulnerability scanning, and incident response',
      icon: '🛡️',
      price: '$189/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Security monitoring', 'Compliance checking', 'Risk assessment'],
      benefits: ['99% threat detection', 'Faster response times', 'Reduced breaches', 'Compliance assurance'],
      link: '/ai-cybersecurity-shield',
      popular: true,
      category: 'Security'
    },
    {
      title: 'AI Marketing Automation Hub',
      description: 'Comprehensive marketing automation with AI-powered campaigns, personalization, and performance optimization',
      icon: '🎯',
      price: '$139/month',
      features: ['Campaign automation', 'Personalization engine', 'A/B testing', 'Lead nurturing', 'Email marketing', 'Social media automation'],
      benefits: ['40% higher engagement', '60% more leads', '35% conversion increase', 'Automated optimization'],
      link: '/ai-marketing-automation',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, time tracking, and productivity insights',
      icon: '✅',
      price: '$79/month',
      features: ['Smart prioritization', 'Time tracking', 'Productivity analytics', 'Team collaboration', 'Deadline management', 'Progress monitoring'],
      benefits: ['25% productivity boost', 'Better time management', 'Reduced stress', 'Improved focus'],
      link: '/ai-task-manager',
      popular: false,
      category: 'Productivity'
    },
    {
      title: 'AI Expense Tracker Pro',
      description: 'Smart expense management with AI-powered categorization, receipt scanning, and budget optimization',
      icon: '💳',
      price: '$69/month',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget tracking', 'Tax preparation', 'Expense analytics', 'Mobile app'],
      benefits: ['90% time saved', 'Better budgeting', 'Tax compliance', 'Expense insights'],
      link: '/ai-expense-tracker',
      popular: false,
      category: 'Finance'
    },
    {
      title: 'AI Chatbot Builder Pro',
      description: 'Create intelligent chatbots with AI-powered natural language processing and multi-channel deployment',
      icon: '🤖',
      price: '$119/month',
      features: ['No-code builder', 'NLP processing', 'Multi-channel support', 'Analytics dashboard', 'Custom integrations', 'Live chat handoff'],
      benefits: ['24/7 availability', '80% query resolution', 'Cost reduction', 'Better customer service'],
      link: '/ai-chatbot-builder',
      popular: true,
      category: 'Customer Service'
    },
    {
      title: 'AI Data Analytics Pro',
      description: 'Advanced data analytics with AI-powered insights, visualization, and predictive modeling',
      icon: '📊',
      price: '$149/month',
      features: ['Data visualization', 'Predictive modeling', 'Real-time analytics', 'Custom dashboards', 'Data integration', 'Automated insights'],
      benefits: ['Faster insights', 'Better decisions', 'Data democratization', 'Competitive advantage'],
      link: '/ai-data-analytics',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI Lead Generation Pro',
      description: 'Automated lead generation with AI-powered prospecting, qualification, and nurturing',
      icon: '🎯',
      price: '$129/month',
      features: ['Lead prospecting', 'Qualification scoring', 'Email sequences', 'CRM integration', 'Lead nurturing', 'Performance tracking'],
      benefits: ['300% more leads', '50% higher quality', 'Automated nurturing', 'Better conversion rates'],
      link: '/ai-lead-generation',
      popular: true,
      category: 'Sales'
    },
    {
      title: 'AI Document Processor Pro',
      description: 'Intelligent document processing with AI-powered extraction, analysis, and automation',
      icon: '📄',
      price: '$99/month',
      features: ['Document extraction', 'OCR processing', 'Data validation', 'Workflow automation', 'Template recognition', 'Batch processing'],
      benefits: ['95% accuracy', '80% time saved', 'Reduced errors', 'Automated workflows'],
      link: '/ai-document-processor',
      popular: false,
      category: 'Productivity'
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'E-commerce optimization with AI-powered product recommendations, pricing, and conversion optimization',
      icon: '🛒',
      price: '$179/month',
      features: ['Product recommendations', 'Dynamic pricing', 'Inventory optimization', 'Customer segmentation', 'A/B testing', 'Analytics dashboard'],
      benefits: ['35% conversion increase', '25% revenue growth', 'Better customer experience', 'Optimized pricing'],
      link: '/ai-ecommerce-optimizer',
      popular: true,
      category: 'E-commerce'
    },
    {
      title: 'AI Financial Analyzer Pro',
      description: 'Comprehensive financial analysis with AI-powered forecasting, budgeting, and investment insights',
      icon: '💼',
      price: '$159/month',
      features: ['Financial forecasting', 'Budget optimization', 'Investment analysis', 'Risk assessment', 'Cash flow management', 'Tax planning'],
      benefits: ['Better financial planning', 'Reduced risk', 'Optimized investments', 'Tax savings'],
      link: '/ai-financial-analyzer',
      popular: false,
      category: 'Finance'
    },
    {
      title: 'AI Inventory Manager Pro',
      description: 'Smart inventory management with AI-powered demand forecasting and supply chain optimization',
      icon: '📦',
      price: '$149/month',
      features: ['Demand forecasting', 'Stock optimization', 'Reorder alerts', 'Supplier management', 'Cost optimization', 'Analytics dashboard'],
      benefits: ['30% inventory reduction', '99% stock accuracy', 'Zero stockouts', 'Reduced carrying costs'],
      link: '/ai-inventory-manager',
      popular: false,
      category: 'Operations'
    },
    {
      title: 'AI HR Assistant Pro',
      description: 'Human resources automation with AI-powered recruitment, employee management, and performance analytics',
      icon: '👥',
      price: '$189/month',
      features: ['Resume screening', 'Interview scheduling', 'Employee analytics', 'Performance tracking', 'Skills assessment', 'Retention insights'],
      benefits: ['50% faster hiring', 'Better candidate matching', 'Reduced bias', 'Improved retention'],
      link: '/ai-hr-assistant',
      popular: false,
      category: 'Human Resources'
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
      title: 'AI Translation Hub Pro',
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
      title: 'AI Security Monitor Pro',
      description: 'Advanced cybersecurity monitoring with AI-powered threat detection and response',
      icon: '🔒',
      price: '$199/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance monitoring', 'Security analytics', '24/7 monitoring'],
      benefits: ['Proactive protection', 'Faster response', 'Compliance assurance', 'Risk reduction'],
      link: '/ai-security-monitor',
      popular: true,
      category: 'Security'
    },
    {
      title: 'AI Real Estate Analyzer',
      description: 'Property analysis and investment insights with AI-powered market intelligence and valuation',
      icon: '🏠',
      price: '$129/month',
      features: ['Property valuation', 'Market analysis', 'Investment insights', 'Risk assessment', 'ROI calculations', 'Market trends'],
      benefits: ['Better investment decisions', 'Accurate valuations', 'Market insights', 'Risk reduction'],
      link: '/ai-real-estate-analyzer',
      popular: false,
      category: 'Real Estate'
    },
    {
      title: 'AI Manufacturing Intelligence',
      description: 'Smart manufacturing optimization with AI-powered quality control and production efficiency',
      icon: '🏭',
      price: '$249/month',
      features: ['Quality control', 'Production optimization', 'Predictive maintenance', 'Supply chain management', 'Quality analytics', 'Process automation'],
      benefits: ['30% efficiency increase', '50% defect reduction', 'Predictive maintenance', 'Cost optimization'],
      link: '/ai-manufacturing-intelligence',
      popular: false,
      category: 'Manufacturing'
    },
    {
      title: 'AI Transportation Optimizer',
      description: 'Logistics optimization with AI-powered route planning, fleet management, and delivery optimization',
      icon: '🚛',
      price: '$199/month',
      features: ['Route optimization', 'Fleet management', 'Delivery scheduling', 'Fuel optimization', 'Driver analytics', 'Real-time tracking'],
      benefits: ['25% fuel savings', '30% faster deliveries', 'Better efficiency', 'Cost reduction'],
      link: '/ai-transportation-optimizer',
      popular: false,
      category: 'Logistics'
    },
    {
      title: 'AI Education Platform Pro',
      description: 'Personalized learning platform with AI-powered curriculum, assessment, and student analytics',
      icon: '🎓',
      price: '$149/month',
      features: ['Personalized learning', 'Adaptive curriculum', 'Student analytics', 'Progress tracking', 'Assessment tools', 'Parent dashboard'],
      benefits: ['Better learning outcomes', 'Personalized education', 'Progress insights', 'Engagement tracking'],
      link: '/ai-education-platform',
      popular: false,
      category: 'Education'
    },
    {
      title: 'AI Energy Management Pro',
      description: 'Smart energy optimization with AI-powered consumption analysis and renewable energy integration',
      icon: '⚡',
      price: '$179/month',
      features: ['Energy optimization', 'Consumption analysis', 'Renewable integration', 'Cost optimization', 'Carbon tracking', 'Smart grid management'],
      benefits: ['30% energy savings', 'Carbon reduction', 'Cost optimization', 'Sustainability goals'],
      link: '/ai-energy-management',
      popular: false,
      category: 'Energy'
    },
    {
      title: 'AI Insurance Analytics',
      description: 'Insurance risk assessment and fraud detection with AI-powered analytics and claims processing',
      icon: '🛡️',
      price: '$219/month',
      features: ['Risk assessment', 'Fraud detection', 'Claims processing', 'Underwriting automation', 'Customer analytics', 'Policy optimization'],
      benefits: ['90% fraud detection', 'Faster processing', 'Better risk assessment', 'Cost reduction'],
      link: '/ai-insurance-analytics',
      popular: false,
      category: 'Insurance'
    },
    {
      title: 'AI Email Assistant Pro',
      description: 'Smart email management with AI-powered organization, scheduling, and response automation',
      icon: '📧',
      price: '$89/month',
      features: ['Email organization', 'Smart scheduling', 'Response suggestions', 'Priority management', 'Spam filtering', 'Analytics dashboard'],
      benefits: ['50% time saved', 'Better organization', 'Faster responses', 'Reduced stress'],
      link: '/ai-email-assistant',
      popular: false,
      category: 'Productivity'
    },
    {
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with AI-powered optimization, conflict resolution, and calendar management',
      icon: '📅',
      price: '$79/month',
      features: ['Smart scheduling', 'Conflict resolution', 'Calendar integration', 'Meeting optimization', 'Time blocking', 'Analytics insights'],
      benefits: ['Better time management', 'Reduced conflicts', 'Optimized schedules', 'Productivity boost'],
      link: '/ai-scheduler-pro',
      popular: false,
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
      title: 'AI Business Intelligence Suite',
      description: 'Comprehensive business analytics with AI-powered insights, predictive modeling, and automated reporting',
      icon: BarChart,
      price: '$1,200/month',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Automated Reporting', 'Data Visualization', 'KPI Tracking', 'Trend Analysis'],
      color: 'text-blue-400',
      category: 'Business Intelligence'
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning',
      icon: Globe,
      price: '$1,600/month',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Quality Control', 'Sustainability Tracking'],
      color: 'text-green-400',
      category: 'Supply Chain AI'
    },
    {
      title: 'AI Quality Assurance Pro',
      description: 'Automated quality control with AI-powered defect detection, process optimization, and compliance monitoring',
      icon: Shield,
      price: '$1,400/month',
      features: ['Defect Detection', 'Process Optimization', 'Compliance Monitoring', 'Quality Analytics', 'Automated Testing', 'Risk Assessment'],
      color: 'text-red-400',
      category: 'Quality AI'
    },
    {
      title: 'AI Human Resources Intelligence',
      description: 'HR automation with AI-powered recruitment, employee analytics, and performance management',
      icon: Users,
      price: '$1,300/month',
      features: ['Resume Screening', 'Interview Scheduling', 'Employee Analytics', 'Performance Tracking', 'Skills Assessment', 'Retention Insights'],
      color: 'text-pink-400',
      category: 'HR AI'
    },
    {
      title: 'AI Legal Intelligence Suite',
      description: 'Legal document analysis, contract review, and compliance monitoring with AI technology',
      icon: FileText,
      price: '$1,800/month',
      features: ['Contract Analysis', 'Legal Research', 'Document Generation', 'Compliance Checking', 'Risk Assessment', 'Case Law Research'],
      color: 'text-indigo-400',
      category: 'Legal AI'
    },
    {
      title: 'AI Real Estate Analytics',
      description: 'Property analysis and investment insights with AI-powered market intelligence and valuation',
      icon: Home,
      price: '$1,200/month',
      features: ['Property Valuation', 'Market Analysis', 'Investment Insights', 'Risk Assessment', 'ROI Calculations', 'Market Trends'],
      color: 'text-orange-400',
      category: 'Real Estate AI'
    },
    {
      title: 'AI Manufacturing Intelligence',
      description: 'Smart manufacturing optimization with AI-powered quality control and production efficiency',
      icon: Factory,
      price: '$1,700/month',
      features: ['Quality Control', 'Production Optimization', 'Predictive Maintenance', 'Supply Chain Management', 'Quality Analytics', 'Process Automation'],
      color: 'text-cyan-400',
      category: 'Manufacturing AI'
    },
    {
      title: 'AI Transportation & Logistics',
      description: 'Logistics optimization with AI-powered route planning, fleet management, and delivery optimization',
      icon: Truck,
      price: '$1,500/month',
      features: ['Route Optimization', 'Fleet Management', 'Delivery Scheduling', 'Fuel Optimization', 'Driver Analytics', 'Real-time Tracking'],
      color: 'text-yellow-400',
      category: 'Logistics AI'
    },
    {
      title: 'AI Education Platform Pro',
      description: 'Personalized learning platform with AI-powered curriculum, assessment, and student analytics',
      icon: GraduationCap,
      price: '$1,100/month',
      features: ['Personalized Learning', 'Adaptive Curriculum', 'Student Analytics', 'Progress Tracking', 'Assessment Tools', 'Parent Dashboard'],
      color: 'text-emerald-400',
      category: 'Education AI'
    },
    {
      title: 'AI Energy Management',
      description: 'Smart energy optimization with AI-powered consumption analysis and renewable energy integration',
      icon: Zap,
      price: '$1,400/month',
      features: ['Energy Optimization', 'Consumption Analysis', 'Renewable Integration', 'Cost Optimization', 'Carbon Tracking', 'Smart Grid Management'],
      color: 'text-yellow-500',
      category: 'Energy AI'
    },
    {
      title: 'AI Insurance Analytics Pro',
      description: 'Insurance risk assessment and fraud detection with AI-powered analytics and claims processing',
      icon: Shield,
      price: '$1,600/month',
      features: ['Risk Assessment', 'Fraud Detection', 'Claims Processing', 'Underwriting Automation', 'Customer Analytics', 'Policy Optimization'],
      color: 'text-red-500',
      category: 'Insurance AI'
    },
    {
      title: 'AI Email Intelligence Suite',
      description: 'Smart email management with AI-powered organization, scheduling, and response automation',
      icon: Mail,
      price: '$900/month',
      features: ['Email Organization', 'Smart Scheduling', 'Response Suggestions', 'Priority Management', 'Spam Filtering', 'Analytics Dashboard'],
      color: 'text-blue-500',
      category: 'Communication AI'
    },
    {
      title: 'AI Scheduler Intelligence',
      description: 'Intelligent scheduling with AI-powered optimization, conflict resolution, and calendar management',
      icon: Calendar,
      price: '$800/month',
      features: ['Smart Scheduling', 'Conflict Resolution', 'Calendar Integration', 'Meeting Optimization', 'Time Blocking', 'Analytics Insights'],
      color: 'text-purple-500',
      category: 'Productivity AI'
    },
    {
      title: 'AI Content Intelligence Pro',
      description: 'Advanced content creation and optimization with AI-powered writing, SEO, and performance analytics',
      icon: FileText,
      price: '$1,100/month',
      features: ['Content Generation', 'SEO Optimization', 'Performance Analytics', 'Brand Voice Training', 'Content Strategy', 'Multi-language Support'],
      color: 'text-green-500',
      category: 'Content AI'
    },
    {
      title: 'AI Customer Intelligence',
      description: 'Advanced customer analytics with AI-powered segmentation, behavior analysis, and personalization',
      icon: Users,
      price: '$1,300/month',
      features: ['Customer Segmentation', 'Behavior Analysis', 'Personalization Engine', 'Churn Prediction', 'Lifetime Value Analysis', 'Engagement Optimization'],
      color: 'text-pink-500',
      category: 'Customer AI'
    },
    {
      title: 'AI Financial Intelligence Pro',
      description: 'Advanced financial analysis with AI-powered forecasting, risk management, and investment optimization',
      icon: DollarSign,
      price: '$1,800/month',
      features: ['Financial Forecasting', 'Risk Management', 'Investment Analysis', 'Portfolio Optimization', 'Fraud Detection', 'Regulatory Compliance'],
      color: 'text-green-600',
      category: 'Financial AI'
    },
    {
      title: 'AI Healthcare Intelligence',
      description: 'Medical AI for diagnosis, treatment planning, and healthcare optimization with advanced analytics',
      icon: Stethoscope,
      price: '$2,200/month',
      features: ['Medical Imaging', 'Diagnostic Support', 'Treatment Planning', 'Drug Discovery', 'Patient Monitoring', 'Clinical Decision Support'],
      color: 'text-emerald-500',
      category: 'Healthcare AI'
    },
    {
      title: 'AI Cybersecurity Intelligence',
      description: 'Advanced cybersecurity with AI-powered threat detection, response, and security analytics',
      icon: Shield,
      price: '$1,900/month',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Incident Response', 'Security Analytics', 'Compliance Monitoring', '24/7 Monitoring'],
      color: 'text-red-600',
      category: 'Security AI'
    },
    {
      title: 'AI IoT Intelligence Suite',
      description: 'Internet of Things intelligence with AI-powered device management, data analysis, and automation',
      icon: Cpu,
      price: '$1,600/month',
      features: ['Device Management', 'Data Analysis', 'Predictive Maintenance', 'Edge Computing', 'IoT Security', 'Real-time Monitoring'],
      color: 'text-cyan-500',
      category: 'IoT AI'
    },
    {
      title: 'AI Blockchain Intelligence',
      description: 'Blockchain and Web3 solutions with AI-powered smart contracts, DeFi analytics, and NFT intelligence',
      icon: Lock,
      price: '$2,000/month',
      features: ['Smart Contract Analysis', 'DeFi Analytics', 'NFT Intelligence', 'Blockchain Security', 'Token Economics', 'Web3 Integration'],
      color: 'text-yellow-600',
      category: 'Blockchain AI'
    },
    {
      title: 'AI Quantum Computing Solutions',
      description: 'Quantum computing integration with AI algorithms for optimization, cryptography, and advanced simulations',
      icon: Cpu,
      price: '$2,500/month',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Quantum Machine Learning', 'Hybrid Computing'],
      color: 'text-purple-600',
      category: 'Quantum AI'
    },
    {
      title: 'AI Autonomous Systems',
      description: 'Autonomous system development with AI-powered decision making, navigation, and self-management',
      icon: Settings,
      price: '$2,200/month',
      features: ['Autonomous Navigation', 'Decision Making', 'Self-Management', 'Adaptive Learning', 'Safety Systems', 'Performance Optimization'],
      color: 'text-blue-600',
      category: 'Autonomous AI'
    },
    {
      title: 'AI Robotics Intelligence',
      description: 'Robotic systems with AI-powered control, learning, and human-robot interaction',
      icon: Settings,
      price: '$1,800/month',
      features: ['Robotic Control', 'Machine Learning', 'Human-Robot Interaction', 'Task Planning', 'Safety Systems', 'Performance Analytics'],
      color: 'text-gray-500',
      category: 'Robotics AI'
    },
    {
      title: 'AI Environmental Intelligence',
      description: 'Environmental monitoring and sustainability solutions with AI-powered analysis and optimization',
      icon: Globe,
      price: '$1,300/month',
      features: ['Environmental Monitoring', 'Sustainability Analysis', 'Carbon Tracking', 'Resource Optimization', 'Climate Modeling', 'Green Technology'],
      color: 'text-green-600',
      category: 'Environmental AI'
    },
    {
      title: 'AI Space Technology Solutions',
      description: 'Space technology applications with AI-powered satellite management, space analytics, and mission optimization',
      icon: Globe,
      price: '$2,800/month',
      features: ['Satellite Management', 'Space Analytics', 'Mission Optimization', 'Orbital Mechanics', 'Space Weather', 'Satellite Communication'],
      color: 'text-indigo-600',
      category: 'Space AI'
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
      features: ['Infrastructure Design', 'Server Management', 'Network Administration', 'Storage Solutions', 'Performance Monitoring', 'Capacity Planning'],
      color: 'text-green-400',
      category: 'Infrastructure'
    },
    {
      title: 'Data Center Solutions Pro',
      description: 'Enterprise data center design, implementation, and management with high availability and scalability',
      icon: Database,
      price: '$1,800/month',
      features: ['Data Center Design', 'High Availability Setup', 'Disaster Recovery', 'Power Management', 'Cooling Systems', 'Security Implementation'],
      color: 'text-purple-400',
      category: 'Data Center'
    },
    {
      title: 'Network Security & Firewall',
      description: 'Advanced network security with firewall configuration, intrusion detection, and threat prevention',
      icon: Lock,
      price: '$1,400/month',
      features: ['Firewall Configuration', 'Intrusion Detection', 'VPN Setup', 'Network Monitoring', 'Threat Prevention', 'Security Policies'],
      color: 'text-orange-400',
      category: 'Network Security'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting for digital transformation, optimization, and technology roadmap development',
      icon: Briefcase,
      price: '$1,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Change Management', 'ROI Analysis'],
      color: 'text-yellow-400',
      category: 'Consulting'
    },
    {
      title: 'Managed IT Services Pro',
      description: 'Comprehensive managed IT services with 24/7 support, monitoring, and proactive maintenance',
      icon: Users,
      price: '$1,500/month',
      features: ['24/7 Support', 'Proactive Monitoring', 'Remote Management', 'Software Updates', 'Hardware Maintenance', 'Help Desk Services'],
      color: 'text-cyan-400',
      category: 'Managed Services'
    },
    {
      title: 'Cloud Security & Compliance',
      description: 'Cloud security implementation with compliance management and data protection',
      icon: Shield,
      price: '$1,300/month',
      features: ['Cloud Security', 'Compliance Management', 'Data Protection', 'Access Control', 'Audit Support', 'Risk Assessment'],
      color: 'text-red-500',
      category: 'Cloud Security'
    },
    {
      title: 'IT Asset Management Pro',
      description: 'Comprehensive IT asset lifecycle management with tracking, optimization, and cost control',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Asset Tracking', 'Lifecycle Management', 'Cost Optimization', 'License Management', 'Depreciation Tracking', 'Procurement Support'],
      color: 'text-blue-500',
      category: 'Asset Management'
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning with business continuity',
      icon: HardDrive,
      price: '$1,200/month',
      features: ['Backup Solutions', 'Disaster Recovery', 'Business Continuity', 'Data Replication', 'Recovery Testing', 'Compliance Backup'],
      color: 'text-green-500',
      category: 'Data Protection'
    },
    {
      title: 'IT Training & Support',
      description: 'Comprehensive IT training programs and technical support for teams and organizations',
      icon: GraduationCap,
      price: '$800/month',
      features: ['Technical Training', 'Certification Programs', 'User Support', 'Documentation', 'Best Practices', 'Knowledge Transfer'],
      color: 'text-purple-500',
      category: 'Training'
    },
    {
      title: 'IT Performance Optimization',
      description: 'System performance optimization with monitoring, tuning, and capacity planning',
      icon: Zap,
      price: '$1,400/month',
      features: ['Performance Monitoring', 'System Tuning', 'Capacity Planning', 'Load Testing', 'Optimization', 'Performance Analytics'],
      color: 'text-yellow-500',
      category: 'Performance'
    },
    {
      title: 'Cybersecurity Solutions Pro',
      description: 'Advanced cybersecurity with threat intelligence, incident response, and security operations center',
      icon: Shield,
      price: '$1,800/month',
      features: ['Threat Intelligence', 'Incident Response', 'Security Operations', 'Vulnerability Management', 'Security Analytics', 'Compliance'],
      color: 'text-red-600',
      category: 'Cybersecurity'
    },
    {
      title: 'DevOps & CI/CD Pro',
      description: 'Advanced DevOps implementation with CI/CD pipelines, automation, and cloud-native solutions',
      icon: Settings,
      price: '$1,600/month',
      features: ['CI/CD Pipelines', 'Automation', 'Container Orchestration', 'Infrastructure as Code', 'GitOps', 'Cloud Native'],
      color: 'text-green-600',
      category: 'DevOps'
    },
    {
      title: 'Database Services Pro',
      description: 'Advanced database services with optimization, security, and high availability solutions',
      icon: Database,
      price: '$1,300/month',
      features: ['Database Design', 'Performance Tuning', 'Security Hardening', 'High Availability', 'Backup & Recovery', 'Migration Services'],
      color: 'text-purple-600',
      category: 'Database'
    },
    {
      title: 'Network Infrastructure Pro',
      description: 'Enterprise network design and implementation with security, performance, and scalability',
      icon: Globe,
      price: '$1,700/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', 'SD-WAN Solutions', 'Network Automation', 'Monitoring'],
      color: 'text-blue-600',
      category: 'Networking'
    },
    {
      title: 'IT Support & Helpdesk Pro',
      description: 'Advanced IT support with helpdesk services, remote assistance, and user management',
      icon: Users,
      price: '$1,200/month',
      features: ['Helpdesk Services', 'Remote Support', 'User Management', 'Ticket Management', 'Knowledge Base', 'Service Level Agreements'],
      color: 'text-cyan-600',
      category: 'Support'
    },
    {
      title: 'Cloud Migration Pro',
      description: 'Advanced cloud migration services with strategy, planning, and execution for enterprise workloads',
      icon: Cloud,
      price: '$1,500/month',
      features: ['Migration Strategy', 'Workload Assessment', 'Data Migration', 'Application Modernization', 'Testing & Validation', 'Go-Live Support'],
      color: 'text-indigo-600',
      category: 'Cloud Migration'
    },
    {
      title: 'Compliance & Governance Pro',
      description: 'IT compliance and governance solutions with audit support and regulatory adherence',
      icon: FileCheck,
      price: '$1,400/month',
      features: ['Compliance Management', 'Audit Preparation', 'Policy Development', 'Risk Assessment', 'Regulatory Reporting', 'Governance Framework'],
      color: 'text-orange-600',
      category: 'Compliance'
    },
    {
      title: 'Developer Tools & Platforms',
      description: 'Advanced development tools and platforms with CI/CD, testing, and deployment automation',
      icon: Code,
      price: '$1,100/month',
      features: ['Development Tools', 'CI/CD Platforms', 'Testing Frameworks', 'Code Quality Tools', 'Deployment Automation', 'Monitoring Tools'],
      color: 'text-gray-600',
      category: 'Development'
    },
    {
      title: 'Marketing Technology Stack',
      description: 'Comprehensive marketing technology solutions with automation, analytics, and campaign management',
      icon: Target,
      price: '$1,300/month',
      features: ['Marketing Automation', 'Analytics Platforms', 'Campaign Management', 'Email Marketing', 'Social Media Tools', 'Lead Management'],
      color: 'text-pink-600',
      category: 'Marketing Tech'
    },
    {
      title: 'Productivity Solutions Pro',
      description: 'Enterprise productivity solutions with collaboration tools, workflow automation, and efficiency optimization',
      icon: BarChart,
      price: '$1,000/month',
      features: ['Collaboration Tools', 'Workflow Automation', 'Productivity Analytics', 'Document Management', 'Communication Platforms', 'Efficiency Tools'],
      color: 'text-emerald-600',
      category: 'Productivity'
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development and Web3 solutions with smart contracts, DeFi, and NFT platforms',
      icon: Lock,
      price: '$2,000/month',
      features: ['Smart Contracts', 'DApp Development', 'DeFi Solutions', 'NFT Marketplaces', 'Web3 Integration', 'Blockchain Security'],
      color: 'text-yellow-600',
      category: 'Blockchain'
    },
    {
      title: 'IoT & Edge Computing Pro',
      description: 'Internet of Things and edge computing solutions with device management and data processing',
      icon: Cpu,
      price: '$1,600/month',
      features: ['IoT Device Management', 'Edge Computing', 'Data Processing', 'Real-time Analytics', 'Device Security', 'Integration Services'],
      color: 'text-cyan-600',
      category: 'IoT'
    },
    {
      title: 'AI Infrastructure Pro',
      description: 'AI infrastructure setup and management with GPU clusters, ML platforms, and model deployment',
      icon: Brain,
      price: '$1,800/month',
      features: ['GPU Cluster Setup', 'ML Platform Deployment', 'Model Serving', 'Data Pipeline Setup', 'AI Model Training', 'MLOps Implementation'],
      color: 'text-purple-600',
      category: 'AI Infrastructure'
    },
    {
      title: 'Enterprise Integration Pro',
      description: 'Enterprise system integration with API development, legacy modernization, and workflow automation',
      icon: Link,
      price: '$1,400/month',
      features: ['API Development', 'System Integration', 'Legacy Modernization', 'Data Synchronization', 'Workflow Automation', 'Enterprise Architecture'],
      color: 'text-blue-600',
      category: 'Integration'
    },
    {
      title: 'Quantum Computing Infrastructure',
      description: 'Quantum computing infrastructure setup and management with quantum algorithms and hybrid systems',
      icon: Cpu,
      price: '$2,500/month',
      features: ['Quantum Infrastructure', 'Algorithm Development', 'Hybrid Systems', 'Quantum Security', 'Performance Optimization', 'Research Support'],
      color: 'text-indigo-600',
      category: 'Quantum Computing'
    },
    {
      title: 'Autonomous Systems Infrastructure',
      description: 'Autonomous systems infrastructure with robotics, AI control, and self-managing systems',
      icon: Settings,
      price: '$2,200/month',
      features: ['Robotic Systems', 'AI Control', 'Self-Management', 'Safety Systems', 'Performance Monitoring', 'Adaptive Learning'],
      color: 'text-gray-600',
      category: 'Autonomous Systems'
    },
    {
      title: 'Space Technology Infrastructure',
      description: 'Space technology infrastructure with satellite management, ground stations, and space analytics',
      icon: Globe,
      price: '$3,000/month',
      features: ['Satellite Management', 'Ground Stations', 'Space Analytics', 'Mission Control', 'Communication Systems', 'Data Processing'],
      color: 'text-indigo-700',
      category: 'Space Technology'
    },
    {
      title: 'Environmental Technology Solutions',
      description: 'Environmental monitoring and sustainability technology with IoT sensors and data analytics',
      icon: Globe,
      price: '$1,500/month',
      features: ['Environmental Monitoring', 'IoT Sensors', 'Data Analytics', 'Sustainability Tracking', 'Carbon Management', 'Green Technology'],
      color: 'text-green-700',
      category: 'Environmental Tech'
    },
    {
      title: 'Healthcare Technology Solutions',
      description: 'Healthcare technology infrastructure with medical devices, data management, and compliance',
      icon: Stethoscope,
      price: '$1,800/month',
      features: ['Medical Device Integration', 'Health Data Management', 'Compliance Solutions', 'Telemedicine Platforms', 'Patient Monitoring', 'Security'],
      color: 'text-emerald-700',
      category: 'Healthcare Tech'
    },
    {
      title: 'Financial Technology Infrastructure',
      description: 'Fintech infrastructure with payment systems, trading platforms, and financial data management',
      icon: DollarSign,
      price: '$2,000/month',
      features: ['Payment Systems', 'Trading Platforms', 'Financial Data Management', 'Risk Management', 'Compliance Solutions', 'Security'],
      color: 'text-green-700',
      category: 'Fintech'
    },
    {
      title: 'Educational Technology Solutions',
      description: 'Educational technology infrastructure with learning management systems and student analytics',
      icon: GraduationCap,
      price: '$1,200/month',
      features: ['Learning Management Systems', 'Student Analytics', 'Online Learning Platforms', 'Assessment Tools', 'Collaboration Tools', 'Content Management'],
      color: 'text-blue-700',
      category: 'EdTech'
    },
    {
      title: 'Retail Technology Solutions',
      description: 'Retail technology infrastructure with POS systems, inventory management, and customer analytics',
      icon: ShoppingCart,
      price: '$1,400/month',
      features: ['POS Systems', 'Inventory Management', 'Customer Analytics', 'E-commerce Platforms', 'Payment Processing', 'Supply Chain'],
      color: 'text-orange-700',
      category: 'Retail Tech'
    },
    {
      title: 'Manufacturing Technology Solutions',
      description: 'Manufacturing technology infrastructure with automation, quality control, and production optimization',
      icon: Factory,
      price: '$1,600/month',
      features: ['Manufacturing Automation', 'Quality Control Systems', 'Production Optimization', 'Supply Chain Management', 'IoT Integration', 'Analytics'],
      color: 'text-cyan-700',
      category: 'Manufacturing Tech'
    },
    {
      title: 'Transportation Technology Solutions',
      description: 'Transportation technology infrastructure with fleet management, logistics, and route optimization',
      icon: Truck,
      price: '$1,500/month',
      features: ['Fleet Management', 'Logistics Optimization', 'Route Planning', 'Driver Management', 'Vehicle Tracking', 'Analytics'],
      color: 'text-yellow-700',
      category: 'Transportation Tech'
    },
    {
      title: 'Energy Technology Solutions',
      description: 'Energy technology infrastructure with smart grids, renewable energy, and energy management',
      icon: Zap,
      price: '$1,700/month',
      features: ['Smart Grid Systems', 'Renewable Energy Integration', 'Energy Management', 'Carbon Tracking', 'Grid Optimization', 'Analytics'],
      color: 'text-yellow-600',
      category: 'Energy Tech'
    },
    {
      title: 'Government Technology Solutions',
      description: 'Government technology infrastructure with citizen services, data management, and security',
      icon: Building,
      price: '$2,200/month',
      features: ['Citizen Services', 'Data Management', 'Security Solutions', 'Compliance Management', 'Digital Transformation', 'Analytics'],
      color: 'text-gray-700',
      category: 'GovTech'
    },
    {
      title: 'Non-Profit Technology Solutions',
      description: 'Non-profit technology infrastructure with donor management, volunteer coordination, and impact tracking',
      icon: Heart,
      price: '$1,000/month',
      features: ['Donor Management', 'Volunteer Coordination', 'Impact Tracking', 'Fundraising Platforms', 'Communication Tools', 'Analytics'],
      color: 'text-pink-700',
      category: 'Non-Profit Tech'
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
        enablePrefetching={true}
        enableCriticalCSS={true}
        enableResourceHints={true}
        enableServiceWorker={true}
        enableWebVitals={true}
        enableCompression={true}
      />
      <EnhancedAccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
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
        enableHSTS={true}
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
          </Suspense>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;