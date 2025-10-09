import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, MessageSquare, ShoppingCart, DollarSign, Heart, Mic, PenTool, Server, Briefcase, Atom, Link, Bot, Wifi } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const services = [
    {
      title: 'AI Services',
      icon: Brain,
      href: '/ai-services',
      description: 'Advanced AI solutions for your business',
      submenu: [
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart },
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageSquare },
        { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
        { name: 'AI CRM', href: '/ai-crm', icon: Users },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
        { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart },
        { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText },
        { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: ShoppingCart },
        { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail },
        { name: 'AI Fintech', href: '/ai-fintech', icon: DollarSign },
        { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart },
        { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target },
        { name: 'AI Marketing', href: '/ai-marketing', icon: TrendingUp },
        { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone },
        { name: 'AI Scheduler', href: '/ai-scheduler', icon: Calendar },
        { name: 'AI Voice Cloning', href: '/ai-voice-cloning', icon: Mic },
        { name: 'AI Writing Assistant', href: '/ai-writing-assistant', icon: PenTool },
      ]
    },
    {
      title: 'IT Services',
      icon: Code,
      href: '/it-services',
      description: 'Comprehensive IT solutions and support',
      submenu: [
        { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'DevOps', href: '/devops', icon: Settings },
        { name: 'Database Management', href: '/database', icon: Database },
        { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Server },
        { name: 'Networking', href: '/networking', icon: Globe },
        { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
        { name: 'Analytics Tools', href: '/analytics-tools', icon: TrendingUp },
        { name: 'Developer Tools', href: '/developer-tools', icon: Code },
        { name: 'Marketing Tools', href: '/marketing-tools', icon: Target },
      ]
    },
    {
      title: 'Micro SaaS',
      icon: Zap,
      href: '/micro-saas',
      description: 'Specialized software solutions',
      submenu: [
        { name: 'Business Apps', href: '/business-apps', icon: Briefcase },
        { name: 'Productivity Tools', href: '/productivity', icon: CheckSquare },
        { name: 'Task Manager Pro', href: '/task-manager-pro', icon: Calendar },
        { name: 'Expense Tracker', href: '/expense-tracker', icon: DollarSign },
        { name: 'Smart Analytics', href: '/smart-analytics', icon: BarChart },
      ]
    },
    {
      title: 'Advanced Tech',
      icon: Cpu,
      href: '/advanced-tech',
      description: 'Cutting-edge technology solutions',
      submenu: [
        { name: 'Quantum Computing', href: '/quantum-computing', icon: Atom },
        { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Link },
        { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Bot },
        { name: 'IoT Edge Computing', href: '/iot-edge-computing', icon: Wifi },
        { name: 'Robotics', href: '/robotics', icon: Bot },
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {services.map((service) => (
              <div key={service.title} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                  onMouseEnter={() => setServicesOpen(service.title)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <service.icon className="w-4 h-4" />
                  <span>{service.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                {servicesOpen === service.title && (
                  <div
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                    onMouseEnter={() => setServicesOpen(service.title)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-1 px-2">
                      {service.submenu.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-150"
                          onClick={closeAllMenus}
                        >
                          <item.icon className="w-4 h-4 text-blue-600" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Contact
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Pricing
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+1-302-464-0950"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1-302-464-0950</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {services.map((service) => (
                <div key={service.title}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-md"
                    onClick={() => setServicesOpen(servicesOpen === service.title ? false : service.title)}
                  >
                    <div className="flex items-center space-x-2">
                      <service.icon className="w-4 h-4" />
                      <span>{service.title}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen === service.title ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {servicesOpen === service.title && (
                    <div className="pl-6 space-y-1">
                      {service.submenu.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                          onClick={closeAllMenus}
                        >
                          <item.icon className="w-3 h-3" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>
              
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:+1-302-464-0950"
                  className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1-302-464-0950</span>
                </a>
                <Link
                  to="/contact"
                  className="block w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-center font-medium"
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