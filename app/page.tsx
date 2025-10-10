'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  Cpu, 
  Target, 
  BarChart, 
  MessageSquare, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Award, 
  Lock, 
  Database, 
  Cloud, 
  Code, 
  Smartphone, 
  Settings, 
  FileText, 
  Search, 
  Bot, 
  Palette, 
  Camera, 
  Music, 
  Video, 
  Gamepad2, 
  ShoppingCart, 
  CreditCard, 
  Building, 
  Factory, 
  Car, 
  Plane, 
  Ship, 
  Train, 
  Home, 
  Heart, 
  Stethoscope, 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  Hammer, 
  Paintbrush, 
  Scissors, 
  BookOpen, 
  Calculator, 
  Calendar, 
  Clock3, 
  Compass, 
  Navigation as NavIcon, 
  PieChart, 
  TrendingDown, 
  Activity, 
  Atom, 
  Rocket, 
  Microscope, 
  Layers, 
  Server, 
  Network, 
  HardDrive, 
  Wifi, 
  Monitor, 
  Keyboard, 
  Mouse, 
  Headphones, 
  Printer, 
  Scanner, 
  Router, 
  Switch, 
  Firewall, 
  Antivirus, 
  HardDrive, 
  RefreshCw, 
  ArrowRight as Migration, 
  Link as Integration, 
  Briefcase as Consulting, 
  HelpCircle as Support, 
  Wrench as Maintenance, 
  TrendingUp as Upgrade, 
  Shield as SecurityIcon, 
  CheckCircle as Compliance, 
  Search as Audit, 
  BookOpen as Training, 
  FileText as Documentation, 
  CheckSquare as Testing, 
  Award as Quality, 
  Zap as Performance, 
  Layers as Scalability, 
  Shield as Reliability, 
  Clock as Availability, 
  Activity as Monitoring, 
  Bell as Alerting, 
  FileText as Logging, 
  BarChart as Analytics, 
  PieChart as Reporting, 
  Layout as Dashboard 
} from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';
import { initializePerformanceOptimizations } from './utils/performanceOptimizations';
import { Helmet } from 'react-helmet-async';

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
      import('./components/ContentCarousel')
  }, 100);
  }
}

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
))
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
    return () => clearTimeout(timer)
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
  // Enhanced Micro SAAS Services with real functionality and pricing
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
      category: 'Productivity',
      marketPrice: '$299',
      savings: '33%'
    },
    {
      title: 'AI Invoice Generator Pro',
      description: 'Automated invoice creation with AI-powered pricing optimization and payment tracking',
      icon: '🧾',
      price: '$89/month',
      features: ['Auto-invoice generation', 'Smart pricing', 'Payment tracking', 'Tax calculations', 'Multi-currency', 'Client portal'],
      benefits: ['90% time savings', 'Zero errors', 'Faster payments', 'Professional invoices'],
      link: '/ai-invoice-generator',
      popular: true,
      category: 'Finance',
      marketPrice: '$149',
      savings: '40%'
    },
    {
      title: 'AI Time Tracker Elite',
      description: 'Intelligent time tracking with AI-powered productivity insights and automatic categorization',
      icon: '⏰',
      price: '$79/month',
      features: ['Auto time tracking', 'Productivity analytics', 'Project billing', 'Team insights', 'Mobile app', 'Integrations'],
      benefits: ['25% productivity boost', 'Accurate billing', 'Better insights', 'Seamless tracking'],
      link: '/ai-time-tracker',
      popular: true,
      category: 'Productivity',
      marketPrice: '$129',
      savings: '39%'
    },
    {
      title: 'AI Expense Tracker Pro',
      description: 'Smart expense management with AI-powered categorization and receipt processing',
      icon: '💳',
      price: '$99/month',
      features: ['Receipt scanning', 'Auto categorization', 'Tax compliance', 'Budget alerts', 'Expense reports', 'Team management'],
      benefits: ['95% accuracy', 'Tax ready', 'Time savings', 'Better control'],
      link: '/ai-expense-tracker',
      popular: true,
      category: 'Finance',
      marketPrice: '$179',
      savings: '45%'
    },
    {
      title: 'AI Meeting Scheduler Pro',
      description: 'Intelligent meeting scheduling with AI-powered optimization and conflict resolution',
      icon: '📅',
      price: '$69/month',
      features: ['Smart scheduling', 'Conflict resolution', 'Time zone handling', 'Calendar sync', 'Meeting prep', 'Follow-ups'],
      benefits: ['50% fewer conflicts', 'Better meetings', 'Time savings', 'Improved efficiency'],
      link: '/ai-scheduler',
      popular: false,
      category: 'Productivity',
      marketPrice: '$119',
      savings: '42%'
    },
    {
      title: 'AI Password Manager Elite',
      description: 'Advanced password management with AI-powered security recommendations and breach monitoring',
      icon: '🔐',
      price: '$59/month',
      features: ['Password generation', 'Security scoring', 'Breach monitoring', 'Team sharing', '2FA integration', 'Dark web scan'],
      benefits: ['Enhanced security', 'Zero breaches', 'Easy management', 'Team protection'],
      link: '/ai-password-manager',
      popular: true,
      category: 'Security',
      marketPrice: '$99',
      savings: '40%'
    },
    {
      title: 'AI Document Processor Pro',
      description: 'Intelligent document processing with AI-powered extraction and analysis',
      icon: '📄',
      price: '$149/month',
      features: ['OCR processing', 'Data extraction', 'Document analysis', 'Format conversion', 'Batch processing', 'API access'],
      benefits: ['99% accuracy', '10x faster', 'Cost reduction', 'Better insights'],
      link: '/ai-document-processor',
      popular: true,
      category: 'Productivity',
      marketPrice: '$249',
      savings: '40%'
    },
    {
      title: 'AI Inventory Manager Pro',
      description: 'Smart inventory management with AI-powered demand forecasting and optimization',
      icon: '📦',
      price: '$179/month',
      features: ['Demand forecasting', 'Auto reordering', 'Stock optimization', 'Analytics dashboard', 'Multi-location', 'Integrations'],
      benefits: ['30% cost reduction', 'Zero stockouts', 'Better forecasting', 'Automated management'],
      link: '/ai-inventory-manager',
      popular: true,
      category: 'Operations',
      marketPrice: '$299',
      savings: '40%'
    },
    {
      title: 'AI HR Assistant Pro',
      description: 'Intelligent HR management with AI-powered candidate screening and employee insights',
      icon: '👥',
      price: '$199/month',
      features: ['Resume screening', 'Interview scheduling', 'Employee analytics', 'Performance tracking', 'Compliance monitoring', 'Onboarding'],
      benefits: ['60% faster hiring', 'Better candidates', 'Reduced bias', 'Improved retention'],
      link: '/ai-hr-assistant',
      popular: true,
      category: 'HR',
      marketPrice: '$349',
      savings: '43%'
    },
    {
      title: 'AI Customer Insights Pro',
      description: 'Deep customer analytics with AI-powered behavior analysis and predictive insights',
      icon: '👤',
      price: '$249/month',
      features: ['Behavior analysis', 'Predictive insights', 'Segmentation', 'Churn prediction', 'Lifetime value', 'Personalization'],
      benefits: ['40% better retention', 'Higher LTV', 'Personalized experiences', 'Data-driven decisions'],
      link: '/ai-customer-insights',
      popular: true,
      category: 'Analytics',
      marketPrice: '$399',
      savings: '38%'
    },
    {
      title: 'AI A/B Testing Platform',
      description: 'Advanced A/B testing with AI-powered optimization and statistical analysis',
      icon: '🧪',
      price: '$129/month',
      features: ['Smart testing', 'Statistical analysis', 'Auto optimization', 'Multi-variate', 'Real-time results', 'Integrations'],
      benefits: ['50% better results', 'Faster insights', 'Automated optimization', 'Higher conversions'],
      link: '/ai-ab-testing',
      popular: false,
      category: 'Marketing',
      marketPrice: '$199',
      savings: '35%'
    },
    {
      title: 'AI Sales Forecasting Pro',
      description: 'Predictive sales analytics with AI-powered forecasting and pipeline optimization',
      icon: '📈',
      price: '$199/month',
      features: ['Sales forecasting', 'Pipeline analysis', 'Lead scoring', 'Revenue prediction', 'Trend analysis', 'Alerts'],
      benefits: ['85% accuracy', 'Better planning', 'Higher revenue', 'Risk mitigation'],
      link: '/ai-sales-forecasting',
      popular: true,
      category: 'Sales',
      marketPrice: '$329',
      savings: '39%'
    },
    {
      title: 'AI Lead Scoring Elite',
      description: 'Intelligent lead qualification with AI-powered scoring and conversion optimization',
      icon: '🎯',
      price: '$149/month',
      features: ['Lead scoring', 'Behavior tracking', 'Conversion prediction', 'CRM integration', 'Custom models', 'Analytics'],
      benefits: ['300% more qualified leads', 'Higher conversion', 'Better targeting', 'ROI tracking'],
      link: '/ai-lead-scoring',
      popular: true,
      category: 'Sales',
      marketPrice: '$249',
      savings: '40%'
    },
    {
      title: 'AI Performance Tracker Pro',
      description: 'Comprehensive performance monitoring with AI-powered insights and optimization',
      icon: '📊',
      price: '$119/month',
      features: ['Real-time monitoring', 'Performance analytics', 'Anomaly detection', 'Custom dashboards', 'Alerts', 'Reporting'],
      benefits: ['Proactive monitoring', 'Faster resolution', 'Better insights', 'Cost optimization'],
      link: '/ai-performance-tracker',
      popular: false,
      category: 'Analytics',
      marketPrice: '$199',
      savings: '40%'
    },
    {
      title: 'AI Security Monitor Pro',
      description: 'Advanced security monitoring with AI-powered threat detection and response',
      icon: '🛡️',
      price: '$299/month',
      features: ['Threat detection', 'Anomaly analysis', 'Incident response', 'Compliance monitoring', 'Real-time alerts', 'Forensics'],
      benefits: ['99.9% threat detection', 'Faster response', 'Compliance ready', 'Peace of mind'],
      link: '/ai-security-monitor',
      popular: true,
      category: 'Security',
      marketPrice: '$499',
      savings: '40%'
    },
    {
      title: 'AI Voice Assistant Pro',
      description: 'Custom voice assistants with AI-powered natural language processing and integration',
      icon: '🎤',
      price: '$179/month',
      features: ['Voice recognition', 'Natural language', 'Custom commands', 'API integration', 'Multi-language', 'Analytics'],
      benefits: ['Hands-free operation', 'Better accessibility', 'Custom solutions', 'Easy integration'],
      link: '/ai-voice-assistant',
      popular: false,
      category: 'Automation',
      marketPrice: '$299',
      savings: '40%'
    },
    {
      title: 'AI 3D Generation Studio',
      description: 'AI-powered 3D model generation and animation with professional quality output',
      icon: '🎨',
      price: '$399/month',
      features: ['3D model generation', 'Animation creation', 'Texture generation', 'Rendering', 'Export options', 'API access'],
      benefits: ['10x faster creation', 'Professional quality', 'Cost effective', 'Unlimited models'],
      link: '/ai-3d-generation',
      popular: true,
      category: 'Design',
      marketPrice: '$699',
      savings: '43%'
    },
    {
      title: 'AI Mobile App Builder',
      description: 'No-code mobile app development with AI-powered design and functionality generation',
      icon: '📱',
      price: '$249/month',
      features: ['No-code builder', 'AI design', 'Cross-platform', 'App store deployment', 'Analytics', 'Push notifications'],
      benefits: ['90% faster development', 'No coding required', 'Professional apps', 'Easy deployment'],
      link: '/ai-mobile-builder',
      popular: true,
      category: 'Development',
      marketPrice: '$399',
      savings: '38%'
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'Complete e-commerce optimization with AI-powered recommendations and conversion tracking',
      icon: '🛒',
      price: '$199/month',
      features: ['Product recommendations', 'Price optimization', 'Conversion tracking', 'A/B testing', 'Analytics', 'Integrations'],
      benefits: ['40% higher conversion', 'Better recommendations', 'Optimized pricing', 'Increased revenue'],
      link: '/ai-ecommerce-optimizer',
      popular: true,
      category: 'E-commerce',
      marketPrice: '$329',
      savings: '39%'
    },
    {
      title: 'AI Design Assistant Pro',
      description: 'AI-powered design tool with automated layout generation and brand consistency',
      icon: '🎨',
      price: '$149/month',
      features: ['Auto design generation', 'Brand consistency', 'Layout optimization', 'Color matching', 'Template library', 'Export options'],
      benefits: ['10x faster design', 'Consistent branding', 'Professional quality', 'Easy customization'],
      link: '/ai-design-assistant',
      popular: true,
      category: 'Design',
      marketPrice: '$249',
      savings: '40%'
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
      category: 'Marketing',
      marketPrice: '$249',
      savings: '40%'
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
      category: 'Analytics',
      marketPrice: '$499',
      savings: '40%'
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
      category: 'Marketing',
      marketPrice: '$349',
      savings: '43%'
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
      category: 'Support',
      marketPrice: '$399',
      savings: '38%'
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
      category: 'Development',
      marketPrice: '$299',
      savings: '40%'
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
      category: 'Content',
      marketPrice: '$199',
      savings: '35%'
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
      category: 'Sales',
      marketPrice: '$599',
      savings: '42%'
    },
    {
      title: 'AI Video Generator',
      description: 'Create professional videos with AI-powered editing and generation',
      icon: '🎬',
      price: '$399/month',
      features: ['AI video creation', 'Auto-editing', 'Voice synthesis', 'Text-to-video', 'Brand templates', 'Multi-format export'],
      benefits: ['90% time savings', 'Professional quality', 'Unlimited videos', 'No editing skills needed'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Media',
      marketPrice: '$699',
      savings: '43%'
    },
    {
      title: 'AI Voice Cloning Studio',
      description: 'Create realistic voice clones for content creation and personalization',
      icon: '🎤',
      price: '$299/month',
      features: ['Voice cloning', 'Text-to-speech', 'Emotion control', 'Multi-language', 'API access', 'Custom voices'],
      benefits: ['99% voice accuracy', 'Multiple languages', 'Emotional range', 'API integration'],
      link: '/ai-voice-cloning',
      popular: false,
      category: 'Media',
      marketPrice: '$499',
      savings: '40%'
    },
    {
      title: 'AI Fashion Design Assistant',
      description: 'Design clothing and accessories with AI-powered fashion intelligence',
      icon: '👗',
      price: '$199/month',
      features: ['Fashion design', 'Trend analysis', 'Color matching', 'Size optimization', '3D modeling', 'Pattern generation'],
      benefits: ['10x faster design', 'Trend prediction', 'Perfect fit', 'Cost reduction'],
      link: '/ai-fashion-design',
      popular: false,
      category: 'Design',
      marketPrice: '$349',
      savings: '43%'
    },
    {
      title: 'AI Music Composer',
      description: 'Create original music and soundtracks with AI composition tools',
      icon: '🎵',
      price: '$149/month',
      features: ['Music composition', 'Genre selection', 'Instrument arrangement', 'Mixing & mastering', 'Royalty-free', 'Custom styles'],
      benefits: ['Unlimited tracks', 'Professional quality', 'No copyright issues', 'Custom branding'],
      link: '/ai-music-composition',
      popular: false,
      category: 'Media',
      marketPrice: '$249',
      savings: '40%'
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness training with AI-powered workout optimization',
      icon: '💪',
      price: '$99/month',
      features: ['Personalized workouts', 'Form analysis', 'Progress tracking', 'Nutrition guidance', 'Goal setting', 'Community support'],
      benefits: ['Better results', 'Motivation boost', 'Injury prevention', 'Flexible scheduling'],
      link: '/ai-fitness-coach',
      popular: true,
      category: 'Health',
      marketPrice: '$199',
      savings: '50%'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management',
      icon: '⚙️',
      price: '$249/month',
      features: ['Process automation', 'Smart routing', 'Exception handling', 'Integration APIs', 'Custom triggers', 'Analytics'],
      benefits: ['80% time savings', 'Error reduction', 'Scalable processes', 'Cost efficiency'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation',
      marketPrice: '$399',
      savings: '38%'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into stunning visual insights with AI',
      icon: '📊',
      price: '$179/month',
      features: ['Auto-chart generation', 'Interactive dashboards', 'Real-time updates', 'Custom themes', 'Export options', 'Collaboration'],
      benefits: ['Instant insights', 'Better decisions', 'Time savings', 'Professional presentations'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics',
      marketPrice: '$299',
      savings: '40%'
    },
    {
      title: 'AI Sales Automation',
      description: 'Boost sales performance with AI-powered automation and insights',
      icon: '💰',
      price: '$299/month',
      features: ['Lead qualification', 'Follow-up automation', 'Pipeline management', 'Performance analytics', 'CRM integration', 'Predictive selling'],
      benefits: ['50% more sales', 'Better lead quality', 'Automated follow-ups', 'Revenue growth'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales',
      marketPrice: '$499',
      savings: '40%'
    }
  ];
  // Enhanced AI Services with real capabilities and market pricing
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making with 99.9% accuracy',
      icon: Brain,
      price: '$2,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization', 'Real-time Inference', 'AutoML'],
      color: 'text-purple-400',
      benefits: ['40% better predictions', '60% faster insights', 'ROI tracking', 'Scalable models', '99.9% uptime'],
      marketPrice: '$4,500',
      savings: '44%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced BI solutions with AI-driven insights and automated reporting for enterprise decision-making',
      icon: BarChart,
      price: '$3,200/month',
      features: ['AI Analytics', 'Automated Reporting', 'Predictive Insights', 'Real-time Dashboards', 'Data Visualization', 'Custom Models', 'API Integration', 'Mobile Access'],
      color: 'text-blue-400',
      benefits: ['50% faster decisions', 'Real-time insights', 'Automated reports', 'Better forecasting', 'ROI tracking'],
      marketPrice: '$5,500',
      savings: '42%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Cloud Infrastructure',
      description: 'Scalable AI cloud solutions with automated scaling and cost optimization for enterprise workloads',
      icon: Cloud,
      price: '$2,800/month',
      features: ['Auto-scaling', 'Cost Optimization', 'GPU Acceleration', 'Model Deployment', 'Data Pipeline', 'Monitoring', 'Security', 'Compliance'],
      color: 'text-cyan-400',
      benefits: ['60% cost reduction', 'Auto-scaling', 'High availability', 'Security compliance', 'Easy management'],
      marketPrice: '$4,800',
      savings: '42%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Research & Development',
      description: 'Custom AI research and development services for cutting-edge solutions and innovation',
      icon: Microscope,
      price: '$5,000/month',
      features: ['Custom AI Research', 'Algorithm Development', 'Proof of Concept', 'Prototype Development', 'Technical Consulting', 'Patent Support', 'Academic Collaboration', 'Innovation Labs'],
      color: 'text-yellow-400',
      benefits: ['Cutting-edge solutions', 'Competitive advantage', 'Innovation leadership', 'Custom development', 'Research partnership'],
      marketPrice: '$8,500',
      savings: '41%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Edge Computing Solutions',
      description: 'Edge AI deployment for real-time processing and low-latency applications in IoT environments',
      icon: Cpu,
      price: '$2,200/month',
      features: ['Edge Deployment', 'Real-time Processing', 'Low Latency', 'IoT Integration', 'Model Optimization', 'Device Management', 'Data Synchronization', 'Offline Capability'],
      color: 'text-green-400',
      benefits: ['Real-time processing', 'Reduced latency', 'Cost efficiency', 'Offline capability', 'Scalable deployment'],
      marketPrice: '$3,800',
      savings: '42%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Blockchain Integration',
      description: 'AI-powered blockchain solutions for smart contracts, DeFi, and decentralized applications',
      icon: Layers,
      price: '$3,500/month',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Token Development', 'AI Integration', 'Security Audits', 'Compliance', 'Consulting'],
      color: 'text-orange-400',
      benefits: ['Decentralized solutions', 'Enhanced security', 'AI-powered automation', 'Future-proof technology', 'Innovation'],
      marketPrice: '$6,000',
      savings: '42%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI IoT Solutions',
      description: 'Intelligent IoT systems with AI-powered data processing and device management',
      icon: Wifi,
      price: '$2,600/month',
      features: ['Device Management', 'Data Processing', 'Predictive Maintenance', 'Real-time Analytics', 'Edge Computing', 'Security', 'Integration', 'Monitoring'],
      color: 'text-indigo-400',
      benefits: ['Smart automation', 'Predictive maintenance', 'Real-time insights', 'Cost reduction', 'Enhanced efficiency'],
      marketPrice: '$4,500',
      savings: '42%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI AR/VR Solutions',
      description: 'Immersive AI-powered augmented and virtual reality applications for enterprise and consumer use',
      icon: Eye,
      price: '$4,200/month',
      features: ['AR Development', 'VR Applications', 'AI Integration', '3D Modeling', 'Spatial Computing', 'Gesture Recognition', 'Voice Control', 'Analytics'],
      color: 'text-pink-400',
      benefits: ['Immersive experiences', 'AI-powered interactions', 'Enhanced engagement', 'Innovative solutions', 'Future technology'],
      marketPrice: '$7,200',
      savings: '42%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding with 95%+ accuracy',
      icon: MessageSquare,
      price: '$1,800/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Voice Recognition', 'Entity Extraction', 'Topic Modeling'],
      color: 'text-blue-400',
      benefits: ['95% accuracy', 'Multi-language support', 'Real-time processing', 'Custom training', 'API integration'],
      marketPrice: '$3,200',
      savings: '44%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition with 99%+ accuracy',
      icon: Eye,
      price: '$2,200/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'Quality Control', 'Medical Imaging', 'OCR', '3D Vision'],
      color: 'text-green-400',
      benefits: ['99% accuracy', 'Real-time processing', 'Edge deployment', 'Custom models', 'GPU acceleration'],
      marketPrice: '$3,800',
      savings: '42%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities and 90%+ efficiency gains',
      icon: Zap,
      price: '$1,900/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'RPA Integration', 'Smart Routing', 'Cognitive Automation', 'Self-healing'],
      color: 'text-cyan-400',
      benefits: ['80% process reduction', '90% error reduction', '24/7 operation', 'Cost savings', 'ROI tracking'],
      marketPrice: '$3,500',
      savings: '46%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Quantum AI Computing',
      description: 'Next-generation quantum algorithms for complex problem solving with exponential speedup',
      icon: Atom,
      price: '$5,000/month',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Research & Development', 'Custom Solutions', 'Quantum ML', 'Quantum Annealing'],
      color: 'text-yellow-400',
      benefits: ['Exponential speedup', 'Complex optimization', 'Future-proof technology', 'Competitive advantage', 'Research partnership'],
      marketPrice: '$8,500',
      savings: '41%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Cybersecurity',
      description: 'AI-powered threat detection and prevention systems with 99.9% threat detection rate',
      icon: Shield,
      price: '$2,800/month',
      features: ['Threat Detection', 'Anomaly Detection', 'Behavioral Analysis', 'Incident Response', 'Risk Assessment', 'Compliance Monitoring', 'Zero Trust', 'AI Forensics'],
      color: 'text-red-400',
      benefits: ['99.9% threat detection', 'Real-time protection', 'Automated response', 'Compliance ready', '24/7 monitoring'],
      marketPrice: '$4,500',
      savings: '38%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnosis, treatment planning, and patient care with FDA compliance',
      icon: Stethoscope,
      price: '$3,500/month',
      features: ['Medical Imaging', 'Diagnosis Support', 'Treatment Planning', 'Drug Discovery', 'Patient Monitoring', 'Clinical Trials', 'FDA Compliance', 'HIPAA Security'],
      color: 'text-pink-400',
      benefits: ['Improved accuracy', 'Faster diagnosis', 'Better outcomes', 'Cost reduction', 'Regulatory compliance'],
      marketPrice: '$6,000',
      savings: '42%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Financial Services',
      description: 'FinTech AI solutions for trading, risk management, and fraud detection',
      icon: CreditCard,
      price: '$2,200/month',
      features: ['Algorithmic Trading', 'Risk Management', 'Fraud Detection', 'Credit Scoring', 'Regulatory Compliance', 'Real-time Analytics', 'Blockchain Integration', 'API Banking'],
      color: 'text-emerald-400',
      benefits: ['Better returns', 'Risk reduction', 'Fraud prevention', 'Compliance', 'Real-time insights'],
      marketPrice: '$3,800',
      savings: '42%',
      contact: 'kleber@ziontechgroup.com'
    }
  ];
  // Enhanced IT Services with comprehensive capabilities
  const itServices = [
    {
      title: 'Cloud Migration & Management',
      description: 'Complete cloud transformation with AWS, Azure, and GCP expertise',
      icon: Cloud,
      price: '$1,500/month',
      features: ['Cloud Strategy', 'Migration Planning', 'Infrastructure Setup', 'Security Configuration', 'Cost Optimization', '24/7 Monitoring', 'Disaster Recovery', 'Compliance'],
      color: 'text-blue-400',
      benefits: ['50% cost reduction', '99.9% uptime', 'Scalable infrastructure', 'Enhanced security', 'ROI tracking'],
      marketPrice: '$2,800',
      savings: '46%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'Enterprise IT Consulting',
      description: 'Strategic IT consulting for digital transformation and technology optimization',
      icon: Briefcase,
      price: '$200/hour',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Technology Selection', 'Implementation Planning', 'Change Management', 'Training', 'Ongoing Support'],
      color: 'text-indigo-400',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Expert advice', 'Implementation support'],
      marketPrice: '$350/hour',
      savings: '43%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'Managed IT Services',
      description: 'Comprehensive managed IT services with 24/7 monitoring and proactive maintenance',
      icon: Settings,
      price: '$1,200/month',
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Help Desk Support', 'Security Management', 'Backup & Recovery', 'Software Updates', 'Performance Optimization', 'Compliance'],
      color: 'text-green-400',
      benefits: ['Reduced downtime', 'Proactive support', 'Cost predictability', 'Expert management', 'Peace of mind'],
      marketPrice: '$2,200',
      savings: '45%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'IT Security & Compliance',
      description: 'Comprehensive security services including threat detection, incident response, and compliance',
      icon: Shield,
      price: '$2,200/month',
      features: ['Security Assessment', 'Threat Detection', 'Incident Response', 'Penetration Testing', 'Compliance Audit', 'Security Training', 'Vulnerability Management', 'Zero Trust'],
      color: 'text-red-400',
      benefits: ['Enhanced security', 'Compliance ready', 'Risk reduction', '24/7 protection', 'Expert support'],
      marketPrice: '$3,800',
      savings: '42%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'IT Infrastructure Design',
      description: 'Custom IT infrastructure design and implementation for enterprise environments',
      icon: Server,
      price: '$1,800/month',
      features: ['Infrastructure Design', 'Network Architecture', 'Server Configuration', 'Storage Solutions', 'Security Implementation', 'Performance Optimization', 'Scalability Planning', 'Documentation'],
      color: 'text-purple-400',
      benefits: ['Custom solutions', 'Scalable design', 'Performance optimized', 'Future-proof', 'Expert implementation'],
      marketPrice: '$3,200',
      savings: '44%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'IT Performance Monitoring',
      description: 'Advanced IT performance monitoring with real-time analytics and optimization',
      icon: Activity,
      price: '$1,400/month',
      features: ['Real-time Monitoring', 'Performance Analytics', 'Capacity Planning', 'Alert Management', 'Reporting', 'Trend Analysis', 'Optimization', 'Predictive Maintenance'],
      color: 'text-cyan-400',
      benefits: ['Proactive monitoring', 'Performance optimization', 'Cost reduction', 'Better insights', 'Preventive maintenance'],
      marketPrice: '$2,500',
      savings: '44%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'IT Disaster Recovery',
      description: 'Comprehensive disaster recovery planning and implementation for business continuity',
      icon: HardDrive,
      price: '$1,600/month',
      features: ['Disaster Recovery Planning', 'Backup Solutions', 'Recovery Testing', 'Business Continuity', 'Data Protection', 'RTO/RPO Optimization', 'Documentation', 'Training'],
      color: 'text-orange-400',
      benefits: ['Business continuity', 'Data protection', 'Fast recovery', 'Risk mitigation', 'Compliance ready'],
      marketPrice: '$2,800',
      savings: '43%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs and certification support for staff development',
      icon: GraduationCap,
      price: '$800/month',
      features: ['Technical Training', 'Certification Programs', 'Skill Assessment', 'Custom Curriculum', 'Hands-on Labs', 'Exam Preparation', 'Progress Tracking', 'Certification Support'],
      color: 'text-yellow-400',
      benefits: ['Skill development', 'Certification support', 'Better performance', 'Career growth', 'Team productivity'],
      marketPrice: '$1,400',
      savings: '43%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'Global IT Support',
      description: 'Worldwide IT support services with multilingual support and 24/7 availability',
      icon: Globe,
      price: '$1,000/month',
      features: ['24/7 Support', 'Multilingual Support', 'Remote Assistance', 'On-site Support', 'Global Coverage', 'Time Zone Coverage', 'Escalation Management', 'SLA Guarantee'],
      color: 'text-blue-400',
      benefits: ['Global coverage', '24/7 support', 'Multilingual', 'Fast response', 'Consistent service'],
      marketPrice: '$1,800',
      savings: '44%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'IT Automation Services',
      description: 'IT process automation and workflow optimization for improved efficiency',
      icon: Zap,
      price: '$1,300/month',
      features: ['Process Automation', 'Workflow Optimization', 'Script Development', 'Integration Services', 'Monitoring Automation', 'Deployment Automation', 'Maintenance Automation', 'Custom Solutions'],
      color: 'text-cyan-400',
      benefits: ['Process efficiency', 'Cost reduction', 'Error reduction', 'Scalable automation', 'Better reliability'],
      marketPrice: '$2,200',
      savings: '41%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, incident response, and compliance',
      icon: Shield,
      price: '$2,200/month',
      features: ['Security Assessment', 'Threat Detection', 'Incident Response', 'Penetration Testing', 'Compliance Audit', 'Security Training', 'Vulnerability Management', 'Zero Trust'],
      color: 'text-red-400',
      benefits: ['Enhanced security', 'Compliance ready', 'Risk reduction', '24/7 protection', 'Expert support'],
      marketPrice: '$3,800',
      savings: '42%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure setup, maintenance, and optimization services',
      icon: Server,
      price: '$1,800/month',
      features: ['Network Setup', 'Server Management', 'Database Administration', 'Backup Solutions', 'Performance Monitoring', 'Capacity Planning', 'Disaster Recovery', 'Maintenance'],
      color: 'text-green-400',
      benefits: ['Reliable infrastructure', 'Reduced downtime', 'Cost optimization', 'Scalable solutions', 'Expert management'],
      marketPrice: '$3,200',
      savings: '44%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Modern DevOps practices with automated deployment and continuous integration',
      icon: Settings,
      price: '$1,600/month',
      features: ['CI/CD Pipeline', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring & Logging', 'Security Integration', 'Performance Optimization', 'Auto-scaling', 'GitOps'],
      color: 'text-cyan-400',
      benefits: ['Faster deployments', 'Reduced errors', 'Better collaboration', 'Automated processes', 'Scalable infrastructure'],
      marketPrice: '$2,800',
      savings: '43%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management for all major database systems',
      icon: Database,
      price: '$1,200/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services', 'Security Hardening', 'Monitoring', 'Scaling', 'Consulting'],
      color: 'text-purple-400',
      benefits: ['Optimized performance', 'Data security', 'Reliable backups', 'Expert support', 'Cost efficiency'],
      marketPrice: '$2,200',
      savings: '45%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management services',
      icon: Network,
      price: '$1,400/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Monitoring', 'Troubleshooting', 'Upgrades', 'Documentation', 'Training'],
      color: 'text-orange-400',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Better performance', 'Reduced downtime', 'Expert support'],
      marketPrice: '$2,500',
      savings: '44%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting for digital transformation and technology optimization',
      icon: Briefcase,
      price: '$200/hour',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Technology Selection', 'Implementation Planning', 'Change Management', 'Training', 'Ongoing Support'],
      color: 'text-indigo-400',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Expert advice', 'Implementation support'],
      marketPrice: '$350/hour',
      savings: '43%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'IT Support & Maintenance',
      description: '24/7 IT support and maintenance services for all your technology needs',
      icon: Wrench,
      price: '$800/month',
      features: ['24/7 Support', 'Remote Assistance', 'Hardware Maintenance', 'Software Updates', 'Security Patches', 'Performance Monitoring', 'Preventive Maintenance', 'Emergency Response'],
      color: 'text-yellow-400',
      benefits: ['Minimal downtime', 'Proactive maintenance', 'Expert support', 'Cost predictability', 'Peace of mind'],
      marketPrice: '$1,400',
      savings: '43%',
      contact: '+1 302 464 0950'
    }
  ];
  // Specialized Services
  const specializedServices = [
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable business insights with advanced AI analytics',
      icon: BarChart,
      price: '$2,500/month',
      features: ['Advanced Analytics', 'Predictive Modeling', 'Real-time Dashboards', 'Custom Reports', 'Data Integration', 'Machine Learning', 'Natural Language Queries', 'Mobile Access'],
      color: 'text-purple-400',
      benefits: ['Data-driven decisions', 'Competitive advantage', 'Revenue growth', 'Cost reduction', 'Operational efficiency'],
      marketPrice: '$4,200',
      savings: '40%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Complete blockchain development and Web3 integration services',
      icon: Layers,
      price: '$3,000/month',
      features: ['Smart Contracts', 'DApp Development', 'NFT Platforms', 'DeFi Solutions', 'Token Development', 'Blockchain Integration', 'Security Audits', 'Consulting'],
      color: 'text-cyan-400',
      benefits: ['Future-proof technology', 'Decentralized solutions', 'Enhanced security', 'Transparency', 'Innovation'],
      marketPrice: '$5,000',
      savings: '40%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Internet of Things solutions with edge computing for real-time processing',
      icon: Cpu,
      price: '$2,200/month',
      features: ['IoT Device Development', 'Edge Computing', 'Data Processing', 'Real-time Analytics', 'Device Management', 'Security', 'Integration', 'Monitoring'],
      color: 'text-green-400',
      benefits: ['Real-time insights', 'Reduced latency', 'Cost efficiency', 'Scalable solutions', 'Enhanced security'],
      marketPrice: '$3,800',
      savings: '42%',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development with AI integration',
      icon: Smartphone,
      price: '$1,800/month',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'AI Integration', 'Backend Development', 'API Development', 'Testing', 'App Store Optimization'],
      color: 'text-blue-400',
      benefits: ['Native performance', 'Cross-platform compatibility', 'AI-powered features', 'Scalable backend', 'Market-ready apps'],
      marketPrice: '$3,200',
      savings: '44%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platform development with AI-powered features',
      icon: ShoppingCart,
      price: '$2,000/month',
      features: ['Platform Development', 'Payment Integration', 'Inventory Management', 'AI Recommendations', 'Analytics', 'Mobile Optimization', 'Security', 'SEO'],
      color: 'text-orange-400',
      benefits: ['Increased sales', 'Better user experience', 'AI-powered recommendations', 'Mobile optimization', 'Search visibility'],
      marketPrice: '$3,500',
      savings: '43%',
      contact: '+1 302 464 0950'
    },
    {
      title: 'API Development & Integration',
      description: 'Custom API development and third-party integration services',
      icon: Code,
      price: '$1,500/month',
      features: ['RESTful APIs', 'GraphQL APIs', 'Third-party Integration', 'API Documentation', 'Testing', 'Security', 'Rate Limiting', 'Monitoring'],
      color: 'text-indigo-400',
      benefits: ['Seamless integration', 'Scalable APIs', 'Comprehensive documentation', 'Enhanced security', 'Reliable performance'],
      marketPrice: '$2,800',
      savings: '46%',
      contact: '+1 302 464 0950'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Performance Optimizer */}
      <PerformanceOptimizer />
      {/* SEO Optimizer */}
      <SEOOptimizer />
      {/* Accessibility Enhancer */}
      <AccessibilityEnhancer />
      {/* Analytics */}
      <Analytics />
      {/* Security Enhancer */}
      <SecurityEnhancer />
      {/* Navigation */}
      <Navigation />
      {/* Hero Section with Enhanced Futuristic Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-cyan-600/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        {/* Enhanced Neon Grid Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 border border-pink-400/30 rotate-12 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-cyan-400/20 rotate-45 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Enhanced Main Title with Neon Effects */}
            <div className="relative mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse relative">
                ZION TECH GROUP
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent blur-sm opacity-50">
                  ZION TECH GROUP
                </div>
              </h1>
              <div className="absolute -top-4 -left-4 w-full h-full border border-cyan-400/20 rounded-lg animate-pulse"></div>
            </div>
            
            {/* Enhanced Subtitle */}
            <p className="text-2xl md:text-3xl text-white mb-4 font-light">
              AI-Powered Enterprise Solutions & Digital Transformation
            </p>
            <p className="text-lg md:text-xl text-cyan-300 mb-8 font-medium">
              Transforming Businesses with Cutting-Edge Technology & Innovation
            </p>
            {/* Enhanced Contact Information */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <div className="group flex items-center text-cyan-400 text-lg bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
                <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                <a href="tel:+13024640950" onClick={handlePhoneClick} className="hover:text-cyan-300 transition-colors font-medium">
                  +1 302 464 0950
                </a>
              </div>
              <div className="group flex items-center text-purple-400 text-lg bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
                <Mail className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-300 transition-colors font-medium">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="group flex items-center text-pink-400 text-lg bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 hover:scale-105">
                <MapPin className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                <span className="font-medium">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            {/* Enhanced Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group relative bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">300% ROI</h3>
                  <p className="text-gray-300 group-hover:text-cyan-200 transition-colors">Average return on AI investments</p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-purple-500/10 to-pink-600/10 backdrop-blur-lg rounded-xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">70% Cost Reduction</h3>
                  <p className="text-gray-300 group-hover:text-purple-200 transition-colors">Through intelligent automation</p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-pink-500/10 to-red-600/10 backdrop-blur-lg rounded-xl p-6 border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">90% Efficiency</h3>
                  <p className="text-gray-300 group-hover:text-pink-200 transition-colors">Gains with our AI solutions</p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-pink-400 to-red-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Micro SAAS Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, affordable AI-powered tools designed for modern businesses. 
              Start with our micro SAAS solutions and scale as you grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      🔥 POPULAR
                    </div>
                  </div>
                )}
                <div className="text-center mb-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-gray-400">/month</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="text-gray-400 line-through">{service.marketPrice}</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      Save {service.savings}
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300">
                        ✓ {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <a 
                    href={service.link}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* AI Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions tailored for enterprise needs. 
              Transform your business with our advanced AI capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-purple-400">{service.price}</span>
                    <span className="text-sm text-gray-400">/month</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="text-gray-400 line-through">{service.marketPrice}</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      Save {service.savings}
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-pink-400 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300">
                        ✓ {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <a 
                    href={`mailto:${service.contact}?subject=Interest in ${service.title}`}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* IT Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              IT Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services to support your digital transformation journey. 
              From infrastructure to cybersecurity, we've got you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-green-400/20 hover:border-green-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-green-400">{service.price}</span>
                    <span className="text-sm text-gray-400">/month</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="text-gray-400 line-through">{service.marketPrice}</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      Save {service.savings}
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300">
                        ✓ {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <a 
                    href={`tel:${service.contact}`}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Call Now
                    <Phone className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Specialized Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Specialized Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced specialized solutions for complex business challenges. 
              Cutting-edge technology meets practical business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-orange-400/20 hover:border-orange-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-orange-400">{service.price}</span>
                    <span className="text-sm text-gray-400">/month</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="text-gray-400 line-through">{service.marketPrice}</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      Save {service.savings}
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-orange-400 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-red-400 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300">
                        ✓ {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <a 
                    href={service.contact.startsWith('+') ? `tel:${service.contact}` : `mailto:${service.contact}?subject=Interest in ${service.title}`}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    {service.contact.startsWith('+') ? 'Call Now' : 'Email Us'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get in touch with our experts to discuss your specific needs and discover how our AI and IT solutions can drive your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our experts</p>
              <a href="tel:+13024640950" onClick={handlePhoneClick} className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold">
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Send us your requirements</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 text-lg font-semibold">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-pink-400/20 hover:border-pink-400/60 transition-all duration-300">
              <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Our headquarters location</p>
              <p className="text-pink-400 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
export default HomePage;