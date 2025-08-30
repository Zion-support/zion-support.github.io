import React, { useState, useEffect } from 'react.ts';
import { Link, useLocation              } from 'react-router-dom.ts';
import { motion, AnimatePresence              } from 'framer-motion.ts';
import { Menu,
  X,
  Search,
  User,
  Bell,
  ChevronDown,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Globe,
  Cpu,
  Lock,
  Heart,
  Users,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  Workflow,
  Atom,
  Star,
  Target,
  TrendingUp,
  Award,
  Code,
  Truck,
  Building,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  ArrowRight,
  PanelLeft,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Satellite,
  FileText,
  Sparkles as SparklesIcon
<<<<<<< HEAD
import { enhancedServicesCatalog2025              } from '../data/enhancedServicesCatalog2025';
=======
} from 'lucide-react';
import { enhancedServicesCatalog2025              } from '../data/enhancedServicesCatalog2025';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export function EnhancedHeader(...args: any[]): any {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {;
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: anyanyanyanyanyanyanyanyanyanyanyanyanyReact.FormEvent)              => {;
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);


  };

  // Enhanced navigation with better organization
  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Services', href: '/services', current: location.pathname.startsWith('/services') },
    { name: 'Solutions', href: '/solutions', current: location.pathname.startsWith('/solutions') },
    { name: 'AI Services', href: '/ai-services', current: location.pathname.startsWith('/ai-services') },
    { name: 'IT Services', href: '/it-services', current: location.pathname.startsWith('/it-services') },
    { name: 'Micro SaaS', href: '/micro-saas', current: location.pathname.startsWith('/micro-saas') },
    { name: 'Marketplace', href: '/marketplace', current: location.pathname.startsWith('/marketplace') },
    { name: 'Resources', href: '/resources', current: location.pathname.startsWith('/resources') },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
    { name: 'Blog', href: '/blog', current: location.pathname === '/blog' },
    { name: 'Careers', href: '/careers', current: location.pathname === '/careers' },
<<<<<<< HEAD
    { name: 'Partners', href: '/partners', current: location.pathname === '/partners' },
    { name: 'News', href: '/news', current: location.pathname === '/news' },
    { name: 'Case Studies', href: '/case-studies', current: location.pathname === '/case-studies' },
    { name: 'Help', href: '/help', current: location.pathname === '/help' },
    { name: 'FAQ', href: '/faq', current: location.pathname === '/faq' },
    { name: 'Pricing', href: '/pricing', current: location.pathname === '/pricing' },
=======
    { name: 'Partners', href: '/partners', current: location.pathname === '/partners' },;
    { name: 'News', href: '/news', current: location.pathname === '/news' },;
    { name: 'Case Studies', href: '/case-studies', current: location.pathname === '/case-studies' },;
    { name: 'Help', href: '/help', current: location.pathname === '/help' },;
    { name: 'FAQ', href: '/faq', current: location.pathname === '/faq' },;
    { name: 'Pricing', href: '/pricing', current: location.pathname === '/pricing' },;
    { name: 'Marketplace', href: '/marketplace', current: location.pathname === '/marketplace' },;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  // Enhanced services by category with better organization
  const services = [
    // Featured & New Services
    {
      name: '2025 Services Overview',
      href: '/ultimate-services-showcase-2025',
      icon: Star,
      description: 'Revolutionary AI & Quantum Solutions',
      category: 'Featured',
      featured: true,
      color: 'from-yellow-500 to-orange-500',
      badge: 'New'
    },
    {
      name: '2026 Services Overview',
      href: '/ultimate-services-showcase-2026',
      icon: Star,
      description: 'Cutting-edge Innovation & Emerging Tech',
      category: 'Featured',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      badge: 'Featured'
    },
    {
      name: '2029 Cutting-Edge Services',
      href: '/zion-cutting-edge-services-2029',
      icon: Star,
      description: 'Future-ready Technology Solutions',
      category: 'Featured',
      featured: true,
      color: 'from-indigo-500 to-purple-500',
      badge: 'Future'
    },

    // AI & Machine Learning
    {
      name: 'AI Business Intelligence',
      href: '/services/ai-business-intelligence',
      icon: Brain,
      description: 'AI-powered business insights',
      category: 'AI & ML',
      color: 'from-purple-600 to-indigo-700',
      badge: 'Popular'
    },
    {
      name: 'AI Compliance Assistant',
      href: '/services/ai-compliance-assistant',
      icon: Shield,
      description: 'Automated compliance management',
      category: 'AI & ML',
      color: 'from-green-600 to-emerald-700',
      badge: 'New'
    },
    {
      name: 'AI Sales Copilot',
      href: '/services/ai-sales-copilot',
      icon: TrendingUp,
      description: 'AI sales automation',
      category: 'AI & ML',
      color: 'from-blue-600 to-cyan-700',
      badge: 'Popular'
    },
    {
      name: 'AI-Powered SEO',
      href: '/services/ai-seo',
      icon: Eye,
      description: 'AI-driven SEO optimization',
      category: 'AI & ML',
      color: 'from-indigo-600 to-purple-700',
      badge: 'Popular'
    },
    {
      name: 'AI Content Marketing Suite',
      href: '/services/ai-content-marketing-suite',
      icon: PenTool,
      description: 'Content creation automation',
      category: 'AI & ML',
      color: 'from-pink-600 to-rose-700',
      badge: 'New'
    },
    {
      name: 'AI Customer Support Automation',
      href: '/services/ai-customer-support-automation',
      icon: MessageCircle,
      description: 'Automated customer service',
      category: 'AI & ML',
      color: 'from-cyan-600 to-blue-700',
      badge: 'Popular'
    },
    {
      name: 'AI Project Management',
      href: '/services/ai-project-management',
      icon: Workflow,
      description: 'AI project coordination',
      category: 'AI & ML',
      color: 'from-orange-600 to-red-700',
      badge: 'New'
    },
    {
      name: 'AI Financial Analytics',
      href: '/services/ai-financial-analytics',
      icon: DollarSign,
      description: 'Financial data analysis',
      category: 'AI & ML',
      color: 'from-emerald-600 to-green-700',
      badge: 'Popular'
    },

    // IT & Infrastructure
    {
      name: 'Cloud DevOps',
      href: '/services/cloud-devops',
      icon: Cloud,
      description: 'DevOps automation',
      category: 'IT & Infrastructure',
      color: 'from-blue-600 to-indigo-700',
      badge: 'Popular'
    },
    {
      name: 'IT Infrastructure',
      href: '/services/it-infrastructure',
      icon: Server,
      description: 'Infrastructure management',
      category: 'IT & Infrastructure',
      color: 'from-gray-600 to-slate-700',
      badge: 'Popular'
    },
    {
      name: 'Zero Trust Network Access',
      href: '/services/zero-trust-network-access',
      icon: Lock,
      description: 'Next-generation security architecture',
      category: 'IT & Infrastructure',
      color: 'from-red-600 to-orange-700',
      badge: 'Popular'
    },
    {
      name: 'AI Cybersecurity Platform',
      href: '/services/ai-cybersecurity-platform',
      icon: Shield,
      description: 'AI-powered security',
      category: 'IT & Infrastructure',
      color: 'from-red-600 to-pink-700',
      badge: 'New'
    },

    // Emerging Technologies
    {
      name: 'Quantum Computing',
      href: '/services/quantum-computing',
      icon: Atom,
      description: 'Quantum solutions',
      category: 'Emerging Tech',
      color: 'from-violet-600 to-purple-700',
      badge: 'Featured'
    },
    {
      name: 'AI Quantum Hybrid Platform',
      href: '/services/ai-quantum-hybrid-platform',
      icon: Atom,
      description: 'Quantum-AI integration platform',
      category: 'Emerging Tech',
      color: 'from-indigo-600 to-purple-700',
      badge: 'New'
    },
    {
      name: 'Space Technology Solutions',
      href: '/services/space-technology-solutions',
      icon: Satellite,
      description: 'Space tech for terrestrial use',
      category: 'Emerging Tech',
      color: 'from-slate-600 to-gray-700',
      badge: 'Featured'
    },
<<<<<<< HEAD
    {
      name: 'Digital Twin',
      href: '/services/digital-twin',
      icon: Eye,
      description: 'Digital twin technology',
      category: 'Emerging Tech',
      color: 'from-cyan-600 to-blue-700',
      badge: 'New'
    },

    // Micro SaaS
    {
      name: 'Micro CRM',
      href: '/services/micro-crm',
      icon: Users,
      description: 'Customer relationship management',
      category: 'Micro SaaS',
      color: 'from-blue-600 to-cyan-700',
      badge: 'Popular'
    },
    {
      name: 'Helpdesk Platform',
      href: '/services/helpdesk',
      icon: HelpCircle,
      description: 'Support ticketing system',
      category: 'Micro SaaS',
      color: 'from-green-600 to-emerald-700',
      badge: 'Popular'
    },
    {
      name: 'Website Analytics',
      href: '/services/website-analytics',
      icon: BarChart3,
      description: 'Web analytics platform',
      category: 'Micro SaaS',
      color: 'from-purple-600 to-pink-700',
      badge: 'Popular'

=======
    { 
      name: 'Biotech AI Drug Discovery', 
      href: '/services/biotech-ai-drug-discovery', ;
      icon: Heart, ;
      description: 'AI-powered drug discovery', ;
      category: 'Emerging Tech', ;
      color: 'from-emerald-600 to-green-700',;
      badge: 'New';
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  return (
    <>
      {/* Matrix Rain Background */}
<<<<<<< HEAD
      <div className="matrix-rain"></div>

=======
      <div className = "matrix-rain"></div>
      
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      {/* Enhanced Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
<<<<<<< HEAD
        transition={{ duration: 0.8, ease: "easeOut" }}

=======
        transition = {
  { duration: 0.8,
  ease: "easeOut" 






}}
      >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                className="relative"
                whileHover = {
  { scale: 1.05,
  rotate: 5 






}}
                whileTap={{ scale: 0.95 }}

                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech
                </span>
                <span className="text-xs text-cyan-400 font-medium font-rajdhani tracking-wider">
                  Innovation Group
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl: anyanyanyanyanyanyanyanyanyanyanyanyanyflex items-center space-x-8">
              {navigation.slice(0, 6).map((item)              => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link font-medium transition-all duration-300 ${
                    item.current
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}

                  {item.name}
                </Link>
              ))}

              {/* Enhanced Services Dropdown */}
              <div className="relative group">
                <button
                  className="nav-link flex items-center space-x-2 font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}

                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
                </button>

                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      className="absolute top-full left-0 mt-4 w-[800px] bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20"
                      initial = {
  { opacity: 0, y: -20,
  scale: 0.95 






}}
                      animate = {
  { opacity: 1, y: 0,
  scale: 1 






}}
                      exit = {
  { opacity: 0, y: -20,
  scale: 0.95 






}}
                      transition={{ duration: 0.3 }}
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}

                      {/* Featured Services */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-cyan-400 mb-4 font-orbitron">Featured Services</h3>
                        <div className="grid grid-cols-3 gap-4">
                          {services.filter(s => s.featured).map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="group p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"

                              <div className="flex items-center space-x-3 mb-2">
                                <service.icon className="w-5 h-5 text-cyan-400" />
                                <span className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                  {service.name}
                                </span>
                              </div>
                              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                                {service.description}
                              </p>
                              {service.badge && (
                                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-2 ${
                                  service.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                                  service.badge === 'Popular' ? 'bg-blue-500/20 text-blue-400' :
                                  service.badge === 'Featured' ? 'bg-purple-500/20 text-purple-400' :
                                  'bg-cyan-500/20 text-cyan-400'
                                }`}>
                                  {service.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* All Services by Category */}
                      <div className="grid grid-cols-2 gap-6">
                        {['AI & ML', 'Micro SaaS', 'IT Services', 'Emerging Tech'].map((category) => (
                          <div key={category}>
                            <h4 className="text-sm font-semibold text-gray-300 mb-3 font-rajdhani uppercase tracking-wider">
                              {category}
                            </h4>
                            <div className="space-y-2">
                              {services
                                .filter(s => s.category === category || s.category.includes(category))
                                .slice(0, 3)
                                .map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.href}
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors group"

                                    <service.icon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                      {service.name}
                                    </span>
                                  </Link>
                                ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* View All Services Link */}
                      <div className="mt-6 pt-4 border-t border-gray-700">
                        <Link
                          to="/services"
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium group"

                          View All Services
                          <ArrowRight className="ml-2 w-4 h-4 group-hover: anyanyanyanyanyanyanyanyanyanyanyanyanytranslate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Additional Navigation Items */}
              {navigation.slice(6, 10).map((item)              => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link font-medium transition-all duration-300 ${
                    item.current
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}

                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden xl:flex items-center space-x-6">
              {/* Enhanced Search */}
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                </div>
                {isSearching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="loading-spinner w-4 h-4"></div>
                  </div>
                )}
              </form>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <Link
                  to="/contact"
                  className="btn-neon-cyan text-sm"

                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"

                  <User className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="xl:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30"
              initial = {
  { opacity: 0,
  height: 0 






}}
              animate = {
  { opacity: 1,
  height: 'auto' 






}}
              exit = {
  { opacity: 0,
  height: 0 






}}
              transition={{ duration: 0.3 }}

              <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 gap-6">
                  {/* Mobile Search */}
                  <form onSubmit={handleSearch} className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </form>

                  {/* Mobile Navigation */}
                  <nav className="space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block py-2 text-lg font-medium transition-colors ${
                          item.current
                            ? 'text-cyan-400 border-l-4 border-cyan-400 pl-4'
                            : 'text-gray-300 hover:text-cyan-400 pl-4'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}

                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Services Preview */}
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-4">Popular Services</h3>
                    <div className="space-y-3">
                      {services.filter(s => s.popular).slice(0, 4).map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                          onClick={() => setMobileMenuOpen(false)}

                          <service.icon className="w-5 h-5 text-cyan-400" />
                          <div>
                            <span className="text-white font-medium">{service.name}</span>
                            <p className="text-sm text-gray-400">{service.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <div className="pt-4 border-t border-gray-700">
                    <Link
                      to="/contact"
                      className="btn-neon-cyan w-full text-center"
                      onClick={() => setMobileMenuOpen(false)}

                      Get Started Today
                    </Link>
                  </div>
                </div>;
              </div>;
            </motion.div>;
          )};
        </AnimatePresence>;
      </motion.header>;
    </>;
  );
</div>}

<<<<<<< HEAD
export default EnhancedHeader;}}}}
=======
export default EnhancedHeader;
export default EnhancedHeader;
export default EnhancedHeader;
export default EnhancedHeader;
export default EnhancedHeader;
export default EnhancedHeader;
export default EnhancedHeader;
export default EnhancedHeader;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
