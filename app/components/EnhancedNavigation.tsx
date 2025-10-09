'use client';
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
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
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Star, 
  Settings, 
  Calendar, 
  CheckSquare, 
  FileText,
  Home,
  About,
  Contact,
  CaseStudies,
  Blog,
  Services,
  MicroSaas,
  AIServices,
  ITServices,
  QuantumComputing,
  AutonomousSystems,
  Blockchain,
  Robotics,
  BusinessIntelligence,
  IotEdge,
  ArVr,
  SmartCities,
  DigitalTransformation,
  InnovationLabs,
  SustainabilityTech,
  FutureTech,
  Close,
  Search,
  User,
  Bell,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

const EnhancedNavigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [emergingTechOpen, setEmergingTechOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setSidebarOpen(false);
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
    setEmergingTechOpen(false);
    setIsOpen(false);
    setSidebarOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      services: [
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project planning', icon: BarChart, popular: true },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: Users, popular: true },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', icon: TrendingUp, popular: true },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: Mail, popular: true },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: Brain, popular: true },
        { name: 'AI Content Generator', path: '/ai-content-generation', description: 'AI-powered content creation', icon: FileText, popular: false },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'AI-driven SEO optimization', icon: Search, popular: false },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing', icon: FileText, popular: false }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration & setup' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'DevOps automation' },
        { name: 'Database Management', path: '/database-management', description: 'Database management' },
        { name: 'Network Solutions', path: '/network-solutions', description: 'Network infrastructure' },
        { name: 'System Administration', path: '/system-administration', description: 'System management' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
        { name: 'IT Support & Maintenance', path: '/it-support', description: '24/7 IT management' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      hoverColor: 'hover:bg-pink-500/20',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robots' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions' }
      ]
    }
  ];

  const mainNavItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: About },
    { name: 'Services', path: '/services', icon: Services, hasDropdown: true },
    { name: 'Micro SAAS', path: '/micro-saas', icon: MicroSaas },
    { name: 'Case Studies', path: '/case-studies', icon: CaseStudies },
    { name: 'Blog', path: '/blog', icon: Blog },
    { name: 'Contact', path: '/contact', icon: Contact }
  ];

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'navigation_phone_number',
      });
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 energy-pulse">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
                <p className="text-xs text-cyan-400">AI & IT Solutions</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              {mainNavItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white"
                      onClick={closeAllMenus}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
              <button
                onClick={toggleSidebar}
                className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
                aria-label="Open sidebar"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button text-sm px-4 py-2"
              >
                <Phone className="w-4 h-4 mr-1" />
                Call
              </a>
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Services Dropdown */}
          {servicesOpen && (
            <div className="absolute top-full left-0 mt-2 w-full max-w-6xl bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-2xl transition-all duration-300">
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-4 neon-text">Our Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center space-x-2 mb-3">
                        <category.icon className={`w-5 h-5 ${category.color}`} />
                        <span className="text-sm font-semibold text-white">{category.title}</span>
                      </div>
                      <div className="space-y-2">
                        {category.services.slice(0, 6).map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            to={service.path}
                            className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded-lg transition-colors group"
                            onClick={closeAllMenus}
                          >
                            <div className="flex items-center space-x-2">
                              {service.icon && <service.icon className="w-4 h-4" />}
                              <div>
                                <div className="font-medium">{service.name}</div>
                                <div className="text-xs text-gray-500 group-hover:text-cyan-500">
                                  {service.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                        {category.services.length > 6 && (
                          <Link
                            to={`/${category.title.toLowerCase().replace(' ', '-')}`}
                            className="block px-3 py-2 text-sm text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors font-medium"
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
                    className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                    onClick={closeAllMenus}
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Mobile menu */}
          {isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md flex items-center space-x-2"
                    onClick={closeAllMenus}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={closeAllMenus}></div>
          <div className="fixed right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-400/20 shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-white neon-text">Quick Access</h2>
                <button
                  onClick={closeAllMenus}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Quick Links */}
                <div>
                  <h3 className="text-sm font-semibold text-cyan-400 mb-3">Quick Links</h3>
                  <div className="space-y-2">
                    {mainNavItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-lg transition-colors flex items-center space-x-2"
                        onClick={closeAllMenus}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Popular Services */}
                <div>
                  <h3 className="text-sm font-semibold text-cyan-400 mb-3">Popular Services</h3>
                  <div className="space-y-2">
                    {serviceCategories[0].services.slice(0, 5).map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-lg transition-colors"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-sm font-semibold text-cyan-400 mb-3">Contact Us</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+13024640950"
                      onClick={handlePhoneClick}
                      className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>(302) 464-0950</span>
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>kleber@ziontechgroup.com</span>
                    </a>
                    <div className="flex items-start space-x-2 text-sm text-gray-300">
                      <MapPin className="w-4 h-4 mt-0.5" />
                      <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

EnhancedNavigation.displayName = 'EnhancedNavigation';
export default EnhancedNavigation;