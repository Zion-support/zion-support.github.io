import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart } from 'lucide-react';
=======
import { Menu, X, ChevronDown, Zap, Cloud, Globe, Code, Smartphone, Brain, Wifi } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-2460

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

<<<<<<< HEAD
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
=======
  const toggleMenu = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

<<<<<<< HEAD
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

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
  const aiServices = [
    { name: 'AI Analytics & BI', url: '/ai-analytics', icon: Zap },
    { name: 'AI Automation', url: '/ai-automation', icon: Brain },
    { name: 'AI Chatbots', url: '/ai-chatbot-builder', icon: Smartphone },
    { name: 'AI Content Generation', url: '/ai-content-generator', icon: Code },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Globe },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: Wifi }
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', icon: Cloud },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Globe },
    { name: 'Web Development', url: '/web-development', icon: Code },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone },
    { name: 'DevOps', url: '/devops', icon: Wifi },
    { name: 'Database Management', url: '/database-management', icon: Cloud }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-e082
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
<<<<<<< HEAD
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
=======
            <Link to="/" className="text-white hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-400 transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
              About
            </Link>
            
            {/* Services Dropdown */}
<<<<<<< HEAD
            <div className="relative group">
=======
            <div className="relative">
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
              <button
                onClick={toggleServices}
                className="flex items-center text-white hover:text-purple-400 transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
<<<<<<< HEAD
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
=======
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-gray-900 rounded-lg shadow-xl border border-gray-700 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* AI Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-purple-400 mb-3 flex items-center">
                        <Zap className="h-4 w-4 mr-2" />
                        AI Services
                      </h3>
                      <ul className="space-y-2">
                        {aiServices.map((service, index) => (
                          <li key={index}>
                            <Link
                              to={service.url}
                              className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
                              onClick={() => setServicesOpen(false)}
                            >
                              <service.icon className="h-4 w-4 mr-2" />
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* IT Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        <Cloud className="h-4 w-4 mr-2" />
                        IT Services
                      </h3>
                      <ul className="space-y-2">
                        {itServices.map((service, index) => (
                          <li key={index}>
                            <Link
                              to={service.url}
                              className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
                              onClick={() => setServicesOpen(false)}
                            >
                              <service.icon className="h-4 w-4 mr-2" />
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
                </div>
              )}
            </div>

<<<<<<< HEAD
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
=======
            <Link to="/contact" className="text-white hover:text-purple-400 transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
              Contact
            </Link>
            <Link to="/blog" className="text-white hover:text-purple-400 transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
<<<<<<< HEAD
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
=======
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-purple-400 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
<<<<<<< HEAD
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
=======
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
<<<<<<< HEAD
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
=======
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
<<<<<<< HEAD
=======
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-white font-medium mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  <div className="text-purple-400 text-sm font-medium mb-2">AI Services</div>
                  {aiServices.slice(0, 3).map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block text-gray-300 hover:text-white transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="text-cyan-400 text-sm font-medium mb-2 mt-4">IT Services</div>
                  {itServices.slice(0, 3).map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block text-gray-300 hover:text-white transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

>>>>>>> cursor/fix-errors-and-merge-to-main-2460
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
<<<<<<< HEAD
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
=======
                className="block px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

<<<<<<< HEAD
export default Navigation;
=======
export default Navigation;
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
