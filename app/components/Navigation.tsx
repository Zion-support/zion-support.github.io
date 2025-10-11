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
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            
            {/* About Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center">
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/about" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    About Us
                  </Link>
                  <Link to="/team" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    Our Team
                  </Link>
                  <Link to="/careers" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    Careers
                  </Link>
                  <Link to="/partners" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    Partners
                  </Link>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/services" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    All Services
                  </Link>
                  <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/micro-saas" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    Micro SaaS
                  </Link>
                  <Link to="/enterprise" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    Enterprise Solutions
                  </Link>
                  <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    Consultation
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            
            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/blog" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    Blog
                  </Link>
                  <Link to="/tutorials" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    Tutorials
                  </Link>
                  <Link to="/case-studies" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    Case Studies
                  </Link>
                  <Link to="/docs" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    Documentation
                  </Link>
                  <Link to="/api-docs" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    API Reference
                  </Link>
                  <Link to="/community" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    Community
                  </Link>
                  <Link to="/faq" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors">
                    FAQ
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
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
              <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Home
              </Link>
              
              {/* About Section */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">About</div>
                <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  About Us
                </Link>
                <Link to="/team" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  Our Team
                </Link>
                <Link to="/careers" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  Careers
                </Link>
                <Link to="/partners" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  Partners
                </Link>
              </div>

              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Services</div>
                <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  All Services
                </Link>
                <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  AI Services
                </Link>
                <Link to="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  IT Services
                </Link>
                <Link to="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  Micro SaaS
                </Link>
                <Link to="/enterprise" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  Enterprise Solutions
                </Link>
                <Link to="/consultation" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  Consultation
                </Link>
              </div>

              <Link to="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Pricing
              </Link>

              {/* Resources Section */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Resources</div>
                <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  Blog
                </Link>
                <Link to="/tutorials" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  Tutorials
                </Link>
                <Link to="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  Case Studies
                </Link>
                <Link to="/docs" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  Documentation
                </Link>
                <Link to="/api-docs" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  API Reference
                </Link>
                <Link to="/community" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  Community
                </Link>
                <Link to="/faq" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4" onClick={closeAllMenus}>
                  FAQ
                </Link>
              </div>

              <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
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
