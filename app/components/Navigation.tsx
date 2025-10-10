<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="glass-dark backdrop-blur-md sticky top-0 z-50 border-b border-cyan-400/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gradient neon-text">
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-white hover:text-cyan-400 transition-colors flex items-center font-medium"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 glass-dark rounded-lg shadow-2xl border border-cyan-400/20 py-2 z-50">
                  <Link to="/services" className="block px-4 py-2 text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block px-4 py-2 text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block px-4 py-2 text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block px-4 py-2 text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/services-advertising" className="block px-4 py-2 text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                    Advertising Services
                  </Link>
                  <Link to="/quantum-computing" className="block px-4 py-2 text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/blockchain" className="block px-4 py-2 text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                    Blockchain
                  </Link>
                  <Link to="/iot" className="block px-4 py-2 text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                    IoT Solutions
                  </Link>
                </div>
              )}
            </div>
            <Link to="/case-studies" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Case Studies
            </Link>
            <Link to="/enterprise" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Enterprise
            </Link>
            <Link to="/team" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Team
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
=======
'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Home,
  Users,
  Briefcase,
  FileText,
  DollarSign,
  MessageSquare,
  Shield,
  Cpu,
  Database,
  Globe,
  Lock,
  Target,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  Play,
  Download,
  ExternalLink,
  ChevronRight,
  Star,
  Quote,
  User,
  Building,
  GraduationCap,
  Heart,
  ThumbsUp,
  MessageCircle,
  Share2,
  Bookmark,
  Eye,
  BarChart,
  Settings,
  Zap,
  Sparkles,
  Brain,
  Cloud,
  Phone
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Contact', href: '/contact', icon: MessageSquare },
  ];

  const serviceCategories = [
    {
      title: 'AI Solutions',
      icon: Brain,
      services: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Healthcare', href: '/ai-healthcare' },
        { name: 'AI Fintech', href: '/ai-fintech' },
      ]
    },
    {
      title: 'IT Infrastructure',
      icon: Database,
      services: [
        { name: 'Cloud Services', href: '/cloud-services' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'DevOps', href: '/devops' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'IT Support', href: '/it-support' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Green IT', href: '/green-it' },
        { name: 'IoT Edge Computing', href: '/iot-edge-computing' },
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Target,
      services: [
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'Robotics', href: '/robotics' },
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation' },
        { name: 'Smart Analytics', href: '/smart-analytics' },
        { name: 'Task Manager Pro', href: '/task-manager-pro' },
        { name: 'Networking', href: '/networking' },
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Briefcase className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl border border-white/10 p-6">
                  <div className="grid grid-cols-1 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <div className="flex items-center space-x-2 mb-3">
                          <category.icon className="w-5 h-5 text-cyan-400" />
                          <h3 className="font-semibold text-white">{category.title}</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.href}
                              className="text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1"
                              onClick={closeMenu}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Started</span>
>>>>>>> origin/main
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
<<<<<<< HEAD
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyan-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-cyan-400/20">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
                About
              </Link>
              <div className="space-y-2">
                <div className="text-white font-semibold">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/services-advertising" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Advertising Services
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/blockchain" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Blockchain
                  </Link>
                  <Link to="/iot" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    IoT Solutions
                  </Link>
                </div>
              </div>
              <Link to="/case-studies" className="text-white hover:text-cyan-400 transition-colors font-medium">
                Case Studies
              </Link>
              <Link to="/enterprise" className="text-white hover:text-cyan-400 transition-colors font-medium">
                Enterprise
              </Link>
              <Link to="/team" className="text-white hover:text-cyan-400 transition-colors font-medium">
                Team
              </Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
                Contact
              </Link>
=======
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2"
                  onClick={closeMenu}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-white font-semibold mb-3">Services</h3>
                <div className="space-y-2">
                  {serviceCategories.map((category, index) => (
                    <div key={index}>
                      <div className="flex items-center space-x-2 mb-2">
                        <category.icon className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-medium text-gray-300">{category.title}</span>
                      </div>
                      <div className="ml-6 space-y-1">
                        {category.services.slice(0, 4).map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            to={service.href}
                            className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1"
                            onClick={closeMenu}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/consultation"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
>>>>>>> origin/main
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
>>>>>>> origin/main
