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
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Settings className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-cyan-500/20 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Services
                      </h3>
                      <div className="space-y-2">
                        <Link to="/ai-services" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                          All AI Services
                        </Link>
                        <Link to="/ai-analytics" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                          AI Analytics
                        </Link>
                        <Link to="/ai-automation" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                          AI Automation
                        </Link>
                        <Link to="/ai-chatbot-builder" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                          AI Chatbot
                        </Link>
                        <Link to="/ai-cybersecurity" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                          AI Cybersecurity
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        <Cloud className="w-4 h-4 mr-2" />
                        IT Services
                      </h3>
                      <div className="space-y-2">
                        <Link to="/it-services" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                          All IT Services
                        </Link>
                        <Link to="/cloud-infrastructure" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                          Cloud Infrastructure
                        </Link>
                        <Link to="/cybersecurity-solutions" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                          Cybersecurity
                        </Link>
                        <Link to="/web-development" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                          Web Development
                        </Link>
                        <Link to="/mobile-development" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                          Mobile Development
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Users className="w-4 h-4" />
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-cyan-500/20 p-6">
                  <div className="space-y-3">
                    <Link to="/about" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors">
                      <Users className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">About Us</div>
                        <div className="text-sm text-gray-400">Our story and mission</div>
                      </div>
                    </Link>
                    <Link to="/team" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors">
                      <Users className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">Our Team</div>
                        <div className="text-sm text-gray-400">Meet the experts</div>
                      </div>
                    </Link>
                    <Link to="/careers" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors">
                      <Target className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">Careers</div>
                        <div className="text-sm text-gray-400">Join our team</div>
                      </div>
                    </Link>
                    <Link to="/case-studies" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors">
                      <BarChart className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white">Case Studies</div>
                        <div className="text-sm text-gray-400">Success stories</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
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
                to="/services"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/team"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Team
              </Link>
              <Link
                to="/careers"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Careers
              </Link>
              <Link
                to="/case-studies"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Blog
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