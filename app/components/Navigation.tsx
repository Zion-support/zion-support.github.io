import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, TrendingUp, Mic, DollarSign, Box, Star } from 'lucide-react';

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

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'navigation_phone_number'
      });
    }
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
    // Productivity & Management
    { name: 'AI Productivity Suite Pro', href: '/ai-productivity-suite-pro', icon: BarChart, category: 'Productivity', price: '$149/mo' },
    { name: 'AI Content Marketing Platform', href: '/ai-content-marketing-platform', icon: MessageSquare, category: 'Marketing', price: '$199/mo' },
    { name: 'AI Customer Experience Platform', href: '/ai-customer-experience-platform', icon: Bot, category: 'Customer Service', price: '$179/mo' },
    { name: 'AI Data Analytics Platform', href: '/ai-data-analytics-platform', icon: PieChart, category: 'Analytics', price: '$229/mo' },
    { name: 'AI E-commerce Optimization Suite', href: '/ai-ecommerce-optimization-suite', icon: ShoppingCart, category: 'E-commerce', price: '$249/mo' },
    { name: 'AI HR Management Platform', href: '/ai-hr-management-platform', icon: Users, category: 'Human Resources', price: '$199/mo' },
    { name: 'AI Financial Management Suite', href: '/ai-financial-management-suite', icon: DollarSign, category: 'Finance', price: '$179/mo' },
    { name: 'AI Healthcare Management Platform', href: '/ai-healthcare-management-platform', icon: Stethoscope, category: 'Healthcare', price: '$299/mo' },
    { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain-optimization', icon: Truck, category: 'Supply Chain', price: '$279/mo' },
    { name: 'AI Legal Document Platform', href: '/ai-legal-document-platform', icon: Scale, category: 'Legal', price: '$349/mo' },
    { name: 'AI Real Estate Platform', href: '/ai-real-estate-platform', icon: Home, category: 'Real Estate', price: '$199/mo' },
    { name: 'AI Education Platform', href: '/ai-education-platform', icon: GraduationCap, category: 'Education', price: '$149/mo' },
    
    // Content & Marketing
    { name: 'AI Content Writer Pro', href: '/ai-content-writer', icon: FileText, category: 'Content', price: '$89/mo' },
    { name: 'AI Blog Generator Pro', href: '/ai-blog-generator', icon: FileText, category: 'Content', price: '$69/mo' },
    { name: 'AI Copywriting Assistant Pro', href: '/ai-copywriting-assistant', icon: Briefcase, category: 'Content', price: '$79/mo' },
    { name: 'AI Technical Writer Pro', href: '/ai-technical-writer', icon: Settings, category: 'Content', price: '$89/mo' },
    { name: 'AI Content Translator Pro', href: '/ai-content-translator', icon: Globe, category: 'Content', price: '$59/mo' },
    { name: 'AI Video Creator Pro', href: '/ai-video-creator', icon: Video, category: 'Content', price: '$149/mo' },
    { name: 'AI Podcast Studio Pro', href: '/ai-podcast-studio', icon: Mic, category: 'Content', price: '$79/mo' },
    { name: 'AI Graphic Design Studio', href: '/ai-graphic-design', icon: Palette, category: 'Content', price: '$69/mo' },
    { name: 'AI Website Builder Pro', href: '/ai-website-builder', icon: Globe, category: 'Content', price: '$89/mo' },
    { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager', icon: MessageSquare, category: 'Marketing', price: '$69/mo' },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail, category: 'Marketing', price: '$59/mo' },
    { name: 'AI SEO Optimizer Pro', href: '/ai-seo-optimizer', icon: Search, category: 'Marketing', price: '$79/mo' },
    { name: 'AI Lead Generation Pro', href: '/ai-lead-generation', icon: Target, category: 'Marketing', price: '$99/mo' },
    { name: 'AI Ad Campaign Manager Pro', href: '/ai-ad-campaign-manager', icon: BarChart, category: 'Marketing', price: '$149/mo' },
    { name: 'AI Influencer Marketing Pro', href: '/ai-influencer-marketing', icon: Users, category: 'Marketing', price: '$89/mo' },
    { name: 'AI Content Calendar Pro', href: '/ai-content-calendar', icon: Calendar, category: 'Marketing', price: '$49/mo' },
    
    // Business & Finance
    { name: 'AI CRM Intelligence Pro', href: '/ai-crm', icon: Users, category: 'Business', price: '$89/mo' },
    { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence', icon: BarChart, category: 'Business', price: '$99/mo' },
    { name: 'AI Sales Automation Pro', href: '/ai-sales-automation', icon: Briefcase, category: 'Business', price: '$149/mo' },
    { name: 'AI Customer Analytics Pro', href: '/ai-customer-analytics', icon: Users, category: 'Business', price: '$79/mo' },
    { name: 'AI Market Research Pro', href: '/ai-market-research', icon: Search, category: 'Business', price: '$89/mo' },
    { name: 'AI Financial Analyzer Pro', href: '/ai-financial-analyzer', icon: Calculator, category: 'Finance', price: '$79/mo' },
    { name: 'AI Invoice Generator Pro', href: '/ai-invoice-generator', icon: FileText, category: 'Finance', price: '$49/mo' },
    { name: 'AI Expense Tracker Pro', href: '/ai-expense-tracker', icon: CreditCard, category: 'Finance', price: '$29/mo' },
    { name: 'AI Stock Portfolio Manager', href: '/ai-stock-portfolio-manager', icon: TrendingUp, category: 'Finance', price: '$79/mo' },
    { name: 'AI Tax Optimizer Pro', href: '/ai-tax-optimizer', icon: Calculator, category: 'Finance', price: '$99/mo' },
    { name: 'AI Budget Planner Pro', href: '/ai-budget-planner', icon: FileText, category: 'Finance', price: '$39/mo' },
    { name: 'AI Credit Score Optimizer', href: '/ai-credit-optimizer', icon: BarChart, category: 'Finance', price: '$49/mo' },
    { name: 'AI Investment Advisor Pro', href: '/ai-investment-advisor', icon: DollarSign, category: 'Finance', price: '$89/mo' },
    
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
    { name: 'AI Fitness Coach Pro', href: '/ai-fitness-coach', icon: Heart, category: 'Health', price: '$39/mo' }
  ];

  const aiServices = [
    { name: 'Quantum AI Computing Platform', href: '/quantum-ai-computing-platform', icon: Cpu, price: '$2,999/mo' },
    { name: 'Neuromorphic AI Processing', href: '/neuromorphic-ai-processing', icon: Brain, price: '$1,999/mo' },
    { name: 'Federated Learning Platform', href: '/federated-learning-platform', icon: Lock, price: '$1,499/mo' },
    { name: 'Edge AI Inference Platform', href: '/edge-ai-inference-platform', icon: Smartphone, price: '$799/mo' },
    { name: 'Multi-modal AI Platform', href: '/multimodal-ai-platform', icon: Eye, price: '$1,799/mo' },
    { name: 'Autonomous AI Agents Platform', href: '/autonomous-ai-agents-platform', icon: Bot, price: '$2,499/mo' },
    { name: 'Explainable AI Platform', href: '/explainable-ai-platform', icon: Search, price: '$1,299/mo' },
    { name: 'AI Security & Threat Detection', href: '/ai-security-threat-detection', icon: Shield, price: '$1,599/mo' },
    { name: 'AI Climate & Sustainability Platform', href: '/ai-climate-sustainability-platform', icon: Globe, price: '$1,899/mo' },
    { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery-platform', icon: Stethoscope, price: '$3,999/mo' },
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain, price: '$1,500/mo' },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageSquare, price: '$1,200/mo' },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye, price: '$1,800/mo' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, price: '$1,400/mo' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, price: '$1,100/mo' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText, price: '$1,000/mo' },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: MessageSquare, price: '$1,200/mo' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, price: '$1,900/mo' },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: BarChart, price: '$1,700/mo' },
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: BarChart, price: '$99/mo' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare, price: '$79/mo' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail, price: '$99/mo' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: TrendingUp, price: '$199/mo' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings, price: '$179/mo' },
    { name: 'AI Writing Assistant', href: '/ai-writing-assistant', icon: FileText, price: '$79/mo' },
    { name: 'AI Video Generation', href: '/ai-video-generation', icon: Video, price: '$199/mo' },
    { name: 'AI Voice Cloning', href: '/ai-voice-cloning', icon: Mic, price: '$129/mo' },
    { name: 'AI Music Composition', href: '/ai-music-composition', icon: Music, price: '$119/mo' },
    { name: 'AI Fashion Design', href: '/ai-fashion-design', icon: Palette, price: '$159/mo' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, price: '$249/mo' },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Heart, price: '$89/mo' },
    { name: 'AI Financial Analyzer', href: '/ai-financial-analyzer', icon: DollarSign, price: '$299/mo' },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText, price: '$1,200/mo' },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, price: '$149/mo' },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: Shield, price: '$1,900/mo' },
    { name: 'AI Code Generation', href: '/ai-code-generation', icon: Code, price: '$89/mo' },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone, price: '$1,500/mo' },
    { name: 'AI Scheduler', href: '/ai-scheduler', icon: Calendar, price: '$39/mo' },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot, price: '$149/mo' },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search, price: '$79/mo' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart, price: '$139/mo' },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: TrendingUp, price: '$1,700/mo' },
    { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: Target, price: '$1,400/mo' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Bot, price: '$149/mo' },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail, price: '$49/mo' },
    { name: 'AI Ecommerce Solutions', href: '/ai-ecommerce-solutions', icon: ShoppingCart, price: '$249/mo' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: DollarSign, price: '$1,500/mo' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Stethoscope, price: '$299/mo' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target, price: '$199/mo' },
    { name: 'AI HR Assistant', href: '/ai-hr-assistant', icon: Users, price: '$189/mo' },
    { name: 'AI Legal Assistant', href: '/ai-legal-assistant', icon: Scale, price: '$399/mo' },
    { name: 'AI Real Estate', href: '/ai-real-estate', icon: Home, price: '$199/mo' },
    { name: 'AI Education', href: '/ai-education', icon: GraduationCap, price: '$149/mo' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure & Migration', href: '/cloud-infrastructure-migration', icon: Cloud, price: '$1,999/mo' },
    { name: 'Cybersecurity & Compliance', href: '/cybersecurity-compliance', icon: Shield, price: '$2,499/mo' },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings, price: '$1,799/mo' },
    { name: 'Data Management & Analytics', href: '/data-management-analytics', icon: Database, price: '$2,199/mo' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe, price: '$1,599/mo' },
    { name: 'Mobile App Development', href: '/mobile-app-development', icon: Smartphone, price: '$2,999/mo' },
    { name: 'Web Development', href: '/web-development', icon: Code, price: '$1,499/mo' },
    { name: 'IT Support & Helpdesk', href: '/it-support-helpdesk', icon: Users, price: '$899/mo' },
    { name: 'Database Management', href: '/database-management', icon: Database, price: '$1,799/mo' },
    { name: 'Blockchain Solutions', href: '/blockchain-solutions', icon: Lock, price: '$3,499/mo' },
    { name: 'IoT Solutions', href: '/iot-solutions', icon: Globe, price: '$2,299/mo' },
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
    { name: 'Metaverse Development', href: '/metaverse-development', icon: Box, price: '$3,500/mo' },
    { name: 'Advanced Robotics Systems', href: '/advanced-robotics-systems', icon: Settings, price: '$4,500/mo' },
    { name: 'Digital Twin Development', href: '/digital-twin-development', icon: Cpu, price: '$3,200/mo' },
    { name: 'Climate Technology Solutions', href: '/climate-technology-solutions', icon: Globe, price: '$2,800/mo' },
    { name: 'Space Technology Services', href: '/space-technology-services', icon: Globe, price: '$5,500/mo' },
    { name: 'Biotechnology IT Solutions', href: '/biotechnology-it-solutions', icon: Stethoscope, price: '$4,200/mo' },
    { name: 'Smart City Solutions', href: '/smart-city-solutions', icon: Building, price: '$3,800/mo' },
    { name: 'FinTech Solutions', href: '/fintech-solutions', icon: CreditCard, price: '$2,200/mo' },
    { name: 'HealthTech Infrastructure', href: '/healthtech-infrastructure', icon: Stethoscope, price: '$2,500/mo' },
    { name: 'EdTech Solutions', href: '/edtech-solutions', icon: GraduationCap, price: '$1,800/mo' },
    { name: 'RetailTech Solutions', href: '/retailtech-solutions', icon: ShoppingCart, price: '$2,000/mo' },
    { name: 'Advanced Cybersecurity', href: '/advanced-cybersecurity', icon: Shield, price: '$3,000/mo' },
    { name: 'Quantum AI Computing', href: '/quantum-ai-computing', icon: Cpu, price: '$6,000/mo' },
    { name: 'Neural Interface Technology', href: '/neural-interface-technology', icon: Brain, price: '$4,800/mo' },
    { name: 'Advanced Materials Science', href: '/advanced-materials-science', icon: Settings, price: '$3,500/mo' },
    { name: 'Augmented Reality Solutions', href: '/augmented-reality-solutions', icon: Eye, price: '$2,800/mo' },
    { name: 'Advanced Analytics Platform', href: '/advanced-analytics-platform', icon: BarChart, price: '$2,200/mo' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </a>
            <a href="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </a>
            
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium"
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

            <a href="/pricing" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Pricing
            </a>
            <a href="/case-studies" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Case Studies
            </a>
            <a href="/blog" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Blog
            </a>
            <a href="/enterprise" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Enterprise
            </a>
            <a href="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
            </a>
            
            <div className="flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors font-medium"
                onClick={handlePhoneClick}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+1 302 464 0950</span>
              </a>
              <a href="/contact"
                className="cyber-button px-6 py-2 text-sm font-semibold hover:scale-105 transition-all duration-300"
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

              <a href="/pricing" className="block text-white hover:text-cyan-400 transition-colors font-medium" onClick={closeAllMenus}>
                Pricing
              </a>
              <a href="/case-studies" className="block text-white hover:text-cyan-400 transition-colors font-medium" onClick={closeAllMenus}>
                Case Studies
              </a>
              <a href="/blog" className="block text-white hover:text-cyan-400 transition-colors font-medium" onClick={closeAllMenus}>
                Blog
              </a>
              <a href="/enterprise" className="block text-white hover:text-cyan-400 transition-colors font-medium" onClick={closeAllMenus}>
                Enterprise
              </a>
              <a href="/contact" className="block text-white hover:text-cyan-400 transition-colors font-medium" onClick={closeAllMenus}>
                Contact
              </a>
              
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors mb-4 font-medium"
                  onClick={handlePhoneClick}
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
                <a href="/contact"
                  className="block cyber-button px-6 py-3 text-center font-semibold hover:scale-105 transition-all duration-300"
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
