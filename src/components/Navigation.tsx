'use client';
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Home, Briefcase, BookOpen, MessageSquare, Eye, Palette, Camera, Music, Video, ShoppingCart, Building, Factory, Car, Plane, Ship, Train, Heart, Stethoscope, GraduationCap, Wrench, Hammer, Paintbrush, Scissors, Calculator, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity } from 'lucide-react';

const Navigation: React.FC = memo(() => {
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

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const mainNavItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '👥' },
    { name: 'Services', path: '/services', icon: '⚡' },
    { name: 'Case Studies', path: '/case-studies', icon: '📊' },
    { name: 'Blog', path: '/blog', icon: '📝' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ];

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      services: [
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true, price: '$99/month' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true, price: '$79/month' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics', description: 'AI-powered business intelligence', icon: '📈', popular: true, price: '$149/month' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true, price: '$99/month' },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true, price: '$149/month' },
        { name: 'AI Code Review Assistant', path: '/ai-code-generation', description: 'Automated code analysis', icon: '🔍', popular: false, price: '$89/month' },
        { name: 'AI Content Generator', path: '/ai-content-generation', description: 'AI-powered content creation', icon: '✍️', popular: false, price: '$199/month' },
        { name: 'AI SEO Optimizer', path: '/ai-marketing', description: 'AI-driven SEO optimization', icon: '🎯', popular: false, price: '$299/month' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization', icon: '📊', popular: false, price: '$299/month' },
        { name: 'AI Video Generation', path: '/ai-video-generation', description: 'AI-powered video creation', icon: '🎬', popular: false, price: '$399/month' },
        { name: 'AI Voice Cloning', path: '/ai-voice-cloning', description: 'Realistic voice synthesis', icon: '🎤', popular: false, price: '$199/month' },
        { name: 'AI Music Composition', path: '/ai-music-composition', description: 'AI-generated music', icon: '🎵', popular: false, price: '$149/month' },
        { name: 'AI Fashion Design', path: '/ai-fashion-design', description: 'AI-powered fashion design', icon: '👗', popular: false, price: '$249/month' },
        { name: 'AI Fitness Coach', path: '/ai-fitness-coach', description: 'Personal AI fitness trainer', icon: '💪', popular: false, price: '$99/month' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Intelligent process automation', icon: '⚙️', popular: false, price: '$199/month' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions', price: 'Custom' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation', price: '$1,200/month' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation', price: '$1,400/month' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions', price: 'Custom' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications', price: 'Custom' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation', price: '$1,200/month' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights', price: '$1,500/month' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions', price: '$1,800/month' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization', price: '$1,400/month' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications', price: 'Custom' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms', price: '$2,000/month' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service', price: '$1,200/month' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes', price: '$1,600/month' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization', price: '$1,500/month' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation', price: '$1,300/month' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing', price: '$1,100/month' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support', price: 'Custom' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure', price: '$999/month' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions', price: '$1,599/month' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration & setup', price: '$1,299/month' },
        { name: 'DevOps & CI/CD', path: '/devops', description: 'DevOps automation', price: '$1,199/month' },
        { name: 'Database Management', path: '/database', description: 'Database management', price: '$899/month' },
        { name: 'Network Solutions', path: '/networking', description: 'Network infrastructure', price: '$1,099/month' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning', price: '$2,500/month' },
        { name: 'IT Support & Maintenance', path: '/support', description: '24/7 IT management', price: '$1,500/month' },
        { name: 'IT Training & Certification', path: '/training', description: 'Staff development', price: 'Custom' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      hoverColor: 'hover:bg-pink-500/20',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing', price: 'Custom' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', price: 'Custom' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', price: '$1,999/month' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices', price: '$1,499/month' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights', price: '$1,799/month' },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robots', price: 'Custom' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences', price: 'Custom' },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions', price: 'Custom' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization', price: 'Custom' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cyber-glow">
              <span className="text-white font-bold text-lg neon-pulse">Z</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium cyber-link">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium cyber-link">              
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white cyber-link"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <Brain className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-2xl opacity-100 visible transition-all duration-300 transform translate-y-0 cyber-card">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4 neon-text">Our Services</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-3">
                          <div className="flex items-center space-x-2 mb-3">
                            <category.icon className={`w-5 h-5 ${category.color}`} />
                            <span className="text-sm font-semibold text-white neon-text">{category.title}</span>
                          </div>
                          <div className="space-y-2">
                            {category.services.slice(0, 6).map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                to={service.path}
                                className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded-lg transition-all duration-300 group"
                                onClick={closeAllMenus}
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="font-medium group-hover:text-cyan-400">{service.name}</div>
                                    <div className="text-xs text-gray-500 group-hover:text-purple-500">
                                      {service.description}
                                    </div>
                                  </div>
                                  {service.price && (
                                    <div className="text-xs text-cyan-400 font-semibold">
                                      {service.price}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            ))}
                            {category.services.length > 6 && (
                              <Link
                                to={`/${category.title.toLowerCase().replace(' ', '-')}`}
                                className="block px-3 py-2 text-sm text-purple-400 hover:bg-purple-500/20 rounded-lg transition-colors font-medium"
                                onClick={closeAllMenus}
                              >
                                View All →
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-700 mt-6 pt-4">
                      <Link
                        to="/services"
                        className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all cyber-button"
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
              className="font-medium transition-colors hover:text-cyan-400 text-white cyber-link"
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>

            <Link
              to="/blog"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium cyber-link"
              onClick={closeAllMenus}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium cyber-link"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center px-4 py-2"
              onClick={closeAllMenus}
            >
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </Link>
          </div>

          {/* Mobile Menu Button */}
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
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Navigation</h3>
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeAllMenus}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>

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
                  <div className="mt-2 ml-4 space-y-2">
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
                              {typeof service.icon === 'string' ? service.icon : <service.icon className="w-3 h-3 inline mr-1" />} {service.name}
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

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Contact</h3>
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+1 302 464 0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 text-pink-400 hover:text-pink-300 transition-colors duration-300 py-2"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">kleber@ziontechgroup.com</span>
                </a>
                <a
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-green-400 hover:text-green-300 transition-colors duration-300 py-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">364 E Main St STE 1008, Middletown, DE 19709</span>
                </a>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all mt-4 cyber-button"
                onClick={closeAllMenus}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';
export default Navigation;