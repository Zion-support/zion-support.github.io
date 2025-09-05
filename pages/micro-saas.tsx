import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Cloud, Zap, Shield, Users, BarChart3, CheckCircle, ArrowRight, Clock, Star, 
  DollarSign, Award, Globe, Lock, Cpu, Bot, FileText, Video, Mic, Code, 
  Settings, Monitor, Smartphone, Server, Network, Car, Rocket, Heart, Building, 
  Sprout, Mail, MessageSquare, Search, Eye, Target, TrendingUp, Package, 
  Calendar, BookOpen, ShoppingCart, Home, Trash2, Camera, HardDrive, Database,
  Phone, MapPin, Brain, Droplets, Gamepad2, Music, Palette, Camera as CameraIcon
} from 'lucide-react';
import Layout from '../components/Layout';

const microSaasProducts = [
  {
    title: 'Cloud Cost Guard (FinOps Assistant)',
    description: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
    icon: DollarSign,
    features: ['Cost Anomaly Detection', 'Auto Rightsizing', 'Budget Forecasting', 'Multi-cloud Support'],
    pricing: '$299 - $1,499/month',
    category: 'FinOps',
    popular: true,
    benefits: ['Cost Savings', 'Automated Optimization', 'Budget Control', 'Multi-cloud Support'],
    marketPrice: '$500 - $2,000/month',
    link: 'https://ziontechgroup.com/cloud-cost-guard'
  },
  {
    title: 'AI Content Marketing Suite',
    description: 'Automated content creation, SEO optimization, and social media management platform.',
    icon: FileText,
    features: ['AI Content Generation', 'SEO Optimization', 'Social Media Scheduling', 'Analytics Dashboard'],
    pricing: '$29 - $199/month',
    category: 'Marketing',
    popular: true,
    benefits: ['10x Content Output', 'SEO Boost', 'Time Savings', 'Better Engagement'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-content-marketing-suite'
  },
  {
    title: 'Smart Lead Management System',
    description: 'AI-powered lead scoring, nurturing, and conversion optimization platform.',
    icon: Target,
    features: ['Lead Scoring', 'Automated Nurturing', 'CRM Integration', 'Conversion Tracking'],
    pricing: '$49 - $299/month',
    category: 'Sales',
    popular: true,
    benefits: ['Higher Conversion', 'Automated Workflows', 'Better ROI', 'Data Insights'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/smart-lead-management'
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence with predictive analytics and custom reporting.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Predictive Insights', 'Custom Reports', 'Data Visualization'],
    pricing: '$39 - $249/month',
    category: 'Analytics',
    popular: true,
    benefits: ['Data-Driven Decisions', 'Predictive Insights', 'Custom Dashboards', 'ROI Tracking'],
    marketPrice: '$60 - $400/month',
    link: 'https://ziontechgroup.com/ai-analytics-dashboard'
  },
  {
    title: 'Automated Workflow Builder',
    description: 'No-code automation platform for business processes and integrations.',
    icon: Zap,
    features: ['Drag & Drop Builder', '500+ Integrations', 'Conditional Logic', 'API Access'],
    pricing: '$19 - $149/month',
    category: 'Automation',
    popular: true,
    benefits: ['Process Automation', 'Time Savings', 'Error Reduction', 'Scalability'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/workflow-builder'
  },
  {
    title: 'AI Customer Support Bot',
    description: 'Intelligent chatbot with natural language processing and multi-channel support.',
    icon: MessageSquare,
    features: ['NLP Processing', 'Multi-channel Support', 'Knowledge Base', 'Human Handoff'],
    pricing: '$25 - $199/month',
    category: 'Customer Service',
    benefits: ['24/7 Support', 'Instant Responses', 'Cost Reduction', 'Customer Satisfaction'],
    marketPrice: '$40 - $300/month',
    link: 'https://ziontechgroup.com/ai-support-bot'
  },
  {
    title: 'Smart Inventory Management',
    description: 'AI-powered inventory optimization with demand forecasting and automated reordering.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Support', 'Analytics'],
    pricing: '$59 - $399/month',
    category: 'Inventory',
    benefits: ['Reduced Stockouts', 'Lower Costs', 'Better Planning', 'Automated Management'],
    marketPrice: '$80 - $600/month',
    link: 'https://ziontechgroup.com/smart-inventory'
  },
  {
    title: 'AI Email Marketing Platform',
    description: 'Intelligent email campaigns with personalization, A/B testing, and automation.',
    icon: Mail,
    features: ['AI Personalization', 'A/B Testing', 'Automation', 'Advanced Analytics'],
    pricing: '$29 - $199/month',
    category: 'Email Marketing',
    benefits: ['Higher Open Rates', 'Better Engagement', 'Automated Campaigns', 'ROI Tracking'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-email-marketing'
  },
  {
    title: 'Smart Project Management',
    description: 'AI-enhanced project management with resource optimization and risk prediction.',
    icon: Calendar,
    features: ['AI Resource Planning', 'Risk Prediction', 'Time Tracking', 'Collaboration Tools'],
    pricing: '$39 - $299/month',
    category: 'Event Management'
  },
  {
    title: 'AI-Powered Social Proof Widgets',
    description: 'Real-time social proof widgets with AI optimization for increased conversions.',
    icon: Globe,
    features: ['Real-time Activity', 'Customizable Display', 'E-commerce Integration', 'Conversion Analytics'],
    pricing: '$19 - $99/month',
    category: 'Marketing'
  },
  {
    title: 'AI-Powered Customer Loyalty Tracker',
    description: 'Intelligent loyalty program management with AI-driven engagement strategies.',
    icon: Heart,
    features: ['Points System', 'Engagement Tracking', 'Reward Management', 'AI Personalization'],
    pricing: '$39 - $199/month',
    category: 'Customer Retention'
  },
  {
    title: 'AI-Powered Personalized E-Learning',
    description: 'Adaptive learning platform with AI-powered personalization and skill assessment.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Skill Assessment', 'Progress Tracking', 'AI Tutoring'],
    pricing: '$49 - $299/month',
    category: 'Education'
  },
  {
    title: 'AI-Powered Local SEO Optimizer',
    description: 'Comprehensive local SEO optimization with AI-powered keyword research and competitor analysis.',
    icon: Search,
    features: ['Keyword Research', 'Listing Optimization', 'Competitor Analysis', 'Performance Tracking'],
    pricing: '$79 - $399/month',
    category: 'SEO'
  },
  {
    title: 'AI-Powered Online Booking System',
    description: 'Intelligent appointment scheduling with AI optimization and automated reminders.',
    icon: Calendar,
    features: ['Smart Scheduling', 'Calendar Integration', 'Automated Reminders', 'Client Management'],
    pricing: '$29 - $149/month',
    category: 'Scheduling'
  },
  {
    title: 'AI-Powered Referral Program Manager',
    description: 'Automated referral program management with AI-driven optimization and fraud detection.',
    icon: Users,
    features: ['Referral Tracking', 'Reward Management', 'Fraud Detection', 'Performance Analytics'],
    pricing: '$39 - $199/month',
    category: 'Marketing'
  },
  {
    title: 'AI-Powered Smart Contract Auditor',
    description: 'Automated smart contract security analysis and vulnerability detection using AI.',
    icon: Shield,
    features: ['Security Analysis', 'Vulnerability Detection', 'Gas Optimization', 'Compliance Checking'],
    pricing: '$299 - $1,499/month',
    category: 'Blockchain Security'
  },
  {
    title: 'AI-Powered Voice Analytics Platform',
    description: 'Advanced voice analysis for customer service, sales, and training optimization.',
    icon: Mic,
    features: ['Sentiment Analysis', 'Call Quality Scoring', 'Training Insights', 'Performance Metrics'],
    pricing: '$199 - $999/month',
    category: 'Voice Analytics'
  },
  {
    title: 'AI-Powered Carbon Footprint Tracker',
    description: 'Environmental impact tracking and sustainability optimization for businesses.',
    icon: Sprout,
    features: ['Carbon Tracking', 'Sustainability Metrics', 'Optimization Recommendations', 'Reporting'],
    pricing: '$99 - $499/month',
    category: 'Sustainability'
  },
  {
    title: 'AI-Powered Mental Health Assistant',
    description: 'AI-powered mental health support and wellness tracking for employees and individuals.',
    icon: Heart,
    features: ['Mood Tracking', 'Wellness Insights', 'Resource Recommendations', 'Privacy Protection'],
    pricing: '$19 - $99/month',
    category: 'Health & Wellness'
  },
  {
    title: 'AI-Powered Cryptocurrency Tax Calculator',
    description: 'Automated cryptocurrency tax calculation and reporting with AI-powered optimization.',
    icon: DollarSign,
    features: ['Tax Calculation', 'Transaction Tracking', 'Report Generation', 'Compliance Checking'],
    pricing: '$49 - $299/month',
    category: 'Crypto Finance'
  },
  {
    title: 'AI-Powered Remote Work Analytics',
    description: 'Productivity and engagement analytics for remote teams with AI insights.',
    icon: Monitor,
    features: ['Productivity Metrics', 'Engagement Tracking', 'Wellness Monitoring', 'Team Insights'],
    pricing: '$79 - $399/month',
    category: 'Remote Work'
  },
  {
    title: 'AI-Powered Subscription Management',
    description: 'Intelligent subscription lifecycle management with churn prediction and optimization.',
    icon: Settings,
    features: ['Churn Prediction', 'Lifecycle Management', 'Pricing Optimization', 'Customer Insights'],
    pricing: '$99 - $599/month',
    category: 'Subscription Management'
  },
  {
    title: 'AI-Powered Code Documentation Generator',
    description: 'Automatically generate comprehensive documentation from code with AI analysis.',
    icon: FileText,
    features: ['Auto Documentation', 'API Documentation', 'Code Comments', 'Interactive Examples'],
    pricing: '$79 - $399/month',
    category: 'Development Tools',
    popular: true
  },
  {
    title: 'Smart Contract Testing Suite',
    description: 'Comprehensive testing framework for smart contracts with automated vulnerability detection.',
    icon: Shield,
    features: ['Unit Testing', 'Integration Testing', 'Security Auditing', 'Gas Optimization'],
    pricing: '$199 - $999/month',
    category: 'Blockchain'
  },
  {
    title: 'AI-Powered Database Query Optimizer',
    description: 'Intelligent database query optimization and performance monitoring.',
    icon: Database,
    features: ['Query Analysis', 'Performance Monitoring', 'Index Recommendations', 'Cost Optimization'],
    pricing: '$149 - $799/month',
    category: 'Database'
  },
  {
    title: 'Real-time Collaboration Whiteboard',
    description: 'AI-enhanced collaborative whiteboard with smart drawing and idea organization.',
    icon: Target,
    features: ['Real-time Collaboration', 'AI Drawing Assistant', 'Idea Organization', 'Export Options'],
    pricing: '$29 - $149/month',
    category: 'Collaboration'
  },
  {
    title: 'AI-Powered API Documentation Generator',
    description: 'Automatically generate interactive API documentation from OpenAPI specs.',
    icon: Code,
    features: ['Auto Generation', 'Interactive Docs', 'Testing Interface', 'Version Management'],
    pricing: '$49 - $299/month',
    category: 'API Tools'
  },
  {
    title: 'Smart Contract Deployment Manager',
    description: 'Automated smart contract deployment and management across multiple blockchains.',
    icon: Rocket,
    features: ['Multi-chain Deployment', 'Version Control', 'Automated Testing', 'Monitoring'],
    pricing: '$99 - $499/month',
    category: 'Blockchain'
  },
  {
    title: 'AI-Powered Error Monitoring',
    description: 'Intelligent error tracking and debugging assistance for applications.',
    icon: Monitor,
    features: ['Error Tracking', 'AI Debugging', 'Performance Monitoring', 'Alert Management'],
    pricing: '$39 - $199/month',
    category: 'Monitoring'
  },
  {
    title: 'Smart Contract Analytics Dashboard',
    description: 'Comprehensive analytics for smart contract performance and usage.',
    icon: BarChart3,
    features: ['Usage Analytics', 'Performance Metrics', 'Cost Analysis', 'User Behavior'],
    pricing: '$79 - $399/month',
    category: 'Analytics'
  },
  {
    title: 'AI-Powered Code Refactoring Assistant',
    description: 'Intelligent code refactoring suggestions and automated improvements.',
    icon: Code,
    features: ['Refactoring Suggestions', 'Code Quality Analysis', 'Automated Fixes', 'Best Practices'],
    pricing: '$99 - $499/month',
    category: 'Development Tools'
  },
  {
    title: 'Smart Contract Auditor',
    description: 'Automated smart contract security analysis and vulnerability detection for blockchain projects.',
    icon: Shield,
    features: ['Vulnerability Detection', 'Gas Optimization', 'Compliance Checks', 'Audit Reports'],
    pricing: '$1,999 - $9,999/project',
    category: 'Blockchain',
    popular: true
  },
  {
    title: 'Carbon Footprint Tracker',
    description: 'Real-time carbon footprint monitoring and sustainability reporting for businesses.',
    icon: Sprout,
    features: ['Real-time Tracking', 'Sustainability Reports', 'Carbon Credits', 'Green Certifications'],
    pricing: '$199 - $999/month',
    category: 'Sustainability'
  },
  {
    title: 'Voice-to-Text Meeting Transcriber',
    description: 'AI-powered meeting transcription with action items and key insights extraction.',
    icon: Mic,
    features: ['Real-time Transcription', 'Action Items', 'Speaker Identification', 'Meeting Analytics'],
    pricing: '$49 - $299/month',
    category: 'Productivity'
  },
  {
    title: 'AI-Powered A/B Testing Platform',
    description: 'Intelligent A/B testing with automated statistical significance and optimization recommendations.',
    icon: Target,
    features: ['Automated Testing', 'Statistical Analysis', 'Conversion Optimization', 'Multi-variate Testing'],
    pricing: '$299 - $1,999/month',
    category: 'Marketing'
  },
  {
    title: 'Smart Inventory Predictor',
    description: 'AI-driven demand forecasting and inventory optimization for retail and e-commerce.',
    icon: Package,
    features: ['Demand Forecasting', 'Stock Optimization', 'Seasonal Analysis', 'Supplier Integration'],
    pricing: '$399 - $2,499/month',
    category: 'E-commerce'
  },
  {
    title: 'Automated Compliance Monitor',
    description: 'Real-time compliance monitoring for GDPR, HIPAA, SOX, and other regulatory requirements.',
    icon: CheckCircle,
    features: ['Multi-regulation Support', 'Real-time Monitoring', 'Audit Trails', 'Compliance Reports'],
    pricing: '$599 - $3,999/month',
    category: 'Compliance'
  },
  {
    title: 'AI-Powered Customer Churn Predictor',
    description: 'Predict and prevent customer churn with machine learning and behavioral analytics.',
    icon: TrendingUp,
    features: ['Churn Prediction', 'Risk Scoring', 'Retention Campaigns', 'Customer Insights'],
    pricing: '$199 - $1,499/month',
    category: 'Customer Success'
  },
  {
    title: 'Smart Document Workflow',
    description: 'Automated document processing with OCR, classification, and intelligent routing.',
    icon: FileText,
    features: ['OCR Processing', 'Document Classification', 'Workflow Automation', 'Data Extraction'],
    pricing: '$149 - $899/month',
    category: 'Document Management'
  },
  {
    title: 'AI-Powered Price Optimization',
    description: 'Dynamic pricing optimization using machine learning and market analysis.',
    icon: DollarSign,
    features: ['Dynamic Pricing', 'Market Analysis', 'Competitor Tracking', 'Revenue Optimization'],
    pricing: '$299 - $1,999/month',
    category: 'Pricing'
  },
  {
    title: 'Smart Energy Management',
    description: 'AI-powered energy consumption optimization for buildings and facilities.',
    icon: Zap,
    features: ['Energy Monitoring', 'Consumption Optimization', 'Predictive Maintenance', 'Cost Reduction'],
    pricing: '$199 - $1,299/month',
    category: 'Energy'
  },
  {
    title: 'Automated Social Media Sentiment Analysis',
    description: 'Real-time social media monitoring and sentiment analysis for brand reputation management.',
    icon: Globe,
    features: ['Real-time Monitoring', 'Sentiment Analysis', 'Crisis Detection', 'Brand Reports'],
    pricing: '$99 - $599/month',
    category: 'Social Media'
  },
  {
    title: 'AI-Powered Fraud Detection API',
    description: 'Real-time fraud detection and prevention for financial transactions and user activities.',
    icon: Shield,
    features: ['Real-time Detection', 'Machine Learning Models', 'Risk Scoring', 'API Integration'],
    pricing: '$0.01 - $0.10 per transaction',
    category: 'Security'
  },
  {
    title: 'Smart Recruitment Screening',
    description: 'AI-powered candidate screening and interview scheduling for HR teams.',
    icon: Users,
    features: ['Resume Screening', 'Skill Matching', 'Interview Scheduling', 'Candidate Scoring'],
    pricing: '$199 - $999/month',
    category: 'HR'
  },
  // NEW INNOVATIVE MICRO SAAS SERVICES
  {
    title: 'AI-Powered Quantum Computing Simulator',
    description: 'Cloud-based quantum computing simulation platform for researchers and developers.',
    icon: Cpu,
    features: ['Quantum Circuit Design', 'Simulation Engine', 'Algorithm Library', 'Performance Analytics'],
    pricing: '$499 - $2,999/month',
    category: 'Quantum Computing',
    popular: true,
    benefits: ['Cutting-edge Technology', 'Research Acceleration', 'Cost-effective Access', 'Expert Support'],
    marketPrice: '$800 - $5,000/month',
    link: 'https://ziontechgroup.com/quantum-simulator'
  },
  {
    title: 'Blockchain Smart Contract Factory',
    description: 'No-code smart contract creation and deployment platform for Web3 applications.',
    icon: Code,
    features: ['Visual Contract Builder', 'Multi-chain Deployment', 'Template Library', 'Security Auditing'],
    pricing: '$199 - $1,499/month',
    category: 'Blockchain',
    popular: true,
    benefits: ['No Coding Required', 'Rapid Deployment', 'Security Built-in', 'Multi-chain Support'],
    marketPrice: '$300 - $2,000/month',
    link: 'https://ziontechgroup.com/smart-contract-factory'
  },
  {
    title: 'AI-Powered Metaverse Builder',
    description: 'Create immersive 3D virtual worlds and experiences with AI assistance.',
    icon: Globe,
    features: ['3D World Creation', 'AI Asset Generation', 'VR/AR Support', 'Multi-user Collaboration'],
    pricing: '$299 - $1,999/month',
    category: 'Metaverse',
    popular: true,
    benefits: ['Immersive Experiences', 'AI-powered Creation', 'Cross-platform', 'Real-time Collaboration'],
    marketPrice: '$500 - $3,000/month',
    link: 'https://ziontechgroup.com/metaverse-builder'
  },
  {
    title: 'Neural Network Model Marketplace',
    description: 'Buy, sell, and deploy pre-trained AI models with one-click integration.',
    icon: Brain,
    features: ['Model Marketplace', 'One-click Deploy', 'Performance Metrics', 'Custom Training'],
    pricing: '$99 - $999/month',
    category: 'AI Marketplace',
    popular: true,
    benefits: ['Ready-to-use Models', 'Easy Integration', 'Performance Guaranteed', 'Continuous Updates'],
    marketPrice: '$150 - $1,500/month',
    link: 'https://ziontechgroup.com/ai-model-marketplace'
  },
  {
    title: 'Edge AI Computing Platform',
    description: 'Deploy AI models at the edge for real-time processing and reduced latency.',
    icon: Network,
    features: ['Edge Deployment', 'Real-time Processing', 'Model Optimization', 'Device Management'],
    pricing: '$199 - $1,299/month',
    category: 'Edge Computing',
    benefits: ['Ultra-low Latency', 'Offline Capability', 'Cost Efficiency', 'Scalable Architecture'],
    marketPrice: '$300 - $2,000/month',
    link: 'https://ziontechgroup.com/edge-ai-platform'
  },
  {
    title: 'AI-Powered Digital Twin Creator',
    description: 'Create digital twins of physical assets with real-time monitoring and simulation.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Data', 'Predictive Analytics', 'Simulation Engine'],
    pricing: '$399 - $2,499/month',
    category: 'Digital Twin',
    popular: true,
    benefits: ['Real-time Monitoring', 'Predictive Maintenance', 'Cost Optimization', 'Risk Reduction'],
    marketPrice: '$600 - $4,000/month',
    link: 'https://ziontechgroup.com/digital-twin-creator'
  },
  {
    title: 'Autonomous Drone Fleet Manager',
    description: 'AI-powered drone fleet management for delivery, surveillance, and inspection.',
    icon: Rocket,
    features: ['Fleet Coordination', 'Route Optimization', 'Autonomous Flight', 'Real-time Monitoring'],
    pricing: '$599 - $3,999/month',
    category: 'Drone Management',
    benefits: ['Fully Autonomous', 'Cost Reduction', 'Safety First', 'Scalable Operations'],
    marketPrice: '$900 - $6,000/month',
    link: 'https://ziontechgroup.com/drone-fleet-manager'
  },
  {
    title: 'AI-Powered Synthetic Data Generator',
    description: 'Generate high-quality synthetic data for training AI models while preserving privacy.',
    icon: Database,
    features: ['Privacy-preserving', 'High-quality Data', 'Custom Datasets', 'API Integration'],
    pricing: '$149 - $999/month',
    category: 'Data Generation',
    benefits: ['Privacy Compliant', 'Unlimited Data', 'High Quality', 'Easy Integration'],
    marketPrice: '$250 - $1,500/month',
    link: 'https://ziontechgroup.com/synthetic-data-generator'
  },
  {
    title: 'Quantum-Safe Cryptography Manager',
    description: 'Post-quantum cryptography solutions to protect against quantum computing threats.',
    icon: Shield,
    features: ['Quantum-safe Algorithms', 'Migration Tools', 'Compliance Checking', 'Performance Monitoring'],
    pricing: '$299 - $1,999/month',
    category: 'Quantum Security',
    popular: true,
    benefits: ['Future-proof Security', 'Easy Migration', 'Compliance Ready', 'Expert Support'],
    marketPrice: '$500 - $3,000/month',
    link: 'https://ziontechgroup.com/quantum-safe-crypto'
  },
  {
    title: 'AI-Powered Space Mission Planner',
    description: 'Optimize space missions and satellite operations with AI-powered planning tools.',
    icon: Rocket,
    features: ['Mission Planning', 'Orbit Optimization', 'Resource Management', 'Risk Assessment'],
    pricing: '$999 - $9,999/month',
    category: 'Space Technology',
    benefits: ['Mission Success', 'Cost Optimization', 'Risk Reduction', 'Expert Algorithms'],
    marketPrice: '$1,500 - $15,000/month',
    link: 'https://ziontechgroup.com/space-mission-planner'
  },
  {
    title: 'Biometric Authentication Platform',
    description: 'Multi-modal biometric authentication with AI-powered fraud detection.',
    icon: Eye,
    features: ['Face Recognition', 'Fingerprint Scanning', 'Voice Authentication', 'Liveness Detection'],
    pricing: '$0.10 - $0.50 per authentication',
    category: 'Biometrics',
    benefits: ['High Security', 'User-friendly', 'Fraud Prevention', 'Scalable'],
    marketPrice: '$0.15 - $0.75 per authentication',
    link: 'https://ziontechgroup.com/biometric-auth'
  },
  {
    title: 'AI-Powered Climate Prediction Engine',
    description: 'Advanced climate modeling and weather prediction using machine learning.',
    icon: Droplets,
    features: ['Weather Forecasting', 'Climate Modeling', 'Risk Assessment', 'API Integration'],
    pricing: '$199 - $1,499/month',
    category: 'Climate Tech',
    benefits: ['Accurate Predictions', 'Risk Mitigation', 'Cost Savings', 'Environmental Impact'],
    marketPrice: '$300 - $2,500/month',
    link: 'https://ziontechgroup.com/climate-prediction'
  },
  {
    title: 'Autonomous Vehicle Fleet Manager',
    description: 'AI-powered management system for autonomous vehicle fleets and logistics.',
    icon: Car,
    features: ['Fleet Coordination', 'Route Optimization', 'Safety Monitoring', 'Maintenance Scheduling'],
    pricing: '$499 - $3,999/month',
    category: 'Autonomous Vehicles',
    popular: true,
    benefits: ['Fully Autonomous', 'Safety First', 'Cost Efficient', 'Scalable'],
    marketPrice: '$800 - $6,000/month',
    link: 'https://ziontechgroup.com/autonomous-fleet-manager'
  },
  {
    title: 'AI-Powered Drug Discovery Platform',
    description: 'Accelerate drug discovery with AI-powered molecular design and testing.',
    icon: Heart,
    features: ['Molecular Design', 'Drug Testing', 'Side Effect Prediction', 'Clinical Trial Optimization'],
    pricing: '$999 - $9,999/month',
    category: 'Healthcare AI',
    benefits: ['Faster Discovery', 'Cost Reduction', 'Higher Success Rate', 'Life-saving Impact'],
    marketPrice: '$1,500 - $15,000/month',
    link: 'https://ziontechgroup.com/drug-discovery-platform'
  },
  {
    title: 'Smart City IoT Management Platform',
    description: 'Comprehensive IoT platform for smart city infrastructure and citizen services.',
    icon: Building,
    features: ['Infrastructure Monitoring', 'Citizen Services', 'Traffic Management', 'Energy Optimization'],
    pricing: '$1,999 - $19,999/month',
    category: 'Smart Cities',
    benefits: ['City-wide Impact', 'Cost Savings', 'Citizen Satisfaction', 'Sustainability'],
    marketPrice: '$3,000 - $30,000/month',
    link: 'https://ziontechgroup.com/smart-city-platform'
  },
  {
    title: 'AI-Powered Gaming Engine',
    description: 'Next-generation game development platform with AI-powered content generation.',
    icon: Gamepad2,
    features: ['AI Content Generation', 'Procedural Worlds', 'Smart NPCs', 'Real-time Adaptation'],
    pricing: '$199 - $1,999/month',
    category: 'Gaming',
    benefits: ['Infinite Content', 'Engaging Experiences', 'Reduced Development Time', 'Player Retention'],
    marketPrice: '$300 - $3,000/month',
    link: 'https://ziontechgroup.com/ai-gaming-engine'
  },
  {
    title: 'AI-Powered Music Composition Studio',
    description: 'AI-assisted music creation and production platform for artists and producers.',
    icon: Music,
    features: ['AI Composition', 'Style Transfer', 'Collaborative Tools', 'Mastering Suite'],
    pricing: '$49 - $499/month',
    category: 'Creative AI',
    benefits: ['Unlimited Creativity', 'Professional Quality', 'Time Saving', 'Royalty-free'],
    marketPrice: '$75 - $750/month',
    link: 'https://ziontechgroup.com/ai-music-studio'
  },
  {
    title: 'AI-Powered Art Generator',
    description: 'Create stunning digital art and NFTs with AI-powered generation tools.',
    icon: Palette,
    features: ['Style Transfer', 'NFT Creation', 'Custom Training', 'Marketplace Integration'],
    pricing: '$29 - $299/month',
    category: 'Digital Art',
    benefits: ['Unique Artworks', 'NFT Ready', 'Multiple Styles', 'Commercial Use'],
    marketPrice: '$50 - $500/month',
    link: 'https://ziontechgroup.com/ai-art-generator'
  },
  {
    title: 'AI-Powered Video Production Suite',
    description: 'Automated video creation, editing, and optimization for content creators.',
    icon: Video,
    features: ['Auto Editing', 'Voice Synthesis', 'Scene Generation', 'Multi-format Export'],
    pricing: '$99 - $999/month',
    category: 'Video Production',
    benefits: ['Professional Quality', 'Time Saving', 'Cost Effective', 'Scalable'],
    marketPrice: '$150 - $1,500/month',
    link: 'https://ziontechgroup.com/ai-video-suite'
  },
  {
    title: 'AI-Powered Photography Assistant',
    description: 'Intelligent photo editing, enhancement, and organization platform.',
    icon: CameraIcon,
    features: ['Auto Enhancement', 'Object Recognition', 'Smart Organization', 'Batch Processing'],
    pricing: '$19 - $199/month',
    category: 'Photography',
    benefits: ['Professional Results', 'Time Saving', 'Smart Organization', 'Easy to Use'],
    marketPrice: '$30 - $300/month',
    link: 'https://ziontechgroup.com/ai-photography-assistant'
  },
  {
    title: 'Automated Backup & Recovery',
    description: 'Intelligent backup scheduling and disaster recovery for cloud and on-premises systems.',
    icon: HardDrive,
    features: ['Automated Backups', 'Disaster Recovery', 'Data Validation', 'Compliance'],
    pricing: '$49 - $399/month',
    category: 'Data Protection'
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Automated content moderation for text, images, and videos using advanced AI models.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Custom Rules', 'Real-time Processing', 'API Integration'],
    pricing: '$0.001 - $0.01 per piece of content',
    category: 'Content Safety'
  },
  {
    title: 'Smart Contract Testing Platform',
    description: 'Automated testing and simulation platform for smart contracts and DeFi protocols.',
    icon: Code,
    features: ['Automated Testing', 'Simulation Environment', 'Security Analysis', 'Gas Optimization'],
    pricing: '$299 - $1,999/month',
    category: 'Blockchain'
  },
  {
    title: 'AI-Powered Email Deliverability',
    description: 'Optimize email deliverability and inbox placement using AI and machine learning.',
    icon: Mail,
    features: ['Deliverability Optimization', 'Reputation Monitoring', 'A/B Testing', 'Analytics'],
    pricing: '$199 - $1,299/month',
    category: 'Email Marketing'
  },
  {
    title: 'Automated API Documentation Generator',
    description: 'AI-powered API documentation generation and maintenance for development teams.',
    icon: FileText,
    features: ['Auto Documentation', 'Code Analysis', 'Interactive Examples', 'Version Control'],
    pricing: '$99 - $599/month',
    category: 'Developer Tools'
  },
  {
    title: 'Smart Resource Scheduler',
    description: 'AI-powered resource scheduling and optimization for teams and facilities.',
    icon: Calendar,
    features: ['Smart Scheduling', 'Calendar Integration', 'Conflict Resolution', 'Time Zone Handling'],
    pricing: '$19 - $99/month',
    category: 'Scheduling',
    link: 'https://meetingscheduler.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'Automated code review with security scanning, performance analysis, and best practice recommendations.',
    icon: Code,
    features: ['Security Scanning', 'Performance Analysis', 'Best Practice Checks', 'Automated Comments'],
    pricing: '$199 - $999/month',
    category: 'Development',
    popular: true,
    link: 'https://codereviewai.ziontechgroup.com'
  },
  {
    title: 'Smart Contract Analytics Platform',
    description: 'Blockchain smart contract analysis, security auditing, and performance monitoring.',
    icon: Shield,
    features: ['Security Auditing', 'Gas Optimization', 'Vulnerability Detection', 'Performance Monitoring'],
    pricing: '$299 - $1,999/month',
    category: 'Blockchain',
    link: 'https://smartcontractai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered SEO Content Optimizer',
    description: 'Intelligent SEO content analysis and optimization with real-time ranking predictions.',
    icon: Search,
    features: ['Content Analysis', 'Keyword Optimization', 'Ranking Predictions', 'Competitor Analysis'],
    pricing: '$79 - $399/month',
    category: 'SEO',
    link: 'https://seooptimizer.ziontechgroup.com'
  },
  {
    title: 'Real-Time Language Translation API',
    description: 'Advanced neural translation service with 100+ languages and context-aware translations.',
    icon: Globe,
    features: ['100+ Languages', 'Context Awareness', 'Real-time Translation', 'API Integration'],
    pricing: '$0.01 - $0.05 per 1000 characters',
    category: 'Translation',
    link: 'https://translationapi.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Video Analytics',
    description: 'Intelligent video analysis with object detection, sentiment analysis, and content moderation.',
    icon: Video,
    features: ['Object Detection', 'Sentiment Analysis', 'Content Moderation', 'Real-time Processing'],
    pricing: '$0.10 - $0.50 per minute',
    category: 'Video AI',
    link: 'https://videoanalytics.ziontechgroup.com'
  },
  {
    title: 'Smart Energy Management System',
    description: 'IoT-based energy monitoring and optimization for buildings and industrial facilities.',
    icon: Zap,
    features: ['Real-time Monitoring', 'Predictive Analytics', 'Cost Optimization', 'Automated Controls'],
    pricing: '$199 - $1,299/month',
    category: 'IoT',
    link: 'https://energyai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Customer Churn Prediction',
    description: 'Machine learning models to predict and prevent customer churn with actionable insights.',
    icon: TrendingUp,
    features: ['Churn Prediction', 'Risk Scoring', 'Intervention Strategies', 'Real-time Alerts'],
    pricing: '$299 - $1,499/month',
    category: 'Analytics',
    link: 'https://churnprediction.ziontechgroup.com'
  },
  {
    title: 'Blockchain Document Verification',
    description: 'Immutable document verification and authentication using blockchain technology.',
    icon: FileText,
    features: ['Document Verification', 'Blockchain Storage', 'Tamper Detection', 'API Integration'],
    pricing: '$0.50 - $2.00 per document',
    category: 'Blockchain',
    link: 'https://docverify.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Supply Chain Risk Assessment',
    description: 'Intelligent supply chain risk analysis with predictive modeling and mitigation strategies.',
    icon: Package,
    features: ['Risk Assessment', 'Predictive Modeling', 'Mitigation Strategies', 'Real-time Monitoring'],
    pricing: '$499 - $2,999/month',
    category: 'Supply Chain',
    link: 'https://supplychainai.ziontechgroup.com'
  },
  {
    title: 'Smart Home Automation Hub',
    description: 'AI-powered home automation with voice control, learning algorithms, and energy optimization.',
    icon: Home,
    features: ['Voice Control', 'Learning Algorithms', 'Energy Optimization', 'Device Integration'],
    pricing: '$99 - $499/month',
    category: 'Smart Home',
    link: 'https://smarthomeai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Financial Planning Assistant',
    description: 'Personalized financial planning with investment recommendations and risk assessment.',
    icon: DollarSign,
    features: ['Financial Planning', 'Investment Recommendations', 'Risk Assessment', 'Goal Tracking'],
    pricing: '$29 - $199/month',
    category: 'FinTech',
    link: 'https://financialai.ziontechgroup.com'
  },
  {
    title: 'Real-Time Sentiment Analysis API',
    description: 'Advanced sentiment analysis for social media, reviews, and customer feedback in real-time.',
    icon: MessageSquare,
    features: ['Real-time Analysis', 'Multi-language Support', 'Emotion Detection', 'API Integration'],
    pricing: '$0.02 - $0.10 per 1000 texts',
    category: 'Analytics',
    link: 'https://sentimentapi.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Inventory Forecasting',
    description: 'Intelligent inventory forecasting with demand prediction and automated reordering.',
    icon: BarChart3,
    features: ['Demand Forecasting', 'Automated Reordering', 'Seasonal Analysis', 'Multi-location Support'],
    pricing: '$199 - $999/month',
    category: 'Inventory',
    link: 'https://inventoryforecast.ziontechgroup.com'
  },
  {
    title: 'Smart Contract Development Platform',
    description: 'No-code smart contract creation with testing, deployment, and monitoring tools.',
    icon: Code,
    features: ['No-code Creation', 'Testing Tools', 'Deployment Automation', 'Monitoring Dashboard'],
    pricing: '$99 - $599/month',
    category: 'Blockchain',
    link: 'https://smartcontractdev.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Personal Assistant API',
    description: 'Advanced personal assistant with natural language processing and task automation.',
    icon: Bot,
    features: ['Natural Language Processing', 'Task Automation', 'Calendar Management', 'API Integration'],
    pricing: '$0.05 - $0.25 per request',
    category: 'AI Assistant',
    link: 'https://personalassistant.ziontechgroup.com'
  },
  {
    title: 'Blockchain Identity Verification',
    description: 'Decentralized identity verification with privacy-preserving authentication.',
    icon: Lock,
    features: ['Decentralized Identity', 'Privacy Protection', 'Zero-knowledge Proofs', 'API Integration'],
    pricing: '$0.10 - $0.50 per verification',
    category: 'Identity',
    link: 'https://identityverify.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Market Research Platform',
    description: 'Intelligent market research with competitor analysis, trend prediction, and consumer insights.',
    icon: Search,
    features: ['Competitor Analysis', 'Trend Prediction', 'Consumer Insights', 'Market Reports'],
    pricing: '$299 - $1,999/month',
    category: 'Market Research',
    link: 'https://marketresearch.ziontechgroup.com'
  },
  {
    title: 'Smart Contract Monitoring & Analytics',
    description: 'Real-time monitoring and analytics for smart contracts with security alerts and performance metrics.',
    icon: Monitor,
    features: ['Real-time Monitoring', 'Security Alerts', 'Performance Metrics', 'Gas Optimization'],
    pricing: '$199 - $1,299/month',
    category: 'Blockchain',
    link: 'https://contractmonitor.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Email Security Scanner',
    description: 'Advanced email security with phishing detection, malware scanning, and threat intelligence.',
    icon: Mail,
    features: ['Phishing Detection', 'Malware Scanning', 'Threat Intelligence', 'Real-time Protection'],
    pricing: '$2 - $10 per user/month',
    category: 'Security',
    link: 'https://emailsecurity.ziontechgroup.com'
  },
  {
    title: 'Code Review Assistant',
    description: 'AI-powered code review with automated suggestions and security vulnerability detection.',
    icon: Code,
    features: ['AI Code Review', 'Security Scanning', 'Performance Analysis', 'Team Collaboration'],
    pricing: '$99 - $499/month',
    category: 'Development',
    link: 'https://codereview.ziontechgroup.com'
  },
  {
    title: 'Customer Support Ticketing',
    description: 'AI-enhanced customer support with automated ticket routing and response suggestions.',
    icon: Headphones,
    features: ['AI Ticket Routing', 'Response Suggestions', 'Knowledge Base', 'Multi-channel Support'],
    pricing: '$79 - $399/month',
    category: 'Customer Support',
    link: 'https://supporttickets.ziontechgroup.com'
  },
  {
    title: 'Project Management Hub',
    description: 'Comprehensive project management with AI-powered resource allocation and timeline optimization.',
    icon: Kanban,
    features: ['AI Resource Allocation', 'Timeline Optimization', 'Team Collaboration', 'Progress Tracking'],
    pricing: '$59 - $299/month',
    category: 'Project Management',
    link: 'https://projecthub.ziontechgroup.com'
  },
  {
    title: 'Data Backup & Recovery',
    description: 'Automated data backup with instant recovery and cross-platform synchronization.',
    icon: HardDrive,
    features: ['Automated Backups', 'Instant Recovery', 'Cross-platform Sync', 'Version History'],
    pricing: '$39 - $199/month',
    category: 'Data Management',
    link: 'https://databackup.ziontechgroup.com'
  },
  {
    title: 'AI-Powered SEO Optimizer',
    description: 'Automated SEO analysis and optimization with real-time keyword tracking and content suggestions.',
    icon: Search,
    features: ['Keyword Research', 'Content Optimization', 'Rank Tracking', 'Competitor Analysis'],
    pricing: '$149 - $799/month',
    category: 'SEO',
    popular: true,
    link: 'https://seooptimizer.ziontechgroup.com'
  },
  {
    title: 'Smart Analytics Dashboard',
    description: 'Real-time business intelligence with AI-driven insights and predictive analytics.',
    icon: BarChart3,
    features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization'],
    pricing: '$199 - $999/month',
    category: 'Analytics',
    link: 'https://smartanalytics.ziontechgroup.com'
  },
  {
    title: 'Automated Testing Suite',
    description: 'Comprehensive automated testing platform for web and mobile applications.',
    icon: CheckCircle,
    features: ['UI Testing', 'API Testing', 'Performance Testing', 'Cross-browser Testing'],
    pricing: '$299 - $1,499/month',
    category: 'Quality Assurance',
    link: 'https://autotesting.ziontechgroup.com'
  },
  {
    title: 'Customer Onboarding Platform',
    description: 'Streamlined customer onboarding with interactive tutorials and progress tracking.',
    icon: Rocket,
    features: ['Interactive Tutorials', 'Progress Tracking', 'Personalized Paths', 'Analytics'],
    pricing: '$99 - $499/month',
    category: 'Customer Success',
    link: 'https://onboarding.ziontechgroup.com'
  },
  {
    title: 'AI Content Moderation',
    description: 'Advanced content moderation using machine learning for text, images, and video content.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Custom Rules Engine', 'Real-time Processing', 'API Integration'],
    pricing: '$399 - $1,999/month',
    category: 'Content Safety',
    link: 'https://contentmoderation.ziontechgroup.com'
  },
  {
    title: 'Subscription Management Hub',
    description: 'Complete subscription lifecycle management with billing automation and analytics.',
    icon: Receipt,
    features: ['Billing Automation', 'Subscription Analytics', 'Churn Prevention', 'Payment Processing'],
    pricing: '$199 - $999/month',
    category: 'Subscription Management',
    link: 'https://subscriptionhub.ziontechgroup.com'
  },
  {
    title: 'API Documentation Generator',
    description: 'Automated API documentation with interactive testing and version management.',
    icon: Code,
    features: ['Auto Documentation', 'Interactive Testing', 'Version Management', 'Team Collaboration'],
    pricing: '$79 - $399/month',
    category: 'API Development',
    link: 'https://apidocs.ziontechgroup.com'
  },
  {
    title: 'AI Voice Assistant Builder',
    description: 'Create custom voice assistants with natural language processing and multi-platform deployment.',
    icon: Mic,
    features: ['Voice Recognition', 'Natural Language Processing', 'Multi-platform Deployment', 'Custom Commands'],
    pricing: '$299 - $1,499/month',
    category: 'Voice AI',
    popular: true,
    link: 'https://voiceassistant.ziontechgroup.com'
  },
  {
    title: 'Blockchain Analytics Dashboard',
    description: 'Real-time blockchain transaction monitoring and analytics for cryptocurrency businesses.',
    icon: Network,
    features: ['Transaction Monitoring', 'Wallet Analytics', 'Risk Assessment', 'Compliance Reporting'],
    pricing: '$499 - $2,999/month',
    category: 'Blockchain',
    link: 'https://blockchainanalytics.ziontechgroup.com'
  },
  {
    title: 'Quantum Computing Simulator',
    description: 'Cloud-based quantum computing simulation for research and development projects.',
    icon: Cpu,
    features: ['Quantum Circuit Design', 'Simulation Engine', 'Algorithm Testing', 'Research Tools'],
    pricing: '$999 - $4,999/month',
    category: 'Quantum Computing',
    link: 'https://quantumsim.ziontechgroup.com'
  },
  {
    title: 'Edge Computing Orchestrator',
    description: 'Manage and deploy applications across edge computing infrastructure with intelligent routing.',
    icon: Server,
    features: ['Edge Deployment', 'Intelligent Routing', 'Performance Optimization', 'Global Distribution'],
    pricing: '$399 - $1,999/month',
    category: 'Edge Computing',
    link: 'https://edgeorchestrator.ziontechgroup.com'
  },
  {
    title: 'AR/VR Content Creator',
    description: 'AI-powered augmented and virtual reality content creation and management platform.',
    icon: Video,
    features: ['3D Content Creation', 'AR/VR Publishing', 'Interactive Experiences', 'Analytics Dashboard'],
    pricing: '$199 - $999/month',
    category: 'AR/VR',
    link: 'https://arvrcreator.ziontechgroup.com'
  },
  {
    title: 'IoT Device Manager',
    description: 'Comprehensive IoT device management with real-time monitoring and automated maintenance.',
    icon: Settings,
    features: ['Device Monitoring', 'Automated Maintenance', 'Firmware Updates', 'Security Management'],
    pricing: '$149 - $799/month',
    category: 'IoT',
    link: 'https://iotmanager.ziontechgroup.com'
  },
  {
    title: 'Digital Twin Platform',
    description: 'Create and manage digital twins of physical assets with real-time synchronization.',
    icon: Building,
    features: ['3D Modeling', 'Real-time Sync', 'Predictive Maintenance', 'Simulation Engine'],
    pricing: '$599 - $2,999/month',
    category: 'Digital Twin',
    link: 'https://digitaltwin.ziontechgroup.com'
  },
  {
    title: 'Neural Network Designer',
    description: 'Visual neural network design and training platform with pre-built models and datasets.',
    icon: Brain,
    features: ['Visual Designer', 'Pre-built Models', 'Dataset Management', 'Model Training'],
    pricing: '$399 - $1,999/month',
    category: 'Machine Learning',
    link: 'https://neuraldesigner.ziontechgroup.com'
  },
  {
    title: 'Robotic Process Automation',
    description: 'Intelligent automation for repetitive tasks with AI-powered decision making.',
    icon: Bot,
    features: ['Task Automation', 'AI Decision Making', 'Process Optimization', 'Error Handling'],
    pricing: '$299 - $1,499/month',
    category: 'RPA',
    popular: true,
    link: 'https://rpaplatform.ziontechgroup.com'
  }
];
    icon: CreditCard,
    features: ['Receipt OCR', 'Policy Compliance', 'Automated Approval', 'Analytics'],
    pricing: '$19 - $149/month',
    category: 'Finance',
    benefits: ['Time Savings', 'Policy Compliance', 'Cost Control', 'Automation'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/smart-expense-management'
  },
  {
    title: 'AI-Powered Time Tracking',
    description: 'Intelligent time tracking with automatic project detection and productivity insights.',
    icon: Clock,
    features: ['Auto Time Tracking', 'Project Detection', 'Productivity Analytics', 'Team Management'],
    pricing: '$15 - $99/month',
    category: 'Productivity',
    benefits: ['Accurate Tracking', 'Productivity Insights', 'Team Visibility', 'Billing Accuracy'],
    marketPrice: '$25 - $150/month',
    link: 'https://ziontechgroup.com/ai-time-tracking'
  },
  {
    title: 'Smart Meeting Scheduler',
    description: 'AI-powered meeting scheduling with calendar optimization and conflict resolution.',
    icon: Calendar,
    features: ['Smart Scheduling', 'Conflict Resolution', 'Time Zone Handling', 'Meeting Analytics'],
    pricing: '$9 - $79/month',
    category: 'Productivity',
    benefits: ['Time Savings', 'Fewer Conflicts', 'Better Scheduling', 'Analytics'],
    marketPrice: '$15 - $120/month',
    link: 'https://ziontechgroup.com/smart-meeting-scheduler'
  },
  {
    title: 'AI-Powered Password Manager',
    description: 'Advanced password management with AI security analysis and breach monitoring.',
    icon: Lock,
    features: ['Password Generation', 'Security Analysis', 'Breach Monitoring', 'Team Sharing'],
    pricing: '$5 - $39/month',
    category: 'Security',
    benefits: ['Enhanced Security', 'Convenience', 'Team Collaboration', 'Breach Protection'],
    marketPrice: '$8 - $60/month',
    link: 'https://ziontechgroup.com/ai-password-manager'
  },
  {
    title: 'Smart Invoice Generator',
    description: 'AI-powered invoice creation with automated data extraction and payment tracking.',
    icon: FileText,
    features: ['Auto Data Extraction', 'Template Customization', 'Payment Tracking', 'Tax Calculation'],
    pricing: '$19 - $149/month',
    category: 'Finance',
    benefits: ['Time Savings', 'Accuracy', 'Professional Invoices', 'Payment Tracking'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/smart-invoice-generator'
  },
  {
    title: 'AI-Powered Customer Feedback Analysis',
    description: 'Intelligent analysis of customer feedback with sentiment analysis and actionable insights.',
    icon: MessageSquare,
    features: ['Sentiment Analysis', 'Topic Extraction', 'Trend Analysis', 'Actionable Insights'],
    pricing: '$29 - $199/month',
    category: 'Customer Experience',
    benefits: ['Better Understanding', 'Actionable Insights', 'Customer Satisfaction', 'Competitive Edge'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-customer-feedback'
  },
  {
    title: 'Smart Inventory Forecasting',
    description: 'AI-powered inventory prediction with demand forecasting and optimization recommendations.',
    icon: Package,
    features: ['Demand Forecasting', 'Stock Optimization', 'Seasonal Analysis', 'Reorder Alerts'],
    pricing: '$39 - $299/month',
    category: 'Inventory',
    benefits: ['Reduced Stockouts', 'Lower Costs', 'Better Planning', 'Optimized Inventory'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/smart-inventory-forecasting'
  },
  {
    title: 'AI-Powered Social Media Scheduler',
    description: 'Intelligent social media management with optimal posting times and content suggestions.',
    icon: Globe,
    features: ['Optimal Timing', 'Content Suggestions', 'Multi-platform Posting', 'Engagement Analytics'],
    pricing: '$19 - $149/month',
    category: 'Social Media',
    benefits: ['Better Engagement', 'Time Savings', 'Consistent Posting', 'Growth Tracking'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-social-scheduler'
  },
  {
    title: 'Smart Document Scanner',
    description: 'AI-powered document scanning with OCR, classification, and intelligent filing.',
    icon: FileText,
    features: ['OCR Processing', 'Auto Classification', 'Smart Filing', 'Search & Retrieval'],
    pricing: '$15 - $99/month',
    category: 'Document Management',
    benefits: ['Easy Organization', 'Quick Search', 'Paperless Office', 'Time Savings'],
    marketPrice: '$25 - $150/month',
    link: 'https://ziontechgroup.com/smart-document-scanner'
  },
  {
    title: 'AI-Powered Lead Scoring',
    description: 'Intelligent lead qualification and scoring with automated follow-up recommendations.',
    icon: Target,
    features: ['Lead Scoring', 'Behavioral Analysis', 'Follow-up Automation', 'Conversion Prediction'],
    pricing: '$29 - $199/month',
    category: 'Sales',
    benefits: ['Higher Conversion', 'Better Prioritization', 'Automated Workflows', 'ROI Improvement'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-lead-scoring'
  },
  {
    title: 'Smart Email Signature Manager',
    description: 'AI-powered email signature management with dynamic content and compliance tracking.',
    icon: Mail,
    features: ['Dynamic Signatures', 'Compliance Tracking', 'Brand Consistency', 'Analytics'],
    pricing: '$9 - $59/month',
    category: 'Email Marketing',
    benefits: ['Brand Consistency', 'Compliance', 'Professional Image', 'Easy Management'],
    marketPrice: '$15 - $90/month',
    link: 'https://ziontechgroup.com/smart-email-signatures'
  },
  {
    title: 'AI-Powered Website Heatmap',
    description: 'Intelligent website analytics with user behavior tracking and optimization recommendations.',
    icon: Eye,
    features: ['Heatmap Analysis', 'User Behavior Tracking', 'Conversion Optimization', 'A/B Testing'],
    pricing: '$19 - $149/month',
    category: 'Web Analytics',
    benefits: ['Better UX', 'Higher Conversions', 'Data-Driven Decisions', 'Optimization'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-website-heatmap'
  },
  {
    title: 'Smart Appointment Booking',
    description: 'AI-powered appointment scheduling with automated reminders and conflict resolution.',
    icon: Calendar,
    features: ['Auto Scheduling', 'Reminder Automation', 'Conflict Resolution', 'Calendar Sync'],
    pricing: '$15 - $99/month',
    category: 'Scheduling',
    benefits: ['Reduced No-shows', 'Time Savings', 'Better Scheduling', 'Customer Satisfaction'],
    marketPrice: '$25 - $150/month',
    link: 'https://ziontechgroup.com/smart-appointment-booking'
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Automated content moderation with AI-powered detection of inappropriate content.',
    icon: Shield,
    features: ['Content Detection', 'Automated Moderation', 'Custom Rules', 'Real-time Processing'],
    pricing: '$39 - $299/month',
    category: 'Content Management',
    benefits: ['Safer Platform', 'Reduced Manual Work', 'Consistent Moderation', 'Scalability'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/ai-content-moderation'
  },
  {
    title: 'Smart Backup Manager',
    description: 'AI-powered backup solution with intelligent scheduling and data deduplication.',
    icon: Database,
    features: ['Auto Scheduling', 'Data Deduplication', 'Cloud Storage', 'Recovery Testing'],
    pricing: '$19 - $149/month',
    category: 'Data Management',
    benefits: ['Data Protection', 'Cost Savings', 'Automation', 'Peace of Mind'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/smart-backup-manager'
  },
  {
    title: 'AI-Powered Form Builder',
    description: 'Intelligent form creation with conditional logic and automated data processing.',
    icon: FileText,
    features: ['Drag & Drop Builder', 'Conditional Logic', 'Auto Processing', 'Analytics'],
    pricing: '$15 - $99/month',
    category: 'Form Management',
    benefits: ['Easy Creation', 'Better UX', 'Data Processing', 'Analytics'],
    marketPrice: '$25 - $150/month',
    link: 'https://ziontechgroup.com/ai-form-builder'
  }
];

const categories = [
  'All Products',
  'Marketing',
  'Sales',
  'Analytics',
  'Automation',
  'Customer Service',
  'Inventory',
  'Email Marketing',
  'Project Management',
  'Finance',
  'HR',
  'Social Media',
  'Document Management',
  'Web Optimization',
  'E-commerce',
  'Development',
  'Energy',
  'Translation',
  'Compliance',
  'Video Analytics',
  'Legal Tech',
  'SEO',
  'Productivity',
  'Security',
  'Customer Experience',
  'Web Analytics',
  'Scheduling',
  'Content Management',
  'Data Management',
  'Form Management'
];

const microSaasServices = [
  {
    title: "Custom Web Applications",
    description: "Tailored web applications designed to solve specific business problems with modern technology stacks",
    icon: Globe,
    features: [
      "Responsive Design",
      "Cross-browser Compatibility",
      "Progressive Web App (PWA)",
      "Real-time Updates",
      "User Authentication",
      "API Integration"
    ],
    color: "from-blue-500 to-cyan-500",
    benefits: [
      "Improved efficiency",
      "Better user experience",
      "Scalable architecture",
      "Cost-effective solution"
    ]
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences",
    icon: Smartphone,
    features: [
      "iOS & Android Development",
      "React Native Solutions",
      "Flutter Applications",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality"
    ],
    color: "from-green-500 to-emerald-500",
    benefits: [
      "Increased accessibility",
      "Better engagement",
      "Mobile-first design",
      "App store presence"
    ]
  },
  {
    title: "API Development & Integration",
    description: "Robust APIs and seamless integrations to connect your systems and data",
    icon: Code,
    features: [
      "RESTful API Design",
      "GraphQL Implementation",
      "Third-party Integrations",
      "API Documentation",
      "Rate Limiting & Security",
      "Webhook Support"
    ],
    color: "from-purple-500 to-pink-500",
    benefits: [
      "System connectivity",
      "Data synchronization",
      "Automated workflows",
      "Reduced manual work"
    ]
  },
  {
    title: "Data Management Solutions",
    description: "Comprehensive data handling, processing, and analytics platforms",
    icon: Database,
    features: [
      "Data Collection & Storage",
      "ETL Processes",
      "Data Visualization",
      "Real-time Analytics",
      "Data Security & Privacy",
      "Automated Reporting"
    ],
    color: "from-orange-500 to-red-500",
    benefits: [
      "Better insights",
      "Data-driven decisions",
      "Automated reporting",
      "Compliance assurance"
    ]
  },
  {
    title: "Workflow Automation",
    description: "Intelligent automation solutions that streamline business processes",
    icon: Zap,
    features: [
      "Process Automation",
      "Task Scheduling",
      "Email Automation",
      "Document Processing",
      "Approval Workflows",
      "Integration Automation"
    ],
    color: "from-yellow-500 to-orange-500",
    benefits: [
      "Reduced manual work",
      "Faster processing",
      "Fewer errors",
      "Improved efficiency"
    ]
  },
  {
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment processing and inventory management",
    icon: Layers,
    features: [
      "Online Store Setup",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing",
      "Customer Management",
      "Analytics & Reporting"
    ],
    color: "from-indigo-500 to-purple-500",
    benefits: [
      "Online presence",
      "Revenue generation",
      "Customer management",
      "Business growth"
    ]
  }
];

const platforms = [
  {
    name: "Web Development",
    icon: Globe,
    technologies: ["React", "Next.js", "Vue.js", "Angular", "Node.js", "Python", "PHP"],
    description: "Modern web applications with responsive design and optimal performance"
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"],
    description: "Cross-platform and native mobile applications for iOS and Android"
  },
  {
    name: "Backend Services",
    icon: Server,
    technologies: ["Node.js", "Python", "Java", "C#", "Go", "Ruby", "PHP"],
    description: "Scalable backend services and APIs for robust application architecture"
  },
  {
    name: "Cloud Platforms",
    icon: Cloud,
    technologies: ["AWS", "Azure", "Google Cloud", "Heroku", "Vercel", "Netlify"],
    description: "Cloud-native applications with auto-scaling and global deployment"
  },
  {
    name: "Databases",
    icon: Database,
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"],
    description: "Reliable data storage and management solutions for all application types"
  },
  {
    name: "DevOps & Deployment",
    icon: Settings,
    technologies: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins", "Terraform"],
    description: "Automated deployment and infrastructure management for seamless operations"
  }
];

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements, define project scope, and create a detailed development plan."
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Create wireframes, mockups, and interactive prototypes to visualize the final product."
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build your application using agile methodology with continuous testing and feedback."
  },
  {
    step: "04",
    title: "Deployment & Launch",
    description: "Deploy your application to production with monitoring and performance optimization."
  },
  {
    step: "05",
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, and support to ensure optimal performance and security."
  }
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$19-49",
    description: "Perfect for small businesses",
    features: ["Basic Features", "Email Support", "5 Users", "1GB Storage"],
    popular: false
  },
  {
    name: "Professional",
    price: "$49-199",
    description: "Ideal for growing businesses",
    features: ["Advanced Features", "Priority Support", "25 Users", "10GB Storage"],
    popular: true,
    benefits: ['Advanced Features', 'Priority Support', 'Scalable', 'Professional'],
    marketPrice: '$99 - $299/month',
    link: 'https://ziontechgroup.com/professional-plan'
  },
  {
    title: 'Cloud Cost Guard (FinOps Assistant)',
    description: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
    icon: DollarSign,
    features: ['Cost Anomaly Detection', 'Auto Rightsizing', 'Budget Forecasting', 'Multi-cloud Support'],
    pricing: '$299 - $1,499/month',
    category: 'FinOps',
    popular: true
  },
  {
    title: 'LLM Evaluation & Safety Suite',
    description: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.',
    icon: Shield,
    features: ['Prompt Testing', 'Bias Detection', 'Safety Checks', 'Guardrail Policies'],
    pricing: '$799 - $3,500/month',
    category: 'AI Safety',
    popular: true
  },
  {
    title: 'Customer Feedback & NPS Micro-App',
    description: 'Embed surveys, analyze sentiment and route issues to the right team automatically.',
    icon: MessageSquare,
    features: ['Survey Builder', 'Sentiment Analysis', 'Auto Routing', 'NPS Tracking'],
    pricing: '$149 - $799/month',
    category: 'Customer Success'
  },
  {
    title: 'API Rate Limiting & Analytics',
    description: 'Intelligent rate limiting with detailed analytics and usage insights.',
    icon: BarChart3,
    features: ['Smart Rate Limiting', 'Usage Analytics', 'Real-time Monitoring', 'Custom Rules'],
    pricing: '$199 - $999/month',
    category: 'API Management'
  },
  {
    title: 'Content Moderation AI',
    description: 'Automated content moderation using advanced AI for text, images, and videos.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Custom Rules', 'Real-time Processing', 'API Integration'],
    pricing: '$399 - $1,999/month',
    category: 'Content Safety'
  },
  {
    title: 'Workflow Automation Engine',
    description: 'No-code workflow automation with integrations to popular business tools.',
    icon: Settings,
    features: ['Visual Builder', '100+ Integrations', 'Conditional Logic', 'Scheduled Tasks'],
    pricing: '$99 - $599/month',
    category: 'Automation',
    popular: true
  },
  {
    title: 'AI Lead Scoring & Enrichment',
    description: 'Intelligent lead scoring and data enrichment for sales teams.',
    icon: Target,
    features: ['Lead Scoring', 'Data Enrichment', 'Behavioral Tracking', 'CRM Integration'],
    pricing: '$199 - $999/month',
    category: 'Sales'
  },
  {
    title: 'Social Media Scheduler Pro',
    description: 'Advanced social media management with AI-powered content optimization.',
    icon: Globe,
    features: ['Multi-platform Posting', 'Optimal Timing', 'Content Suggestions', 'Analytics Dashboard'],
    pricing: '$49 - $299/month',
    category: 'Social Media'
  },
  {
    title: 'Invoice & Payment Processor',
    description: 'Streamlined invoicing and payment processing for small businesses.',
    icon: DollarSign,
    features: ['Invoice Generation', 'Payment Processing', 'Recurring Billing', 'Financial Reports'],
    pricing: '$29 - $199/month',
    category: 'Finance'
  },
  {
    title: 'Project Time Tracker',
    description: 'Comprehensive time tracking and project management for teams.',
    icon: Clock,
    features: ['Time Tracking', 'Project Management', 'Team Collaboration', 'Reporting'],
    pricing: '$9 - $49/month',
    category: 'Productivity'
  },
  {
    title: 'Email Marketing Automation',
    description: 'Advanced email marketing with AI-powered personalization and automation.',
    icon: Mail,
    features: ['Email Templates', 'Automation Workflows', 'A/B Testing', 'Analytics'],
    pricing: '$39 - $299/month',
    category: 'Marketing'
  },
  {
    title: 'Inventory Management System',
    description: 'Smart inventory tracking and management for e-commerce businesses.',
    icon: Package,
    features: ['Stock Tracking', 'Low Stock Alerts', 'Supplier Management', 'Analytics'],
    pricing: '$79 - $399/month',
    category: 'E-commerce'
  },
  {
    title: 'AI-Powered Code Generator',
    description: 'Intelligent code generation and completion for developers using advanced AI.',
    icon: Code,
    features: ['Code Generation', 'Auto-completion', 'Bug Detection', 'Documentation Generation'],
    pricing: '$99 - $499/month',
    category: 'Developer Tools',
    popular: true
  },
  {
    title: 'Blockchain Analytics Platform',
    description: 'Comprehensive blockchain transaction analysis and cryptocurrency intelligence.',
    icon: Network,
    features: ['Transaction Analysis', 'Wallet Tracking', 'DeFi Analytics', 'Compliance Monitoring'],
    pricing: '$199 - $999/month',
    category: 'Blockchain'
  },
  {
    title: 'Quantum Computing Simulator',
    description: 'Cloud-based quantum computing simulation and algorithm development platform.',
    icon: Cpu,
    features: ['Quantum Circuits', 'Algorithm Testing', 'Performance Analysis', 'Educational Tools'],
    pricing: '$299 - $1,499/month',
    category: 'Quantum Computing'
  },
  {
    title: 'AI Voice Cloning Studio',
    description: 'High-fidelity voice synthesis and cloning technology for content creators.',
    icon: Mic,
    features: ['Voice Cloning', 'Emotion Synthesis', 'Multi-language Support', 'Real-time Processing'],
    pricing: '$149 - $799/month',
    category: 'Voice AI'
  },
  {
    title: 'Metaverse Development Platform',
    description: 'Complete platform for building and managing virtual worlds and experiences.',
    icon: Globe,
    features: ['3D World Builder', 'Avatar Creation', 'Physics Engine', 'Multi-user Support'],
    pricing: '$399 - $1,999/month',
    category: 'Metaverse'
  },
  {
    title: 'AI Medical Diagnosis Assistant',
    description: 'AI-powered medical image analysis and diagnostic support for healthcare professionals.',
    icon: Heart,
    features: ['Medical Imaging Analysis', 'Symptom Analysis', 'Treatment Recommendations', 'HIPAA Compliance'],
    pricing: '$499 - $2,499/month',
    category: 'Healthcare AI'
  },
  {
    title: 'Autonomous Vehicle Fleet Management',
    description: 'Complete fleet management system for autonomous vehicles and drones.',
    icon: Car,
    features: ['Fleet Tracking', 'Route Optimization', 'Maintenance Scheduling', 'Safety Monitoring'],
    pricing: '$299 - $1,499/month',
    category: 'Autonomous Systems'
  },
  {
    title: 'AI Climate Change Predictor',
    description: 'Advanced climate modeling and environmental impact prediction platform.',
    icon: Sprout,
    features: ['Climate Forecasting', 'Carbon Footprint Analysis', 'Environmental Risk Assessment', 'Sustainability Planning'],
    pricing: '$199 - $999/month',
    category: 'Climate Tech'
  },
  {
    title: 'AI-Powered Learning Management System',
    description: 'Intelligent educational platform with personalized learning paths and AI tutoring.',
    icon: BookOpen,
    features: ['Personalized Learning', 'AI Tutoring', 'Progress Tracking', 'Assessment Generation'],
    pricing: '$49 - $299/month',
    category: 'EdTech'
  },
  {
    title: 'Smart Home Automation Hub',
    description: 'AI-powered home automation and energy management system.',
    icon: Home,
    features: ['Device Integration', 'Energy Optimization', 'Predictive Control', 'Voice Commands'],
    pricing: '$29 - $199/month',
    category: 'Smart Home'
  },
  {
    title: 'AI Sports Analytics Platform',
    description: 'Advanced sports performance analysis and prediction system for teams and athletes.',
    icon: Target,
    features: ['Performance Analysis', 'Injury Prediction', 'Tactical Analysis', 'Player Scouting'],
    pricing: '$99 - $599/month',
    category: 'Sports Tech'
  },
  {
    title: 'AI Retail Optimization Suite',
    description: 'Comprehensive retail analytics and customer experience optimization platform.',
    icon: ShoppingCart,
    features: ['Customer Behavior Analysis', 'Inventory Optimization', 'Price Optimization', 'Personalization'],
    pricing: '$149 - $799/month',
    category: 'Retail AI'
  },
  {
    title: 'AI Agricultural Intelligence Platform',
    description: 'Smart farming solutions with AI-powered crop and livestock management.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Disease Detection', 'Resource Optimization'],
    pricing: '$199 - $999/month',
    category: 'AgTech'
  },
  {
    title: 'AI Mental Health Assistant',
    description: 'AI-powered mental health monitoring and support system for individuals and organizations.',
    icon: Heart,
    features: ['Mood Tracking', 'Crisis Detection', 'Therapeutic Conversations', 'Progress Monitoring'],
    pricing: '$39 - $199/month',
    category: 'HealthTech'
  },
  {
    title: 'AI Real Estate Analytics Platform',
    description: 'Intelligent property valuation and market analysis platform for real estate professionals.',
    icon: Building,
    features: ['Property Valuation', 'Market Analysis', 'Investment Recommendations', 'Risk Assessment'],
    pricing: '$99 - $499/month',
    category: 'PropTech'
  },
  {
    title: 'AI Gaming Intelligence Suite',
    description: 'AI-powered game development and player behavior analysis platform.',
    icon: Target,
    features: ['Procedural Content Generation', 'Player Behavior Analysis', 'Balancing Algorithms', 'Anti-cheat Systems'],
    pricing: '$149 - $799/month',
    category: 'Game AI'
  },
  {
    title: 'AI Supply Chain Intelligence',
    description: 'End-to-end supply chain optimization with AI-powered insights and automation.',
    icon: Network,
    features: ['Demand Forecasting', 'Supplier Risk Analysis', 'Route Optimization', 'Inventory Management'],
    pricing: '$299 - $1,499/month',
    category: 'Supply Chain AI'
  },
  {
    title: 'AI Environmental Monitoring System',
    description: 'AI-powered environmental data collection and analysis system for organizations.',
    icon: Sprout,
    features: ['Air Quality Monitoring', 'Water Quality Analysis', 'Pollution Detection', 'Environmental Reporting'],
    pricing: '$199 - $999/month',
    category: 'Environmental AI'
  },
  {
    title: 'AI Digital Twin Platform',
    description: 'AI-powered digital twin creation and simulation platform for various industries.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analysis', 'Virtual Testing'],
    pricing: '$399 - $1,999/month',
    category: 'Digital Twin'
  },
  {
    title: 'AI Edge Computing Platform',
    description: 'AI processing at the edge for real-time decision making and low-latency applications.',
    icon: Cpu,
    features: ['Real-time Processing', 'Low Latency', 'Offline Capability', 'Resource Optimization'],
    pricing: '$149 - $799/month',
    category: 'Edge AI'
  },
  {
    title: 'AI Robotic Process Automation Suite',
    description: 'Intelligent automation of complex business processes with AI-powered decision making.',
    icon: Settings,
    features: ['Process Discovery', 'Workflow Automation', 'Exception Handling', 'Performance Monitoring'],
    pricing: '$99 - $599/month',
    category: 'RPA'
  },
  {
    title: 'AI Augmented Reality Platform',
    description: 'AI-enhanced AR applications and experiences for various industries.',
    icon: Eye,
    features: ['Object Recognition', 'Spatial Mapping', 'Gesture Control', 'Real-time Rendering'],
    pricing: '$199 - $999/month',
    category: 'AR AI'
  },
  {
    title: 'AI Virtual Reality Experiences',
    description: 'Immersive VR experiences powered by artificial intelligence and machine learning.',
    icon: Monitor,
    features: ['Virtual World Generation', 'AI Avatars', 'Behavioral Simulation', 'Haptic Feedback'],
    pricing: '$299 - $1,499/month',
    category: 'VR AI'
  },
  {
    title: 'AI Internet of Things Platform',
    description: 'AI-powered IoT device management and data analytics platform.',
    icon: Network,
    features: ['Device Management', 'Data Analytics', 'Predictive Maintenance', 'Security Monitoring'],
    pricing: '$149 - $799/month',
    category: 'IoT AI'
  },
  {
    title: 'AI 5G Network Optimization',
    description: 'AI-powered 5G network management and optimization platform.',
    icon: Network,
    features: ['Network Slicing', 'Traffic Optimization', 'Quality of Service', 'Resource Allocation'],
    pricing: '$399 - $1,999/month',
    category: '5G AI'
  },
  {
    title: 'AI Blockchain Smart Contracts',
    description: 'AI-enhanced smart contract development and auditing platform.',
    icon: Code,
    features: ['Smart Contract Generation', 'Security Auditing', 'Gas Optimization', 'Automated Testing'],
    pricing: '$199 - $999/month',
    category: 'Blockchain AI'
  },
  {
    title: 'AI Quantum Machine Learning Platform',
    description: 'Quantum-enhanced machine learning algorithms and models for complex problems.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Optimization Problems', 'Pattern Recognition', 'Quantum Simulation'],
    pricing: '$499 - $2,499/month',
    category: 'Quantum ML'
  },
  {
    title: 'AI Synthetic Data Generation',
    description: 'AI-powered synthetic data creation for training and testing machine learning models.',
    icon: Database,
    features: ['Data Synthesis', 'Privacy Preservation', 'Bias Reduction', 'Quality Validation'],
    pricing: '$99 - $499/month',
    category: 'Data AI'
  },
  {
    title: 'AI Explainable AI Platform',
    description: 'Platform for creating and managing explainable AI models with transparency.',
    icon: Brain,
    features: ['Model Interpretability', 'Bias Detection', 'Fairness Metrics', 'Transparency Reports'],
    pricing: '$149 - $799/month',
    category: 'XAI'
  },
  {
    title: 'AI Federated Learning Platform',
    description: 'Distributed machine learning while preserving data privacy and security.',
    icon: Network,
    features: ['Privacy-Preserving ML', 'Distributed Training', 'Model Aggregation', 'Secure Communication'],
    pricing: '$299 - $1,499/month',
    category: 'Federated Learning'
  },
  {
    title: 'AI AutoML Platform',
    description: 'Automated machine learning model development and deployment platform.',
    icon: Settings,
    features: ['Automated Feature Engineering', 'Model Selection', 'Hyperparameter Tuning', 'Auto Deployment'],
    pricing: '$49 - $299/month',
    category: 'AutoML'
  },
  {
    title: 'AI Cybersecurity Threat Hunter',
    description: 'AI-powered threat detection and response system for enterprise security.',
    icon: Shield,
    features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Incident Forensics'],
    pricing: '$399 - $1,999/month',
    category: 'Cybersecurity AI',
    popular: true
  },
  {
    title: 'AI Personal Finance Optimizer',
    description: 'Intelligent personal finance management with AI-powered investment recommendations.',
    icon: DollarSign,
    features: ['Budget Optimization', 'Investment Analysis', 'Risk Assessment', 'Goal Tracking'],
    pricing: '$19 - $99/month',
    category: 'FinTech AI'
  },
  {
    title: 'AI Legal Document Analyzer',
    description: 'AI-powered legal document review and contract analysis platform.',
    icon: FileText,
    features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction'],
    pricing: '$199 - $999/month',
    category: 'LegalTech AI'
  },
  {
    title: 'AI Energy Management System',
    description: 'Smart energy consumption optimization and renewable energy integration platform.',
    icon: Zap,
    features: ['Energy Optimization', 'Renewable Integration', 'Cost Analysis', 'Carbon Tracking'],
    pricing: '$99 - $499/month',
    category: 'CleanTech AI'
  },
  {
    title: 'AI Language Translation Hub',
    description: 'Real-time multilingual translation with context-aware AI understanding.',
    icon: Globe,
    features: ['Real-time Translation', 'Context Awareness', 'Voice Translation', 'Document Translation'],
    pricing: '$29 - $199/month',
    category: 'Language AI'
  },
  {
    title: 'AI Content Moderation Suite',
    description: 'Advanced AI content moderation for social platforms and communities.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Context Analysis', 'Bias Detection', 'Automated Actions'],
    pricing: '$149 - $799/month',
    category: 'Content AI'
  },
  {
    title: 'AI Predictive Maintenance Platform',
    description: 'AI-powered equipment maintenance prediction and optimization system.',
    icon: Settings,
    features: ['Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Monitoring'],
    pricing: '$199 - $999/month',
    category: 'Industrial AI'
  },
  {
    title: 'AI Customer Sentiment Analyzer',
    description: 'Real-time customer sentiment analysis across multiple channels and touchpoints.',
    icon: MessageSquare,
    features: ['Sentiment Analysis', 'Emotion Detection', 'Trend Analysis', 'Alert System'],
    pricing: '$79 - $399/month',
    category: 'Customer AI'
  },
  {
    title: 'AI Fraud Detection System',
    description: 'Advanced fraud detection and prevention using machine learning algorithms.',
    icon: Shield,
    features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Automated Blocking'],
    pricing: '$299 - $1,499/month',
    category: 'Fraud AI'
  },
  {
    title: 'AI MLOps Platform',
    description: 'Complete machine learning operations and model lifecycle management platform.',
    icon: Settings,
    features: ['Model Versioning', 'Experiment Tracking', 'Model Monitoring', 'Automated Deployment'],
    pricing: '$99 - $599/month',
    category: 'MLOps'
  },
  {
    title: 'AI Data Pipeline Automation',
    description: 'Intelligent data pipeline creation and management platform.',
    icon: Database,
    features: ['Pipeline Generation', 'Data Quality Monitoring', 'Error Handling', 'Performance Optimization'],
    pricing: '$149 - $799/month',
    category: 'Data Engineering'
  },
  {
    title: 'AI Model Monitoring & Observability',
    description: 'Comprehensive AI model performance monitoring and alerting platform.',
    icon: Monitor,
    features: ['Performance Tracking', 'Drift Detection', 'Alert Management', 'Root Cause Analysis'],
    pricing: '$79 - $399/month',
    category: 'Model Ops'
  },
  {
    title: 'AI Bias Detection & Mitigation',
    description: 'AI system bias detection and fairness optimization tools.',
    icon: Shield,
    features: ['Bias Detection', 'Fairness Metrics', 'Mitigation Strategies', 'Compliance Reporting'],
    pricing: '$99 - $499/month',
    category: 'AI Ethics'
  },
  {
    title: 'AI Model Compression & Optimization',
    description: 'AI model size reduction and performance optimization platform.',
    icon: Cpu,
    features: ['Model Pruning', 'Quantization', 'Knowledge Distillation', 'Hardware Optimization'],
    pricing: '$149 - $799/month',
    category: 'Model Optimization'
  },
  {
    title: 'AI Edge AI Model Deployment',
    description: 'Deployment of AI models on edge devices and embedded systems.',
    icon: Smartphone,
    features: ['Model Conversion', 'Hardware Optimization', 'Performance Tuning', 'Deployment Automation'],
    pricing: '$199 - $999/month',
    category: 'Edge Deployment'
  },
  {
    title: 'AI Multi-Modal Learning Platform',
    description: 'AI systems that process multiple data types simultaneously.',
    icon: Eye,
    features: ['Text-Image Processing', 'Audio-Visual Analysis', 'Cross-Modal Learning', 'Fusion Techniques'],
    pricing: '$299 - $1,499/month',
    category: 'Multi-Modal AI'
  },
  {
    title: 'AI Transfer Learning Platform',
    description: 'Platform for transferring knowledge between AI models and domains.',
    icon: Network,
    features: ['Pre-trained Models', 'Domain Adaptation', 'Fine-tuning Tools', 'Knowledge Transfer'],
    pricing: '$99 - $499/month',
    category: 'Transfer Learning'
  },
  {
    title: 'AI Reinforcement Learning Platform',
    description: 'Platform for developing and training reinforcement learning agents.',
    icon: Target,
    features: ['Environment Simulation', 'Agent Training', 'Policy Optimization', 'Reward Engineering'],
    pricing: '$199 - $999/month',
    category: 'Reinforcement Learning'
  },
  {
    title: 'AI Generative Adversarial Networks',
    description: 'GAN-based solutions for data generation and augmentation.',
    icon: Image,
    features: ['Image Generation', 'Data Augmentation', 'Style Transfer', 'Anomaly Generation'],
    pricing: '$149 - $799/month',
    category: 'GANs'
  },
  {
    title: 'AI Transformer Models Platform',
    description: 'Advanced transformer-based AI models for various applications.',
    icon: Brain,
    features: ['Language Models', 'Vision Transformers', 'Multimodal Transformers', 'Custom Architectures'],
    pricing: '$199 - $999/month',
    category: 'Transformers'
  },
  {
    title: 'AI Graph Neural Networks Platform',
    description: 'Graph-based AI solutions for complex relationship modeling.',
    icon: Network,
    features: ['Graph Analysis', 'Node Classification', 'Link Prediction', 'Graph Generation'],
    pricing: '$149 - $799/month',
    category: 'Graph AI'
  },
  {
    title: 'AI Time Series Forecasting Platform',
    description: 'Advanced time series analysis and forecasting solutions.',
    icon: TrendingUp,
    features: ['Seasonal Analysis', 'Trend Detection', 'Anomaly Detection', 'Multi-step Forecasting'],
    pricing: '$99 - $499/month',
    category: 'Time Series'
  },
  {
    title: 'AI Natural Language Processing Platform',
    description: 'Advanced NLP solutions for text understanding and generation.',
    icon: FileText,
    features: ['Text Analysis', 'Sentiment Analysis', 'Named Entity Recognition', 'Text Generation'],
    pricing: '$79 - $399/month',
    category: 'NLP'
  },
  {
    title: 'AI Computer Vision Solutions Platform',
    description: 'Advanced computer vision and image processing solutions.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Segmentation', '3D Vision'],
    pricing: '$149 - $799/month',
    category: 'Computer Vision'
  },
  {
    title: 'AI Speech Recognition & Synthesis Platform',
    description: 'Advanced speech processing and voice synthesis solutions.',
    icon: Mic,
    features: ['Speech Recognition', 'Text-to-Speech', 'Voice Cloning', 'Emotion Recognition'],
    pricing: '$99 - $499/month',
    category: 'Speech AI'
  },
  {
    title: 'AI Recommendation Systems Platform',
    description: 'Advanced recommendation and personalization engines.',
    icon: Target,
    features: ['Collaborative Filtering', 'Content-Based Filtering', 'Hybrid Approaches', 'Real-time Updates'],
    pricing: '$49 - $299/month',
    category: 'Recommendation Systems'
  },
  {
    title: 'AI Search & Retrieval Systems Platform',
    description: 'Intelligent search and information retrieval solutions.',
    icon: Search,
    features: ['Semantic Search', 'Vector Search', 'Query Understanding', 'Result Ranking'],
    pricing: '$99 - $499/month',
    category: 'Search AI'
  },
  {
    title: 'AI Knowledge Graphs Platform',
    description: 'AI-powered knowledge representation and reasoning systems.',
    icon: Network,
    features: ['Entity Extraction', 'Relationship Modeling', 'Query Answering', 'Knowledge Inference'],
    pricing: '$199 - $999/month',
    category: 'Knowledge AI'
  },
  {
    title: 'AI Causal Inference Platform',
    description: 'AI systems for understanding cause-and-effect relationships.',
    icon: Target,
    features: ['Causal Discovery', 'Treatment Effect Estimation', 'Counterfactual Analysis', 'Causal Graphs'],
    pricing: '$299 - $1,499/month',
    category: 'Causal AI'
  },
  {
    title: 'AI Uncertainty Quantification Platform',
    description: 'AI systems that provide uncertainty estimates and confidence intervals.',
    icon: Shield,
    features: ['Uncertainty Estimation', 'Confidence Intervals', 'Risk Assessment', 'Robust Predictions'],
    pricing: '$149 - $799/month',
    category: 'Uncertainty AI'
  },
  {
    title: 'AI Adversarial Robustness Platform',
    description: 'AI systems resistant to adversarial attacks and perturbations.',
    icon: Shield,
    features: ['Attack Detection', 'Robust Training', 'Defense Mechanisms', 'Security Testing'],
    pricing: '$199 - $999/month',
    category: 'Robust AI'
  },
  {
    title: 'AI Continual Learning Platform',
    description: 'AI systems that learn continuously without forgetting previous knowledge.',
    icon: Brain,
    features: ['Catastrophic Forgetting Prevention', 'Incremental Learning', 'Memory Consolidation', 'Adaptive Learning'],
    pricing: '$249 - $1,249/month',
    category: 'Continual Learning'
  },
  {
    title: 'AI Meta-Learning Platform',
    description: 'AI systems that learn how to learn and adapt quickly to new tasks.',
    icon: Brain,
    features: ['Few-shot Learning', 'Rapid Adaptation', 'Learning to Learn', 'Task Generalization'],
    pricing: '$299 - $1,499/month',
    category: 'Meta-Learning'
  },
  {
    title: 'AI Neural Architecture Search Platform',
    description: 'Automated neural network architecture design and optimization.',
    icon: Settings,
    features: ['Architecture Search', 'Performance Optimization', 'Hardware-aware Design', 'Automated Design'],
    pricing: '$399 - $1,999/month',
    category: 'NAS'
  },
  {
    title: 'AI Hyperparameter Optimization Platform',
    description: 'Automated hyperparameter tuning and optimization for AI models.',
    icon: Settings,
    features: ['Bayesian Optimization', 'Multi-objective Optimization', 'Early Stopping', 'Resource Management'],
    pricing: '$99 - $499/month',
    category: 'HPO'
  },
  {
    title: 'AI Model Ensemble Methods Platform',
    description: 'Advanced ensemble learning and model combination techniques.',
    icon: Network,
    features: ['Model Stacking', 'Bagging', 'Boosting', 'Voting Methods'],
    pricing: '$149 - $799/month',
    category: 'Ensemble Learning'
  },
  {
    title: 'AI Active Learning Platform',
    description: 'AI systems that intelligently select data for labeling and training.',
    icon: Target,
    features: ['Query Strategy', 'Uncertainty Sampling', 'Diversity Sampling', 'Human-in-the-loop'],
    pricing: '$99 - $499/month',
    category: 'Active Learning'
  },
  {
    title: 'AI Semi-Supervised Learning Platform',
    description: 'AI systems that learn from both labeled and unlabeled data.',
    icon: Database,
    features: ['Pseudo-labeling', 'Consistency Regularization', 'Graph-based Methods', 'Self-training'],
    pricing: '$124 - $624/month',
    category: 'Semi-Supervised Learning'
  },
  {
    title: 'AI Unsupervised Learning Platform',
    description: 'AI systems that discover patterns in data without labels.',
    icon: Eye,
    features: ['Clustering', 'Dimensionality Reduction', 'Anomaly Detection', 'Density Estimation'],
    pricing: '$79 - $399/month',
    category: 'Unsupervised Learning'
  },
  {
    title: 'AI Supervised Learning Platform',
    description: 'AI systems that learn from labeled training data.',
    icon: Target,
    features: ['Classification', 'Regression', 'Feature Selection', 'Model Validation'],
    pricing: '$49 - $299/month',
    category: 'Supervised Learning'
  },
  {
    title: 'AI Deep Learning Platform',
    description: 'Advanced deep neural network solutions for complex problems.',
    icon: Brain,
    features: ['Neural Networks', 'Deep Architectures', 'Gradient Descent', 'Backpropagation'],
    pricing: '$99 - $499/month',
    category: 'Deep Learning'
  },
  {
    title: 'AI Machine Learning Platform',
    description: 'Comprehensive machine learning solutions for various applications.',
    icon: Cpu,
    features: ['Algorithm Selection', 'Feature Engineering', 'Model Training', 'Performance Evaluation'],
    pricing: '$79 - $399/month',
    category: 'Machine Learning'
  },
  {
    title: 'AI Artificial Intelligence Platform',
    description: 'Complete AI solutions covering all aspects of artificial intelligence.',
    icon: Brain,
    features: ['Problem Solving', 'Learning', 'Reasoning', 'Perception'],
    pricing: '$249 - $1,249/month',
    category: 'General AI'
  },
  {
    title: 'HR & Payroll Management',
    description: 'Complete HR and payroll solution for small to medium businesses.',
    icon: Users,
    features: ['Employee Management', 'Payroll Processing', 'Time Off Tracking', 'Compliance'],
    pricing: '$99 - $499/month',
    category: 'HR'
  },
  {
    title: 'Website Analytics & Heatmaps',
    description: 'Advanced website analytics with heatmaps and user behavior tracking.',
    icon: BarChart3,
    features: ['User Behavior Tracking', 'Heatmaps', 'Conversion Funnels', 'A/B Testing'],
    pricing: '$29 - $199/month',
    category: 'Analytics'
  },
  {
    title: 'Document Management System',
    description: 'Secure document storage, sharing, and collaboration platform.',
    icon: FileText,
    features: ['Document Storage', 'Version Control', 'Collaboration Tools', 'Security'],
    pricing: '$19 - $99/month',
    category: 'Document Management'
  },
  {
    title: 'Event Management Platform',
    description: 'Complete event planning and management solution for organizers.',
    icon: Calendar,
    features: ['Event Planning', 'Registration Management', 'Payment Processing', 'Analytics'],
    pricing: '$49 - $299/month',
    category: 'Events'
  },
  {
    title: 'Learning Management System',
    description: 'Online learning platform for courses, training, and certifications.',
    icon: BookOpen,
    features: ['Course Creation', 'Student Management', 'Progress Tracking', 'Certificates'],
    pricing: '$79 - $399/month',
    category: 'Education'
  },
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'Automated code review with security analysis, performance optimization, and best practices suggestions.',
    icon: Code,
    features: ['Security Scanning', 'Performance Analysis', 'Code Quality Metrics', 'Git Integration'],
    pricing: '$199 - $1,299/month',
    category: 'Development',
    popular: true,
    link: 'https://codereview.ziontechgroup.com'
  },
  {
    title: 'Smart Contract Audit Platform',
    description: 'Automated smart contract security auditing and vulnerability detection for blockchain projects.',
    icon: Shield,
    features: ['Vulnerability Detection', 'Gas Optimization', 'Compliance Checking', 'Audit Reports'],
    pricing: '$499 - $2,999/month',
    category: 'Blockchain',
    popular: true,
    link: 'https://contractaudit.ziontechgroup.com'
  },
  {
    title: 'Real-time Collaboration Whiteboard',
    description: 'Advanced digital whiteboard with AI-powered insights and team collaboration features.',
    icon: Monitor,
    features: ['Real-time Collaboration', 'AI Insights', 'Template Library', 'Export Options'],
    pricing: '$29 - $199/month',
    category: 'Collaboration',
    link: 'https://whiteboard.ziontechgroup.com'
  },
  {
    title: 'Voice-to-Text Meeting Transcriber',
    description: 'AI-powered meeting transcription with speaker identification and action item extraction.',
    icon: Mic,
    features: ['Real-time Transcription', 'Speaker Identification', 'Action Items', 'Meeting Summaries'],
    pricing: '$39 - $299/month',
    category: 'Productivity',
    link: 'https://meetingtranscriber.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Logo Generator',
    description: 'Professional logo creation using advanced AI with brand guidelines and multiple formats.',
    icon: Image,
    features: ['AI Logo Generation', 'Brand Guidelines', 'Multiple Formats', 'Unlimited Revisions'],
    pricing: '$49 - $299/month',
    category: 'Design',
    link: 'https://logogenerator.ziontechgroup.com'
  },
  {
    title: 'Smart Password Manager',
    description: 'Enterprise-grade password management with AI-powered security recommendations.',
    icon: Lock,
    features: ['Password Generation', 'Security Analysis', 'Team Sharing', 'Dark Web Monitoring'],
    pricing: '$9 - $99/month',
    category: 'Security',
    link: 'https://passwordmanager.ziontechgroup.com'
  },
  {
    title: 'AI Content Moderation API',
    description: 'Real-time content moderation for text, images, and videos with custom rule configuration.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Custom Rules', 'Real-time API', '99.9% Uptime'],
    pricing: '$0.01 - $0.10 per request',
    category: 'API',
    popular: true,
    link: 'https://contentmoderation.ziontechgroup.com'
  },
  {
    title: 'Blockchain Analytics Dashboard',
    description: 'Comprehensive blockchain transaction analysis and monitoring for crypto businesses.',
    icon: BarChart3,
    features: ['Transaction Tracking', 'Risk Analysis', 'Compliance Reporting', 'Real-time Alerts'],
    pricing: '$299 - $1,999/month',
    category: 'Blockchain',
    link: 'https://blockchainanalytics.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Resume Builder',
    description: 'Professional resume creation with ATS optimization and industry-specific templates.',
    icon: FileText,
    features: ['ATS Optimization', 'Industry Templates', 'Skills Analysis', 'Cover Letter Generator'],
    pricing: '$19 - $99/month',
    category: 'Career',
    link: 'https://resumebuilder.ziontechgroup.com'
  },
  {
    title: 'Smart Home Automation Hub',
    description: 'Centralized smart home control with AI-powered automation and energy optimization.',
    icon: Home,
    features: ['Device Control', 'Energy Optimization', 'Voice Integration', 'Security Monitoring'],
    pricing: '$29 - $199/month',
    category: 'IoT',
    link: 'https://smarthome.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Stock Trading Bot',
    description: 'Automated stock trading with machine learning algorithms and risk management.',
    icon: TrendingUp,
    features: ['ML Algorithms', 'Risk Management', 'Backtesting', 'Real-time Trading'],
    pricing: '$199 - $1,999/month',
    category: 'Finance',
    popular: true,
    link: 'https://tradingbot.ziontechgroup.com'
  },
  {
    title: 'Video Content Analyzer',
    description: 'AI-powered video analysis for content optimization, SEO, and engagement insights.',
    icon: Video,
    features: ['Content Analysis', 'SEO Optimization', 'Engagement Metrics', 'Thumbnail Generation'],
    pricing: '$49 - $399/month',
    category: 'Video',
    link: 'https://videoanalyzer.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Email Signature Generator',
    description: 'Professional email signature creation with brand consistency and compliance features.',
    icon: Mail,
    features: ['Brand Templates', 'Compliance Checking', 'Bulk Generation', 'Analytics'],
    pricing: '$9 - $49/month',
    category: 'Communication',
    link: 'https://emailsignature.ziontechgroup.com'
  },
  {
    title: 'Smart Contract Deployment Platform',
    description: 'One-click smart contract deployment with testing, verification, and monitoring.',
    icon: Rocket,
    features: ['One-click Deploy', 'Testing Suite', 'Verification', 'Monitoring'],
    pricing: '$99 - $999/month',
    category: 'Blockchain',
    link: 'https://contractdeploy.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Data Visualization',
    description: 'Intelligent data visualization with automatic chart selection and insights generation.',
    icon: BarChart3,
    features: ['Auto Chart Selection', 'Insights Generation', 'Interactive Dashboards', 'Export Options'],
    pricing: '$79 - $599/month',
    category: 'Analytics',
    link: 'https://dataviz.ziontechgroup.com'
  },
  {
    title: 'Smart Contract Testing Suite',
    description: 'Comprehensive testing framework for smart contracts with automated test generation.',
    icon: Code,
    features: ['Automated Testing', 'Security Tests', 'Gas Optimization', 'CI/CD Integration'],
    pricing: '$199 - $1,299/month',
    category: 'Development',
    link: 'https://contracttesting.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Meeting Scheduler',
    description: 'Intelligent meeting scheduling with calendar optimization and conflict resolution.',
    icon: Calendar,
    features: ['Smart Scheduling', 'Conflict Resolution', 'Time Zone Handling', 'Integration'],
    pricing: '$19 - $99/month',
    category: 'Productivity',
    link: 'https://meetingscheduler.ziontechgroup.com'
  },
  {
    title: 'Blockchain Wallet Analytics',
    description: 'Comprehensive wallet analysis and transaction tracking for cryptocurrency businesses.',
    icon: HardDrive,
    features: ['Wallet Analysis', 'Transaction Tracking', 'Risk Assessment', 'Compliance'],
    pricing: '$149 - $999/month',
    category: 'Blockchain',
    link: 'https://walletanalytics.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Code Documentation Generator',
    description: 'Automated code documentation generation with intelligent comment suggestions.',
    icon: FileText,
    features: ['Auto Documentation', 'Comment Generation', 'API Docs', 'Integration'],
    pricing: '$49 - $299/month',
    category: 'Development',
    link: 'https://codedocs.ziontechgroup.com'
  },
  {
    title: 'Real Estate CRM',
    description: 'Specialized CRM for real estate agents and property management.',
    icon: Building,
    features: ['Lead Management', 'Property Listings', 'Client Communication', 'Deal Tracking'],
    pricing: '$39 - $199/month',
    category: 'Real Estate'
  },
  {
    title: 'Restaurant POS & Management',
    description: 'Point of sale and restaurant management system with inventory tracking.',
    icon: ShoppingCart,
    features: ['POS System', 'Menu Management', 'Inventory Tracking', 'Staff Scheduling'],
    pricing: '$99 - $499/month',
    category: 'Restaurant'
  },
  {
    title: 'Fitness & Wellness Tracker',
    description: 'Comprehensive fitness tracking and wellness management platform.',
    icon: Heart,
    features: ['Workout Tracking', 'Nutrition Logging', 'Progress Monitoring', 'Community Features'],
    pricing: '$9 - $49/month',
    category: 'Health & Fitness'
  },
  {
    title: 'Cryptocurrency Portfolio Tracker',
    description: 'Advanced cryptocurrency portfolio tracking and trading analytics.',
    icon: TrendingUp,
    features: ['Portfolio Tracking', 'Price Alerts', 'Trading Analytics', 'Tax Reporting'],
    pricing: '$19 - $99/month',
    category: 'Crypto'
  },
  {
    title: 'Fleet Management System',
    description: 'GPS tracking and fleet management solution for transportation companies.',
    icon: Car,
    features: ['GPS Tracking', 'Route Optimization', 'Driver Management', 'Maintenance Scheduling'],
    pricing: '$199 - $999/month',
    category: 'Transportation'
  },
  {
    title: 'Property Maintenance Tracker',
    description: 'Property maintenance and facility management solution.',
    icon: Settings,
    features: ['Maintenance Scheduling', 'Work Order Management', 'Vendor Management', 'Reporting'],
    pricing: '$49 - $299/month',
    category: 'Property Management'
  },
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'Automated code review and quality assurance using advanced AI analysis.',
    icon: Code,
    features: ['Automated Code Review', 'Security Vulnerability Detection', 'Performance Analysis', 'Best Practice Suggestions'],
    pricing: '$199 - $999/month',
    category: 'Development Tools',
    description: 'Automated code review with security scanning, performance optimization, and best practices enforcement.',
    icon: Code,
    features: ['Automated Reviews', 'Security Scanning', 'Performance Analysis', 'Best Practices Check'],
    pricing: '$299 - $1,999/month',
    category: 'Developer Tools',
    popular: true,
    benefits: ['Code Quality', 'Security', 'Performance', 'Best Practices'],
    marketPrice: '$500 - $3,000/month',
    link: 'https://ziontechgroup.com/ai-code-review'
  },
  {
    title: 'Smart Contract Security Auditor',
    description: 'Automated smart contract security analysis and vulnerability detection for blockchain projects.',
    icon: Lock,
    features: ['Vulnerability Detection', 'Gas Optimization', 'Compliance Checking', 'Audit Reports'],
    pricing: '$499 - $2,999/month',
    category: 'Blockchain Security',
    popular: true
  },
  {
    title: 'AI-Powered SEO Content Optimizer',
    description: 'Intelligent content optimization for search engines with real-time ranking improvements.',
    icon: Search,
    features: ['Keyword Research', 'Content Analysis', 'Ranking Tracking', 'Competitor Analysis'],
    pricing: '$199 - $1,299/month',
    category: 'SEO & Marketing',
    popular: true
  },
  {
    title: 'Multi-Channel Customer Data Platform',
    description: 'Unified customer data platform with real-time synchronization across all touchpoints.',
    icon: Database,
    features: ['Data Unification', 'Real-time Sync', 'Customer 360 View', 'Privacy Compliance'],
    pricing: '$399 - $2,499/month',
    category: 'Customer Data',
    popular: true
  },
  {
    title: 'AI Video Content Generator',
    description: 'Automated video creation from text prompts with AI-generated visuals and voiceovers.',
    icon: Video,
    features: ['Text-to-Video', 'AI Voice Synthesis', 'Template Library', 'Brand Customization'],
    pricing: '$199 - $999/month',
    title: 'AI-Powered Video Content Generator',
    description: 'Automated video creation from text, images, and audio with professional editing capabilities.',
    icon: Video,
    features: ['Text-to-Video', 'Auto Editing', 'Voice Synthesis', 'Template Library'],
    pricing: '$199 - $1,499/month',
    category: 'Content Creation',
    popular: true,
    benefits: ['Video Creation', 'Auto Editing', 'Voice Synthesis', 'Templates'],
    marketPrice: '$300 - $2,000/month',
    link: 'https://ziontechgroup.com/ai-video-production'
  },
  {
    title: 'Smart Contract Generator',
    description: 'AI-powered smart contract creation and deployment for blockchain applications.',
    icon: Code,
    features: ['Contract Templates', 'Security Auditing', 'Gas Optimization', 'Multi-chain Support'],
    pricing: '$299 - $1,499/month',
    category: 'Blockchain',
    popular: true,
    benefits: ['Contract Creation', 'Security', 'Gas Optimization', 'Multi-chain'],
    marketPrice: '$500 - $2,500/month',
    link: 'https://ziontechgroup.com/smart-contract-generator'
  },
  {
    title: 'AI-Powered Email Signature Generator',
    description: 'Professional email signature creation with branding and compliance features.',
    icon: Mail,
    features: ['Template Library', 'Brand Integration', 'Compliance Checking', 'Analytics'],
    pricing: '$9 - $49/month',
    category: 'Productivity'
  },
  {
    title: 'Intelligent Password Manager',
    description: 'AI-enhanced password management with breach monitoring and security recommendations.',
    icon: Lock,
    features: ['Password Generation', 'Breach Monitoring', 'Security Scoring', 'Team Sharing'],
    pricing: '$19 - $99/month',
    category: 'Security'
  },
  {
    title: 'AI-Powered Resume Builder',
    description: 'Intelligent resume creation with ATS optimization and industry-specific templates.',
    icon: FileText,
    features: ['ATS Optimization', 'Industry Templates', 'Skills Matching', 'Cover Letter Generator'],
    pricing: '$29 - $149/month',
    category: 'Career Tools'
  },
  {
    title: 'Smart Meeting Transcription',
    description: 'AI-powered meeting transcription with action item extraction and follow-up automation.',
    icon: Mic,
    features: ['Real-time Transcription', 'Action Item Extraction', 'Speaker Identification', 'Integration APIs'],
    pricing: '$49 - $299/month',
    category: 'Productivity'
  },
  {
    title: 'AI-Powered Logo Generator',
    description: 'Professional logo creation using AI with brand guidelines and multiple formats.',
    icon: Image,
    features: ['AI Design', 'Brand Guidelines', 'Multiple Formats', 'Trademark Checking'],
    pricing: '$39 - $199/month',
    category: 'Design'
  },
  {
    title: 'Intelligent Expense Tracker',
    description: 'AI-powered expense management with receipt scanning and categorization.',
    icon: DollarSign,
    features: ['Receipt Scanning', 'Auto Categorization', 'Tax Preparation', 'Team Management'],
    pricing: '$19 - $99/month',
    category: 'Finance'
  },
  {
    title: 'AI-Powered Social Media Content Calendar',
    description: 'Intelligent social media planning with content suggestions and optimal posting times.',
    icon: Calendar,
    features: ['Content Planning', 'Optimal Timing', 'Hashtag Suggestions', 'Performance Analytics'],
    pricing: '$29 - $149/month',
    category: 'Social Media'
  },
  {
    title: 'Smart Contract Testing Platform',
    description: 'Automated testing and simulation environment for smart contracts across multiple blockchains.',
    icon: Code,
    features: ['Automated Testing', 'Gas Analysis', 'Security Auditing', 'Multi-chain Support'],
    pricing: '$199 - $999/month',
    category: 'Blockchain'
  },
  {
    title: 'AI-Powered Voice Cloning',
    description: 'High-quality voice cloning and text-to-speech synthesis for content creators.',
    icon: Mic,
    features: ['Voice Cloning', 'Multi-language Support', 'Emotion Control', 'API Integration'],
    pricing: '$99 - $499/month',
    category: 'Voice Technology',
    popular: true
  },
  {
    title: 'Intelligent Document Parser',
    description: 'AI-powered document extraction and data parsing from PDFs, images, and forms.',
    icon: FileText,
    features: ['OCR Technology', 'Data Extraction', 'Form Processing', 'API Integration'],
    pricing: '$49 - $299/month',
    category: 'Document Processing',
    popular: true,
    benefits: ['Document Processing', 'Data Extraction', 'Form Processing', 'API Integration'],
    marketPrice: '$100 - $500/month',
    link: 'https://ziontechgroup.com/document-parser'
  },
  {
    title: 'Intelligent Supply Chain Optimizer',
    description: 'AI-driven supply chain optimization with demand forecasting and inventory management.',
    icon: Package,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Analytics', 'Risk Assessment'],
    pricing: '$599 - $3,999/month',
    category: 'Supply Chain',
    popular: true
  },
  {
    title: 'AI-Powered Metaverse Builder',
    description: 'No-code platform for creating immersive 3D virtual worlds and metaverse experiences.',
    icon: Globe,
    features: ['3D World Builder', 'Avatar Creation', 'Virtual Events', 'NFT Integration'],
    pricing: '$299 - $2,999/month',
    category: 'Metaverse',
    popular: true
  },
  {
    title: 'Quantum Computing Simulator',
    description: 'Cloud-based quantum computing simulation and algorithm development platform.',
    icon: Cpu,
    features: ['Quantum Circuit Designer', 'Algorithm Testing', 'Performance Analysis', 'Educational Tools'],
    pricing: '$199 - $1,999/month',
    category: 'Quantum Computing',
    popular: true
  },
  {
    title: 'Digital Twin Platform',
    description: 'Create and manage digital twins of physical assets, processes, and systems.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Sync', 'Predictive Analytics', 'IoT Integration'],
    pricing: '$399 - $3,999/month',
    category: 'Digital Twin',
    popular: true
  },
  {
    title: 'Autonomous Drone Fleet Management',
    description: 'Complete drone fleet management with autonomous flight planning and monitoring.',
    icon: Rocket,
    features: ['Flight Planning', 'Autonomous Operations', 'Payload Management', 'Regulatory Compliance'],
    pricing: '$499 - $4,999/month',
    category: 'Drone Management',
    popular: true
  },
  {
    title: 'AI-Powered Carbon Footprint Tracker',
    description: 'Real-time carbon footprint monitoring and sustainability optimization for businesses.',
    icon: Sprout,
    features: ['Carbon Tracking', 'Sustainability Goals', 'Offset Management', 'Reporting Dashboard'],
    pricing: '$99 - $999/month',
    category: 'Sustainability',
    popular: true
  },
  {
    title: 'Blockchain Analytics & Compliance',
    description: 'Advanced blockchain transaction analysis and regulatory compliance monitoring.',
    icon: Shield,
    features: ['Transaction Tracking', 'Compliance Monitoring', 'Risk Assessment', 'Regulatory Reporting'],
    pricing: '$299 - $2,999/month',
    category: 'Blockchain Analytics',
    popular: true,
    benefits: ['Blockchain Analytics', 'Smart Contracts', 'DeFi Integration', 'Security'],
    marketPrice: '$500 - $4,000/month',
    link: 'https://ziontechgroup.com/blockchain-analytics'
  },
  {
    title: 'AI-Powered Website Builder',
    description: 'Intelligent website creation with AI-generated content and design optimization.',
    icon: Globe,
    features: ['AI Design', 'Content Generation', 'SEO Optimization', 'Mobile Responsive'],
    pricing: '$79 - $399/month',
    category: 'Web Development'
  },
  {
    title: 'Smart Inventory Photography',
    description: 'AI-powered product photography and image optimization for e-commerce.',
    icon: Camera,
    features: ['Auto Photography', 'Background Removal', 'Image Enhancement', 'Batch Processing'],
    pricing: '$29 - $149/month',
    category: 'E-commerce'
  },
  {
    title: 'AI-Powered Translation Service',
    description: 'Real-time translation with context awareness and industry-specific terminology.',
    icon: Globe,
    features: ['Real-time Translation', 'Context Awareness', 'Industry Terms', 'API Integration'],
    pricing: '$19 - $99/month',
    category: 'Language Services'
  },
  {
    title: 'Intelligent Email Warm-up',
    description: 'AI-powered email deliverability optimization and sender reputation management.',
    icon: Mail,
    features: ['Deliverability Optimization', 'Reputation Management', 'A/B Testing', 'Analytics'],
    pricing: '$39 - $199/month',
    category: 'Email Marketing'
  },
  {
    title: 'AI-Powered Code Documentation',
    description: 'Automated code documentation generation with intelligent comments and API docs.',
    icon: Code,
    features: ['Auto Documentation', 'API Generation', 'Code Comments', 'Integration Guides'],
    pricing: '$49 - $249/month',
    category: 'Development Tools'
  },
  {
    title: 'Smart Contract Analytics',
    description: 'Comprehensive analytics and monitoring for smart contract performance and security.',
    icon: BarChart3,
    features: ['Performance Analytics', 'Security Monitoring', 'Gas Optimization', 'Alert System'],
    pricing: '$99 - $499/month',
    category: 'Blockchain'
  },
  {
    title: 'AI-Powered Lead Qualification',
    description: 'Intelligent lead scoring and qualification using behavioral analysis and intent signals.',
    icon: Target,
    features: ['Behavioral Analysis', 'Intent Scoring', 'Lead Prioritization', 'CRM Integration'],
    pricing: '$79 - $399/month',
    category: 'Sales'
  },
  {
    title: 'Intelligent Data Backup',
    description: 'AI-powered automated backup with intelligent scheduling and recovery optimization.',
    icon: HardDrive,
    features: ['Automated Backup', 'Smart Scheduling', 'Recovery Optimization', 'Version Control'],
    pricing: '$19 - $99/month',
    category: 'Data Management'
  },
  {
    title: 'AI-Powered Carbon Footprint Tracker',
    description: 'Real-time carbon footprint monitoring and sustainability optimization for businesses.',
    icon: Sprout,
    features: ['Carbon Tracking', 'Sustainability Metrics', 'Emission Reduction', 'Compliance Reporting'],
    pricing: '$199 - $1,299/month',
    category: 'Sustainability',
    popular: true
  },
  {
    title: 'Smart Contract Security Scanner',
    description: 'Automated smart contract vulnerability detection and security analysis for DeFi projects.',
    icon: Shield,
    features: ['Vulnerability Detection', 'Gas Optimization', 'Audit Reports', 'Real-time Monitoring'],
    pricing: '$299 - $1,999/month',
    category: 'Blockchain Security',
    popular: true
  },
  {
    title: 'AI-Powered Voice Cloning Platform',
    description: 'High-quality voice cloning and synthesis for content creators and businesses.',
    icon: Mic,
    features: ['Voice Cloning', 'Emotion Control', 'Multi-language Support', 'API Integration'],
    pricing: '$199 - $1,499/month',
    category: 'Voice Technology',
    popular: true
  },
  {
    title: 'Intelligent Meeting Transcription & Analysis',
    description: 'AI-powered meeting transcription with sentiment analysis and action item extraction.',
    icon: MessageSquare,
    features: ['Real-time Transcription', 'Sentiment Analysis', 'Action Items', 'Meeting Insights'],
    pricing: '$49 - $299/month',
    category: 'Productivity',
    popular: true
  },
  {
    title: 'AI-Powered Code Documentation Generator',
    description: 'Automated code documentation generation with intelligent explanations and examples.',
    icon: FileText,
    features: ['Auto Documentation', 'Code Examples', 'API Documentation', 'Version Control'],
    pricing: '$99 - $599/month',
    category: 'Developer Tools',
    popular: true,
    benefits: ['Documentation', 'Code Examples', 'API Docs', 'Version Control'],
    marketPrice: '$200 - $1,000/month',
    link: 'https://ziontechgroup.com/auto-documentation'
  },
  {
    title: 'Smart Contract Security Auditor',
    description: 'Automated smart contract security analysis and vulnerability detection for blockchain projects.',
    icon: Lock,
    features: ['Vulnerability Detection', 'Gas Optimization', 'Compliance Checking', 'Audit Reports'],
    pricing: '$499 - $2,999/month',
    category: 'Blockchain Security',
    popular: true
  },
  {
    title: 'AI-Powered SEO Content Optimizer',
    description: 'Intelligent content optimization for search engines with real-time ranking improvements.',
    icon: Search,
    features: ['Keyword Research', 'Content Analysis', 'Ranking Tracking', 'Competitor Analysis'],
    pricing: '$199 - $1,299/month',
    category: 'SEO & Marketing',
    popular: true
  },
  {
    title: 'Multi-Channel Customer Data Platform',
    description: 'Unified customer data platform with real-time synchronization across all touchpoints.',
    icon: Database,
    features: ['Data Unification', 'Real-time Sync', 'Customer 360 View', 'Privacy Compliance'],
    pricing: '$399 - $2,499/month',
    category: 'Customer Data',
    popular: true
  },
  {
    title: 'AI-Powered Video Content Generator',
    description: 'Automated video creation from text, images, and audio with professional editing capabilities.',
    icon: Video,
    features: ['Text-to-Video', 'Auto Editing', 'Voice Synthesis', 'Template Library'],
    pricing: '$199 - $1,499/month',
    category: 'Content Creation',
    popular: true
  },
  {
    title: 'Intelligent Supply Chain Optimizer',
    description: 'AI-driven supply chain optimization with demand forecasting and inventory management.',
    icon: Package,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Analytics', 'Risk Assessment'],
    pricing: '$599 - $3,999/month',
    category: 'Supply Chain',
    popular: true
  },
  {
    title: 'Real-Time Language Translation API',
    description: 'Advanced translation service with context awareness and industry-specific terminology.',
    icon: Globe,
    features: ['100+ Languages', 'Context Awareness', 'Industry Terms', 'Real-time Processing'],
    pricing: '$0.01 - $0.10 per 1K characters',
    category: 'Language Services',
    popular: true
  },
  {
    title: 'AI-Powered Legal Document Analyzer',
    description: 'Automated legal document analysis with contract review and compliance checking.',
    icon: FileText,
    features: ['Contract Analysis', 'Compliance Checking', 'Risk Assessment', 'Clause Extraction'],
    pricing: '$299 - $1,999/month',
    category: 'Legal Tech',
    popular: true
  },
  {
    title: 'Smart Energy Management System',
    description: 'IoT-based energy monitoring and optimization for buildings and facilities.',
    icon: Zap,
    features: ['Energy Monitoring', 'Usage Analytics', 'Cost Optimization', 'Predictive Maintenance'],
    pricing: '$199 - $1,299/month',
    category: 'IoT & Energy',
    popular: true
  },
  {
    title: 'AI-Powered Recruitment Platform',
    description: 'Intelligent candidate screening and matching with bias detection and diversity analytics.',
    icon: Users,
    features: ['Resume Screening', 'Skill Matching', 'Bias Detection', 'Diversity Analytics'],
    pricing: '$199 - $1,499/month',
    category: 'HR & Recruitment',
    popular: true
  },
  {
    title: 'Blockchain Analytics & Compliance',
    description: 'Comprehensive blockchain transaction analysis with AML and compliance reporting.',
    icon: TrendingUp,
    features: ['Transaction Analysis', 'AML Detection', 'Compliance Reporting', 'Risk Scoring'],
    pricing: '$399 - $2,999/month',
    category: 'Blockchain Analytics',
    popular: true
  },
  {
    title: 'AI-Powered Medical Image Analysis',
    description: 'Advanced medical image analysis with AI-powered diagnosis assistance and reporting.',
    icon: Eye,
    features: ['Image Analysis', 'Diagnosis Assistance', 'Report Generation', 'Integration APIs'],
    pricing: '$999 - $4,999/month',
    category: 'Healthcare AI',
    popular: true
  },
  {
    title: 'Smart Home Automation Platform',
    description: 'Comprehensive smart home control with AI-powered automation and energy management.',
    icon: Home,
    features: ['Device Control', 'Automation Rules', 'Energy Management', 'Voice Integration'],
    pricing: '$29 - $199/month',
    category: 'Smart Home',
    popular: true
  },
  {
    title: 'AI-Powered Financial Risk Assessment',
    description: 'Real-time financial risk analysis with credit scoring and fraud detection.',
    icon: Shield,
    features: ['Credit Scoring', 'Fraud Detection', 'Risk Modeling', 'Real-time Alerts'],
    pricing: '$499 - $2,999/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'Intelligent Document Processing',
    description: 'Automated document extraction and processing with OCR and data validation.',
    icon: FileText,
    features: ['OCR Processing', 'Data Extraction', 'Validation Rules', 'Workflow Automation'],
    pricing: '$0.10 - $0.50 per document',
    category: 'Document Processing',
    popular: true
  },
  {
    title: 'AI-Powered Social Media Monitoring',
    description: 'Comprehensive social media monitoring with sentiment analysis and brand protection.',
    icon: MessageSquare,
    features: ['Brand Monitoring', 'Sentiment Analysis', 'Crisis Detection', 'Competitor Analysis'],
    pricing: '$199 - $1,299/month',
    category: 'Social Media',
    popular: true
  },
  {
    title: 'Smart Agriculture IoT Platform',
    description: 'IoT-based agricultural monitoring with crop analysis and yield optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Weather Integration', 'Yield Prediction', 'Resource Optimization'],
    pricing: '$299 - $1,999/month',
    category: 'AgTech',
    popular: true
  },
  {
    title: 'AI-Powered Personalization Engine',
    description: 'Real-time personalization engine for e-commerce and content platforms.',
    icon: Target,
    features: ['Real-time Personalization', 'A/B Testing', 'Behavioral Analysis', 'Recommendation Engine'],
    pricing: '$399 - $2,499/month',
    category: 'Personalization',
    popular: true
  },
  {
    title: 'Blockchain Identity Verification',
    description: 'Decentralized identity verification with KYC/AML compliance and privacy protection.',
    icon: Lock,
    features: ['Identity Verification', 'KYC/AML Compliance', 'Privacy Protection', 'Blockchain Integration'],
    pricing: '$0.50 - $2.00 per verification',
    category: 'Identity & Security',
    popular: true
  },
  {
    title: 'AI-Powered Voice Analytics',
    description: 'Advanced voice analysis for call centers with emotion detection and quality scoring.',
    icon: Mic,
    features: ['Emotion Detection', 'Quality Scoring', 'Sentiment Analysis', 'Performance Metrics'],
    pricing: '$199 - $1,299/month',
    category: 'Voice Analytics',
    popular: true,
    benefits: ['Voice Analytics', 'Emotion Detection', 'Quality Scoring', 'Performance'],
    marketPrice: '$400 - $2,000/month',
    link: 'https://ziontechgroup.com/voice-analytics'
  },
  {
    title: 'AI-Powered Carbon Footprint Tracker',
    description: 'Real-time carbon footprint monitoring and reduction recommendations for businesses and individuals.',
    icon: Sprout,
    features: ['Carbon Tracking', 'Reduction Strategies', 'Sustainability Reporting', 'Green Certification'],
    pricing: '$99 - $599/month',
    category: 'Sustainability',
    popular: true
  },
  {
    title: 'Smart Contract Audit Platform',
    description: 'Automated smart contract security auditing and vulnerability detection for blockchain projects.',
    icon: Shield,
    features: ['Security Auditing', 'Vulnerability Detection', 'Code Analysis', 'Compliance Checking'],
    pricing: '$499 - $2,999/month',
    category: 'Blockchain Security'
  },
  {
    title: 'AI-Powered Voice Cloning Platform',
    description: 'High-quality voice cloning and synthesis for content creation and accessibility.',
    icon: Mic,
    features: ['Voice Cloning', 'Text-to-Speech', 'Voice Conversion', 'Multi-language Support'],
    pricing: '$299 - $1,499/month',
    category: 'Voice Technology'
  },
  {
    title: 'Smart Grid Energy Management',
    description: 'AI-powered smart grid optimization for utilities and energy providers.',
    icon: Zap,
    features: ['Grid Optimization', 'Demand Response', 'Renewable Integration', 'Load Balancing'],
    pricing: '$999 - $4,999/month',
    category: 'Energy Tech'
  },
  {
    title: 'AI-Powered Drug Discovery Platform',
    description: 'Machine learning platform for pharmaceutical drug discovery and development.',
    icon: Heart,
    features: ['Molecular Analysis', 'Drug Design', 'Toxicity Prediction', 'Clinical Trial Optimization'],
    pricing: '$2,999 - $14,999/month',
    category: 'PharmaTech'
  },
  {
    title: 'Smart City Traffic Optimization',
    description: 'AI-powered traffic management and optimization for smart cities.',
    icon: Car,
    features: ['Traffic Analysis', 'Route Optimization', 'Signal Control', 'Congestion Reduction'],
    pricing: '$1,999 - $9,999/month',
    category: 'Smart Cities'
  },
  {
    title: 'AI-Powered Fraud Detection System',
    description: 'Advanced fraud detection and prevention for financial institutions and e-commerce.',
    icon: Shield,
    features: ['Real-time Detection', 'Behavioral Analysis', 'Risk Scoring', 'Automated Blocking'],
    pricing: '$799 - $3,999/month',
    category: 'FinTech Security'
  },
  {
    title: 'Smart Home Security AI',
    description: 'AI-powered home security system with facial recognition and behavioral analysis.',
    icon: Home,
    features: ['Facial Recognition', 'Behavioral Analysis', 'Intrusion Detection', 'Mobile Alerts'],
    pricing: '$199 - $999/month',
    category: 'Home Security'
  },
  {
    title: 'AI-Powered Content Creation Suite',
    description: 'Comprehensive AI content creation platform for blogs, social media, and marketing.',
    icon: FileText,
    features: ['Blog Writing', 'Social Media Posts', 'Video Scripts', 'SEO Optimization'],
    pricing: '$149 - $799/month',
    category: 'Content Creation'
  },
  {
    title: 'Smart Manufacturing Execution System',
    description: 'AI-powered manufacturing execution and quality control for production lines.',
    icon: Settings,
    features: ['Production Planning', 'Quality Control', 'Equipment Monitoring', 'Efficiency Optimization'],
    pricing: '$1,499 - $7,499/month',
    category: 'Manufacturing'
  },
  {
    title: 'AI-Powered Personal Finance Coach',
    description: 'Personalized financial coaching and investment advice using AI analysis.',
    icon: DollarSign,
    features: ['Financial Analysis', 'Investment Advice', 'Budget Planning', 'Goal Tracking'],
    pricing: '$29 - $199/month',
    category: 'Personal Finance'
  },
  {
    title: 'Smart Water Quality Monitoring',
    description: 'IoT-based water quality monitoring and contamination detection system.',
    icon: Droplets,
    features: ['Real-time Monitoring', 'Contamination Detection', 'Quality Alerts', 'Compliance Reporting'],
    pricing: '$299 - $1,499/month',
    category: 'Water Management'
  },
  {
    title: 'AI-Powered Language Translation API',
    description: 'Real-time language translation service with context awareness and cultural adaptation.',
    icon: Globe,
    features: ['Real-time Translation', 'Context Awareness', 'Cultural Adaptation', 'API Integration'],
    pricing: '$99 - $599/month',
    category: 'Language Services'
  },
  {
    title: 'Smart Retail Inventory Optimization',
    description: 'AI-powered inventory optimization for retail with demand forecasting and automated ordering.',
    icon: ShoppingCart,
    features: ['Demand Forecasting', 'Automated Ordering', 'Price Optimization', 'Waste Reduction'],
    pricing: '$399 - $1,999/month',
    category: 'Retail Tech'
  },
  {
    title: 'AI-Powered Mental Health Monitoring',
    description: 'Continuous mental health monitoring and early intervention system.',
    icon: Heart,
    features: ['Mood Tracking', 'Stress Detection', 'Early Intervention', 'Professional Alerts'],
    pricing: '$49 - $299/month',
    category: 'Mental Health'
  },
  {
    title: 'Smart Building Occupancy Analytics',
    description: 'AI-powered building occupancy analysis and space utilization optimization.',
    icon: Building,
    features: ['Occupancy Tracking', 'Space Utilization', 'Energy Optimization', 'Capacity Planning'],
    pricing: '$199 - $999/month',
    category: 'PropTech'
  },
  {
    title: 'AI-Powered Code Generation Platform',
    description: 'Automated code generation and development assistance for software engineers.',
    icon: Code,
    features: ['Code Generation', 'Bug Fixing', 'Code Review', 'Documentation'],
    pricing: '$199 - $999/month',
    category: 'Development Tools'
  },
  {
    title: 'Smart Agriculture Drone Management',
    description: 'AI-powered drone fleet management for precision agriculture and crop monitoring.',
    icon: Sprout,
    features: ['Drone Fleet Management', 'Crop Monitoring', 'Precision Spraying', 'Yield Analysis'],
    pricing: '$599 - $2,999/month',
    category: 'AgTech'
  },
  {
    title: 'AI-Powered Cybersecurity Training',
    description: 'Personalized cybersecurity training and simulation platform for organizations.',
    icon: Shield,
    features: ['Personalized Training', 'Simulation Exercises', 'Progress Tracking', 'Certification'],
    pricing: '$99 - $599/month',
    category: 'Cybersecurity Training',
    popular: true,
    benefits: ['Training', 'Simulation', 'Progress Tracking', 'Certification'],
    marketPrice: '$200 - $1,000/month',
    link: 'https://ziontechgroup.com/cybersecurity-training'
  },
  {
    title: 'Smart Energy Storage Management',
    description: 'AI-powered energy storage optimization for renewable energy systems.',
    icon: Battery,
    features: ['Storage Optimization', 'Load Balancing', 'Cost Optimization', 'Grid Integration'],
    pricing: '$399 - $1,999/month',
    category: 'Energy Storage',
    popular: true,
    benefits: ['Energy Storage', 'Load Balancing', 'Cost Optimization', 'Grid Integration'],
    marketPrice: '$600 - $3,000/month',
    link: 'https://ziontechgroup.com/energy-storage'
  },
  {
    title: 'AI-Powered Voice Cloning',
    description: 'High-quality voice cloning and synthesis for personalized audio content.',
    icon: Mic,
    features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support'],
    pricing: '$199 - $1,999/month',
    category: 'Voice Technology',
    popular: true
  },
  {
    title: 'Smart Contract Development Suite',
    description: 'Complete platform for developing, testing, and deploying smart contracts.',
    icon: Code,
    features: ['Visual Builder', 'Testing Framework', 'Deployment Tools', 'Security Auditing'],
    pricing: '$149 - $1,499/month',
    category: 'Blockchain Development',
    popular: true
  },
  {
    title: 'AI-Powered Personal Finance Manager',
    description: 'Intelligent personal finance tracking with investment recommendations and budgeting.',
    icon: DollarSign,
    features: ['Expense Tracking', 'Investment Analysis', 'Budget Optimization', 'Financial Planning'],
    pricing: '$9 - $99/month',
    category: 'Personal Finance',
    popular: true
  },
  {
    title: 'Virtual Reality Meeting Platform',
    description: 'Immersive VR meeting and collaboration platform for remote teams.',
    icon: Users,
    features: ['VR Meetings', '3D Collaboration', 'Spatial Audio', 'Avatar Customization'],
    pricing: '$49 - $499/month',
    category: 'VR Collaboration',
    popular: true
  },
  {
    title: 'AI-Powered Legal Document Generator',
    description: 'Automated legal document creation with contract templates and compliance checking.',
    icon: FileText,
    features: ['Document Templates', 'Compliance Checking', 'Version Control', 'E-signature Integration'],
    pricing: '$199 - $1,999/month',
    category: 'Legal Tech',
    popular: true
  },
  {
    title: 'Smart Home IoT Management',
    description: 'Centralized management platform for smart home devices and automation.',
    icon: Home,
    features: ['Device Control', 'Automation Rules', 'Energy Monitoring', 'Security Management'],
    pricing: '$19 - $199/month',
    category: 'Smart Home',
    popular: true
  },
  {
    title: 'AI-Powered Mental Health Assistant',
    description: 'Intelligent mental health monitoring and support with mood tracking and therapy tools.',
    icon: Heart,
    features: ['Mood Tracking', 'Therapy Sessions', 'Crisis Detection', 'Progress Monitoring'],
    pricing: '$29 - $299/month',
    category: 'Mental Health',
    popular: true
  },
  {
    title: 'Autonomous Vehicle Fleet Management',
    description: 'Complete management system for autonomous vehicle fleets and logistics.',
    icon: Car,
    features: ['Fleet Monitoring', 'Route Optimization', 'Maintenance Scheduling', 'Safety Analytics'],
    pricing: '$999 - $9,999/month',
    category: 'Autonomous Vehicles',
    popular: true
  },
  {
    title: 'AI-Powered Language Learning Platform',
    description: 'Personalized language learning with AI tutors and immersive experiences.',
    icon: BookOpen,
    features: ['AI Tutoring', 'Speech Recognition', 'Cultural Context', 'Progress Tracking'],
    pricing: '$19 - $199/month',
    category: 'Education',
    popular: true
  },
  {
    title: 'Blockchain Identity Management',
    description: 'Decentralized identity verification and management using blockchain technology.',
    icon: Lock,
    features: ['Identity Verification', 'Privacy Protection', 'Cross-platform Access', 'Compliance Tools'],
    pricing: '$99 - $999/month',
    category: 'Identity Management',
    popular: true
  },
  {
    title: 'AI-Powered Real Estate Valuation',
    description: 'Automated property valuation using AI and machine learning algorithms.',
    icon: Building,
    features: ['Property Analysis', 'Market Trends', 'Investment Insights', 'Risk Assessment'],
    pricing: '$49 - $499/month',
    category: 'Real Estate',
    popular: true
  },
  {
    title: 'Smart Agriculture Monitoring',
    description: 'IoT-based farm monitoring with AI-powered crop and livestock management.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Livestock Tracking', 'Weather Integration', 'Yield Prediction'],
    pricing: '$199 - $1,999/month',
    category: 'Agriculture',
    popular: true
  },
  {
    title: 'AI-Powered Cybersecurity Scanner',
    description: 'Automated vulnerability scanning and security assessment for web applications.',
    icon: Shield,
    features: ['Vulnerability Detection', 'Penetration Testing', 'Compliance Checking', 'Security Reports'],
    pricing: '$99 - $999/month',
    category: 'Cybersecurity',
    popular: true
  },
  {
    title: 'Virtual Event Management Platform',
    description: 'Complete platform for hosting and managing virtual events and conferences.',
    icon: Calendar,
    features: ['Event Creation', 'Attendee Management', 'Live Streaming', 'Networking Tools'],
    pricing: '$149 - $1,499/month',
    category: 'Event Management',
    popular: true
  },
  {
    title: 'Real-Time Language Translation API',
    description: 'Advanced translation service with context awareness and industry-specific terminology.',
    icon: Globe,
    features: ['100+ Languages', 'Context Awareness', 'Industry Terms', 'Real-time Processing'],
    pricing: '$0.01 - $0.10 per 1K characters',
    category: 'Language Services',
    popular: true
  },
  {
    title: 'AI-Powered Legal Document Analyzer',
    description: 'Automated legal document analysis with contract review and compliance checking.',
    icon: FileText,
    features: ['Contract Analysis', 'Compliance Checking', 'Risk Assessment', 'Clause Extraction'],
    pricing: '$299 - $1,999/month',
    category: 'Legal Tech',
    popular: true
  },
  {
    title: 'Smart Energy Management System',
    description: 'IoT-based energy monitoring and optimization for buildings and facilities.',
    icon: Zap,
    features: ['Energy Monitoring', 'Usage Analytics', 'Cost Optimization', 'Predictive Maintenance'],
    pricing: '$199 - $1,299/month',
    category: 'IoT & Energy',
    popular: true
  },
  {
    title: 'AI-Powered Recruitment Platform',
    description: 'Intelligent candidate screening and matching with bias detection and diversity analytics.',
    icon: Users,
    features: ['Resume Screening', 'Skill Matching', 'Bias Detection', 'Diversity Analytics'],
    pricing: '$199 - $1,499/month',
    category: 'HR & Recruitment',
    popular: true
  },
  {
    title: 'Blockchain Analytics & Compliance',
    description: 'Comprehensive blockchain transaction analysis with AML and compliance reporting.',
    icon: TrendingUp,
    features: ['Transaction Analysis', 'AML Detection', 'Compliance Reporting', 'Risk Scoring'],
    pricing: '$399 - $2,999/month',
    category: 'Blockchain Analytics',
    popular: true
  },
  {
    title: 'AI-Powered Medical Image Analysis',
    description: 'Advanced medical image analysis with AI-powered diagnosis assistance and reporting.',
    icon: Eye,
    features: ['Image Analysis', 'Diagnosis Assistance', 'Report Generation', 'Integration APIs'],
    pricing: '$999 - $4,999/month',
    category: 'Healthcare AI',
    popular: true
  },
  {
    title: 'Smart Home Automation Platform',
    description: 'Comprehensive smart home control with AI-powered automation and energy management.',
    icon: Home,
    features: ['Device Control', 'Automation Rules', 'Energy Management', 'Voice Integration'],
    pricing: '$29 - $199/month',
    category: 'Smart Home',
    popular: true
  },
  {
    title: 'AI-Powered Financial Risk Assessment',
    description: 'Real-time financial risk analysis with credit scoring and fraud detection.',
    icon: Shield,
    features: ['Credit Scoring', 'Fraud Detection', 'Risk Modeling', 'Real-time Alerts'],
    pricing: '$499 - $2,999/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'Intelligent Document Processing',
    description: 'Automated document extraction and processing with OCR and data validation.',
    icon: FileText,
    features: ['OCR Processing', 'Data Extraction', 'Validation Rules', 'Workflow Automation'],
    pricing: '$0.10 - $0.50 per document',
    category: 'Document Processing',
    popular: true
  },
  {
    title: 'AI-Powered Social Media Monitoring',
    description: 'Comprehensive social media monitoring with sentiment analysis and brand protection.',
    icon: MessageSquare,
    features: ['Brand Monitoring', 'Sentiment Analysis', 'Crisis Detection', 'Competitor Analysis'],
    pricing: '$199 - $1,299/month',
    category: 'Social Media',
    popular: true
  },
  {
    title: 'Smart Agriculture IoT Platform',
    description: 'IoT-based agricultural monitoring with crop analysis and yield optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Weather Integration', 'Yield Prediction', 'Resource Optimization'],
    pricing: '$299 - $1,999/month',
    category: 'AgTech',
    popular: true
  },
  {
    title: 'AI-Powered Personalization Engine',
    description: 'Real-time personalization engine for e-commerce and content platforms.',
    icon: Target,
    features: ['Real-time Personalization', 'A/B Testing', 'Behavioral Analysis', 'Recommendation Engine'],
    pricing: '$399 - $2,499/month',
    category: 'Personalization',
    popular: true
  },
  {
    title: 'Blockchain Identity Verification',
    description: 'Decentralized identity verification with KYC/AML compliance and privacy protection.',
    icon: Lock,
    features: ['Identity Verification', 'KYC/AML Compliance', 'Privacy Protection', 'Blockchain Integration'],
    pricing: '$0.50 - $2.00 per verification',
    category: 'Identity & Security',
    popular: true
  },
  {
    title: 'AI-Powered Voice Analytics',
    description: 'Advanced voice analysis for call centers with emotion detection and quality scoring.',
    icon: Mic,
    features: ['Emotion Detection', 'Quality Scoring', 'Sentiment Analysis', 'Performance Metrics'],
    pricing: '$199 - $1,299/month',
    category: 'Voice Analytics',
    popular: true
  },
  {
    title: 'AI Code Security Scanner',
    description: 'Automated security vulnerability detection and code quality analysis for development teams.',
    icon: Shield,
    features: ['Vulnerability Detection', 'Code Quality Analysis', 'Dependency Scanning', 'Compliance Checking'],
    pricing: '$149 - $799/month',
    category: 'DevSecOps',
    popular: true
  },
  {
    title: 'Smart Contract Audit Platform',
    description: 'Automated smart contract security analysis and vulnerability detection for blockchain projects.',
    icon: Lock,
    features: ['Automated Auditing', 'Vulnerability Detection', 'Gas Optimization', 'Compliance Checking'],
    pricing: '$299 - $1,999/month',
    category: 'Blockchain Security'
  },
  {
    title: 'AI-Powered API Testing Suite',
    description: 'Intelligent API testing with automated test generation and performance optimization.',
    icon: Code,
    features: ['Auto Test Generation', 'Performance Testing', 'Security Testing', 'Load Testing'],
    pricing: '$99 - $599/month',
    category: 'API Testing'
  },
  {
    title: 'Real-time Collaboration Whiteboard',
    description: 'AI-enhanced collaborative whiteboard with smart drawing recognition and team features.',
    icon: Monitor,
    features: ['Real-time Collaboration', 'AI Drawing Recognition', 'Voice Notes', 'Template Library'],
    pricing: '$19 - $99/month',
    category: 'Collaboration'
  },
  {
    title: 'AI Customer Churn Predictor',
    description: 'Predictive analytics platform to identify and prevent customer churn with actionable insights.',
    icon: TrendingUp,
    features: ['Churn Prediction', 'Risk Scoring', 'Intervention Strategies', 'ROI Tracking'],
    pricing: '$199 - $999/month',
    category: 'Customer Analytics'
  },
  {
    title: 'Smart Document Workflow Engine',
    description: 'AI-powered document processing and workflow automation for business processes.',
    icon: FileText,
    features: ['Document Classification', 'Data Extraction', 'Workflow Automation', 'Approval Routing'],
    pricing: '$79 - $399/month',
    category: 'Document Management'
  },
  {
    title: 'AI-Powered A/B Testing Platform',
    description: 'Intelligent experimentation platform with statistical significance and conversion optimization.',
    icon: Target,
    features: ['Statistical Analysis', 'Auto-optimization', 'Multi-variate Testing', 'Conversion Tracking'],
    pricing: '$49 - $299/month',
    category: 'Conversion Optimization'
  },
  {
    title: 'Voice-to-Action Automation',
    description: 'Convert voice commands into automated actions across your business applications.',
    icon: Mic,
    features: ['Voice Commands', 'Action Automation', 'Multi-app Integration', 'Custom Workflows'],
    pricing: '$29 - $199/month',
    category: 'Voice Automation'
  },
  {
    title: 'AI-Powered Lead Qualification',
    description: 'Automated lead scoring and qualification using advanced AI and behavioral analysis.',
    icon: Target,
    features: ['Lead Scoring', 'Behavioral Analysis', 'Qualification Rules', 'CRM Integration'],
    pricing: '$99 - $499/month',
    category: 'Sales Automation'
  },
  {
    title: 'Smart Inventory Forecasting',
    description: 'AI-driven inventory prediction and optimization for retail and e-commerce businesses.',
    icon: Package,
    features: ['Demand Forecasting', 'Stock Optimization', 'Seasonal Analysis', 'Supplier Integration'],
    pricing: '$149 - $799/month',
    category: 'Inventory Management'
  },
  {
    title: 'AI Content Personalization Engine',
    description: 'Dynamic content personalization based on user behavior and preferences.',
    icon: Eye,
    features: ['Behavioral Analysis', 'Content Optimization', 'Real-time Personalization', 'A/B Testing'],
    pricing: '$199 - $999/month',
    category: 'Personalization'
  },
  {
    title: 'Automated Compliance Monitor',
    description: 'AI-powered compliance monitoring and reporting for various industry regulations.',
    icon: Shield,
    features: ['Regulatory Monitoring', 'Automated Reporting', 'Risk Assessment', 'Audit Trail'],
    pricing: '$299 - $1,499/month',
    category: 'Compliance'
  },
  {
    title: 'AI-Powered Price Optimization',
    description: 'Dynamic pricing optimization using AI and market analysis for maximum revenue.',
    icon: DollarSign,
    features: ['Dynamic Pricing', 'Market Analysis', 'Competitor Tracking', 'Revenue Optimization'],
    pricing: '$199 - $999/month',
    category: 'Pricing Intelligence'
  },
  {
    title: 'Smart Meeting Scheduler Pro',
    description: 'AI-powered meeting scheduling with conflict resolution and optimal time suggestions.',
    icon: Calendar,
    features: ['Smart Scheduling', 'Conflict Resolution', 'Time Zone Handling', 'Calendar Integration'],
    pricing: '$9 - $49/month',
    category: 'Productivity'
  },
  {
    title: 'AI-Powered Data Quality Manager',
    description: 'Automated data quality assessment, cleaning, and validation for business data.',
    icon: Database,
    features: ['Data Quality Scoring', 'Automated Cleaning', 'Duplicate Detection', 'Validation Rules'],
    pricing: '$99 - $599/month',
    category: 'Data Management'
  },
  {
    title: 'Voice-Controlled Business Intelligence',
    description: 'Natural language query interface for business intelligence and data visualization.',
    icon: BarChart3,
    features: ['Voice Queries', 'Natural Language Processing', 'Data Visualization', 'Report Generation'],
    pricing: '$149 - $799/month',
    category: 'Business Intelligence'
  },
  {
    title: 'AI-Powered Email Signature Generator',
    description: 'Professional email signature generation with branding and contact management.',
    icon: Mail,
    features: ['Template Library', 'Brand Integration', 'Contact Management', 'Social Media Links'],
    pricing: '$5 - $29/month',
    category: 'Email Marketing'
  },
  {
    title: 'Smart Password Manager for Teams',
    description: 'AI-enhanced password management with security monitoring and team collaboration.',
    icon: Lock,
    features: ['Password Generation', 'Security Monitoring', 'Team Sharing', 'Breach Detection'],
    pricing: '$19 - $99/month',
    category: 'Security'
  },
  {
    title: 'AI-Powered Meeting Transcription',
    description: 'Real-time meeting transcription with speaker identification and action item extraction.',
    icon: Mic,
    features: ['Real-time Transcription', 'Speaker Identification', 'Action Item Extraction', 'Search & Archive'],
    pricing: '$29 - $149/month',
    category: 'Meeting Management'
  },
  {
    title: 'Automated Social Media Content Calendar',
    description: 'AI-generated social media content calendar with optimal posting times and engagement prediction.',
    icon: Globe,
    features: ['Content Generation', 'Optimal Timing', 'Engagement Prediction', 'Multi-platform Support'],
    pricing: '$39 - $199/month',
    category: 'Social Media Management',
    popular: true,
    benefits: ['Content Generation', 'Optimal Timing', 'Engagement', 'Multi-platform'],
    marketPrice: '$100 - $400/month',
    link: 'https://ziontechgroup.com/social-media-management'
  }
];

const features = [
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get up and running in days, not months'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance'
  },
  {
    icon: Users,
    title: 'Scalable Architecture',
    description: 'Grows with your business needs'
  },
  {
    icon: Globe,
    title: 'Multi-tenant Ready',
    description: 'Built for SaaS from the ground up'
  },
  {
    icon: BarChart3,
    title: 'Analytics Built-in',
    description: 'Comprehensive usage and performance metrics'
  },
  {
    icon: Lock,
    title: 'Data Privacy',
    description: 'GDPR and SOC 2 compliant by default'
  }
];

const benefits = [
  {
    icon: Clock,
    title: 'Fast Time to Market',
    description: 'Launch your SaaS in weeks, not months',
    stat: '80%'
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description: 'Lower development and maintenance costs',
    stat: '60%'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Built-in security and compliance features',
    stat: '99.9%'
  },
  {
    icon: TrendingUp,
    title: 'Scalable',
    description: 'Handles growth from startup to enterprise',
    stat: '10x'
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small teams and MVPs',
    price: '$299',
    period: '/month',
    features: [
      'Up to 1,000 users',
      'Basic analytics',
      'Email support',
      'Standard integrations'
    ],
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: '$799',
    period: '/month',
    features: [
      'Up to 10,000 users',
      'Advanced analytics',
      'Priority support',
      'Enhanced security',
      '5 custom integrations',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited users',
      'Custom analytics',
      'Dedicated support',
      'Enterprise security',
      'Unlimited integrations',
      'Custom development'
    ],
    popular: false
  }
];

export default function MicroSaaSPage() {
  return (
    <Layout
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Innovative micro SaaS solutions for specialized business needs. Rapid deployment, enterprise security, and built-in analytics."
      keywords="micro SaaS, software as a service, business solutions, automation, productivity tools"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Cloud className="h-16 w-16 text-purple-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Micro{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    SaaS
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Scalable software solutions designed for specific business needs. Rapid deployment, enterprise security, and built-in analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Products
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SaaS solutions designed to solve specific business challenges
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-8 w-8 text-purple-600 mr-3" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{product.title}</h3>
                        <span className="text-sm text-purple-600 font-semibold">{product.category}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="mb-4">
                      <span className="text-lg font-semibold text-purple-600">{product.pricing}</span>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 font-semibold inline-flex items-center"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                      {product.popular && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Micro SaaS?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Micro SaaS solutions offer unique advantages for modern businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 mb-2">{benefit.description}</p>
                    <div className="text-2xl font-bold text-purple-600">{benefit.stat}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg p-8 ${
                    plan.popular ? 'ring-2 ring-purple-500 relative' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="text-green-500 mr-3" size={20} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                      Get Started
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Micro SaaS?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss your requirements and create a custom solution that fits your business needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg inline-flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  href="/ai-services"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}