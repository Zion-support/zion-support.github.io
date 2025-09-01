import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Zap,
  Brain,
  Shield,
  Cloud,
  Database,
  Globe,
  Users,
  Building,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export function EnhancedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();

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

  // Enhanced navigation with better organization
  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Services', href: '/services', current: location.pathname === '/services' },
    { name: 'Solutions', href: '/solutions', current: location.pathname === '/solutions' },
    { name: 'Partners', href: '/partners', current: location.pathname === '/partners' },
    { name: 'Research', href: '/research', current: location.pathname === '/research' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' }
  ];

  // Enhanced services by category with better organization
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-bi', description: 'Advanced analytics and insights' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', description: 'Threat detection and prevention' },
        { name: 'AI Healthcare', href: '/services/ai-healthcare', description: 'Medical diagnosis and treatment' },
        { name: 'AI Customer Experience', href: '/services/ai-cx', description: 'Personalized customer support' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'Threat Intelligence', href: '/services/threat-intelligence', description: 'Real-time threat detection' },
        { name: 'Zero Trust Security', href: '/services/zero-trust', description: 'Advanced security framework' },
        { name: 'Compliance Management', href: '/services/compliance', description: 'Regulatory compliance' },
        { name: 'Incident Response', href: '/services/incident-response', description: 'Rapid threat response' }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Cloud Migration', href: '/services/cloud-migration', description: 'Seamless cloud transition' },
        { name: 'DevOps Automation', href: '/services/devops', description: 'Automated development pipeline' },
        { name: 'Multi-Cloud Management', href: '/services/multi-cloud', description: 'Unified cloud operations' },
        { name: 'Edge Computing', href: '/services/edge-computing', description: 'Distributed computing solutions' }
      ]
    },
    {
      name: 'Data & Analytics',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Big Data Processing', href: '/services/big-data', description: 'Large-scale data analysis' },
        { name: 'Business Intelligence', href: '/services/bi', description: 'Data-driven insights' },
        { name: 'Predictive Analytics', href: '/services/predictive-analytics', description: 'Future trend prediction' },
        { name: 'Data Governance', href: '/services/data-governance', description: 'Data quality and compliance' }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      services: [
        { name: 'Quantum Computing', href: '/services/quantum', description: 'Next-generation computing' },
        { name: 'Blockchain Solutions', href: '/services/blockchain', description: 'Distributed ledger technology' },
        { name: 'IoT Platforms', href: '/services/iot', description: 'Connected device management' },
        { name: 'AR/VR Solutions', href: '/services/ar-vr', description: 'Immersive experiences' }
      ]
    }
  ];

  return (
    <>
      {/* Matrix Rain Background */}
      <div className="matrix-rain" role="button"></div>
      
      {/* Enhanced Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
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
            <nav className="hidden xl:flex items-center space-x-8">
              {navigation.slice(0, 6).map(item => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link font-medium transition-all duration-300 ${
                    item.current
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Enhanced Services Mega Menu */}
              <div className="relative group">
                <button
                  className="nav-link flex items-center space-x-2 font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
                </button>
                
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      className="absolute top-full left-0 mt-4 w-[1200px] bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 shadow-2xl shadow-cyan-500/20"
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      {/* Featured Services */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-cyan-400 mb-6 font-orbitron">
                          Featured Services
                        </h3>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
                            <h4 className="text-lg font-semibold text-white mb-2">AI-Powered Solutions</h4>
                            <p className="text-gray-300 text-sm mb-4">Transform your business with cutting-edge AI technology</p>
                            <Link to="/services/ai" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                              Explore AI Services →
                            </Link>
                          </div>
                          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                            <h4 className="text-lg font-semibold text-white mb-2">Cybersecurity Excellence</h4>
                            <p className="text-gray-300 text-sm mb-4">Protect your assets with advanced security solutions</p>
                            <Link to="/services/cybersecurity" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                              Explore Security →
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Service Categories Grid */}
                      <div className="grid grid-cols-5 gap-6">
                        {serviceCategories.map((category, index) => (
                          <div key={category.name} className="space-y-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                              <category.icon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-white font-semibold text-sm">{category.name}</h4>
                            <div className="space-y-2">
                              {category.services.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="block text-gray-300 hover:text-cyan-400 text-xs transition-colors"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Contact CTA */}
                      <div className="mt-8 pt-6 border-t border-cyan-500/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-semibold mb-2">Ready to Get Started?</h4>
                            <p className="text-gray-300 text-sm">Contact our experts for a personalized consultation</p>
                          </div>
                          <Link
                            to="/contact"
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                          >
                            Get Started
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center space-x-4">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </form>
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="xl:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-4">
                  {navigation.map(item => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block text-lg font-medium transition-colors ${
                        item.current
                          ? 'text-cyan-400'
                          : 'text-gray-300 hover:text-cyan-400'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Mobile Services */}
                  <div className="pt-4 border-t border-cyan-500/20">
                    <h4 className="text-cyan-400 font-semibold mb-3">Our Services</h4>
                    <div className="space-y-2">
                      {serviceCategories.map(category => (
                        <div key={category.name} className="ml-4">
                          <h5 className="text-white font-medium text-sm mb-2">{category.name}</h5>
                          <div className="space-y-1 ml-4">
                            {category.services.slice(0, 3).map(service => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Contact */}
                  <div className="pt-4 border-t border-cyan-500/20">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Phone className="w-4 h-4" />
                        <span>+1 302 464 0950</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Mail className="w-4 h-4" />
                        <span>kleber@ziontechgroup.com</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span>364 E Main St STE 1008 Middletown DE 19709</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}