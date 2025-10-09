import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Heart, CreditCard, Music, GraduationCap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      services: [
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', icon: '📈', popular: true },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true },
        { name: 'AI Code Review Assistant', path: '/ai-code-generation', description: 'Automated code analysis', icon: '🔍', popular: false },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoice creation', icon: '💰', popular: true },
        { name: 'AI Lead Scoring', path: '/ai-lead-scoring', description: 'Intelligent lead qualification', icon: '🎯', popular: true },
        { name: 'AI Sales Forecasting', path: '/ai-sales-forecasting', description: 'Advanced sales predictions', icon: '📊', popular: true },
        { name: 'AI E-commerce Optimizer', path: '/ai-ecommerce-optimizer', description: 'E-commerce optimization', icon: '🛒', popular: true },
        { name: 'AI Design Assistant', path: '/ai-design-assistant', description: 'AI-powered design tool', icon: '🎨', popular: false },
        { name: 'AI Content Generator', path: '/ai-content-generation', description: 'AI content creation', icon: '✍️', popular: true },
        { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Document automation', icon: '📄', popular: true },
        { name: 'AI CRM System', path: '/ai-crm', description: 'Intelligent customer management', icon: '👥', popular: true },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data insights', icon: '📊', popular: true },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI-powered security', icon: '🔒', popular: true },
        { name: 'AI A/B Testing', path: '/ai-ab-testing', description: 'Intelligent testing platform', icon: '🧪', popular: false },
        { name: 'AI Customer Insights', path: '/ai-customer-insights', description: 'Customer behavior analysis', icon: '👁️', popular: true },
        { name: 'AI Computer Vision', path: '/ai-computer-vision', description: 'Image recognition solutions', icon: '👁️', popular: true },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Creative content platform', icon: '🎬', popular: true },
        { name: 'AI Automation', path: '/ai-automation', description: 'Workflow automation', icon: '⚙️', popular: true },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced analytics platform', icon: '📈', popular: true },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Document intelligence', icon: '📋', popular: true },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial technology solutions', icon: '💳', popular: true }
      ]
    },
    {
      title: 'AI Solutions',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
        { name: 'Machine Learning', path: '/machine-learning', description: 'Custom ML models', icon: '🧠', popular: true },
        { name: 'Natural Language Processing', path: '/nlp', description: 'Text analysis and generation', icon: '💬', popular: true },
        { name: 'Computer Vision', path: '/computer-vision', description: 'Image and video analysis', icon: '👁️', popular: true },
        { name: 'Predictive Analytics', path: '/predictive-analytics', description: 'Future trend prediction', icon: '🔮', popular: true },
        { name: 'AI Consulting', path: '/ai-consulting', description: 'Strategic AI guidance', icon: '💡', popular: true }
      ]
    },
    {
      title: 'IT Services',
      icon: Settings,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      hoverColor: 'hover:bg-green-500/20',
      services: [
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Seamless cloud transition', icon: '☁️', popular: true },
        { name: 'DevOps & CI/CD', path: '/devops', description: 'Automated deployment', icon: '🚀', popular: true },
        { name: 'Database Management', path: '/database-management', description: 'Database optimization', icon: '🗄️', popular: true },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Advanced security solutions', icon: '🛡️', popular: true },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Technology strategy', icon: '💼', popular: true }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Target,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      hoverColor: 'hover:bg-orange-500/20',
      services: [
        { name: 'Healthcare AI', path: '/healthcare-ai', description: 'Medical AI solutions', icon: '🏥', popular: true },
        { name: 'Financial Services', path: '/financial-services', description: 'Fintech innovations', icon: '💰', popular: true },
        { name: 'E-commerce', path: '/ecommerce', description: 'Online retail optimization', icon: '🛒', popular: true },
        { name: 'Manufacturing', path: '/manufacturing', description: 'Smart manufacturing', icon: '🏭', popular: true },
        { name: 'Education', path: '/education', description: 'EdTech solutions', icon: '🎓', popular: true }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Services Dropdown */}
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-slate-900/95 backdrop-blur-lg border border-cyan-400/20 rounded-xl shadow-2xl z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {serviceCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-4">
                          <div className="flex items-center space-x-2 mb-4">
                            <category.icon className={`w-5 h-5 ${category.color}`} />
                            <h3 className={`text-lg font-semibold ${category.color}`}>
                              {category.title}
                            </h3>
                          </div>
                          <div className="space-y-2">
                            {category.services.slice(0, 6).map((service, serviceIndex) => (
                              <div key={serviceIndex}>
                                <Link
                                  to={service.path}
                                  className={`block px-3 py-2 text-sm text-gray-300 hover:text-white ${category.hoverColor} rounded-lg transition-all duration-200 group`}
                                  onClick={closeAllMenus}
                                >
                                  <div className="flex items-center space-x-2">
                                    <span className="text-lg">{service.icon}</span>
                                    <div className="flex-1">
                                      <div className="flex items-center space-x-1">
                                        <span className="font-medium">{service.name}</span>
                                        {service.popular && (
                                          <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full">
                                            Popular
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs text-gray-400 mt-1">
                                        {service.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                                {serviceIndex === 5 && category.services.length > 6 && (
                                  <Link
                                    to="/services"
                                    className="block px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                                    onClick={closeAllMenus}
                                  >
                                    View All →
                                  </Link>
                                )}
                              </div>
                            ))}
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
              to="/about" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
              onClick={closeAllMenus}
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
              onClick={closeAllMenus}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-lg border-t border-cyan-400/20">
              <Link
                to="/services"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Services
              </Link>
              <Link
                to="/case-studies"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                  onClick={closeAllMenus}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

Navigation.displayName = 'Navigation';
export default Navigation;