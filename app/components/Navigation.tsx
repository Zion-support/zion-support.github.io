'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart, Home, Info, Contact, Briefcase, BookOpen, Users2, Lightbulb, Rocket, Star, Award, Zap as ZapIcon } from 'lucide-react';

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
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 text-white font-bold text-xl group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <span className="text-xs text-gray-400 font-normal">AI & IT Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium group">
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Home</span>
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium group"
              >
                <Brain className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-500/20 p-6 animate-in slide-in-from-top-2 duration-300">
                  <div className="grid grid-cols-2 gap-4">
                    <Link to="/ai-analytics" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <BarChart className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">AI Analytics</div>
                        <div className="text-sm text-gray-400">Advanced data insights</div>
                      </div>
                    </Link>
                    <Link to="/ai-automation" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <Zap className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">AI Automation</div>
                        <div className="text-sm text-gray-400">Streamline workflows</div>
                      </div>
                    </Link>
                    <Link to="/ai-chatbot-builder" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <MessageCircle className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">AI Chatbot</div>
                        <div className="text-sm text-gray-400">Intelligent conversations</div>
                      </div>
                    </Link>
                    <Link to="/ai-cybersecurity" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">AI Cybersecurity</div>
                        <div className="text-sm text-gray-400">Advanced threat protection</div>
                      </div>
                    </Link>
                    <Link to="/ai-computer-vision" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <Eye className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">Computer Vision</div>
                        <div className="text-sm text-gray-400">Image & video analysis</div>
                      </div>
                    </Link>
                    <Link to="/ai-content-generation" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <FileText className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">Content Generation</div>
                        <div className="text-sm text-gray-400">AI-powered content</div>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-6 pt-4 border-t border-cyan-500/20">
                    <Link
                      to="/ai-services"
                      className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group"
                      onClick={closeAllMenus}
                    >
                      View All AI Services
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium group"
              >
                <Cloud className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-500/20 p-6 animate-in slide-in-from-top-2 duration-300">
                  <div className="grid grid-cols-2 gap-4">
                    <Link to="/cloud-infrastructure" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <Cloud className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">Cloud Infrastructure</div>
                        <div className="text-sm text-gray-400">Scalable cloud solutions</div>
                      </div>
                    </Link>
                    <Link to="/cybersecurity-solutions" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">Cybersecurity</div>
                        <div className="text-sm text-gray-400">Comprehensive security</div>
                      </div>
                    </Link>
                    <Link to="/web-development" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <Globe className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">Web Development</div>
                        <div className="text-sm text-gray-400">Modern web applications</div>
                      </div>
                    </Link>
                    <Link to="/mobile-development" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <Smartphone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">Mobile Development</div>
                        <div className="text-sm text-gray-400">iOS & Android apps</div>
                      </div>
                    </Link>
                    <Link to="/devops-cicd" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <Settings className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">DevOps & CI/CD</div>
                        <div className="text-sm text-gray-400">Automated deployment</div>
                      </div>
                    </Link>
                    <Link to="/database-management" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <Database className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">Database Management</div>
                        <div className="text-sm text-gray-400">Expert database solutions</div>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-6 pt-4 border-t border-cyan-500/20">
                    <Link
                      to="/it-services"
                      className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group"
                      onClick={closeAllMenus}
                    >
                      View All IT Services
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SaaS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium group"
              >
                <Rocket className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Micro SaaS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-500/20 p-6 animate-in slide-in-from-top-2 duration-300">
                  <div className="grid grid-cols-2 gap-4">
                    <Link to="/zion-analytics-pro" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <BarChart className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">Analytics Pro</div>
                        <div className="text-sm text-gray-400">Business intelligence</div>
                      </div>
                    </Link>
                    <Link to="/zion-chat-ai" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <MessageCircle className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">Chat AI</div>
                        <div className="text-sm text-gray-400">Customer support</div>
                      </div>
                    </Link>
                    <Link to="/zion-invoice-genius" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <FileText className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">Invoice Genius</div>
                        <div className="text-sm text-gray-400">AI-powered billing</div>
                      </div>
                    </Link>
                    <Link to="/zion-lead-magnet" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <Target className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">Lead Magnet</div>
                        <div className="text-sm text-gray-400">Lead generation</div>
                      </div>
                    </Link>
                    <Link to="/zion-security-shield" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">Security Shield</div>
                        <div className="text-sm text-gray-400">Cybersecurity monitoring</div>
                      </div>
                    </Link>
                    <Link to="/zion-cloud-vault" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group">
                      <Cloud className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-white">Cloud Vault</div>
                        <div className="text-sm text-gray-400">Data backup & recovery</div>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-6 pt-4 border-t border-cyan-500/20">
                    <Link
                      to="/micro-saas"
                      className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group"
                      onClick={closeAllMenus}
                    >
                      View All Micro SaaS
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium group">
              <Info className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium group">
              <Contact className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Contact</span>
            </Link>
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 group"
            >
              <span className="flex items-center space-x-2">
                <Rocket className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Get Started</span>
              </span>
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
            <div className="px-4 pt-4 pb-6 space-y-2 bg-slate-800/95 backdrop-blur-lg rounded-2xl mt-4 border border-cyan-500/20 shadow-2xl">
              <Link
                to="/"
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 font-medium rounded-xl group"
                onClick={closeAllMenus}
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Home</span>
              </Link>
              <Link
                to="/ai-services"
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 font-medium rounded-xl group"
                onClick={closeAllMenus}
              >
                <Brain className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>AI Services</span>
              </Link>
              <Link
                to="/it-services"
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 font-medium rounded-xl group"
                onClick={closeAllMenus}
              >
                <Cloud className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>IT Services</span>
              </Link>
              <Link
                to="/micro-saas"
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 font-medium rounded-xl group"
                onClick={closeAllMenus}
              >
                <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Micro SaaS</span>
              </Link>
              <Link
                to="/about"
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 font-medium rounded-xl group"
                onClick={closeAllMenus}
              >
                <Info className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>About</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 font-medium rounded-xl group"
                onClick={closeAllMenus}
              >
                <Contact className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Contact</span>
              </Link>
              <div className="pt-4 border-t border-cyan-500/20">
                <Link
                  to="/contact"
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 group"
                  onClick={closeAllMenus}
                >
                  <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Get Started</span>
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