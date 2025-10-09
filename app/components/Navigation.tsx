import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, TrendingUp, Check, DollarSign, Mic, HardDrive, FileCheck, Link, Cube } from 'lucide-react';

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

  // Enhanced Micro SAAS Services with real pricing and features
  const microSAASServices = [
    { name: 'AI Project Manager Pro', href: '/ai-project-manager', icon: BarChart, price: '$199/mo', popular: true },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare, price: '$149/mo', popular: true },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart3, price: '$299/mo', popular: true },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail, price: '$199/mo', popular: true },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot, price: '$249/mo', popular: true },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code, price: '$179/mo', popular: false },
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video, price: '$399/mo', popular: true },
    { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning', icon: Mic, price: '$299/mo', popular: false },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings, price: '$349/mo', popular: true },
    { name: 'AI Fashion Design Studio', href: '/ai-fashion-design', icon: Palette, price: '$279/mo', popular: false },
    { name: 'AI Music Composition Suite', href: '/ai-music-composition', icon: Music, price: '$229/mo', popular: false },
    { name: 'AI Fitness Coach Pro', href: '/ai-fitness-coach', icon: Heart, price: '$179/mo', popular: false },
    { name: 'AI Sales Automation Hub', href: '/ai-sales-automation', icon: Target, price: '$399/mo', popular: true },
    { name: 'AI Data Visualization Pro', href: '/ai-data-visualization', icon: PieChart, price: '$279/mo', popular: false },
    { name: 'AI 3D Generation Studio', href: '/ai-3d-generation', icon: Cube, price: '$499/mo', popular: false },
    { name: 'AI Content Writer Pro', href: '/ai-content-writer', icon: FileText, price: '$149/mo', popular: true },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search, price: '$199/mo', popular: true },
    { name: 'AI E-commerce Optimizer', href: '/ai-ecommerce-optimizer', icon: ShoppingCart, price: '$349/mo', popular: true },
    { name: 'AI Security Monitor', href: '/ai-security-monitor', icon: Shield, price: '$399/mo', popular: true },
    { name: 'AI Translation Hub', href: '/ai-translation-hub', icon: Globe, price: '$279/mo', popular: false }
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain, price: '$1,500/mo' },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageSquare, price: '$1,200/mo' },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye, price: '$1,800/mo' },
    { name: 'AI Automation Suite', href: '/ai-automation', icon: Zap, price: '$1,400/mo' },
    { name: 'AI Data Intelligence', href: '/ai-data-analytics', icon: BarChart, price: '$1,100/mo' },
    { name: 'AI 3D & AR Solutions', href: '/ai-3d-generation', icon: Cube, price: '$1,600/mo' },
    { name: 'AI Voice & Audio', href: '/ai-voice-cloning', icon: Mic, price: '$1,300/mo' },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Stethoscope, price: '$2,000/mo' },
    { name: 'AI Fintech Solutions', href: '/ai-fintech', icon: CreditCard, price: '$1,700/mo' },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone, price: '$1,800/mo' },
    { name: 'AI CRM Solutions', href: '/ai-crm', icon: Users, price: '$1,400/mo' },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail, price: '$999/mo' }
  ];

  const itServices = [
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud, price: '$2,000/mo' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity', icon: Shield, price: '$2,500/mo' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, price: '$1,800/mo' },
    { name: 'Database Services', href: '/database-services', icon: Database, price: '$1,600/mo' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe, price: '$2,200/mo' },
    { name: 'IT Support & Helpdesk', href: '/it-support', icon: Users, price: '$1,500/mo' },
    { name: 'IT Consulting', href: '/it-consulting', icon: Briefcase, price: '$200/hr' },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud, price: '$3,000/project' },
    { name: 'Compliance & Governance', href: '/compliance', icon: FileCheck, price: '$1,800/mo' },
    { name: 'Developer Tools', href: '/developer-tools', icon: Code, price: '$1,200/mo' },
    { name: 'Marketing Tools', href: '/marketing-tools', icon: Target, price: '$1,400/mo' },
    { name: 'Productivity Solutions', href: '/productivity', icon: BarChart, price: '$1,300/mo' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, price: '$5,000/mo' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings, price: '$3,500/mo' },
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock, price: '$2,800/mo' },
    { name: 'IoT & Edge Computing', href: '/iot-edge', icon: Globe, price: '$2,200/mo' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, price: '$2,000/mo' },
    { name: 'Robotics Solutions', href: '/robotics', icon: Settings, price: '$4,000/mo' },
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building, price: 'Custom' },
    { name: 'Analytics Tools', href: '/analytics-tools', icon: BarChart3, price: '$1,500/mo' },
    { name: 'Business Apps', href: '/business-apps', icon: Briefcase, price: '$1,800/mo' },
    { name: 'Smart Analytics', href: '/smart-analytics', icon: TrendingUp, price: '$1,600/mo' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20 shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo with Futuristic Design */}
          <a href="/" className="flex items-center space-x-3 group" onClick={closeAllMenus}>
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300 group-hover:scale-110">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white neon-text group-hover:text-cyan-400 transition-colors duration-300">
                Zion Tech Group
              </span>
              <span className="text-xs text-cyan-400 font-medium">AI & IT Solutions</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-800/50"
              >
                <Zap className="w-4 h-4" />
                <span className="font-medium">Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[900px] bg-slate-900/98 backdrop-blur-xl border border-cyan-400/30 rounded-2xl shadow-2xl p-8 animate-in slide-in-from-top-2 duration-300">
                  <div className="grid grid-cols-4 gap-8">
                    {/* Micro SAAS Services */}
                    <div>
                      <h3 className="text-cyan-400 font-bold mb-4 flex items-center text-lg">
                        <Zap className="w-5 h-5 mr-2" />
                        Micro SAAS
                      </h3>
                      <div className="space-y-3">
                        {microSAASServices.slice(0, 8).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center justify-between group p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-3">
                              <service.icon className="w-4 h-4 text-cyan-400" />
                              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{service.name}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              {service.popular && <span className="text-xs bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded-full">Popular</span>}
                              <span className="text-xs text-green-400 font-medium">{service.price}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* AI Services */}
                    <div>
                      <h3 className="text-purple-400 font-bold mb-4 flex items-center text-lg">
                        <Brain className="w-5 h-5 mr-2" />
                        AI Services
                      </h3>
                      <div className="space-y-3">
                        {aiServices.slice(0, 8).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center justify-between group p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-3">
                              <service.icon className="w-4 h-4 text-purple-400" />
                              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{service.name}</span>
                            </div>
                            <span className="text-xs text-green-400 font-medium">{service.price}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* IT Services */}
                    <div>
                      <h3 className="text-blue-400 font-bold mb-4 flex items-center text-lg">
                        <Settings className="w-5 h-5 mr-2" />
                        IT Services
                      </h3>
                      <div className="space-y-3">
                        {itServices.slice(0, 8).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center justify-between group p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-3">
                              <service.icon className="w-4 h-4 text-blue-400" />
                              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{service.name}</span>
                            </div>
                            <span className="text-xs text-green-400 font-medium">{service.price}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Specialized Services */}
                    <div>
                      <h3 className="text-pink-400 font-bold mb-4 flex items-center text-lg">
                        <Sparkles className="w-5 h-5 mr-2" />
                        Specialized
                      </h3>
                      <div className="space-y-3">
                        {specializedServices.slice(0, 8).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center justify-between group p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-3">
                              <service.icon className="w-4 h-4 text-pink-400" />
                              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{service.name}</span>
                            </div>
                            <span className="text-xs text-green-400 font-medium">{service.price}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="grid grid-cols-3 gap-4">
                      <a
                        href="/services"
                        className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-white transition-colors bg-slate-800/50 py-3 px-4 rounded-lg hover:bg-slate-700/50"
                        onClick={closeAllMenus}
                      >
                        <span className="font-medium">View All Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="/pricing"
                        className="flex items-center justify-center space-x-2 text-purple-400 hover:text-white transition-colors bg-slate-800/50 py-3 px-4 rounded-lg hover:bg-slate-700/50"
                        onClick={closeAllMenus}
                      >
                        <DollarSign className="w-4 h-4" />
                        <span className="font-medium">Pricing Plans</span>
                      </a>
                      <a
                        href="/contact"
                        className="flex items-center justify-center space-x-2 text-pink-400 hover:text-white transition-colors bg-slate-800/50 py-3 px-4 rounded-lg hover:bg-slate-700/50"
                        onClick={closeAllMenus}
                      >
                        <span className="font-medium">Get Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="/about" className="text-white hover:text-cyan-400 transition-colors px-4 py-2 rounded-lg hover:bg-slate-800/50 font-medium">
              About
            </a>
            <a href="/blog" className="text-white hover:text-cyan-400 transition-colors px-4 py-2 rounded-lg hover:bg-slate-800/50 font-medium">
              Blog
            </a>
            <a href="/case-studies" className="text-white hover:text-cyan-400 transition-colors px-4 py-2 rounded-lg hover:bg-slate-800/50 font-medium">
              Case Studies
            </a>
            <a href="/pricing" className="text-white hover:text-cyan-400 transition-colors px-4 py-2 rounded-lg hover:bg-slate-800/50 font-medium">
              Pricing
            </a>
            <a href="/contact" className="text-white hover:text-cyan-400 transition-colors px-4 py-2 rounded-lg hover:bg-slate-800/50 font-medium">
              Contact
            </a>
            
            <div className="flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors bg-slate-800/50 px-4 py-2 rounded-lg hover:bg-slate-700/50"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline font-medium">+1 302 464 0950</span>
              </a>
              <a href="/contact"
                className="cyber-button px-6 py-2 text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-cyan-400/20 shadow-2xl">
            <div className="px-4 py-6 space-y-6">
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-slate-800/50"
                >
                  <span className="font-medium">Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
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
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-3 h-3 text-cyan-400" />
                              <span className="text-sm text-gray-300">{service.name}</span>
                            </div>
                            <span className="text-xs text-green-400">{service.price}</span>
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
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-3 h-3 text-purple-400" />
                              <span className="text-sm text-gray-300">{service.name}</span>
                            </div>
                            <span className="text-xs text-green-400">{service.price}</span>
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
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-3 h-3 text-blue-400" />
                              <span className="text-sm text-gray-300">{service.name}</span>
                            </div>
                            <span className="text-xs text-green-400">{service.price}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a href="/about" className="block text-white hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-slate-800/50 font-medium" onClick={closeAllMenus}>
                About
              </a>
              <a href="/blog" className="block text-white hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-slate-800/50 font-medium" onClick={closeAllMenus}>
                Blog
              </a>
              <a href="/case-studies" className="block text-white hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-slate-800/50 font-medium" onClick={closeAllMenus}>
                Case Studies
              </a>
              <a href="/pricing" className="block text-white hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-slate-800/50 font-medium" onClick={closeAllMenus}>
                Pricing
              </a>
              <a href="/contact" className="block text-white hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-slate-800/50 font-medium" onClick={closeAllMenus}>
                Contact
              </a>
              
              <div className="pt-4 border-t border-gray-700 space-y-4">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-3 text-cyan-400 hover:text-white transition-colors p-3 rounded-lg hover:bg-slate-800/50"
                >
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="font-medium">+1 302 464 0950</div>
                    <div className="text-xs text-gray-400">Call us now</div>
                  </div>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 text-purple-400 hover:text-white transition-colors p-3 rounded-lg hover:bg-slate-800/50"
                >
                  <Mail className="w-5 h-5" />
                  <div>
                    <div className="font-medium">kleber@ziontechgroup.com</div>
                    <div className="text-xs text-gray-400">Email us</div>
                  </div>
                </a>
                <a
                  href="/contact"
                  className="block w-full text-center cyber-button py-3 px-6 text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                  onClick={closeAllMenus}
                >
                  Get Started Today
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
