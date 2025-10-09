import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, TrendingUp } from 'lucide-react';

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
    { name: 'AI Project Manager Pro', href: '/ai-project-manager', icon: BarChart },
    { name: 'AI Business Intelligence Suite', href: '/ai-business-intelligence', icon: BarChart },
    { name: 'AI CRM Intelligence Pro', href: '/ai-crm-intelligence', icon: Users },
    { name: 'AI Healthcare Assistant Pro', href: '/ai-healthcare-assistant', icon: Heart },
    { name: 'AI Fintech Analyzer Pro', href: '/ai-fintech-analyzer', icon: CreditCard },
    { name: 'AI Mobile App Builder', href: '/ai-mobile-app-builder', icon: Smartphone },
    { name: 'AI Cybersecurity Shield', href: '/ai-cybersecurity-shield', icon: Shield },
    { name: 'AI Marketing Automation Hub', href: '/ai-marketing-automation', icon: Target },
    { name: 'AI Task Manager Pro', href: '/ai-task-manager', icon: CheckCircle },
    { name: 'AI Expense Tracker Pro', href: '/ai-expense-tracker', icon: Calculator },
    { name: 'AI Chatbot Builder Pro', href: '/ai-chatbot-builder', icon: Bot },
    { name: 'AI Data Analytics Pro', href: '/ai-data-analytics', icon: BarChart3 },
    { name: 'AI Lead Generation Pro', href: '/ai-lead-generation', icon: Target },
    { name: 'AI Document Processor Pro', href: '/ai-document-processor', icon: FileText },
    { name: 'AI E-commerce Optimizer', href: '/ai-ecommerce-optimizer', icon: ShoppingCart },
    { name: 'AI Financial Analyzer Pro', href: '/ai-financial-analyzer', icon: Calculator },
    { name: 'AI Inventory Manager Pro', href: '/ai-inventory-manager', icon: BarChart },
    { name: 'AI HR Assistant Pro', href: '/ai-hr-assistant', icon: Users },
    { name: 'AI Legal Assistant Pro', href: '/ai-legal-assistant', icon: FileText },
    { name: 'AI Translation Hub Pro', href: '/ai-translation-hub', icon: Globe },
    { name: 'AI Security Monitor Pro', href: '/ai-security-monitor', icon: Shield },
    { name: 'AI Real Estate Analyzer', href: '/ai-real-estate-analyzer', icon: Home },
    { name: 'AI Manufacturing Intelligence', href: '/ai-manufacturing-intelligence', icon: Factory },
    { name: 'AI Transportation Optimizer', href: '/ai-transportation-optimizer', icon: Truck },
    { name: 'AI Education Platform Pro', href: '/ai-education-platform', icon: GraduationCap },
    { name: 'AI Energy Management Pro', href: '/ai-energy-management', icon: Zap },
    { name: 'AI Insurance Analytics', href: '/ai-insurance-analytics', icon: Shield },
    { name: 'AI Email Assistant Pro', href: '/ai-email-assistant', icon: Mail },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler-pro', icon: Calendar },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code },
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video },
    { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning', icon: Music },
    { name: 'AI Music Composer', href: '/ai-music-composition', icon: Music },
    { name: 'AI Fashion Designer', href: '/ai-fashion-design', icon: Palette },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Heart },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart },
    { name: 'AI 3D Generation Studio', href: '/ai-3d-generation', icon: Camera },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search }
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain },
    { name: 'AI Business Intelligence Suite', href: '/ai-business-intelligence', icon: BarChart },
    { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain-optimization', icon: Globe },
    { name: 'AI Quality Assurance Pro', href: '/ai-quality-assurance-pro', icon: Shield },
    { name: 'AI Human Resources Intelligence', href: '/ai-hr-intelligence', icon: Users },
    { name: 'AI Legal Intelligence Suite', href: '/ai-legal-intelligence', icon: FileText },
    { name: 'AI Real Estate Analytics', href: '/ai-real-estate-analytics', icon: Home },
    { name: 'AI Manufacturing Intelligence', href: '/ai-manufacturing-intelligence', icon: Factory },
    { name: 'AI Transportation & Logistics', href: '/ai-transportation-logistics', icon: Truck },
    { name: 'AI Education Platform Pro', href: '/ai-education-platform', icon: GraduationCap },
    { name: 'AI Energy Management', href: '/ai-energy-management', icon: Zap },
    { name: 'AI Insurance Analytics Pro', href: '/ai-insurance-analytics', icon: Shield },
    { name: 'AI Email Intelligence Suite', href: '/ai-email-intelligence', icon: Mail },
    { name: 'AI Scheduler Intelligence', href: '/ai-scheduler-intelligence', icon: Calendar },
    { name: 'AI Content Intelligence Pro', href: '/ai-content-intelligence', icon: FileText },
    { name: 'AI Customer Intelligence', href: '/ai-customer-intelligence', icon: Users },
    { name: 'AI Financial Intelligence Pro', href: '/ai-financial-intelligence', icon: DollarSign },
    { name: 'AI Healthcare Intelligence', href: '/ai-healthcare-intelligence', icon: Stethoscope },
    { name: 'AI Cybersecurity Intelligence', href: '/ai-cybersecurity-intelligence', icon: Shield },
    { name: 'AI IoT Intelligence Suite', href: '/ai-iot-intelligence', icon: Cpu },
    { name: 'AI Blockchain Intelligence', href: '/ai-blockchain-intelligence', icon: Lock },
    { name: 'AI Quantum Computing Solutions', href: '/ai-quantum-computing', icon: Cpu },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Settings },
    { name: 'AI Robotics Intelligence', href: '/ai-robotics-intelligence', icon: Settings },
    { name: 'AI Environmental Intelligence', href: '/ai-environmental-intelligence', icon: Globe },
    { name: 'AI Space Technology Solutions', href: '/ai-space-technology', icon: Globe },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageSquare },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Data Intelligence', href: '/ai-data-intelligence', icon: BarChart },
    { name: 'AI 3D & AR Solutions', href: '/ai-3d-ar-solutions', icon: Cube },
    { name: 'AI Voice & Audio', href: '/ai-voice-audio', icon: Mic },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: TrendingUp },
    { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: Target },
    { name: 'AI Security & Fraud Detection', href: '/ai-security-fraud-detection', icon: Shield },
    { name: 'AI Document Intelligence', href: '/ai-document-intelligence', icon: Search }
  ];

  const itServices = [
    { name: 'Cloud Migration & Management', href: '/cloud-migration-management', icon: Cloud },
    { name: 'Enterprise Security Solutions', href: '/enterprise-security-solutions', icon: Shield },
    { name: 'IT Infrastructure Management', href: '/it-infrastructure-management', icon: Settings },
    { name: 'Data Center Solutions Pro', href: '/data-center-solutions-pro', icon: Database },
    { name: 'Network Security & Firewall', href: '/network-security-firewall', icon: Lock },
    { name: 'IT Consulting & Strategy', href: '/it-consulting-strategy', icon: Briefcase },
    { name: 'Managed IT Services Pro', href: '/managed-it-services-pro', icon: Users },
    { name: 'Cloud Security & Compliance', href: '/cloud-security-compliance', icon: Shield },
    { name: 'IT Asset Management Pro', href: '/it-asset-management-pro', icon: BarChart },
    { name: 'Backup & Disaster Recovery', href: '/backup-disaster-recovery', icon: HardDrive },
    { name: 'IT Training & Support', href: '/it-training-support', icon: GraduationCap },
    { name: 'IT Performance Optimization', href: '/it-performance-optimization', icon: Zap },
    { name: 'Cybersecurity Solutions Pro', href: '/cybersecurity-solutions-pro', icon: Shield },
    { name: 'DevOps & CI/CD Pro', href: '/devops-cicd-pro', icon: Settings },
    { name: 'Database Services Pro', href: '/database-services-pro', icon: Database },
    { name: 'Network Infrastructure Pro', href: '/network-infrastructure-pro', icon: Globe },
    { name: 'IT Support & Helpdesk Pro', href: '/it-support-helpdesk-pro', icon: Users },
    { name: 'Cloud Migration Pro', href: '/cloud-migration-pro', icon: Cloud },
    { name: 'Compliance & Governance Pro', href: '/compliance-governance-pro', icon: FileCheck },
    { name: 'Developer Tools & Platforms', href: '/developer-tools-platforms', icon: Code },
    { name: 'Marketing Technology Stack', href: '/marketing-technology-stack', icon: Target },
    { name: 'Productivity Solutions Pro', href: '/productivity-solutions-pro', icon: BarChart },
    { name: 'Blockchain & Web3 Solutions', href: '/blockchain-web3-solutions', icon: Lock },
    { name: 'IoT & Edge Computing Pro', href: '/iot-edge-computing-pro', icon: Cpu },
    { name: 'AI Infrastructure Pro', href: '/ai-infrastructure-pro', icon: Brain },
    { name: 'Enterprise Integration Pro', href: '/enterprise-integration-pro', icon: Link },
    { name: 'Quantum Computing Infrastructure', href: '/quantum-computing-infrastructure', icon: Cpu },
    { name: 'Autonomous Systems Infrastructure', href: '/autonomous-systems-infrastructure', icon: Settings },
    { name: 'Space Technology Infrastructure', href: '/space-technology-infrastructure', icon: Globe },
    { name: 'Environmental Technology Solutions', href: '/environmental-technology-solutions', icon: Globe },
    { name: 'Healthcare Technology Solutions', href: '/healthcare-technology-solutions', icon: Stethoscope },
    { name: 'Financial Technology Infrastructure', href: '/financial-technology-infrastructure', icon: DollarSign },
    { name: 'Educational Technology Solutions', href: '/educational-technology-solutions', icon: GraduationCap },
    { name: 'Retail Technology Solutions', href: '/retail-technology-solutions', icon: ShoppingCart },
    { name: 'Manufacturing Technology Solutions', href: '/manufacturing-technology-solutions', icon: Factory },
    { name: 'Transportation Technology Solutions', href: '/transportation-technology-solutions', icon: Truck },
    { name: 'Energy Technology Solutions', href: '/energy-technology-solutions', icon: Zap },
    { name: 'Government Technology Solutions', href: '/government-technology-solutions', icon: Building },
    { name: 'Non-Profit Technology Solutions', href: '/non-profit-technology-solutions', icon: Heart }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings },
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock },
    { name: 'IoT & Edge Computing', href: '/iot-edge', icon: Globe },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
    { name: 'Robotics Solutions', href: '/robotics', icon: Settings },
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building },
    { name: 'Analytics Tools', href: '/analytics-tools', icon: BarChart3 },
    { name: 'Business Apps', href: '/business-apps', icon: Briefcase },
    { name: 'Expense Tracker Pro', href: '/expense-tracker', icon: Calculator },
    { name: 'Task Manager Pro', href: '/task-manager-pro', icon: CheckCircle },
    { name: 'Smart Analytics', href: '/smart-analytics', icon: TrendingUp }
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
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Micro SAAS
                      </h3>
                      <div className="space-y-2">
                        {microSAASServices.slice(0, 6).map((service) => (
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
                        <Brain className="w-4 h-4 mr-2" />
                        AI Services
                      </h3>
                      <div className="space-y-2">
                        {aiServices.slice(0, 6).map((service) => (
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
                        {itServices.slice(0, 6).map((service) => (
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
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="grid grid-cols-2 gap-4">
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