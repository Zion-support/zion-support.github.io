'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart } from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span>Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-cyan-500/20 p-6">
                  <div className="grid grid-cols-1 gap-3">
                    <Link to="/ai-analytics" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors">
                      <BarChart className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">AI Analytics</div>
                        <div className="text-sm text-gray-400">Advanced data insights</div>
                      </div>
                    </Link>
                    <Link to="/ai-automation" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors">
                      <Zap className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">AI Automation</div>
                        <div className="text-sm text-gray-400">Streamline workflows</div>
                      </div>
                    </Link>
                    <Link to="/ai-chatbot-builder" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors">
                      <MessageCircle className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">AI Chatbot</div>
                        <div className="text-sm text-gray-400">Intelligent conversations</div>
                      </div>
                    </Link>
                    <Link to="/ai-cybersecurity" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors">
                      <Shield className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">AI Cybersecurity</div>
                        <div className="text-sm text-gray-400">Advanced threat protection</div>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-4 pt-4 border-t border-cyan-500/20">
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
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-cyan-500/20 p-6">
                  <div className="grid grid-cols-1 gap-3">
                    <Link to="/cloud-infrastructure" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors">
                      <Cloud className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">Cloud Infrastructure</div>
                        <div className="text-sm text-gray-400">Scalable cloud solutions</div>
                      </div>
                    </Link>
                    <Link to="/cybersecurity-solutions" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors">
                      <Shield className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">Cybersecurity</div>
                        <div className="text-sm text-gray-400">Comprehensive security</div>
                      </div>
                    </Link>
                    <Link to="/web-development" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors">
                      <Globe className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">Web Development</div>
                        <div className="text-sm text-gray-400">Modern web applications</div>
                      </div>
                    </Link>
                    <Link to="/mobile-development" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors">
                      <Smartphone className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">Mobile Development</div>
                        <div className="text-sm text-gray-400">iOS & Android apps</div>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-4 pt-4 border-t border-cyan-500/20">
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
              )}
            </div>

            {/* Micro SaaS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Code className="w-4 h-4" />
                <span>Micro SaaS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-cyan-500/20 p-6">
                  <div className="grid grid-cols-1 gap-3">
                    <Link to="/micro-saas" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors">
                      <BarChart className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">Analytics Tools</div>
                        <div className="text-sm text-gray-400">Business intelligence</div>
                      </div>
                    </Link>
                    <Link to="/micro-saas" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors">
                      <MessageCircle className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">Customer Service</div>
                        <div className="text-sm text-gray-400">AI-powered support</div>
                      </div>
                    </Link>
                    <Link to="/micro-saas" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors">
                      <Shield className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">Security Tools</div>
                        <div className="text-sm text-gray-400">Cybersecurity solutions</div>
                      </div>
                    </Link>
                    <Link to="/micro-saas" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors">
                      <Target className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">Marketing Tools</div>
                        <div className="text-sm text-gray-400">Lead generation & automation</div>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-4 pt-4 border-t border-cyan-500/20">
                    <Link
                      to="/micro-saas"
                      className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      onClick={closeAllMenus}
                    >
                      View All Micro SaaS
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-lg rounded-lg mt-2 border border-cyan-500/20">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Home
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
                Micro SaaS
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center mt-4"
                onClick={closeAllMenus}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;