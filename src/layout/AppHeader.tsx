import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Star, TrendingUp, Award, Settings, Phone, Mail, MapPin, Building } from 'lucide-react';
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
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', description: 'Advanced threat detection' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare data insights' }
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
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure' }
      ]
    },
    {
      name: 'Digital Solutions',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      services: [
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Simulation & Monitoring' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge', description: 'Edge processing & analytics' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', description: 'Enterprise blockchain' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Business transformation' }
      ]
    },
    {
      name: 'Specialized Services',
      icon: Award,
      color: 'from-indigo-600 to-purple-600',
      services: [
        { name: 'Healthcare Technology', href: '/services/healthcare-tech', description: 'Medical AI & analytics' },
        { name: 'Green IT Solutions', href: '/services/green-it', description: 'Sustainable technology' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Quantum solutions' },
        { name: 'Space Technology', href: '/services/space-tech', description: 'Space industry solutions' }
      ]
    },
    {
      name: 'Innovation Hub',
      icon: Star,
      color: 'from-yellow-600 to-orange-600',
      services: [
        { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', description: 'Latest innovations' },
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-showcase-2030', description: 'Future technologies' },
        { name: 'Pricing Guide 2027', href: '/pricing', description: 'Comprehensive pricing' },
        { name: 'Pricing Guide 2030', href: '/pricing-2030', description: 'Future pricing trends' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', description: 'Our story and mission' },
    { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
    { name: 'Careers', href: '/careers', description: 'Join our team' },
    { name: 'Blog', href: '/blog', description: 'Latest insights and news' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help', description: 'Documentation and guides' },
    { name: 'Support', href: '/support', description: 'Technical support' },
    { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
    { name: 'Community', href: '/community', description: 'User community' },
    { name: 'Training', href: '/training', description: 'Learning resources' },
    { name: 'Onsite Support', href: '/onsite-support', description: 'On-premise assistance' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    website: 'https://ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                Zion Tech Group
              </div>
              <div className="text-xs lg:text-sm text-cyan-300/70">
                Innovation • Technology • Solutions
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className="flex items-center space-x-1 text-white hover:text-cyan-300 transition-colors py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {item.name === 'Services' && servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-screen max-w-6xl -ml-64 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-2xl shadow-2xl">
                        <div className="p-6">
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                            {servicesCategories.map((category) => (
                              <div key={category.name} className="space-y-3">
                                <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-gradient-to-r ${category.color} text-white text-sm font-semibold`}>
                                  <category.icon className="w-4 h-4" />
                                  <span>{category.name}</span>
                                </div>
                                <div className="space-y-2">
                                  {category.services.map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="block p-2 rounded-lg hover:bg-slate-800/50 transition-colors group"
                                    >
                                      <div className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                                        {service.name}
                                      </div>
                                      <div className="text-xs text-slate-400">
                                        {service.description}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Quick Actions */}
                          <div className="mt-6 pt-6 border-t border-slate-700">
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-slate-400">
                                Need help choosing? Contact our experts
                              </div>
                              <div className="flex space-x-3">
                                <a
                                  href={`tel:${contactInfo.phone}`}
                                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm"
                                >
                                  <Phone className="w-4 h-4 mr-2" />
                                  Call Now
                                </a>
                                <a
                                  href="/request-quote"
                                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm"
                                >
                                  <DollarSign className="w-4 h-4 mr-2" />
                                  Get Quote
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-white hover:text-cyan-300 transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-slate-800/70 border border-cyan-400/20 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              />
            </form>

            {/* Contact Button */}
            <a
              href={`tel:${contactInfo.phone}`}
              className="hidden md:inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-cyan-300 transition-colors"
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20"
          >
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/70 border border-cyan-400/20 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                  />
                </div>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {mainNavigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div className="space-y-2">
                        <div className="text-lg font-semibold text-white mb-2">{item.name}</div>
                        {item.name === 'Services' && (
                          <div className="pl-4 space-y-3">
                            {servicesCategories.map((category) => (
                              <div key={category.name} className="space-y-2">
                                <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-gradient-to-r ${category.color} text-white text-sm font-semibold`}>
                                  <category.icon className="w-4 h-4" />
                                  <span>{category.name}</span>
                                </div>
                                <div className="pl-4 space-y-2">
                                  {category.services.map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="block py-2 text-slate-300 hover:text-cyan-300 transition-colors"
                                      onClick={() => setMobileMenuOpen(false)}
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
                    ) : (
                      <Link
                        to={item.href}
                        className="block text-lg font-semibold text-white hover:text-cyan-300 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <div className="space-y-3">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center space-x-3 text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{contactInfo.phone}</span>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center space-x-3 text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className="flex items-start space-x-3 text-cyan-300">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
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
