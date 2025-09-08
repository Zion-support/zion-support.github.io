import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
} from 'lucide-react';
import { enhancedServicesCatalog2025 } from '../data/enhancedServicesCatalog2025';

export function EnhancedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(&apos;&apos;);&apos;&apos;
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<;<;<string | null>(null);
  useEffect(() => {}
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)}
    window.addEventListener(&apos;scroll&apos;, handleScroll);
    return () => window.removeEventListener(&apos;scroll&apos;, handleScroll)}, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Close mobile menu when route changes;

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)}
  }
;
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
    { name: 'Partners', href: '/partners', current: location.pathname === '/partners' },
    { name: 'News', href: '/news', current: location.pathname === '/news' },
    { name: 'Case Studies', href: '/case-studies', current: location.pathname === '/case-studies' },
    { name: 'Help', href: '/help', current: location.pathname === '/help' },
    { name: 'FAQ', href: '/faq', current: location.pathname === '/faq' },
    { name: 'Pricing', href: '/pricing', current: location.pathname === '/pricing' },
  ];

  const serviceCategories = [
    {
      name: 'AI-Powered Micro SAAS',
      description: 'Revolutionary AI-powered software solutions',
      href: '/zion-cutting-edge-services-2029',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      name: 'AI Content Creation Studio Pro',
      description: 'Advanced AI content creation platform',
      href: '/services/AI-Content-Creation-Studio-Pro',
      icon: PenTool,
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      name: 'Quantum AI Trading Platform',
      description: 'Next-generation quantum trading platform',
      href: '/services/Quantum-AI-Trading-Platform',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      featured: true
    },
    {
      name: 'Micro SAAS Solutions',
      description: 'Innovative software-as-a-service solutions',
      href: '/services/micro-saas-solutions',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions',
      href: '/ai-services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'IT Infrastructure',
      description: 'Enterprise-grade IT solutions',
      href: '/it-services',
      icon: Server,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Quantum Computing',
      description: 'Next-generation quantum solutions',
      href: '/services/quantum-computing',
      icon: Atom,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Cybersecurity',
      description: 'Enterprise-grade security solutions',
      href: '/services/cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automation',
      href: '/services/cloud-devops',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Digital Transformation',
      description: 'End-to-end business transformation services',
      href: '/services/digital-transformation',
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: '2025 Innovative Services',
      description: 'Latest cutting-edge services',
      href: '/zion-innovative-services-2025',
      icon: SparklesIcon,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: '2025 Services Showcase',
      description: 'Comprehensive innovative services showcase',
      href: '/innovative-services-showcase-2025',
      icon: SparklesIcon,
      color: 'from-cyan-500 to-blue-500',
      featured: true
    },
    {
      name: '2029 Cutting-Edge Services',
      description: 'Future-ready innovative services',
      href: '/zion-cutting-edge-services-2029',
      icon: SparklesIcon,
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
    }
  ];

                {link.label}
              </a>;
            ))}
          </nav>;
          <button;
            aria-label='Toggle navigation';
            onClick={() => setMobileOpen((v) => !v)}
            className='md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100';
          >;
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>;
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />;
            </svg>;
          </button>;
        </div>;
      </div>;

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)}
;

  const navLinks = [
    { label: &apos;Home&apos;, href: &apos;/&apos}, { label: &apos;Services&apos;, href: &apos;/services&apos}, { label: &apos;Solutions&apos;, href: &apos;/solutions&apos}, { label: &apos;Enterprise&apos;, href: &apos;/enterprise&apos}, { label: &apos;Request Quote&apos;, href: &apos;/request-quote&apos}, { label: &apos;Case Studies&apos;, href: &apos;/case-studies&apos}, { label: &apos;Careers&apos;, href: &apos;/careers&apos}, { label: &apos;Contact&apos;, href: &apos;/contact&apos}

  ]

            </a>
          </div>
          <nav className='hidden md: flex: space-x-8'>',;
,;;
            {navLinks.map((link, index) => (

                {link.label}

              </a>
            ))}

            onClick={() => setMobileOpen((v) => !v)}



            {/* Support Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
                onMouseEnter={() => setActiveDropdown('support')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Support
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'support' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 p-6"
                    onMouseEnter={() => setActiveDropdown('support')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {supportLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <HelpCircle className="w-4 h-4 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-purple-600">
                              {link.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {link.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Links */}
            <Link 
              to="/services-pricing" 
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Pricing
            </Link>

            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-64 pl-10 pr-4 py-2 rounded-lg border transition-colors ${
                    scrolled 
                      ? 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500' 
                      : 'bg-white/20 border-white/30 text-white placeholder-white/70'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <Search className={`absolute left-3 top-2.5 h-5 w-5 ${
                  scrolled ? 'text-gray-400' : 'text-white/70'
                }`} />
              </div>
            </form>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/request-quote"
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Get Quote
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Project
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>


  )};

  )}





