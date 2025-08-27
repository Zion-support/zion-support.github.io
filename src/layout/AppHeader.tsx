import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Star, Target, TrendingUp, Award } from 'lucide-react';
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
    { name: 'Pricing', href: '/pricing', current: false },
    { name: 'Partners', href: '/partners', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Help', href: '/help', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
    { name: 'Careers', href: '/careers', current: false },
  ];

  const services = [
    { name: 'AI & Analytics', href: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science', category: 'AI & Analytics' },
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Rocket, description: 'Simulation & Monitoring', category: 'Digital Twin' },
    { name: 'Cybersecurity', href: '/services/ai-compliance-assistant', icon: Shield, description: 'AI-Powered Security', category: 'Cybersecurity' },
    { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation', category: 'Cloud & DevOps' },
    { name: 'IoT & Edge', href: '/services/it-infrastructure', icon: Cpu, description: 'Smart Devices & Networks', category: 'IoT & Edge' },
    { name: 'Blockchain', href: '/services', icon: Lock, description: 'DeFi & Smart Contracts', category: 'Blockchain' },
    { name: 'Healthcare Tech', href: '/services', icon: Heart, description: 'AI Medicine & Diagnostics', category: 'Healthcare' },
    { name: 'Sustainability', href: '/services/green-it', icon: Globe, description: 'Green IT Solutions', category: 'Sustainability' },
    { name: 'Micro SaaS', href: '/services/micro-saas-solutions', icon: ShoppingCart, description: 'Productized SaaS for niches', category: 'Micro SaaS' },
    { name: 'AI Auto Email', href: '/services/ai-auto-email-responder', icon: MessageCircle, description: 'Faster replies, CRM logging', category: 'AI & Content' },
    { name: 'Mobile Surveys', href: '/services/mobile-feedback-surveys', icon: Users, description: 'NPS/CSAT with AI insights', category: 'AI & Analytics' },
    { name: 'Compliance Copilot', href: '/services/ai-compliance-copilot', icon: Shield, description: 'SOC2/ISO evidence automation', category: 'Cybersecurity' },
    { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: BookOpen, description: 'On-brand AI content', category: 'AI & Content' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization', category: 'AI & Analytics' },
    { name: 'Returns Management', href: '/services/returns-management', icon: ShoppingCart, description: 'E‑commerce RMA automation', category: 'Micro SaaS' },
    { name: 'Email Sequencer', href: '/services/email-sequencer', icon: MessageCircle, description: 'Automated follow‑ups', category: 'AI & Content' },
    { name: 'Podcast Transcription', href: '/services/podcast-transcription', icon: BookOpen, description: 'Transcripts & show notes', category: 'AI & Content' },
    { name: 'Micro CRM', href: '/services/micro-crm', icon: Users, description: 'Local business CRM', category: 'Micro SaaS' },
    { name: 'Website Analytics', href: '/services/website-analytics', icon: Gauge, description: 'Privacy-first SMB analytics', category: 'AI & Analytics' },
    { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: HelpCircle, description: 'Tickets, SLAs, portals', category: 'IT Services' },
    { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: ShoppingCart, description: 'Partner revenue platform', category: 'Micro SaaS' },
    { name: 'AI SEO Optimizer', href: '/services/ai-seo', icon: Search, description: 'Semantic SEO & content briefs', category: 'AI & Marketing' },
    { name: 'Interview Assessment AI', href: '/services/interview-assessment', icon: Users, description: 'Structured interviews & scoring', category: 'AI & HR' },
    { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: MessageCircle, description: 'Tickets, KB, chat & AI', category: 'AI & Customer Service' },
    { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield, description: 'GDPR/CCPA request workflow', category: 'Privacy & Compliance' },
    { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Shield, description: 'HSTS/CSP automation', category: 'Cybersecurity' },
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
  ];

  const featuredServices = [
    { name: '2026 Services', href: '/services2026', icon: Star, description: 'Revolutionary AI, Quantum & Micro SaaS', category: 'Featured', featured: true },
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Advanced AI-powered analytics', category: 'AI & Analytics', featured: true },
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Zap, description: 'Next-generation quantum solutions', category: 'Quantum Computing', featured: true },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      }`}>
        <div className="container-responsive">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group ${
                    item.featured ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-400/30' : ''
                  }`}
                >
                  {item.name}
                  {item.featured && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                {servicesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-[500px] bg-slate-800/95 border border-cyan-400/20 rounded-xl shadow-2xl backdrop-blur-xl animate-fade-in"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-6">
                      {/* Featured Services */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                          <Star className="w-4 h-4" />
                          Featured Services
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                          {featuredServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-center p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group hover:scale-105 border border-cyan-400/20"
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                                <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                              </div>
                              <div className="ml-4 flex-1">
                                <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                  {service.description}
                                </div>
                              </div>
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <ChevronDown className="w-4 h-4 text-cyan-400 rotate-[-90deg]" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* All Services by Category */}
                      <div className="grid grid-cols-2 gap-4">
                        {services.slice(0, 20).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group hover:scale-105"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-slate-600/20 to-slate-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400/20 group-hover:to-blue-500/20 transition-all duration-200">
                              <service.icon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                            </div>
                            <div className="ml-3 flex-1">
                              <div className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">
                                {service.name}
                              </div>
                              <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-slate-700/50">
                        <div className="flex gap-3">
                          <Link
                            to="/services"
                            className="flex-1 text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors py-2 px-4 rounded-lg hover:bg-cyan-400/10"
                          >
                            View All Services
                          </Link>
                          <Link
                            to="/services2026"
                            className="flex-1 text-center text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors py-2 px-4 rounded-lg hover:bg-yellow-400/10 border border-yellow-400/30"
                          >
                            2026 Services →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  />
                  {isSearching && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <ZionLoadingSpinner size="sm" />
                    </div>
                  )}
                </div>
              </form>

              {/* Quick actions */}
              <div className="hidden md:flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200">
                  <User className="w-5 h-5" />
                </button>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
              >
                Get Started
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
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
              className="lg:hidden bg-slate-800/95 border-t border-slate-700/50 backdrop-blur-xl"
            >
              <div className="container-responsive py-6">
                <nav className="space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        item.featured 
                          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/30' 
                          : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      {item.name}
                      {item.featured && (
                        <span className="ml-2 inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                      )}
                    </Link>
                  ))}
                  
                  {/* Mobile Services Section */}
                  <div className="pt-4 border-t border-slate-700/50">
                    <h3 className="px-4 text-sm font-semibold text-cyan-300 mb-3">Featured Services</h3>
                    <div className="space-y-2">
                      {featuredServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                        >
                          <service.icon className="w-5 h-5 text-cyan-400 mr-3" />
                          <span className="text-sm">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
