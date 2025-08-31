import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
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
  FileText 
} from 'lucide-react';
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
      setScrolled(window.scrollY > 50);
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

  const mainNavigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false },
    { name: 'Solutions', href: '/solutions', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  // Organized services by category
  const servicesCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-indigo-500',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Advanced analytics & ML insights' },
        { name: 'AI Autonomous Business Intelligence', href: '/services/ai-autonomous-business-intelligence-platform', description: 'Autonomous AI data analysis' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform', description: 'AI-powered healthcare insights' },
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', description: 'Automated content creation' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', description: 'Intelligent support automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management', description: 'AI-driven project optimization' },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', description: 'Intelligent financial insights' },
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', description: 'Advanced AI-powered security' },
        { name: 'AI Cybersecurity Threat Intelligence', href: '/services/ai-cybersecurity-threat-intelligence-platform', description: 'Real-time threat detection' },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', description: 'Modern security architecture' },
        { name: 'SOC2 Compliance Automation', href: '/services/soc2-compliance-automation', description: 'Automated compliance' },
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure automation & scaling' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Cloud cost optimization' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Financial operations automation' },
      ]
    },
    {
      title: 'Digital Transformation',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      services: [
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Virtual system replicas' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Strategic technology consulting' },
        { name: 'IT Consulting', href: '/it-consulting', description: 'Technology strategy & planning' },
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      services: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Next-gen computational power' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'Smart device networks' },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
        { name: 'Space Technology', href: '/space-tech', description: 'Space-based solutions' },
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Micro CRM', href: '/services/micro-crm', description: 'Customer relationship management' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk', description: 'Customer support system' },
        { name: 'Website Analytics', href: '/services/website-analytics', description: 'Performance tracking & insights' },
        { name: 'IT Helpdesk', href: '/services/it-helpdesk', description: 'IT support automation' },
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', description: 'Marketing performance tracking' },
        { name: 'Mobile Survey', href: '/services/mobile-survey', description: 'Mobile-first survey platform' },
      ]
    }
  ];

  // Quick links for easy access
  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Sitemap', href: '/sitemap', icon: Globe },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Call +1 302 464 0950', href: 'tel:+13024640950', icon: Phone },
    { name: 'Email kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com', icon: Mail },
  ];

  // Enhanced futuristic background component
  const FuturisticBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      {/* Enhanced floating particles with neon glow */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40 shadow-lg shadow-cyan-400/30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Enhanced gradient orbs with neon glow */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-zion-slate-dark/95 backdrop-blur-md border-b border-cyan-400/20 shadow-lg shadow-cyan-500/10'
        : 'bg-transparent'
    }`}>
      {/* Enhanced Animated Background */}
      <FuturisticBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation */}
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-gray-900/95 backdrop-blur-md border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10 p-6"
                  >
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                      {servicesCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                              <category.icon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                          </div>
                          <div className="space-y-2">
                            {category.services.slice(0, 4).map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                to={service.href}
                                className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                              >
                                <div className="font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                  {service.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* View All Services Link */}
                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <Link
                        to="/services"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
                      >
                        View All Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search */}
            <div className="relative">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {isSearching ? <ZionLoadingSpinner /> : <Search className="w-4 h-4" />}
                </button>
              </form>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/contact"
                className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
              >
                Get Started
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-gray-400 font-medium py-2">Services</div>
                {servicesCategories.slice(0, 3).map((category, index) => (
                  <div key={index} className="ml-4 space-y-1">
                    <div className="text-sm text-gray-500 font-medium py-1">{category.title}</div>
                    {category.services.slice(0, 2).map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        to={service.href}
                        className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 py-1 ml-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
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
