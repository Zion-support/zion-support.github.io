import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

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
    { name: 'AI Project Manager Pro', href: '/ai-project-manager', icon: BarChart, price: '$199/mo', popular: true },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare, price: '$149/mo', popular: true },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart3, price: '$299/mo', popular: true },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail, price: '$199/mo', popular: true },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot, price: '$249/mo', popular: true },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code, price: '$179/mo', popular: false },
    { name: 'AI Content Generator', href: '/ai-content-generation', icon: FileText, price: '$149/mo', popular: true },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, price: '$299/mo', popular: true },
    { name: 'AI Document Processor', href: '/ai-document-processing', icon: FileText, price: '$179/mo', popular: false },
    { name: 'AI SEO Optimizer Pro', href: '/ai-seo-optimizer', icon: Search, price: '$199/mo', popular: true },
    { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: ShoppingCart, price: '$399/mo', popular: true },
    { name: 'AI Financial Analyzer', href: '/ai-financial-analyzer', icon: Calculator, price: '$279/mo', popular: false },
    { name: 'AI Healthcare Assistant', href: '/ai-healthcare', icon: Heart, price: '$449/mo', popular: true },
    { name: 'AI Mobile App Builder', href: '/ai-mobile-app-development', icon: Smartphone, price: '$399/mo', popular: true },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings, price: '$329/mo', popular: true },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart3, price: '$229/mo', popular: false }
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain, price: '$2,500/mo', popular: true },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageSquare, price: '$1,800/mo', popular: true },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye, price: '$2,200/mo', popular: true },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, price: '$1,900/mo', popular: true },
    { name: 'Quantum AI Computing', href: '/quantum-ai', icon: Cpu, price: 'Custom', popular: false },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, price: '$2,999/mo', popular: true },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings, price: '$3,500/mo', popular: true },
    { name: 'AI Consulting', href: '/ai-consulting', icon: Users, price: '$2,000/mo', popular: true }
  ];

  const itServices = [
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud, price: '$1,999/mo', popular: true },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, price: '$2,499/mo', popular: true },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, price: '$1,799/mo', popular: true },
    { name: 'Database Services', href: '/database-services', icon: Database, price: '$1,299/mo', popular: true },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe, price: '$1,599/mo', popular: true },
    { name: 'IT Support & Helpdesk', href: '/it-support', icon: Users, price: '$1,199/mo', popular: true },
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock, price: '$2,999/mo', popular: true },
    { name: 'IoT & Edge Computing', href: '/iot-edge', icon: Globe, price: '$2,199/mo', popular: true }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, price: 'Custom', popular: false },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings, price: '$3,500/mo', popular: true },
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock, price: '$2,999/mo', popular: true },
    { name: 'IoT & Edge Computing', href: '/iot-edge', icon: Globe, price: '$2,199/mo', popular: true },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, price: '$1,799/mo', popular: true },
    { name: 'Robotics Solutions', href: '/robotics', icon: Settings, price: 'Custom', popular: false },
    { name: 'AR/VR Solutions', href: '/ar-vr', icon: Eye, price: '$2,499/mo', popular: true },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: Zap, price: '$2,999/mo', popular: true }
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
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center justify-between group text-sm text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded hover:bg-slate-800/50"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-3 h-3" />
                              <span>{service.name}</span>
                              {service.popular && (
                                <span className="text-xs bg-cyan-400 text-slate-900 px-1.5 py-0.5 rounded-full font-medium">
                                  Popular
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-cyan-400 font-medium">{service.price}</span>
                          </Link>
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
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center justify-between group text-sm text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded hover:bg-slate-800/50"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-3 h-3" />
                              <span>{service.name}</span>
                              {service.popular && (
                                <span className="text-xs bg-purple-400 text-slate-900 px-1.5 py-0.5 rounded-full font-medium">
                                  Popular
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-purple-400 font-medium">{service.price}</span>
                          </Link>
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
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center justify-between group text-sm text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded hover:bg-slate-800/50"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-3 h-3" />
                              <span>{service.name}</span>
                              {service.popular && (
                                <span className="text-xs bg-blue-400 text-slate-900 px-1.5 py-0.5 rounded-full font-medium">
                                  Popular
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-blue-400 font-medium">{service.price}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        to="/services"
                        className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to="/specialized-services"
                        className="flex items-center justify-center space-x-2 text-purple-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>Specialized Solutions</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link to="/case-studies" className="text-white hover:text-cyan-400 transition-colors">
              Case Studies
            </Link>
            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors">
              Pricing
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
              <Link
                to="/contact"
                className="cyber-button px-4 py-2 text-sm"
              >
                Get Started
              </Link>
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
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">AI Services</h4>
                      <div className="space-y-2">
                        {aiServices.slice(0, 4).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Link
                      to="/services"
                      className="block text-cyan-400 hover:text-white transition-colors"
                      onClick={closeAllMenus}
                    >
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/about" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                About
              </Link>
              <Link to="/blog" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Blog
              </Link>
              <Link to="/case-studies" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Case Studies
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
                <Link
                  to="/contact"
                  className="block cyber-button px-4 py-2 text-center"
                  onClick={closeAllMenus}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;