import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, TrendingUp } from 'lucide-react';

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

<<<<<<< HEAD
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing' },
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'AI-powered project management' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'AI social media automation' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing-automation', description: 'AI email marketing automation' },
        { name: 'AI Customer Support Chatbot', path: '/ai-customer-support-chatbot', description: 'AI-powered support chatbot' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Advanced predictive modeling' },
        { name: 'AI Image Recognition', path: '/ai-image-recognition', description: 'Computer vision solutions' },
        { name: 'AI Voice Processing', path: '/ai-voice-processing', description: 'Speech recognition & synthesis' },
        { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', description: 'Personalized recommendations' },
        { name: 'AI Sentiment Analysis', path: '/ai-sentiment-analysis', description: 'Real-time sentiment analysis' },
        { name: 'AI Research Assistant', path: '/ai-research-assistant', description: 'AI-powered research tools' },
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'AI-powered project management' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'AI social media automation' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing-automation', description: 'AI email marketing automation' },
        { name: 'AI Customer Support', path: '/ai-customer-support-chatbot', description: 'AI customer support chatbot' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration & setup' },
        { name: 'Cloud Migration', path: '/cloud-migration-services', description: 'Professional cloud migration' },
        { name: 'DevOps', path: '/devops', description: 'DevOps automation' },
        { name: 'Database Services', path: '/database', description: 'Database management' },
        { name: 'Network Services', path: '/networking', description: 'Network infrastructure' },
        { name: 'System Administration', path: '/system-admin', description: 'System management' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
        { name: 'Managed IT Services', path: '/managed-it', description: '24/7 IT management' },
        { name: 'IT Training', path: '/it-training', description: 'Staff development' },
        { name: 'IT Project Management', path: '/it-project-management', description: 'IT project delivery' },
        { name: 'Performance Optimization', path: '/performance-optimization', description: 'System performance tuning' },
        { name: 'Backup & Recovery', path: '/backup-recovery', description: 'Data protection services' },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions', description: 'Large-scale IT solutions' },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure-design', description: 'Custom infrastructure design' },
        { name: 'Cloud Migration Services', path: '/cloud-migration-services', description: 'Professional cloud migration' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: '100+ ready-to-use apps' },
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'AI-powered project management' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'AI social media automation' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing-automation', description: 'AI email marketing automation' },
        { name: 'AI Customer Support Chatbot', path: '/ai-customer-support-chatbot', description: 'AI-powered support chatbot' },
        { name: 'Developer Tools', path: '/developer-tools', description: 'AI-powered dev tools' },
        { name: 'Business Apps', path: '/business-apps', description: 'Productivity applications' },
        { name: 'Marketing Tools', path: '/marketing-tools', description: 'Marketing automation' },
        { name: 'Analytics Tools', path: '/analytics-tools', description: 'Business intelligence' },
        { name: 'Communication Tools', path: '/communication-tools', description: 'Team collaboration' },
        { name: 'Productivity Tools', path: '/productivity', description: 'Time management & efficiency' },
        { name: 'HR & Recruitment', path: '/hr-recruitment-tools', description: 'Human resources solutions' },
        { name: 'Customer Support', path: '/customer-support-tools', description: 'Support & service tools' },
        { name: 'Sales & CRM', path: '/sales-crm-tools', description: 'Sales management tools' },
        { name: 'Project Management', path: '/project-management-tools', description: 'Project planning & tracking' },
        { name: 'Content Creation', path: '/content-creation-tools', description: 'Content & media tools' },
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'AI project management' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'AI social media automation' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing-automation', description: 'AI email marketing automation' },
        { name: 'AI Customer Support', path: '/ai-customer-support-chatbot', description: 'AI customer support chatbot' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robots' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping' },
        { name: 'Sustainability Tech', path: '/sustainability-tech', description: 'Green technology solutions' },
        { name: 'Future Technologies', path: '/future-technologies', description: 'Emerging tech solutions' }
      ]
=======
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    if (isServicesOpen) {
      setIsAIOpen(false);
      setIsITOpen(false);
      setIsSpecializedOpen(false);
>>>>>>> origin/main
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
    // Productivity & Management
    { name: 'AI Project Manager Pro', href: '/ai-project-manager', icon: BarChart, category: 'Productivity', price: '$99/mo' },
    { name: 'AI Task Manager Pro', href: '/ai-task-manager', icon: Check, category: 'Productivity', price: '$49/mo' },
    { name: 'AI Workflow Automation Pro', href: '/ai-workflow-automation', icon: Settings, category: 'Productivity', price: '$79/mo' },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar, category: 'Productivity', price: '$39/mo' },
    { name: 'AI Time Tracker Pro', href: '/ai-time-tracker', icon: Clock3, category: 'Productivity', price: '$34/mo' },
    
    // Content & Marketing
    { name: 'AI Content Writer Pro', href: '/ai-content-writer', icon: FileText, category: 'Content', price: '$89/mo' },
    { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager', icon: MessageSquare, category: 'Marketing', price: '$69/mo' },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail, category: 'Marketing', price: '$59/mo' },
    { name: 'AI SEO Optimizer Pro', href: '/ai-seo-optimizer', icon: Search, category: 'Marketing', price: '$79/mo' },
    { name: 'AI Lead Generation Pro', href: '/ai-lead-generation', icon: Target, category: 'Marketing', price: '$99/mo' },
    { name: 'AI Website Builder Pro', href: '/ai-website-builder', icon: Globe, category: 'Marketing', price: '$89/mo' },
    
    // Business & Finance
    { name: 'AI CRM Intelligence Pro', href: '/ai-crm', icon: Users, category: 'Business', price: '$89/mo' },
    { name: 'AI Financial Analyzer Pro', href: '/ai-financial-analyzer', icon: Calculator, category: 'Finance', price: '$79/mo' },
    { name: 'AI Invoice Generator Pro', href: '/ai-invoice-generator', icon: FileText, category: 'Finance', price: '$49/mo' },
    { name: 'AI Expense Tracker Pro', href: '/ai-expense-tracker', icon: CreditCard, category: 'Finance', price: '$29/mo' },
    { name: 'AI Stock Portfolio Manager', href: '/ai-stock-portfolio-manager', icon: TrendingUp, category: 'Finance', price: '$79/mo' },
    
    // Customer Service & Support
    { name: 'AI Customer Support Bot Pro', href: '/ai-customer-support-bot', icon: Bot, category: 'Support', price: '$99/mo' },
    { name: 'AI Chatbot Builder Pro', href: '/ai-chatbot-builder', icon: Bot, category: 'Support', price: '$69/mo' },
    { name: 'AI Email Assistant Pro', href: '/ai-email-assistant', icon: Mail, category: 'Support', price: '$39/mo' },
    
    // Development & Technical
    { name: 'AI Code Review Assistant Pro', href: '/ai-code-generation', icon: Code, category: 'Development', price: '$89/mo' },
    { name: 'AI Mobile App Builder Pro', href: '/ai-mobile-app-development', icon: Smartphone, category: 'Development', price: '$149/mo' },
    { name: 'AI Cybersecurity Shield Pro', href: '/ai-cybersecurity', icon: Shield, category: 'Security', price: '$199/mo' },
    { name: 'AI Document Processor Pro', href: '/ai-document-processing', icon: FileText, category: 'Development', price: '$79/mo' },
    { name: 'AI Password Manager Pro', href: '/ai-password-manager', icon: Lock, category: 'Security', price: '$19/mo' },
    
    // Analytics & Data
    { name: 'AI Data Analytics Pro', href: '/ai-data-analytics', icon: BarChart3, category: 'Analytics', price: '$99/mo' },
    { name: 'AI Data Visualization Pro', href: '/ai-data-visualization', icon: BarChart, category: 'Analytics', price: '$69/mo' },
    
    // Creative & Media
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video, category: 'Creative', price: '$149/mo' },
    { name: 'AI Voice Cloning Studio Pro', href: '/ai-voice-cloning', icon: Music, category: 'Creative', price: '$79/mo' },
    { name: 'AI Music Composer Pro', href: '/ai-music-composition', icon: Music, category: 'Creative', price: '$59/mo' },
    { name: 'AI Fashion Design Studio Pro', href: '/ai-fashion-design', icon: Palette, category: 'Creative', price: '$89/mo' },
    { name: 'AI 3D Generation Studio Pro', href: '/ai-3d-generation', icon: Camera, category: 'Creative', price: '$199/mo' },
    { name: 'AI Logo Designer Pro', href: '/ai-logo-designer', icon: Palette, category: 'Creative', price: '$59/mo' },
    
    // Health & Wellness
    { name: 'AI Healthcare Assistant Pro', href: '/ai-healthcare', icon: Stethoscope, category: 'Health', price: '$49/mo' },
    { name: 'AI Fitness Coach Pro', href: '/ai-fitness-coach', icon: Heart, category: 'Health', price: '$39/mo' },
    
    // Sales & Business
    { name: 'AI Sales Automation Pro', href: '/ai-sales-automation', icon: Target, category: 'Sales', price: '$149/mo' }
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain, price: '$1,500/mo' },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: BarChart, price: '$1,300/mo' },
    { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain', icon: Globe, price: '$1,800/mo' },
    { name: 'AI Fraud Detection System', href: '/ai-fraud-detection', icon: Shield, price: '$2,200/mo' },
    { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance', icon: Settings, price: '$1,600/mo' },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Stethoscope, price: '$2,500/mo' },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: CreditCard, price: '$1,900/mo' },
    { name: 'AI Natural Language Processing', href: '/ai-nlp', icon: MessageSquare, price: '$1,100/mo' },
    { name: 'AI Computer Vision', href: '/computer-vision', icon: Eye, price: '$1,400/mo' },
    { name: 'AI Customer Service Automation', href: '/ai-customer-service', icon: MessageSquare, price: '$1,200/mo' },
    { name: 'AI Quality Assurance', href: '/ai-quality-assurance', icon: Shield, price: '$1,400/mo' },
    { name: 'AI Human Resources', href: '/ai-hr', icon: Users, price: '$1,200/mo' },
    { name: 'AI Legal Assistant', href: '/ai-legal', icon: FileText, price: '$1,500/mo' },
    { name: 'AI Real Estate Analytics', href: '/ai-real-estate', icon: Home, price: '$1,300/mo' },
    { name: 'AI Manufacturing Intelligence', href: '/ai-manufacturing', icon: Factory, price: '$1,800/mo' },
    { name: 'AI Transportation & Logistics', href: '/ai-transportation', icon: Truck, price: '$1,600/mo' },
    { name: 'AI Education Platform', href: '/ai-education', icon: GraduationCap, price: '$1,200/mo' },
    { name: 'AI Energy Management', href: '/ai-energy', icon: Zap, price: '$1,500/mo' },
    { name: 'AI Insurance Analytics', href: '/ai-insurance', icon: Shield, price: '$1,400/mo' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, price: '$1,300/mo' },
    { name: 'Quantum AI Computing', href: '/quantum-ai', icon: Cpu, price: '$3,000/mo' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, price: '$1,800/mo' },
    { name: 'AI Fintech Solutions', href: '/ai-fintech', icon: CreditCard, price: '$1,600/mo' },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone, price: '$1,400/mo' },
    { name: 'AI CRM Solutions', href: '/ai-crm', icon: Users, price: '$1,200/mo' },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail, price: '$800/mo' },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar, price: '$900/mo' }
  ];

  const itServices = [
    { name: 'Cloud Migration Services', href: '/cloud-migration', icon: Cloud, price: '$2,000/mo' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity', icon: Shield, price: '$1,800/mo' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, price: '$1,500/mo' },
    { name: 'Database Services', href: '/database-services', icon: Database, price: '$1,200/mo' },
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building, price: '$3,000/mo' },
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud, price: '$1,400/mo' },
    { name: 'Enterprise Security Solutions', href: '/enterprise-security', icon: Shield, price: '$2,200/mo' },
    { name: 'IT Infrastructure Management', href: '/it-infrastructure', icon: Settings, price: '$1,600/mo' },
    { name: 'Data Center Solutions', href: '/data-center', icon: Database, price: '$1,800/mo' },
    { name: 'Network Security & Firewall', href: '/network-security', icon: Lock, price: '$1,500/mo' },
    { name: 'IT Consulting & Strategy', href: '/it-consulting', icon: Briefcase, price: '$2,500/mo' },
    { name: 'Managed IT Services', href: '/managed-it', icon: Users, price: '$1,200/mo' },
    { name: 'Cloud Security & Compliance', href: '/cloud-security', icon: Shield, price: '$1,600/mo' },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: BarChart, price: '$1,000/mo' },
    { name: 'Backup & Disaster Recovery', href: '/backup-recovery', icon: Database, price: '$1,300/mo' },
    { name: 'IT Training & Support', href: '/it-training', icon: GraduationCap, price: '$800/mo' },
    { name: 'IT Performance Optimization', href: '/it-performance', icon: Zap, price: '$1,400/mo' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe, price: '$1,600/mo' },
    { name: 'IT Support & Helpdesk', href: '/it-support', icon: Users, price: '$1,000/mo' },
    { name: 'Compliance & Governance', href: '/compliance', icon: FileText, price: '$1,500/mo' },
    { name: 'Developer Tools', href: '/developer-tools', icon: Code, price: '$1,200/mo' },
    { name: 'Marketing Tools', href: '/marketing-tools', icon: Target, price: '$1,000/mo' },
    { name: 'Productivity Solutions', href: '/productivity', icon: BarChart, price: '$1,100/mo' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing Solutions', href: '/quantum-computing', icon: Cpu, price: '$5,000/mo' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings, price: '$4,000/mo' },
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock, price: '$2,500/mo' },
    { name: 'IoT & Edge Computing', href: '/iot-edge', icon: Globe, price: '$1,800/mo' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, price: '$1,500/mo' },
    { name: 'Robotics Solutions', href: '/robotics', icon: Settings, price: '$3,500/mo' },
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building, price: '$3,000/mo' },
    { name: 'Analytics Tools', href: '/analytics-tools', icon: BarChart3, price: '$1,200/mo' },
    { name: 'Business Apps', href: '/business-apps', icon: Briefcase, price: '$1,400/mo' },
    { name: 'Smart Analytics', href: '/smart-analytics', icon: TrendingUp, price: '$1,300/mo' },
    { name: 'Advanced Robotics Systems', href: '/advanced-robotics-systems', icon: Settings, price: '$4,500/mo' },
    { name: 'Digital Twin Development', href: '/digital-twin-development', icon: Cpu, price: '$3,200/mo' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </a>

<<<<<<< HEAD
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">              
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
=======
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
>>>>>>> origin/main
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
<<<<<<< HEAD
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[900px] xl:w-[1000px] bg-gray-900 rounded-xl shadow-2xl border border-cyan-500 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
=======
              
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
>>>>>>> origin/main
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

            <a href="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="/blog" className="text-white hover:text-cyan-400 transition-colors">
              Blog
            </a>
            <a href="/case-studies" className="text-white hover:text-cyan-400 transition-colors">
              Case Studies
            </a>
            <a href="/pricing" className="text-white hover:text-cyan-400 transition-colors">
              Pricing
            </a>
            <a href="/enterprise" className="text-white hover:text-cyan-400 transition-colors">
              Enterprise
            </a>
            <a href="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </a>
            
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

<<<<<<< HEAD
        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2 max-h-[80vh] overflow-y-auto">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* Mobile Services */}
=======
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-4">
>>>>>>> origin/main
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

              <a href="/about" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                About
              </a>
              <a href="/blog" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Blog
              </a>
              <a href="/case-studies" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Case Studies
              </a>
              <a href="/pricing" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Pricing
              </a>
              <a href="/contact" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Contact
              </a>
              
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