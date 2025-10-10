'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EnhancedSearchModal from '../../src/components/EnhancedSearchModal';
import {
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Zap, 
  Sparkles, 
  Settings, 
  BarChart, 
  Phone, 
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
  MousePointer, 
  Volume2, 
  Accessibility, 
  Wrench, 
  Cog, 
  Layers, 
  Network, 
  Server, 
  Smartphone, 
  Monitor, 
  Wifi, 
  Code, 
  Palette, 
  Calendar, 
  FileText as FileTextIcon, 
  MapPin as Location, 
  Truck, 
  ChefHat, 
  Rocket, 
  Sprout, 
  Scale
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setIsOpen(false);
  };

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        { name: 'AI Project Manager Pro', href: '/ai-project-manager' },
        { name: 'Smart Calendar System', href: '/ai-smart-calendar' },
        { name: 'AI Sentiment Analyzer', href: '/ai-sentiment-analyzer' },
        { name: 'Landing Page Builder', href: '/landing-page-builder' },
        { name: 'AI Transportation', href: '/ai-transportation' },
        { name: 'AI Telepathic Interface', href: '/ai-telepathic-interface' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation' },
        { name: 'AI Agricultural Intelligence', href: '/ai-agricultural-intelligence-pro' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Healthcare Solutions', href: '/ai-healthcare' },
        { name: 'AI Fintech Platform', href: '/ai-fintech' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' },
        { name: 'AI Machine Learning', href: '/ai-ml-platform' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        { name: 'Cloud Migration & Setup', href: '/cloud-migration' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity' },
        { name: 'Database Management', href: '/database-services' },
        { name: 'System Integration', href: '/system-integration' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Network Security', href: '/network-security' },
        { name: 'Data Backup & Recovery', href: '/data-backup' },
        { name: 'IT Support & Maintenance', href: '/it-support' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      services: [
        { name: 'Quantum Computing Solutions', href: '/ai-quantum-computing' },
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: 'Edge Computing', href: '/edge-computing' },
        { name: 'IoT Platform', href: '/iot-platform' },
        { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
        { name: 'AR/VR Development', href: '/ar-vr-development' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'Smart City Solutions', href: '/smart-city-solutions' }
      ]
    }
  ];

  const mainLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Case Studies', path: '/case-studies', icon: FileText },
    { name: 'Blog', path: '/blog', icon: MessageSquare },
    { name: 'Pricing', path: '/pricing', icon: BarChart },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
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
              <Link
                to="/about"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
              
              <div className="relative">
                <button
                  className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium flex items-center space-x-1"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {servicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        {serviceCategories.map((category, index) => (
                          <div key={index} className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <category.icon className={`w-5 h-5 ${category.color}`} />
                              <h3 className="text-white font-semibold text-sm">{category.title}</h3>
                            </div>
                            <ul className="space-y-2">
                              {category.services.slice(0, 4).map((service, serviceIndex) => (
                                <li key={serviceIndex}>
                                  <Link
                                    to={service.href}
                                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm block"
                                    onClick={closeAllMenus}
                                  >
                                    {service.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-cyan-400/20 mt-6 pt-4 px-6">
                        <Link
                          to="/services"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                          onClick={closeAllMenus}
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

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
                to="/pricing"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>

              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white hover:text-cyan-400 transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                to="/contact"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              {/* CTA Button */}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
                onClick={closeAllMenus}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
              <div className="space-y-4">
                {mainLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium flex items-center space-x-2 py-2"
                    onClick={closeAllMenus}
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </Link>
                ))}
                
                {/* Mobile CTA */}
                <Link
                  to="/contact"
                  className="block bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all text-center mt-4"
                  onClick={closeAllMenus}
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Search Modal */}
      <EnhancedSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navigation;