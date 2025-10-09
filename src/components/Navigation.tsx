'use client';
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Brain, 
  Code, 
  Zap, 
  Cloud, 
  Shield, 
  BarChart, 
  Users, 
  Globe, 
  ChevronDown,
  ArrowRight,
  Star,
  Award,
  TrendingUp
} from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions', icon: Brain, popular: true },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation', icon: BarChart, popular: true },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation', icon: Zap, popular: true },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions', icon: Shield, popular: false },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications', icon: TrendingUp, popular: false },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation', icon: Globe, popular: false },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights', icon: BarChart, popular: false },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions', icon: Shield, popular: false }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support', icon: Code, popular: true },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud migration & setup', icon: Cloud, popular: true },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions', icon: Shield, popular: true },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'DevOps automation', icon: Zap, popular: false },
    { name: 'Database Management', url: '/database-management', description: 'Database management', icon: BarChart, popular: false },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning', icon: Users, popular: false },
    { name: 'IT Support & Maintenance', url: '/it-support', description: '24/7 IT management', icon: Globe, popular: false },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure', icon: Code, popular: false }
  ];

  const microSaasServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', price: '$99/month', popular: true },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media', icon: '📱', price: '$79/month', popular: true },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics', description: 'AI-powered analytics', icon: '📈', price: '$149/month', popular: true },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', price: '$59/month', popular: true },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support', icon: '🤖', price: '$199/month', popular: true },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis', icon: '🔍', price: '$129/month', popular: false },
    { name: 'AI Content Generator', url: '/ai-content-generation', description: 'AI content creation', icon: '✍️', price: '$39/month', popular: false },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'AI-driven SEO', icon: '🎯', price: '$49/month', popular: false }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-300"
                onMouseEnter={() => setActiveDropdown('ai')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-lg rounded-lg shadow-xl border border-cyan-400/20 p-4 z-50">
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
                      >
                        <service.icon className="w-5 h-5 text-cyan-400" />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-white text-sm font-medium">{service.name}</span>
                            {service.popular && <Star className="w-3 h-3 text-yellow-400" />}
                          </div>
                          <p className="text-xs text-gray-400">{service.description}</p>
                        </div>
                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      </Link>
                    ))}
                    <div className="border-t border-gray-700 pt-2 mt-2">
                      <Link
                        to="/ai-services"
                        className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium py-2"
                      >
                        <span>View All AI Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors duration-300"
                onMouseEnter={() => setActiveDropdown('it')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Code className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-lg rounded-lg shadow-xl border border-purple-400/20 p-4 z-50">
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
                      >
                        <service.icon className="w-5 h-5 text-purple-400" />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-white text-sm font-medium">{service.name}</span>
                            {service.popular && <Star className="w-3 h-3 text-yellow-400" />}
                          </div>
                          <p className="text-xs text-gray-400">{service.description}</p>
                        </div>
                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-purple-400 transition-colors" />
                      </Link>
                    ))}
                    <div className="border-t border-gray-700 pt-2 mt-2">
                      <Link
                        to="/it-services"
                        className="flex items-center justify-center space-x-2 text-purple-400 hover:text-purple-300 text-sm font-medium py-2"
                      >
                        <span>View All IT Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-pink-400 transition-colors duration-300"
                onMouseEnter={() => setActiveDropdown('saas')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Zap className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'saas' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-lg rounded-lg shadow-xl border border-pink-400/20 p-4 z-50">
                  <div className="grid grid-cols-1 gap-2">
                    {microSaasServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
                      >
                        <span className="text-2xl">{service.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-white text-sm font-medium">{service.name}</span>
                              {service.popular && <Star className="w-3 h-3 text-yellow-400" />}
                            </div>
                            <span className="text-xs text-pink-400 font-medium">{service.price}</span>
                          </div>
                          <p className="text-xs text-gray-400">{service.description}</p>
                        </div>
                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-pink-400 transition-colors" />
                      </Link>
                    ))}
                    <div className="border-t border-gray-700 pt-2 mt-2">
                      <Link
                        to="/micro-saas"
                        className="flex items-center justify-center space-x-2 text-pink-400 hover:text-pink-300 text-sm font-medium py-2"
                      >
                        <span>View All Micro SAAS</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Links */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-green-400 transition-colors duration-300"
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Users className="w-4 h-4" />
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-lg rounded-lg shadow-xl border border-green-400/20 p-4 z-50">
                  <div className="grid grid-cols-1 gap-2">
                    {companyLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.url}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 text-white text-sm"
                      >
                        <ArrowRight className="w-3 h-3 text-green-400" />
                        <span>{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{contactInfo.phone}</span>
            </div>
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20">
            <div className="container mx-auto px-4 py-6">
              {/* Mobile AI Services */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  AI Services
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {aiServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      <service.icon className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="text-white text-sm font-medium">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    to="/ai-services"
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium py-2"
                    onClick={closeMenu}
                  >
                    View All AI Services →
                  </Link>
                </div>
              </div>

              {/* Mobile IT Services */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  IT Services
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {itServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      <service.icon className="w-4 h-4 text-purple-400" />
                      <div>
                        <div className="text-white text-sm font-medium">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    to="/it-services"
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium py-2"
                    onClick={closeMenu}
                  >
                    View All IT Services →
                  </Link>
                </div>
              </div>

              {/* Mobile Micro SAAS */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-pink-400 mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Micro SAAS
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {microSaasServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      <span className="text-xl">{service.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="text-white text-sm font-medium">{service.name}</div>
                          <div className="text-xs text-pink-400 font-medium">{service.price}</div>
                        </div>
                        <div className="text-xs text-gray-400">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    to="/micro-saas"
                    className="text-pink-400 hover:text-pink-300 text-sm font-medium py-2"
                    onClick={closeMenu}
                  >
                    View All Micro SAAS →
                  </Link>
                </div>
              </div>

              {/* Mobile Company Links */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Company
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.url}
                      className="text-white hover:text-green-400 transition-colors duration-200 text-sm py-1"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Info */}
              <div className="border-t border-gray-700 pt-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-300">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cyber-button inline-flex items-center justify-center w-full mt-4 px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300"
                  onClick={closeMenu}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
