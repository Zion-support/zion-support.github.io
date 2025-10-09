import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, TrendingUp, ChefHat, Moon, Sprout } from 'lucide-react';

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
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics', icon: BarChart3 },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code },
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video },
    { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning', icon: Music },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings },
    { name: 'AI Fashion Design Studio', href: '/ai-fashion-design', icon: Palette },
    { name: 'AI Music Composition Suite', href: '/ai-music-composition', icon: Music },
    { name: 'AI Fitness Coach Pro', href: '/ai-fitness-coach', icon: Heart },
    { name: 'AI Sales Automation Hub', href: '/ai-sales-automation', icon: Target },
    { name: 'AI Data Visualization Pro', href: '/ai-data-visualization', icon: BarChart },
    { name: 'AI 3D Generation Studio', href: '/ai-3d-generation', icon: Camera },
    { name: 'AI Customer Support Pro', href: '/ai-customer-support', icon: Bot },
    { name: 'AI Content Writer Pro', href: '/ai-content-writer', icon: FileText },
    { name: 'AI Meeting Scheduler Pro', href: '/ai-meeting-scheduler', icon: Calendar },
    { name: 'AI Expense Tracker Pro', href: '/ai-expense-tracker', icon: Calculator },
    { name: 'AI Time Tracker Pro', href: '/ai-time-tracker', icon: Clock3 },
    { name: 'AI Password Manager Pro', href: '/ai-password-manager', icon: Lock },
    { name: 'AI Note-Taking Assistant', href: '/ai-note-taking', icon: FileText },
    { name: 'AI Weather Assistant Pro', href: '/ai-weather-assistant', icon: Globe },
    { name: 'AI Recipe Generator Pro', href: '/ai-recipe-generator', icon: ChefHat },
    { name: 'AI Habit Tracker Pro', href: '/ai-habit-tracker', icon: Target },
    { name: 'AI Sleep Optimizer Pro', href: '/ai-sleep-optimizer', icon: Moon },
    { name: 'AI Meditation Coach Pro', href: '/ai-meditation-coach', icon: Heart },
    { name: 'AI Plant Care Assistant', href: '/ai-plant-care', icon: Sprout },
    { name: 'AI Home Security Monitor', href: '/ai-home-security', icon: Home },
    { name: 'AI Car Maintenance Pro', href: '/ai-car-maintenance', icon: Car },
    { name: 'AI Investment Tracker Pro', href: '/ai-investment-tracker', icon: TrendingUp },
    { name: 'AI Learning Path Creator', href: '/ai-learning-path', icon: GraduationCap },
    { name: 'AI Goal Achievement Coach', href: '/ai-goal-coach', icon: Target },
    { name: 'AI Memory Palace Builder', href: '/ai-memory-palace', icon: Brain },
    { name: 'AI Stress Management Pro', href: '/ai-stress-management', icon: Heart },
    { name: 'AI Productivity Optimizer', href: '/ai-productivity-optimizer', icon: Zap }
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageSquare },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye },
    { name: 'AI Automation Suite', href: '/ai-automation', icon: Zap },
    { name: 'AI Data Intelligence', href: '/ai-data-visualization', icon: BarChart },
    { name: 'AI 3D & AR Solutions', href: '/ai-3d-generation', icon: Cpu },
    { name: 'AI Voice & Audio', href: '/ai-voice-cloning', icon: Music },
    { name: 'AI Content Intelligence', href: '/ai-content-writer', icon: FileText },
    { name: 'AI Predictive Analytics', href: '/ai-analytics', icon: TrendingUp },
    { name: 'AI Recommendation Engine', href: '/ai-sales-automation', icon: Target },
    { name: 'AI Security & Fraud Detection', href: '/ai-fraud-detection', icon: Shield },
    { name: 'AI Document Intelligence', href: '/ai-document-processing', icon: Search },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Stethoscope },
    { name: 'AI Financial Intelligence', href: '/ai-financial-analyzer', icon: CreditCard },
    { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain-optimizer', icon: Truck },
    { name: 'AI Energy Management', href: '/ai-energy-manager', icon: Zap },
    { name: 'AI Quantum Computing', href: '/quantum-computing', icon: Cpu },
    { name: 'AI Autonomous Systems', href: '/autonomous-systems', icon: Car },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: Lock },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Cpu },
    { name: 'AI Metaverse Solutions', href: '/ai-metaverse-solutions', icon: Cpu },
    { name: 'AI Climate Solutions', href: '/ai-climate-solutions', icon: Globe },
    { name: 'AI Space Technology', href: '/ai-space-technology', icon: Globe },
    { name: 'AI Biotechnology', href: '/ai-biotechnology', icon: Stethoscope },
    { name: 'AI Robotics', href: '/ai-robotics', icon: Settings },
    { name: 'AI Cybersecurity Advanced', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Digital Twin', href: '/ai-digital-twin', icon: Cpu },
    { name: 'AI Conversational Intelligence', href: '/ai-conversational-intelligence', icon: MessageSquare },
    { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance', icon: Settings },
    { name: 'AI Content Moderation', href: '/ai-content-moderation', icon: Shield },
    { name: 'AI Market Intelligence', href: '/ai-market-intelligence', icon: TrendingUp },
    { name: 'AI Process Mining', href: '/ai-process-mining', icon: BarChart },
    { name: 'AI Knowledge Management', href: '/ai-knowledge-management', icon: Search },
    { name: 'AI Quality Assurance', href: '/ai-quality-assurance', icon: CheckCircle },
    { name: 'AI Resource Optimization', href: '/ai-resource-optimization', icon: Target },
    { name: 'AI Compliance Monitor', href: '/ai-compliance-monitor', icon: FileText },
    { name: 'AI Innovation Engine', href: '/ai-innovation-engine', icon: Sparkles },
    { name: 'AI Customer Intelligence', href: '/ai-customer-intelligence', icon: Users },
    { name: 'AI Operational Intelligence', href: '/ai-operational-intelligence', icon: Activity },
    { name: 'AI Strategic Planning', href: '/ai-strategic-planning', icon: Target },
    { name: 'AI Environmental Intelligence', href: '/ai-environmental-intelligence', icon: Globe },
    { name: 'AI Talent Intelligence', href: '/ai-talent-intelligence', icon: Users },
    { name: 'AI Innovation Labs', href: '/ai-innovation-labs', icon: Cpu },
    { name: 'AI Business Transformation', href: '/ai-business-transformation', icon: Zap },
    { name: 'AI Ethical Intelligence', href: '/ai-ethical-intelligence', icon: Shield },
    { name: 'AI Future Intelligence', href: '/ai-future-intelligence', icon: Sparkles }
  ];

  const itServices = [
    { name: 'Cloud Migration & Management', href: '/cloud-migration', icon: Cloud },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity', icon: Shield },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings },
    { name: 'Database Services', href: '/database-services', icon: Database },
    { name: 'IT Strategy & Consulting', href: '/it-consulting', icon: Briefcase },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe },
    { name: 'Mobile App Development', href: '/mobile-app-development', icon: Smartphone },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Data Analytics & BI', href: '/data-analytics', icon: BarChart },
    { name: 'IT Support & Maintenance', href: '/it-support', icon: Wrench },
    { name: 'Blockchain & Web3 Solutions', href: '/blockchain', icon: Lock },
    { name: 'IoT & Edge Computing', href: '/iot-edge', icon: Cpu },
    { name: 'AI Infrastructure', href: '/ai-infrastructure', icon: Brain },
    { name: 'Enterprise Integration', href: '/enterprise-integration', icon: Link },
    { name: 'Disaster Recovery & Backup', href: '/backup-recovery', icon: Database },
    { name: 'Compliance & Governance', href: '/compliance', icon: FileText },
    { name: 'Quantum Computing Infrastructure', href: '/quantum-computing-infrastructure', icon: Cpu },
    { name: 'Autonomous Systems Development', href: '/autonomous-systems-development', icon: Car },
    { name: 'Metaverse Development', href: '/metaverse-development', icon: Cpu },
    { name: 'Edge Computing Solutions', href: '/edge-computing-solutions', icon: Cpu },
    { name: 'Climate Technology Solutions', href: '/climate-technology-solutions', icon: Globe },
    { name: 'Space Technology Services', href: '/space-technology-services', icon: Globe },
    { name: 'Biotechnology IT Solutions', href: '/biotechnology-it-solutions', icon: Stethoscope },
    { name: 'Advanced Robotics Systems', href: '/advanced-robotics-systems', icon: Settings },
    { name: 'Digital Twin Development', href: '/digital-twin-development', icon: Cpu },
    { name: 'Advanced Cybersecurity', href: '/advanced-cybersecurity', icon: Shield },
    { name: 'Smart City Solutions', href: '/smart-city-solutions', icon: Building },
    { name: 'FinTech Solutions', href: '/fintech-solutions', icon: CreditCard },
    { name: 'HealthTech Infrastructure', href: '/healthtech-infrastructure', icon: Stethoscope },
    { name: 'EdTech Solutions', href: '/edtech-solutions', icon: GraduationCap },
    { name: 'RetailTech Solutions', href: '/retailtech-solutions', icon: ShoppingCart },
    { name: 'AI-Powered Infrastructure', href: '/ai-powered-infrastructure', icon: Cpu },
    { name: 'Advanced Data Centers', href: '/advanced-data-centers', icon: Database },
    { name: 'Enterprise Integration Hub', href: '/enterprise-integration-hub', icon: Link },
    { name: 'Advanced Network Security', href: '/advanced-network-security', icon: Shield },
    { name: 'Cloud-Native Development', href: '/cloud-native-development', icon: Code },
    { name: 'Advanced Analytics Platform', href: '/advanced-analytics-platform', icon: BarChart },
    { name: 'Intelligent Automation Suite', href: '/intelligent-automation-suite', icon: Settings },
    { name: 'Advanced Monitoring & Observability', href: '/advanced-monitoring', icon: Activity },
    { name: 'Enterprise Security Operations', href: '/enterprise-security-operations', icon: Shield },
    { name: 'Advanced Cloud Architecture', href: '/advanced-cloud-architecture', icon: Cloud },
    { name: 'Intelligent Data Management', href: '/intelligent-data-management', icon: Database },
    { name: 'Advanced DevOps Platform', href: '/advanced-devops-platform', icon: Settings },
    { name: 'Enterprise API Management', href: '/enterprise-api-management', icon: Link },
    { name: 'Advanced Identity & Access Management', href: '/advanced-identity-management', icon: Lock },
    { name: 'Intelligent Content Management', href: '/intelligent-content-management', icon: FileText },
    { name: 'Advanced Backup & Recovery', href: '/advanced-backup-recovery', icon: Database },
    { name: 'Enterprise Performance Optimization', href: '/enterprise-performance-optimization', icon: Zap },
    { name: 'Advanced Compliance Management', href: '/advanced-compliance-management', icon: FileText },
    { name: 'Intelligent Service Desk', href: '/intelligent-service-desk', icon: Users },
    { name: 'Advanced Mobile Solutions', href: '/advanced-mobile-solutions', icon: Smartphone },
    { name: 'Intelligent Business Continuity', href: '/intelligent-business-continuity', icon: Shield },
    { name: 'Advanced Collaboration Platform', href: '/advanced-collaboration-platform', icon: Users },
    { name: 'Intelligent Asset Management', href: '/intelligent-asset-management', icon: BarChart },
    { name: 'Advanced Network Infrastructure', href: '/advanced-network-infrastructure', icon: Globe },
    { name: 'Intelligent Database Solutions', href: '/intelligent-database-solutions', icon: Database },
    { name: 'Advanced Virtualization Platform', href: '/advanced-virtualization-platform', icon: Cpu },
    { name: 'Intelligent Testing Platform', href: '/intelligent-testing-platform', icon: CheckCircle },
    { name: 'Advanced Integration Services', href: '/advanced-integration-services', icon: Link },
    { name: 'Intelligent Operations Center', href: '/intelligent-operations-center', icon: Activity },
    { name: 'Advanced Security Consulting', href: '/advanced-security-consulting', icon: Shield },
    { name: 'Intelligent Change Management', href: '/intelligent-change-management', icon: Settings },
    { name: 'Advanced Technology Consulting', href: '/advanced-technology-consulting', icon: Briefcase }
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
    { name: 'Task Manager Pro', href: '/task-manager-pro', icon: Check },
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