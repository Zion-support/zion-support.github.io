'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, DollarSign, Truck, Link, HardDrive, FileCheck, X, Menu } from 'lucide-react';
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

  // Real Micro SAAS Services with actual functionality and pricing
  const microSAASServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Automate project management with machine learning algorithms.',
      icon: '📊',
      price: '$99/month',
      originalPrice: '$199/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt chart automation', 'Budget forecasting'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction', 'Real-time insights', 'Automated reporting'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      trialDays: 14,
      setupFee: 0,
      integrations: ['Slack', 'Microsoft Teams', 'Jira', 'Asana', 'Trello', 'Monday.com']
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation, smart scheduling, and audience analysis. Generate viral content and optimize engagement.',
      icon: '📱',
      price: '$79/month',
      originalPrice: '$149/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Hashtag optimization', 'Competitor analysis', 'Multi-platform posting', 'Engagement automation'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '50% better ROI', 'Viral content generation', 'Automated responses'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing',
      trialDays: 7,
      setupFee: 0,
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube']
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling. Make data-driven decisions with advanced machine learning.',
      icon: '📈',
      price: '$149/month',
      originalPrice: '$299/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reports', 'Data visualization', 'Automated alerts'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', 'Faster decision making', 'Predictive insights', 'Automated reporting'],
      link: '/ai-analytics',
      popular: true,
      category: 'Analytics',
      trialDays: 14,
      setupFee: 0,
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Mixpanel', 'Amplitude', 'Tableau']
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Transform your email marketing with AI-powered content generation, automation, and personalization. Increase open rates and conversions significantly.',
      icon: '📧',
      price: '$99/month',
      originalPrice: '$199/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Personalization engine', 'Deliverability optimization', 'List management'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', 'Better deliverability', 'Personalized content', 'Automated workflows'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing',
      trialDays: 14,
      setupFee: 0,
      integrations: ['Mailchimp', 'Constant Contact', 'SendGrid', 'Campaign Monitor', 'AWeber', 'ConvertKit']
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot and sentiment analysis. Reduce support costs while improving customer satisfaction.',
      icon: '🤖',
      price: '$149/month',
      originalPrice: '$299/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Sentiment analysis', 'Knowledge base integration', 'Escalation management'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', 'Reduced support costs', 'Multilingual support', 'Real-time insights'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Customer Service',
      trialDays: 14,
      setupFee: 0,
      integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Help Scout', 'LiveChat', 'Crisp']
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection, security scanning, and optimization. Improve code quality and reduce technical debt.',
      icon: '🔍',
      price: '$89/month',
      originalPrice: '$179/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Code quality metrics', 'Refactoring suggestions', 'Style guide enforcement', 'Documentation generation'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', 'Faster development cycles', 'Security compliance', 'Automated documentation'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development',
      trialDays: 7,
      setupFee: 0,
      integrations: ['GitHub', 'GitLab', 'Bitbucket', 'VS Code', 'IntelliJ', 'Sublime Text']
    },
    {
      title: 'AI Video Generator Pro',
      description: 'Create professional videos with AI-powered editing, content generation, and voice synthesis. Produce high-quality videos in minutes, not hours.',
      icon: '🎥',
      price: '$199/month',
      originalPrice: '$399/month',
      features: ['AI video editing', 'Auto-generated content', 'Voice synthesis', 'Multi-language support', 'Template library', 'Brand customization', '4K rendering', 'Social media optimization'],
      benefits: ['90% time reduction', 'Professional quality', 'Unlimited exports', 'Cost-effective production', 'Multiple formats', 'Brand consistency'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Content Creation',
      trialDays: 7,
      setupFee: 0,
      integrations: ['YouTube', 'Vimeo', 'TikTok', 'Instagram', 'Facebook', 'LinkedIn']
    },
    {
      title: 'AI Voice Cloning Studio',
      description: 'Create realistic voice clones for content creation, accessibility, and multilingual support. Generate natural-sounding speech in any language.',
      icon: '🎤',
      price: '$129/month',
      originalPrice: '$259/month',
      features: ['High-quality voice cloning', 'Multiple voice options', 'Real-time synthesis', 'API integration', 'Emotion control', 'Accent adaptation', 'Voice training', 'Batch processing'],
      benefits: ['99% voice accuracy', 'Multiple languages', 'Real-time processing', 'Natural intonation', 'Custom voices', 'API access'],
      link: '/ai-voice-cloning',
      popular: false,
      category: 'Content Creation',
      trialDays: 7,
      setupFee: 0,
      integrations: ['REST API', 'Webhook', 'SDK', 'Zapier', 'Make', 'Pabbly']
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management and exception handling. Streamline operations and reduce manual work.',
      icon: '⚡',
      price: '$179/month',
      originalPrice: '$359/month',
      features: ['Process automation', 'Smart routing', 'Exception handling', 'Analytics dashboard', 'Custom triggers', 'Integration hub', 'Conditional logic', 'Approval workflows'],
      benefits: ['80% process automation', '60% cost reduction', 'Real-time monitoring', 'Error reduction', 'Custom workflows', 'API integrations'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation',
      trialDays: 14,
      setupFee: 0,
      integrations: ['Zapier', 'Make', 'Microsoft Power Automate', 'UiPath', 'Automation Anywhere', 'Blue Prism']
    },
    {
      title: 'AI Fashion Design Studio',
      description: 'Create stunning fashion designs with AI-powered design tools and trend analysis. Stay ahead of fashion trends with machine learning insights.',
      icon: '👗',
      price: '$159/month',
      originalPrice: '$319/month',
      features: ['AI design generation', 'Trend analysis', 'Color matching', 'Pattern creation', '3D visualization', 'Fabric simulation', 'Size optimization', 'Sustainability scoring'],
      benefits: ['50% design time reduction', 'Trend-aware designs', 'Unlimited creativity', 'Market insights', '3D previews', 'Sustainable options'],
      link: '/ai-fashion-design',
      popular: false,
      category: 'Design',
      trialDays: 7,
      setupFee: 0,
      integrations: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Canva', 'Cricut', 'Silhouette']
    },
    {
      title: 'AI Music Composition Suite',
      description: 'Compose original music with AI-powered composition tools and royalty-free licensing. Create professional music for any project.',
      icon: '🎵',
      price: '$119/month',
      originalPrice: '$239/month',
      features: ['AI composition', 'Multiple genres', 'Instrument simulation', 'Royalty-free music', 'Mood matching', 'Collaboration tools', 'Mastering services', 'Custom instruments'],
      benefits: ['Unlimited compositions', 'Professional quality', 'No copyright issues', 'Custom branding', 'Multiple formats', 'Collaborative editing'],
      link: '/ai-music-composition',
      popular: false,
      category: 'Content Creation',
      trialDays: 7,
      setupFee: 0,
      integrations: ['Spotify', 'Apple Music', 'YouTube Music', 'SoundCloud', 'Bandcamp', 'DistroKid']
    },
    {
      title: 'AI Fitness Coach Pro',
      description: 'Personalized fitness coaching with AI-powered workout plans and nutrition guidance. Achieve your fitness goals with intelligent recommendations.',
      icon: '💪',
      price: '$89/month',
      originalPrice: '$179/month',
      features: ['Personalized workouts', 'Progress tracking', 'Nutrition advice', 'Goal setting', 'Wearable integration', 'Community features', 'Injury prevention', 'Recovery planning'],
      benefits: ['Better results', 'Motivation boost', 'Flexible scheduling', 'Health insights', 'Progress tracking', 'Community support'],
      link: '/ai-fitness-coach',
      popular: false,
      category: 'Health & Wellness',
      trialDays: 14,
      setupFee: 0,
      integrations: ['Apple Health', 'Google Fit', 'Fitbit', 'Garmin', 'Samsung Health', 'MyFitnessPal']
    },
    {
      title: 'AI Sales Automation Hub',
      description: 'Boost sales with AI-powered lead generation, conversion optimization, and CRM integration. Increase revenue with intelligent sales automation.',
      icon: '💰',
      price: '$199/month',
      originalPrice: '$399/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'CRM integration', 'Pipeline management', 'Performance analytics', 'Email sequences', 'Call scheduling'],
      benefits: ['35% more leads', '50% conversion increase', '25% revenue growth', 'Better lead quality', 'Automated follow-ups', 'Predictive insights'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales',
      trialDays: 14,
      setupFee: 0,
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'Monday.com', 'Airtable']
    },
    {
      title: 'AI Data Visualization Pro',
      description: 'Transform complex data into interactive visualizations and storytelling dashboards. Make data accessible and actionable for everyone.',
      icon: '📊',
      price: '$139/month',
      originalPrice: '$279/month',
      features: ['Interactive dashboards', 'Real-time visualization', 'Custom charts', 'Data storytelling', 'Collaborative features', 'Export options', 'Mobile optimization', 'White-label options'],
      benefits: ['Faster insights', 'Better decisions', 'Stunning presentations', 'Data democratization', 'Real-time updates', 'Collaborative analysis'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics',
      trialDays: 14,
      setupFee: 0,
      integrations: ['Tableau', 'Power BI', 'Looker', 'Domo', 'Qlik', 'Sisense']
    },
    {
      title: 'AI 3D Generation Studio',
      description: 'Create 3D models and environments with AI technology for games, VR, and AR applications. Bring your ideas to life in three dimensions.',
      icon: '🎮',
      price: '$249/month',
      originalPrice: '$499/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support', 'Physics simulation', 'Rendering optimization', 'Asset library', 'Collaboration tools'],
      benefits: ['Professional 3D content', 'Time savings', 'Creative freedom', 'Industry standards', 'Multiple formats', 'Real-time preview'],
      link: '/ai-3d-generation',
      popular: false,
      category: 'Design',
      trialDays: 7,
      setupFee: 0,
      integrations: ['Unity', 'Unreal Engine', 'Blender', 'Maya', '3ds Max', 'Cinema 4D']
    },
    {
      title: 'AI Customer Support Pro',
      description: 'Advanced customer support with AI-powered ticket management and sentiment analysis. Provide exceptional customer service at scale.',
      icon: '🎧',
      price: '$169/month',
      originalPrice: '$339/month',
      features: ['Ticket automation', 'Sentiment analysis', 'Knowledge base', 'Multi-channel support', 'Escalation management', 'Performance metrics', 'Live chat integration', 'Call center support'],
      benefits: ['Faster resolution', 'Higher satisfaction', '24/7 availability', 'Reduced workload', 'Multilingual support', 'Real-time insights'],
      link: '/ai-customer-support',
      popular: true,
      category: 'Customer Service',
      trialDays: 14,
      setupFee: 0,
      integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Help Scout', 'LiveChat', 'Crisp']
    },
    {
      title: 'AI Content Writer Pro',
      description: 'Generate high-quality content with AI-powered writing assistance and SEO optimization. Create engaging content that ranks and converts.',
      icon: '✍️',
      price: '$79/month',
      originalPrice: '$159/month',
      features: ['Blog posts', 'Social media content', 'Product descriptions', 'SEO optimization', 'Plagiarism check', 'Tone adjustment', 'Multi-language support', 'Brand voice training'],
      benefits: ['10x content output', 'SEO optimized', 'Brand voice consistency', 'Quality assurance', 'Multiple formats', 'Plagiarism-free'],
      link: '/ai-content-writer',
      popular: true,
      category: 'Content Creation',
      trialDays: 7,
      setupFee: 0,
      integrations: ['WordPress', 'Medium', 'LinkedIn', 'Twitter', 'Facebook', 'Instagram']
    },
    {
      title: 'AI Inventory Manager Pro',
      description: 'Optimize inventory with AI-powered demand forecasting and supply chain management. Reduce costs and prevent stockouts with intelligent predictions.',
      icon: '📦',
      price: '$149/month',
      originalPrice: '$299/month',
      features: ['Demand forecasting', 'Stock optimization', 'Reorder alerts', 'Analytics dashboard', 'Supplier management', 'Cost optimization', 'Multi-location support', 'Seasonal adjustments'],
      benefits: ['30% inventory reduction', '99% stock accuracy', 'Zero stockouts', 'Reduced carrying costs', 'Predictive insights', 'Automated reordering'],
      link: '/ai-inventory-manager',
      popular: false,
      category: 'Operations',
      trialDays: 14,
      setupFee: 0,
      integrations: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Amazon', 'eBay']
    },
    {
      title: 'AI HR Assistant Pro',
      description: 'Streamline HR processes with AI-powered recruitment, management, and employee analytics. Build better teams with intelligent HR solutions.',
      icon: '👥',
      price: '$189/month',
      originalPrice: '$379/month',
      features: ['Resume screening', 'Interview scheduling', 'Employee analytics', 'Performance tracking', 'Skills assessment', 'Retention insights', 'Onboarding automation', 'Compliance monitoring'],
      benefits: ['50% faster hiring', 'Better candidate matching', 'Reduced bias', 'Improved retention', 'Automated screening', 'Performance insights'],
      link: '/ai-hr-assistant',
      popular: false,
      category: 'Human Resources',
      trialDays: 14,
      setupFee: 0,
      integrations: ['Workday', 'BambooHR', 'ADP', 'Paychex', 'Gusto', 'Zenefits']
    },
    {
      title: 'AI Financial Advisor Pro',
      description: 'Personalized financial planning with AI-powered investment advice and risk management. Make smarter financial decisions with intelligent guidance.',
      icon: '💼',
      price: '$299/month',
      originalPrice: '$599/month',
      features: ['Portfolio analysis', 'Risk assessment', 'Tax optimization', 'Retirement planning', 'Market insights', 'Goal tracking', 'Tax loss harvesting', 'Rebalancing alerts'],
      benefits: ['Better returns', 'Risk management', 'Tax savings', 'Financial security', 'Automated rebalancing', 'Market insights'],
      link: '/ai-financial-advisor',
      popular: false,
      category: 'Finance',
      trialDays: 14,
      setupFee: 0,
      integrations: ['Mint', 'Personal Capital', 'YNAB', 'Quicken', 'TurboTax', 'H&R Block']
    },
    {
      title: 'AI Legal Assistant Pro',
      description: 'Legal document analysis and contract review with AI technology and compliance monitoring. Streamline legal processes with intelligent automation.',
      icon: '⚖️',
      price: '$399/month',
      originalPrice: '$799/month',
      features: ['Contract analysis', 'Legal research', 'Document generation', 'Compliance checking', 'Risk assessment', 'Case law research', 'Due diligence', 'Contract templates'],
      benefits: ['Faster reviews', 'Risk identification', 'Cost savings', 'Compliance assurance', 'Automated research', 'Template generation'],
      link: '/ai-legal-assistant',
      popular: false,
      category: 'Legal',
      trialDays: 7,
      setupFee: 0,
      integrations: ['Clio', 'MyCase', 'PracticePanther', 'Smokeball', 'Filevine', 'Case Status']
    },
    {
      title: 'AI SEO Optimizer',
      description: 'Boost your website rankings with AI-powered SEO analysis and optimization recommendations. Dominate search results with intelligent SEO strategies.',
      icon: '🔍',
      price: '$129/month',
      originalPrice: '$259/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis', 'Rank tracking', 'Link building', 'Local SEO', 'Schema markup'],
      benefits: ['Higher rankings', 'More organic traffic', 'Better visibility', 'Competitive advantage', 'Automated optimization', 'Real-time monitoring'],
      link: '/ai-seo-optimizer',
      popular: true,
      category: 'Marketing',
      trialDays: 14,
      setupFee: 0,
      integrations: ['Google Search Console', 'Google Analytics', 'SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog']
    },
    {
      title: 'AI Translation Hub',
      description: 'Professional translation services with AI-powered accuracy and cultural adaptation. Break language barriers with intelligent translation technology.',
      icon: '🌐',
      price: '$159/month',
      originalPrice: '$319/month',
      features: ['100+ languages', 'Cultural adaptation', 'Industry-specific terms', 'Real-time translation', 'Quality assurance', 'API integration', 'Document translation', 'Voice translation'],
      benefits: ['99% accuracy', 'Cultural sensitivity', 'Faster delivery', 'Cost effective', 'Real-time translation', 'API access'],
      link: '/ai-translation-hub',
      popular: false,
      category: 'Communication',
      trialDays: 7,
      setupFee: 0,
      integrations: ['Google Translate', 'Microsoft Translator', 'DeepL', 'Amazon Translate', 'IBM Watson', 'Yandex Translate']
    },
    {
      title: 'AI Security Monitor',
      description: 'Advanced cybersecurity monitoring with AI-powered threat detection and response. Protect your business with intelligent security solutions.',
      icon: '🛡️',
      price: '$199/month',
      originalPrice: '$399/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance monitoring', 'Security analytics', '24/7 monitoring', 'Penetration testing', 'Security training'],
      benefits: ['Proactive protection', 'Faster response', 'Compliance assurance', 'Risk reduction', 'Real-time alerts', 'Automated response'],
      link: '/ai-security-monitor',
      popular: true,
      category: 'Security',
      trialDays: 14,
      setupFee: 0,
      integrations: ['Splunk', 'IBM QRadar', 'LogRhythm', 'Rapid7', 'Nessus', 'OpenVAS']
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'Optimize your online store with AI-powered product recommendations and conversion optimization. Increase sales with intelligent e-commerce solutions.',
      icon: '🛒',
      price: '$179/month',
      originalPrice: '$359/month',
      features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer segmentation', 'A/B testing', 'Analytics dashboard', 'Cart abandonment recovery', 'Personalized shopping'],
      benefits: ['Higher conversions', 'Increased revenue', 'Better customer experience', 'Data-driven decisions', 'Personalized recommendations', 'Automated optimization'],
      link: '/ai-ecommerce-optimizer',
      popular: true,
      category: 'E-commerce',
      trialDays: 14,
      setupFee: 0,
      integrations: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Amazon', 'eBay']
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, decision-making, and intelligent automation. Transform your data into actionable insights.',
      icon: Brain,
      price: '$1,500/month',
      originalPrice: '$3,000/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization', 'Real-time Inference', 'Model Versioning'],
      color: 'text-purple-400',
      category: 'AI Development',
      trialDays: 30,
      setupFee: 0,
      integrations: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost', 'LightGBM']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI. Build intelligent language applications.',
      icon: MessageSquare,
      price: '$1,200/month',
      originalPrice: '$2,400/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Named Entity Recognition', 'Text Summarization', 'Question Answering', 'Language Modeling'],
      color: 'text-blue-400',
      category: 'Language AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['OpenAI GPT', 'Google BERT', 'Hugging Face', 'SpaCy', 'NLTK', 'Transformers']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and visual intelligence. See the world through AI eyes.',
      icon: Eye,
      price: '$1,800/month',
      originalPrice: '$3,600/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'OCR Processing', 'Medical Imaging', 'Quality Inspection', 'Augmented Reality'],
      color: 'text-green-400',
      category: 'Visual AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['OpenCV', 'YOLO', 'ResNet', 'EfficientNet', 'Detectron2', 'MediaPipe']
    },
    {
      title: 'AI Automation Suite',
      description: 'Intelligent process automation with decision-making capabilities and workflow optimization. Automate complex business processes.',
      icon: Zap,
      price: '$1,400/month',
      originalPrice: '$2,800/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'RPA Integration', 'Smart Routing', 'Cognitive Automation', 'Process Mining'],
      color: 'text-cyan-400',
      category: 'Automation',
      trialDays: 30,
      setupFee: 0,
      integrations: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate', 'Zapier', 'Make']
    },
    {
      title: 'AI Data Intelligence',
      description: 'Transform complex data into interactive visualizations and actionable business insights. Make data-driven decisions with confidence.',
      icon: BarChart,
      price: '$1,100/month',
      originalPrice: '$2,200/month',
      features: ['Interactive Dashboards', 'Real-time Visualization', 'Custom Charts', 'Data Storytelling', 'Predictive Modeling', 'Anomaly Detection', 'Data Mining', 'Statistical Analysis'],
      color: 'text-orange-400',
      category: 'Data Science',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Tableau', 'Power BI', 'Looker', 'Domo', 'Qlik', 'Sisense']
    },
    {
      title: 'AI 3D & AR Solutions',
      description: 'Create 3D models, environments, and augmented reality experiences with AI technology. Build immersive digital experiences.',
      icon: Cube,
      price: '$1,600/month',
      originalPrice: '$3,200/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support', 'Spatial Computing', 'Mixed Reality', 'Holographic Displays', 'Spatial Mapping'],
      color: 'text-pink-400',
      category: 'Immersive Tech',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Unity', 'Unreal Engine', 'ARCore', 'ARKit', 'WebXR', 'OpenXR']
    },
    {
      title: 'AI Voice & Audio',
      description: 'Advanced voice cloning, text-to-speech, and audio processing solutions. Create natural-sounding voice applications.',
      icon: Mic,
      price: '$1,300/month',
      originalPrice: '$2,600/month',
      features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support', 'Audio Enhancement', 'Voice Biometrics', 'Speech Recognition', 'Audio Analysis'],
      color: 'text-indigo-400',
      category: 'Audio AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Amazon Polly', 'Google Cloud TTS', 'Azure Speech', 'IBM Watson', 'ElevenLabs', 'Resemble AI']
    },
    {
      title: 'AI Content Intelligence',
      description: 'Automated content creation, optimization, and management for marketing and communication. Scale your content production.',
      icon: FileText,
      price: '$1,000/month',
      originalPrice: '$2,000/month',
      features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Content Strategy', 'Brand Voice Training', 'Content Personalization', 'Multimedia Generation'],
      color: 'text-yellow-400',
      category: 'Content AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer', 'Sprout Social']
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced forecasting, trend analysis, and predictive modeling with machine learning. Predict the future with confidence.',
      icon: TrendingUp,
      price: '$1,700/month',
      originalPrice: '$3,400/month',
      features: ['Sales Forecasting', 'Demand Prediction', 'Risk Assessment', 'Trend Analysis', 'Market Intelligence', 'Scenario Planning', 'Time Series Analysis', 'Ensemble Methods'],
      color: 'text-red-400',
      category: 'Predictive AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Prophet', 'ARIMA', 'LSTM', 'XGBoost', 'LightGBM', 'CatBoost']
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce, content, and user experience. Increase engagement with smart recommendations.',
      icon: Target,
      price: '$1,400/month',
      originalPrice: '$2,800/month',
      features: ['Product Recommendations', 'Content Personalization', 'User Behavior Analysis', 'A/B Testing', 'Collaborative Filtering', 'Real-time Adaptation', 'Cold Start Handling', 'Multi-armed Bandits'],
      color: 'text-teal-400',
      category: 'Personalization',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Apache Spark', 'TensorFlow Recommenders', 'Amazon Personalize', 'Google Recommendations AI', 'Azure Personalizer', 'Recombee']
    },
    {
      title: 'AI Security & Fraud Detection',
      description: 'Advanced fraud prevention, security monitoring, and threat intelligence. Protect your business with AI-powered security.',
      icon: Shield,
      price: '$1,900/month',
      originalPrice: '$3,800/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System', 'Threat Intelligence', 'Compliance Monitoring', 'Behavioral Analysis', 'Anomaly Detection'],
      color: 'text-red-500',
      category: 'Security AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Splunk', 'IBM QRadar', 'LogRhythm', 'Rapid7', 'Nessus', 'OpenVAS']
    },
    {
      title: 'AI Document Intelligence',
      description: 'Intelligent document analysis, data extraction, and automated processing. Digitize and understand your documents with AI.',
      icon: Search,
      price: '$1,200/month',
      originalPrice: '$2,400/month',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Form Recognition', 'Contract Analysis', 'Knowledge Management', 'Document Understanding', 'Automated Indexing'],
      color: 'text-gray-400',
      category: 'Document AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Google Cloud Document AI', 'Azure Form Recognizer', 'Amazon Textract', 'IBM Watson Discovery', 'Adobe Acrobat', 'ABBYY FineReader']
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnosis, treatment planning, and healthcare optimization. Improve patient outcomes with intelligent healthcare solutions.',
      icon: Stethoscope,
      price: '$2,200/month',
      originalPrice: '$4,400/month',
      features: ['Medical Imaging', 'Diagnostic Support', 'Treatment Planning', 'Drug Discovery', 'Patient Monitoring', 'Clinical Decision Support', 'Medical Records Analysis', 'Predictive Health'],
      color: 'text-emerald-400',
      category: 'Healthcare AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Epic', 'Cerner', 'Allscripts', 'NextGen', 'eClinicalWorks', 'athenahealth']
    },
    {
      title: 'AI Financial Intelligence',
      description: 'Advanced financial analysis, trading algorithms, and risk management. Make smarter financial decisions with AI insights.',
      icon: DollarSign,
      price: '$1,800/month',
      originalPrice: '$3,600/month',
      features: ['Algorithmic Trading', 'Risk Assessment', 'Portfolio Optimization', 'Fraud Detection', 'Credit Scoring', 'Market Analysis', 'Regulatory Compliance', 'Financial Forecasting'],
      color: 'text-green-500',
      category: 'FinTech AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Bloomberg', 'Refinitiv', 'FactSet', 'Morningstar', 'Yahoo Finance', 'Alpha Vantage']
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management, logistics optimization, and demand forecasting. Optimize your supply chain with AI.',
      icon: Truck,
      price: '$1,600/month',
      originalPrice: '$3,200/month',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Quality Control', 'Sustainability Tracking', 'Risk Management', 'Cost Optimization'],
      color: 'text-blue-500',
      category: 'Supply Chain AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['SAP', 'Oracle', 'JDA', 'Manhattan Associates', 'Blue Yonder', 'Kinaxis']
    },
    {
      title: 'AI Energy Management',
      description: 'Smart energy optimization, renewable energy integration, and sustainability solutions. Build a sustainable future with AI.',
      icon: Zap,
      price: '$1,500/month',
      originalPrice: '$3,000/month',
      features: ['Energy Optimization', 'Renewable Integration', 'Grid Management', 'Carbon Tracking', 'Predictive Maintenance', 'Smart Buildings', 'Load Forecasting', 'Demand Response'],
      color: 'text-yellow-500',
      category: 'Energy AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Schneider Electric', 'Siemens', 'GE Digital', 'ABB', 'Honeywell', 'Johnson Controls']
    }
  ];

  const itServices = [
    {
      title: 'Cloud Migration & Management',
      description: 'Comprehensive cloud migration, setup, optimization, and management services. Move to the cloud with confidence and expertise.',
      icon: Cloud,
      price: '$1,299/month',
      originalPrice: '$2,599/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Multi-cloud Strategy', 'Disaster Recovery', 'Performance Monitoring', 'Compliance Management'],
      color: 'text-blue-400',
      category: 'Cloud Computing',
      trialDays: 30,
      setupFee: 0,
      integrations: ['AWS', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud', 'Oracle Cloud', 'Alibaba Cloud']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions with threat detection, prevention, and compliance. Protect your business from cyber threats.',
      icon: Shield,
      price: '$1,599/month',
      originalPrice: '$3,199/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance Management', 'Penetration Testing', 'Security Training', 'Risk Assessment'],
      color: 'text-red-400',
      category: 'Security',
      trialDays: 30,
      setupFee: 0,
      integrations: ['CrowdStrike', 'SentinelOne', 'Palo Alto', 'Fortinet', 'Check Point', 'Cisco']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring. Accelerate your development process.',
      icon: Settings,
      price: '$1,199/month',
      originalPrice: '$2,399/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'GitOps Implementation', 'Microservices Architecture', 'Performance Optimization'],
      color: 'text-green-400',
      category: 'DevOps',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps', 'CircleCI', 'Travis CI']
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and analytics. Optimize your data infrastructure.',
      icon: Database,
      price: '$899/month',
      originalPrice: '$1,799/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Data Migration', 'Real-time Analytics', 'Scalability Planning', 'Monitoring & Alerting'],
      color: 'text-purple-400',
      category: 'Data Management',
      trialDays: 30,
      setupFee: 0,
      integrations: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Cassandra']
    },
    {
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting for digital transformation, optimization, and innovation. Transform your business with technology.',
      icon: Briefcase,
      price: '$1,000/month',
      originalPrice: '$2,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Change Management', 'ROI Analysis', 'Technology Roadmap', 'Innovation Strategy'],
      color: 'text-yellow-400',
      category: 'Consulting',
      trialDays: 30,
      setupFee: 0,
      integrations: ['ServiceNow', 'Jira', 'Confluence', 'Slack', 'Microsoft Teams', 'Zoom']
    },
    {
      title: 'Network Infrastructure',
      description: 'Design and implement robust network infrastructure solutions with security and performance optimization. Build reliable networks.',
      icon: Globe,
      price: '$1,400/month',
      originalPrice: '$2,800/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring', 'SD-WAN Solutions', 'Network Automation', 'Load Balancing', 'Traffic Management'],
      color: 'text-indigo-400',
      category: 'Networking',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Cisco', 'Juniper', 'Aruba', 'Fortinet', 'Palo Alto', 'F5']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development with modern frameworks. Build amazing mobile experiences.',
      icon: Smartphone,
      price: '$1,500/month',
      originalPrice: '$3,000/month',
      features: ['iOS/Android Apps', 'Cross-platform Development', 'UI/UX Design', 'App Store Optimization', 'Progressive Web Apps', 'Mobile Security', 'Performance Optimization', 'Analytics Integration'],
      color: 'text-pink-400',
      category: 'Mobile Development',
      trialDays: 30,
      setupFee: 0,
      integrations: ['React Native', 'Flutter', 'Xamarin', 'Ionic', 'Cordova', 'PhoneGap']
    },
    {
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies and performance optimization. Build fast, scalable web solutions.',
      icon: Code,
      price: '$1,200/month',
      originalPrice: '$2,400/month',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization', 'Progressive Web Apps', 'Microservices Architecture', 'Cloud Deployment', 'Security Implementation'],
      color: 'text-cyan-400',
      category: 'Web Development',
      trialDays: 30,
      setupFee: 0,
      integrations: ['React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP']
    },
    {
      title: 'Data Analytics & BI',
      description: 'Business intelligence and data analytics solutions with real-time insights. Turn data into business value.',
      icon: BarChart,
      price: '$1,300/month',
      originalPrice: '$2,600/month',
      features: ['Data Warehousing', 'Business Intelligence', 'Reporting Dashboards', 'Data Mining', 'Predictive Analytics', 'Data Visualization', 'ETL Processes', 'Data Governance'],
      color: 'text-orange-400',
      category: 'Data Analytics',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Tableau', 'Power BI', 'Looker', 'Domo', 'Qlik', 'Sisense']
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support and system maintenance services with proactive monitoring. Keep your systems running smoothly.',
      icon: Wrench,
      price: '$800/month',
      originalPrice: '$1,600/month',
      features: ['24/7 Support', 'System Maintenance', 'Software Updates', 'Hardware Management', 'Remote Monitoring', 'Help Desk Services', 'Incident Management', 'Change Management'],
      color: 'text-gray-400',
      category: 'Support',
      trialDays: 30,
      setupFee: 0,
      integrations: ['ServiceNow', 'Jira Service Management', 'Freshservice', 'ManageEngine', 'Spiceworks', 'Lansweeper']
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development, cryptocurrency solutions, and Web3 applications. Build the future of decentralized technology.',
      icon: Lock,
      price: '$2,000/month',
      originalPrice: '$4,000/month',
      features: ['Smart Contracts', 'DApp Development', 'Token Creation', 'DeFi Solutions', 'NFT Marketplaces', 'Web3 Integration', 'Blockchain Consulting', 'Security Audits'],
      color: 'text-yellow-500',
      category: 'Blockchain',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Ethereum', 'Polygon', 'Binance Smart Chain', 'Solana', 'Cardano', 'Polkadot']
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Internet of Things development, implementation, and edge computing solutions. Connect and optimize your devices.',
      icon: Cpu,
      price: '$1,600/month',
      originalPrice: '$3,200/month',
      features: ['IoT Device Development', 'Sensor Integration', 'Data Collection', 'Real-time Monitoring', 'Edge Computing', 'IoT Security', 'Device Management', 'Analytics & Insights'],
      color: 'text-green-500',
      category: 'IoT',
      trialDays: 30,
      setupFee: 0,
      integrations: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'IBM Watson IoT', 'ThingWorx', 'PTC']
    },
    {
      title: 'AI Infrastructure',
      description: 'AI infrastructure setup, GPU clusters, and machine learning platform deployment. Build powerful AI systems.',
      icon: Brain,
      price: '$1,800/month',
      originalPrice: '$3,600/month',
      features: ['GPU Cluster Setup', 'ML Platform Deployment', 'Model Serving', 'Data Pipeline Setup', 'AI Model Training', 'MLOps Implementation', 'Model Monitoring', 'Auto-scaling'],
      color: 'text-purple-500',
      category: 'AI Infrastructure',
      trialDays: 30,
      setupFee: 0,
      integrations: ['NVIDIA', 'AMD', 'Intel', 'AWS SageMaker', 'Azure ML', 'Google AI Platform']
    },
    {
      title: 'Enterprise Integration',
      description: 'Enterprise system integration, API development, and legacy system modernization. Connect your systems seamlessly.',
      icon: Link,
      price: '$1,400/month',
      originalPrice: '$2,800/month',
      features: ['API Development', 'System Integration', 'Legacy Modernization', 'Data Synchronization', 'Workflow Automation', 'Enterprise Architecture', 'Middleware Solutions', 'Real-time Integration'],
      color: 'text-blue-500',
      category: 'Integration',
      trialDays: 30,
      setupFee: 0,
      integrations: ['MuleSoft', 'Dell Boomi', 'Informatica', 'Talend', 'Apache Kafka', 'RabbitMQ']
    },
    {
      title: 'Disaster Recovery & Backup',
      description: 'Comprehensive disaster recovery, backup solutions, and business continuity planning. Protect your business from disasters.',
      icon: HardDrive,
      price: '$1,100/month',
      originalPrice: '$2,200/month',
      features: ['Backup Solutions', 'Disaster Recovery', 'Business Continuity', 'Data Replication', 'Recovery Testing', 'Compliance Backup', 'Cloud Backup', 'On-premises Backup'],
      color: 'text-red-500',
      category: 'Data Protection',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Veeam', 'Commvault', 'Acronis', 'Carbonite', 'Druva', 'Rubrik']
    },
    {
      title: 'Compliance & Governance',
      description: 'IT compliance, governance, and regulatory adherence solutions. Stay compliant with industry regulations.',
      icon: FileCheck,
      price: '$1,300/month',
      originalPrice: '$2,600/month',
      features: ['Compliance Management', 'Risk Assessment', 'Audit Preparation', 'Policy Development', 'Training Programs', 'Documentation', 'Monitoring & Reporting', 'Regulatory Updates'],
      color: 'text-indigo-500',
      category: 'Compliance',
      trialDays: 30,
      setupFee: 0,
      integrations: ['GRC Platforms', 'Compliance Software', 'Risk Management Tools', 'Audit Software', 'Policy Management', 'Training Platforms']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 neural-network-bg">
      {/* Performance and SEO Optimizers */}
      <PerformanceOptimizer />
      <SEOOptimizer />
      <AccessibilityEnhancer />
      <Analytics />
      <SecurityEnhancer />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="cyber-grid absolute inset-0 opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="cyber-text-3d text-6xl md:text-8xl font-bold mb-6">
                Zion Tech Group
              </h1>
              <p className="neon-text text-2xl md:text-3xl mb-8 font-light">
                AI-Powered Enterprise Solutions & Digital Transformation
              </p>
              <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge AI technology, quantum computing, autonomous systems, 
                and intelligent automation. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="cyber-button px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="futuristic-glow px-8 py-4 text-lg font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 text-white"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                <div className="cyber-card p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                  <div className="text-gray-300">Average ROI</div>
                </div>
                <div className="cyber-card p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div className="cyber-card p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
                  <div className="text-gray-300">Efficiency Gains</div>
                </div>
                <div className="cyber-card p-6 text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-gray-300">AI Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-6xl font-bold mb-6">
              Micro SAAS Solutions
            </h2>
            <p className="neon-text text-xl md:text-2xl mb-8">
              Powerful AI-powered tools for every business need
            </p>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              Choose from our comprehensive suite of micro SAAS solutions designed to automate, 
              optimize, and transform your business operations with cutting-edge AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {microSAASServices.map((service, index) => (
              <div
                key={service.title}
                className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.trialDays} days free trial • No setup fee
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    className="w-full cyber-button py-3 text-center block font-semibold"
                  >
                    Get Started
                  </a>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full futuristic-glow py-3 text-center block font-semibold text-white"
                  >
                    Contact Sales
                  </a>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="text-xs text-gray-400 text-center">
                    Category: {service.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 relative">
        <div className="cyber-scan-line"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-6xl font-bold mb-6">
              AI Services
            </h2>
            <p className="neon-text text-xl md:text-2xl mb-8">
              Advanced artificial intelligence solutions for enterprise
            </p>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              Leverage the power of artificial intelligence to transform your business operations, 
              enhance decision-making, and unlock new opportunities for growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={service.title}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <service.icon className={`w-16 h-16 mx-auto mb-4 ${service.color}`} />
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.trialDays} days free trial • No setup fee
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <a
                    href={`/ai-services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full cyber-button py-3 text-center block font-semibold"
                  >
                    Learn More
                  </a>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full futuristic-glow py-3 text-center block font-semibold text-white"
                  >
                    Contact Sales
                  </a>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="text-xs text-gray-400 text-center">
                    Category: {service.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 relative">
        <div className="particle-field"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-6xl font-bold mb-6">
              IT Services
            </h2>
            <p className="neon-text text-xl md:text-2xl mb-8">
              Comprehensive technology solutions for modern businesses
            </p>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              From cloud migration to cybersecurity, our IT services provide the foundation 
              for digital transformation and business growth in the modern era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={service.title}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <service.icon className={`w-16 h-16 mx-auto mb-4 ${service.color}`} />
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.trialDays} days free trial • No setup fee
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <a
                    href={`/it-services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full cyber-button py-3 text-center block font-semibold"
                  >
                    Learn More
                  </a>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full futuristic-glow py-3 text-center block font-semibold text-white"
                  >
                    Contact Sales
                  </a>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="text-xs text-gray-400 text-center">
                    Category: {service.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="cyber-scan-effect"></div>
        <div className="container mx-auto px-4">
          <div className="cyber-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="cyber-text-3d text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="neon-text text-xl md:text-2xl mb-8">
              Get started with our AI-powered solutions today
            </p>
            <p className="text-gray-300 text-lg mb-12">
              Contact us for a free consultation and discover how our cutting-edge technology 
              can revolutionize your business operations and drive unprecedented growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <a 
                  href="tel:+13024640950" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  onClick={handlePhoneClick}
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <Location className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <address className="text-green-400 not-italic">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </address>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="futuristic-glow px-8 py-4 text-lg font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;