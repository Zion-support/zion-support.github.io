import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap,
  Star,
  TrendingUp,
  Settings,
  Globe,
  Target,
  ArrowRight,
  Sparkles,
  Database,
  MessageSquare,
  Eye,
  Cpu,
  Lock,
  BarChart3,
  FileText,
  Search,
  Bot,
  Palette,
  DollarSign,
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
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck,
  Smartphone,
  Box
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isITOpen, setIsITOpen] = useState(false);
  const [isSpecializedOpen, setIsSpecializedOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsAIOpen(false);
    setIsITOpen(false);
    setIsSpecializedOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      closeAllMenus();
    }
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    if (isServicesOpen) {
      setIsAIOpen(false);
      setIsITOpen(false);
      setIsSpecializedOpen(false);
    }
  };

  const toggleAI = () => {
    setIsAIOpen(!isAIOpen);
    if (isAIOpen) {
      setIsITOpen(false);
      setIsSpecializedOpen(false);
    }
  };

  const toggleIT = () => {
    setIsITOpen(!isITOpen);
    if (isITOpen) {
      setIsAIOpen(false);
      setIsSpecializedOpen(false);
    }
  };

  const toggleSpecialized = () => {
    setIsSpecializedOpen(!isSpecializedOpen);
    if (isSpecializedOpen) {
      setIsAIOpen(false);
      setIsITOpen(false);
    }
  };

  const microSAASServices = [
    // Productivity & Management Tools
    { name: 'AI Project Manager Pro', href: '/ai-project-manager', icon: BarChart, category: 'Productivity', price: '$99/mo', description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment' },
    { name: 'AI Task Manager Pro', href: '/ai-task-manager', icon: Check, category: 'Productivity', price: '$49/mo', description: 'Smart task management with AI prioritization, deadline tracking, and productivity insights' },
    { name: 'AI Workflow Automation Pro', href: '/ai-workflow-automation', icon: Settings, category: 'Productivity', price: '$79/mo', description: 'Automate repetitive tasks with intelligent workflow design and execution' },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar, category: 'Productivity', price: '$39/mo', description: 'Smart scheduling with conflict resolution and optimal time slot recommendations' },
    { name: 'AI Time Tracker Pro', href: '/ai-time-tracker', icon: Clock3, category: 'Productivity', price: '$34/mo', description: 'Advanced time tracking with AI-powered productivity analysis and reporting' },
    { name: 'AI Meeting Assistant Pro', href: '/ai-meeting-assistant', icon: MessageSquare, category: 'Productivity', price: '$59/mo', description: 'AI-powered meeting transcription, action items extraction, and follow-up automation' },
    { name: 'AI Note-Taking Assistant', href: '/ai-note-taking', icon: FileText, category: 'Productivity', price: '$29/mo', description: 'Intelligent note organization, summarization, and knowledge management' },
    { name: 'AI Focus Booster', href: '/ai-focus-booster', icon: Target, category: 'Productivity', price: '$19/mo', description: 'AI-driven focus sessions with distraction blocking and productivity optimization' },
    { name: 'AI Quantum Task Optimizer', href: '/ai-quantum-task-optimizer', icon: Cpu, category: 'Productivity', price: '$299/mo', description: 'Revolutionary quantum-powered task optimization with advanced algorithms' },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Box, category: 'Productivity', price: '$199/mo', description: 'Immersive 3D holographic workspace for enhanced productivity' },
    { name: 'AI Neural Memory Assistant', href: '/ai-neural-memory-assistant', icon: Brain, category: 'Productivity', price: '$49/mo', description: 'Enhance cognitive capabilities with AI neural memory system' },
    { name: 'AI Telepathic Interface', href: '/ai-telepathic-interface', icon: Brain, category: 'Productivity', price: '$299/mo', description: 'Control your digital world with the power of thought' },
    
    // Content & Marketing Tools
    { name: 'AI Content Writer Pro', href: '/ai-content-writer', icon: FileText, category: 'Content', price: '$89/mo', description: 'Advanced AI content generation for blogs, articles, and marketing copy' },
    { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager', icon: MessageSquare, category: 'Marketing', price: '$69/mo', description: 'Automated social media posting, engagement, and analytics with AI optimization' },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail, category: 'Marketing', price: '$59/mo', description: 'AI-powered email campaigns with personalization and performance optimization' },
    { name: 'AI SEO Optimizer Pro', href: '/ai-seo-optimizer', icon: Search, category: 'Marketing', price: '$79/mo', description: 'Comprehensive SEO analysis and optimization with AI-driven recommendations' },
    { name: 'AI Lead Generation Pro', href: '/ai-lead-generation', icon: Target, category: 'Marketing', price: '$99/mo', description: 'Intelligent lead scoring, qualification, and nurturing automation' },
    { name: 'AI Website Builder Pro', href: '/ai-website-builder', icon: Globe, category: 'Marketing', price: '$89/mo', description: 'AI-powered website creation with responsive design and SEO optimization' },
    { name: 'AI Landing Page Builder', href: '/ai-landing-page-builder', icon: Globe, category: 'Marketing', price: '$49/mo', description: 'Create high-converting landing pages with AI optimization and A/B testing' },
    { name: 'AI Ad Copy Generator', href: '/ai-ad-copy-generator', icon: Target, category: 'Marketing', price: '$39/mo', description: 'Generate compelling ad copy for Google, Facebook, and other platforms' },
    { name: 'AI Video Script Writer', href: '/ai-video-script-writer', icon: Video, category: 'Content', price: '$59/mo', description: 'Create engaging video scripts for marketing, education, and entertainment' },
    { name: 'AI Blog Post Generator', href: '/ai-blog-generator', icon: FileText, category: 'Content', price: '$49/mo', description: 'Generate high-quality blog posts with research and SEO optimization' },
    
    // Business & Finance Tools
    { name: 'AI CRM Intelligence Pro', href: '/ai-crm', icon: Users, category: 'Business', price: '$89/mo', description: 'Smart CRM with AI-powered customer insights and sales forecasting' },
    { name: 'AI Financial Analyzer Pro', href: '/ai-financial-analyzer', icon: Calculator, category: 'Finance', price: '$79/mo', description: 'Advanced financial analysis with AI-driven insights and forecasting' },
    { name: 'AI Invoice Generator Pro', href: '/ai-invoice-generator', icon: FileText, category: 'Finance', price: '$49/mo', description: 'Automated invoice generation with AI-powered pricing and payment tracking' },
    { name: 'AI Expense Tracker Pro', href: '/ai-expense-tracker', icon: CreditCard, category: 'Finance', price: '$29/mo', description: 'Smart expense tracking with AI categorization and budget management' },
    { name: 'AI Stock Portfolio Manager', href: '/ai-stock-portfolio-manager', icon: TrendingUp, category: 'Finance', price: '$79/mo', description: 'AI-powered portfolio optimization and investment recommendations' },
    { name: 'AI Budget Planner Pro', href: '/ai-budget-planner', icon: Calculator, category: 'Finance', price: '$39/mo', description: 'Intelligent budget planning with AI-driven financial goal tracking' },
    { name: 'AI Tax Assistant Pro', href: '/ai-tax-assistant', icon: FileText, category: 'Finance', price: '$99/mo', description: 'AI-powered tax preparation and optimization for individuals and businesses' },
    { name: 'AI Investment Analyzer', href: '/ai-investment-analyzer', icon: TrendingUp, category: 'Finance', price: '$149/mo', description: 'Advanced investment analysis with AI-driven market predictions' },
    { name: 'AI Business Plan Generator', href: '/ai-business-plan-generator', icon: FileText, category: 'Business', price: '$199/mo', description: 'Create comprehensive business plans with AI-powered market analysis' },
    { name: 'AI Contract Analyzer', href: '/ai-contract-analyzer', icon: FileText, category: 'Business', price: '$129/mo', description: 'AI-powered contract review and risk assessment' },
    { name: 'AI Quantum Financial Oracle', href: '/ai-quantum-financial-oracle', icon: DollarSign, category: 'Finance', price: '$499/mo', description: 'Predict financial markets with quantum computing and AI algorithms' },
    
    // Customer Service & Support Tools
    { name: 'AI Customer Support Bot Pro', href: '/ai-customer-support-bot', icon: Bot, category: 'Support', price: '$99/mo', description: 'Advanced AI chatbot with natural language processing and human handoff' },
    { name: 'AI Chatbot Builder Pro', href: '/ai-chatbot-builder', icon: Bot, category: 'Support', price: '$69/mo', description: 'No-code chatbot builder with AI training and optimization' },
    { name: 'AI Email Assistant Pro', href: '/ai-email-assistant', icon: Mail, category: 'Support', price: '$39/mo', description: 'AI-powered email response generation and customer service automation' },
    { name: 'AI Live Chat Assistant', href: '/ai-live-chat', icon: MessageSquare, category: 'Support', price: '$59/mo', description: 'Real-time AI chat support with instant response and escalation' },
    { name: 'AI Knowledge Base Manager', href: '/ai-knowledge-base', icon: FileText, category: 'Support', price: '$49/mo', description: 'AI-powered knowledge base creation and maintenance' },
    { name: 'AI Ticket Routing System', href: '/ai-ticket-routing', icon: Settings, category: 'Support', price: '$79/mo', description: 'Intelligent ticket routing and prioritization with AI' },
    
    // Development & Technical Tools
    { name: 'AI Code Review Assistant Pro', href: '/ai-code-generation', icon: Code, category: 'Development', price: '$89/mo', description: 'AI-powered code review, suggestions, and automated testing' },
    { name: 'AI Mobile App Builder Pro', href: '/ai-mobile-app-development', icon: Smartphone, category: 'Development', price: '$149/mo', description: 'No-code mobile app development with AI optimization' },
    { name: 'AI Cybersecurity Shield Pro', href: '/ai-cybersecurity', icon: Shield, category: 'Security', price: '$199/mo', description: 'AI-powered threat detection and security monitoring' },
    { name: 'AI Document Processor Pro', href: '/ai-document-processing', icon: FileText, category: 'Development', price: '$79/mo', description: 'Intelligent document processing and data extraction' },
    { name: 'AI Password Manager Pro', href: '/ai-password-manager', icon: Lock, category: 'Security', price: '$19/mo', description: 'Advanced password management with AI-powered security recommendations' },
    { name: 'AI API Testing Suite', href: '/ai-api-testing', icon: Code, category: 'Development', price: '$59/mo', description: 'Automated API testing with AI-generated test cases' },
    { name: 'AI Database Optimizer', href: '/ai-database-optimizer', icon: Database, category: 'Development', price: '$99/mo', description: 'AI-powered database performance optimization and monitoring' },
    { name: 'AI Code Documentation Generator', href: '/ai-code-docs', icon: FileText, category: 'Development', price: '$39/mo', description: 'Automated code documentation generation with AI' },
    
    // Analytics & Data Tools
    { name: 'AI Data Analytics Pro', href: '/ai-data-analytics', icon: BarChart3, category: 'Analytics', price: '$99/mo', description: 'Advanced data analytics with AI-powered insights and predictions' },
    { name: 'AI Data Visualization Pro', href: '/ai-data-visualization', icon: BarChart, category: 'Analytics', price: '$69/mo', description: 'AI-generated charts, graphs, and interactive dashboards' },
    { name: 'AI Business Intelligence Suite', href: '/ai-business-intelligence', icon: BarChart, category: 'Analytics', price: '$149/mo', description: 'Comprehensive BI platform with AI-driven insights and reporting' },
    { name: 'AI Predictive Analytics Engine', href: '/ai-predictive-analytics', icon: TrendingUp, category: 'Analytics', price: '$199/mo', description: 'Advanced predictive modeling and forecasting with AI' },
    { name: 'AI Market Research Assistant', href: '/ai-market-research', icon: Search, category: 'Analytics', price: '$79/mo', description: 'AI-powered market research and competitive analysis' },
    { name: 'AI Customer Analytics Pro', href: '/ai-customer-analytics', icon: Users, category: 'Analytics', price: '$89/mo', description: 'Deep customer behavior analysis and segmentation with AI' },
    
    // Creative & Media Tools
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video, category: 'Creative', price: '$149/mo', description: 'AI-powered video creation from text prompts and templates' },
    { name: 'AI Voice Cloning Studio Pro', href: '/ai-voice-cloning', icon: Music, category: 'Creative', price: '$79/mo', description: 'High-quality voice cloning and synthesis for various applications' },
    { name: 'AI Music Composer Pro', href: '/ai-music-composition', icon: Music, category: 'Creative', price: '$59/mo', description: 'AI-generated music composition and production tools' },
    { name: 'AI Fashion Design Studio Pro', href: '/ai-fashion-design', icon: Palette, category: 'Creative', price: '$89/mo', description: 'AI-powered fashion design and trend analysis' },
    { name: 'AI 3D Generation Studio Pro', href: '/ai-3d-generation', icon: Camera, category: 'Creative', price: '$199/mo', description: 'AI-generated 3D models and animations' },
    { name: 'AI Logo Designer Pro', href: '/ai-logo-designer', icon: Palette, category: 'Creative', price: '$59/mo', description: 'Professional logo design with AI-powered creativity' },
    { name: 'AI Image Generator Pro', href: '/ai-image-generator', icon: Camera, category: 'Creative', price: '$49/mo', description: 'High-quality image generation from text descriptions' },
    { name: 'AI Presentation Creator', href: '/ai-presentation-creator', icon: FileText, category: 'Creative', price: '$39/mo', description: 'AI-powered presentation creation with design optimization' },
    { name: 'AI Brand Identity Generator', href: '/ai-brand-generator', icon: Palette, category: 'Creative', price: '$99/mo', description: 'Complete brand identity creation with AI' },
    { name: 'AI Podcast Producer', href: '/ai-podcast-producer', icon: Music, category: 'Creative', price: '$79/mo', description: 'AI-powered podcast creation and editing tools' },
    
    // Health & Wellness Tools
    { name: 'AI Healthcare Assistant Pro', href: '/ai-healthcare', icon: Stethoscope, category: 'Health', price: '$49/mo', description: 'AI-powered health monitoring and wellness recommendations' },
    { name: 'AI Fitness Coach Pro', href: '/ai-fitness-coach', icon: Heart, category: 'Health', price: '$39/mo', description: 'Personalized fitness plans and workout optimization with AI' },
    { name: 'AI Nutrition Planner', href: '/ai-nutrition-planner', icon: Heart, category: 'Health', price: '$29/mo', description: 'AI-powered meal planning and nutrition tracking' },
    { name: 'AI Mental Health Assistant', href: '/ai-mental-health', icon: Brain, category: 'Health', price: '$59/mo', description: 'AI-powered mental health support and wellness tracking' },
    { name: 'AI Sleep Optimizer', href: '/ai-sleep-optimizer', icon: Clock3, category: 'Health', price: '$34/mo', description: 'AI-driven sleep analysis and optimization recommendations' },
    { name: 'AI Meditation Guide', href: '/ai-meditation-guide', icon: Brain, category: 'Health', price: '$24/mo', description: 'Personalized meditation sessions with AI guidance' },
    
    // Sales & Business Tools
    { name: 'AI Sales Automation Pro', href: '/ai-sales-automation', icon: Target, category: 'Sales', price: '$149/mo', description: 'Complete sales automation with AI-powered lead scoring and follow-up' },
    { name: 'AI Sales Forecasting', href: '/ai-sales-forecasting', icon: TrendingUp, category: 'Sales', price: '$99/mo', description: 'Accurate sales predictions and pipeline analysis with AI' },
    { name: 'AI Proposal Generator', href: '/ai-proposal-generator', icon: FileText, category: 'Sales', price: '$69/mo', description: 'AI-powered proposal creation and customization' },
    { name: 'AI Pricing Optimizer', href: '/ai-pricing-optimizer', icon: DollarSign, category: 'Sales', price: '$79/mo', description: 'Dynamic pricing optimization based on market conditions' },
    { name: 'AI Customer Retention Manager', href: '/ai-customer-retention', icon: Users, category: 'Sales', price: '$89/mo', description: 'AI-powered customer retention strategies and automation' },
    { name: 'AI Deal Closer Assistant', href: '/ai-deal-closer', icon: Target, category: 'Sales', price: '$119/mo', description: 'AI-powered deal closing strategies and negotiation support' }
  ];

  const aiServices = [
    // Core AI Technologies
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain, price: '$2,500/mo', description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent automation' },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageSquare, price: '$1,800/mo', description: 'Advanced NLP for text analysis, sentiment analysis, and language understanding' },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye, price: '$2,200/mo', description: 'Image and video analysis, object detection, and visual recognition systems' },
    { name: 'Deep Learning Solutions', href: '/deep-learning', icon: Brain, price: '$3,000/mo', description: 'Neural network architectures for complex pattern recognition and decision making' },
    { name: 'Reinforcement Learning', href: '/reinforcement-learning', icon: Target, price: '$2,800/mo', description: 'AI systems that learn through interaction and feedback optimization' },
    { name: 'Generative AI Solutions', href: '/generative-ai', icon: Sparkles, price: '$2,000/mo', description: 'AI content generation, creative applications, and synthetic data creation' },
    
    // Business Intelligence & Analytics
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: BarChart, price: '$1,500/mo', description: 'AI-powered business insights, reporting, and strategic decision support' },
    { name: 'AI Predictive Analytics Platform', href: '/ai-predictive-analytics', icon: BarChart, price: '$2,200/mo', description: 'Advanced forecasting and predictive modeling for business outcomes' },
    { name: 'AI Data Mining & Discovery', href: '/ai-data-mining', icon: Search, price: '$1,800/mo', description: 'Intelligent data exploration and hidden pattern discovery' },
    { name: 'AI Real-Time Analytics', href: '/ai-realtime-analytics', icon: Activity, price: '$1,600/mo', description: 'Live data processing and instant insights for operational decisions' },
    { name: 'AI Customer Intelligence', href: '/ai-customer-intelligence', icon: Users, price: '$1,400/mo', description: 'Deep customer behavior analysis and personalization engines' },
    { name: 'AI Market Intelligence', href: '/ai-market-intelligence', icon: Globe, price: '$1,700/mo', description: 'Competitive analysis and market trend prediction with AI' },
    
    // Industry-Specific AI Solutions
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Stethoscope, price: '$2,500/mo', description: 'Medical diagnosis assistance, drug discovery, and patient care optimization' },
    { name: 'AI Fintech Solutions', href: '/ai-fintech', icon: CreditCard, price: '$2,800/mo', description: 'Fraud detection, algorithmic trading, and financial risk assessment' },
    { name: 'AI Manufacturing Intelligence', href: '/ai-manufacturing', icon: Factory, price: '$2,200/mo', description: 'Smart manufacturing, quality control, and supply chain optimization' },
    { name: 'AI Retail Solutions', href: '/ai-retail', icon: ShoppingCart, price: '$1,800/mo', description: 'Personalized shopping experiences, inventory optimization, and demand forecasting' },
    { name: 'AI Transportation & Logistics', href: '/ai-transportation', icon: Truck, price: '$2,000/mo', description: 'Route optimization, autonomous vehicles, and logistics management' },
    { name: 'AI Energy Management', href: '/ai-energy', icon: Zap, price: '$1,900/mo', description: 'Smart grid optimization, energy consumption prediction, and renewable integration' },
    { name: 'AI Real Estate Analytics', href: '/ai-real-estate', icon: Home, price: '$1,200/mo', description: 'Property valuation, market analysis, and investment recommendations' },
    { name: 'AI Education Platform', href: '/ai-education', icon: GraduationCap, price: '$1,500/mo', description: 'Personalized learning, adaptive assessments, and educational content generation' },
    { name: 'AI Legal Assistant', href: '/ai-legal', icon: FileText, price: '$1,800/mo', description: 'Legal document analysis, case research, and contract review automation' },
    { name: 'AI Insurance Analytics', href: '/ai-insurance', icon: Shield, price: '$1,600/mo', description: 'Risk assessment, claims processing, and fraud detection' },
    
    // Advanced AI Technologies
    { name: 'Quantum AI Computing', href: '/ai-quantum-computing', icon: Cpu, price: '$5,000/mo', description: 'Quantum-enhanced AI algorithms for complex optimization problems' },
    { name: 'AI Robotics', href: '/ai-robotics', icon: Settings, price: '$4,500/mo', description: 'Intelligent robotic systems for automation and human-robot collaboration' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Settings, price: '$4,200/mo', description: 'Self-operating systems for vehicles, drones, and industrial automation' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: Lock, price: '$2,500/mo', description: 'AI-powered blockchain applications and smart contract optimization' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Cpu, price: '$1,800/mo', description: 'AI processing at the edge for real-time applications and IoT devices' },
    { name: 'AI Cloud Solutions', href: '/ai-cloud-solutions', icon: Cloud, price: '$2,000/mo', description: 'Scalable AI infrastructure and cloud-based machine learning platforms' },
    
    // AI Automation & Integration
    { name: 'AI Process Automation', href: '/ai-automation', icon: Zap, price: '$1,500/mo', description: 'Intelligent business process automation and workflow optimization' },
    { name: 'AI Integration Services', href: '/ai-integration', icon: Settings, price: '$2,000/mo', description: 'Seamless AI integration with existing systems and workflows' },
    { name: 'AI API Development', href: '/ai-api-development', icon: Code, price: '$1,800/mo', description: 'Custom AI APIs and microservices for application integration' },
    { name: 'AI Data Pipeline Solutions', href: '/ai-data-pipeline', icon: Database, price: '$1,600/mo', description: 'Automated data processing and AI model deployment pipelines' },
    
    // AI Security & Compliance
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, price: '$2,200/mo', description: 'AI-powered threat detection, security monitoring, and incident response' },
    { name: 'AI Privacy Solutions', href: '/ai-privacy', icon: Lock, price: '$1,800/mo', description: 'Privacy-preserving AI and data protection compliance' },
    { name: 'AI Governance & Ethics', href: '/ai-governance', icon: FileText, price: '$1,500/mo', description: 'AI ethics frameworks, bias detection, and responsible AI practices' },
    { name: 'AI Compliance Monitoring', href: '/ai-compliance', icon: Shield, price: '$1,400/mo', description: 'Automated compliance checking and regulatory reporting' },
    
    // AI Development & Training
    { name: 'AI Model Development', href: '/ai-model-development', icon: Code, price: '$2,500/mo', description: 'Custom AI model development and training services' },
    { name: 'AI Training & Consulting', href: '/ai-training', icon: GraduationCap, price: '$1,200/mo', description: 'AI education, training programs, and strategic consulting' },
    { name: 'AI Research & Development', href: '/ai-research', icon: Brain, price: '$3,500/mo', description: 'Cutting-edge AI research and experimental technology development' },
    { name: 'AI Proof of Concept', href: '/ai-poc', icon: Target, price: '$1,000/mo', description: 'Rapid AI prototype development and feasibility testing' }
  ];

  const itServices = [
    // Cloud Services & Infrastructure
    { name: 'Cloud Migration Services', href: '/cloud-migration', icon: Cloud, price: '$2,500/mo', description: 'Complete cloud migration strategy, planning, and execution for AWS, Azure, and GCP' },
    { name: 'Cloud Infrastructure Management', href: '/cloud-infrastructure', icon: Cloud, price: '$2,000/mo', description: '24/7 cloud infrastructure monitoring, optimization, and management' },
    { name: 'Multi-Cloud Solutions', href: '/multi-cloud', icon: Cloud, price: '$2,800/mo', description: 'Hybrid and multi-cloud architecture design and implementation' },
    { name: 'Cloud Security & Compliance', href: '/cloud-security', icon: Shield, price: '$2,200/mo', description: 'Comprehensive cloud security assessment and compliance management' },
    { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimization', icon: DollarSign, price: '$1,500/mo', description: 'Cloud spending analysis and cost reduction strategies' },
    { name: 'Serverless Architecture', href: '/serverless', icon: Zap, price: '$1,800/mo', description: 'Serverless application design and implementation services' },
    
    // Cybersecurity & Security Services
    { name: 'Cybersecurity Solutions', href: '/cybersecurity', icon: Shield, price: '$2,500/mo', description: 'Comprehensive cybersecurity assessment, implementation, and monitoring' },
    { name: 'Network Security Solutions', href: '/network-security', icon: Shield, price: '$2,000/mo', description: 'Advanced network security architecture and threat protection' },
    { name: 'Endpoint Security Management', href: '/endpoint-security', icon: Lock, price: '$1,800/mo', description: 'Device security, antivirus, and endpoint detection and response' },
    { name: 'Security Operations Center (SOC)', href: '/soc', icon: Activity, price: '$3,500/mo', description: '24/7 security monitoring, incident response, and threat hunting' },
    { name: 'Penetration Testing', href: '/penetration-testing', icon: Target, price: '$2,200/mo', description: 'Comprehensive security testing and vulnerability assessment' },
    { name: 'Security Compliance & Auditing', href: '/security-compliance', icon: FileText, price: '$1,900/mo', description: 'SOC 2, ISO 27001, and other security compliance services' },
    { name: 'Identity & Access Management', href: '/iam', icon: Users, price: '$1,600/mo', description: 'Identity management, SSO, MFA, and access control solutions' },
    { name: 'Data Loss Prevention', href: '/dlp', icon: Database, price: '$1,700/mo', description: 'Data protection, encryption, and loss prevention strategies' },
    
    // DevOps & Development Services
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, price: '$2,200/mo', description: 'DevOps transformation, CI/CD pipeline setup, and automation' },
    { name: 'Container Orchestration', href: '/container-orchestration', icon: Settings, price: '$1,800/mo', description: 'Kubernetes, Docker, and container management solutions' },
    { name: 'Infrastructure as Code', href: '/iac', icon: Code, price: '$1,600/mo', description: 'Terraform, CloudFormation, and infrastructure automation' },
    { name: 'Microservices Architecture', href: '/microservices', icon: Settings, price: '$2,500/mo', description: 'Microservices design, implementation, and management' },
    { name: 'API Development & Management', href: '/api-development', icon: Code, price: '$1,800/mo', description: 'RESTful and GraphQL API development and lifecycle management' },
    { name: 'Code Quality & Testing', href: '/code-quality', icon: Code, price: '$1,400/mo', description: 'Automated testing, code review, and quality assurance' },
    
    // Database & Data Services
    { name: 'Database Services', href: '/database-services', icon: Database, price: '$1,800/mo', description: 'Database design, optimization, migration, and management' },
    { name: 'Data Warehouse Solutions', href: '/data-warehouse', icon: Database, price: '$2,200/mo', description: 'Data warehouse design, ETL processes, and analytics infrastructure' },
    { name: 'Big Data Solutions', href: '/big-data', icon: Database, price: '$2,800/mo', description: 'Hadoop, Spark, and big data processing solutions' },
    { name: 'Data Backup & Recovery', href: '/data-backup', icon: Database, price: '$1,500/mo', description: 'Comprehensive data backup, disaster recovery, and business continuity' },
    { name: 'Data Migration Services', href: '/data-migration', icon: Database, price: '$1,600/mo', description: 'Safe and efficient data migration between systems and platforms' },
    { name: 'Database Performance Tuning', href: '/db-performance', icon: Zap, price: '$1,200/mo', description: 'Database optimization, indexing, and performance monitoring' },
    
    // Enterprise Solutions & Integration
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building, price: '$4,000/mo', description: 'Comprehensive enterprise IT transformation and digital modernization' },
    { name: 'ERP Implementation', href: '/erp', icon: Building, price: '$3,500/mo', description: 'Enterprise resource planning system selection and implementation' },
    { name: 'CRM Solutions', href: '/crm-solutions', icon: Users, price: '$2,200/mo', description: 'Customer relationship management system design and deployment' },
    { name: 'System Integration', href: '/system-integration', icon: Settings, price: '$2,500/mo', description: 'Legacy system integration and API connectivity solutions' },
    { name: 'Workflow Automation', href: '/workflow-automation', icon: Settings, price: '$1,800/mo', description: 'Business process automation and workflow optimization' },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: Globe, price: '$3,000/mo', description: 'Complete digital transformation strategy and implementation' },
    
    // IT Infrastructure & Support
    { name: 'IT Infrastructure Management', href: '/it-infrastructure', icon: Settings, price: '$2,200/mo', description: 'Complete IT infrastructure design, implementation, and management' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe, price: '$2,000/mo', description: 'Network design, implementation, and optimization services' },
    { name: 'Data Center Solutions', href: '/data-center', icon: Database, price: '$2,800/mo', description: 'Data center design, colocation, and management services' },
    { name: 'IT Support & Helpdesk', href: '/it-support', icon: Users, price: '$1,500/mo', description: '24/7 IT support, helpdesk, and technical assistance' },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: BarChart, price: '$1,200/mo', description: 'IT asset tracking, lifecycle management, and optimization' },
    { name: 'IT Monitoring & Alerting', href: '/it-monitoring', icon: Activity, price: '$1,400/mo', description: 'Proactive IT monitoring, alerting, and performance management' },
    
    // Compliance & Governance
    { name: 'IT Compliance & Governance', href: '/it-compliance', icon: FileText, price: '$2,000/mo', description: 'IT governance frameworks, compliance management, and auditing' },
    { name: 'GDPR Compliance', href: '/gdpr-compliance', icon: Shield, price: '$1,800/mo', description: 'GDPR compliance assessment, implementation, and ongoing management' },
    { name: 'HIPAA Compliance', href: '/hipaa-compliance', icon: Shield, price: '$2,200/mo', description: 'Healthcare data protection and HIPAA compliance services' },
    { name: 'SOX Compliance', href: '/sox-compliance', icon: FileText, price: '$1,900/mo', description: 'Sarbanes-Oxley IT compliance and controls implementation' },
    { name: 'Risk Management', href: '/risk-management', icon: Shield, price: '$1,600/mo', description: 'IT risk assessment, mitigation strategies, and ongoing monitoring' },
    
    // Training & Consulting
    { name: 'IT Training & Certification', href: '/it-training', icon: GraduationCap, price: '$1,000/mo', description: 'Technical training programs and certification preparation' },
    { name: 'IT Consulting Services', href: '/it-consulting', icon: Briefcase, price: '$3,000/mo', description: 'Strategic IT consulting and technology advisory services' },
    { name: 'IT Strategy & Planning', href: '/it-strategy', icon: Target, price: '$2,500/mo', description: 'IT strategy development and technology roadmap planning' },
    { name: 'Technology Assessment', href: '/tech-assessment', icon: Search, price: '$1,500/mo', description: 'Comprehensive technology assessment and recommendations' },
    
    // Specialized Services
    { name: 'IoT Solutions', href: '/iot-solutions', icon: Settings, price: '$2,200/mo', description: 'Internet of Things device integration and management' },
    { name: 'Blockchain Solutions', href: '/blockchain-solutions', icon: Lock, price: '$2,800/mo', description: 'Blockchain technology implementation and smart contract development' },
    { name: 'Edge Computing', href: '/edge-computing', icon: Cpu, price: '$1,900/mo', description: 'Edge computing infrastructure and distributed processing solutions' },
    { name: '5G Network Solutions', href: '/5g-solutions', icon: Globe, price: '$2,500/mo', description: '5G network planning, implementation, and optimization' }
  ];

  const specializedServices = [
    // Quantum Computing & Advanced Technologies
    { name: 'Quantum Computing Solutions', href: '/quantum-computing', icon: Cpu, price: '$8,000/mo', description: 'Quantum algorithm development, quantum machine learning, and quantum optimization' },
    { name: 'Quantum AI Integration', href: '/quantum-ai', icon: Brain, price: '$6,000/mo', description: 'Quantum-enhanced AI algorithms and hybrid quantum-classical computing' },
    { name: 'Quantum Cryptography', href: '/quantum-crypto', icon: Lock, price: '$5,500/mo', description: 'Quantum key distribution and post-quantum cryptography solutions' },
    { name: 'Quantum Simulation', href: '/quantum-simulation', icon: Cpu, price: '$4,500/mo', description: 'Quantum simulation for materials science, chemistry, and physics research' },
    
    // Autonomous Systems & Robotics
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings, price: '$6,500/mo', description: 'Self-driving vehicles, autonomous drones, and intelligent automation systems' },
    { name: 'Robotic Process Automation', href: '/rpa', icon: Settings, price: '$2,800/mo', description: 'Intelligent process automation and robotic workflow optimization' },
    { name: 'Autonomous Drones', href: '/autonomous-drones', icon: Settings, price: '$4,200/mo', description: 'AI-powered drone systems for delivery, surveillance, and inspection' },
    { name: 'Autonomous Vehicles', href: '/autonomous-vehicles', icon: Car, price: '$7,500/mo', description: 'Self-driving car technology and autonomous vehicle fleet management' },
    { name: 'Industrial Automation', href: '/industrial-automation', icon: Factory, price: '$3,500/mo', description: 'Smart manufacturing and industrial process automation' },
    
    // Blockchain & Web3 Technologies
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock, price: '$3,500/mo', description: 'Blockchain development, smart contracts, and Web3 application architecture' },
    { name: 'DeFi Solutions', href: '/defi', icon: CreditCard, price: '$4,000/mo', description: 'Decentralized finance protocols and DeFi application development' },
    { name: 'NFT Marketplace Development', href: '/nft-marketplace', icon: Palette, price: '$3,200/mo', description: 'NFT marketplace creation and digital asset management platforms' },
    { name: 'Smart Contract Development', href: '/smart-contracts', icon: Code, price: '$2,800/mo', description: 'Ethereum, Solana, and multi-chain smart contract development' },
    { name: 'Cryptocurrency Exchange', href: '/crypto-exchange', icon: DollarSign, price: '$5,000/mo', description: 'Secure cryptocurrency exchange platform development' },
    { name: 'Web3 Identity Solutions', href: '/web3-identity', icon: Users, price: '$2,500/mo', description: 'Decentralized identity and self-sovereign identity solutions' },
    
    // IoT & Edge Computing
    { name: 'IoT Solutions', href: '/iot-solutions', icon: Settings, price: '$2,800/mo', description: 'Internet of Things device integration, data collection, and management' },
    { name: 'Edge Computing', href: '/edge-computing', icon: Cpu, price: '$2,200/mo', description: 'Edge computing infrastructure and distributed processing solutions' },
    { name: 'Smart City Solutions', href: '/smart-city', icon: Globe, price: '$4,500/mo', description: 'Smart city infrastructure, traffic management, and urban analytics' },
    { name: 'Industrial IoT', href: '/industrial-iot', icon: Factory, price: '$3,200/mo', description: 'Industrial IoT sensors, monitoring, and predictive maintenance' },
    { name: 'Connected Vehicle Solutions', href: '/connected-vehicles', icon: Car, price: '$3,800/mo', description: 'Vehicle-to-everything (V2X) communication and connected car services' },
    
    // Advanced Analytics & Business Intelligence
    { name: 'Advanced Analytics', href: '/advanced-analytics', icon: BarChart, price: '$2,500/mo', description: 'Predictive analytics, machine learning, and advanced statistical modeling' },
    { name: 'Real-Time Analytics', href: '/realtime-analytics', icon: Activity, price: '$2,200/mo', description: 'Streaming analytics and real-time data processing solutions' },
    { name: 'Customer 360 Analytics', href: '/customer-360', icon: Users, price: '$2,800/mo', description: 'Comprehensive customer data analysis and personalization engines' },
    { name: 'Supply Chain Analytics', href: '/supply-chain-analytics', icon: Globe, price: '$2,600/mo', description: 'Supply chain optimization and logistics analytics' },
    { name: 'Financial Analytics', href: '/financial-analytics', icon: DollarSign, price: '$2,400/mo', description: 'Risk modeling, fraud detection, and financial forecasting' },
    
    // Emerging Technologies
    { name: 'Augmented Reality (AR)', href: '/ar-solutions', icon: Eye, price: '$3,200/mo', description: 'AR application development and immersive user experiences' },
    { name: 'Virtual Reality (VR)', href: '/vr-solutions', icon: Eye, price: '$3,500/mo', description: 'VR platform development and virtual environment creation' },
    { name: 'Mixed Reality (MR)', href: '/mr-solutions', icon: Eye, price: '$3,800/mo', description: 'Mixed reality applications and spatial computing solutions' },
    { name: 'Digital Twins', href: '/digital-twins', icon: Settings, price: '$3,000/mo', description: 'Digital twin creation and real-time simulation platforms' },
    { name: 'Metaverse Development', href: '/metaverse', icon: Globe, price: '$4,500/mo', description: 'Metaverse platform development and virtual world creation' },
    
    // Advanced Security & Privacy
    { name: 'Zero Trust Security', href: '/zero-trust', icon: Shield, price: '$2,800/mo', description: 'Zero trust architecture implementation and security framework' },
    { name: 'Homomorphic Encryption', href: '/homomorphic-encryption', icon: Lock, price: '$3,500/mo', description: 'Privacy-preserving computation and encrypted data processing' },
    { name: 'Federated Learning', href: '/federated-learning', icon: Brain, price: '$2,600/mo', description: 'Distributed machine learning with privacy preservation' },
    { name: 'Differential Privacy', href: '/differential-privacy', icon: Lock, price: '$2,200/mo', description: 'Privacy-preserving data analysis and statistical disclosure control' },
    
    // Research & Development
    { name: 'Technology R&D', href: '/tech-rd', icon: Brain, price: '$5,000/mo', description: 'Cutting-edge technology research and experimental development' },
    { name: 'Innovation Labs', href: '/innovation-labs', icon: Sparkles, price: '$4,200/mo', description: 'Innovation incubation and technology prototyping services' },
    { name: 'Patent Development', href: '/patent-development', icon: FileText, price: '$3,000/mo', description: 'Intellectual property development and patent strategy' },
    { name: 'Technology Transfer', href: '/tech-transfer', icon: ArrowRight, price: '$2,500/mo', description: 'Technology commercialization and transfer services' },
    { name: 'Space Technology Solutions', href: '/space-technology', icon: Globe, price: '$6,000/mo', description: 'Space technology development and satellite communication systems' },
    { name: 'Climate Technology Solutions', href: '/climate-tech', icon: Globe, price: '$3,200/mo', description: 'Climate monitoring, carbon tracking, and environmental technology solutions' },
    { name: 'Biotechnology IT Solutions', href: '/biotech-it', icon: Stethoscope, price: '$4,000/mo', description: 'Bioinformatics, genomic data analysis, and biotechnology IT infrastructure' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            <Link to="/team" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Team
            </Link>
            <Link to="/careers" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Careers
            </Link>
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[1000px] bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl p-6">
                  <div className="grid grid-cols-4 gap-6">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Micro SAAS
                      </h3>
                      <div className="space-y-3">
                        {['Productivity', 'Content', 'Marketing', 'Business', 'Finance'].map(category => (
                          <div key={category}>
                            <h4 className="text-xs font-medium text-purple-400 mb-2 uppercase tracking-wide">{category}</h4>
                            <div className="space-y-1">
                              {microSAASServices.filter(service => service.category === category).slice(0, 2).map((service) => (
                                <a key={service.name}
                                  href={service.href}
                                  className="flex items-center justify-between text-xs text-gray-300 hover:text-cyan-400 transition-colors group"
                                  onClick={closeAllMenus}
                                >
                                  <div className="flex items-center space-x-2">
                                    <service.icon className="w-3 h-3" />
                                    <span>{service.name}</span>
                                  </div>
                                  <span className="text-cyan-400 text-xs font-medium">{service.price}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Services
                      </h3>
                      <div className="space-y-2">
                        {aiServices.slice(0, 8).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center justify-between text-sm text-gray-300 hover:text-cyan-400 transition-colors group"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-3 h-3" />
                              <span>{service.name}</span>
                            </div>
                            <span className="text-purple-400 text-xs font-medium">{service.price}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        IT Services
                      </h3>
                      <div className="space-y-2">
                        {itServices.slice(0, 8).map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center justify-between text-sm text-gray-300 hover:text-cyan-400 transition-colors group"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-3 h-3" />
                              <span>{service.name}</span>
                            </div>
                            <span className="text-green-400 text-xs font-medium">{service.price}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Cpu className="w-4 h-4 mr-2" />
                        Specialized
                      </h3>
                      <div className="space-y-2">
                        {specializedServices.slice(0, 8).map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center justify-between text-sm text-gray-300 hover:text-cyan-400 transition-colors group"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-3 h-3" />
                              <span>{service.name}</span>
                            </div>
                            <span className="text-orange-400 text-xs font-medium">{service.price}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <div className="grid grid-cols-3 gap-4">
                      <a
                        href="/services"
                        className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="/specialized-services"
                        className="flex items-center justify-center space-x-2 text-purple-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>Specialized Solutions</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="/pricing"
                        className="flex items-center justify-center space-x-2 text-green-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>View Pricing</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link to="/case-studies" className="text-white hover:text-cyan-400 transition-colors">
              Case Studies
            </Link>
            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors">
              Pricing
            </Link>
            <Link to="/enterprise" className="text-white hover:text-cyan-400 transition-colors">
              Enterprise
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            
            <div className="flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+1 302 464 0950</span>
              </a>
              <a href="/contact"
                className="cyber-button px-4 py-2 text-sm"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-4">
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-4 pl-4 space-y-3">
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">Micro SAAS</h4>
                      <div className="space-y-2">
                        {microSAASServices.slice(0, 4).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center justify-between text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <span>{service.name}</span>
                            <span className="text-cyan-400 text-xs font-medium">{service.price}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">AI Services</h4>
                      <div className="space-y-2">
                        {aiServices.slice(0, 4).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center justify-between text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <span>{service.name}</span>
                            <span className="text-purple-400 text-xs font-medium">{service.price}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <a href="/services"
                      className="block text-cyan-400 hover:text-white transition-colors"
                      onClick={closeAllMenus}
                    >
                      View All Services →
                    </a>
                  </div>
                )}
              </div>

              <Link to="/about" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                About
              </Link>
              <Link to="/team" className="block text-white hover:text-cyan-400 transition-colors font-medium" onClick={closeAllMenus}>
                Team
              </Link>
              <Link to="/careers" className="block text-white hover:text-cyan-400 transition-colors font-medium" onClick={closeAllMenus}>
                Careers
              </Link>
              <Link to="/case-studies" className="block text-white hover:text-cyan-400 transition-colors font-medium" onClick={closeAllMenus}>
                Case Studies
              </Link>
              <Link to="/blog" className="block text-white hover:text-cyan-400 transition-colors font-medium" onClick={closeAllMenus}>
                Blog
              </Link>
              <Link to="/pricing" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Pricing
              </Link>
              <Link to="/contact" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Contact
              </Link>
              
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
                <a href="/contact"
                  className="block cyber-button px-4 py-2 text-center"
                  onClick={closeAllMenus}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;