'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart, Rocket } from 'lucide-react';
import Sidebar from './Sidebar';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const aiServices = [
    { name: 'AI Consulting', href: '/ai-consulting', icon: Brain },
    { name: 'Machine Learning', href: '/machine-learning', icon: Cpu },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageCircle },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye },
    { name: 'Predictive Analytics', href: '/predictive-analytics', icon: TrendingUp },
    { name: 'AI Automation', href: '/ai-automation', icon: Workflow }
  ];

  const itServices = [
    { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Software Development', href: '/software-development', icon: Code },
    { name: 'Data Management', href: '/data-management', icon: Database },
    { name: 'IT Consulting', href: '/it-consulting', icon: Settings },
    { name: 'System Integration', href: '/system-integration', icon: Server }
  ];

  const microSaasServices = [
    { name: 'Analytics Tools', href: '/analytics-tools', icon: BarChart },
    { name: 'Productivity Apps', href: '/productivity-apps', icon: CheckSquare },
    { name: 'Communication Tools', href: '/communication-tools', icon: MessageSquare },
    { name: 'Project Management', href: '/project-management', icon: Calendar },
    { name: 'Customer Support', href: '/customer-support', icon: Users },
    { name: 'Marketing Automation', href: '/marketing-automation', icon: Target }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Status Page', href: '/status' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Consultation', href: '/consultation' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle('ai')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  <Brain className="w-4 h-4" />
                  <span>AI Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'ai' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        onClick={handleLinkClick}
                      >
                        <service.icon className="w-4 h-4 text-blue-600" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle('it')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  <Cloud className="w-4 h-4" />
                  <span>IT Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'it' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        onClick={handleLinkClick}
                      >
                        <service.icon className="w-4 h-4 text-blue-600" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Micro SaaS Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle('saas')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  <Box className="w-4 h-4" />
                  <span>Micro SaaS</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'saas' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    {microSaasServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        onClick={handleLinkClick}
                      >
                        <service.icon className="w-4 h-4 text-blue-600" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle('company')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  <Users className="w-4 h-4" />
                  <span>Company</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'company' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    {companyLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        onClick={handleLinkClick}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Support Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle('support')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Support</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'support' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    {supportLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        onClick={handleLinkClick}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
              <Link
                to="/consultation"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
