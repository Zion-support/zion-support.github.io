import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Atom, Link as LinkIcon, Eye, Server, BarChart3, Target, TrendingUp, Smartphone, Database, Network, Clock, Shield as ShieldIcon, Globe as GlobeIcon, Cpu as CpuIcon, Database as DatabaseIcon, Network as NetworkIcon, Atom as AtomIcon, LinkIcon as LinkIcon2, Server as ServerIcon, BarChart3 as BarChart3Icon, Users as UsersIcon, Clock as ClockIcon, Target as TargetIcon, Eye as EyeIcon, Lock as LockIcon, Smartphone as SmartphoneIcon, TrendingUp as TrendingUpIcon, Rocket as RocketIcon, Heart as HeartIcon, ShoppingCart as ShoppingCartIcon, MessageCircle as MessageCircleIcon, BookOpen as BookOpenIcon, HelpCircle as HelpCircleIcon, DollarSign as DollarSignIcon, Gauge as GaugeIcon, Search as SearchIcon, Star } from 'lucide-react';
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
    // AI & Machine Learning
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Advanced analytics & ML insights', category: 'AI & ML' },
    { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield, description: 'Automated regulatory compliance', category: 'AI & ML' },
    { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users, description: 'Intelligent sales optimization', category: 'AI & ML' },
    { name: 'AI-Powered SEO', href: '/services/ai-seo', icon: Search, description: 'Machine learning SEO optimization', category: 'AI & ML' },
    { name: 'Interview Assessment AI', href: '/services/interview-assessment', icon: Users, description: 'AI-powered candidate evaluation', category: 'AI & ML' },
    
    // Cloud & DevOps
    { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure automation & scaling', category: 'Cloud & DevOps' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'Enterprise infrastructure solutions', category: 'Cloud & DevOps' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization', category: 'Cloud & DevOps' },
    { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: BarChart3, description: 'Financial operations automation', category: 'Cloud & DevOps' },
    
    // Cybersecurity
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Advanced security solutions', category: 'Cybersecurity' },
    { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Lock, description: 'Web security hardening', category: 'Cybersecurity' },
    { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield, description: 'GDPR/CCPA compliance', category: 'Cybersecurity' },
    
    // Digital Transformation
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Eye, description: 'Virtual system replicas', category: 'Digital Transformation' },
    { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap, description: 'Strategic technology consulting', category: 'Digital Transformation' },
    { name: 'IT Consulting', href: '/services/it-consulting', icon: Cpu, description: 'Technology strategy & planning', category: 'Digital Transformation' },
    
    // Emerging Technologies
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, description: 'Quantum algorithms & solutions', category: 'Emerging Tech' },
    { name: 'Blockchain Solutions', href: '/services/blockchain', icon: LinkIcon, description: 'Decentralized applications', category: 'Emerging Tech' },
    { name: 'IoT Edge Computing', href: '/services/iot-edge', icon: Network, description: 'Smart device networks', category: 'Emerging Tech' },
    { name: 'Space Technology', href: '/services/space-tech', icon: Rocket, description: 'Space industry solutions', category: 'Emerging Tech' },
    
    // Micro SaaS
    { name: 'Micro CRM', href: '/services/micro-crm', icon: Users, description: 'Local business CRM', category: 'Micro SaaS' },
    { name: 'Email Sequencer', href: '/services/email-sequencer', icon: MessageCircle, description: 'Automated follow-ups', category: 'Micro SaaS' },
    { name: 'Returns Management', href: '/services/returns-management', icon: ShoppingCart, description: 'E-commerce RMA automation', category: 'Micro SaaS' },
    { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: ShoppingCart, description: 'Partner revenue platform', category: 'Micro SaaS' },
    { name: 'Website Analytics', href: '/services/website-analytics', icon: Gauge, description: 'Privacy-first SMB analytics', category: 'Micro SaaS' },
    { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: HelpCircle, description: 'Tickets, SLAs, portals', category: 'Micro SaaS' },
    { name: 'Mobile Surveys', href: '/services/mobile-survey', icon: Smartphone, description: 'NPS/CSAT with AI insights', category: 'Micro SaaS' },
    { name: 'Podcast Transcription', href: '/services/podcast-transcription', icon: BookOpen, description: 'Transcripts & show notes', category: 'Micro SaaS' },
    { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: BookOpen, description: 'On-brand AI content', category: 'Micro SaaS' },
    { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', icon: MessageCircle, description: 'Faster replies, CRM logging', category: 'Micro SaaS' },
    { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys', icon: Users, description: 'Mobile-first feedback collection', category: 'Micro SaaS' },
    { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', icon: Shield, description: 'SOC2/ISO evidence automation', category: 'Micro SaaS' },
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Partners', href: '/partners', icon: Users },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Help Center', href: '/help', icon: MessageCircle },
  ];

  const featuredServices = [
    { name: '2026 Services', href: '/services2026', icon: Star, description: 'Revolutionary AI, Quantum & Micro SaaS', category: 'Featured', featured: true },
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Advanced AI-powered analytics', category: 'AI & Analytics', featured: true },
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Zap, description: 'Next-generation quantum solutions', category: 'Quantum Computing', featured: true },
  ];

  const serviceCategories = [
    { name: 'AI & Machine Learning', icon: Brain, href: '/ai-services', color: 'from-cyan-500 to-blue-500' },
    { name: 'Cloud & DevOps', icon: Cloud, href: '/services/cloud-devops', color: 'from-blue-500 to-purple-500' },
    { name: 'Cybersecurity', icon: Shield, href: '/services/cybersecurity', color: 'from-purple-500 to-orange-500' },
    { name: 'Digital Transformation', icon: Zap, href: '/services/consulting', color: 'from-orange-500 to-green-500' },
    { name: 'Emerging Technologies', icon: Rocket, href: '/services', color: 'from-green-500 to-cyan-500' },
    { name: 'Micro SaaS', icon: ShoppingCart, href: '/micro-saas', color: 'from-cyan-500 to-purple-500' },
  ];

  return (
    <>
      <header role="banner" className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      }`}>
        <div className="container-responsive">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300 shadow-lg group-hover:shadow-cyan-400/25">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div className="hidden md:block">
                  <div className="text-white font-bold text-xl">Zion Tech Group</div>
                  <div className="text-cyan-400 text-xs">Future Technology Solutions</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
                  Services
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                
                {/* Services Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-slate-800/95 border border-cyan-400/20 rounded-xl shadow-2xl backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
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

                    {/* View All Services Link */}
                    <div className="mt-6 pt-4 border-t border-slate-700">
                      <Link
                        to="/services"
                        className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 rounded-lg text-cyan-400 hover:text-cyan-300 transition-all duration-200 border border-cyan-400/30 hover:border-cyan-400/50"
                      >
                        <span className="font-medium">View All Services</span>
                        <ChevronDown className="w-4 h-4 ml-2 rotate-[-90deg]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Navigation Links */}
              <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
                Pricing
              </Link>
              <Link to="/partners" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
                Partners
              </Link>
              <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
                Blog
              </Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
                About
              </Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
                Contact
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="relative hidden md:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
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
              <div className="relative">
                <button className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200">
                  <User className="w-5 h-5" />
                  <span className="hidden md:block">Account</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors duration-200"
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
              className="lg:hidden bg-slate-800/95 border-t border-slate-700/50 backdrop-blur-xl"
            >
              <div className="container-responsive py-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
                    />
                    {isSearching && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <ZionLoadingSpinner size="sm" />
                      </div>
                    )}
                  </div>
                </form>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-white hover:bg-slate-700/50 transition-all duration-200 ${
                        item.featured ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{item.name}</span>
                        {item.featured && (
                          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                        )}
                      </div>
                    </Link>
                  ))}
                </nav>

                {/* Mobile Quick Links */}
                <div className="mt-6 pt-4 border-t border-slate-700">
                  <h3 className="text-sm font-semibold text-cyan-300 mb-3 px-4">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-2 px-4">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center space-x-2 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-200 text-white hover:text-cyan-400"
                      >
                        <link.icon className="w-4 h-4" />
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    ))}
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
