import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setServicesOpen(false);
    }
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-cyan-400',
      services: [
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'Real-time AI-powered business insights' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'Automated content creation' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'Intelligent customer service' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data insights' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Process optimization' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
        { name: 'AI Project Management', path: '/ai-project-management', description: 'Smart project tracking' },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor', description: 'Automated financial planning' },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare-solutions', description: 'Medical AI applications' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'Intelligent security solutions' },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-app-builder', description: 'No-code app development' },
        { name: 'AI Voice Processing', path: '/ai-voice-processing', description: 'Advanced voice AI' },
        { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Intelligent document handling' },
        { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', description: 'Personalized recommendations' },
        { name: 'AI Time Tracker', path: '/ai-time-tracker', description: 'Smart time management' },
        { name: 'AI Expense Tracker', path: '/ai-expense-tracker', description: 'Automated expense management' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Smart invoicing system' },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'Automated SEO optimization' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media' },
        { name: 'AI Writing Assistant', path: '/ai-writing-assistant', description: 'AI-powered writing help' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
        { name: 'Managed IT Services', path: '/managed-it', description: '24/7 IT management' },
        { name: 'Cybersecurity Suite', path: '/cybersecurity-suite', description: 'Comprehensive security' },
        { name: 'Database Management', path: '/database-management', description: 'Optimized data storage' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Seamless cloud transition' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'IT Support', path: '/it-support', description: 'Comprehensive IT support' },
        { name: 'Compliance Solutions', path: '/compliance', description: 'Regulatory compliance' },
        { name: 'GDPR Compliance', path: '/gdpr', description: 'Data protection compliance' }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Code,
      color: 'text-purple-400',
      services: [
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Automated email campaigns' },
        { name: 'AI CRM System', path: '/ai-crm', description: 'Intelligent customer management' },
        { name: 'AI Scheduler', path: '/ai-scheduler', description: 'Smart appointment booking' },
        { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'Automated HR processes' },
        { name: 'AI Inventory Management', path: '/ai-inventory-management', description: 'Smart inventory tracking' },
        { name: 'AI Video Generation', path: '/ai-video-generation', description: 'Automated video creation' },
        { name: 'AI Voice Cloning', path: '/ai-voice-cloning', description: 'Realistic voice synthesis' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation', description: '3D model creation' },
        { name: 'AI Music Composition', path: '/ai-music-composition', description: 'Automated music creation' },
        { name: 'AI Fashion Design', path: '/ai-fashion-design', description: 'AI-powered design tool' },
        { name: 'AI Fitness Coach', path: '/ai-fitness-coach', description: 'Personalized fitness plans' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Future outcome predictions' },
        { name: 'AI Image Recognition', path: '/ai-image-recognition', description: 'Advanced computer vision' },
        { name: 'AI Code Generation', path: '/ai-code-generation', description: 'Automated code creation' },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite' },
        { name: 'AI Design Studio', path: '/ai-design-studio', description: 'AI-powered design tool' },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence', description: 'Real-time business insights' },
        { name: 'AI Fintech Solutions', path: '/ai-fintech', description: 'Financial technology solutions' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI applications' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      color: 'text-green-400',
      services: [
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing' },
        { name: 'Blockchain Solutions', path: '/blockchain-solutions', description: 'Decentralized solutions' },
        { name: 'IoT Integration', path: '/iot-integration', description: 'Connected devices' },
        { name: 'Edge Computing', path: '/edge-computing', description: 'AI at the edge' },
        { name: 'Robotics Solutions', path: '/robotics-solutions', description: 'Intelligent robots' },
        { name: 'Smart City Solutions', path: '/smart-city-solutions', description: 'Urban technology' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
        { name: 'R&D Services', path: '/rd-services', description: 'Research and prototyping' },
        { name: 'Green Technology', path: '/green-technology', description: 'Sustainable solutions' }
      ]
    }
  ];


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </Link>


          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-cyan-400 transition-colors font-medium cyber-glow">
              All Services
            </Link>
            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors font-medium cyber-glow">
              Pricing
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <Brain className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700 p-6 z-50">
                  <div className="grid grid-cols-2 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center space-x-2 mb-2">
                          <category.icon className={`w-4 h-4 ${category.color}`} />
                          <span className="text-sm font-semibold text-white">{category.title}</span>
                        </div>
                        <div className="space-y-2">
                          {category.services.slice(0, 5).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded-lg transition-colors group"
                              onClick={closeAllMenus}
                            >
                              <div className="font-medium">{service.name}</div>
                              <div className="text-xs text-gray-500 group-hover:text-purple-500">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                          {category.services.length > 5 && (
                            <Link
                              to={`/${category.title.toLowerCase().replace(' ', '-')}`}
                              className="block px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                              onClick={closeAllMenus}
                            >
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 mt-6 pt-4 px-6">
                    <Link
                      to="/services"
                      className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>


            <Link
              to="/case-studies"
              className="font-medium transition-colors hover:text-cyan-400 text-white"
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

            {/* CTA Button */}
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
              onClick={closeAllMenus}
            >
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </Link>
          </div>

          {/* Mobile Menu Button */}"
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                All Services
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                >
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 space-y-2">
                    {serviceCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <div className="text-sm font-medium text-cyan-400 mb-2">{category.title}</div>
                        <div className="ml-4 space-y-1">
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block text-xs text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                            >
                              {service.name}
                            </Link>
                          ))}
                          <Link
                            to="/services"
                            className="block text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium"
                          >
                            View All →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/case-studies"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>

              <Link
                to="/blog"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              <a
                href="tel:+13024640950"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all mt-4"
                onClick={closeAllMenus}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';
export default Navigation;
"`
