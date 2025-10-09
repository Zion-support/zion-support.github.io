import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Package, Mic, PenTool, Box, Shirt, Wifi, Link, Atom } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const microSAASServices = [
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered scheduling, resource allocation, and risk prediction.',
      icon: Calendar,
      category: 'productivity',
      pricing: { starting: 79, period: 'month' },
      features: ['Smart task scheduling', 'Resource optimization', 'Risk prediction', 'Team collaboration', 'Gantt charts', 'Time tracking'],
      benefits: ['Complete projects 30% faster', 'Reduce project risks', 'Better team coordination'],
      popular: false,
      rating: 4.6,
      users: 4200,
      link: 'https://ziontechgroup.com/ai-project-manager'
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for your website with no coding required. Advanced NLP and conversation management.',
      icon: Bot,
      category: 'automation',
      pricing: { starting: 39, period: 'month' },
      features: ['No-code builder', 'Multi-language support', 'Live chat integration', 'Analytics dashboard', 'Custom training', 'API integration'],
      benefits: ['Reduce support costs by 60%', '24/7 customer service', 'Instant responses'],
      popular: true,
      rating: 4.8,
      users: 18500,
      link: 'https://ziontechgroup.com/ai-chatbot-builder'
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing with advanced AI writing tools.',
      icon: PenTool,
      category: 'content',
      pricing: { starting: 49, period: 'month' },
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'SEO optimization', 'Tone adjustment', 'Plagiarism check'],
      benefits: ['Create content 10x faster', 'Consistent brand voice', 'SEO-optimized content'],
      popular: true,
      rating: 4.7,
      users: 22100,
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      id: 'ai-data-visualization',
      name: 'Smart Data Viz',
      description: 'Transform complex data into beautiful, interactive visualizations with AI-powered insights.',
      icon: BarChart,
      category: 'analytics',
      pricing: { starting: 69, period: 'month' },
      features: ['Auto chart generation', 'Interactive dashboards', 'Real-time updates', 'Custom themes', 'Export options', 'Collaboration tools'],
      benefits: ['Make data accessible', 'Faster decision making', 'Professional presentations'],
      popular: false,
      rating: 4.6,
      users: 8900,
      link: 'https://ziontechgroup.com/ai-data-visualization'
    },
    {
      id: 'ai-workflow-automation',
      name: 'Workflow Automation AI',
      description: 'Automate complex business processes with intelligent workflow design and execution.',
      icon: Settings,
      category: 'automation',
      pricing: { starting: 89, period: 'month' },
      features: ['Visual workflow builder', 'API integrations', 'Conditional logic', 'Error handling', 'Performance monitoring', 'Custom triggers'],
      benefits: ['Automate 80% of processes', 'Reduce errors by 95%', 'Save 20+ hours weekly'],
      popular: true,
      rating: 4.9,
      users: 15600,
      link: 'https://ziontechgroup.com/ai-workflow-automation'
    },
    {
      id: 'ai-sales-automation',
      name: 'AI Sales Assistant',
      description: 'Intelligent sales automation with lead scoring, follow-up sequences, and performance analytics.',
      icon: Target,
      category: 'marketing',
      pricing: { starting: 99, period: 'month' },
      features: ['Lead scoring', 'Email sequences', 'Call scheduling', 'CRM integration', 'Performance tracking', 'A/B testing'],
      benefits: ['Increase conversion by 40%', 'Better lead quality', 'Automated follow-ups'],
      popular: true,
      rating: 4.8,
      users: 12800,
      link: 'https://ziontechgroup.com/ai-sales-automation'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Suite',
      description: 'Comprehensive customer support automation with ticket routing, knowledge base, and sentiment analysis.',
      icon: MessageSquare,
      category: 'support',
      pricing: { starting: 59, period: 'month' },
      features: ['Ticket automation', 'Knowledge base', 'Sentiment analysis', 'Multi-channel support', 'Performance metrics', 'Team collaboration'],
      benefits: ['Improve response time by 70%', 'Higher customer satisfaction', 'Reduce support workload'],
      popular: true,
      rating: 4.7,
      users: 19400,
      link: 'https://ziontechgroup.com/ai-customer-support'
    },
    {
      id: 'ai-financial-advisor',
      name: 'AI Financial Advisor',
      description: 'Personalized financial planning and investment advice powered by advanced AI algorithms.',
      icon: DollarSign,
      category: 'finance',
      pricing: { starting: 79, period: 'month' },
      features: ['Portfolio analysis', 'Risk assessment', 'Investment recommendations', 'Market insights', 'Goal tracking', 'Tax optimization'],
      benefits: ['Better investment decisions', 'Risk management', 'Automated rebalancing'],
      popular: false,
      rating: 4.8,
      users: 6700,
      link: 'https://ziontechgroup.com/ai-financial-advisor'
    },
    {
      id: 'ai-hr-assistant',
      name: 'AI HR Assistant',
      description: 'Streamline HR processes with AI-powered recruitment, employee management, and performance analytics.',
      icon: Users,
      category: 'productivity',
      pricing: { starting: 89, period: 'month' },
      features: ['Resume screening', 'Interview scheduling', 'Performance tracking', 'Employee onboarding', 'Compliance monitoring', 'Analytics dashboard'],
      benefits: ['Reduce hiring time by 50%', 'Better candidate matching', 'Improved employee retention'],
      popular: false,
      rating: 4.6,
      users: 11200,
      link: 'https://ziontechgroup.com/ai-hr-assistant'
    },
    {
      id: 'ai-time-tracker',
      name: 'Smart Time Tracker',
      description: 'Intelligent time tracking with automatic categorization, productivity insights, and team management.',
      icon: Clock,
      category: 'productivity',
      pricing: { starting: 29, period: 'month' },
      features: ['Auto time tracking', 'Productivity insights', 'Team management', 'Project tracking', 'Billing integration', 'Mobile app'],
      benefits: ['Accurate time tracking', 'Better productivity insights', 'Automated billing'],
      popular: false,
      rating: 4.7,
      users: 15800,
      link: 'https://ziontechgroup.com/ai-time-tracker'
    },
    {
      id: 'ai-scheduler',
      name: 'AI Smart Scheduler',
      description: 'Intelligent scheduling with conflict resolution, time zone handling, and automated reminders.',
      icon: Calendar,
      category: 'productivity',
      pricing: { starting: 39, period: 'month' },
      features: ['Smart scheduling', 'Conflict resolution', 'Time zone handling', 'Recurring appointments', 'Reminder automation', 'Calendar sync'],
      benefits: ['Reduce scheduling conflicts', 'Save 5+ hours weekly', 'Better time management'],
      popular: true,
      rating: 4.8,
      users: 14200,
      link: 'https://ziontechgroup.com/ai-scheduler'
    },
    {
      id: 'ai-recommendation-engine',
      name: 'AI Recommendation Engine',
      description: 'Powerful recommendation system for e-commerce, content, and personalized user experiences.',
      icon: Target,
      category: 'analytics',
      pricing: { starting: 119, period: 'month' },
      features: ['Personalized recommendations', 'A/B testing', 'Real-time updates', 'Multi-algorithm support', 'Analytics dashboard', 'API integration'],
      benefits: ['Increase sales by 25%', 'Better user engagement', 'Higher conversion rates'],
      popular: true,
      rating: 4.9,
      users: 9800,
      link: 'https://ziontechgroup.com/ai-recommendation-engine'
    },
    {
      id: 'ai-voice-processing',
      name: 'AI Voice Assistant',
      description: 'Advanced voice processing with speech-to-text, text-to-speech, and voice command recognition.',
      icon: Mic,
      category: 'automation',
      pricing: { starting: 69, period: 'month' },
      features: ['Speech recognition', 'Voice synthesis', 'Command processing', 'Multi-language support', 'Custom voice training', 'API integration'],
      benefits: ['Hands-free operation', 'Accessibility improvement', 'Faster data entry'],
      popular: false,
      rating: 4.6,
      users: 7300,
      link: 'https://ziontechgroup.com/ai-voice-processing'
    },
    {
      id: 'ai-image-recognition',
      name: 'AI Image Recognition',
      description: 'Advanced image analysis with object detection, facial recognition, and content moderation.',
      icon: Eye,
      category: 'analytics',
      pricing: { starting: 79, period: 'month' },
      features: ['Object detection', 'Facial recognition', 'Content moderation', 'Image classification', 'Custom model training', 'Batch processing'],
      benefits: ['Automated image processing', 'Better content moderation', 'Enhanced security'],
      popular: false,
      rating: 4.7,
      users: 8500,
      link: 'https://ziontechgroup.com/ai-image-recognition'
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics',
      description: 'Advanced predictive modeling for forecasting, trend analysis, and business intelligence.',
      icon: TrendingUp,
      category: 'analytics',
      pricing: { starting: 149, period: 'month' },
      features: ['Predictive modeling', 'Trend analysis', 'Forecasting', 'Risk assessment', 'Custom algorithms', 'Real-time insights'],
      benefits: ['Better business decisions', 'Risk mitigation', 'Competitive advantage'],
      popular: true,
      rating: 4.9,
      users: 6200,
      link: 'https://ziontechgroup.com/ai-predictive-analytics'
    },
    {
      id: 'ai-3d-generation',
      name: 'AI 3D Generator',
      description: 'Create stunning 3D models and animations with AI-powered generation and editing tools.',
      icon: Box,
      category: 'content',
      pricing: { starting: 99, period: 'month' },
      features: ['3D model generation', 'Animation creation', 'Texture mapping', 'Rendering engine', 'Export options', 'Collaboration tools'],
      benefits: ['Faster 3D creation', 'Cost-effective modeling', 'Professional quality'],
      popular: false,
      rating: 4.6,
      users: 4100,
      link: 'https://ziontechgroup.com/ai-3d-generation'
    },
    {
      id: 'ai-video-generation',
      name: 'AI Video Creator',
      description: 'Generate professional videos with AI-powered editing, effects, and automated production.',
      icon: Video,
      category: 'content',
      pricing: { starting: 79, period: 'month' },
      features: ['Auto video generation', 'Smart editing', 'Effect application', 'Voice synthesis', 'Subtitle generation', 'Export options'],
      benefits: ['Create videos 5x faster', 'Professional quality', 'Cost-effective production'],
      popular: true,
      rating: 4.7,
      users: 13500,
      link: 'https://ziontechgroup.com/ai-video-generation'
    },
    {
      id: 'ai-music-composition',
      name: 'AI Music Composer',
      description: 'Create original music and soundtracks with AI-powered composition and arrangement tools.',
      icon: Music,
      category: 'content',
      pricing: { starting: 59, period: 'month' },
      features: ['Music generation', 'Style adaptation', 'Instrument selection', 'Mixing tools', 'Export options', 'Royalty-free'],
      benefits: ['Unlimited music creation', 'Professional quality', 'No copyright issues'],
      popular: false,
      rating: 4.5,
      users: 6800,
      link: 'https://ziontechgroup.com/ai-music-composition'
    },
    {
      id: 'ai-fashion-design',
      name: 'AI Fashion Designer',
      description: 'Design clothing and accessories with AI-powered fashion design and trend analysis.',
      icon: Shirt,
      category: 'content',
      pricing: { starting: 89, period: 'month' },
      features: ['Design generation', 'Trend analysis', 'Color matching', 'Pattern creation', '3D visualization', 'Size optimization'],
      benefits: ['Faster design process', 'Trend-based designs', 'Reduced waste'],
      popular: false,
      rating: 4.6,
      users: 3200,
      link: 'https://ziontechgroup.com/ai-fashion-design'
    },
    {
      id: 'ai-healthcare-solutions',
      name: 'AI Healthcare Assistant',
      description: 'Comprehensive healthcare AI with symptom analysis, treatment recommendations, and patient monitoring.',
      icon: Stethoscope,
      category: 'healthcare',
      pricing: { starting: 199, period: 'month' },
      features: ['Symptom analysis', 'Treatment suggestions', 'Patient monitoring', 'Medical imaging', 'Drug interaction check', 'HIPAA compliance'],
      benefits: ['Better patient care', 'Reduced diagnosis time', 'Improved accuracy'],
      popular: true,
      rating: 4.9,
      users: 4800,
      link: 'https://ziontechgroup.com/ai-healthcare-solutions'
    },
    {
      id: 'ai-fitness-coach',
      name: 'AI Fitness Coach',
      description: 'Personalized fitness training with AI-powered workout plans, nutrition advice, and progress tracking.',
      icon: Activity,
      category: 'healthcare',
      pricing: { starting: 39, period: 'month' },
      features: ['Personalized workouts', 'Nutrition planning', 'Progress tracking', 'Form analysis', 'Goal setting', 'Mobile app'],
      benefits: ['Better fitness results', 'Personalized approach', 'Motivation tracking'],
      popular: false,
      rating: 4.7,
      users: 15200,
      link: 'https://ziontechgroup.com/ai-fitness-coach'
    },
    {
      id: 'ai-mobile-app-builder',
      name: 'AI App Builder',
      description: 'Create mobile applications with AI-powered design, development, and deployment tools.',
      icon: Smartphone,
      category: 'productivity',
      pricing: { starting: 149, period: 'month' },
      features: ['No-code development', 'AI design suggestions', 'Cross-platform support', 'App store deployment', 'Analytics integration', 'Custom features'],
      benefits: ['Faster app development', 'No coding required', 'Professional results'],
      popular: true,
      rating: 4.8,
      users: 9100,
      link: 'https://ziontechgroup.com/ai-mobile-app-builder'
    },
    {
      id: 'ai-voice-cloning',
      name: 'AI Voice Cloning',
      description: 'Create realistic voice clones for content creation, accessibility, and personalized experiences.',
      icon: Mic,
      category: 'content',
      pricing: { starting: 79, period: 'month' },
      features: ['Voice synthesis', 'Emotion control', 'Language support', 'Real-time generation', 'API integration', 'Custom training'],
      benefits: ['Realistic voice generation', 'Accessibility improvement', 'Content personalization'],
      popular: false,
      rating: 4.6,
      users: 5600,
      link: 'https://ziontechgroup.com/ai-voice-cloning'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Security Suite',
      description: 'Advanced cybersecurity with AI-powered threat detection, vulnerability scanning, and incident response.',
      icon: Shield,
      category: 'security',
      pricing: { starting: 199, period: 'month' },
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance monitoring', 'Security analytics', 'Real-time alerts'],
      benefits: ['Enhanced security', 'Faster threat response', 'Compliance assurance'],
      popular: true,
      rating: 4.9,
      users: 7200,
      link: 'https://ziontechgroup.com/ai-cybersecurity'
    },
    {
      id: 'ai-cloud-infrastructure',
      name: 'AI Cloud Manager',
      description: 'Intelligent cloud infrastructure management with automated scaling, cost optimization, and monitoring.',
      icon: Cloud,
      category: 'infrastructure',
      pricing: { starting: 129, period: 'month' },
      features: ['Auto scaling', 'Cost optimization', 'Performance monitoring', 'Security management', 'Backup automation', 'Multi-cloud support'],
      benefits: ['Reduced cloud costs', 'Better performance', 'Automated management'],
      popular: true,
      rating: 4.8,
      users: 10800,
      link: 'https://ziontechgroup.com/ai-cloud-infrastructure'
    },
    {
      id: 'ai-blockchain-analytics',
      name: 'AI Blockchain Explorer',
      description: 'Advanced blockchain analysis with AI-powered transaction monitoring, fraud detection, and compliance.',
      icon: Link,
      category: 'analytics',
      pricing: { starting: 159, period: 'month' },
      features: ['Transaction analysis', 'Fraud detection', 'Compliance monitoring', 'Risk assessment', 'Real-time alerts', 'API integration'],
      benefits: ['Better security', 'Compliance assurance', 'Risk mitigation'],
      popular: false,
      rating: 4.7,
      users: 3400,
      link: 'https://ziontechgroup.com/ai-blockchain-analytics'
    },
    {
      id: 'ai-iot-management',
      name: 'AI IoT Controller',
      description: 'Intelligent IoT device management with automated control, monitoring, and predictive maintenance.',
      icon: Wifi,
      category: 'automation',
      pricing: { starting: 89, period: 'month' },
      features: ['Device management', 'Predictive maintenance', 'Energy optimization', 'Security monitoring', 'Data analytics', 'Remote control'],
      benefits: ['Better device management', 'Reduced maintenance costs', 'Energy savings'],
      popular: false,
      rating: 4.6,
      users: 6100,
      link: 'https://ziontechgroup.com/ai-iot-management'
    },
    {
      id: 'ai-ar-vr-solutions',
      name: 'AI AR/VR Creator',
      description: 'Create immersive AR/VR experiences with AI-powered content generation and interaction design.',
      icon: Eye,
      category: 'content',
      pricing: { starting: 119, period: 'month' },
      features: ['3D content generation', 'Interaction design', 'Performance optimization', 'Multi-platform support', 'Analytics tracking', 'Custom development'],
      benefits: ['Faster AR/VR development', 'Better user experiences', 'Cost-effective creation'],
      popular: false,
      rating: 4.5,
      users: 2800,
      link: 'https://ziontechgroup.com/ai-ar-vr-solutions'
    },
    {
      id: 'ai-autonomous-systems',
      name: 'AI Autonomous Controller',
      description: 'Advanced autonomous system management with AI-powered decision making and control algorithms.',
      icon: Bot,
      category: 'automation',
      pricing: { starting: 299, period: 'month' },
      features: ['Decision algorithms', 'Sensor integration', 'Safety protocols', 'Performance monitoring', 'Custom training', 'API integration'],
      benefits: ['Improved autonomy', 'Better safety', 'Reduced human intervention'],
      popular: false,
      rating: 4.8,
      users: 1900,
      link: 'https://ziontechgroup.com/ai-autonomous-systems'
    },
    {
      id: 'ai-quantum-computing',
      name: 'AI Quantum Optimizer',
      description: 'Leverage quantum computing power for complex optimization problems and advanced AI algorithms.',
      icon: Atom,
      category: 'computing',
      pricing: { starting: 499, period: 'month' },
      features: ['Quantum algorithms', 'Optimization problems', 'Advanced AI models', 'Performance acceleration', 'Custom development', 'Expert support'],
      benefits: ['Exponential performance gains', 'Complex problem solving', 'Competitive advantage'],
      popular: false,
      rating: 4.9,
      users: 1200,
      link: 'https://ziontechgroup.com/ai-quantum-computing'
    },
    {
      id: 'ai-robotics',
      name: 'AI Robotics Controller',
      description: 'Intelligent robotics control with AI-powered movement, learning, and task automation.',
      icon: Bot,
      category: 'automation',
      pricing: { starting: 199, period: 'month' },
      features: ['Movement control', 'Task learning', 'Object recognition', 'Path planning', 'Safety protocols', 'Custom programming'],
      benefits: ['Better robot performance', 'Faster learning', 'Improved safety'],
      popular: false,
      rating: 4.7,
      users: 3600,
      link: 'https://ziontechgroup.com/ai-robotics'
    },
    {
      id: 'ai-enterprise-solutions',
      name: 'AI Enterprise Suite',
      description: 'Comprehensive enterprise AI solutions with custom development, integration, and support.',
      icon: Building,
      category: 'enterprise',
      pricing: { starting: 999, period: 'month' },
      features: ['Custom AI development', 'Enterprise integration', 'Dedicated support', 'Security compliance', 'Scalable infrastructure', 'Training programs'],
      benefits: ['Tailored solutions', 'Enterprise-grade security', 'Dedicated support'],
      popular: true,
      rating: 4.9,
      users: 1800,
      link: 'https://ziontechgroup.com/ai-enterprise-solutions'
    },
    {
      id: 'ai-invoice-generator',
      name: 'Smart Invoice AI',
      description: 'Automate invoice creation and management with AI-powered data extraction and processing.',
      icon: FileText,
      category: 'automation',
      pricing: { starting: 49, period: 'month' },
      features: ['Auto data extraction', 'Smart categorization', 'Payment tracking', 'Tax calculations', 'Multi-currency', 'Recurring billing'],
      benefits: ['Save 5 hours weekly', 'Reduce errors by 95%', 'Faster payments'],
      popular: true,
      rating: 4.8,
      users: 8900,
      link: 'https://ziontechgroup.com/ai-invoice-generator'
    },
    {
      id: 'ai-content-optimizer',
      name: 'Content Optimizer Pro',
      description: 'Optimize your content for SEO, readability, and engagement with advanced AI analysis.',
      icon: Target,
      category: 'content',
      pricing: { starting: 29, period: 'month' },
      features: ['SEO optimization', 'Readability analysis', 'Engagement scoring', 'A/B testing', 'Keyword research', 'Content suggestions'],
      benefits: ['Increase traffic by 40%', 'Better user engagement', 'Higher conversion rates'],
      popular: false,
      rating: 4.7,
      users: 5600,
      link: 'https://ziontechgroup.com/content-optimizer'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'Business Intelligence AI',
      description: 'Comprehensive business analytics with AI-powered insights and predictive modeling.',
      icon: BarChart,
      category: 'analytics',
      pricing: { starting: 99, period: 'month' },
      features: ['Real-time analytics', 'Predictive insights', 'Custom reports', 'Data visualization', 'Automated alerts', 'ROI tracking'],
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Optimize performance'],
      popular: true,
      rating: 4.9,
      users: 12000,
      link: 'https://ziontechgroup.com/analytics-dashboard'
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Support Bot',
      description: 'Intelligent customer support automation with natural language processing and sentiment analysis.',
      icon: Bot,
      category: 'automation',
      pricing: { starting: 39, period: 'month' },
      features: ['24/7 support', 'Multi-language', 'Sentiment analysis', 'Ticket routing', 'Knowledge base', 'Live chat handoff'],
      benefits: ['Reduce support costs by 60%', 'Instant responses', 'Improved customer satisfaction'],
      popular: true,
      rating: 4.8,
      users: 15600,
      link: 'https://ziontechgroup.com/ai-support-bot'
    },
    {
      id: 'ai-social-media-manager',
      name: 'Social Media AI',
      description: 'Automated social media management with AI-powered content creation and scheduling.',
      icon: Globe,
      category: 'content',
      pricing: { starting: 59, period: 'month' },
      features: ['Auto posting', 'Content generation', 'Hashtag optimization', 'Engagement tracking', 'Multi-platform', 'Analytics'],
      benefits: ['Increase engagement by 50%', 'Save 10 hours weekly', 'Better brand consistency'],
      popular: false,
      rating: 4.6,
      users: 7200,
      link: 'https://ziontechgroup.com/social-media-ai'
    },
    {
      id: 'ai-expense-tracker',
      name: 'Smart Expense Tracker',
      description: 'AI-powered expense management with automatic categorization and receipt processing.',
      icon: Calculator,
      category: 'productivity',
      pricing: { starting: 19, period: 'month' },
      features: ['Receipt scanning', 'Auto categorization', 'Tax preparation', 'Budget tracking', 'Expense reports', 'Mobile app'],
      benefits: ['Save 3 hours weekly', 'Reduce errors by 90%', 'Better tax compliance'],
      popular: false,
      rating: 4.7,
      users: 9800,
      link: 'https://ziontechgroup.com/expense-tracker'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'SEO Optimizer AI',
      description: 'Advanced SEO optimization with AI-powered keyword research and content analysis.',
      icon: Search,
      category: 'content',
      pricing: { starting: 69, period: 'month' },
      features: ['Keyword research', 'Content optimization', 'Competitor analysis', 'Rank tracking', 'Technical SEO', 'Local SEO'],
      benefits: ['Increase organic traffic by 80%', 'Better search rankings', 'Competitive advantage'],
      popular: true,
      rating: 4.9,
      users: 13400,
      link: 'https://ziontechgroup.com/seo-optimizer'
    },
    {
      id: 'ai-email-marketing',
      name: 'Email Marketing AI',
      description: 'Intelligent email marketing with AI-powered personalization and automation.',
      icon: Mail,
      category: 'automation',
      pricing: { starting: 49, period: 'month' },
      features: ['AI personalization', 'Send time optimization', 'A/B testing', 'Segmentation', 'Analytics', 'Templates'],
      benefits: ['Increase open rates by 40%', 'Better click-through rates', 'Automated campaigns'],
      popular: false,
      rating: 4.6,
      users: 8100,
      link: 'https://ziontechgroup.com/email-marketing-ai'
    },
    {
      id: 'ai-inventory-management',
      name: 'Smart Inventory AI',
      description: 'AI-powered inventory management with demand forecasting and automated reordering.',
      icon: Package,
      category: 'automation',
      pricing: { starting: 89, period: 'month' },
      features: ['Demand forecasting', 'Auto reordering', 'Stock optimization', 'Multi-location', 'Barcode scanning', 'Analytics'],
      benefits: ['Reduce stockouts by 70%', 'Lower inventory costs', 'Better cash flow'],
      popular: true,
      rating: 4.8,
      users: 11200,
      link: 'https://ziontechgroup.com/inventory-ai'
    },
    {
      id: 'ai-appointment-scheduler',
      name: 'Smart Scheduler Pro',
      description: 'Intelligent appointment scheduling with AI-powered optimization and automated reminders.',
      icon: Clock,
      category: 'productivity',
      pricing: { starting: 29, period: 'month' },
      features: ['Auto scheduling', 'Calendar integration', 'Reminder automation', 'Time zone handling', 'Recurring appointments', 'Analytics'],
      benefits: ['Reduce no-shows by 50%', 'Save 5 hours weekly', 'Better customer experience'],
      popular: false,
      rating: 4.7,
      users: 6500,
      link: 'https://ziontechgroup.com/smart-scheduler'
    },
    {
      id: 'ai-lead-scoring',
      name: 'Lead Scoring AI',
      description: 'AI-powered lead qualification and scoring to identify high-value prospects.',
      icon: Target,
      category: 'analytics',
      pricing: { starting: 79, period: 'month' },
      features: ['Lead scoring', 'Behavioral analysis', 'Predictive modeling', 'CRM integration', 'Custom scoring', 'Reporting'],
      benefits: ['Increase conversion by 35%', 'Better lead quality', 'Improved sales efficiency'],
      popular: true,
      rating: 4.8,
      users: 9200,
      link: 'https://ziontechgroup.com/lead-scoring-ai'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'content', name: 'Content Creation', icon: FileText },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'productivity', name: 'Productivity', icon: Clock },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'support', name: 'Customer Support', icon: MessageSquare },
    { id: 'healthcare', name: 'Healthcare', icon: Stethoscope },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'infrastructure', name: 'Infrastructure', icon: Cloud },
    { id: 'computing', name: 'Computing', icon: Cpu },
    { id: 'enterprise', name: 'Enterprise', icon: Building }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    switch (sortBy) {
      case 'popularity':
        filtered.sort((a, b) => b.users - a.users);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.pricing.starting - b.pricing.starting);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.pricing.starting - a.pricing.starting);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover powerful micro SAAS solutions for your business. AI-powered tools for productivity, automation, content creation, and analytics." />
        <meta name="keywords" content="micro saas, saas solutions, business tools, productivity software, automation tools" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS Solutions</span>
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              Powerful, focused tools for specific business needs
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Discover our collection of specialized micro SAAS applications designed to solve specific business challenges with precision and efficiency.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SAAS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id} className="bg-slate-800">
                      {category.name}
                    </option>
                  ))}
                </select>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="popularity" className="bg-slate-800">Most Popular</option>
                  <option value="rating" className="bg-slate-800">Highest Rated</option>
                  <option value="price-low" className="bg-slate-800">Price: Low to High</option>
                  <option value="price-high" className="bg-slate-800">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        {service.popular && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-600 to-purple-600 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">${service.pricing.starting}</div>
                      <div className="text-sm text-gray-400">/{service.pricing.period}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {service.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-blue-400 mr-1" />
                      {service.users.toLocaleString()} users
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
                    >
                      <span>Try Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="/contact"
                      className="px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We can build a custom micro SAAS solution tailored to your specific business needs and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Request Custom Solution
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default MicroSAASPage;