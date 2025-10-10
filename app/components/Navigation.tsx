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
    { name: 'AI Project Manager Pro', href: '/ai-project-manager', icon: BarChart, category: 'Productivity' },
    { name: 'AI Task Manager Pro', href: '/task-manager-pro', icon: Check, category: 'Productivity' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings, category: 'Productivity' },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar, category: 'Productivity' },
    { name: 'AI Time Tracker Pro', href: '/ai-time-tracker', icon: Clock3, category: 'Productivity' },
    { name: 'AI Meeting Notes Generator', href: '/ai-meeting-notes-generator', icon: FileText, category: 'Productivity' },
    
    // Content & Marketing
    { name: 'AI Writing Assistant Pro', href: '/ai-writing-assistant', icon: FileText, category: 'Content' },
    { name: 'AI Content Generator Pro', href: '/ai-content-generation', icon: FileText, category: 'Content' },
    { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager', icon: MessageSquare, category: 'Marketing' },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail, category: 'Marketing' },
    { name: 'AI Marketing Automation Hub', href: '/ai-marketing', icon: Target, category: 'Marketing' },
    { name: 'AI SEO Optimizer Pro', href: '/ai-seo-optimizer', icon: Search, category: 'Marketing' },
    { name: 'AI Lead Generation Pro', href: '/ai-lead-generation', icon: Target, category: 'Marketing' },
    { name: 'AI Newsletter Designer', href: '/ai-newsletter-designer', icon: Mail, category: 'Marketing' },
    
    // Business & Finance
    { name: 'AI CRM Intelligence Pro', href: '/ai-crm', icon: Users, category: 'Business' },
    { name: 'AI Fintech Analyzer Pro', href: '/ai-fintech', icon: CreditCard, category: 'Finance' },
    { name: 'AI Financial Analyzer Pro', href: '/ai-financial-analyzer', icon: Calculator, category: 'Finance' },
    { name: 'AI Expense Tracker Pro', href: '/ai-expense-tracker', icon: Calculator, category: 'Finance' },
    { name: 'AI E-commerce Optimizer', href: '/ai-ecommerce-solutions', icon: ShoppingCart, category: 'Business' },
    { name: 'AI Invoice Generator Pro', href: '/ai-invoice-generator', icon: FileText, category: 'Finance' },
    { name: 'AI Contract Generator Pro', href: '/ai-contract-generator', icon: FileText, category: 'Legal' },
    
    // Customer Service
    { name: 'AI Customer Support Bot Pro', href: '/ai-customer-support-bot', icon: Bot, category: 'Support' },
    { name: 'AI Chatbot Builder Pro', href: '/ai-chatbot-builder', icon: Bot, category: 'Support' },
    { name: 'AI Email Assistant Pro', href: '/ai-email-assistant', icon: Mail, category: 'Support' },
    
    // Development & Technical
    { name: 'AI Code Review Assistant Pro', href: '/ai-code-generation', icon: Code, category: 'Development' },
    { name: 'AI Mobile App Builder Pro', href: '/ai-mobile-app-development', icon: Smartphone, category: 'Development' },
    { name: 'AI Cybersecurity Shield Pro', href: '/ai-cybersecurity', icon: Shield, category: 'Security' },
    { name: 'AI Document Processor Pro', href: '/ai-document-processing', icon: FileText, category: 'Development' },
    { name: 'AI Website Builder Pro', href: '/ai-website-builder', icon: Globe, category: 'Development' },
    
    // Analytics & Data
    { name: 'AI Data Analytics Pro', href: '/ai-data-analytics', icon: BarChart3, category: 'Analytics' },
    { name: 'AI Data Visualization Pro', href: '/ai-data-visualization', icon: BarChart, category: 'Analytics' },
    { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics', icon: BarChart, category: 'Analytics' },
    
    // Creative & Media
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video, category: 'Creative' },
    { name: 'AI Voice Cloning Studio Pro', href: '/ai-voice-cloning', icon: Music, category: 'Creative' },
    { name: 'AI Music Composer Pro', href: '/ai-music-composition', icon: Music, category: 'Creative' },
    { name: 'AI Fashion Designer Pro', href: '/ai-fashion-design', icon: Palette, category: 'Creative' },
    { name: 'AI 3D Generation Studio Pro', href: '/ai-3d-generation', icon: Camera, category: 'Creative' },
    { name: 'AI Logo Designer Pro', href: '/ai-logo-designer', icon: Palette, category: 'Creative' },
    { name: 'AI Art Gallery Pro', href: '/ai-art-gallery', icon: Palette, category: 'Creative' },
    
    // Health & Wellness
    { name: 'AI Healthcare Assistant Pro', href: '/ai-healthcare', icon: Heart, category: 'Health' },
    { name: 'AI Fitness Coach Pro', href: '/ai-fitness-coach', icon: Heart, category: 'Health' },
    { name: 'AI Healthcare Diagnostician', href: '/ai-healthcare-diagnostician', icon: Stethoscope, category: 'Health' },
    
    // Sales & Business
    { name: 'AI Sales Automation Hub Pro', href: '/ai-sales-automation', icon: Target, category: 'Sales' },
    { name: 'AI Lead Generation Pro', href: '/ai-lead-generation', icon: Target, category: 'Sales' },
    
    // Advanced AI Services
    { name: 'AI Quantum Computing Simulator', href: '/ai-quantum-computing-simulator', icon: Cpu, category: 'Quantum AI' },
    { name: 'AI Autonomous Vehicle Simulator', href: '/ai-autonomous-vehicle-simulator', icon: Car, category: 'Autonomous Systems' },
    { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery-platform', icon: Heart, category: 'Biotech AI' },
    { name: 'AI Climate Change Predictor', href: '/ai-climate-change-predictor', icon: Globe, category: 'Climate AI' },
    { name: 'AI Space Mission Planner', href: '/ai-space-mission-planner', icon: Rocket, category: 'Space AI' },
    { name: 'AI Metaverse Builder Pro', href: '/ai-metaverse-builder', icon: Cube, category: 'Metaverse AI' },
    { name: 'AI Blockchain Analyzer Pro', href: '/ai-blockchain-analyzer', icon: Lock, category: 'Blockchain AI' },
    { name: 'AI Edge Computing Optimizer', href: '/ai-edge-computing-optimizer', icon: Smartphone, category: 'Edge AI' },
    { name: 'AI Digital Twin Creator Pro', href: '/ai-digital-twin-creator', icon: Cube, category: 'Digital Twin AI' }
  ];

  const aiServices = [
    // Core AI Technologies
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain },
    { name: 'Deep Learning Platform', href: '/deep-learning', icon: Brain },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageSquare },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Reinforcement Learning', href: '/ai-reinforcement-learning', icon: Target },
    
    // Advanced AI Research
    { name: 'AI Research & Development Lab', href: '/ai-research-lab', icon: Brain },
    { name: 'AI Ethics & Governance', href: '/ai-ethics', icon: Shield },
    { name: 'AI Model Explainability', href: '/ai-model-explainability', icon: Eye },
    { name: 'AI Federated Learning', href: '/ai-federated-learning', icon: Globe },
    { name: 'AI Transfer Learning', href: '/ai-transfer-learning', icon: ArrowRight },
    { name: 'AI AutoML Platform', href: '/ai-automl-platform', icon: Settings },
    
    // Industry-Specific AI
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: BarChart },
    { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain', icon: Globe },
    { name: 'AI Quality Assurance', href: '/ai-quality-assurance', icon: Shield },
    { name: 'AI Human Resources', href: '/ai-hr', icon: Users },
    { name: 'AI Legal Assistant', href: '/ai-legal', icon: FileText },
    { name: 'AI Real Estate Analytics', href: '/ai-real-estate', icon: Home },
    { name: 'AI Manufacturing Intelligence', href: '/ai-manufacturing', icon: Factory },
    { name: 'AI Transportation & Logistics', href: '/ai-transportation', icon: Truck },
    { name: 'AI Education Platform', href: '/ai-education', icon: GraduationCap },
    { name: 'AI Energy Management', href: '/ai-energy', icon: Zap },
    { name: 'AI Insurance Analytics', href: '/ai-insurance', icon: Shield },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Stethoscope },
    { name: 'AI Fintech Solutions', href: '/ai-fintech', icon: CreditCard },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone },
    { name: 'AI CRM Solutions', href: '/ai-crm', icon: Users },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar },
    
    // Cutting-Edge AI
    { name: 'Quantum AI Computing', href: '/quantum-ai', icon: Cpu },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Digital Twin', href: '/ai-digital-twin', icon: Cube },
    { name: 'AI Metaverse Solutions', href: '/ai-metaverse', icon: Cube },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain', icon: Lock },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Smartphone },
    { name: 'AI Climate Solutions', href: '/ai-climate', icon: Globe },
    { name: 'AI Space Technology', href: '/ai-space', icon: Rocket },
    { name: 'AI Biotechnology', href: '/ai-biotech', icon: Heart },
    { name: 'AI Robotics', href: '/ai-robotics', icon: Settings }
  ];

  const itServices = [
    // Core IT Infrastructure
    { name: 'Cloud Services & Migration', href: '/cloud-services', icon: Cloud },
    { name: 'Enterprise Security Solutions', href: '/enterprise-security', icon: Shield },
    { name: 'IT Infrastructure Management', href: '/it-infrastructure', icon: Settings },
    { name: 'Data Center Solutions', href: '/data-center', icon: Database },
    { name: 'Network Security & Firewall', href: '/network-security', icon: Lock },
    { name: 'IT Consulting & Strategy', href: '/it-consulting', icon: Briefcase },
    
    // Advanced IT Services
    { name: 'AI-Powered Data Center Management', href: '/ai-data-center-management', icon: Database },
    { name: 'Edge Computing Infrastructure', href: '/edge-computing', icon: Globe },
    { name: '5G Network Implementation', href: '/5g-networks', icon: Smartphone },
    { name: 'Blockchain Infrastructure Services', href: '/blockchain-infrastructure', icon: Lock },
    { name: 'IoT Platform Development', href: '/iot-platform', icon: Settings },
    { name: 'AI Hardware Optimization', href: '/ai-hardware', icon: Cpu },
    
    // Security & Compliance
    { name: 'Quantum-Safe Cryptography', href: '/quantum-safe-cryptography', icon: Shield },
    { name: 'Advanced Network Security', href: '/advanced-network-security', icon: Shield },
    { name: 'Hybrid Cloud Management', href: '/hybrid-cloud', icon: Cloud },
    { name: 'AI-Powered IT Operations', href: '/ai-it-operations', icon: Settings },
    { name: 'Compliance & Governance Solutions', href: '/compliance', icon: FileText },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    
    // Management & Support
    { name: 'Managed IT Services', href: '/managed-it', icon: Users },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: BarChart },
    { name: 'Backup & Disaster Recovery', href: '/backup-recovery', icon: Database },
    { name: 'IT Training & Certification', href: '/it-training', icon: GraduationCap },
    { name: 'Performance Monitoring & Analytics', href: '/it-performance', icon: BarChart3 },
    { name: 'IT Support & Helpdesk', href: '/it-support', icon: Users },
    
    // Development & Tools
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings },
    { name: 'Database Services', href: '/database-services', icon: Database },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe },
    { name: 'Developer Tools', href: '/developer-tools', icon: Code },
    { name: 'Marketing Tools', href: '/marketing-tools', icon: Target },
    { name: 'Productivity Solutions', href: '/productivity', icon: BarChart },
    
    // Specialized Services
    { name: 'Digital Transformation Consulting', href: '/digital-transformation', icon: Target },
    { name: 'Vendor Management Services', href: '/vendor-management', icon: Users },
    { name: 'IT Project Management', href: '/it-project-management', icon: Target },
    { name: 'Technology Innovation Lab', href: '/innovation-lab', icon: Brain },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud }
  ];

  const specializedServices = [
    // Cutting-Edge Technologies
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings },
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock },
    { name: 'IoT & Edge Computing', href: '/iot-edge', icon: Globe },
    { name: 'Metaverse Development', href: '/metaverse', icon: Cube },
    { name: 'Robotics Solutions', href: '/robotics', icon: Settings },
    
    // Business Intelligence & Analytics
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
    { name: 'Analytics Tools', href: '/analytics-tools', icon: BarChart3 },
    { name: 'Smart Analytics', href: '/smart-analytics', icon: TrendingUp },
    { name: 'Data Science Platform', href: '/data-science', icon: BarChart },
    { name: 'Predictive Analytics', href: '/predictive-analytics', icon: TrendingUp },
    { name: 'Real-time Analytics', href: '/real-time-analytics', icon: Clock },
    
    // Enterprise Solutions
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building },
    { name: 'Business Apps', href: '/business-apps', icon: Briefcase },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: Target },
    { name: 'Process Automation', href: '/process-automation', icon: Settings },
    { name: 'Workflow Optimization', href: '/workflow-optimization', icon: Zap },
    { name: 'Enterprise Integration', href: '/enterprise-integration', icon: Link },
    
    // Industry-Specific Solutions
    { name: 'Healthcare Technology', href: '/healthcare-tech', icon: Heart },
    { name: 'Financial Technology', href: '/fintech', icon: CreditCard },
    { name: 'Educational Technology', href: '/edtech', icon: GraduationCap },
    { name: 'Retail Technology', href: '/retailtech', icon: ShoppingCart },
    { name: 'Manufacturing Technology', href: '/manufacturing-tech', icon: Factory },
    { name: 'Transportation Technology', href: '/transportation-tech', icon: Truck },
    
    // Advanced Applications
    { name: 'Climate Technology', href: '/climate-tech', icon: Globe },
    { name: 'Space Technology', href: '/space-tech', icon: Rocket },
    { name: 'Biotechnology', href: '/biotech', icon: Heart },
    { name: 'Energy Technology', href: '/energy-tech', icon: Zap },
    { name: 'Smart City Solutions', href: '/smart-city', icon: Building },
    { name: 'Digital Twin Technology', href: '/digital-twin', icon: Cube }
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
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
                                  className="flex items-center space-x-2 text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                                  onClick={closeAllMenus}
                                >
                                  <service.icon className="w-3 h-3" />
                                  <span>{service.name}</span>
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
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
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
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
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
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
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
                            className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
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
                            className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
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