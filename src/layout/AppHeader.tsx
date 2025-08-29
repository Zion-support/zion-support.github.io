import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Star, TrendingUp, Award, Settings, Phone, Mail, MapPin, Building, ArrowRight } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate search
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const mainNavigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services-overview', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/ai-services', current: false, hasDropdown: true },
    { name: 'Company', href: '/about', current: false, hasDropdown: true },
    { name: 'Support', href: '/help', current: false, hasDropdown: true },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { name: 'AI & Analytics', href: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science' },
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Rocket, description: 'Simulation & Monitoring' },
    { name: 'Cybersecurity', href: '/services/ai-compliance-copilot', icon: Shield, description: 'AI-Powered Security' },
    { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' },
    { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Smart Devices & Networks' },
    { name: 'Blockchain', href: '/services/blockchain-enterprise-solutions', icon: Lock, description: 'DeFi & Smart Contracts' },
    { name: 'Healthcare Tech', href: '/services/healthcare-tech', icon: Heart, description: 'AI Medicine & Diagnostics' },
    { name: 'Sustainability', href: '/services/sustainability', icon: Globe, description: 'Green IT Solutions' },
    { name: 'Micro SaaS', href: '/services/micro-saas-solutions', icon: ShoppingCart, description: 'Productized SaaS for niches' },
    { name: 'AI Auto Email', href: '/services/ai-auto-email-responder', icon: MessageCircle, description: 'Faster replies, CRM logging' },
    { name: 'Feedback Surveys', href: '/services/mobile-feedback-surveys', icon: Users, description: 'NPS/CSAT with AI insights' },
    { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: BookOpen, description: 'On-brand AI content' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization' },
  ];

  const servicesCategories = [
    {
      name: 'Core Services',
      icon: Settings,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'Services Overview', href: '/services-overview', description: 'Complete service portfolio' },
        { name: 'AI Services', href: '/ai-services', description: 'AI-powered solutions' },
        { name: 'IT Services', href: '/it-services', description: 'Enterprise IT solutions' },
        { name: 'Micro SaaS', href: '/micro-saas', description: 'Scalable software solutions' }
      ]
    },
    {
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI-powered sales automation' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI content generation' },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', description: 'Process automation & optimization' },
        { name: 'AI Customer Experience', href: '/services/ai-customer-experience-platform', description: 'CX optimization & personalization' },
        { name: 'AI Supply Chain', href: '/services/ai-supply-chain-optimization', description: 'Demand forecasting & logistics' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', description: 'Threat detection & response' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-600 to-emerald-600',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure & Automation' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cost optimization' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture', description: 'Network security' }
      ]
    },
    {
      name: 'Digital Solutions',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      services: [
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Simulation & Monitoring' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge', description: 'Smart devices & networks' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', description: 'DeFi & smart contracts' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', description: 'Distributed computing' }
      ]
    },
    {
      name: 'Emerging Tech',
      icon: Zap,
      color: 'from-yellow-600 to-orange-600',
      services: [
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', description: 'Quantum computing & AI' },
        { name: 'Space Technology', href: '/services/space-tech', description: 'Space tech solutions' },
        { name: 'Green IT', href: '/services/green-it', description: 'Sustainable technology' },
        { name: 'Healthcare Technology', href: '/services/healthcare-tech', description: 'Medical AI & diagnostics' }
      ]
    },
    {
      name: 'Industry Solutions',
      icon: Building,
      color: 'from-indigo-600 to-purple-600',
      services: [
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'IT Consulting', href: '/services/it-consulting', description: 'Strategic IT guidance' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Business modernization' },
        { name: 'Onsite Support', href: '/services/onsite-support', description: 'Field technical support' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', description: 'Our story and mission' },
    { name: 'Leadership', href: '/about#leadership', description: 'Meet our team' },
    { name: 'Careers', href: '/careers', description: 'Join our team' },
    { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
    { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
    { name: 'Press', href: '/about#press', description: 'Media resources' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help', description: 'Self-service support' },
    { name: 'Documentation', href: '/docs', description: 'Technical guides' },
    { name: 'Training', href: '/training', description: 'Learning resources' },
    { name: 'Community', href: '/community', description: 'User community' },
    { name: 'Support', href: '/support', description: 'Technical support' },
    { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <button
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Services Mega Menu */}
                    {item.name === 'Services' && (
                      <div className="absolute top-full left-0 w-screen max-w-6xl bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-8">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {servicesCategories.slice(0, 3).map((category) => (
                              <div key={category.name}>
                                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                                  <category.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3">{category.name}</h3>
                                <ul className="space-y-2">
                                  {category.services.map((service) => (
                                    <li key={service.name}>
                                      <Link
                                        to={service.href}
                                        className="text-gray-300 hover:text-white transition-colors text-sm flex items-center justify-between group"
                                      >
                                        <span>{service.name}</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                      </Link>
                                      <p className="text-gray-500 text-xs mt-1">{service.description}</p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          
                          {/* View All Services CTA */}
                          <div className="mt-8 pt-6 border-t border-slate-700/50">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-2">Explore All Services</h4>
                                <p className="text-gray-400">Discover our complete portfolio of innovative solutions</p>
                              </div>
                              <Link
                                to="/innovative-services-showcase-2025"
                                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all"
                              >
                                View All Services
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Solutions Dropdown */}
                    {item.name === 'Solutions' && (
                      <div className="absolute top-full left-0 w-80 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">AI & Technology Solutions</h3>
                          <ul className="space-y-3">
                            {services.slice(0, 8).map((service) => (
                              <li key={service.name}>
                                <Link
                                  to={service.href}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                                >
                                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                                    <service.icon className="w-5 h-5 text-cyan-400" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                      {service.name}
                                    </div>
                                    <div className="text-gray-400 text-sm">{service.description}</div>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Company Dropdown */}
                    {item.name === 'Company' && (
                      <div className="absolute top-full left-0 w-64 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">About Zion Tech Group</h3>
                          <ul className="space-y-3">
                            {companyLinks.map((link) => (
                              <li key={link.name}>
                                <Link
                                  to={link.href}
                                  className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                                >
                                  <div>
                                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                      {link.name}
                                    </div>
                                    <div className="text-gray-400 text-sm">{link.description}</div>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Support Dropdown */}
                    {item.name === 'Support' && (
                      <div className="absolute top-full left-0 w-64 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Support & Resources</h3>
                          <ul className="space-y-3">
                            {supportLinks.map((link) => (
                              <li key={link.name}>
                                <Link
                                  to={link.href}
                                  className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                                >
                                  <div>
                                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                      {link.name}
                                    </div>
                                    <div className="text-gray-400 text-sm">{link.description}</div>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Search, Actions, Mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </form>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Contact Info - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">{contactInfo.phone}</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {mainNavigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <div className="text-lg font-semibold text-white mb-3">{item.name}</div>
                        <div className="pl-4 space-y-2">
                          {item.name === 'Services' && (
                            <>
                              {servicesCategories.map((category) => (
                                <div key={category.name} className="mb-4">
                                  <div className="text-cyan-400 font-medium mb-2">{category.name}</div>
                                  <ul className="pl-4 space-y-1">
                                    {category.services.slice(0, 3).map((service) => (
                                      <li key={service.name}>
                                        <Link
                                          to={service.href}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="text-gray-300 hover:text-white transition-colors text-sm"
                                        >
                                          {service.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                              <Link
                                to="/innovative-services-showcase-2025"
                                onClick={() => setMobileMenuOpen(false)}
                                className="inline-block px-4 py-2 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors"
                              >
                                View All Services
                              </Link>
                            </>
                          )}
                          {item.name === 'Solutions' && (
                            <ul className="space-y-2">
                              {services.slice(0, 6).map((service) => (
                                <li key={service.name}>
                                  <Link
                                    to={service.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                  >
                                    {service.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                          {item.name === 'Company' && (
                            <ul className="space-y-2">
                              {companyLinks.map((link) => (
                                <li key={link.name}>
                                  <Link
                                    to={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                          {item.name === 'Support' && (
                            <ul className="space-y-2">
                              {supportLinks.map((link) => (
                                <li key={link.name}>
                                  <Link
                                    to={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-lg font-semibold text-white hover:text-cyan-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-slate-700/50">
                <div className="space-y-3">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{contactInfo.phone}</span>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className="flex items-start space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 mt-0.5" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
