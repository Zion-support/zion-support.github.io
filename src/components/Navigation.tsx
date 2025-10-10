import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, TrendingUp, DollarSign } from 'lucide-react';

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

  const microSAASServices = [
    // Productivity & Management
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: BarChart, category: 'Productivity' },
    { name: 'AI Task Manager Pro', href: '/task-manager-pro', icon: Check, category: 'Productivity' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings, category: 'Productivity' },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar, category: 'Productivity' },
    
    // Content & Marketing
    { name: 'AI Writing Assistant', href: '/ai-writing-assistant', icon: FileText, category: 'Content' },
    { name: 'AI Content Generator', href: '/ai-content-generation', icon: FileText, category: 'Content' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare, category: 'Marketing' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail, category: 'Marketing' },
    { name: 'AI Marketing Automation', href: '/ai-marketing', icon: Target, category: 'Marketing' },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search, category: 'Marketing' },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, category: 'Marketing' },
    
    // Business & Finance
    { name: 'AI CRM Intelligence', href: '/ai-crm', icon: Users, category: 'Business' },
    { name: 'AI Fintech Analyzer', href: '/ai-fintech', icon: CreditCard, category: 'Finance' },
    { name: 'AI Financial Analyzer', href: '/ai-financial-analyzer', icon: Calculator, category: 'Finance' },
    { name: 'AI Expense Tracker', href: '/expense-tracker', icon: Calculator, category: 'Finance' },
    { name: 'AI E-commerce Assistant', href: '/ai-ecommerce-solutions', icon: ShoppingCart, category: 'Business' },
    
    // Customer Service
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot, category: 'Support' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Bot, category: 'Support' },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail, category: 'Support' },
    
    // Development & Technical
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code, category: 'Development' },
    { name: 'AI Mobile App Builder', href: '/ai-mobile-app-development', icon: Smartphone, category: 'Development' },
    { name: 'AI Cybersecurity Shield', href: '/ai-cybersecurity', icon: Shield, category: 'Security' },
    { name: 'AI Document Processor', href: '/ai-document-processing', icon: FileText, category: 'Development' },
    
    // Analytics & Data
    { name: 'AI Data Analytics Pro', href: '/ai-data-analytics', icon: BarChart3, category: 'Analytics' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart, category: 'Analytics' },
    
    // Creative & Media
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video, category: 'Creative' },
    { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning', icon: Music, category: 'Creative' },
    { name: 'AI Music Composer', href: '/ai-music-composition', icon: Music, category: 'Creative' },
    { name: 'AI Fashion Designer', href: '/ai-fashion-design', icon: Palette, category: 'Creative' },
    { name: 'AI 3D Generation Studio', href: '/ai-3d-generation', icon: Camera, category: 'Creative' },
    
    // Health & Wellness
    { name: 'AI Healthcare Assistant', href: '/ai-healthcare', icon: Heart, category: 'Health' },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Heart, category: 'Health' },
    
    // Sales & Business
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target, category: 'Sales' }
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain },
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', icon: Settings },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Bot },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart3 },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target },
    { name: 'AI Mobile Development', href: '/ai-mobile-app-development', icon: Smartphone },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings },
    { name: 'AI Solutions', href: '/ai-solutions', icon: Brain }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Data Management', href: '/data-management', icon: Database },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
    { name: 'DevOps', href: '/devops', icon: Settings },
    { name: 'IT Consulting', href: '/it-consulting', icon: Users },
    { name: 'System Integration', href: '/system-integration', icon: Settings }
  ];

  const specializedServices = [
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building },
    { name: 'E-commerce Solutions', href: '/ecommerce-solutions', icon: ShoppingCart },
    { name: 'Healthcare IT', href: '/healthcare-it', icon: Heart },
    { name: 'Financial Services', href: '/financial-services', icon: CreditCard },
    { name: 'Education Technology', href: '/education-technology', icon: GraduationCap },
    { name: 'Manufacturing', href: '/manufacturing', icon: Factory },
    { name: 'Retail Technology', href: '/retail-technology', icon: ShoppingCart },
    { name: 'Transportation', href: '/transportation', icon: Truck }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Services Mega Menu */}
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 w-screen max-w-6xl bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700 p-6"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
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
                                <Link key={service.name}
                                  to={service.href}
                                  className="flex items-center space-x-2 text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                                  onClick={closeAllMenus}
                                >
                                  <service.icon className="w-3 h-3" />
                                  <span>{service.name}</span>
                                </Link>
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
                          <Link key={service.name}
                            to={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
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
                        {itServices.slice(0, 8).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        Specialized
                      </h3>
                      <div className="space-y-2">
                        {specializedServices.slice(0, 8).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Team
            </Link>
            
            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Case Studies
            </Link>
            
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            
            <Link to="/sitemap" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Sitemap
            </Link>
            
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 p-4 space-y-4">
            <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
              Home
            </Link>
            <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
              About
            </Link>
            
            {/* Mobile Services */}
            <div className="space-y-2">
              <div className="text-cyan-400 font-semibold">Services</div>
              <div className="pl-4 space-y-2">
                <div className="text-purple-400 text-sm font-medium">Micro SAAS</div>
                {microSAASServices.slice(0, 6).map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors pl-4"
                    onClick={closeAllMenus}
                  >
                    {service.name}
                  </Link>
                ))}
                
                <div className="text-purple-400 text-sm font-medium mt-4">AI Services</div>
                {aiServices.slice(0, 6).map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors pl-4"
                    onClick={closeAllMenus}
                  >
                    {service.name}
                  </Link>
                ))}
                
                <div className="text-purple-400 text-sm font-medium mt-4">IT Services</div>
                {itServices.slice(0, 6).map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors pl-4"
                    onClick={closeAllMenus}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/team" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
              Team
            </Link>
            <Link to="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
              Case Studies
            </Link>
            <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
              Blog
            </Link>
            <Link to="/sitemap" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
              Sitemap
            </Link>
            <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
              Contact
            </Link>
            
            <Link
              to="/contact"
              className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;