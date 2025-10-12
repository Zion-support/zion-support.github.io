'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  const toggleAiServices = useCallback(() => {
    setAiServicesOpen(!aiServicesOpen);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [aiServicesOpen]);

  const toggleItServices = useCallback(() => {
    setItServicesOpen(!itServicesOpen);
    setAiServicesOpen(false);
    setMicroSaasOpen(false);
  }, [itServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setMicroSaasOpen(!microSaasOpen);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  }, [microSaasOpen]);

  const closeAllMenus = useCallback(() => {
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={closeAllMenus}
            >
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-xl p-6">
                  <div className="grid grid-cols-1 gap-3">
                    <Link to="/ai-analytics" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors" onClick={closeAllMenus}>
                      <BarChart className="w-4 h-4 text-cyan-400" />
                      <span className="text-white">AI Analytics</span>
                    </Link>
                    <Link to="/ai-automation" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors" onClick={closeAllMenus}>
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span className="text-white">AI Automation</span>
                    </Link>
                    <Link to="/ai-chatbot-builder" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors" onClick={closeAllMenus}>
                      <Users className="w-4 h-4 text-cyan-400" />
                      <span className="text-white">AI Chatbot Builder</span>
                    </Link>
                    <Link to="/ai-cybersecurity" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors" onClick={closeAllMenus}>
                      <Shield className="w-4 h-4 text-cyan-400" />
                      <span className="text-white">AI Cybersecurity</span>
                    </Link>
                    <Link to="/ai-services" className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 transition-all group" onClick={closeAllMenus}>
                      <span className="text-cyan-400 font-medium">View All AI Services</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-xl p-6">
                  <div className="grid grid-cols-1 gap-3">
                    <Link to="/cloud-infrastructure" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors" onClick={closeAllMenus}>
                      <Cloud className="w-4 h-4 text-green-400" />
                      <span className="text-white">Cloud Infrastructure</span>
                    </Link>
                    <Link to="/cybersecurity-solutions" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors" onClick={closeAllMenus}>
                      <Shield className="w-4 h-4 text-green-400" />
                      <span className="text-white">Cybersecurity Solutions</span>
                    </Link>
                    <Link to="/web-development" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors" onClick={closeAllMenus}>
                      <Code className="w-4 h-4 text-green-400" />
                      <span className="text-white">Web Development</span>
                    </Link>
                    <Link to="/mobile-development" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors" onClick={closeAllMenus}>
                      <Users className="w-4 h-4 text-green-400" />
                      <span className="text-white">Mobile Development</span>
                    </Link>
                    <Link to="/it-services" className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 transition-all group" onClick={closeAllMenus}>
                      <span className="text-green-400 font-medium">View All IT Services</span>
                      <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-xl p-6">
                  <div className="grid grid-cols-1 gap-3">
                    <Link to="/zion-analytics-pro" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors" onClick={closeAllMenus}>
                      <BarChart className="w-4 h-4 text-purple-400" />
                      <span className="text-white">Zion Analytics Pro</span>
                    </Link>
                    <Link to="/zion-chat-ai" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors" onClick={closeAllMenus}>
                      <Users className="w-4 h-4 text-purple-400" />
                      <span className="text-white">Zion Chat AI</span>
                    </Link>
                    <Link to="/zion-security-shield" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors" onClick={closeAllMenus}>
                      <Shield className="w-4 h-4 text-purple-400" />
                      <span className="text-white">Zion Security Shield</span>
                    </Link>
                    <Link to="/zion-cloud-vault" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors" onClick={closeAllMenus}>
                      <Cloud className="w-4 h-4 text-purple-400" />
                      <span className="text-white">Zion Cloud Vault</span>
                    </Link>
                    <Link to="/micro-saas" className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all group" onClick={closeAllMenus}>
                      <span className="text-purple-400 font-medium">View All Micro SAAS</span>
                      <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-md border border-gray-700/50 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                IT Services
              </Link>
              <Link
                to="/micro-saas"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Micro SAAS
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 mt-4"
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
