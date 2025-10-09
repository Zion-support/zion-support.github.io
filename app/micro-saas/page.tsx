import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Search as SearchIcon, FileText as FileTextIcon } from 'lucide-react';

export default function MicroSAASPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const microSAASServices = [
    // AI-Powered Business Tools
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-driven insights, automated scheduling, and resource optimization.',
      category: 'ai-business',
      icon: Target,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      pricing: { monthly: 99, yearly: 999, setup: 0 },
      features: ['AI Task Prioritization', 'Resource Optimization', 'Risk Prediction', 'Progress Analytics', 'Team Collaboration', 'Automated Reporting'],
      benefits: ['40% faster project completion', '60% better resource utilization', '25% cost reduction'],
      popular: true,
      rating: 4.9,
      users: 2500,
      launchDate: '2024-01-15',
      integrations: ['Slack', 'Microsoft Teams', 'Jira', 'Trello', 'Asana'],
      support: '24/7 Email & Chat',
      freeTrial: '14 days',
      demo: 'https://ziontechgroup.com/demo/ai-project-manager'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation, optimal posting times, and engagement analytics.',
      category: 'ai-marketing',
      icon: Globe,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      pricing: { monthly: 79, yearly: 799, setup: 0 },
      features: ['AI Content Generation', 'Optimal Posting Times', 'Engagement Analytics', 'Multi-Platform Management', 'Hashtag Optimization', 'Competitor Analysis'],
      benefits: ['300% increase in engagement', '50% time savings', '200% ROI improvement'],
      popular: true,
      rating: 4.8,
      users: 1800,
      launchDate: '2024-02-01',
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok'],
      support: '24/7 Email & Chat',
      freeTrial: '7 days',
      demo: 'https://ziontechgroup.com/demo/ai-social-media-manager'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Advanced business intelligence with AI-powered insights, predictive analytics, and automated reporting.',
      category: 'ai-analytics',
      icon: BarChart,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      pricing: { monthly: 149, yearly: 1499, setup: 0 },
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Trend Analysis', 'Alert System'],
      benefits: ['500% faster insights', '90% reduction in manual reporting', '400% ROI'],
      popular: true,
      rating: 4.9,
      users: 3200,
      launchDate: '2024-01-10',
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe', 'Shopify'],
      support: '24/7 Email & Chat',
      freeTrial: '21 days',
      demo: 'https://ziontechgroup.com/demo/ai-analytics-dashboard'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with AI personalization, A/B testing, and advanced automation workflows.',
      category: 'ai-marketing',
      icon: Mail,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      pricing: { monthly: 89, yearly: 899, setup: 0 },
      features: ['AI Personalization', 'Smart Segmentation', 'A/B Testing', 'Send Time Optimization', 'Performance Analytics', 'Template Library'],
      benefits: ['250% higher open rates', '180% increase in click-through rates', '300% ROI'],
      popular: true,
      rating: 4.7,
      users: 2100,
      launchDate: '2024-01-20',
      integrations: ['Mailchimp', 'Constant Contact', 'SendGrid', 'HubSpot', 'Salesforce'],
      support: '24/7 Email & Chat',
      freeTrial: '14 days',
      demo: 'https://ziontechgroup.com/demo/ai-email-marketing'
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
      description: '24/7 intelligent customer support with natural language processing and seamless human handoff.',
      category: 'ai-support',
      icon: MessageSquare,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      pricing: { monthly: 199, yearly: 1999, setup: 500 },
      features: ['Natural Language Processing', 'Multi-language Support', 'Human Handoff', 'Knowledge Base Integration', 'Sentiment Analysis', 'Performance Analytics'],
      benefits: ['80% reduction in support tickets', '95% customer satisfaction', '400% ROI'],
      popular: true,
      rating: 4.8,
      users: 1500,
      launchDate: '2024-01-05',
      integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Slack', 'Microsoft Teams'],
      support: '24/7 Email & Chat',
      freeTrial: '30 days',
      demo: 'https://ziontechgroup.com/demo/ai-customer-support-bot'
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'AI-powered content creation for blogs, social media, marketing materials, and technical documentation.',
      category: 'ai-content',
      icon: FileText,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      pricing: { monthly: 69, yearly: 699, setup: 0 },
      features: ['Blog Post Generation', 'Social Media Content', 'Email Templates', 'Product Descriptions', 'SEO Optimization', 'Multi-language Support'],
      benefits: ['500% faster content creation', '90% time savings', '200% SEO improvement'],
      popular: false,
      rating: 4.6,
      users: 1200,
      launchDate: '2024-02-15',
      integrations: ['WordPress', 'Medium', 'LinkedIn', 'Facebook', 'Twitter'],
      support: '24/7 Email & Chat',
      freeTrial: '7 days',
      demo: 'https://ziontechgroup.com/demo/ai-content-generator'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      description: 'Comprehensive SEO optimization with AI-driven keyword research, content analysis, and technical SEO audits.',
      category: 'ai-marketing',
      icon: TrendingUp,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      pricing: { monthly: 119, yearly: 1199, setup: 0 },
      features: ['Keyword Research', 'Content Optimization', 'Technical SEO Audit', 'Competitor Analysis', 'Rank Tracking', 'Link Building'],
      benefits: ['300% increase in organic traffic', '250% improvement in rankings', '400% ROI'],
      popular: false,
      rating: 4.7,
      users: 900,
      launchDate: '2024-02-20',
      integrations: ['Google Search Console', 'Google Analytics', 'SEMrush', 'Ahrefs', 'Moz'],
      support: '24/7 Email & Chat',
      freeTrial: '14 days',
      demo: 'https://ziontechgroup.com/demo/ai-seo-optimizer'
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered data extraction, payment tracking, and financial analytics.',
      category: 'ai-finance',
      icon: CreditCard,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      pricing: { monthly: 49, yearly: 499, setup: 0 },
      features: ['Automated Generation', 'Payment Tracking', 'Financial Analytics', 'Multi-currency Support', 'Tax Calculations', 'Client Management'],
      benefits: ['90% time savings', '100% accuracy', '300% faster payments'],
      popular: false,
      rating: 4.5,
      users: 800,
      launchDate: '2024-03-01',
      integrations: ['QuickBooks', 'Xero', 'Stripe', 'PayPal', 'Square'],
      support: '24/7 Email & Chat',
      freeTrial: '14 days',
      demo: 'https://ziontechgroup.com/demo/ai-invoice-generator'
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Smart expense tracking with AI categorization, receipt scanning, and automated expense reports.',
      category: 'ai-finance',
      icon: PieChart,
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
      pricing: { monthly: 39, yearly: 399, setup: 0 },
      features: ['Receipt Scanning', 'AI Categorization', 'Automated Reports', 'Budget Tracking', 'Tax Preparation', 'Multi-user Support'],
      benefits: ['95% accuracy in categorization', '80% time savings', '200% better budget control'],
      popular: false,
      rating: 4.4,
      users: 600,
      launchDate: '2024-03-10',
      integrations: ['QuickBooks', 'Xero', 'Expensify', 'Concur', 'SAP'],
      support: '24/7 Email & Chat',
      freeTrial: '30 days',
      demo: 'https://ziontechgroup.com/demo/ai-expense-tracker'
    },
    {
      id: 'ai-time-tracker',
      name: 'AI Time Tracker',
      description: 'Intelligent time tracking with AI productivity insights, automatic task detection, and performance analytics.',
      category: 'ai-productivity',
      icon: Clock,
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10',
      pricing: { monthly: 59, yearly: 599, setup: 0 },
      features: ['Automatic Tracking', 'Productivity Insights', 'Task Detection', 'Performance Analytics', 'Team Management', 'Reporting'],
      benefits: ['40% productivity increase', '60% better time management', '250% ROI'],
      popular: false,
      rating: 4.6,
      users: 1100,
      launchDate: '2024-03-15',
      integrations: ['Toggl', 'RescueTime', 'Clockify', 'Harvest', 'Time Doctor'],
      support: '24/7 Email & Chat',
      freeTrial: '14 days',
      demo: 'https://ziontechgroup.com/demo/ai-time-tracker'
    },
    {
      id: 'ai-hr-assistant',
      name: 'AI HR Assistant',
      description: 'Comprehensive HR management with AI-powered recruitment, employee analytics, and performance tracking.',
      category: 'ai-hr',
      icon: Users,
      color: 'text-violet-500',
      bgColor: 'bg-violet-500/10',
      pricing: { monthly: 179, yearly: 1799, setup: 1000 },
      features: ['Resume Screening', 'Interview Scheduling', 'Performance Analytics', 'Employee Onboarding', 'Compliance Tracking', 'Benefits Management'],
      benefits: ['70% faster hiring', '50% better candidate matching', '300% ROI'],
      popular: false,
      rating: 4.7,
      users: 700,
      launchDate: '2024-03-20',
      integrations: ['Workday', 'BambooHR', 'ADP', 'Paychex', 'Greenhouse'],
      support: '24/7 Email & Chat',
      freeTrial: '21 days',
      demo: 'https://ziontechgroup.com/demo/ai-hr-assistant'
    },
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager',
      description: 'Smart inventory management with AI demand forecasting, automated reordering, and supply chain optimization.',
      category: 'ai-logistics',
      icon: Database,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      pricing: { monthly: 159, yearly: 1599, setup: 750 },
      features: ['Demand Forecasting', 'Automated Reordering', 'Supply Chain Optimization', 'Real-time Tracking', 'Analytics Dashboard', 'Multi-location Support'],
      benefits: ['60% reduction in stockouts', '40% cost savings', '500% ROI'],
      popular: false,
      rating: 4.8,
      users: 500,
      launchDate: '2024-03-25',
      integrations: ['SAP', 'Oracle', 'NetSuite', 'Shopify', 'WooCommerce'],
      support: '24/7 Email & Chat',
      freeTrial: '30 days',
      demo: 'https://ziontechgroup.com/demo/ai-inventory-manager'
    },
    {
      id: 'ai-design-studio',
      name: 'AI Design Studio',
      description: 'AI-powered design tool for creating logos, marketing materials, and visual content with professional quality.',
      category: 'ai-design',
      icon: Palette,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      pricing: { monthly: 89, yearly: 899, setup: 0 },
      features: ['Logo Generation', 'Marketing Materials', 'Social Media Graphics', 'Brand Kit', 'Template Library', 'Collaboration Tools'],
      benefits: ['90% faster design creation', 'Professional quality', '200% brand consistency'],
      popular: false,
      rating: 4.5,
      users: 950,
      launchDate: '2024-04-01',
      integrations: ['Canva', 'Adobe Creative Suite', 'Figma', 'Sketch', 'InVision'],
      support: '24/7 Email & Chat',
      freeTrial: '7 days',
      demo: 'https://ziontechgroup.com/demo/ai-design-studio'
    },
    {
      id: 'ai-video-generator',
      name: 'AI Video Generator',
      description: 'Create professional videos with AI-powered editing, voice synthesis, and automated content generation.',
      category: 'ai-media',
      icon: Video,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      pricing: { monthly: 129, yearly: 1299, setup: 0 },
      features: ['Video Generation', 'Voice Synthesis', 'Auto-editing', 'Template Library', 'Multi-format Export', 'Collaboration Tools'],
      benefits: ['95% faster video creation', 'Professional quality', '300% cost savings'],
      popular: false,
      rating: 4.6,
      users: 650,
      launchDate: '2024-04-05',
      integrations: ['YouTube', 'Vimeo', 'TikTok', 'Instagram', 'Facebook'],
      support: '24/7 Email & Chat',
      freeTrial: '14 days',
      demo: 'https://ziontechgroup.com/demo/ai-video-generator'
    },
    {
      id: 'ai-music-composer',
      name: 'AI Music Composer',
      description: 'AI-powered music composition for background music, jingles, and custom audio content creation.',
      category: 'ai-media',
      icon: Music,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      pricing: { monthly: 79, yearly: 799, setup: 0 },
      features: ['Music Generation', 'Style Adaptation', 'Instrument Selection', 'Tempo Control', 'Export Options', 'Royalty-free License'],
      benefits: ['100% original music', '90% time savings', 'Professional quality'],
      popular: false,
      rating: 4.4,
      users: 400,
      launchDate: '2024-04-10',
      integrations: ['Spotify', 'Apple Music', 'YouTube', 'SoundCloud', 'Bandcamp'],
      support: '24/7 Email & Chat',
      freeTrial: '7 days',
      demo: 'https://ziontechgroup.com/demo/ai-music-composer'
    },
    {
      id: 'ai-3d-generator',
      name: 'AI 3D Generator',
      description: 'Create 3D models and animations with AI-powered generation for games, AR/VR, and marketing content.',
      category: 'ai-media',
      icon: Box,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      pricing: { monthly: 199, yearly: 1999, setup: 500 },
      features: ['3D Model Generation', 'Animation Creation', 'AR/VR Support', 'Texture Generation', 'Export Options', 'Collaboration Tools'],
      benefits: ['80% faster 3D creation', 'Professional quality', '400% cost savings'],
      popular: false,
      rating: 4.7,
      users: 300,
      launchDate: '2024-04-15',
      integrations: ['Unity', 'Unreal Engine', 'Blender', 'Maya', '3ds Max'],
      support: '24/7 Email & Chat',
      freeTrial: '14 days',
      demo: 'https://ziontechgroup.com/demo/ai-3d-generator'
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant',
      description: 'AI-powered coding assistant with code generation, debugging, optimization, and documentation.',
      category: 'ai-development',
      icon: Code,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      pricing: { monthly: 99, yearly: 999, setup: 0 },
      features: ['Code Generation', 'Debugging Assistance', 'Code Review', 'Documentation', 'Multi-language Support', 'IDE Integration'],
      benefits: ['50% faster development', '90% fewer bugs', '300% productivity'],
      popular: false,
      rating: 4.8,
      users: 1400,
      launchDate: '2024-04-20',
      integrations: ['VS Code', 'IntelliJ', 'Sublime Text', 'Atom', 'Vim'],
      support: '24/7 Email & Chat',
      freeTrial: '30 days',
      demo: 'https://ziontechgroup.com/demo/ai-code-assistant'
    },
    {
      id: 'ai-mobile-builder',
      name: 'AI Mobile App Builder',
      description: 'Build native mobile apps with AI assistance, drag-and-drop interface, and automated deployment.',
      category: 'ai-development',
      icon: Smartphone,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      pricing: { monthly: 149, yearly: 1499, setup: 1000 },
      features: ['Drag-and-drop Builder', 'AI Code Generation', 'Native Performance', 'Cross-platform', 'App Store Deployment', 'Analytics Integration'],
      benefits: ['90% faster app development', 'Native performance', '500% cost savings'],
      popular: false,
      rating: 4.6,
      users: 800,
      launchDate: '2024-04-25',
      integrations: ['App Store', 'Google Play', 'Firebase', 'AWS', 'Google Cloud'],
      support: '24/7 Email & Chat',
      freeTrial: '21 days',
      demo: 'https://ziontechgroup.com/demo/ai-mobile-builder'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered security monitoring, threat detection, and automated incident response.',
      category: 'ai-security',
      icon: Shield,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      pricing: { monthly: 299, yearly: 2999, setup: 2000 },
      features: ['Threat Detection', 'Incident Response', 'Vulnerability Scanning', 'Security Analytics', 'Compliance Monitoring', '24/7 Monitoring'],
      benefits: ['99.9% threat detection', '90% faster response', 'Zero breaches'],
      popular: false,
      rating: 4.9,
      users: 600,
      launchDate: '2024-05-01',
      integrations: ['Splunk', 'QRadar', 'CrowdStrike', 'Palo Alto', 'Cisco'],
      support: '24/7 Phone & Chat',
      freeTrial: '30 days',
      demo: 'https://ziontechgroup.com/demo/ai-cybersecurity'
    },
    {
      id: 'ai-healthcare-assistant',
      name: 'AI Healthcare Assistant',
      description: 'AI-powered healthcare solutions for patient monitoring, diagnosis support, and medical analytics.',
      category: 'ai-healthcare',
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      pricing: { monthly: 399, yearly: 3999, setup: 5000 },
      features: ['Patient Monitoring', 'Diagnosis Support', 'Medical Analytics', 'HIPAA Compliance', 'Integration APIs', 'Clinical Decision Support'],
      benefits: ['40% faster diagnosis', '30% accuracy improvement', '500% ROI'],
      popular: false,
      rating: 4.8,
      users: 200,
      launchDate: '2024-05-05',
      integrations: ['Epic', 'Cerner', 'Allscripts', 'NextGen', 'eClinicalWorks'],
      support: '24/7 Phone & Chat',
      freeTrial: '30 days',
      demo: 'https://ziontechgroup.com/demo/ai-healthcare-assistant'
    },
    {
      id: 'ai-fintech-suite',
      name: 'AI Fintech Suite',
      description: 'Comprehensive financial technology solutions with AI-powered fraud detection, risk assessment, and trading algorithms.',
      category: 'ai-fintech',
      icon: DollarSign,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      pricing: { monthly: 499, yearly: 4999, setup: 10000 },
      features: ['Fraud Detection', 'Risk Assessment', 'Trading Algorithms', 'Credit Scoring', 'Regulatory Compliance', 'Real-time Analytics'],
      benefits: ['99.5% fraud detection', '60% risk reduction', '400% ROI'],
      popular: false,
      rating: 4.9,
      users: 150,
      launchDate: '2024-05-10',
      integrations: ['FIS', 'Fiserv', 'Jack Henry', 'Temenos', 'Mambu'],
      support: '24/7 Phone & Chat',
      freeTrial: '30 days',
      demo: 'https://ziontechgroup.com/demo/ai-fintech-suite'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: microSAASServices.length },
    { id: 'ai-business', name: 'AI Business Tools', icon: Target, count: microSAASServices.filter(s => s.category === 'ai-business').length },
    { id: 'ai-marketing', name: 'AI Marketing', icon: TrendingUp, count: microSAASServices.filter(s => s.category === 'ai-marketing').length },
    { id: 'ai-analytics', name: 'AI Analytics', icon: BarChart, count: microSAASServices.filter(s => s.category === 'ai-analytics').length },
    { id: 'ai-content', name: 'AI Content', icon: FileText, count: microSAASServices.filter(s => s.category === 'ai-content').length },
    { id: 'ai-support', name: 'AI Support', icon: MessageSquare, count: microSAASServices.filter(s => s.category === 'ai-support').length },
    { id: 'ai-finance', name: 'AI Finance', icon: CreditCard, count: microSAASServices.filter(s => s.category === 'ai-finance').length },
    { id: 'ai-productivity', name: 'AI Productivity', icon: Clock, count: microSAASServices.filter(s => s.category === 'ai-productivity').length },
    { id: 'ai-hr', name: 'AI HR', icon: Users, count: microSAASServices.filter(s => s.category === 'ai-hr').length },
    { id: 'ai-logistics', name: 'AI Logistics', icon: Database, count: microSAASServices.filter(s => s.category === 'ai-logistics').length },
    { id: 'ai-design', name: 'AI Design', icon: Palette, count: microSAASServices.filter(s => s.category === 'ai-design').length },
    { id: 'ai-media', name: 'AI Media', icon: Video, count: microSAASServices.filter(s => s.category === 'ai-media').length },
    { id: 'ai-development', name: 'AI Development', icon: Code, count: microSAASServices.filter(s => s.category === 'ai-development').length },
    { id: 'ai-security', name: 'AI Security', icon: Shield, count: microSAASServices.filter(s => s.category === 'ai-security').length },
    { id: 'ai-healthcare', name: 'AI Healthcare', icon: Heart, count: microSAASServices.filter(s => s.category === 'ai-healthcare').length },
    { id: 'ai-fintech', name: 'AI Fintech', icon: DollarSign, count: microSAASServices.filter(s => s.category === 'ai-fintech').length }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort services
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.pricing.monthly - b.pricing.monthly);
      case 'price-high':
        return filtered.sort((a, b) => b.pricing.monthly - a.pricing.monthly);
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'users':
        return filtered.sort((a, b) => b.users - a.users);
      case 'newest':
        return filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
      default:
        return filtered.sort((a, b) => {
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return b.rating - a.rating;
        });
    }
  }, [microSAASServices, selectedCategory, searchTerm, sortBy]);

  const stats = {
    totalServices: microSAASServices.length,
    totalUsers: microSAASServices.reduce((sum, service) => sum + service.users, 0),
    averageRating: (microSAASServices.reduce((sum, service) => sum + service.rating, 0) / microSAASServices.length).toFixed(1),
    totalRevenue: microSAASServices.reduce((sum, service) => sum + (service.users * service.pricing.monthly), 0)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of AI-powered micro SAAS services. From project management to marketing automation, boost your business with intelligent solutions." />
        <meta name="keywords" content="micro saas, ai services, business automation, project management, marketing tools, analytics, productivity" />
        <meta property="og:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our AI-powered micro SAAS services. 20+ intelligent solutions for every business need." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Micro SAAS Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
              From project management to marketing automation, we have the tools you need to succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">{stats.totalServices}+ AI Services</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">{stats.totalUsers.toLocaleString()}+ Users</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">{stats.averageRating}★ Average Rating</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-cyan-600 hover:to-purple-700 transition-all inline-flex items-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-bold hover:bg-cyan-400 hover:text-slate-900 transition-all inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stats.totalServices}</div>
              <div className="text-gray-300">AI Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">{stats.totalUsers.toLocaleString()}+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">{stats.averageRating}★</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">${(stats.totalRevenue / 1000000).toFixed(1)}M+</div>
              <div className="text-gray-300">Monthly Revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-800/50 rounded-lg p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-700 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-slate-700 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="popularity">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="users">Most Users</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center`}>
                        <service.icon className={`w-6 h-6 ${service.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300 ml-1">{service.rating}</span>
                          </div>
                          <span className="text-sm text-gray-400">•</span>
                          <span className="text-sm text-gray-300">{service.users.toLocaleString()} users</span>
                        </div>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Monthly:</span>
                      <span className="text-lg font-bold text-white">${service.pricing.monthly}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Yearly:</span>
                      <span className="text-sm font-medium text-green-400">
                        ${service.pricing.yearly} (Save ${(service.pricing.monthly * 12) - service.pricing.yearly})
                      </span>
                    </div>
                    {service.pricing.setup > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Setup:</span>
                        <span className="text-sm font-medium text-orange-400">${service.pricing.setup}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Free Trial:</span>
                      <span className="text-cyan-400 font-medium">{service.freeTrial}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Support:</span>
                      <span className="text-gray-300">{service.support}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={service.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all text-center"
                    >
                      Try Demo
                    </a>
                    <a
                      href="/contact"
                      className="flex-1 border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all text-center"
                    >
                      Contact Sales
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI-powered micro SAAS services to boost productivity, 
            reduce costs, and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
          <div className="mt-8 text-gray-200">
            <p className="mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email: <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">kleber@ziontechgroup.com</a>
            </p>
            <p>
              <MapPin className="w-4 h-4 inline mr-2" />
              Address: 364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}