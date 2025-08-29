import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Star, TrendingUp, Award, Settings, Phone, Mail, MapPin, Building, Database, BarChart3, Target, Eye, Workflow, Truck, Leaf, Atom, Satellite } from 'lucide-react';
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
    { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', icon: Workflow, description: 'Process automation with AI optimization' },
    { name: 'AI Customer Experience', href: '/services/ai-customer-experience-platform', icon: Heart, description: 'AI-powered CX personalization' },
    { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', icon: Truck, description: 'Intelligent logistics optimization' },
    { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', icon: Shield, description: 'AI-powered threat detection' },
    { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', icon: Atom, description: 'Next-gen quantum computing' },
    { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', icon: Heart, description: 'Healthcare data insights' },
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science' },
    { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users, description: 'AI-powered sales automation' },
    { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield, description: 'Regulatory compliance automation' },
    { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: BookOpen, description: 'AI content generation' },
    { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', icon: MessageCircle, description: 'Faster replies, CRM logging' },
    { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys', icon: BarChart3, description: 'NPS/CSAT with AI insights' },
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
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', description: 'Process automation with AI optimization' },
        { name: 'AI Customer Experience Platform', href: '/services/ai-customer-experience-platform', description: 'AI-powered CX personalization' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'Intelligent logistics optimization' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI-powered sales automation' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI content generation' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-600 to-emerald-600',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure & Automation' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cost optimization' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations' }
      ]
    },
    {
      name: 'Digital Solutions',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      services: [
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Simulation & Monitoring' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Business process modernization' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-indigo-600 to-purple-600',
      services: [
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', description: 'AI-Powered Security' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', description: 'AI-Powered Security' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture', description: 'Advanced security' }
      ]
    },
    {
      name: 'Emerging Tech',
      icon: Star,
      color: 'from-yellow-600 to-orange-600',
      services: [
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', description: 'Next-gen quantum computing' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Quantum solutions' },
        { name: 'Space Tech Solutions', href: '/services/space-tech', description: 'Aerospace technology' },
        { name: 'Green IT Solutions', href: '/services/green-it', description: 'Sustainable technology' }
      ]
    }
  ];

  const solutionsCategories = [
    {
      name: 'AI Solutions',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      solutions: [
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', description: 'Process automation with AI optimization' },
        { name: 'AI Customer Experience Platform', href: '/services/ai-customer-experience-platform', description: 'AI-powered CX personalization' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'Intelligent logistics optimization' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI-powered sales automation' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI content generation' }
      ]
    },
    {
      name: 'Quantum & Emerging',
      icon: Star,
      color: 'from-indigo-600 to-purple-600',
      solutions: [
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', description: 'Next-gen quantum computing' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', description: 'Advanced security solutions' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare data insights' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Quantum solutions' },
        { name: 'Space Tech Solutions', href: '/services/space-tech', description: 'Aerospace technology' }
      ]
    },
    {
      name: 'Innovation Showcase',
      icon: TrendingUp,
      color: 'from-green-600 to-emerald-600',
      solutions: [
        { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', icon: Star, description: 'Latest cutting-edge solutions' },
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-showcase-2030', icon: TrendingUp, description: 'Future-ready services' },
        { name: 'Pricing Guide 2030', href: '/pricing-2030', icon: DollarSign, description: 'Advanced pricing strategies' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', icon: Workflow, description: 'Process automation with AI optimization' },
    { name: 'AI Customer Experience', href: '/services/ai-customer-experience-platform', icon: Heart, description: 'AI-powered CX personalization' },
    { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', icon: Truck, description: 'Intelligent logistics optimization' },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, description: 'Get custom pricing' },
  ];

  const companyCategories = [
    {
      name: 'About Us',
      icon: Building,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { name: 'About Us', href: '/about', description: 'Our story and mission' },
        { name: 'Team', href: '/team', description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
      ]
    },
    {
      name: 'Resources',
      icon: BookOpen,
      color: 'from-green-600 to-emerald-600',
      items: [
        { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
        { name: 'Press', href: '/press', description: 'Media resources' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research' }
      ]
    }
  ];

  const supportCategories = [
    {
      name: 'Help & Support',
      icon: HelpCircle,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { name: 'Help Center', href: '/help', description: 'Find answers to questions' },
        { name: 'Support Portal', href: '/support', description: 'Technical assistance' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'Contact Support', href: '/contact', description: 'Get in touch' }
      ]
    },
    {
      name: 'Resources',
      icon: BookOpen,
      color: 'from-green-600 to-emerald-600',
      items: [
        { name: 'Documentation', href: '/docs', description: 'Technical guides' },
        { name: 'Training', href: '/training', description: 'Learning resources' },
        { name: 'Community', href: '/community', description: 'Connect with others' },
        { name: 'Onsite Support', href: '/onsite-support', description: 'Field services' }
      ]
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl lg:text-2xl font-bold text-white">Zion Tech</span>
                <span className="block text-xs lg:text-sm text-zion-cyan">Group</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2">
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Services Dropdown */}
                {item.name === 'Services' && (
                  <div className="absolute top-full left-0 w-screen max-w-6xl transform -translate-x-1/4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-4">
                    <div className="bg-slate-800/95 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8 shadow-2xl">
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesCategories.map((category) => (
                          <div key={category.name}>
                            <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium mb-4`}>
                              <category.icon className="w-4 h-4 mr-2" />
                              {category.name}
                            </div>
                            <ul className="space-y-3">
                              {category.services.map((service) => (
                                <li key={service.name}>
                                  <Link
                                    to={service.href}
                                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                                  >
                                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                      <div className="text-white font-medium group-hover:text-zion-cyan transition-colors duration-200">
                                        {service.name}
                                      </div>
                                      <div className="text-sm text-gray-400">{service.description}</div>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Solutions Dropdown */}
                {item.name === 'Solutions' && (
                  <div className="absolute top-full left-0 w-screen max-w-5xl transform -translate-x-1/3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-4">
                    <div className="bg-slate-800/95 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8 shadow-2xl">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {solutionsCategories.map((category) => (
                          <div key={category.name}>
                            <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium mb-4`}>
                              <category.icon className="w-4 h-4 mr-2" />
                              {category.name}
                            </div>
                            <ul className="space-y-3">
                              {category.solutions.map((solution) => (
                                <li key={solution.name}>
                                  <Link
                                    to={solution.href}
                                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                                  >
                                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                      <div className="text-white font-medium group-hover:text-zion-cyan transition-colors duration-200">
                                        {solution.name}
                                      </div>
                                      <div className="text-sm text-gray-400">{solution.description}</div>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Company Dropdown */}
                {item.name === 'Company' && (
                  <div className="absolute top-full left-0 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-4">
                    <div className="bg-slate-800/95 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 shadow-2xl">
                      <div className="space-y-6">
                        {companyCategories.map((category) => (
                          <div key={category.name}>
                            <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium mb-3`}>
                              <category.icon className="w-4 h-4 mr-2" />
                              {category.name}
                            </div>
                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                                  >
                                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                      <div className="text-white font-medium group-hover:text-zion-cyan transition-colors duration-200">
                                        {item.name}
                                      </div>
                                      <div className="text-sm text-gray-400">{item.description}</div>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Support Dropdown */}
                {item.name === 'Support' && (
                  <div className="absolute top-full left-0 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-4">
                    <div className="bg-slate-800/95 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 shadow-2xl">
                      <div className="space-y-6">
                        {supportCategories.map((category) => (
                          <div key={category.name}>
                            <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium mb-3`}>
                              <category.icon className="w-4 h-4 mr-2" />
                              {category.name}
                            </div>
                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                                  >
                                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                      <div className="text-white font-medium group-hover:text-zion-cyan transition-colors duration-200">
                                        {item.name}
                                      </div>
                                      <div className="text-sm text-gray-400">{item.description}</div>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-white transition-colors duration-200"
              >
                {isSearching ? <ZionLoadingSpinner size="sm" /> : <Search className="w-5 h-5" />}
              </button>
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <Link
              to="/request-quote"
              className="inline-flex items-center px-6 py-2 rounded-lg bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-200 transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {isSearching ? <ZionLoadingSpinner size="sm" /> : <Search className="w-5 h-5" />}
                </button>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {mainNavigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                          className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {servicesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.name === 'Services' && services.slice(0, 6).map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block text-gray-400 hover:text-white transition-colors duration-200 py-1"
                              >
                                {service.name}
                              </Link>
                            ))}
                            {item.name === 'Services' && (
                              <Link
                                to="/services-overview"
                                className="block text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-200 py-1 font-medium"
                              >
                                View All Services →
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-700/50">
                <Link
                  to="/request-quote"
                  className="block w-full text-center px-6 py-3 rounded-lg bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-200"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
