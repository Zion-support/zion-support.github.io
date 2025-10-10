'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server } from 'lucide-react';

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
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen);
  const toggleItServices = () => setItServicesOpen(!itServicesOpen);
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen);

  const closeAllDropdowns = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
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
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                  <Link to="/ai-services" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-4 h-4" />
                      <span>AI Services Overview</span>
                    </div>
                  </Link>
                  <Link to="/ai-marketing" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4" />
                      <span>AI Marketing</span>
                    </div>
                  </Link>
                  <Link to="/ai-automation" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors">
                    <div className="flex items-center space-x-2">
                      <Settings className="w-4 h-4" />
                      <span>AI Automation</span>
                    </div>
                  </Link>
                  <Link to="/ai-healthcare" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4" />
                      <span>AI Healthcare</span>
                    </div>
                  </Link>
                  <Link to="/ai-fintech" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4" />
                      <span>AI Fintech</span>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Server className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                  <Link to="/it-services" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors">
                    <div className="flex items-center space-x-2">
                      <Server className="w-4 h-4" />
                      <span>IT Services Overview</span>
                    </div>
                  </Link>
                  <Link to="/cloud-infrastructure" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors">
                    <div className="flex items-center space-x-2">
                      <Cloud className="w-4 h-4" />
                      <span>Cloud Infrastructure</span>
                    </div>
                  </Link>
                  <Link to="/cybersecurity" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4" />
                      <span>Cybersecurity</span>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors rounded-md"
                onClick={closeAllDropdowns}>
                Home
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors rounded-md"
                onClick={closeAllDropdowns}>
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="block px-3 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors rounded-md"
                onClick={closeAllDropdowns}>
                IT Services
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors rounded-md"
                onClick={closeAllDropdowns}>
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors rounded-md"
                onClick={closeAllDropdowns}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;