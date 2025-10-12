'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Wifi, Users, BarChart3, Settings, Mail, MessageSquare, FileText, Receipt, Video, Mic, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen);
  const toggleItServices = () => setItServicesOpen(!itServicesOpen);
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      description: 'Advanced AI solutions',
      submenu: [
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageSquare },
        { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart3 },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Mic },
        { name: 'AI Automation', href: '/ai-automation', icon: Settings },
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Cloud,
      description: 'Complete IT solutions',
      submenu: [
        { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield },
        { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings },
        { name: 'Data Analytics', href: '/data-analytics', icon: BarChart3 },
        { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
        { name: 'Web Development', href: '/web-development', icon: Code },
      ]
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas',
      icon: Zap,
      description: 'Ready-to-use SaaS solutions',
      submenu: [
        { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart3 },
        { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageSquare },
        { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
        { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud },
        { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText },
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span>Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Zap className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700/50 p-4">
                  <div className="grid grid-cols-1 gap-4">
                    {services.map((service, index) => (
                      <div key={index} className="group">
                        <Link
                          to={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                          onClick={closeAllMenus}
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                            <service.icon className="w-5 h-5 text-cyan-400" />
                          </div>
                          <div>
                            <div className="text-white font-medium">{service.title}</div>
                            <div className="text-gray-400 text-sm">{service.description}</div>
                          </div>
                        </Link>
                        <div className="ml-13 mt-2 space-y-1">
                          {service.submenu.slice(0, 3).map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              to={item.href}
                              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
                              onClick={closeAllMenus}
                            >
                              <item.icon className="w-3 h-3" />
                              <span>{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-gray-700/50">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-gray-400 font-medium text-sm">Services</div>
                {services.map((service, index) => (
                  <div key={index}>
                    <Link
                      to={service.href}
                      className="block px-6 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      onClick={closeAllMenus}
                    >
                      {service.title}
                    </Link>
                    <div className="ml-6 space-y-1">
                      {service.submenu.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.href}
                          className="block px-3 py-1 text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
                          onClick={closeAllMenus}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>
              
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
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