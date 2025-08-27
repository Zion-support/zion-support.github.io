import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool, Activity } from 'lucide-react';
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
    { name: '2026 Services', href: '/services2026', current: false, featured: true },
    { name: 'AI Services', href: '/ai-services', current: false },
    { name: 'IT Services', href: '/it-services', current: false },
    { name: 'Micro SaaS', href: '/micro-saas', current: false },
    { name: 'Solutions', href: '/solutions', current: false },
    { name: 'AI Solutions', href: '/ai-solutions', current: false },
    { name: 'Case Studies', href: '/case-studies', current: false },
    { name: 'Research', href: '/research-development', current: false },
    { name: 'Events', href: '/events', current: false },
    { name: 'News', href: '/news', current: false },
    { name: 'Pricing', href: '/pricing', current: false },
    { name: 'Partners', href: '/partners', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Help', href: '/help', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
    { name: 'Careers', href: '/careers', current: false },
  ];

  const services = [
    { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', icon: Workflow, description: 'Intelligent Process Automation', featured: true },
    { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', icon: Shield, description: 'AI-Powered Security', featured: true },
    { name: 'Quantum Computing', href: '/services/quantum-computing-solutions', icon: Atom, description: 'Quantum Solutions', featured: true },
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science' },
    { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Cpu, description: 'Smart Devices & Networks' },
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Rocket, description: 'Simulation & Monitoring' },
    { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' },
    { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3, description: 'Business Intelligence & Insights' },
    { name: 'Healthcare Tech', href: '/services/ai-compliance-assistant', icon: Heart, description: 'AI Medicine & Diagnostics' },
    { name: 'Sustainability', href: '/services/green-it', icon: Globe, description: 'Green IT Solutions' },
    { name: 'Micro SaaS', href: '/services/micro-saas-solutions', icon: ShoppingCart, description: 'Productized SaaS for niches' },
    { name: 'AI Auto Email', href: '/services/ai-auto-email-responder', icon: MessageCircle, description: 'Faster replies, CRM logging' },
    { name: 'Mobile Surveys', href: '/services/mobile-feedback-surveys', icon: Users, description: 'NPS/CSAT with AI insights' },
    { name: 'Compliance Copilot', href: '/services/ai-compliance-copilot', icon: Shield, description: 'SOC2/ISO evidence automation' },
    { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: BookOpen, description: 'On-brand AI content' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization' },
    { name: 'Returns Management', href: '/services/returns-management', icon: ShoppingCart, description: 'E‑commerce RMA automation' },
    { name: 'Email Sequencer', href: '/services/email-sequencer', icon: MessageCircle, description: 'Automated follow‑ups' },
    { name: 'Podcast Transcription', href: '/services/podcast-transcription', icon: BookOpen, description: 'Transcripts & show notes' },
    { name: 'Micro CRM', href: '/services/micro-crm', icon: Users, description: 'Local business CRM' },
    { name: 'Website Analytics', href: '/services/website-analytics', icon: Gauge, description: 'Privacy-first SMB analytics' },
    { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: HelpCircle, description: 'Tickets, SLAs, portals' },
    { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: ShoppingCart, description: 'Partner revenue platform' },
    { name: 'AI SEO Optimizer', href: '/services/ai-seo', icon: Search, description: 'Semantic SEO & content briefs' },
    { name: 'Interview Assessment AI', href: '/services/interview-assessment', icon: Users, description: 'Structured interviews & scoring' },
    { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: MessageCircle, description: 'Tickets, KB, chat & AI' },
    { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield, description: 'GDPR/CCPA request workflow' },
    { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Shield, description: 'HSTS/CSP automation' },
    { name: 'AI Project Manager', href: '/services/ai-project-manager', icon: Target, description: 'Intelligent project management' },
    { name: 'AI Content Generator', href: '/services/ai-content-generator', icon: PenTool, description: 'AI-powered content creation' },
    { name: 'AI Customer Support', href: '/services/ai-customer-support', icon: MessageCircle, description: '24/7 intelligent support' },
    { name: 'AI Data Analytics', href: '/services/ai-data-analytics', icon: BarChart3, description: 'Predictive business intelligence' },
    { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: Target, description: 'Smart marketing optimization' },
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Support', href: '/support', icon: MessageCircle },
    { name: 'Documentation', href: '/documentation', icon: BookOpen },
    { name: 'Status', href: '/status', icon: Activity },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400">Innovation • Intelligence • Impact</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    className="absolute top-full left-0 w-[800px] bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-6"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {/* Featured Services */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Star className="w-5 h-5 text-yellow-400 mr-2" />
                          Featured Services
                        </h3>
                        <div className="space-y-3">
                          {services.filter(s => s.featured).map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
                            >
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                <service.icon className="w-5 h-5 text-blue-400" />
                              </div>
                              <div>
                                <div className="font-medium text-white group-hover:text-blue-400 transition-colors duration-200">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-400">{service.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      {/* All Services */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">All Services</h3>
                        <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
                            >
                              <service.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                                {service.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Navigation Items */}
            {navigation.slice(0, 6).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 relative group ${
                  item.featured ? 'font-semibold' : ''
                }`}
              >
                {item.name}
                {item.featured && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></span>
                )}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:block relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                />
                {isSearching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <ZionLoadingSpinner size="sm" />
                  </div>
                )}
              </div>
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Menu */}
            <div className="hidden md:flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200">
                <User className="w-5 h-5" />
              </button>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
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
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                />
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-lg rounded-lg transition-all duration-200 ${
                      item.featured
                        ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-blue-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {item.name}
                    {item.featured && (
                      <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                        Featured
                      </span>
                    )}
                  </Link>
                ))}
              </nav>

              {/* Mobile Quick Links */}
              <div className="pt-4 border-t border-slate-700/50">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Quick Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-2 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      <link.icon className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-gray-300">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-700/50">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
