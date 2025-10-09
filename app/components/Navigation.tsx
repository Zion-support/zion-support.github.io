<<<<<<< HEAD
'use client';
import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Settings, Database, Lock, Star, CheckCircle, TrendingUp, Award, MessageSquare, FileText, Eye, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, PieChart, TrendingDown, Activity } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isITOpen, setIsITOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleAI = () => setIsAIOpen(!isAIOpen);
  const toggleIT = () => setIsITOpen(!isITOpen);

  const aiServices = [
    { name: 'AI Chatbot', href: '/ai-customer-support', icon: MessageSquare },
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Image Recognition', href: '/ai-image-recognition', icon: Eye },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Palette },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Network Solutions', href: '/network-solutions', icon: Globe },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'IT Support', href: '/it-support', icon: Phone },
    { name: 'System Administration', href: '/system-administration', icon: Settings }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              
              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleAI}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  AI Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {isAIOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-cyan-400/20 py-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                        onClick={() => setIsAIOpen(false)}
                      >
                        <service.icon className="w-4 h-4 mr-3" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleIT}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  IT Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {isITOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-cyan-400/20 py-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                        onClick={() => setIsITOpen(false)}
                      >
                        <service.icon className="w-4 h-4 mr-3" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/ai-services"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                IT Services
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-2 rounded-md text-base font-medium flex items-center justify-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call (302) 464-0950
              </a>
=======
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, 
  Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, 
  TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Briefcase
} from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', icon: Brain },
    { name: 'AI Marketing', url: '/ai-marketing', icon: Target },
    { name: 'AI Automation', url: '/ai-automation', icon: Zap },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Shield },
    { name: 'AI Fintech', url: '/ai-fintech', icon: BarChart },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Lock }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', icon: Cloud },
    { name: 'IT Infrastructure', url: '/it-infrastructure', icon: Database },
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield },
    { name: 'Database Management', url: '/database-management', icon: Database },
    { name: 'Network Solutions', url: '/network-solutions', icon: Globe },
    { name: 'IT Support', url: '/it-support', icon: Users },
    { name: 'IT Consulting', url: '/it-consulting', icon: Settings }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', icon: Cpu },
    { name: 'Autonomous Systems', url: '/autonomous-systems', icon: Smartphone },
    { name: 'Blockchain', url: '/blockchain', icon: Lock },
    { name: 'IoT Edge Computing', url: '/iot-edge-computing', icon: Globe },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', icon: Sparkles },
    { name: 'Robotics', url: '/robotics', icon: Target }
  ];

  const microSaas = [
    { name: 'Micro SaaS', url: '/micro-saas', icon: Briefcase },
    { name: 'AI Project Manager', url: '/ai-project-manager', icon: Calendar },
    { name: 'AI Content Generator', url: '/ai-content-generator', icon: FileText },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', icon: BarChart },
    { name: 'AI Customer Support', url: '/ai-customer-support', icon: MessageSquare },
    { name: 'AI Expense Tracker', url: '/ai-expense-tracker', icon: DollarSign }
  ];

  const mainNavItems = [
    { name: 'About', url: '/about' },
    { name: 'Services', url: '#', hasDropdown: true },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-cyan-600" />
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item, index) => (
              <div key={index} className="relative">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <button
                      className={`flex items-center space-x-1 transition-colors ${
                        isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
                      }`}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {servicesOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        <div className="grid grid-cols-2 gap-6 px-6">
                          {/* AI Services */}
                          <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                              <Brain className="h-4 w-4 mr-2 text-cyan-600" />
                              AI Services
                            </h3>
                            <div className="space-y-2">
                              {aiServices.slice(0, 4).map((service, idx) => (
                                <Link
                                  key={idx}
                                  to={service.url}
                                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-cyan-600 transition-colors"
                                >
                                  <service.icon className="h-4 w-4" />
                                  <span>{service.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* IT Services */}
                          <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                              <Cloud className="h-4 w-4 mr-2 text-cyan-600" />
                              IT Services
                            </h3>
                            <div className="space-y-2">
                              {itServices.slice(0, 4).map((service, idx) => (
                                <Link
                                  key={idx}
                                  to={service.url}
                                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-cyan-600 transition-colors"
                                >
                                  <service.icon className="h-4 w-4" />
                                  <span>{service.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.url}
                    className={`transition-colors ${
                      isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/consultation"
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                isScrolled
                  ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                  : 'bg-white text-cyan-600 hover:bg-gray-100'
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              {mainNavItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-left text-gray-700 font-medium py-2"
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <div className="ml-4 space-y-2 mt-2">
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-gray-900">AI Services</h4>
                            {aiServices.slice(0, 3).map((service, idx) => (
                              <Link
                                key={idx}
                                to={service.url}
                                className="block text-sm text-gray-600 hover:text-cyan-600 py-1"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-gray-900">IT Services</h4>
                            {itServices.slice(0, 3).map((service, idx) => (
                              <Link
                                key={idx}
                                to={service.url}
                                className="block text-sm text-gray-600 hover:text-cyan-600 py-1"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.url}
                      className="block text-gray-700 font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/consultation"
                  className="block w-full bg-cyan-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-f2a7
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;