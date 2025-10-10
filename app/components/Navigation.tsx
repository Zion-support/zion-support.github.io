'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EnhancedSearchModal from '../../src/components/EnhancedSearchModal';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap,
  Star,
  TrendingUp,
  Settings,
  Globe,
  Target,
  ArrowRight,
  Sparkles,
  Database,
  MessageSquare,
  Eye,
  Cpu,
  Lock,
  Search,
  Home,
  FileText
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setIsSearchOpen(false);
  };

  const serviceCategories = [
    {
      title: 'AI Solutions',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      services: [
        { name: 'AI Development', path: '/ai-development' },
        { name: 'Machine Learning', path: '/machine-learning' },
        { name: 'Natural Language Processing', path: '/nlp' },
        { name: 'Computer Vision', path: '/computer-vision' },
        { name: 'AI Consulting', path: '/ai-consulting' },
        { name: 'AI Integration', path: '/ai-integration' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      services: [
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'DevOps', path: '/devops' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'Data Analytics', path: '/data-analytics' },
        { name: 'System Integration', path: '/system-integration' },
        { name: 'IT Consulting', path: '/it-consulting' }
      ]
    },
    {
      title: 'Digital Solutions',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      services: [
        { name: 'Web Development', path: '/web-development' },
        { name: 'Mobile Apps', path: '/mobile-apps' },
        { name: 'E-commerce', path: '/ecommerce' },
        { name: 'API Development', path: '/api-development' },
        { name: 'Database Design', path: '/database-design' },
        { name: 'Performance Optimization', path: '/performance-optimization' }
      ]
    },
    {
      title: 'Enterprise',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      services: [
        { name: 'Enterprise Software', path: '/enterprise-software' },
        { name: 'Business Intelligence', path: '/business-intelligence' },
        { name: 'Process Automation', path: '/process-automation' },
        { name: 'Digital Transformation', path: '/digital-transformation' },
        { name: 'Legacy Modernization', path: '/legacy-modernization' },
        { name: 'Scalable Architecture', path: '/scalable-architecture' }
      ]
    }
  ];

  const mainLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'AI Services', path: '/ai-services', icon: Brain },
    { name: 'IT Services', path: '/it-services', icon: Cloud },
    { name: 'Micro SAAS', path: '/micro-saas', icon: Code },
    { name: 'Case Studies', path: '/case-studies', icon: FileText },
    { name: 'Blog', path: '/blog', icon: MessageSquare },
    { name: 'Pricing', path: '/pricing', icon: BarChart },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-400/20 neon-glow-cyan' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group" onClick={closeAllMenus}>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl cyber-text">Zion Tech Group</span>
                <span className="text-cyan-400 text-xs font-medium">AI & IT Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium neon-text"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-400/20 py-6 z-50">
                    <div className="grid grid-cols-2 gap-6 px-6">
                      {serviceCategories.map((category, index) => (
                        <div key={index}>
                          <div className="flex items-center space-x-2 mb-4">
                            <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                              <category.icon className={`w-4 h-4 ${category.color}`} />
                            </div>
                            <h4 className="text-white font-medium">{category.title}</h4>
                          </div>
                          <ul className="space-y-2">
                            {category.services.map((service, serviceIndex) => (
                              <li key={serviceIndex}>
                                <Link
                                  to={service.path}
                                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
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
                        className="block w-full text-center bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-700 hover:to-purple-700 transition-all"
                        onClick={closeAllMenus}
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/ai-services" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >
                AI Services
              </Link>
              <Link 
                to="/it-services" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >
                IT Services
              </Link>
              <Link 
                to="/pricing" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>

              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white hover:text-cyan-400 transition-colors duration-200"
                aria-label="Search"
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
                className="cyber-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
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
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
              <div className="space-y-4">
                {mainLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2 flex items-center space-x-2"
                    onClick={closeAllMenus}
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                ))}
                
                {/* Mobile Services */}
                <div>
                  <button
                    className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium flex items-center space-x-2 py-2"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <Settings className="w-4 h-4" />
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {servicesOpen && (
                    <div className="ml-6 mt-2 space-y-2">
                      {serviceCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                            <span className="text-cyan-400 font-medium text-sm">{category.title}</span>
                          </div>
                          <div className="ml-6 space-y-1">
                            {category.services.slice(0, 3).map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                to={service.path}
                                className="block text-gray-300 hover:text-cyan-400 text-sm py-1"
                                onClick={closeAllMenus}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
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