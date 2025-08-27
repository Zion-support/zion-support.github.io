import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Atom, Link as LinkIcon, Eye, Server, BarChart3, Target, TrendingUp, Smartphone, Database, Network, Clock, Shield as ShieldIcon, Globe as GlobeIcon, Cpu as CpuIcon, Database as DatabaseIcon, Network as NetworkIcon, Atom as AtomIcon, LinkIcon as LinkIcon2, Server as ServerIcon, BarChart3 as BarChart3Icon, Users as UsersIcon, Clock as ClockIcon, Target as TargetIcon, Eye as EyeIcon, Lock as LockIcon, Smartphone as SmartphoneIcon, TrendingUp as TrendingUpIcon, Rocket as RocketIcon, Heart as HeartIcon, ShoppingCart as ShoppingCartIcon, MessageCircle as MessageCircleIcon, BookOpen as BookOpenIcon, HelpCircle as HelpCircleIcon, DollarSign as DollarSignIcon, Gauge as GaugeIcon, Search as SearchIcon } from 'lucide-react';
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
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">Z</span>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-white font-bold text-xl">Zion Tech Group</div>
                    <div className="text-cyan-400 text-xs">Future Technology Solutions</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" aria-label="Primary">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
                  Services
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                
                {/* Mega Menu */}
                <div className="absolute top-full left-0 w-screen max-w-7xl -ml-32 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl shadow-black/50 p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Service Categories */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Service Categories</h3>
                        <div className="space-y-3">
                          {serviceCategories.map((category) => (
                            <Link
                              key={category.name}
                              to={category.href}
                              className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group/item"
                            >
                              <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200`}>
                                <category.icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <div className="text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-200">
                                  {category.name}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Featured Services */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Featured Services</h3>
                        <div className="space-y-3">
                          {services.slice(0, 6).map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group/item"
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <service.icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-200">
                                  {service.name}
                                </div>
                                <div className="text-sm text-zinc-400">{service.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                          {quickLinks.map((link) => (
                            <Link
                              key={link.name}
                              to={link.href}
                              className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group/item"
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <link.icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="text-white font-medium group-hover/item:text-purple-400 transition-colors duration-200">
                                {link.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        <div className="pt-4 border-t border-slate-700">
                          <Link
                            to="/services"
                            className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                          >
                            View All Services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/ai-services" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
                AI Services
              </Link>
              
              <Link to="/it-services" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
                IT Services
              </Link>
              
              <Link to="/micro-saas" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
                Micro SaaS
              </Link>
              
              <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
                Pricing
              </Link>
              
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
                About
              </Link>
              
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
                Contact
              </Link>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 px-4 py-2 pl-10 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  {isSearching && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <ZionLoadingSpinner size="sm" />
                    </div>
                  )}
                </div>
              </form>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
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

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50"
            >
              <div className="container-responsive py-6 space-y-6">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="w-full">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 pl-10 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                    <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </form>

                {/* Mobile Navigation Links */}
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Services Grid */}
                <div className="pt-4 border-t border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Popular Services</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {services.slice(0, 8).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors duration-200"
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-2">
                            <service.icon className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-xs text-zinc-400">{service.category}</span>
                        </div>
                        <div className="text-sm text-white font-medium">{service.name}</div>
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
