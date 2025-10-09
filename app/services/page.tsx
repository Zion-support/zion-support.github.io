'use client';
import React from 'react';
import { Brain, Cpu, Shield, Cloud, Zap, Code, Settings, BarChart, MessageSquare, Eye, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Star, Users, Award, Lock, Database, Globe, Target, Search, FileText, Smartphone, Phone, Mail, MapPin, ArrowRight, CheckCircle, TrendingUp, Package, Utensils, Moon, Sprout, Scale, DollarSign, Mic, Cube } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const microSAASServices = [
    {
      title: 'AI Project Manager',
      description: 'Intelligent project planning with AI-powered resource optimization and timeline prediction',
      icon: BarChart,
      price: '$99/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation and smart scheduling',
      icon: MessageSquare,
      price: '$79/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      icon: PieChart,
      price: '$149/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift'],
      link: '/ai-analytics',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI Email Marketing',
      description: 'Transform your email marketing with AI-powered content generation and automation',
      icon: Mail,
      price: '$99/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot',
      icon: Bot,
      price: '$149/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Customer Service'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection and optimization',
      icon: Code,
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development'
    },
    {
      title: 'AI Video Generator',
      description: 'Create professional videos with AI-powered editing and content generation',
      icon: Video,
      price: '$199/month',
      features: ['AI video editing', 'Auto-generated content', 'Voice synthesis', 'Multi-language support'],
      benefits: ['90% time reduction', 'Professional quality', 'Unlimited exports'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Content Creation'
    },
    {
      title: 'AI Voice Cloning',
      description: 'Create realistic voice clones for content creation and accessibility',
      icon: Mic,
      price: '$129/month',
      features: ['High-quality voice cloning', 'Multiple voice options', 'Real-time synthesis', 'API integration'],
      benefits: ['99% voice accuracy', 'Multiple languages', 'Real-time processing'],
      link: '/ai-voice-cloning',
      popular: false,
      category: 'Content Creation'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management',
      icon: Zap,
      price: '$179/month',
      features: ['Process automation', 'Smart routing', 'Exception handling', 'Analytics dashboard'],
      benefits: ['80% process automation', '60% cost reduction', 'Real-time monitoring'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation'
    },
    {
      title: 'AI Fashion Design',
      description: 'Create stunning fashion designs with AI-powered design tools',
      icon: Palette,
      price: '$159/month',
      features: ['AI design generation', 'Trend analysis', 'Color matching', 'Pattern creation'],
      benefits: ['50% design time reduction', 'Trend-aware designs', 'Unlimited creativity'],
      link: '/ai-fashion-design',
      popular: false,
      category: 'Design'
    },
    {
      title: 'AI Music Composition',
      description: 'Compose original music with AI-powered composition tools',
      icon: Music,
      price: '$119/month',
      features: ['AI composition', 'Multiple genres', 'Instrument simulation', 'Royalty-free music'],
      benefits: ['Unlimited compositions', 'Professional quality', 'No copyright issues'],
      link: '/ai-music-composition',
      popular: false,
      category: 'Creative'
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness coaching with AI-powered workout plans',
      icon: Heart,
      price: '$89/month',
      features: ['Personalized workouts', 'Progress tracking', 'Nutrition advice', 'Goal setting'],
      benefits: ['Better results', 'Motivation boost', 'Flexible scheduling'],
      link: '/ai-fitness-coach',
      popular: false,
      category: 'Health & Fitness'
    },
    {
      title: 'AI Sales Automation',
      description: 'Boost sales with AI-powered lead generation and conversion optimization',
      icon: TrendingUp,
      price: '$199/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'CRM integration'],
      benefits: ['35% more leads', '50% conversion increase', '25% revenue growth'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visualizations',
      icon: BarChart,
      price: '$139/month',
      features: ['Interactive dashboards', 'Real-time visualization', 'Custom charts', 'Data storytelling'],
      benefits: ['Faster insights', 'Better decisions', 'Stunning presentations'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics'
    },
    {
      title: 'AI 3D Generation',
      description: 'Create 3D models and environments with AI technology',
      icon: Cube,
      price: '$249/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support'],
      benefits: ['Professional 3D content', 'Time savings', 'Creative freedom'],
      link: '/ai-3d-generation',
      popular: false,
      category: '3D & Graphics'
    },
    {
      title: 'AI Customer Support',
      description: 'Advanced customer support with AI-powered ticket management',
      icon: Headphones,
      price: '$169/month',
      features: ['Ticket automation', 'Sentiment analysis', 'Knowledge base', 'Multi-channel support'],
      benefits: ['Faster resolution', 'Higher satisfaction', '24/7 availability'],
      link: '/ai-customer-support',
      popular: true,
      category: 'Customer Service'
    },
    {
      title: 'AI Content Writer',
      description: 'Generate high-quality content with AI-powered writing assistance',
      icon: FileText,
      price: '$79/month',
      features: ['Blog posts', 'Social media content', 'Product descriptions', 'SEO optimization'],
      benefits: ['10x content output', 'SEO optimized', 'Brand voice consistency'],
      link: '/ai-content-writer',
      popular: true,
      category: 'Content Creation'
    },
    {
      title: 'AI Inventory Manager',
      description: 'Optimize inventory with AI-powered demand forecasting',
      icon: Package,
      price: '$149/month',
      features: ['Demand forecasting', 'Stock optimization', 'Reorder alerts', 'Analytics dashboard'],
      benefits: ['30% inventory reduction', '99% stock accuracy', 'Zero stockouts'],
      link: '/ai-inventory-manager',
      popular: false,
      category: 'Operations'
    },
    {
      title: 'AI HR Assistant',
      description: 'Streamline HR processes with AI-powered recruitment and management',
      icon: Users,
      price: '$189/month',
      features: ['Resume screening', 'Interview scheduling', 'Employee analytics', 'Performance tracking'],
      benefits: ['50% faster hiring', 'Better candidate matching', 'Reduced bias'],
      link: '/ai-hr-assistant',
      popular: false,
      category: 'Human Resources'
    },
    {
      title: 'AI Financial Advisor',
      description: 'Personalized financial planning with AI-powered investment advice',
      icon: DollarSign,
      price: '$299/month',
      features: ['Portfolio analysis', 'Risk assessment', 'Tax optimization', 'Retirement planning'],
      benefits: ['Better returns', 'Risk management', 'Tax savings'],
      link: '/ai-financial-advisor',
      popular: false,
      category: 'Finance'
    },
    {
      title: 'AI Legal Assistant',
      description: 'Legal document analysis and contract review with AI technology',
      icon: Scale,
      price: '$399/month',
      features: ['Contract analysis', 'Legal research', 'Document generation', 'Compliance checking'],
      benefits: ['Faster reviews', 'Risk identification', 'Cost savings'],
      link: '/ai-legal-assistant',
      popular: false,
      category: 'Legal'
    },
    {
      title: 'AI Real Estate Assistant',
      description: 'Intelligent property analysis and market insights for real estate professionals',
      icon: Home,
      price: '$179/month',
      features: ['Property valuation', 'Market analysis', 'Investment insights', 'Lead generation'],
      benefits: ['30% faster deals', 'Better pricing accuracy', 'Increased ROI'],
      link: '/ai-real-estate-assistant',
      popular: true,
      category: 'Real Estate'
    },
    {
      title: 'AI Supply Chain Optimizer',
      description: 'Optimize supply chain operations with AI-powered demand forecasting',
      icon: Package,
      price: '$249/month',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Risk assessment'],
      benefits: ['25% cost reduction', '99% on-time delivery', 'Zero stockouts'],
      link: '/ai-supply-chain-optimizer',
      popular: true,
      category: 'Operations'
    },
    {
      title: 'AI Healthcare Assistant',
      description: 'Medical diagnosis support and patient care optimization',
      icon: Stethoscope,
      price: '$299/month',
      features: ['Symptom analysis', 'Treatment recommendations', 'Patient monitoring', 'Medical records'],
      benefits: ['Faster diagnosis', 'Better outcomes', 'Reduced errors'],
      link: '/ai-healthcare-assistant',
      popular: false,
      category: 'Healthcare'
    },
    {
      title: 'AI Education Platform',
      description: 'Personalized learning experiences with AI-powered curriculum',
      icon: GraduationCap,
      price: '$129/month',
      features: ['Adaptive learning', 'Progress tracking', 'Content generation', 'Assessment tools'],
      benefits: ['40% better retention', 'Personalized paths', 'Engaging content'],
      link: '/ai-education-platform',
      popular: true,
      category: 'Education'
    },
    {
      title: 'AI Energy Manager',
      description: 'Smart energy consumption optimization for buildings and facilities',
      icon: Zap,
      price: '$199/month',
      features: ['Energy monitoring', 'Consumption optimization', 'Predictive maintenance', 'Cost analysis'],
      benefits: ['35% energy savings', 'Reduced carbon footprint', 'Lower costs'],
      link: '/ai-energy-manager',
      popular: true,
      category: 'Energy'
    },
    {
      title: 'AI Travel Planner',
      description: 'Intelligent travel planning with personalized recommendations',
      icon: Plane,
      price: '$89/month',
      features: ['Route optimization', 'Hotel recommendations', 'Activity suggestions', 'Budget planning'],
      benefits: ['50% time saved', 'Better experiences', 'Cost optimization'],
      link: '/ai-travel-planner',
      popular: false,
      category: 'Travel'
    },
    {
      title: 'AI Restaurant Manager',
      description: 'Complete restaurant management with AI-powered operations',
      icon: Utensils,
      price: '$159/month',
      features: ['Menu optimization', 'Inventory management', 'Staff scheduling', 'Customer insights'],
      benefits: ['20% revenue increase', 'Reduced waste', 'Better service'],
      link: '/ai-restaurant-manager',
      popular: true,
      category: 'Hospitality'
    },
    {
      title: 'AI Event Planner',
      description: 'Automated event planning and management solutions',
      icon: Calendar,
      price: '$119/month',
      features: ['Venue selection', 'Guest management', 'Budget tracking', 'Timeline creation'],
      benefits: ['Stress-free planning', 'Cost control', 'Perfect execution'],
      link: '/ai-event-planner',
      popular: false,
      category: 'Events'
    },
    {
      title: 'AI Personal Trainer',
      description: 'AI-powered fitness coaching and workout optimization',
      icon: Heart,
      price: '$79/month',
      features: ['Workout plans', 'Form analysis', 'Progress tracking', 'Nutrition advice'],
      benefits: ['Better results', 'Motivation boost', 'Flexible scheduling'],
      link: '/ai-personal-trainer',
      popular: true,
      category: 'Health & Fitness'
    },
    {
      title: 'AI Language Tutor',
      description: 'Personalized language learning with AI conversation practice',
      icon: MessageSquare,
      price: '$99/month',
      features: ['Conversation practice', 'Grammar correction', 'Pronunciation help', 'Cultural insights'],
      benefits: ['Faster fluency', 'Confidence building', 'Real-world practice'],
      link: '/ai-language-tutor',
      popular: true,
      category: 'Education'
    },
    {
      title: 'AI Home Automation',
      description: 'Smart home control and automation with AI intelligence',
      icon: Home,
      price: '$149/month',
      features: ['Device control', 'Energy optimization', 'Security monitoring', 'Predictive maintenance'],
      benefits: ['Convenience', 'Energy savings', 'Enhanced security'],
      link: '/ai-home-automation',
      popular: true,
      category: 'Smart Home'
    },
    {
      title: 'AI Trading Assistant',
      description: 'Algorithmic trading and investment analysis with AI',
      icon: TrendingUp,
      price: '$399/month',
      features: ['Market analysis', 'Trading signals', 'Portfolio optimization', 'Risk management'],
      benefits: ['Better returns', 'Reduced risk', '24/7 monitoring'],
      link: '/ai-trading-assistant',
      popular: false,
      category: 'Finance'
    },
    {
      title: 'AI Content Moderator',
      description: 'Automated content moderation and safety monitoring',
      icon: Shield,
      price: '$189/month',
      features: ['Content filtering', 'Spam detection', 'Safety monitoring', 'Compliance checking'],
      benefits: ['Safer platforms', 'Reduced manual work', 'Consistent moderation'],
      link: '/ai-content-moderator',
      popular: true,
      category: 'Content Management'
    },
    {
      title: 'AI Weather Predictor',
      description: 'Advanced weather forecasting and climate analysis',
      icon: Cloud,
      price: '$139/month',
      features: ['Weather forecasting', 'Climate analysis', 'Alert systems', 'Data visualization'],
      benefits: ['Accurate predictions', 'Risk mitigation', 'Better planning'],
      link: '/ai-weather-predictor',
      popular: false,
      category: 'Weather'
    },
    {
      title: 'AI Job Matcher',
      description: 'Intelligent job matching and career development platform',
      icon: Briefcase,
      price: '$169/month',
      features: ['Job matching', 'Skill assessment', 'Career guidance', 'Interview prep'],
      benefits: ['Better job fits', 'Career growth', 'Time savings'],
      link: '/ai-job-matcher',
      popular: true,
      category: 'Career'
    },
    {
      title: 'AI Pet Care Assistant',
      description: 'Comprehensive pet health monitoring and care management',
      icon: Heart,
      price: '$89/month',
      features: ['Health monitoring', 'Vaccination reminders', 'Behavior analysis', 'Vet scheduling'],
      benefits: ['Better pet health', 'Peace of mind', 'Cost savings'],
      link: '/ai-pet-care-assistant',
      popular: false,
      category: 'Pet Care'
    },
    {
      title: 'AI Garden Planner',
      description: 'Smart gardening assistance and plant care optimization',
      icon: Sprout,
      price: '$69/month',
      features: ['Plant selection', 'Care schedules', 'Pest detection', 'Harvest planning'],
      benefits: ['Better yields', 'Healthier plants', 'Less waste'],
      link: '/ai-garden-planner',
      popular: false,
      category: 'Gardening'
    },
    {
      title: 'AI Sleep Optimizer',
      description: 'AI-powered sleep analysis and improvement recommendations',
      icon: Moon,
      price: '$79/month',
      features: ['Sleep tracking', 'Pattern analysis', 'Improvement tips', 'Environment optimization'],
      benefits: ['Better sleep quality', 'Increased energy', 'Health improvements'],
      link: '/ai-sleep-optimizer',
      popular: true,
      category: 'Health & Wellness'
    },
    {
      title: 'AI Meditation Guide',
      description: 'Personalized meditation and mindfulness coaching',
      icon: Brain,
      price: '$59/month',
      features: ['Guided sessions', 'Progress tracking', 'Personalized plans', 'Stress monitoring'],
      benefits: ['Reduced stress', 'Better focus', 'Mental wellness'],
      link: '/ai-meditation-guide',
      popular: true,
      category: 'Mental Health'
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'],
      color: 'text-purple-400',
      category: 'AI Development'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      color: 'text-blue-400',
      category: 'AI Development'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      color: 'text-green-400',
      category: 'AI Development'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      color: 'text-cyan-400',
      category: 'Automation'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visualizations',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Interactive Dashboards', 'Real-time Visualization', 'Custom Charts', 'Data Storytelling'],
      color: 'text-orange-400',
      category: 'Data Science'
    },
    {
      title: 'AI 3D Generation',
      description: 'Create 3D models and environments with AI technology',
      icon: Cube,
      price: '$1,600/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support'],
      color: 'text-pink-400',
      category: '3D & Graphics'
    },
    {
      title: 'AI Voice Synthesis',
      description: 'Advanced voice cloning and text-to-speech solutions',
      icon: Mic,
      price: '$1,300/month',
      features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support'],
      color: 'text-indigo-400',
      category: 'Voice Technology'
    },
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for marketing and communication',
      icon: FileText,
      price: '$1,000/month',
      features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'],
      color: 'text-yellow-400',
      category: 'Content AI'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced forecasting and trend analysis with machine learning',
      icon: TrendingUp,
      price: '$1,700/month',
      features: ['Sales Forecasting', 'Demand Prediction', 'Risk Assessment', 'Trend Analysis'],
      color: 'text-red-400',
      category: 'Analytics'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce and content',
      icon: Target,
      price: '$1,400/month',
      features: ['Product Recommendations', 'Content Personalization', 'User Behavior Analysis', 'A/B Testing'],
      color: 'text-teal-400',
      category: 'Personalization'
    },
    {
      title: 'AI Fraud Detection',
      description: 'Advanced fraud prevention and security monitoring',
      icon: Shield,
      price: '$1,900/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System'],
      color: 'text-red-500',
      category: 'Security'
    },
    {
      title: 'AI Document Processing',
      description: 'Intelligent document analysis and data extraction',
      icon: Search,
      price: '$1,200/month',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Form Recognition'],
      color: 'text-gray-400',
      category: 'Document AI'
    },
    {
      title: 'AI Quantum Computing',
      description: 'Quantum algorithms and quantum machine learning solutions',
      icon: Cpu,
      price: '$5,000/month',
      features: ['Quantum Algorithms', 'Quantum ML', 'Optimization Problems', 'Cryptography'],
      color: 'text-purple-500',
      category: 'Quantum Computing'
    },
    {
      title: 'AI Autonomous Systems',
      description: 'Self-driving vehicles and autonomous robotics solutions',
      icon: Car,
      price: '$3,500/month',
      features: ['Autonomous Vehicles', 'Robotics Control', 'Path Planning', 'Sensor Fusion'],
      color: 'text-blue-500',
      category: 'Autonomous Systems'
    },
    {
      title: 'AI Edge Computing',
      description: 'AI processing at the edge for real-time applications',
      icon: Smartphone,
      price: '$2,200/month',
      features: ['Edge AI Models', 'Real-time Processing', 'Low Latency', 'Offline Capability'],
      color: 'text-green-500',
      category: 'Edge Computing'
    },
    {
      title: 'AI Blockchain Integration',
      description: 'AI-powered blockchain solutions and smart contracts',
      icon: Lock,
      price: '$2,800/month',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Generation', 'Crypto Analysis'],
      color: 'text-yellow-500',
      category: 'Blockchain'
    },
    {
      title: 'AI Metaverse Solutions',
      description: 'Virtual and augmented reality AI applications',
      icon: Gamepad2,
      price: '$3,200/month',
      features: ['VR/AR AI', 'Virtual Worlds', 'Avatar Creation', 'Spatial Computing'],
      color: 'text-pink-500',
      category: 'Metaverse'
    },
    {
      title: 'AI Climate Solutions',
      description: 'Environmental monitoring and climate change mitigation',
      icon: Globe,
      price: '$2,500/month',
      features: ['Climate Modeling', 'Carbon Tracking', 'Renewable Energy', 'Environmental Monitoring'],
      color: 'text-teal-500',
      category: 'Climate Tech'
    },
    {
      title: 'AI Space Technology',
      description: 'AI applications for space exploration and satellite operations',
      icon: Plane,
      price: '$4,000/month',
      features: ['Satellite AI', 'Space Exploration', 'Orbital Mechanics', 'Space Weather'],
      color: 'text-indigo-500',
      category: 'Space Tech'
    },
    {
      title: 'AI Biotech Solutions',
      description: 'AI-powered biotechnology and pharmaceutical research',
      icon: Stethoscope,
      price: '$3,800/month',
      features: ['Drug Discovery', 'Protein Folding', 'Genomic Analysis', 'Clinical Trials'],
      color: 'text-red-500',
      category: 'Biotech'
    },
    {
      title: 'AI Financial Modeling',
      description: 'Advanced financial modeling and risk assessment',
      icon: CreditCard,
      price: '$2,600/month',
      features: ['Risk Modeling', 'Portfolio Optimization', 'Algorithmic Trading', 'Fraud Detection'],
      color: 'text-emerald-500',
      category: 'Fintech'
    },
    {
      title: 'AI Supply Chain Intelligence',
      description: 'End-to-end supply chain optimization and visibility',
      icon: Ship,
      price: '$2,400/month',
      features: ['Supply Chain Mapping', 'Demand Forecasting', 'Logistics Optimization', 'Risk Management'],
      color: 'text-orange-500',
      category: 'Supply Chain'
    },
    {
      title: 'AI Cybersecurity AI',
      description: 'AI-powered cybersecurity and threat intelligence',
      icon: Shield,
      price: '$2,900/month',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Security Automation'],
      color: 'text-red-600',
      category: 'Cybersecurity'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud migration with zero downtime and data integrity',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'],
      color: 'text-blue-400',
      category: 'Cloud Computing'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      color: 'text-green-400',
      category: 'Development'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      color: 'text-purple-400',
      category: 'Data Management'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting for digital transformation and optimization',
      icon: Briefcase,
      price: '$1,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization'],
      color: 'text-yellow-400',
      category: 'Consulting'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design and implement robust network infrastructure solutions',
      icon: Globe,
      price: '$1,400/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring'],
      color: 'text-indigo-400',
      category: 'Infrastructure'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development',
      icon: Smartphone,
      price: '$1,500/month',
      features: ['iOS/Android Apps', 'Cross-platform Development', 'UI/UX Design', 'App Store Optimization'],
      color: 'text-pink-400',
      category: 'Mobile Development'
    },
    {
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies',
      icon: Code,
      price: '$1,200/month',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization'],
      color: 'text-cyan-400',
      category: 'Web Development'
    },
    {
      title: 'Data Analytics',
      description: 'Business intelligence and data analytics solutions',
      icon: BarChart,
      price: '$1,300/month',
      features: ['Data Warehousing', 'Business Intelligence', 'Reporting Dashboards', 'Data Mining'],
      color: 'text-orange-400',
      category: 'Analytics'
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support and system maintenance services',
      icon: Wrench,
      price: '$800/month',
      features: ['24/7 Support', 'System Maintenance', 'Software Updates', 'Hardware Management'],
      color: 'text-gray-400',
      category: 'Support'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Blockchain development and cryptocurrency solutions',
      icon: Lock,
      price: '$2,000/month',
      features: ['Smart Contracts', 'DApp Development', 'Token Creation', 'DeFi Solutions'],
      color: 'text-yellow-500',
      category: 'Blockchain'
    },
    {
      title: 'IoT Solutions',
      description: 'Internet of Things development and implementation',
      icon: Cpu,
      price: '$1,600/month',
      features: ['IoT Device Development', 'Sensor Integration', 'Data Collection', 'Real-time Monitoring'],
      color: 'text-green-500',
      category: 'IoT'
    },
    {
      title: 'Quantum Computing Services',
      description: 'Quantum computing infrastructure and algorithm development',
      icon: Cpu,
      price: '$4,500/month',
      features: ['Quantum Hardware', 'Algorithm Development', 'Quantum Software', 'Research Support'],
      color: 'text-purple-600',
      category: 'Quantum Computing'
    },
    {
      title: '5G Network Solutions',
      description: '5G network design, implementation, and optimization',
      icon: Globe,
      price: '$2,800/month',
      features: ['5G Infrastructure', 'Network Optimization', 'Edge Computing', 'IoT Integration'],
      color: 'text-blue-600',
      category: '5G Networks'
    },
    {
      title: 'Edge Computing Services',
      description: 'Edge computing infrastructure and application deployment',
      icon: Smartphone,
      price: '$2,200/month',
      features: ['Edge Infrastructure', 'Application Deployment', 'Data Processing', 'Low Latency Solutions'],
      color: 'text-green-600',
      category: 'Edge Computing'
    },
    {
      title: 'AI Infrastructure',
      description: 'AI/ML infrastructure setup and management',
      icon: Brain,
      price: '$3,200/month',
      features: ['GPU Clusters', 'ML Pipelines', 'Model Deployment', 'AI Monitoring'],
      color: 'text-purple-500',
      category: 'AI Infrastructure'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategy and implementation',
      icon: Settings,
      price: '$2,500/month',
      features: ['Strategy Development', 'Process Automation', 'Technology Integration', 'Change Management'],
      color: 'text-cyan-500',
      category: 'Digital Transformation'
    },
    {
      title: 'API Development & Management',
      description: 'RESTful and GraphQL API development and management',
      icon: Code,
      price: '$1,400/month',
      features: ['API Design', 'Documentation', 'Testing', 'Monitoring'],
      color: 'text-orange-500',
      category: 'API Development'
    },
    {
      title: 'Microservices Architecture',
      description: 'Microservices design, development, and deployment',
      icon: Settings,
      price: '$2,000/month',
      features: ['Service Design', 'Container Orchestration', 'Service Mesh', 'Monitoring'],
      color: 'text-indigo-500',
      category: 'Microservices'
    },
    {
      title: 'Serverless Solutions',
      description: 'Serverless architecture design and implementation',
      icon: Cloud,
      price: '$1,800/month',
      features: ['Function Development', 'Event Processing', 'Auto-scaling', 'Cost Optimization'],
      color: 'text-blue-500',
      category: 'Serverless'
    },
    {
      title: 'Data Engineering',
      description: 'Data pipeline development and ETL processes',
      icon: Database,
      price: '$1,900/month',
      features: ['Data Pipelines', 'ETL Processes', 'Data Warehousing', 'Real-time Processing'],
      color: 'text-teal-500',
      category: 'Data Engineering'
    },
    {
      title: 'Machine Learning Operations',
      description: 'MLOps implementation and model lifecycle management',
      icon: Brain,
      price: '$2,300/month',
      features: ['Model Training', 'Deployment', 'Monitoring', 'Retraining'],
      color: 'text-pink-500',
      category: 'MLOps'
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive cloud security solutions and compliance',
      icon: Shield,
      price: '$2,100/month',
      features: ['Security Assessment', 'Compliance', 'Threat Protection', 'Access Control'],
      color: 'text-red-500',
      category: 'Cloud Security'
    },
    {
      title: 'Disaster Recovery',
      description: 'Business continuity and disaster recovery solutions',
      icon: Shield,
      price: '$1,700/month',
      features: ['Backup Solutions', 'Recovery Planning', 'Testing', 'Monitoring'],
      color: 'text-yellow-500',
      category: 'Disaster Recovery'
    },
    {
      title: 'Performance Optimization',
      description: 'Application and infrastructure performance optimization',
      icon: Zap,
      price: '$1,500/month',
      features: ['Performance Analysis', 'Optimization', 'Monitoring', 'Scaling'],
      color: 'text-green-500',
      category: 'Performance'
    },
    {
      title: 'Compliance & Governance',
      description: 'IT governance, compliance, and risk management',
      icon: FileText,
      price: '$1,800/month',
      features: ['Compliance Auditing', 'Risk Assessment', 'Policy Development', 'Training'],
      color: 'text-gray-500',
      category: 'Governance'
    }
  ];

  const categories = ['All', 'Productivity', 'Marketing', 'Analytics', 'Customer Service', 'Development', 'Content Creation', 'Automation', 'Design', 'Creative', 'Health & Fitness', 'Sales', 'Operations', 'Human Resources', 'Finance', 'Legal', '3D & Graphics', 'Voice Technology', 'Content AI', 'Personalization', 'Security', 'Document AI', 'Cloud Computing', 'Data Management', 'Consulting', 'Infrastructure', 'Mobile Development', 'Web Development', 'Support', 'Blockchain', 'IoT', 'Real Estate', 'Healthcare', 'Education', 'Energy', 'Travel', 'Hospitality', 'Events', 'Smart Home', 'Content Management', 'Weather', 'Career', 'Pet Care', 'Gardening', 'Health & Wellness', 'Mental Health', 'Quantum Computing', 'Autonomous Systems', 'Edge Computing', 'Metaverse', 'Climate Tech', 'Space Tech', 'Biotech', 'Fintech', 'Supply Chain', 'Cybersecurity', '5G Networks', 'AI Infrastructure', 'Digital Transformation', 'API Development', 'Microservices', 'Serverless', 'Data Engineering', 'MLOps', 'Cloud Security', 'Disaster Recovery', 'Performance', 'Governance'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Our Services">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive AI and IT solutions designed to transform your business operations and drive unprecedented growth.
          </p>
        </section>

        {/* Micro SAAS Services */}
        <section className="mb-16" aria-labelledby="micro-saas-heading">
          <h2 id="micro-saas-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            Micro SAAS Solutions
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
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
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400" />
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{service.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
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

        {/* AI Services */}
        <section className="mb-16" aria-labelledby="ai-services-heading">
          <h2 id="ai-services-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            AI Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Advanced artificial intelligence solutions for enterprise applications
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {aiServices.map((service, index) => (
              <a
                key={index}
                href={`/ai-solutions#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="cyber-card p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <service.icon className={`w-12 h-12 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{service.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-lg font-bold text-cyan-400 neon-text">{service.price}</div>
              </a>
            ))}
          </div>
        </section>

        {/* IT Services */}
        <section className="mb-16" aria-labelledby="it-services-heading">
          <h2 id="it-services-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            IT Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive IT solutions for modern enterprises
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {itServices.map((service, index) => (
              <a
                key={index}
                href={`/it-services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="cyber-card p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <service.icon className={`w-12 h-12 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{service.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-lg font-bold text-cyan-400 neon-text">{service.price}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today to discuss how our AI and IT solutions can revolutionize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
