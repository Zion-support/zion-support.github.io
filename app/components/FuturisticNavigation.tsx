'use client';
import React, { useState, useEffect } from 'react';
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
  Home,
  Info,
  DollarSign,
  FileText,
  Users as Team,
  Briefcase,
  MessageSquare,
  Settings,
  Globe,
  Sparkles
} from 'lucide-react';

const FuturisticNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
        setAiServicesOpen(false);
        setItServicesOpen(false);
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
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setIsOpen(false);
  };

  const mainNavItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'Pricing', path: '/pricing', icon: DollarSign },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Team', path: '/team', icon: Team },
    { name: 'Careers', path: '/careers', icon: Briefcase },
    { name: 'Contact', path: '/contact', icon: MessageSquare }
  ];

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Business process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Healthcare AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI-powered security' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'Automated content creation' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'Intelligent support systems' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Sales process optimization' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-500/10',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Complete IT solutions' },
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Advanced security services' },
        { name: 'DevOps', path: '/devops', description: 'Development operations' },
        { name: 'Database Management', path: '/database-management', description: 'Database optimization' },
        { name: 'Network Services', path: '/network-services', description: 'Network infrastructure' },
        { name: 'Web Development', path: '/web-development', description: 'Custom web applications' },
        { name: 'Mobile Development', path: '/mobile-development', description: 'Mobile app solutions' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      services: [
        { name: 'Micro SAAS', path: '/micro-saas', description: 'Specialized software solutions' },
        { name: 'AI Content Generator', path: '/ai-content-generator', description: 'Automated content creation' },
        { name: 'AI Social Scheduler', path: '/ai-social-scheduler', description: 'Social media automation' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Smart invoicing system' },
        { name: 'AI Expense Tracker', path: '/ai-expense-tracker', description: 'Intelligent expense management' },
        { name: 'AI Password Manager', path: '/ai-password-manager', description: 'Secure password management' },
        { name: 'AI Email Assistant', path: '/ai-email-assistant', description: 'Email productivity tools' },
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Project management AI' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-lg border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={closeAllMenus}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white neon-text">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                onClick={closeAllMenus}
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Settings className="w-4 h-4" />
                <span className="font-medium">Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>

              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-black/90 backdrop-blur-lg rounded-2xl border border-cyan-400/20 shadow-2xl shadow-cyan-500/10 p-6"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="grid grid-cols-1 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                            <category.icon className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.slice(0, 4).map((service, idx) => (
                            <Link
                              key={idx}
                              to={service.path}
                              className="block p-2 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                              onClick={closeAllMenus}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                                  {service.name}
                                </span>
                                <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                              </div>
                              <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Buttons */}
            <div className="flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                <Mail className="w-4 h-4" />
                <span className="font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-lg rounded-2xl border border-cyan-400/20 shadow-2xl shadow-cyan-500/10 mt-4 p-6">
            <div className="space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                    onClick={closeAllMenus}
                  >
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Services */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                <div className="space-y-4">
                  {serviceCategories.map((category, index) => (
                    <div key={index}>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                          <category.icon className="w-3 h-3 text-white" />
                        </div>
                        <h4 className="font-medium text-cyan-400">{category.title}</h4>
                      </div>
                      <div className="ml-8 space-y-2">
                        {category.services.slice(0, 3).map((service, idx) => (
                          <Link
                            key={idx}
                            to={service.path}
                            className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t border-gray-700 pt-6">
                <div className="space-y-3">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+1 302 464 0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>kleber@ziontechgroup.com</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
        }
        
        .neon-glow {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3);
        }
      `}</style>
    </nav>
  );
};

export default FuturisticNavigation;