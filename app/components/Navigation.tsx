'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart } from 'lucide-react';

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

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setServicesOpen(!servicesOpen);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [servicesOpen]);

  const toggleAiServices = useCallback(() => {
    setAiServicesOpen(!aiServicesOpen);
    setServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [aiServicesOpen]);

  const toggleItServices = useCallback(() => {
    setItServicesOpen(!itServicesOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setMicroSaasOpen(false);
  }, [itServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setMicroSaasOpen(!microSaasOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  }, [microSaasOpen]);

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow flex items-center">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-lg rounded-xl border border-cyan-500/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Services
                      </h3>
                      <div className="space-y-2">
                        <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1">
                          AI Solutions
                        </Link>
                        <Link to="/ai-services/chatbots" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1">
                          AI Chatbots
                        </Link>
                        <Link to="/ai-services/analytics" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1">
                          AI Analytics
                        </Link>
                        <Link to="/ai-services/automation" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1">
                          AI Automation
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Cloud className="w-4 h-4 mr-2" />
                        IT Services
                      </h3>
                      <div className="space-y-2">
                        <Link to="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1">
                          IT Solutions
                        </Link>
                        <Link to="/it-services/cloud" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1">
                          Cloud Migration
                        </Link>
                        <Link to="/it-services/cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1">
                          Cybersecurity
                        </Link>
                        <Link to="/it-services/development" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1">
                          Development
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Package className="w-4 h-4 mr-2" />
                        Micro SAAS
                      </h3>
                      <div className="space-y-2">
                        <Link to="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1">
                          SAAS Solutions
                        </Link>
                        <Link to="/micro-saas/analytics-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1">
                          Analytics Pro
                        </Link>
                        <Link to="/micro-saas/chat-ai" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1">
                          Chat AI
                        </Link>
                        <Link to="/micro-saas/invoice-genius" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1">
                          Invoice Genius
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow">
              Pricing
            </Link>
            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow">
              Case Studies
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow">
              Blog
            </Link>
            <Link to="/tutorials" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow">
              Tutorials
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow">
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow" onClick={closeAllMenus}>
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow" onClick={closeAllMenus}>
                About
              </Link>
              
              {/* Mobile Services Section */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Services</div>
                <div className="pl-4 space-y-2">
                  <div className="text-gray-400 text-sm font-medium">AI Services</div>
                  <div className="pl-4 space-y-1">
                    <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm" onClick={closeAllMenus}>
                      AI Solutions
                    </Link>
                    <Link to="/ai-services/chatbots" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm" onClick={closeAllMenus}>
                      AI Chatbots
                    </Link>
                    <Link to="/ai-services/analytics" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm" onClick={closeAllMenus}>
                      AI Analytics
                    </Link>
                    <Link to="/ai-services/automation" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm" onClick={closeAllMenus}>
                      AI Automation
                    </Link>
                  </div>
                  
                  <div className="text-gray-400 text-sm font-medium mt-3">IT Services</div>
                  <div className="pl-4 space-y-1">
                    <Link to="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm" onClick={closeAllMenus}>
                      IT Solutions
                    </Link>
                    <Link to="/it-services/cloud" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm" onClick={closeAllMenus}>
                      Cloud Migration
                    </Link>
                    <Link to="/it-services/cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm" onClick={closeAllMenus}>
                      Cybersecurity
                    </Link>
                    <Link to="/it-services/development" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm" onClick={closeAllMenus}>
                      Development
                    </Link>
                  </div>
                  
                  <div className="text-gray-400 text-sm font-medium mt-3">Micro SAAS</div>
                  <div className="pl-4 space-y-1">
                    <Link to="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm" onClick={closeAllMenus}>
                      SAAS Solutions
                    </Link>
                    <Link to="/micro-saas/analytics-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm" onClick={closeAllMenus}>
                      Analytics Pro
                    </Link>
                    <Link to="/micro-saas/chat-ai" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm" onClick={closeAllMenus}>
                      Chat AI
                    </Link>
                    <Link to="/micro-saas/invoice-genius" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm" onClick={closeAllMenus}>
                      Invoice Genius
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link to="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow" onClick={closeAllMenus}>
                Pricing
              </Link>
              <Link to="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow" onClick={closeAllMenus}>
                Case Studies
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow" onClick={closeAllMenus}>
                Blog
              </Link>
              <Link to="/tutorials" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow" onClick={closeAllMenus}>
                Tutorials
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow" onClick={closeAllMenus}>
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
