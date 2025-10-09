import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, DollarSign, BarChart3 as ChartIcon, Mic, Headphones, Monitor, Laptop, Server, HardDrive, Wifi, Bluetooth, Battery, Cpu as Processor, Database as DataIcon, Cloud as CloudIcon, Code as CodeIcon, Smartphone as MobileIcon, Settings as SettingsIcon, FileText as DocumentIcon, Search as SearchIcon, Bot as BotIcon, Palette as DesignIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as GamingIcon, ShoppingCart as CartIcon, CreditCard as PaymentIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HealthIcon, Stethoscope as MedicalIcon, GraduationCap as EducationIcon, Briefcase as BusinessIcon, Wrench as ToolIcon, Hammer as ConstructionIcon, Paintbrush as ArtIcon, Scissors as CutIcon, BookOpen as BookIcon, Calculator as CalcIcon, Calendar as CalendarIcon, Clock3 as TimeIcon, Compass as NavigationIcon, Navigation as NavIcon, PieChart as ChartIcon, TrendingDown as DownIcon, Activity as ActivityIcon, Atom as ScienceIcon } from 'lucide-react';

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

  // Enhanced Micro SAAS Services
  const microSAASServices = [
    { name: 'AI Project Manager Pro', href: '/ai-project-manager', icon: BarChart, category: 'AI & ML' },
    { name: 'AI Writing Assistant Pro', href: '/ai-writing-assistant', icon: FileText, category: 'AI & ML' },
    { name: 'AI CRM Intelligence', href: '/ai-crm', icon: Users, category: 'AI & ML' },
    { name: 'AI Healthcare Assistant', href: '/ai-healthcare', icon: Heart, category: 'AI & ML' },
    { name: 'AI Fintech Analyzer', href: '/ai-fintech', icon: CreditCard, category: 'AI & ML' },
    { name: 'AI Cybersecurity Shield', href: '/ai-cybersecurity', icon: Shield, category: 'AI & ML' },
    { name: 'AI Marketing Automation', href: '/ai-marketing', icon: Target, category: 'AI & ML' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Bot, category: 'AI & ML' },
    { name: 'AI Data Analytics Pro', href: '/ai-data-analytics', icon: BarChart3, category: 'AI & ML' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare, category: 'AI & ML' },
    { name: 'AI Task Manager Pro', href: '/task-manager-pro', icon: CheckCircle, category: 'Productivity' },
    { name: 'AI Expense Tracker', href: '/expense-tracker', icon: Calculator, category: 'Productivity' },
    { name: 'AI Lead Generation System', href: '/ai-lead-generation', icon: Target, category: 'Sales' },
    { name: 'AI Document Processor', href: '/ai-document-processing', icon: FileText, category: 'Automation' },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search, category: 'Marketing' },
    { name: 'AI E-commerce Assistant', href: '/ai-ecommerce-solutions', icon: ShoppingCart, category: 'E-commerce' },
    { name: 'AI Financial Analyzer', href: '/ai-financial-analyzer', icon: Calculator, category: 'Finance' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings, category: 'Automation' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target, category: 'Sales' },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail, category: 'Marketing' },
    { name: 'AI Content Generator', href: '/ai-content-generation', icon: FileText, category: 'Content' },
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video, category: 'Content' },
    { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning', icon: Music, category: 'Content' },
    { name: 'AI Music Composer', href: '/ai-music-composition', icon: Music, category: 'Content' },
    { name: 'AI Fashion Designer', href: '/ai-fashion-design', icon: Palette, category: 'Design' },
    { name: 'AI 3D Generation Studio', href: '/ai-3d-generation', icon: Camera, category: 'Design' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart, category: 'Analytics' },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Heart, category: 'Health' },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot, category: 'Support' },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code, category: 'Development' }
  ];

  // Enhanced AI Services
  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain, category: 'Core AI' },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: BarChart, category: 'Core AI' },
    { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain', icon: Globe, category: 'Enterprise' },
    { name: 'AI Quality Assurance', href: '/ai-quality-assurance', icon: Shield, category: 'Enterprise' },
    { name: 'AI Human Resources', href: '/ai-hr', icon: Users, category: 'Enterprise' },
    { name: 'AI Legal Assistant', href: '/ai-legal', icon: FileText, category: 'Professional' },
    { name: 'AI Real Estate Analytics', href: '/ai-real-estate', icon: Home, category: 'Professional' },
    { name: 'AI Manufacturing Intelligence', href: '/ai-manufacturing', icon: Factory, category: 'Industrial' },
    { name: 'AI Transportation & Logistics', href: '/ai-transportation', icon: Truck, category: 'Logistics' },
    { name: 'AI Education Platform', href: '/ai-education', icon: GraduationCap, category: 'Education' },
    { name: 'AI Energy Management', href: '/ai-energy', icon: Zap, category: 'Energy' },
    { name: 'AI Insurance Analytics', href: '/ai-insurance', icon: Shield, category: 'Finance' },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageSquare, category: 'Core AI' },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye, category: 'Core AI' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, category: 'Automation' },
    { name: 'Quantum AI Computing', href: '/quantum-ai', icon: Cpu, category: 'Advanced' },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Stethoscope, category: 'Healthcare' },
    { name: 'AI Fintech Solutions', href: '/ai-fintech', icon: CreditCard, category: 'Finance' },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: MobileIcon, category: 'Development' },
    { name: 'AI CRM Solutions', href: '/ai-crm', icon: Users, category: 'Sales' },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail, category: 'Productivity' },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar, category: 'Productivity' }
  ];

  // Enhanced IT Services
  const itServices = [
    { name: 'Cloud Infrastructure Management', href: '/cloud-services', icon: Cloud, category: 'Cloud' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity', icon: Shield, category: 'Security' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, category: 'Development' },
    { name: 'Database Services', href: '/database-services', icon: Database, category: 'Data' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Wifi, category: 'Network' },
    { name: 'IT Support & Maintenance', href: '/it-support', icon: Users, category: 'Support' },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud, category: 'Cloud' },
    { name: 'IT Consulting & Strategy', href: '/it-consulting', icon: Briefcase, category: 'Consulting' },
    { name: 'Managed IT Services', href: '/managed-it', icon: Users, category: 'Managed' },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: BarChart, category: 'Management' },
    { name: 'Backup & Disaster Recovery', href: '/backup-recovery', icon: Database, category: 'Data' },
    { name: 'IT Training & Support', href: '/it-training', icon: GraduationCap, category: 'Training' },
    { name: 'IT Performance Optimization', href: '/it-performance', icon: Zap, category: 'Optimization' },
    { name: 'Compliance & Governance', href: '/compliance', icon: FileText, category: 'Compliance' },
    { name: 'Developer Tools', href: '/developer-tools', icon: Code, category: 'Development' },
    { name: 'Marketing Tools', href: '/marketing-tools', icon: Target, category: 'Marketing' },
    { name: 'Productivity Solutions', href: '/productivity', icon: BarChart, category: 'Productivity' }
  ];

  // Enhanced Specialized Services
  const specializedServices = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, category: 'Advanced' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings, category: 'Advanced' },
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock, category: 'Web3' },
    { name: 'IoT & Edge Computing', href: '/iot-edge', icon: Globe, category: 'IoT' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, category: 'Analytics' },
    { name: 'Robotics Solutions', href: '/robotics', icon: Settings, category: 'Robotics' },
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building, category: 'Enterprise' },
    { name: 'Analytics Tools', href: '/analytics-tools', icon: BarChart3, category: 'Analytics' },
    { name: 'Business Apps', href: '/business-apps', icon: Briefcase, category: 'Business' },
    { name: 'Smart Analytics', href: '/smart-analytics', icon: TrendingUp, category: 'Analytics' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <a href="/" className="flex items-center space-x-2 group" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </a>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[1000px] bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl p-6">
                  <div className="grid grid-cols-4 gap-6">
                    {/* Micro SAAS Services */}
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Micro SAAS
                      </h3>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {microSAASServices.slice(0, 8).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-white/5"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* AI Services */}
                    <div>
                      <h3 className="text-purple-400 font-semibold mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Services
                      </h3>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {aiServices.slice(0, 8).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-purple-400 transition-colors py-1 px-2 rounded hover:bg-white/5"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* IT Services */}
                    <div>
                      <h3 className="text-blue-400 font-semibold mb-3 flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        IT Services
                      </h3>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {itServices.slice(0, 8).map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-blue-400 transition-colors py-1 px-2 rounded hover:bg-white/5"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Specialized Services */}
                    <div>
                      <h3 className="text-pink-400 font-semibold mb-3 flex items-center">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Specialized
                      </h3>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {specializedServices.slice(0, 8).map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-pink-400 transition-colors py-1 px-2 rounded hover:bg-white/5"
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
                    <div className="grid grid-cols-3 gap-4">
                      <a
                        href="/services"
                        className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-cyan-400/10"
                        onClick={closeAllMenus}
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="/pricing"
                        className="flex items-center justify-center space-x-2 text-purple-400 hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-purple-400/10"
                        onClick={closeAllMenus}
                      >
                        <span>Pricing Plans</span>
                        <DollarSign className="w-4 h-4" />
                      </a>
                      <a
                        href="/contact"
                        className="flex items-center justify-center space-x-2 text-pink-400 hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-pink-400/10"
                        onClick={closeAllMenus}
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="/about" className="text-white hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/10">
              About
            </a>
            <a href="/blog" className="text-white hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/10">
              Blog
            </a>
            <a href="/case-studies" className="text-white hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/10">
              Case Studies
            </a>
            <a href="/pricing" className="text-white hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/10">
              Pricing
            </a>
            <a href="/contact" className="text-white hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/10">
              Contact
            </a>
            
            <div className="flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-cyan-400/10"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+1 302 464 0950</span>
              </a>
              <a href="/contact"
                className="cyber-button px-4 py-2 text-sm hover:scale-105 transition-transform"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/10"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-4">
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-4 pl-4 space-y-4">
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Micro SAAS
                      </h4>
                      <div className="space-y-2">
                        {microSAASServices.slice(0, 6).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-purple-400 font-semibold mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Services
                      </h4>
                      <div className="space-y-2">
                        {aiServices.slice(0, 6).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-purple-400 transition-colors py-1 px-2 rounded"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-blue-400 font-semibold mb-3 flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        IT Services
                      </h4>
                      <div className="space-y-2">
                        {itServices.slice(0, 6).map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-blue-400 transition-colors py-1 px-2 rounded"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-pink-400 font-semibold mb-3 flex items-center">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Specialized
                      </h4>
                      <div className="space-y-2">
                        {specializedServices.slice(0, 6).map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-pink-400 transition-colors py-1 px-2 rounded"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a href="/about" className="block text-white hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/10" onClick={closeAllMenus}>
                About
              </a>
              <a href="/blog" className="block text-white hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/10" onClick={closeAllMenus}>
                Blog
              </a>
              <a href="/case-studies" className="block text-white hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/10" onClick={closeAllMenus}>
                Case Studies
              </a>
              <a href="/pricing" className="block text-white hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/10" onClick={closeAllMenus}>
                Pricing
              </a>
              <a href="/contact" className="block text-white hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/10" onClick={closeAllMenus}>
                Contact
              </a>

              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-cyan-400/10"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-purple-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-purple-400/10 mt-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <a href="/contact"
                  className="cyber-button px-4 py-2 text-sm mt-4 w-full text-center"
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