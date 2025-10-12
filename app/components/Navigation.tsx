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

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

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

  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics', icon: BarChart },
  ];

  const itServices = [
  ];

  const microSaasServices = [
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2">
                  <Link to="/ai-services" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                    <Brain className="h-4 w-4 mr-3" />
                    AI Services
                  </Link>
                  <Link to="/it-services" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                    <Code className="h-4 w-4 mr-3" />
                    IT Services
                  </Link>
                  <Link to="/micro-saas" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                    <Zap className="h-4 w-4 mr-3" />
                    Micro SAAS
                  </Link>
                </div>
              )}
            </div>

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                AI Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 max-h-96 overflow-y-auto">
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <service.icon className="h-4 w-4 mr-3" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                IT Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 max-h-96 overflow-y-auto">
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <service.icon className="h-4 w-4 mr-3" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Micro SAAS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 max-h-96 overflow-y-auto">
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <service.icon className="h-4 w-4 mr-3" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                IT Services
              </Link>
              <Link
                to="/micro-saas"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Micro SAAS
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
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
