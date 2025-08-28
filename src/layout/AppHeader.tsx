import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, PanelLeft, Sparkles, Flame, Infinity, Crown, Gem, Lightning, Satellite, Dna, Robot, Leaf, Globe2, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { Sidebar } from '../components/Sidebar';
import { EnhancedSearch } from '../components/EnhancedSearch';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { user, logout } = useAuth();

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false },
    { name: '2028 Services', href: '/ultimate-services-showcase-2028', current: false, featured: true, new: true },
    { name: '2027 Services', href: '/services2027', current: false, featured: true },
    { name: '2026 Services', href: '/services2026', current: false, featured: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  // Organized services by category with new 2028 services
  const services = [
    // Featured & New Services
    { name: '2028 Services Overview', href: '/ultimate-services-showcase-2028', icon: Crown, description: 'Revolutionary Emerging Tech & AI Solutions', category: 'Featured', featured: true, new: true },
    { name: '2027 Services Overview', href: '/services2027', icon: Star, description: 'Cutting-edge Innovation & Emerging Tech', category: 'Featured', featured: true },
    { name: '2026 Services Overview', href: '/services2026', icon: Star, description: 'Revolutionary AI & Quantum Solutions', category: 'Featured', featured: true },
    
    // AI & Machine Learning
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Advanced analytics & ML insights', category: 'AI & ML' },
    { name: 'AI Project Management', href: '/services/ai-project-management', icon: Target, description: 'AI-powered project management & optimization', category: 'AI & ML' },
    { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation', icon: MessageCircle, description: '24/7 intelligent support automation', category: 'AI & ML' },
    { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: BarChart3, description: 'Predictive financial insights & analysis', category: 'AI & ML' },
    { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: Target, description: 'Personalized marketing campaigns & optimization', category: 'AI & ML' },
    { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield, description: 'Automated regulatory compliance', category: 'AI & ML' },
    { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users, description: 'Intelligent sales optimization', category: 'AI & ML' },
    { name: 'AI-Powered SEO', href: '/services/ai-seo', icon: Search, description: 'Machine learning SEO optimization', category: 'AI & ML' },
    { name: 'Interview Assessment AI', href: '/services/interview-assessment', icon: Users, description: 'AI-powered candidate evaluation', category: 'AI & ML' },
    { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', icon: PenTool, description: 'Automated content creation and marketing', category: 'AI & ML' },
    { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', icon: TrendingUp, description: 'Intelligent supply chain management', category: 'AI & ML' },
    { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', icon: Heart, description: 'Healthcare technology solutions', category: 'AI & ML' },
    { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Shield, description: 'Advanced security with AI', category: 'AI & ML' },
    { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', icon: Atom, description: 'Quantum-AI hybrid solutions', category: 'AI & ML' },
    { name: 'AI Autonomous Research Assistant', href: '/services/ai-autonomous-research-assistant', icon: Brain, description: 'Automated research and analysis', category: 'AI & ML' },
    { name: 'AI Project Management', href: '/services/ai-project-management', icon: Target, description: 'Intelligent project coordination', category: 'AI & ML' },
    { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation', icon: MessageCircle, description: 'Automated customer service', category: 'AI & ML' },
    { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: DollarSign, description: 'Financial data analysis and insights', category: 'AI & ML' },
    { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: TrendingUp, description: 'Intelligent marketing workflows', category: 'AI & ML' },
    
    // Cloud & DevOps
    { name: 'Cloud DevOps Platform', href: '/services/cloud-devops-platform', icon: Cloud, description: 'Infrastructure automation & scaling', category: 'Cloud & DevOps' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'Enterprise infrastructure solutions', category: 'Cloud & DevOps' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization', category: 'Cloud & DevOps' },
    { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: BarChart3, description: 'Financial operations automation', category: 'Cloud & DevOps' },
    { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap, description: 'Strategic technology consulting', category: 'Cloud & DevOps' },
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Eye, description: 'Virtual system replicas', category: 'Cloud & DevOps' },
    
    // Emerging Technologies
    { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network, description: 'Smart device networks', category: 'Emerging Tech' },
    { name: 'AI Content Creation', href: '/services/ai-content-creation', icon: PenTool, description: 'Automated content generation', category: 'Emerging Tech' },
    { name: 'AI HR Platform', href: '/services/ai-hr-platform', icon: Users, description: 'Human resources automation', category: 'Emerging Tech' },
    { name: 'Sustainable Technology', href: '/services/sustainable-technology', icon: Globe, description: 'Green and eco-friendly solutions', category: 'Emerging Tech' },
    { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', icon: TrendingUp, description: 'Predictive analytics for maintenance', category: 'Emerging Tech' },
    { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', icon: Brain, description: 'Quantum-enhanced ML algorithms', category: 'Emerging Tech' },
    
    // Data & Analytics
    { name: 'AI Data Analytics & BI', href: '/services/ai-data-analytics-bi', icon: BarChart3, description: 'AI-powered business intelligence', category: 'Data & Analytics', featured: true },
    { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3, description: 'Business intelligence & insights', category: 'Data & Analytics' },
    { name: 'Website Analytics', href: '/services/website-analytics', icon: BarChart3, description: 'Web performance and user behavior', category: 'Data & Analytics' },
    { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: TrendingUp, description: 'Affiliate program management', category: 'Data & Analytics' },
    
    // Micro SaaS Solutions
    { name: 'Micro SaaS Platform', href: '/services/micro-saas-solutions', icon: ShoppingCart, description: 'Niche software solutions', category: 'Micro SaaS' },
    { name: 'Micro CRM', href: '/services/micro-crm', icon: Users, description: 'Customer relationship management', category: 'Micro SaaS' },
    { name: 'Website Analytics', href: '/services/website-analytics', icon: BarChart3, description: 'Comprehensive web analytics', category: 'Analytics' },
    { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: HelpCircle, description: 'IT support management', category: 'IT Services' },
    { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: TrendingUp, description: 'Affiliate program management', category: 'Business Solutions' },
    { name: 'Mobile Survey', href: '/services/mobile-survey', icon: Smartphone, description: 'Mobile survey platform', category: 'Business Solutions' },
    { name: 'AI-Powered SEO', href: '/services/ai-seo', icon: Search, description: 'Machine learning SEO optimization', category: 'AI & ML' },
    { name: 'Interview Assessment AI', href: '/services/interview-assessment', icon: Users, description: 'AI-powered candidate evaluation', category: 'AI & ML' },
    { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: MessageCircle, description: 'Customer support system', category: 'Micro SaaS' },
    { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', icon: MessageCircle, description: 'Automated email management', category: 'Micro SaaS' },
    { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys', icon: MessageCircle, description: 'Feedback collection and analysis', category: 'Micro SaaS' },
    { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', icon: Shield, description: 'Compliance assistance and monitoring', category: 'Micro SaaS' },
    { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: PenTool, description: 'Large language model content creation', category: 'Micro SaaS' },
    { name: 'Returns Management', href: '/services/returns-management', icon: ShoppingCart, description: 'Product returns processing', category: 'Micro SaaS' },
    { name: 'Email Sequencer', href: '/services/email-sequencer', icon: MessageCircle, description: 'Automated email sequences', category: 'Micro SaaS' },
    { name: 'Podcast Transcription', href: '/services/podcast-transcription', icon: MessageCircle, description: 'Audio content transcription', category: 'Micro SaaS' },
    { name: 'Mobile Survey', href: '/services/mobile-survey', icon: MessageCircle, description: 'Mobile survey solutions', category: 'Micro SaaS' },
  ];

  // Quick links for easy access
  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Partners', href: '/partners', icon: Users },
    { name: 'Careers', href: '/careers', icon: Star },
    { name: 'Help Center', href: '/help', icon: HelpCircle },
    { name: 'Website Analyzer', href: '/website-analyzer', icon: Search },
    { name: 'Sitemap Generator', href: '/sitemap-generator', icon: FileText },
  ];

  const featuredServices = [
    { name: '2028 Services', href: '/ultimate-services-showcase-2028', icon: Crown, description: 'Revolutionary Emerging Tech & AI Solutions', category: 'Featured', featured: true, new: true },
    { name: '2027 Services', href: '/services2027', icon: Star, description: 'Cutting-edge Innovation & Emerging Tech', category: 'Featured', featured: true },
    { name: '2026 Services', href: '/services2026', icon: Star, description: 'Revolutionary AI, Quantum & Micro SaaS', category: 'Featured', featured: true },
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Advanced AI-powered analytics', category: 'AI & Analytics', featured: true },
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Zap, description: 'Next-generation quantum solutions', category: 'Quantum Computing', featured: true },
  ];

  // Group services by category for better organization
  const servicesByCategory = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  return (
    <>
      <header role="banner" className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/25' 
          : 'bg-gradient-to-r from-slate-900/80 via-purple-900/80 to-slate-900/80 backdrop-blur-lg border-b border-cyan-500/20'
      }`}>
        {/* Top contact bar with enhanced design */}
        <div className="hidden md:block border-b border-slate-700/40 bg-gradient-to-r from-slate-900/60 via-cyan-900/20 to-slate-900/60">
          <div className="container-responsive py-2 flex items-center justify-between text-xs text-gray-300">
            <div className="flex items-center gap-4">
              <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <Phone className="w-3 h-3" />
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <Mail className="w-3 h-3" />
                kleber@ziontechgroup.com
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <Globe2 className="w-3 h-3" />
                ziontechgroup.com
              </a>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Link to="/request-quote" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                Request Quote
              </Link>
              <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="container-responsive">
          <div className="flex h-20 items-center justify-between">
            {/* Left side - Logo and Sidebar Toggle */}
            <div className="flex items-center space-x-4">
              {/* Sidebar Toggle */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors lg:hidden"
                aria-label="Open navigation sidebar"
              >
                <PanelLeft className="w-5 h-5" />
              </button>
              
              {/* Enhanced Logo with futuristic design */}
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    {/* Animated sparkles */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                      Zion Tech Group
                    </h1>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>Innovation at Light Speed</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg opacity-20 animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  ZION TECH GROUP
                </h1>
                <p className="text-xs text-cyan-400/70 font-rajdhani">Innovating Tomorrow</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation */}
            <div className="flex items-center space-x-6">
              {navigation.slice(0, 3).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onMouseEnter={() => setHoveredNav(item.name)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className={`text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                    item.featured ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-400/30' : ''
                  } ${
                    item.new ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-pink-400/30' : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.name}
                    {item.featured && (
                      <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                    )}
                    {item.new && (
                      <span className="px-1.5 py-0.5 text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* Enhanced Services Dropdown */}
              <div className="relative" aria-haspopup="true" aria-expanded={servicesDropdownOpen}>
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                  aria-controls="services-menu"
                >
                  <Sparkles className="w-4 h-4 mr-1" />
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </button>

                {/* Enhanced Services Dropdown Menu */}
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <div className="p-6">
                        {/* Featured Services Section */}
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Crown className="w-5 h-5 text-yellow-400" />
                            Featured Services
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {featuredServices.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="group p-4 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-cyan-500/50 rounded-xl transition-all duration-200"
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                                    <service.icon className="w-5 h-5 text-cyan-400" />
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {service.featured && (
                                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                    )}
                                    {service.new && (
                                      <span className="px-1.5 py-0.5 text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
                                        NEW
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                  {service.name}
                                </h4>
                                <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Services by Category */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
                            <div key={category} className="space-y-3">
                              <h4 className="font-semibold text-cyan-400 text-sm uppercase tracking-wide">
                                {category}
                              </h4>
                              <div className="space-y-2">
                                {categoryServices.slice(0, 4).map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.href}
                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors group"
                                  >
                                    <service.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                      {service.name}
                                    </span>
                                  </Link>
                                ))}
                                {categoryServices.length > 4 && (
                                  <Link
                                    to={`/services?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                                  >
                                    View all {categoryServices.length} services
                                    <ArrowRight className="w-3 h-3" />
                                  </Link>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Quick Actions */}
                        <div className="mt-6 pt-6 border-t border-slate-700/50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Link
                                to="/ultimate-services-showcase-2028"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
                              >
                                <Crown className="w-4 h-4" />
                                Explore 2028 Services
                              </Link>
                              <Link
                                to="/request-quote"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg hover:bg-slate-600/50 transition-all duration-200 font-medium"
                              >
                                <MessageCircle className="w-4 h-4" />
                                Get Custom Quote
                              </Link>
                            </div>
                            <div className="text-xs text-gray-400">
                              <p>Ready to transform your business?</p>
                              <p className="text-cyan-400">Contact our experts today</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Right side - Search, Actions, Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:block relative">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                  />
                </form>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50"
            >
              <div className="container-responsive py-4 space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  />
                </form>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        item.featured 
                          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-400' 
                          : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {item.new && (
                          <span className="px-2 py-1 text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </nav>

                {/* Mobile Quick Links */}
                <div className="pt-4 border-t border-slate-700/50">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 px-4">Quick Links</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                      >
                        <link.icon className="w-4 h-4" />
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
}

// Robot icon component for autonomous AI agents
const Robot = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
