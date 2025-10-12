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
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' 
        : 'bg-transparent'
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
            <Link 
              to="/" 
              className="text-white hover:text-cyan-400 transition-colors font-medium"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors font-medium"
              onClick={closeAllMenus}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={toggleServices}
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-xl shadow-lg shadow-cyan-500/10 p-6">
                  <div className="grid grid-cols-1 gap-4">
                    <Link 
                      to="/ai-services" 
                      className="flex items-center p-3 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                      onClick={closeAllMenus}
                    >
                      <Brain className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-white font-medium">AI Services</div>
                        <div className="text-gray-400 text-sm">Artificial Intelligence Solutions</div>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/it-services" 
                      className="flex items-center p-3 rounded-lg hover:bg-purple-500/10 transition-colors group"
                      onClick={closeAllMenus}
                    >
                      <Cloud className="w-5 h-5 text-purple-400 mr-3 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-white font-medium">IT Services</div>
                        <div className="text-gray-400 text-sm">Technology Infrastructure</div>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/micro-saas" 
                      className="flex items-center p-3 rounded-lg hover:bg-green-500/10 transition-colors group"
                      onClick={closeAllMenus}
                    >
                      <Code className="w-5 h-5 text-green-400 mr-3 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-white font-medium">Micro SAAS</div>
                        <div className="text-gray-400 text-sm">Software as a Service</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className="text-white hover:text-cyan-400 transition-colors font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            <Link 
              to="/blog" 
              className="text-white hover:text-cyan-400 transition-colors font-medium"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden mobile-menu bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
          <div className="px-4 py-6 space-y-4">
            <Link 
              to="/" 
              className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
              onClick={closeAllMenus}
            >
              About
            </Link>

            <div className="space-y-2">
              <button 
                className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={toggleServices}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/ai-services" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
                    onClick={closeAllMenus}
                  >
                    AI Services
                  </Link>
                  <Link 
                    to="/it-services" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
                    onClick={closeAllMenus}
                  >
                    IT Services
                  </Link>
                  <Link 
                    to="/micro-saas" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
                    onClick={closeAllMenus}
                  >
                    Micro SAAS
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            <Link 
              to="/blog" 
              className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
              onClick={closeAllMenus}
            >
              Blog
            </Link>

            <div className="pt-4 border-t border-gray-700">
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                onClick={closeAllMenus}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
