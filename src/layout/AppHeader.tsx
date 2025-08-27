import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, BarChart3 } from 'lucide-react';
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

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false },
    { name: 'AI Services', href: '/ai-services', current: false },
    { name: 'IT Services', href: '/it-services', current: false },
    { name: 'Micro SaaS', href: '/micro-saas', current: false },
    { name: 'Pricing', href: '/pricing', current: false },
    { name: 'Partners', href: '/partners', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Help', href: '/help', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
    { name: 'Careers', href: '/careers', current: false },
  ];

  const services = [
    { name: 'AI & Analytics', href: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science', category: 'AI' },
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Rocket, description: 'Simulation & Monitoring', category: 'IoT' },
    { name: 'Cybersecurity', href: '/services/ai-compliance-assistant', icon: Shield, description: 'AI-Powered Security', category: 'Security' },
    { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation', category: 'Cloud' },
    { name: 'IoT & Edge', href: '/services/it-infrastructure', icon: Cpu, description: 'Smart Devices & Networks', category: 'IoT' },
    { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3, description: 'Business Intelligence & Insights', category: 'Analytics' },
    { name: 'Healthcare Tech', href: '/services/ai-compliance-assistant', icon: Heart, description: 'AI Medicine & Diagnostics', category: 'Healthcare' },
    { name: 'Sustainability', href: '/services/green-it', icon: Globe, description: 'Green IT Solutions', category: 'Sustainability' },
    { name: 'Micro SaaS', href: '/services/micro-saas-solutions', icon: ShoppingCart, description: 'Productized SaaS for niches', category: 'SaaS' },
    { name: 'AI Auto Email', href: '/services/ai-auto-email-responder', icon: MessageCircle, description: 'Faster replies, CRM logging', category: 'AI' },
    { name: 'Mobile Surveys', href: '/services/mobile-feedback-surveys', icon: Users, description: 'NPS/CSAT with AI insights', category: 'AI' },
    { name: 'Compliance Copilot', href: '/services/ai-compliance-copilot', icon: Shield, description: 'SOC2/ISO evidence automation', category: 'Compliance' },
    { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: BookOpen, description: 'On-brand AI content', category: 'AI' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization', category: 'FinOps' },
    { name: 'Returns Management', href: '/services/returns-management', icon: ShoppingCart, description: 'E‑commerce RMA automation', category: 'E-commerce' },
    { name: 'Email Sequencer', href: '/services/email-sequencer', icon: MessageCircle, description: 'Automated follow‑ups', category: 'Automation' },
    { name: 'Podcast Transcription', href: '/services/podcast-transcription', icon: BookOpen, description: 'Transcripts & show notes', category: 'AI' },
    { name: 'Micro CRM', href: '/services/micro-crm', icon: Users, description: 'Local business CRM', category: 'CRM' },
    { name: 'Website Analytics', href: '/services/website-analytics', icon: Gauge, description: 'Privacy-first SMB analytics', category: 'Analytics' },
    { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: HelpCircle, description: 'Tickets, SLAs, portals', category: 'IT' },
    { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: ShoppingCart, description: 'Partner revenue platform', category: 'Marketing' },
    { name: 'AI SEO Optimizer', href: '/services/ai-seo', icon: Search, description: 'Semantic SEO & content briefs', category: 'AI' },
    { name: 'Interview Assessment AI', href: '/services/interview-assessment', icon: Users, description: 'Structured interviews & scoring', category: 'AI' },
    { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: MessageCircle, description: 'Tickets, KB, chat & AI', category: 'Support' },
    { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield, description: 'GDPR/CCPA request workflow', category: 'Privacy' },
    { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Shield, description: 'HSTS/CSP automation', category: 'Security' },
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
  ];

  // Group services by category for better organization
  const servicesByCategory = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  const categoryColors = {
    'AI': 'from-cyan-400 to-blue-500',
    'IoT': 'from-green-400 to-emerald-500',
    'Security': 'from-red-400 to-pink-500',
    'Cloud': 'from-blue-400 to-indigo-500',
    'Analytics': 'from-purple-400 to-pink-500',
    'Healthcare': 'from-red-400 to-orange-500',
    'Sustainability': 'from-green-400 to-teal-500',
    'SaaS': 'from-indigo-400 to-purple-500',
    'Compliance': 'from-yellow-400 to-orange-500',
    'E-commerce': 'from-pink-400 to-rose-500',
    'Automation': 'from-teal-400 to-cyan-500',
    'CRM': 'from-blue-400 to-cyan-500',
    'Marketing': 'from-purple-400 to-indigo-500',
    'IT': 'from-gray-400 to-slate-500',
    'Support': 'from-blue-400 to-teal-500',
    'Privacy': 'from-indigo-400 to-purple-500',
  };

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'futuristic-nav' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      }`}>
        <div className="container-responsive">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      Zion Tech Group
                    </h1>
                    <p className="text-xs text-slate-400 group-hover:text-cyan-300 transition-colors duration-300">
                      Future Technology Solutions
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.slice(0, 6).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="nav-item px-3 py-2 text-sm font-medium rounded-md relative group"
                >
                  {item.name}
                  {item.name === 'Services' && (
                    <ChevronDown className="ml-1 inline-block w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="nav-item px-3 py-2 text-sm font-medium rounded-md flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                      className="absolute top-full left-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/10 p-6"
                    >
                      <div className="grid grid-cols-2 gap-6">
                        {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
                          <div key={category} className="space-y-3">
                            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                              {category}
                            </h3>
                            <div className="space-y-2">
                              {categoryServices.slice(0, 4).map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="flex items-center p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
                                >
                                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${categoryColors[service.category as keyof typeof categoryColors] || 'from-gray-400 to-slate-500'} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200`}>
                                    <service.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                      {service.name}
                                    </p>
                                    <p className="text-xs text-slate-400 truncate">
                                      {service.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-700/50">
                        <Link
                          to="/services"
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
                        >
                          View All Services
                          <ChevronDown className="ml-1 w-4 h-4 rotate-[-90deg]" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navigation.slice(6).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="nav-item px-3 py-2 text-sm font-medium rounded-md"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services..."
                    className="w-64 pl-10 pr-4 py-2 bg-slate-800/70 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                  {isSearching && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <ZionLoadingSpinner size="sm" />
                    </div>
                  )}
                </div>
              </form>

              {/* Quick Actions */}
              <div className="hidden md:flex items-center space-x-2">
                <button className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200">
                  <User className="w-5 h-5" />
                </button>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
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
              className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/20"
            >
              <div className="container-responsive py-4 space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/70 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </form>

                {/* Mobile Navigation */}
                <div className="grid grid-cols-2 gap-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-3 text-left text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Quick Links */}
                <div className="pt-4 border-t border-slate-700/50">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                    Quick Access
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center p-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors duration-200"
                      >
                        <link.icon className="w-4 h-4 mr-2" />
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="pt-4 border-t border-slate-700/50 text-center">
                  <p className="text-sm text-slate-400 mb-2">
                    Need help? Contact us:
                  </p>
                  <div className="space-y-1 text-sm">
                    <a href="tel:+13024640950" className="block text-cyan-400 hover:text-cyan-300">
                      +1 302 464 0950
                    </a>
                    <a href="mailto:kleber@ziontechgroup.com" className="block text-cyan-400 hover:text-cyan-300">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
