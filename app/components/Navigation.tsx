'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Eye, Headphones } from 'lucide-react';

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
        setServicesOpen(false);
        setAiServicesOpen(false);
        setItServicesOpen(false);
        setMicroSaasOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen);
  const toggleItServices = () => setItServicesOpen(!itServicesOpen);
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen);

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      description: 'Advanced AI solutions and machine learning'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Server,
      description: 'Complete IT infrastructure and support'
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas',
      icon: Cpu,
      description: 'Specialized software solutions'
    },
    {
      title: 'Consulting',
      href: '/consultation',
      icon: Users,
      description: 'Expert technology guidance'
    }
  ];

  const aiServices = [
    { title: 'Business Intelligence', href: '/ai-services#bi', icon: BarChart },
    { title: 'Computer Vision', href: '/ai-services#vision', icon: Eye },
    { title: 'Natural Language Processing', href: '/ai-services#nlp', icon: MessageCircle },
    { title: 'Process Automation', href: '/ai-services#automation', icon: Zap },
    { title: 'Predictive Analytics', href: '/ai-services#analytics', icon: TrendingUp },
    { title: 'Cybersecurity AI', href: '/ai-services#security', icon: Shield }
  ];

  const itServices = [
    { title: 'Cloud Migration', href: '/it-services#cloud', icon: Cloud },
    { title: 'Server Management', href: '/it-services#servers', icon: Server },
    { title: 'Network Security', href: '/it-services#security', icon: Shield },
    { title: 'Database Management', href: '/it-services#database', icon: Database },
    { title: 'IT Support', href: '/it-services#support', icon: Headphones },
    { title: 'Monitoring', href: '/it-services#monitoring', icon: Monitor }
  ];

  const microSaasServices = [
    { title: 'Analytics Dashboard', href: '/micro-saas#analytics', icon: BarChart },
    { title: 'Customer Support', href: '/micro-saas#support', icon: MessageCircle },
    { title: 'Security Monitor', href: '/micro-saas#security', icon: Shield },
    { title: 'Cloud Backup', href: '/micro-saas#backup', icon: Cloud },
    { title: 'Performance Tracker', href: '/micro-saas#performance', icon: TrendingUp },
    { title: 'Workflow Automation', href: '/micro-saas#automation', icon: Zap }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={service.href}
                        className="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        <service.icon className="w-5 h-5 mr-3 text-cyan-400" />
                        <div>
                          <div className="font-medium">{service.title}</div>
                          <div className="text-sm text-gray-400">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/pricing"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </Link>
              
              <Link
                to="/blog"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Blog
              </Link>
              
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <Link
              to="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={toggleServices}
                className="text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      to={service.href}
                      className="flex items-center text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                      onClick={() => {
                        setIsOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      <service.icon className="w-4 h-4 mr-2 text-cyan-400" />
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            
            <Link
              to="/blog"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white block text-center px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>

            {/* Contact Info */}
            <div className="pt-4 border-t border-slate-700">
              <div className="flex items-center text-gray-400 text-sm px-3 py-2">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center text-gray-400 text-sm px-3 py-2">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-400 text-sm px-3 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
