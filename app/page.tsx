'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, DollarSign, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import EnhancedSEO from './components/EnhancedSEO';
import PerformanceEnhancer from './components/PerformanceEnhancer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

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
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setIsHydrated(true);
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

  // Contact information
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const microSAASServices = [
    // Productivity & Management Tools
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
      icon: '📊',
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '10,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Meeting Assistant Pro',
      description: 'Revolutionary meeting management with real-time transcription, action item extraction, and intelligent follow-ups. Used by Fortune 500 companies.',
      icon: '🎯',
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Real-time transcription', 'Action item extraction', 'Meeting summaries', 'Follow-up automation', 'Calendar integration', 'Voice recognition', 'Multi-language support', 'Meeting analytics'],
      benefits: ['90% meeting efficiency', 'Zero missed action items', 'Automatic follow-ups', 'Better meeting outcomes'],
      link: '/ai-meeting-assistant',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '20,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Document Intelligence Pro',
      description: 'Transform any document into actionable insights with AI-powered analysis, summarization, and knowledge extraction.',
      icon: '📄',
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['Document analysis', 'Smart summarization', 'Knowledge extraction', 'Search & discovery', 'Version control', 'Collaboration tools', 'OCR processing', 'Multi-format support'],
      benefits: ['80% faster document processing', 'Better knowledge retention', 'Improved search', 'Enhanced collaboration'],
      link: '/ai-document-intelligence',
      popular: true,
      category: 'Productivity',
      rating: 4.7,
      users: '15,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Personal Assistant Pro',
      description: 'Your intelligent personal assistant that manages emails, schedules, and tasks with natural language processing.',
      icon: '🤖',
      price: '$49/month',
      originalPrice: '$79/month',
      features: ['Email management', 'Smart scheduling', 'Task automation', 'Voice commands', 'Calendar sync', 'Reminder system', 'Travel planning', 'Expense tracking'],
      benefits: ['50% time savings', 'Never miss important tasks', 'Better organization', 'Reduced stress'],
      link: '/ai-personal-assistant',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '45,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Team Collaboration Hub',
      description: 'Advanced team collaboration platform with AI-powered insights, smart notifications, and productivity analytics.',
      icon: '👥',
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['Team analytics', 'Smart notifications', 'Project tracking', 'Communication tools', 'File sharing', 'Video conferencing', 'Task management', 'Performance insights'],
      benefits: ['35% team productivity increase', 'Better communication', 'Reduced meetings', 'Improved outcomes'],
      link: '/ai-team-collaboration',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '25,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Task Manager Pro',
      description: 'Smart task management with AI prioritization, deadline prediction, and productivity insights. Boost your productivity by 60%.',
      icon: '✅',
      price: '$49/month',
      originalPrice: '$79/month',
      features: ['AI task prioritization', 'Smart scheduling', 'Progress tracking', 'Team collaboration', 'Deadline alerts', 'Productivity analytics', 'Habit tracking', 'Goal setting'],
      benefits: ['60% productivity boost', 'Never miss deadlines', 'Better focus', 'Achieve more goals'],
      link: '/ai-task-manager',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '25,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Workflow Automation Pro',
      description: 'Automate repetitive tasks with AI-powered workflow optimization. Save 20+ hours per week with intelligent automation.',
      icon: '⚡',
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Visual workflow builder', 'AI optimization', '500+ integrations', 'Custom triggers', 'Error handling', 'Analytics dashboard', 'Team collaboration', 'API access'],
      benefits: ['20+ hours saved weekly', '99.9% accuracy', 'Easy setup', 'Scalable automation'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Productivity',
      rating: 4.7,
      users: '15,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Meeting Scheduler Pro',
      description: 'Intelligent meeting scheduling with calendar optimization, conflict resolution, and time zone management. Used by Fortune 500 companies.',
      icon: '📅',
      price: '$39/month',
      originalPrice: '$59/month',
      features: ['Smart scheduling', 'Calendar integration', 'Conflict resolution', 'Time zone handling', 'Meeting analytics', 'Auto-reminders', 'Room booking', 'Catering coordination'],
      benefits: ['50% scheduling time saved', 'Zero double bookings', 'Better time utilization', 'Reduced no-shows'],
      link: '/ai-meeting-scheduler',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '30,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Time Tracker Pro',
      description: 'Intelligent time tracking with productivity insights, automated reporting, and team analytics. Trusted by remote teams globally.',
      icon: '⏱️',
      price: '$34/month',
      originalPrice: '$49/month',
      features: ['Auto time tracking', 'Productivity analytics', 'Project billing', 'Team insights', 'Idle detection', 'Detailed reports', 'Screenshot monitoring', 'App usage tracking'],
      benefits: ['Accurate time tracking', 'Better productivity', 'Fair billing', 'Team optimization'],
      link: '/ai-time-tracker',
      popular: true,
      category: 'Productivity',
      rating: 4.6,
      users: '50,000+',
      freeTrial: '14 days'
    },
    // Content & Marketing Tools
    {
      title: 'AI Content Writer Pro',
      description: 'Advanced AI content creation with SEO optimization, brand voice consistency, and multi-language support. Generate 10x more content.',
      icon: '✍️',
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['SEO-optimized content', 'Brand voice training', 'Multi-language support', 'Content calendar', 'Plagiarism check', 'Tone adjustment', 'Keyword research', 'Content templates'],
      benefits: ['10x content output', 'SEO ready', 'Brand consistent', 'Time savings'],
      link: '/ai-content-writer',
      popular: true,
      category: 'Content',
      rating: 4.9,
      users: '40,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Video Creator Pro',
      description: 'Professional video creation with AI-powered editing, voice synthesis, and automated production. Create studio-quality videos in minutes.',
      icon: '🎬',
      price: '$149/month',
      originalPrice: '$199/month',
      features: ['AI video editing', 'Voice synthesis', 'Auto-captions', 'Template library', 'Music generation', 'Color correction', 'Motion graphics', 'Multi-format export'],
      benefits: ['90% faster video production', 'Professional quality', 'No editing skills needed', 'Unlimited creativity'],
      link: '/ai-video-creator',
      popular: true,
      category: 'Content',
      rating: 4.8,
      users: '30,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Podcast Studio Pro',
      description: 'Complete podcast production suite with AI-powered editing, transcription, and distribution. Launch your podcast in 24 hours.',
      icon: '🎙️',
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['AI audio editing', 'Auto-transcription', 'Show notes generation', 'Distribution automation', 'Analytics dashboard', 'Guest booking', 'Monetization tools', 'Social media integration'],
      benefits: ['Professional podcast quality', '10x faster production', 'Better audience engagement', 'Monetization ready'],
      link: '/ai-podcast-studio',
      popular: true,
      category: 'Content',
      rating: 4.7,
      users: '18,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Graphic Design Studio',
      description: 'Professional graphic design with AI-powered tools, templates, and brand consistency. Create stunning visuals without design skills.',
      icon: '🎨',
      price: '$69/month',
      originalPrice: '$99/month',
      features: ['AI design generation', 'Brand kit management', 'Template library', 'Logo creation', 'Social media graphics', 'Print design', 'Color palette generator', 'Font pairing'],
      benefits: ['Professional designs', 'Brand consistency', 'No design skills needed', 'Unlimited creativity'],
      link: '/ai-graphic-design',
      popular: true,
      category: 'Content',
      rating: 4.8,
      users: '35,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Website Builder Pro',
      description: 'Intelligent website builder with AI-powered design, content generation, and SEO optimization. Launch your site in minutes.',
      icon: '🌐',
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['AI design generation', 'Content optimization', 'SEO tools', 'Mobile optimization', 'E-commerce integration', 'Analytics dashboard', 'Custom domains', 'SSL certificates'],
      benefits: ['Professional websites', 'SEO optimized', 'Mobile responsive', 'Fast loading'],
      link: '/ai-website-builder',
      popular: true,
      category: 'Content',
      rating: 4.9,
      users: '50,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Social Media Manager Pro',
      description: 'Automated social media management with AI-powered content creation, scheduling, and analytics. Grow your audience by 300%.',
      icon: '📱',
      price: '$69/month',
      originalPrice: '$99/month',
      features: ['Auto content creation', 'Smart scheduling', 'Hashtag optimization', 'Engagement tracking', 'Competitor analysis', 'Trend monitoring', 'Multi-platform posting', 'Analytics dashboard'],
      benefits: ['300% audience growth', 'Consistent posting', 'Better engagement', 'Time savings'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing',
      rating: 4.7,
      users: '35,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with AI-powered personalization, A/B testing, and automation. Increase open rates by 150%.',
      icon: '📧',
      price: '$59/month',
      originalPrice: '$89/month',
      features: ['AI personalization', 'A/B testing', 'Email automation', 'Segmentation', 'Analytics dashboard', 'Template library', 'Deliverability optimization', 'List management'],
      benefits: ['150% higher open rates', 'Better engagement', 'Automated campaigns', 'ROI tracking'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing',
      rating: 4.8,
      users: '28,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI SEO Optimizer Pro',
      description: 'Advanced SEO optimization with AI-powered keyword research, content analysis, and ranking tracking. Boost organic traffic by 200%.',
      icon: '🔍',
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO audit', 'Link building', 'Local SEO', 'Schema markup'],
      benefits: ['200% traffic increase', 'Higher rankings', 'Better visibility', 'Competitive advantage'],
      link: '/ai-seo-optimizer',
      popular: true,
      category: 'Marketing',
      rating: 4.9,
      users: '22,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Lead Generation Pro',
      description: 'Automated lead generation with AI-powered prospecting, qualification, and nurturing. Generate 5x more qualified leads.',
      icon: '🎯',
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['AI prospecting', 'Lead scoring', 'Email sequences', 'CRM integration', 'Data enrichment', 'Follow-up automation', 'Lead nurturing', 'Conversion tracking'],
      benefits: ['5x more leads', 'Higher quality prospects', 'Automated nurturing', 'Better conversion'],
      link: '/ai-lead-generation',
      popular: true,
      category: 'Marketing',
      rating: 4.8,
      users: '18,000+',
      freeTrial: '7 days'
    },
    // Business & Finance Tools
    {
      title: 'AI CRM Intelligence Pro',
      description: 'Smart CRM with AI-powered insights, sales forecasting, and customer behavior analysis. Increase sales by 40%.',
      icon: '👥',
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['AI insights', 'Sales forecasting', 'Customer analytics', 'Pipeline management', 'Automation rules', 'Integration hub', 'Mobile app', 'Custom fields'],
      benefits: ['40% sales increase', 'Better customer insights', 'Automated workflows', 'Data-driven decisions'],
      link: '/ai-crm',
      popular: true,
      category: 'Business',
      rating: 4.7,
      users: '32,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Financial Analyzer Pro',
      description: 'Advanced financial analysis with AI-powered insights, forecasting, and investment recommendations. Make smarter financial decisions.',
      icon: '💰',
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Financial forecasting', 'Investment analysis', 'Risk assessment', 'Portfolio optimization', 'Tax planning', 'Expense tracking', 'Budget management', 'Report generation'],
      benefits: ['Smarter investments', 'Better financial planning', 'Risk reduction', 'Tax optimization'],
      link: '/ai-financial-analyzer',
      popular: true,
      category: 'Finance',
      rating: 4.8,
      users: '25,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Invoice Generator Pro',
      description: 'Automated invoice creation with AI-powered pricing, tax calculations, and payment tracking. Save 90% of billing time.',
      icon: '🧾',
      price: '$49/month',
      originalPrice: '$79/month',
      features: ['Auto-invoice generation', 'Smart pricing suggestions', 'Tax calculations', 'Payment tracking', 'Client management', 'Multi-currency support', 'Recurring billing', 'Payment reminders'],
      benefits: ['90% time savings', 'Zero calculation errors', 'Faster payments', 'Professional invoices'],
      link: '/ai-invoice-generator',
      popular: true,
      category: 'Finance',
      rating: 4.9,
      users: '45,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Expense Tracker Pro',
      description: 'Smart expense tracking with receipt scanning, automated categorization, and tax preparation. Perfect for businesses and freelancers.',
      icon: '💳',
      price: '$29/month',
      originalPrice: '$49/month',
      features: ['Receipt scanning', 'Auto-categorization', 'Tax preparation', 'Spending insights', 'Budget alerts', 'Multi-currency support', 'Team expense management', 'Integration with accounting software'],
      benefits: ['95% automation', 'Tax-ready reports', 'Better spending control', 'Time savings'],
      link: '/ai-expense-tracker',
      popular: true,
      category: 'Finance',
      rating: 4.7,
      users: '60,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Stock Portfolio Manager',
      description: 'Intelligent portfolio management with AI-powered investment recommendations and risk assessment. Beat the market by 15%.',
      icon: '📈',
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Portfolio analysis', 'AI recommendations', 'Risk assessment', 'Performance tracking', 'Market insights', 'Tax optimization', 'Rebalancing alerts', 'News sentiment analysis'],
      benefits: ['15% better returns', 'Risk management', 'Informed decisions', 'Tax savings'],
      link: '/ai-stock-portfolio-manager',
      popular: true,
      category: 'Finance',
      rating: 4.8,
      users: '20,000+',
      freeTrial: '14 days'
    },
    // Customer Service & Support
    {
      title: 'AI Customer Support Bot Pro',
      description: 'Advanced AI chatbot with natural language processing, multi-language support, and seamless human handoff. Reduce support costs by 70%.',
      icon: '🤖',
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['Natural language processing', 'Multi-language support', 'Human handoff', 'Knowledge base integration', 'Analytics dashboard', 'Custom branding', 'API access', 'Live chat integration'],
      benefits: ['70% cost reduction', '24/7 availability', 'Instant responses', 'Customer satisfaction'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Support',
      rating: 4.9,
      users: '35,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Chatbot Builder Pro',
      description: 'No-code chatbot creation with drag-and-drop interface and AI training. Build professional chatbots in minutes.',
      icon: '💬',
      price: '$69/month',
      originalPrice: '$99/month',
      features: ['Drag-and-drop builder', 'AI training', 'Multi-platform deployment', 'Analytics tracking', 'Custom integrations', 'Voice support', 'Mobile app', 'White-label options'],
      benefits: ['No coding required', 'Quick deployment', 'Professional results', 'Easy maintenance'],
      link: '/ai-chatbot-builder',
      popular: true,
      category: 'Support',
      rating: 4.7,
      users: '28,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Email Assistant Pro',
      description: 'Smart email management with AI-powered responses, scheduling, and priority handling. Manage 10x more emails efficiently.',
      icon: '📧',
      price: '$39/month',
      originalPrice: '$59/month',
      features: ['AI email responses', 'Smart scheduling', 'Priority handling', 'Email templates', 'Follow-up automation', 'Spam filtering', 'Email analytics', 'Calendar integration'],
      benefits: ['10x email efficiency', 'Better responses', 'Time savings', 'Professional communication'],
      link: '/ai-email-assistant',
      popular: true,
      category: 'Support',
      rating: 4.6,
      users: '40,000+',
      freeTrial: '7 days'
    },
    // Development & Technical Tools
    {
      title: 'AI Code Review Assistant Pro',
      description: 'Automated code review with AI-powered analysis, security scanning, and performance optimization. Catch bugs before they happen.',
      icon: '💻',
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['Automated code review', 'Security scanning', 'Performance analysis', 'Bug detection', 'Code suggestions', 'Style checking', 'Documentation generation', 'Team collaboration'],
      benefits: ['Catch bugs early', 'Better code quality', 'Security compliance', 'Team learning'],
      link: '/ai-code-generation',
      popular: true,
      category: 'Development',
      rating: 4.8,
      users: '25,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Mobile App Builder Pro',
      description: 'No-code mobile app development with AI-powered design and functionality. Build professional apps 10x faster.',
      icon: '📱',
      price: '$149/month',
      originalPrice: '$199/month',
      features: ['No-code development', 'AI design suggestions', 'Cross-platform support', 'App store deployment', 'Analytics integration', 'Push notifications', 'User authentication', 'Database management'],
      benefits: ['10x faster development', 'No coding required', 'Professional results', 'Easy maintenance'],
      link: '/ai-mobile-app-development',
      popular: true,
      category: 'Development',
      rating: 4.7,
      users: '15,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Cybersecurity Shield Pro',
      description: 'Advanced AI-powered security monitoring with threat detection, vulnerability scanning, and incident response. Protect your business 24/7.',
      icon: '🛡️',
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance monitoring', 'Security analytics', 'Real-time alerts', 'Penetration testing', 'Security training'],
      benefits: ['24/7 protection', 'Proactive security', 'Compliance ready', 'Peace of mind'],
      link: '/ai-cybersecurity',
      popular: true,
      category: 'Security',
      rating: 4.9,
      users: '12,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Document Processor Pro',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflows. Process documents 50x faster.',
      icon: '📄',
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['OCR text extraction', 'Data extraction', 'Document classification', 'Workflow automation', 'Batch processing', 'API integration', 'Cloud storage', 'Search functionality'],
      benefits: ['50x faster processing', 'Accurate extraction', 'Automated workflows', 'Cost savings'],
      link: '/ai-document-processing',
      popular: true,
      category: 'Development',
      rating: 4.8,
      users: '30,000+',
      freeTrial: '14 days'
    },
    // Analytics & Data Tools
    {
      title: 'AI Data Analytics Pro',
      description: 'Advanced data analytics with AI-powered insights, predictive modeling, and automated reporting. Make data-driven decisions.',
      icon: '📊',
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['AI insights', 'Predictive modeling', 'Automated reporting', 'Data visualization', 'Custom dashboards', 'Real-time analytics', 'Data integration', 'Machine learning'],
      benefits: ['Better insights', 'Predictive power', 'Automated reports', 'Data-driven decisions'],
      link: '/ai-data-analytics',
      popular: true,
      category: 'Analytics',
      rating: 4.8,
      users: '22,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Data Visualization Pro',
      description: 'Interactive data visualization with AI-powered chart recommendations and automated insights. Present data like a pro.',
      icon: '📈',
      price: '$69/month',
      originalPrice: '$99/month',
      features: ['Interactive charts', 'AI recommendations', 'Automated insights', 'Custom dashboards', 'Real-time updates', 'Export options', 'Collaboration tools', 'Mobile responsive'],
      benefits: ['Professional presentations', 'Better insights', 'Easy sharing', 'Mobile access'],
      link: '/ai-data-visualization',
      popular: true,
      category: 'Analytics',
      rating: 4.7,
      users: '18,000+',
      freeTrial: '7 days'
    },
    // Creative & Media Tools
    {
      title: 'AI Video Generator Pro',
      description: 'Professional video creation with AI-powered editing, effects, and automated production. Create videos 20x faster.',
      icon: '🎬',
      price: '$149/month',
      originalPrice: '$199/month',
      features: ['AI video editing', 'Auto effects', 'Voice synthesis', 'Music generation', 'Text-to-video', 'Templates library', 'HD export', 'Cloud rendering'],
      benefits: ['20x faster creation', 'Professional quality', 'No editing skills needed', 'Cost effective'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Creative',
      rating: 4.8,
      users: '25,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Voice Cloning Studio Pro',
      description: 'Realistic voice synthesis with AI-powered voice cloning and text-to-speech. Create professional voiceovers in minutes.',
      icon: '🎤',
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Voice cloning', 'Text-to-speech', 'Multiple languages', 'Emotion control', 'Voice training', 'Batch processing', 'API access', 'High-quality output'],
      benefits: ['Realistic voices', 'Quick production', 'Multiple languages', 'Professional quality'],
      link: '/ai-voice-cloning',
      popular: true,
      category: 'Creative',
      rating: 4.9,
      users: '20,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Music Composer Pro',
      description: 'AI-powered music composition with genre recognition, mood matching, and professional production. Create original music instantly.',
      icon: '🎵',
      price: '$59/month',
      originalPrice: '$89/month',
      features: ['AI composition', 'Genre recognition', 'Mood matching', 'Instrument selection', 'Tempo control', 'Export options', 'Royalty-free', 'Custom training'],
      benefits: ['Original music', 'Quick creation', 'Professional quality', 'Royalty-free'],
      link: '/ai-music-composition',
      popular: true,
      category: 'Creative',
      rating: 4.7,
      users: '15,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Fashion Design Studio Pro',
      description: 'AI-powered fashion design with trend analysis, color matching, and automated pattern generation. Design like a professional.',
      icon: '👗',
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['AI design generation', 'Trend analysis', 'Color matching', 'Pattern creation', 'Size optimization', 'Fabric suggestions', '3D visualization', 'Export options'],
      benefits: ['Professional designs', 'Trend awareness', 'Quick creation', 'Cost effective'],
      link: '/ai-fashion-design',
      popular: true,
      category: 'Creative',
      rating: 4.6,
      users: '12,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI 3D Generation Studio Pro',
      description: 'Advanced 3D content creation with AI-powered modeling, texturing, and animation. Create stunning 3D content without expertise.',
      icon: '🎨',
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['AI 3D modeling', 'Auto texturing', 'Animation tools', 'Lighting optimization', 'Rendering engine', 'Asset library', 'VR/AR support', 'Export formats'],
      benefits: ['No 3D expertise needed', 'Professional results', 'Quick creation', 'Multiple formats'],
      link: '/ai-3d-generation',
      popular: true,
      category: 'Creative',
      rating: 4.8,
      users: '8,000+',
      freeTrial: '7 days'
    },
    // Health & Wellness Tools
    {
      title: 'AI Healthcare Assistant Pro',
      description: 'Advanced healthcare AI with symptom analysis, medication reminders, and health monitoring. Your personal health companion.',
      icon: '🏥',
      price: '$49/month',
      originalPrice: '$79/month',
      features: ['Symptom analysis', 'Medication reminders', 'Health tracking', 'Appointment scheduling', 'Medical records', 'Emergency alerts', 'Doctor integration', 'Privacy protection'],
      benefits: ['Better health monitoring', 'Medication compliance', 'Early detection', 'Peace of mind'],
      link: '/ai-healthcare',
      popular: true,
      category: 'Health',
      rating: 4.9,
      users: '35,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Fitness Coach Pro',
      description: 'Personalized fitness coaching with AI-powered workout plans, nutrition guidance, and progress tracking. Achieve your fitness goals.',
      icon: '💪',
      price: '$39/month',
      originalPrice: '$59/month',
      features: ['Personalized workouts', 'Nutrition guidance', 'Progress tracking', 'Form analysis', 'Goal setting', 'Community features', 'Wearable integration', 'Video tutorials'],
      benefits: ['Personalized approach', 'Better results', 'Motivation boost', 'Expert guidance'],
      link: '/ai-fitness-coach',
      popular: true,
      category: 'Health',
      rating: 4.8,
      users: '50,000+',
      freeTrial: '7 days'
    },
    // Sales & Business Tools
    {
      title: 'AI Sales Automation Pro',
      description: 'Intelligent sales automation with AI-powered lead scoring, follow-up sequences, and conversion optimization. Increase sales by 60%.',
      icon: '💼',
      price: '$149/month',
      originalPrice: '$199/month',
      features: ['Lead scoring', 'Follow-up automation', 'Email sequences', 'CRM integration', 'Sales forecasting', 'Performance analytics', 'A/B testing', 'Team collaboration'],
      benefits: ['60% sales increase', 'Automated follow-ups', 'Better lead quality', 'Higher conversion'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales',
      rating: 4.8,
      users: '18,000+',
      freeTrial: '14 days'
    },
    // Additional Specialized Tools
    {
      title: 'AI Password Manager Pro',
      description: 'Advanced password management with AI-powered security recommendations and breach monitoring. Secure your digital life.',
      icon: '🔐',
      price: '$19/month',
      originalPrice: '$29/month',
      features: ['Password generation', 'Security analysis', 'Breach monitoring', 'Auto-fill', '2FA management', 'Family sharing', 'Dark web monitoring', 'Security alerts'],
      benefits: ['Enhanced security', 'Convenience', 'Breach protection', 'Peace of mind'],
      link: '/ai-password-manager',
      popular: true,
      category: 'Security',
      rating: 4.9,
      users: '100,000+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Website Builder Pro',
      description: 'AI-powered website creation with smart design suggestions, SEO optimization, and e-commerce integration. Build professional sites in minutes.',
      icon: '🌐',
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['AI design generation', 'Smart templates', 'SEO optimization', 'Mobile responsive', 'E-commerce integration', 'Analytics dashboard', 'Custom domains', 'SSL certificates'],
      benefits: ['Professional websites', 'SEO ready', 'Mobile optimized', 'Easy maintenance'],
      link: '/ai-website-builder',
      popular: true,
      category: 'Web Development',
      rating: 4.7,
      users: '40,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Logo Designer Pro',
      description: 'Professional logo creation with AI-powered design and brand consistency. Create stunning logos in minutes.',
      icon: '🎨',
      price: '$59/month',
      originalPrice: '$89/month',
      features: ['AI logo generation', 'Brand consistency', 'Multiple formats', 'Color schemes', 'Font matching', 'Brand guidelines', 'Vector files', 'Unlimited revisions'],
      benefits: ['Professional logos', 'Brand consistency', 'Cost effective', 'Quick turnaround'],
      link: '/ai-logo-designer',
      popular: true,
      category: 'Design',
      rating: 4.8,
      users: '30,000+',
      freeTrial: '7 days'
    }
  ];
      title: 'AI Password Manager Pro',
      description: 'Advanced password management with AI-powered security recommendations and breach monitoring. Secure your digital life.',
      icon: '🔐',
      price: '$19/month',
      originalPrice: '$29/month',
      features: ['Password generation', 'Security analysis', 'Breach monitoring', 'Auto-fill', '2FA management', 'Family sharing', 'Dark web monitoring', 'Security alerts'],
      benefits: ['Enhanced security', 'Convenience', 'Breach protection', 'Peace of mind'],
      link: '/ai-password-manager',
      popular: true,
      category: 'Security',
      rating: 4.9,
      users: '100,000+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Website Builder Pro',
      description: 'AI-powered website creation with smart design suggestions, SEO optimization, and e-commerce integration. Build professional sites in minutes.',
      icon: '🌐',
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['AI design generation', 'Smart templates', 'SEO optimization', 'Mobile responsive', 'E-commerce integration', 'Analytics dashboard', 'Custom domains', 'SSL certificates'],
      benefits: ['Professional websites', 'SEO ready', 'Mobile optimized', 'Easy maintenance'],
      link: '/ai-website-builder',
      popular: true,
      category: 'Web Development',
      rating: 4.7,
      users: '40,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Logo Designer Pro',
      description: 'Professional logo creation with AI-powered design and brand consistency. Create stunning logos in minutes.',
      icon: '🎨',
      price: '$59/month',
      originalPrice: '$89/month',
      features: ['AI logo generation', 'Brand consistency', 'Multiple formats', 'Color schemes', 'Font matching', 'Brand guidelines', 'Vector files', 'Unlimited revisions'],
      benefits: ['Professional logos', 'Brand consistency', 'Cost effective', 'Quick turnaround'],
      link: '/ai-logo-designer',
      popular: true,
      category: 'Design',
      rating: 4.8,
      users: '30,000+',
      freeTrial: '7 days'
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, decision-making, and intelligent automation. Trusted by Fortune 500 companies.',
      icon: Brain,
      price: '$1,500/month',
      originalPrice: '$2,000/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization', 'Real-time Inference', 'Model Versioning'],
      benefits: ['40% better predictions', 'Reduced development time', 'Scalable solutions', 'ROI tracking'],
      link: '/machine-learning',
      popular: true,
      category: 'AI Development',
      rating: 4.9,
      users: '500+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Cybersecurity Shield Pro',
      description: 'Advanced AI-powered security solutions with real-time threat detection, behavioral analysis, and automated response.',
      icon: Shield,
      price: '$2,200/month',
      originalPrice: '$3,000/month',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Security Monitoring', 'Incident Response', 'Vulnerability Assessment', 'Compliance Reporting', '24/7 Monitoring'],
      benefits: ['99.9% threat detection', 'Zero false positives', 'Automated response', 'Compliance ready'],
      link: '/ai-cybersecurity',
      popular: true,
      category: 'Security',
      rating: 4.8,
      users: '300+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Healthcare Assistant Pro',
      description: 'Revolutionary healthcare AI with diagnostic assistance, patient monitoring, and treatment optimization.',
      icon: Stethoscope,
      price: '$3,500/month',
      originalPrice: '$5,000/month',
      features: ['Diagnostic Assistance', 'Patient Monitoring', 'Treatment Optimization', 'Medical Imaging', 'Drug Discovery', 'Clinical Trials', 'Patient Records', 'Telemedicine'],
      benefits: ['30% faster diagnosis', 'Better patient outcomes', 'Reduced errors', 'Cost savings'],
      link: '/ai-healthcare',
      popular: true,
      category: 'Healthcare',
      rating: 4.9,
      users: '200+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Financial Advisor Pro',
      description: 'Intelligent financial planning with portfolio optimization, risk assessment, and automated trading.',
      icon: DollarSign,
      price: '$1,800/month',
      originalPrice: '$2,500/month',
      features: ['Portfolio Optimization', 'Risk Assessment', 'Automated Trading', 'Market Analysis', 'Tax Optimization', 'Retirement Planning', 'Insurance Analysis', 'Real-time Alerts'],
      benefits: ['25% better returns', 'Risk reduction', 'Automated management', 'Tax optimization'],
      link: '/ai-financial-advisor',
      popular: true,
      category: 'Finance',
      rating: 4.7,
      users: '400+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation.',
      icon: Truck,
      price: '$2,500/month',
      originalPrice: '$3,500/month',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Quality Control', 'Cost Optimization', 'Risk Management', 'Sustainability Tracking'],
      benefits: ['35% cost reduction', '99% on-time delivery', 'Better inventory management', 'Sustainability goals'],
      link: '/ai-supply-chain',
      popular: true,
      category: 'Logistics',
      rating: 4.8,
      users: '250+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Legal Assistant Pro',
      description: 'Advanced legal AI with contract analysis, case research, and document automation.',
      icon: FileText,
      price: '$2,000/month',
      originalPrice: '$2,800/month',
      features: ['Contract Analysis', 'Case Research', 'Document Automation', 'Legal Research', 'Compliance Checking', 'Risk Assessment', 'Due Diligence', 'Litigation Support'],
      benefits: ['80% faster research', 'Better accuracy', 'Cost reduction', 'Risk mitigation'],
      link: '/ai-legal-assistant',
      popular: true,
      category: 'Legal',
      rating: 4.6,
      users: '150+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Manufacturing Intelligence',
      description: 'Smart manufacturing with predictive maintenance, quality control, and production optimization.',
      icon: Factory,
      price: '$3,000/month',
      originalPrice: '$4,200/month',
      features: ['Predictive Maintenance', 'Quality Control', 'Production Optimization', 'Supply Chain Integration', 'Energy Management', 'Safety Monitoring', 'Performance Analytics', 'IoT Integration'],
      benefits: ['40% efficiency increase', 'Zero downtime', 'Better quality', 'Cost savings'],
      link: '/ai-manufacturing',
      popular: true,
      category: 'Manufacturing',
      rating: 4.9,
      users: '180+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Education Platform Pro',
      description: 'Personalized learning with adaptive curriculum, student analytics, and automated assessment.',
      icon: GraduationCap,
      price: '$1,200/month',
      originalPrice: '$1,800/month',
      features: ['Adaptive Learning', 'Student Analytics', 'Automated Assessment', 'Content Generation', 'Progress Tracking', 'Parent Communication', 'Teacher Tools', 'Accessibility Features'],
      benefits: ['50% better learning outcomes', 'Personalized education', 'Teacher efficiency', 'Student engagement'],
      link: '/ai-education',
      popular: true,
      category: 'Education',
      rating: 4.7,
      users: '600+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Customer Service Automation',
      description: 'Intelligent customer service automation with sentiment analysis and smart routing. Reduce support costs by 60%.',
      icon: MessageSquare,
      price: '$1,200/month',
      originalPrice: '$1,800/month',
      features: ['Sentiment Analysis', 'Smart Routing', 'Auto-Response', 'Escalation Management', 'Performance Analytics', 'Multi-language Support', 'Voice Integration', 'Knowledge Base'],
      benefits: ['60% cost reduction', '24/7 availability', 'Better customer satisfaction', 'Faster resolution'],
      link: '/ai-customer-service',
      popular: true,
      category: 'Customer Service',
      rating: 4.8,
      users: '1,200+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting and logistics optimization. Optimize costs by 35%.',
      icon: Truck,
      price: '$1,800/month',
      originalPrice: '$2,500/month',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Analytics', 'Risk Assessment', 'Cost Optimization', 'Real-time Tracking', 'Sustainability Metrics'],
      benefits: ['35% cost reduction', 'Better inventory management', 'Reduced waste', 'Improved efficiency'],
      link: '/ai-supply-chain',
      popular: true,
      category: 'Supply Chain',
      rating: 4.7,
      users: '800+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Fraud Detection System',
      description: 'Advanced fraud prevention with real-time monitoring and pattern recognition. Stop 99.9% of fraudulent transactions.',
      icon: Shield,
      price: '$2,200/month',
      originalPrice: '$3,000/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System', 'Threat Intelligence', 'Compliance Monitoring', 'Machine Learning Models', 'API Integration'],
      benefits: ['99.9% fraud prevention', 'Real-time protection', 'Reduced false positives', 'Compliance ready'],
      link: '/ai-fraud-detection',
      popular: true,
      category: 'Security',
      rating: 4.9,
      users: '600+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Predictive Maintenance',
      description: 'Intelligent equipment monitoring with predictive maintenance and failure prevention. Reduce downtime by 50%.',
      icon: Settings,
      price: '$1,600/month',
      originalPrice: '$2,200/month',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Performance Analytics', 'Alert System', 'Cost Optimization', 'IoT Integration', 'Historical Analysis'],
      benefits: ['50% less downtime', 'Predictive maintenance', 'Cost savings', 'Extended equipment life'],
      link: '/ai-predictive-maintenance',
      popular: true,
      category: 'Manufacturing',
      rating: 4.8,
      users: '400+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Business Intelligence',
      description: 'Advanced business intelligence with AI-powered insights, forecasting, and automated reporting. Make data-driven decisions.',
      icon: BarChart,
      price: '$1,300/month',
      originalPrice: '$1,800/month',
      features: ['AI Insights', 'Predictive Analytics', 'Automated Reporting', 'Data Visualization', 'Custom Dashboards', 'Real-time Analytics', 'Data Integration', 'Natural Language Queries'],
      benefits: ['Better insights', 'Automated reports', 'Data-driven decisions', 'Competitive advantage'],
      link: '/ai-business-intelligence',
      popular: true,
      category: 'Analytics',
      rating: 4.8,
      users: '900+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Advanced healthcare AI with medical imaging analysis, drug discovery, and patient monitoring. Improve patient outcomes.',
      icon: Stethoscope,
      price: '$2,500/month',
      originalPrice: '$3,500/month',
      features: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Monitoring', 'Diagnostic Assistance', 'Treatment Planning', 'Clinical Trials', 'Data Security', 'HIPAA Compliance'],
      benefits: ['Better diagnoses', 'Faster drug discovery', 'Improved patient care', 'Cost reduction'],
      link: '/ai-healthcare',
      popular: true,
      category: 'Healthcare',
      rating: 4.9,
      users: '300+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Financial Services',
      description: 'Comprehensive financial AI solutions with risk assessment, algorithmic trading, and fraud prevention. Optimize financial operations.',
      icon: CreditCard,
      price: '$1,900/month',
      originalPrice: '$2,600/month',
      features: ['Risk Assessment', 'Algorithmic Trading', 'Fraud Prevention', 'Credit Scoring', 'Portfolio Management', 'Regulatory Compliance', 'Real-time Analysis', 'API Integration'],
      benefits: ['Better risk management', 'Improved trading performance', 'Fraud prevention', 'Regulatory compliance'],
      link: '/ai-financial-services',
      popular: true,
      category: 'Finance',
      rating: 4.8,
      users: '700+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Natural Language Processing',
      description: 'Advanced NLP solutions with text analysis, language translation, and conversational AI. Process and understand human language.',
      icon: MessageSquare,
      price: '$1,100/month',
      originalPrice: '$1,500/month',
      features: ['Text Analysis', 'Language Translation', 'Sentiment Analysis', 'Named Entity Recognition', 'Text Summarization', 'Question Answering', 'Language Models', 'API Access'],
      benefits: ['Better text understanding', 'Multi-language support', 'Automated processing', 'Improved communication'],
      link: '/ai-nlp',
      popular: true,
      category: 'AI Development',
      rating: 4.7,
      users: '1,500+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Computer Vision',
      description: 'Advanced computer vision solutions with image recognition, object detection, and visual analysis. See and understand images like humans.',
      icon: Eye,
      price: '$1,400/month',
      originalPrice: '$1,900/month',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'OCR', 'Video Analysis', 'Quality Inspection', 'Real-time Processing', 'Edge Deployment'],
      benefits: ['Accurate image analysis', 'Real-time processing', 'Quality improvement', 'Automated inspection'],
      link: '/computer-vision',
      popular: true,
      category: 'AI Development',
      rating: 4.8,
      users: '1,000+',
      freeTrial: '14 days'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Migration Services',
      description: 'Seamless cloud migration with zero downtime and optimized performance. Migrate to the cloud with confidence.',
      icon: Cloud,
      price: '$2,000/month',
      originalPrice: '$3,000/month',
      features: ['Zero Downtime Migration', 'Performance Optimization', 'Security Hardening', 'Cost Optimization', 'Disaster Recovery', 'Monitoring Setup', 'Training', '24/7 Support'],
      benefits: ['Zero downtime', 'Better performance', 'Cost savings', 'Enhanced security'],
      link: '/cloud-migration',
      popular: true,
      category: 'Cloud Services',
      rating: 4.8,
      users: '600+',
      freeTrial: '30 days'
    },
    {
      title: 'Enterprise IT Infrastructure',
      description: 'Complete enterprise IT infrastructure with high availability, scalability, and security. Built for Fortune 500 companies.',
      icon: Building,
      price: '$5,000/month',
      originalPrice: '$7,500/month',
      features: ['High Availability Setup', 'Load Balancing', 'Auto-scaling', 'Disaster Recovery', 'Security Hardening', 'Performance Monitoring', 'Backup Solutions', '24/7 Support'],
      benefits: ['99.99% uptime', 'Unlimited scalability', 'Enterprise security', 'Cost optimization'],
      link: '/enterprise-infrastructure',
      popular: true,
      category: 'Infrastructure',
      rating: 4.9,
      users: '100+',
      freeTrial: '30 days'
    },
    {
      title: 'DevOps & CI/CD Automation',
      description: 'Complete DevOps transformation with automated CI/CD pipelines, infrastructure as code, and monitoring.',
      icon: Settings,
      price: '$2,500/month',
      originalPrice: '$3,500/month',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Alerting', 'Security Scanning', 'Automated Testing', 'Deployment Automation', 'Team Training'],
      benefits: ['10x faster deployments', 'Zero downtime', 'Better quality', 'Team productivity'],
      link: '/devops-automation',
      popular: true,
      category: 'DevOps',
      rating: 4.8,
      users: '400+',
      freeTrial: '30 days'
    },
    {
      title: 'Database Management & Optimization',
      description: 'Advanced database services with performance tuning, backup strategies, and high availability setup.',
      icon: Database,
      price: '$1,800/month',
      originalPrice: '$2,500/month',
      features: ['Performance Tuning', 'Backup & Recovery', 'High Availability', 'Security Hardening', 'Monitoring', 'Query Optimization', 'Index Management', 'Capacity Planning'],
      benefits: ['50% performance improvement', 'Zero data loss', 'Better security', 'Cost reduction'],
      link: '/database-management',
      popular: true,
      category: 'Database',
      rating: 4.7,
      users: '350+',
      freeTrial: '30 days'
    },
    {
      title: 'Network Security & Firewall',
      description: 'Advanced network security with next-generation firewalls, intrusion detection, and threat prevention.',
      icon: Lock,
      price: '$1,500/month',
      originalPrice: '$2,200/month',
      features: ['Next-Gen Firewalls', 'Intrusion Detection', 'Threat Prevention', 'VPN Solutions', 'Network Monitoring', 'Access Control', 'Compliance Reporting', '24/7 Monitoring'],
      benefits: ['99.9% threat prevention', 'Zero breaches', 'Compliance ready', 'Better performance'],
      link: '/network-security',
      popular: true,
      category: 'Security',
      rating: 4.9,
      users: '500+',
      freeTrial: '30 days'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting with digital transformation, technology roadmaps, and implementation planning.',
      icon: Briefcase,
      price: '$3,000/month',
      originalPrice: '$4,500/month',
      features: ['Digital Transformation', 'Technology Roadmaps', 'Implementation Planning', 'Vendor Management', 'Cost Optimization', 'Risk Assessment', 'Compliance Planning', 'Change Management'],
      benefits: ['Better IT strategy', 'Cost optimization', 'Risk reduction', 'Competitive advantage'],
      link: '/it-consulting',
      popular: true,
      category: 'Consulting',
      rating: 4.8,
      users: '200+',
      freeTrial: '30 days'
    },
    {
      title: 'Managed IT Services',
      description: 'Complete managed IT services with 24/7 monitoring, maintenance, and support for all your IT needs.',
      icon: Users,
      price: '$1,200/month',
      originalPrice: '$1,800/month',
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Help Desk Support', 'Security Management', 'Backup & Recovery', 'Software Updates', 'Hardware Management', 'Performance Optimization'],
      benefits: ['Reduced IT costs', 'Better uptime', 'Expert support', 'Peace of mind'],
      link: '/managed-it-services',
      popular: true,
      category: 'Managed Services',
      rating: 4.7,
      users: '800+',
      freeTrial: '30 days'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development with modern technologies and best practices.',
      icon: Smartphone,
      price: '$2,800/month',
      originalPrice: '$4,000/month',
      features: ['Native iOS/Android', 'Cross-platform Development', 'UI/UX Design', 'API Integration', 'Push Notifications', 'Analytics Integration', 'App Store Optimization', 'Maintenance & Support'],
      benefits: ['Professional apps', 'Cross-platform', 'Better user experience', 'Faster time to market'],
      link: '/mobile-app-development',
      popular: true,
      category: 'Development',
      rating: 4.8,
      users: '300+',
      freeTrial: '30 days'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity with threat detection, incident response, and compliance management. Protect your business 24/7.',
      icon: Shield,
      price: '$1,800/month',
      originalPrice: '$2,500/month',
      features: ['Threat Detection', 'Incident Response', 'Vulnerability Assessment', 'Penetration Testing', 'Security Training', 'Compliance Management', '24/7 Monitoring', 'Emergency Response'],
      benefits: ['24/7 protection', 'Proactive security', 'Compliance ready', 'Peace of mind'],
      link: '/cybersecurity',
      popular: true,
      category: 'Security',
      rating: 4.9,
      users: '800+',
      freeTrial: '14 days'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Modern DevOps practices with automated deployment, monitoring, and infrastructure as code. Deploy faster and more reliably.',
      icon: Settings,
      price: '$1,500/month',
      originalPrice: '$2,200/month',
      features: ['CI/CD Pipeline', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing', 'Deployment Automation', 'Performance Optimization', 'Team Training'],
      benefits: ['Faster deployments', 'Better reliability', 'Reduced errors', 'Team productivity'],
      link: '/devops',
      popular: true,
      category: 'Development',
      rating: 4.7,
      users: '1,200+',
      freeTrial: '14 days'
    },
    {
      title: 'Database Services',
      description: 'Advanced database management with optimization, backup, and performance tuning. Keep your data secure and fast.',
      icon: Database,
      price: '$1,200/month',
      originalPrice: '$1,800/month',
      features: ['Database Optimization', 'Backup & Recovery', 'Performance Tuning', 'Security Hardening', 'Monitoring', 'Migration Services', '24/7 Support', 'Training'],
      benefits: ['Better performance', 'Data security', 'Reliable backups', 'Expert support'],
      link: '/database-services',
      popular: true,
      category: 'Data Management',
      rating: 4.8,
      users: '900+',
      freeTrial: '14 days'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise IT solutions with custom development, integration, and support. Scale your business with technology.',
      icon: Building,
      price: '$3,000/month',
      originalPrice: '$4,500/month',
      features: ['Custom Development', 'System Integration', 'Legacy Modernization', 'Digital Transformation', 'Change Management', 'Training', '24/7 Support', 'Strategic Consulting'],
      benefits: ['Custom solutions', 'Seamless integration', 'Digital transformation', 'Competitive advantage'],
      link: '/enterprise',
      popular: true,
      category: 'Enterprise',
      rating: 4.9,
      users: '200+',
      freeTrial: '30 days'
    }
  ];

  const specializedServices = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing with quantum algorithms, optimization, and research. Solve complex problems with quantum power.',
      icon: Cpu,
      price: '$5,000/month',
      originalPrice: '$7,500/month',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Research & Development', 'Quantum Simulation', 'Cryptography', 'Machine Learning', 'Consulting', 'Training'],
      benefits: ['Exponential speedup', 'Complex problem solving', 'Competitive advantage', 'Future-ready technology'],
      link: '/quantum-computing',
      popular: true,
      category: 'Quantum',
      rating: 4.9,
      users: '50+',
      freeTrial: '60 days'
    },
    {
      title: 'Autonomous Systems',
      description: 'Advanced autonomous systems with robotics, drones, and self-driving technology. Build the future of automation.',
      icon: Settings,
      price: '$4,000/month',
      originalPrice: '$6,000/month',
      features: ['Robotics Development', 'Drone Technology', 'Self-Driving Systems', 'Sensor Integration', 'AI Integration', 'Safety Systems', 'Testing', 'Deployment'],
      benefits: ['Cutting-edge technology', 'Automation solutions', 'Safety first', 'Innovation leadership'],
      link: '/autonomous-systems',
      popular: true,
      category: 'Autonomous',
      rating: 4.8,
      users: '100+',
      freeTrial: '30 days'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Comprehensive blockchain solutions with smart contracts, DeFi, and Web3 development. Build the decentralized future.',
      icon: Lock,
      price: '$2,500/month',
      originalPrice: '$3,500/month',
      features: ['Smart Contracts', 'DeFi Development', 'NFT Solutions', 'Web3 Integration', 'Token Development', 'Security Audits', 'Consulting', 'Training'],
      benefits: ['Decentralized solutions', 'Security & transparency', 'Future-ready technology', 'Innovation leadership'],
      link: '/blockchain',
      popular: true,
      category: 'Blockchain',
      rating: 4.7,
      users: '300+',
      freeTrial: '30 days'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Comprehensive IoT solutions with edge computing, sensor networks, and real-time processing. Connect and optimize everything.',
      icon: Globe,
      price: '$1,800/month',
      originalPrice: '$2,500/month',
      features: ['IoT Development', 'Edge Computing', 'Sensor Networks', 'Real-time Processing', 'Data Analytics', 'Security', 'Integration', 'Monitoring'],
      benefits: ['Connected solutions', 'Real-time insights', 'Edge efficiency', 'Scalable architecture'],
      link: '/iot-edge',
      popular: true,
      category: 'IoT',
      rating: 4.8,
      users: '400+',
      freeTrial: '30 days'
    }
  ];

  return (
    <EnhancedErrorBoundary>
      <EnhancedSEO
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services', 'artificial intelligence', 'business intelligence', 'data analytics', 'cybersecurity', 'cloud migration', 'DevOps', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com"
        ogImage="https://ziontechgroup.com/og-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Advanced AI and IT Solutions",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          }
        }}
        preload={[
          { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2' },
          { href: '/images/hero-bg.jpg', as: 'image' }
        ]}
        prefetch={[
          { href: '/services', as: 'document' },
          { href: '/contact', as: 'document' },
          { href: '/about', as: 'document' }
        ]}
        dnsPrefetch={[
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
          'https://www.google-analytics.com'
        ]}
        preconnect={[
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
          'https://www.google-analytics.com',
          'https://www.googletagmanager.com'
        ]}
      >
        <PerformanceEnhancer
          enableWebVitals={true}
          enableResourceTiming={true}
          enableMemoryMonitoring={true}
          enableNetworkMonitoring={true}
          enableUserTiming={true}
          enableLongTaskMonitoring={true}
          enableLayoutShiftMonitoring={true}
          enableAnalytics={true}
          enableErrorReporting={true}
          performanceBudget={{
            lcp: 2500,
            fid: 100,
            cls: 0.1,
            fcp: 1800,
            ttfb: 600
          }}
        />
        <AccessibilityEnhancer
          enableKeyboardNavigation={true}
          enableScreenReaderSupport={true}
          enableHighContrast={true}
          enableFocusManagement={true}
          enableAriaLabels={true}
          enableSkipLinks={true}
          enableColorContrast={true}
          enableTextScaling={true}
          enableMotionReduction={true}
          enableVoiceNavigation={true}
          enableAnalytics={true}
          enableErrorReporting={true}
        />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          
          {/* Hero Section */}
          <section className="relative pt-20 pb-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Transform Your Business with
                  <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    AI-Powered Solutions
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. 
                  Achieve 300% ROI with our cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="/contact"
                    className="cyber-button px-8 py-4 text-lg font-semibold"
                    onClick={handlePhoneClick}
                  >
                    Get Started Today
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors text-lg font-medium"
                    onClick={handlePhoneClick}
                  >
                    <Phone className="w-5 h-5" />
                    <span>+1 302 464 0950</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Micro SAAS Services Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Micro SAAS Solutions
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Powerful, affordable AI-powered tools designed for modern businesses. 
                  Choose from our comprehensive suite of micro SAAS solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6">
                {microSAASServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 md:p-6 hover:border-cyan-400/40 transition-all duration-300 group h-full flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 text-xs md:text-sm mb-4 leading-relaxed flex-grow line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg md:text-2xl font-bold text-cyan-400">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-400 line-through text-xs md:text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                        <span className="text-xs md:text-sm text-gray-300">{service.rating}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-xs md:text-sm text-gray-400 mb-2">
                        <span>{service.users} users</span>
                        <span>{service.freeTrial} free trial</span>
                      </div>
                    </div>
                    
                    <a
                      href={service.link}
                      className="block w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-center py-2 md:py-3 rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 font-medium text-sm md:text-base mt-auto"
                    >
                      Learn More
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  AI Services & Solutions
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Advanced AI solutions for enterprise clients. Transform your business with cutting-edge artificial intelligence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {aiServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/80 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 md:p-6 lg:p-8 hover:border-purple-400/40 transition-all duration-300 group h-full flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <service.icon className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />
                      {service.popular && (
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-2 md:px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-purple-400 transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base flex-grow line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl md:text-3xl font-bold text-purple-400">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-400 line-through text-sm md:text-lg">{service.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                        <span className="text-sm md:text-base text-gray-300">{service.rating}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4 md:mb-6">
                      <div className="flex items-center justify-between text-gray-400 mb-2 text-xs md:text-sm">
                        <span>{service.users} users</span>
                        <span>{service.freeTrial} free trial</span>
                      </div>
                    </div>
                    
                    <a
                      href={service.link}
                      className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 md:py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium text-sm md:text-base mt-auto"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IT Services Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  IT Services & Solutions
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive IT services to modernize your infrastructure and accelerate your digital transformation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {itServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/80 backdrop-blur-sm border border-green-400/20 rounded-xl p-4 md:p-6 lg:p-8 hover:border-green-400/40 transition-all duration-300 group h-full flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <service.icon className="w-8 h-8 md:w-12 md:h-12 text-green-400" />
                      {service.popular && (
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold px-2 md:px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-green-400 transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base flex-grow line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl md:text-3xl font-bold text-green-400">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-400 line-through text-sm md:text-lg">{service.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                        <span className="text-sm md:text-base text-gray-300">{service.rating}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4 md:mb-6">
                      <div className="flex items-center justify-between text-gray-400 mb-2 text-xs md:text-sm">
                        <span>{service.users} users</span>
                        <span>{service.freeTrial} free trial</span>
                      </div>
                    </div>
                    
                    <a
                      href={service.link}
                      className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-2 md:py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-medium text-sm md:text-base mt-auto"
                    >
                      Learn More
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Specialized Services Section */}
          <section className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Specialized Solutions
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Cutting-edge specialized solutions for the future. Quantum computing, autonomous systems, and more.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {specializedServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/80 backdrop-blur-sm border border-orange-400/20 rounded-xl p-4 md:p-6 lg:p-8 hover:border-orange-400/40 transition-all duration-300 group h-full flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <service.icon className="w-8 h-8 md:w-12 md:h-12 text-orange-400" />
                      {service.popular && (
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold px-2 md:px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-orange-400 transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base flex-grow line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl md:text-3xl font-bold text-orange-400">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-400 line-through text-sm md:text-lg">{service.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                        <span className="text-sm md:text-base text-gray-300">{service.rating}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4 md:mb-6">
                      <div className="flex items-center justify-between text-gray-400 mb-2 text-xs md:text-sm">
                        <span>{service.users} users</span>
                        <span>{service.freeTrial} free trial</span>
                      </div>
                    </div>
                    
                    <a
                      href={service.link}
                      className="block w-full bg-gradient-to-r from-orange-600 to-red-600 text-white text-center py-2 md:py-3 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-medium text-sm md:text-base mt-auto"
                    >
                      Explore Solution
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-cyan-100 mb-8">
                  Contact us today to discuss your AI and IT needs. Our experts are ready to help you achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="/contact"
                    className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-50 transition-colors"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-2 text-white hover:text-cyan-100 transition-colors text-lg font-medium"
                    onClick={handlePhoneClick}
                  >
                    <Phone className="w-5 h-5" />
                    <span>+1 302 464 0950</span>
                  </a>
                </div>
                <div className="mt-8 text-cyan-100">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </EnhancedSEO>
    </EnhancedErrorBoundary>
  );
};

export default HomePage;
