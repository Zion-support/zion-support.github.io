import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, PanelLeft, Sparkles, Zap as ZapIcon, Cpu as CpuIcon, Shield as ShieldIcon, Brain as BrainIcon, Cloud as CloudIcon, Rocket as RocketIcon, Globe as GlobeIcon, Lock as LockIcon, Heart as HeartIcon, Users as UsersIcon, ShoppingCart as ShoppingCartIcon, BookOpen as BookOpenIcon, MessageCircle as MessageCircleIcon, HelpCircle as HelpCircleIcon, DollarSign as DollarSignIcon, Gauge as GaugeIcon, Workflow as WorkflowIcon, Atom as AtomIcon, Star as StarIcon, Target as TargetIcon, TrendingUp as TrendingUpIcon, Award as AwardIcon, Code as CodeIcon, Truck as TruckIcon, Building as BuildingIcon, BarChart3 as BarChart3Icon, PenTool as PenToolIcon, Eye as EyeIcon, Server as ServerIcon, Smartphone as SmartphoneIcon, Database as DatabaseIcon, Network as NetworkIcon, Clock as ClockIcon, ArrowRight as ArrowRightIcon, PanelLeft as PanelLeftIcon, Sparkles as SparklesIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { Sidebar } from '../components/Sidebar';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
        await new Promise(resolve => setTimeout(resolve, 1000));
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false },
    { name: '2028 Services', href: '/services2028', current: false, featured: true },
    { name: 'AI Solutions', href: '/ai-solutions', current: false, featured: true },
    { name: 'IT Services', href: '/it-services', current: false, featured: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  // Organized services by category with 2028 updates
  const services = [
    // Featured & New 2028 Services
    { name: '2028 Services Overview', href: '/services2028', icon: Star, description: 'Revolutionary AI & Quantum Solutions', category: 'Featured', featured: true, neon: true },
    { name: 'AI Business Intelligence Pro', href: '/services/ai-business-intelligence-pro-2028', icon: Brain, description: 'Next-gen AI-powered BI platform', category: 'Featured', featured: true, neon: true },
    { name: 'Quantum Computing Platform', href: '/services/quantum-computing-platform-2028', icon: Atom, description: 'Revolutionary quantum solutions', category: 'Featured', featured: true, neon: true },
    
    // AI & Machine Learning 2028
    { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform-2028', icon: Shield, description: 'Advanced AI threat detection', category: 'AI & ML', neon: true },
    { name: 'Autonomous AI Agents', href: '/services/autonomous-ai-agents-2028', icon: Robot, description: 'Revolutionary autonomous systems', category: 'AI & ML', neon: true },
    { name: 'AI Content Creation Suite', href: '/services/ai-content-creation-suite-2028', icon: PenTool, description: 'Comprehensive AI content platform', category: 'AI & ML', neon: true },
    { name: 'AI Sales & Marketing Automation', href: '/services/ai-sales-marketing-automation-2028', icon: TrendingUp, description: 'Intelligent automation platform', category: 'AI & ML', neon: true },
    { name: 'AI Customer Support Platform', href: '/services/ai-customer-support-platform-2028', icon: MessageCircle, description: 'Intelligent support automation', category: 'AI & ML', neon: true },
    
    // Blockchain & Web3 2028
    { name: 'Blockchain & Web3 Platform', href: '/services/blockchain-web3-platform-2028', icon: Lock, description: 'Enterprise blockchain solutions', category: 'Blockchain & Web3', neon: true },
    
    // Edge Computing & IoT 2028
    { name: 'Edge Computing & IoT Platform', href: '/services/edge-computing-iot-platform-2028', icon: Network, description: 'Advanced edge computing solutions', category: 'Edge Computing', neon: true },
    
    // Cloud & DevOps 2028
    { name: 'Cloud Infrastructure & DevOps', href: '/services/cloud-infrastructure-devops-2028', icon: Cloud, description: 'Enterprise cloud solutions', category: 'Cloud & DevOps', neon: true },
    { name: 'Cloud Migration Services', href: '/services/cloud-migration-services-2028', icon: Cloud, description: 'Expert migration services', category: 'Cloud & DevOps', neon: true },
    
    // Data & Analytics 2028
    { name: 'Data Analytics & Business Intelligence', href: '/services/data-analytics-business-intelligence-2028', icon: BarChart3, description: 'Advanced analytics solutions', category: 'Data & Analytics', neon: true },
    
    // Cybersecurity & Compliance 2028
    { name: 'Cybersecurity & Compliance', href: '/services/cybersecurity-compliance-2028', icon: Shield, description: 'Comprehensive security services', category: 'Cybersecurity', neon: true },
    
    // Digital Transformation 2028
    { name: 'Digital Transformation Consulting', href: '/services/digital-transformation-consulting-2028', icon: Zap, description: 'Strategic transformation services', category: 'Digital Transformation', neon: true },
    
    // Software Development 2028
    { name: 'Enterprise Software Development', href: '/services/enterprise-software-development-2028', icon: Code, description: 'Custom enterprise solutions', category: 'Software Development', neon: true },
    
    // IT Infrastructure 2028
    { name: 'IT Infrastructure Management', href: '/services/it-infrastructure-management-2028', icon: Server, description: 'Comprehensive infrastructure services', category: 'IT Infrastructure', neon: true },
    
    // Managed Services 2028
    { name: 'Managed IT Services', href: '/services/managed-it-services-2028', icon: Gauge, description: 'Proactive IT management', category: 'Managed Services', neon: true },
    
    // Project Management 2028
    { name: 'IT Project Management', href: '/services/it-project-management-2028', icon: Workflow, description: 'Professional project management', category: 'Project Management', neon: true },
    
    // Legacy Services (Maintained)
    { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users, description: 'Intelligent sales optimization', category: 'AI & ML' },
    { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield, description: 'Automated regulatory compliance', category: 'AI & ML' },
    { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure automation & scaling', category: 'Cloud & DevOps' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'Enterprise infrastructure solutions', category: 'Cloud & DevOps' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization', category: 'Cloud & DevOps' },
    { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: BarChart3, description: 'Financial operations automation', category: 'Cloud & DevOps' },
    { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', icon: MessageCircle, description: 'Intelligent email automation', category: 'AI & ML' },
    { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys', icon: MessageCircle, description: 'Mobile survey solutions', category: 'AI & ML' },
    { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', icon: Shield, description: 'Advanced compliance automation', category: 'AI & ML' },
    { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: PenTool, description: 'AI content creation studio', category: 'AI & ML' },
    { name: 'Returns Management', href: '/services/returns-management', icon: Truck, description: 'Efficient returns processing', category: 'Business Solutions' },
    { name: 'Email Sequencer', href: '/services/email-sequencer', icon: MessageCircle, description: 'Automated email sequences', category: 'Business Solutions' },
    { name: 'Podcast Transcription', href: '/services/podcast-transcription', icon: MessageCircle, description: 'AI-powered transcription', category: 'AI & ML' },
    { name: 'Micro CRM', href: '/services/micro-crm', icon: Users, description: 'Customer relationship management', category: 'Micro SaaS' },
    { name: 'Website Analytics', href: '/services/website-analytics', icon: BarChart3, description: 'Comprehensive web analytics', category: 'Analytics' },
    { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: HelpCircle, description: 'IT support management', category: 'IT Services' },
    { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: TrendingUp, description: 'Affiliate program management', category: 'Business Solutions' },
    { name: 'Mobile Survey', href: '/services/mobile-survey', icon: Smartphone, description: 'Mobile survey platform', category: 'Business Solutions' },
    { name: 'AI-Powered SEO', href: '/services/ai-seo', icon: Search, description: 'Machine learning SEO optimization', category: 'AI & ML' },
    { name: 'Interview Assessment AI', href: '/services/interview-assessment', icon: Users, description: 'AI-powered candidate evaluation', category: 'AI & ML' },
    { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: MessageCircle, description: 'Customer support system', category: 'Micro SaaS' },
    { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield, description: 'GDPR/CCPA compliance', category: 'Cybersecurity' },
    { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Lock, description: 'Web security hardening', category: 'Cybersecurity' },
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart, neon: true },
    { name: 'Blog', href: '/blog', icon: BookOpen, neon: true },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, neon: true },
    { name: 'Partners', href: '/partners', icon: Users, neon: true },
    { name: 'Careers', href: '/careers', icon: Star, neon: true },
    { name: 'Documentation', href: '/docs', icon: BookOpen, neon: true },
    { name: 'Support', href: '/support', icon: HelpCircle, neon: true },
    { name: 'Status', href: '/status', icon: Gauge, neon: true },
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <header className={`nav-futuristic fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-2' : 'py-4'
    }`}>
      {/* Futuristic Background Elements */}
      <div className="futuristic-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="quantum-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="data-stream"
            style={{
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="energy-wave"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-cyber-black" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold font-orbitron text-neon-cyan group-hover:text-neon-blue transition-colors duration-300">
                  ZION TECH GROUP
                </h1>
                <p className="text-xs text-neon-purple font-rajdhani">Innovating Tomorrow, Today</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  item.featured ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30' : ''
                }`}
              >
                {item.name}
                {item.featured && (
                  <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-neon-yellow animate-pulse" />
                )}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="nav-link flex items-center space-x-1 px-4 py-2 rounded-lg bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 hover:from-neon-blue/30 hover:to-neon-purple/30 transition-all duration-300"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-cyber-black/95 backdrop-blur-xl border border-neon-cyan/30 rounded-lg shadow-2xl shadow-neon-cyan/20 p-6 z-50"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Featured Services */}
                      <div>
                        <h3 className="text-neon-cyan font-orbitron font-bold text-lg mb-4 flex items-center">
                          <Star className="w-5 h-5 mr-2 text-neon-yellow" />
                          Featured 2028 Services
                        </h3>
                        <div className="space-y-3">
                          {services.filter(s => s.featured).slice(0, 6).map((service) => (
                            <Link
                              key={service.id || service.name}
                              to={service.href}
                              className="block p-3 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all duration-300 group"
                            >
                              <div className="flex items-center space-x-3">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                  service.neon ? 'bg-gradient-to-br from-neon-cyan to-neon-blue' : 'bg-neon-purple/20'
                                }`}>
                                  <service.icon className="w-4 h-4 text-cyber-black" />
                                </div>
                                <div>
                                  <h4 className="text-white font-semibold group-hover:text-neon-cyan transition-colors duration-300">
                                    {service.name}
                                  </h4>
                                  <p className="text-neon-cyan/70 text-sm">{service.description}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Service Categories */}
                      <div>
                        <h3 className="text-neon-blue font-orbitron font-bold text-lg mb-4 flex items-center">
                          <Cpu className="w-5 h-5 mr-2 text-neon-blue" />
                          Service Categories
                        </h3>
                        <div className="space-y-3">
                          {Array.from(new Set(services.map(s => s.category))).slice(0, 8).map((category) => (
                            <Link
                              key={category}
                              to={`/services?category=${encodeURIComponent(category)}`}
                              className="block p-3 rounded-lg border border-neon-blue/20 hover:border-neon-blue/40 hover:bg-neon-blue/5 transition-all duration-300 group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-white group-hover:text-neon-blue transition-colors duration-300">
                                  {category}
                                </span>
                                <ArrowRight className="w-4 h-4 text-neon-blue/50 group-hover:text-neon-blue transition-colors duration-300" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div>
                        <h3 className="text-neon-purple font-orbitron font-bold text-lg mb-4 flex items-center">
                          <Rocket className="w-5 h-5 mr-2 text-neon-purple" />
                          Quick Actions
                        </h3>
                        <div className="space-y-3">
                          <Link
                            to="/request-quote"
                            className="block p-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue text-cyber-black font-semibold text-center hover:from-neon-blue hover:to-neon-cyan transition-all duration-300 transform hover:scale-105"
                          >
                            Get Free Quote
                          </Link>
                          <Link
                            to="/contact"
                            className="block p-3 rounded-lg border border-neon-purple text-neon-purple text-center hover:bg-neon-purple hover:text-cyber-black transition-all duration-300"
                          >
                            Contact Sales
                          </Link>
                          <div className="p-3 rounded-lg bg-cyber-gray/50 border border-neon-cyan/20">
                            <p className="text-neon-cyan text-sm font-semibold mb-2">Need Help?</p>
                            <p className="text-white/70 text-xs mb-2">Call us 24/7</p>
                            <p className="text-neon-cyan font-mono">{contactInfo.phone}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-cyber-black/70 border border-neon-cyan/30 rounded-lg text-white placeholder-neon-cyan/50 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-neon-cyan hover:text-neon-blue transition-colors duration-300"
                disabled={isSearching}
              >
                {isSearching ? (
                  <ZionLoadingSpinner className="w-4 h-4" />
                ) : (
                  <Search className="w-4 h-4" />
                )}
              </button>
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neon-cyan hover:text-neon-blue transition-colors duration-300"
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
            className="lg:hidden bg-cyber-black/95 backdrop-blur-xl border-t border-neon-cyan/30"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                        item.featured 
                          ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 text-neon-cyan' 
                          : 'text-white hover:bg-neon-cyan/10 hover:text-neon-cyan'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {item.featured && (
                          <Sparkles className="w-4 h-4 text-neon-yellow" />
                        )}
                      </div>
                    </Link>
                  ))}
                </nav>

                {/* Mobile Services */}
                <div className="border-t border-neon-cyan/20 pt-4">
                  <h3 className="text-neon-cyan font-orbitron font-bold text-lg mb-3 px-4">
                    Featured Services
                  </h3>
                  <div className="space-y-2">
                    {services.filter(s => s.featured).slice(0, 6).map((service) => (
                      <Link
                        key={service.id || service.name}
                        to={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-3 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            service.neon ? 'bg-gradient-to-br from-neon-cyan to-neon-blue' : 'bg-neon-purple/20'
                          }`}>
                            <service.icon className="w-4 h-4 text-cyber-black" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{service.name}</h4>
                            <p className="text-neon-cyan/70 text-sm">{service.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Quick Actions */}
                <div className="border-t border-neon-cyan/20 pt-4">
                  <div className="grid grid-cols-2 gap-3 px-4">
                    <Link
                      to="/request-quote"
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue text-cyber-black font-semibold text-center hover:from-neon-blue hover:to-neon-cyan transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-3 rounded-lg border border-neon-purple text-neon-purple text-center hover:bg-neon-purple hover:text-cyber-black transition-all duration-300"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
}

// Robot icon component for autonomous AI agents
const Robot = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
