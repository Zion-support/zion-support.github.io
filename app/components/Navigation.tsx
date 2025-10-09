import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Star, Sparkles, Globe, Settings, Rocket } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setIsOpen(false);
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      services: [
        { name: 'AI Services', path: '/ai-services', price: '$1,500/mo' },
        { name: 'AI Marketing', path: '/ai-marketing', price: '$199/mo' },
        { name: 'AI Automation', path: '/ai-automation', price: '$399/mo' },
        { name: 'AI Healthcare', path: '/ai-healthcare', price: '$1,999/mo' },
        { name: 'AI Fintech', path: '/ai-fintech', price: '$1,499/mo' },
        { name: 'AI Content Generation', path: '/ai-content-generation', price: '$29/mo' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', price: '$149/mo' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', price: '$99/mo' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', price: '$399/mo' },
        { name: 'AI Cloud Infrastructure', path: '/ai-cloud-infrastructure', price: '$2,999/mo' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', price: '$149/mo' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', price: '$199/mo' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      services: [
        { name: 'IT Infrastructure', path: '/it-infrastructure', price: '$999/mo' },
        { name: 'IT Services', path: '/it-services', price: '$1,200/mo' },
        { name: 'Cybersecurity', path: '/cybersecurity', price: '$2,500/mo' },
        { name: 'Cloud Services', path: '/ai-cloud-infrastructure', price: '$2,999/mo' },
        { name: 'DevOps', path: '/ai-workflow-automation', price: '$399/mo' },
        { name: 'Database Services', path: '/ai-data-analytics', price: '$149/mo' },
        { name: 'Network Services', path: '/it-infrastructure', price: '$799/mo' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      services: [
        { name: 'AI Content Generator', path: '/ai-content-generation', price: '$29/mo' },
        { name: 'AI Analytics Dashboard', path: '/ai-data-analytics', price: '$149/mo' },
        { name: 'AI Customer Support', path: '/ai-customer-support', price: '$199/mo' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', price: '$299/mo' },
        { name: 'AI Security Scanner', path: '/ai-cybersecurity', price: '$99/mo' },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-app-development', price: '$199/mo' },
        { name: 'AI E-commerce Assistant', path: '/ai-ecommerce-solutions', price: '$149/mo' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', price: '$399/mo' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', price: '$149/mo' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', price: 'Custom' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', price: '$2,500/mo' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', price: '$8,000/project' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', price: '$2,500/mo' },
        { name: 'Business Intelligence', path: '/business-intelligence', price: '$1,800/mo' },
        { name: 'Robotics & Automation', path: '/robotics', price: '$2,500/mo' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg cyber-glow' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold cyber-text"
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center energy-pulse">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="neon-text">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <Sparkles className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                          </div>
                          <h3 className="font-semibold text-white text-sm">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block px-3 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-lg transition-all duration-200 group"
                              onClick={closeAllMenus}
                            >
                              <div className="flex items-center justify-between">
                                <span>{service.name}</span>
                                <span className="text-xs text-cyan-400 font-medium">{service.price}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-cyan-500/20 mt-6 pt-4 px-6">
                    <Link
                      to="/services"
                      className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
                      onClick={closeAllMenus}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      View All Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              About
            </Link>
            
            <Link 
              to="/case-studies" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>
            
            <Link 
              to="/blog" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
            
            <Link 
              to="/contact" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
              onClick={closeAllMenus}
            >
              <Rocket className="w-4 h-4 mr-2" />
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4 cyber-glow">
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                >
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Services</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 space-y-2 mt-2">
                    {serviceCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-1">
                        <div className="text-cyan-400 font-semibold text-sm flex items-center">
                          <category.icon className="w-3 h-3 mr-1" />
                          {category.title}
                        </div>
                        <div className="ml-4 space-y-1">
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1"
                              onClick={closeAllMenus}
                            >
                              {service.name} - {service.price}
                            </Link>
                          ))}
                          {category.services.length > 3 && (
                            <Link
                              to="/services"
                              className="block text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-200 py-1"
                              onClick={closeAllMenus}
                            >
                              View all {category.title} →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                About
              </Link>
              
              <Link
                to="/case-studies"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              
              <Link
                to="/blog"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              
              <Link
                to="/contact"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20">
                <div className="flex items-center space-x-2 text-sm text-gray-300 py-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300 py-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300 py-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Delaware, USA</span>
                </div>
              </div>
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 mt-4"
                onClick={closeAllMenus}
              >
                <Rocket className="w-4 h-4 inline mr-2" />
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