'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart, Sync, Magnet, Briefcase } from 'lucide-react';

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

  const closeAllMenus = useCallback(() => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  }, []);

  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen);
  const toggleItServices = () => setItServicesOpen(!itServicesOpen);
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen);

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', icon: Workflow },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageCircle },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI CRM', href: '/ai-crm', icon: Users },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
    { name: 'API Development', href: '/api-development', icon: LinkIcon },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'DevOps CI/CD', href: '/devops-cicd', icon: Settings },
    { name: 'IT Support', href: '/it-support', icon: Monitor },
    { name: 'Data Analytics BI', href: '/data-analytics-bi', icon: BarChart },
    { name: 'Custom Software', href: '/custom-software', icon: Code }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Sync },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Magnet },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: Briefcase },
    { name: 'Zion Email Automation', href: '/zion-email-automation', icon: Mail }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={closeAllMenus}>
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Zion Tech Group</span>
              <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
              About
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-xl shadow-xl overflow-hidden">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {aiServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 group"
                          onClick={closeAllMenus}
                        >
                          <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                          <span className="text-gray-300 group-hover:text-white font-medium">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <Link
                        to="/ai-services"
                        className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        onClick={closeAllMenus}
                      >
                        View All AI Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-xl shadow-xl overflow-hidden">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {itServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 group"
                          onClick={closeAllMenus}
                        >
                          <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                          <span className="text-gray-300 group-hover:text-white font-medium">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <Link
                        to="/it-services"
                        className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        onClick={closeAllMenus}
                      >
                        View All IT Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Zap className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-xl shadow-xl overflow-hidden">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {microSaasServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 group"
                          onClick={closeAllMenus}
                        >
                          <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                          <span className="text-gray-300 group-hover:text-white font-medium">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <Link
                        to="/micro-saas"
                        className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        onClick={closeAllMenus}
                      >
                        View All Micro SAAS
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
              Contact
            </Link>
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
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
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                IT Services
              </Link>
              <Link
                to="/micro-saas"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Micro SAAS
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
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
