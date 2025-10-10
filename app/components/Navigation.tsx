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
    { name: 'AI Project Manager Pro', href: '/ai-project-manager', icon: BarChart, category: 'Productivity', price: '$99/mo' },
    { name: 'AI Task Manager Pro', href: '/ai-task-manager', icon: Check, category: 'Productivity', price: '$49/mo' },
    { name: 'AI Workflow Automation Pro', href: '/ai-workflow-automation', icon: Settings, category: 'Productivity', price: '$79/mo' },
    { name: 'AI Meeting Intelligence Pro', href: '/ai-meeting-intelligence', icon: BarChart, category: 'Productivity', price: '$89/mo' },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar, category: 'Productivity', price: '$39/mo' },
    { name: 'AI Time Tracker Pro', href: '/ai-time-tracker', icon: Clock3, category: 'Productivity', price: '$34/mo' },
    { name: 'AI Resource Planner Pro', href: '/ai-resource-planner', icon: BarChart, category: 'Productivity', price: '$89/mo' },
    { name: 'AI Document Generator Pro', href: '/ai-document-generator', icon: FileText, category: 'Productivity', price: '$69/mo' },
    
    // Content & Marketing
    { name: 'AI Content Writer Pro', href: '/ai-content-writer', icon: FileText, category: 'Content', price: '$89/mo' },
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video, category: 'Content', price: '$149/mo' },
    { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager', icon: MessageSquare, category: 'Marketing', price: '$69/mo' },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail, category: 'Marketing', price: '$59/mo' },
    { name: 'AI SEO Optimizer Pro', href: '/ai-seo-optimizer', icon: Search, category: 'Marketing', price: '$79/mo' },
    { name: 'AI Lead Generation Pro', href: '/ai-lead-generation', icon: Target, category: 'Marketing', price: '$99/mo' },
    { name: 'AI Website Builder Pro', href: '/ai-website-builder', icon: Globe, category: 'Marketing', price: '$89/mo' },
    { name: 'AI Translation Studio Pro', href: '/ai-translation-studio', icon: Globe, category: 'Content', price: '$69/mo' },
    
    // Business & Finance
    { name: 'AI CRM Intelligence Pro', href: '/ai-crm', icon: Users, category: 'Business', price: '$89/mo' },
    { name: 'AI Financial Analyzer Pro', href: '/ai-financial-analyzer', icon: Calculator, category: 'Finance', price: '$79/mo' },
    { name: 'AI Invoice Generator Pro', href: '/ai-invoice-generator', icon: FileText, category: 'Finance', price: '$49/mo' },
    { name: 'AI Expense Tracker Pro', href: '/ai-expense-tracker', icon: CreditCard, category: 'Finance', price: '$29/mo' },
    { name: 'AI Stock Portfolio Manager', href: '/ai-stock-portfolio-manager', icon: TrendingUp, category: 'Finance', price: '$79/mo' },
    { name: 'AI Customer Insights Pro', href: '/ai-customer-insights', icon: Users, category: 'Business', price: '$99/mo' },
    { name: 'AI Vendor Manager Pro', href: '/ai-vendor-manager', icon: Users, category: 'Business', price: '$99/mo' },
    
    // Customer Service & Support
    { name: 'AI Customer Support Bot Pro', href: '/ai-customer-support-bot', icon: Bot, category: 'Support', price: '$99/mo' },
    { name: 'AI Chatbot Builder Pro', href: '/ai-chatbot-builder', icon: Bot, category: 'Support', price: '$69/mo' },
    { name: 'AI Email Assistant Pro', href: '/ai-email-assistant', icon: Mail, category: 'Support', price: '$39/mo' },
    { name: 'AI Email Security Pro', href: '/ai-email-security', icon: Shield, category: 'Support', price: '$49/mo' },
    
    // Development & Technical
    { name: 'AI Code Review Assistant Pro', href: '/ai-code-generation', icon: Code, category: 'Development', price: '$89/mo' },
    { name: 'AI Mobile App Builder Pro', href: '/ai-mobile-app-development', icon: Smartphone, category: 'Development', price: '$149/mo' },
    { name: 'AI Cybersecurity Shield Pro', href: '/ai-cybersecurity', icon: Shield, category: 'Security', price: '$199/mo' },
    { name: 'AI Document Processor Pro', href: '/ai-document-processing', icon: FileText, category: 'Development', price: '$79/mo' },
    { name: 'AI Password Manager Pro', href: '/ai-password-manager', icon: Lock, category: 'Security', price: '$19/mo' },
    { name: 'AI Code Quality Pro', href: '/ai-code-quality', icon: Code, category: 'Development', price: '$79/mo' },
    { name: 'AI Test Automation Pro', href: '/ai-test-automation', icon: Code, category: 'Development', price: '$89/mo' },
    { name: 'AI API Manager Pro', href: '/ai-api-manager', icon: Globe, category: 'Development', price: '$99/mo' },
    
    // Analytics & Data
    { name: 'AI Data Analytics Pro', href: '/ai-data-analytics', icon: BarChart3, category: 'Analytics', price: '$99/mo' },
    { name: 'AI Data Visualization Pro', href: '/ai-data-visualization', icon: BarChart, category: 'Analytics', price: '$69/mo' },
    { name: 'AI Performance Monitor Pro', href: '/ai-performance-monitor', icon: BarChart, category: 'Analytics', price: '$89/mo' },
    { name: 'AI Feedback Analyzer Pro', href: '/ai-feedback-analyzer', icon: MessageSquare, category: 'Analytics', price: '$59/mo' },
    
    // Creative & Media
    { name: 'AI Voice Cloning Studio Pro', href: '/ai-voice-cloning', icon: Music, category: 'Creative', price: '$79/mo' },
    { name: 'AI Music Composer Pro', href: '/ai-music-composition', icon: Music, category: 'Creative', price: '$59/mo' },
    { name: 'AI Fashion Design Studio Pro', href: '/ai-fashion-design', icon: Palette, category: 'Creative', price: '$89/mo' },
    { name: 'AI 3D Generation Studio Pro', href: '/ai-3d-generation', icon: Camera, category: 'Creative', price: '$199/mo' },
    { name: 'AI Logo Designer Pro', href: '/ai-logo-designer', icon: Palette, category: 'Creative', price: '$59/mo' },
    
    // Health & Wellness
    { name: 'AI Healthcare Assistant Pro', href: '/ai-healthcare', icon: Stethoscope, category: 'Health', price: '$49/mo' },
    { name: 'AI Fitness Coach Pro', href: '/ai-fitness-coach', icon: Heart, category: 'Health', price: '$39/mo' },
    
    // Sales & Business
    { name: 'AI Sales Automation Pro', href: '/ai-sales-automation', icon: Target, category: 'Sales', price: '$149/mo' },
    
    // Legal & Compliance
    { name: 'AI Contract Analyzer Pro', href: '/ai-contract-analyzer', icon: FileText, category: 'Legal', price: '$149/mo' },
    { name: 'AI Compliance Manager Pro', href: '/ai-compliance-manager', icon: FileText, category: 'Legal', price: '$149/mo' },
    
    // E-commerce & Inventory
    { name: 'AI Inventory Optimizer Pro', href: '/ai-inventory-optimizer', icon: BarChart, category: 'E-commerce', price: '$79/mo' },
    
    // Data Management
    { name: 'AI Backup Manager Pro', href: '/ai-backup-manager', icon: Database, category: 'Data Management', price: '$39/mo' },
    { name: 'AI Database Optimizer Pro', href: '/ai-database-optimizer', icon: Database, category: 'Data Management', price: '$119/mo' },
    
    // Cloud & Infrastructure
    { name: 'AI Cloud Cost Optimizer Pro', href: '/ai-cloud-cost-optimizer', icon: Cloud, category: 'Cloud', price: '$79/mo' },
    
    // Knowledge Management
    { name: 'AI Knowledge Base Pro', href: '/ai-knowledge-base', icon: FileText, category: 'Knowledge Management', price: '$69/mo' },
    
    // Operations
    { name: 'AI Incident Response Pro', href: '/ai-incident-response', icon: Settings, category: 'Operations', price: '$199/mo' },
    { name: 'AI Workflow Designer Pro', href: '/ai-workflow-designer', icon: Settings, category: 'Operations', price: '$89/mo' },
    
    // Training & Education
    { name: 'AI Training Platform Pro', href: '/ai-training-platform', icon: GraduationCap, category: 'Education', price: '$79/mo' }
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain, price: '$1,500/mo' },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: BarChart, price: '$1,300/mo' },
    { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery', icon: Stethoscope, price: '$5,000/mo' },
    { name: 'AI Climate Intelligence', href: '/ai-climate-intelligence', icon: Globe, price: '$3,500/mo' },
    { name: 'AI Space Technology Solutions', href: '/ai-space-technology', icon: Globe, price: '$4,500/mo' },
    { name: 'AI Metaverse Development', href: '/ai-metaverse-development', icon: Cpu, price: '$3,000/mo' },
    { name: 'AI Biotechnology Solutions', href: '/ai-biotechnology', icon: Stethoscope, price: '$4,000/mo' },
    { name: 'AI Smart City Solutions', href: '/ai-smart-city', icon: Building, price: '$2,500/mo' },
    { name: 'AI Edge Computing Solutions', href: '/ai-edge-computing', icon: Cpu, price: '$1,800/mo' },
    { name: 'AI Digital Twin Platform', href: '/ai-digital-twin', icon: Cpu, price: '$2,200/mo' },
    { name: 'AI Advanced Robotics', href: '/ai-advanced-robotics', icon: Settings, price: '$3,500/mo' },
    { name: 'AI Quantum Machine Learning', href: '/ai-quantum-ml', icon: Cpu, price: '$6,000/mo' },
    { name: 'AI Autonomous Vehicle Systems', href: '/ai-autonomous-vehicles', icon: Car, price: '$4,500/mo' },
    { name: 'AI Cybersecurity Intelligence', href: '/ai-cybersecurity-intelligence', icon: Shield, price: '$2,800/mo' },
    { name: 'AI Financial Trading Platform', href: '/ai-financial-trading', icon: CreditCard, price: '$3,200/mo' },
    { name: 'AI Content Moderation Pro', href: '/ai-content-moderation', icon: Shield, price: '$1,500/mo' },
    { name: 'AI Supply Chain Intelligence', href: '/ai-supply-chain-intelligence', icon: Truck, price: '$2,200/mo' },
    { name: 'AI Energy Management System', href: '/ai-energy-management', icon: Zap, price: '$1,800/mo' },
    { name: 'AI Retail Intelligence', href: '/ai-retail-intelligence', icon: ShoppingCart, price: '$2,000/mo' },
    { name: 'AI Agriculture Solutions', href: '/ai-agriculture', icon: Home, price: '$1,600/mo' },
    { name: 'AI Construction Management', href: '/ai-construction', icon: Building, price: '$2,500/mo' },
    { name: 'AI Logistics Optimization', href: '/ai-logistics', icon: Truck, price: '$1,900/mo' },
    { name: 'AI Insurance Analytics', href: '/ai-insurance', icon: Shield, price: '$2,300/mo' },
    { name: 'AI Real Estate Intelligence', href: '/ai-real-estate', icon: Home, price: '$1,700/mo' },
    { name: 'AI Entertainment Production', href: '/ai-entertainment', icon: Video, price: '$2,800/mo' },
    { name: 'AI Sports Analytics', href: '/ai-sports', icon: Activity, price: '$1,500/mo' },
    { name: 'AI Gaming Intelligence', href: '/ai-gaming', icon: Gamepad2, price: '$2,000/mo' },
    { name: 'AI Travel Optimization', href: '/ai-travel', icon: Plane, price: '$1,200/mo' },
    { name: 'AI Hospitality Solutions', href: '/ai-hospitality', icon: Home, price: '$1,800/mo' },
    { name: 'AI Government Services', href: '/ai-government', icon: Building, price: '$3,500/mo' },
    { name: 'AI Non-Profit Solutions', href: '/ai-nonprofit', icon: Heart, price: '$800/mo' }
  ];

  const itServices = [
    { name: 'AI-Powered IT Operations', href: '/ai-it-operations', icon: Settings, price: '$2,500/mo' },
    { name: 'Quantum Computing Infrastructure', href: '/quantum-infrastructure', icon: Cpu, price: '$8,000/mo' },
    { name: 'Edge Computing Solutions', href: '/edge-computing', icon: Globe, price: '$1,800/mo' },
    { name: '5G Network Infrastructure', href: '/5g-infrastructure', icon: Globe, price: '$3,500/mo' },
    { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure', icon: Lock, price: '$2,200/mo' },
    { name: 'IoT Platform Solutions', href: '/iot-platform', icon: Globe, price: '$1,500/mo' },
    { name: 'Microservices Architecture', href: '/microservices', icon: Settings, price: '$2,000/mo' },
    { name: 'Serverless Computing', href: '/serverless', icon: Cloud, price: '$1,200/mo' },
    { name: 'Data Lake Solutions', href: '/data-lake', icon: Database, price: '$1,800/mo' },
    { name: 'API Gateway Solutions', href: '/api-gateway', icon: Globe, price: '$1,000/mo' },
    { name: 'Content Delivery Network', href: '/cdn', icon: Globe, price: '$800/mo' },
    { name: 'Identity and Access Management', href: '/iam', icon: Lock, price: '$1,500/mo' },
    { name: 'Disaster Recovery Solutions', href: '/disaster-recovery', icon: Database, price: '$1,200/mo' },
    { name: 'Network Monitoring Solutions', href: '/network-monitoring', icon: Globe, price: '$1,000/mo' },
    { name: 'Application Performance Monitoring', href: '/apm', icon: BarChart, price: '$1,300/mo' },
    { name: 'Log Management Solutions', href: '/log-management', icon: FileText, price: '$900/mo' },
    { name: 'Configuration Management', href: '/config-management', icon: Settings, price: '$1,100/mo' },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: BarChart, price: '$800/mo' },
    { name: 'IT Service Management', href: '/itsm', icon: Users, price: '$1,400/mo' },
    { name: 'IT Governance Solutions', href: '/it-governance', icon: Shield, price: '$1,600/mo' },
    { name: 'IT Training and Development', href: '/it-training', icon: GraduationCap, price: '$1,000/mo' },
    { name: 'IT Consulting Services', href: '/it-consulting', icon: Briefcase, price: '$2,500/mo' },
    { name: 'IT Project Management', href: '/it-project-management', icon: BarChart, price: '$1,800/mo' },
    { name: 'IT Security Operations', href: '/it-security-ops', icon: Shield, price: '$2,200/mo' },
    { name: 'IT Compliance Solutions', href: '/it-compliance', icon: FileText, price: '$1,700/mo' },
    { name: 'IT Innovation Lab', href: '/it-innovation-lab', icon: Cpu, price: '$3,000/mo' }
  ];

  const specializedServices = [
    { name: 'AI-Powered Metaverse Platform', href: '/ai-metaverse-platform', icon: Cpu, price: '$5,000/mo' },
    { name: 'Quantum AI Computing Platform', href: '/quantum-ai-platform', icon: Cpu, price: '$10,000/mo' },
    { name: 'Advanced Robotics Systems', href: '/advanced-robotics', icon: Settings, price: '$6,000/mo' },
    { name: 'Digital Twin Development Platform', href: '/digital-twin-platform', icon: Cpu, price: '$4,500/mo' },
    { name: 'Space Technology Solutions', href: '/space-technology', icon: Globe, price: '$8,000/mo' },
    { name: 'Climate Technology Solutions', href: '/climate-technology', icon: Globe, price: '$3,500/mo' },
    { name: 'Biotechnology IT Solutions', href: '/biotechnology-it', icon: Stethoscope, price: '$5,500/mo' },
    { name: 'Smart City Solutions', href: '/smart-city-solutions', icon: Building, price: '$4,000/mo' },
    { name: 'FinTech Solutions', href: '/fintech-solutions', icon: CreditCard, price: '$3,500/mo' },
    { name: 'HealthTech Infrastructure', href: '/healthtech-infrastructure', icon: Stethoscope, price: '$4,500/mo' },
    { name: 'EdTech Solutions', href: '/edtech-solutions', icon: GraduationCap, price: '$2,500/mo' },
    { name: 'RetailTech Solutions', href: '/retailtech-solutions', icon: ShoppingCart, price: '$3,000/mo' },
    { name: 'AgriTech Solutions', href: '/agritech-solutions', icon: Home, price: '$2,500/mo' },
    { name: 'PropTech Solutions', href: '/proptech-solutions', icon: Home, price: '$2,800/mo' },
    { name: 'InsurTech Solutions', href: '/insurtech-solutions', icon: Shield, price: '$3,200/mo' },
    { name: 'LegalTech Solutions', href: '/legaltech-solutions', icon: FileText, price: '$2,800/mo' },
    { name: 'RegTech Solutions', href: '/regtech-solutions', icon: Shield, price: '$2,200/mo' },
    { name: 'MarTech Solutions', href: '/martech-solutions', icon: Target, price: '$2,500/mo' },
    { name: 'HRTech Solutions', href: '/hrtech-solutions', icon: Users, price: '$2,000/mo' },
    { name: 'Supply Chain Tech Solutions', href: '/supply-chain-tech', icon: Truck, price: '$3,500/mo' },
    { name: 'Energy Tech Solutions', href: '/energy-tech-solutions', icon: Zap, price: '$2,800/mo' },
    { name: 'Transportation Tech Solutions', href: '/transportation-tech', icon: Car, price: '$3,200/mo' },
    { name: 'Manufacturing Tech Solutions', href: '/manufacturing-tech', icon: Factory, price: '$4,000/mo' },
    { name: 'Construction Tech Solutions', href: '/construction-tech', icon: Building, price: '$3,500/mo' },
    { name: 'Entertainment Tech Solutions', href: '/entertainment-tech', icon: Video, price: '$2,800/mo' },
    { name: 'Sports Tech Solutions', href: '/sports-tech', icon: Activity, price: '$2,200/mo' },
    { name: 'Gaming Tech Solutions', href: '/gaming-tech', icon: Gamepad2, price: '$2,500/mo' },
    { name: 'Travel Tech Solutions', href: '/travel-tech', icon: Plane, price: '$1,800/mo' },
    { name: 'Hospitality Tech Solutions', href: '/hospitality-tech', icon: Home, price: '$2,200/mo' },
    { name: 'Government Tech Solutions', href: '/government-tech', icon: Building, price: '$5,000/mo' },
    { name: 'Non-Profit Tech Solutions', href: '/nonprofit-tech', icon: Heart, price: '$1,200/mo' }
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
                <div className="absolute top-full left-0 mt-2 w-[1200px] bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl p-6">
                  <div className="grid grid-cols-5 gap-6">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Micro SAAS
                      </h3>
                      <div className="space-y-3">
                        {['Productivity', 'Content', 'Marketing', 'Business', 'Finance', 'Support', 'Development', 'Analytics', 'Creative', 'Health', 'Sales', 'Legal', 'E-commerce', 'Data Management', 'Cloud', 'Knowledge Management', 'Operations', 'Education'].map(category => (
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
                                    <span className="truncate">{service.name}</span>
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
                        {aiServices.slice(0, 12).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center justify-between text-sm text-gray-300 hover:text-cyan-400 transition-colors group"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-3 h-3" />
                              <span className="truncate">{service.name}</span>
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
                        {itServices.slice(0, 12).map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center justify-between text-sm text-gray-300 hover:text-cyan-400 transition-colors group"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-3 h-3" />
                              <span className="truncate">{service.name}</span>
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
                        {specializedServices.slice(0, 12).map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center justify-between text-sm text-gray-300 hover:text-cyan-400 transition-colors group"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-3 h-3" />
                              <span className="truncate">{service.name}</span>
                            </div>
                            <span className="text-orange-400 text-xs font-medium">{service.price}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        Industry Solutions
                      </h3>
                      <div className="space-y-2">
                        {['FinTech', 'HealthTech', 'EdTech', 'RetailTech', 'AgriTech', 'PropTech', 'InsurTech', 'LegalTech', 'RegTech', 'MarTech', 'HRTech', 'Supply Chain Tech'].map((industry) => (
                          <a
                            key={industry}
                            href={`/${industry.toLowerCase()}-solutions`}
                            className="flex items-center justify-between text-sm text-gray-300 hover:text-cyan-400 transition-colors group"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <Settings className="w-3 h-3" />
                              <span>{industry} Solutions</span>
                            </div>
                            <span className="text-blue-400 text-xs font-medium">From $1,200/mo</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <div className="grid grid-cols-4 gap-4">
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
                      <a
                        href="/contact"
                        className="flex items-center justify-center space-x-2 text-orange-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>Get Consultation</span>
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
                  <div className="mt-4 pl-4 space-y-4">
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Micro SAAS Solutions
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {microSAASServices.slice(0, 6).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center justify-between text-sm text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded hover:bg-slate-800"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-3 h-3" />
                              <span className="truncate">{service.name}</span>
                            </div>
                            <span className="text-cyan-400 text-xs font-medium">{service.price}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Services
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {aiServices.slice(0, 6).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center justify-between text-sm text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded hover:bg-slate-800"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-3 h-3" />
                              <span className="truncate">{service.name}</span>
                            </div>
                            <span className="text-purple-400 text-xs font-medium">{service.price}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        IT Services
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {itServices.slice(0, 6).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center justify-between text-sm text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded hover:bg-slate-800"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-3 h-3" />
                              <span className="truncate">{service.name}</span>
                            </div>
                            <span className="text-green-400 text-xs font-medium">{service.price}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Cpu className="w-4 h-4 mr-2" />
                        Specialized Solutions
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {specializedServices.slice(0, 6).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center justify-between text-sm text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded hover:bg-slate-800"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-3 h-3" />
                              <span className="truncate">{service.name}</span>
                            </div>
                            <span className="text-orange-400 text-xs font-medium">{service.price}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-700">
                      <div className="grid grid-cols-2 gap-2">
                        <a href="/services"
                          className="block text-cyan-400 hover:text-white transition-colors text-center p-2 rounded hover:bg-slate-800"
                          onClick={closeAllMenus}
                        >
                          View All Services
                        </a>
                        <a href="/pricing"
                          className="block text-green-400 hover:text-white transition-colors text-center p-2 rounded hover:bg-slate-800"
                          onClick={closeAllMenus}
                        >
                          View Pricing
                        </a>
                      </div>
                    </div>
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
