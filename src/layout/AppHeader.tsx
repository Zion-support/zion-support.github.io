import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool, Phone, Mail, MapPin, ArrowRight
} from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';

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
    { name: '2028 Services', href: '/services/2028-showcase', current: false, featured: true },
    { name: 'AI Solutions', href: '/ai-solutions', current: false },
    { name: 'IT Services', href: '/it-services', current: false },
    { name: 'Micro SaaS', href: '/micro-saas', current: false },
    { name: 'Solutions', href: '/solutions', current: false },
    { name: 'Case Studies', href: '/case-studies', current: false },
    { name: 'Research', href: '/research-development', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { name: '2028 Services', href: '/services/2028-showcase', icon: Star, description: 'Revolutionary AI, Quantum & Micro SaaS', category: 'Featured', featured: true },
    { name: 'AI Autonomous Business', href: '/services/ai-autonomous-business', icon: Brain, description: 'Fully autonomous operations' },
    { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity', icon: Shield, description: 'AI-powered threat detection' },
    { name: 'AI Content Marketing', href: '/services/ai-content-marketing', icon: PenTool, description: 'AI content creation & optimization' },
    { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users, description: 'Intelligent sales automation' },
    { name: 'AI Customer Support', href: '/services/ai-customer-support', icon: MessageCircle, description: 'AI-powered support platform' },
    { name: 'AI Data Analytics', href: '/services/ai-data-analytics', icon: BarChart3, description: 'Business intelligence & insights' },
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, description: 'Next-generation quantum solutions' },
    { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Cpu, description: 'Smart devices & networks' },
    { name: 'Blockchain Web3', href: '/services/blockchain-web3', icon: Code, description: 'DeFi & decentralized solutions' },
    { name: 'Sustainable Technology', href: '/services/sustainable-technology', icon: Globe, description: 'ESG & environmental solutions' },
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

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

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
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>
                  <p className="text-xs text-cyan-400">Future of Technology</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                    item.featured 
                      ? 'text-cyan-400 hover:text-cyan-300 bg-cyan-400/10 hover:bg-cyan-400/20' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                  {item.featured && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                  )}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-md transition-all duration-300"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className={`flex items-start space-x-3 p-3 rounded-lg transition-all duration-300 group ${
                                service.featured 
                                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30' 
                                  : 'hover:bg-slate-700/50'
                              }`}
                            >
                              <service.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                service.featured ? 'text-cyan-400' : 'text-slate-400 group-hover:text-white'
                              }`} />
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm font-medium ${
                                  service.featured ? 'text-cyan-400' : 'text-white'
                                }`}>
                                  {service.name}
                                </p>
                                <p className="text-xs text-slate-400 mt-1">{service.description}</p>
                                {service.featured && (
                                  <span className="inline-block text-xs text-cyan-400 font-medium mt-1">
                                    ✨ Featured Service
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-slate-700/50">
                          <Link
                            to="/services"
                            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 bg-cyan-400/10 hover:bg-cyan-400/20 rounded-lg transition-all duration-300"
                          >
                            View All Services
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:flex items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                  />
                </div>
              </form>

              {/* Contact Info */}
              <div className="hidden xl:flex items-center space-x-4 text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50"
                  />
                </form>

                {/* Mobile Navigation Links */}
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                        item.featured 
                          ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30' 
                          : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      {item.name}
                      {item.featured && (
                        <span className="ml-2 text-xs bg-cyan-400/20 px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </Link>
                  ))}
                </div>

                {/* Mobile Services */}
                <div className="border-t border-slate-700/50 pt-4">
                  <h3 className="px-4 text-sm font-semibold text-slate-400 mb-3">Services</h3>
                  <div className="space-y-2">
                    {services.slice(0, 6).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                          service.featured 
                            ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30' 
                            : 'hover:bg-slate-700/50'
                        }`}
                      >
                        <service.icon className={`w-5 h-5 ${
                          service.featured ? 'text-cyan-400' : 'text-slate-400'
                        }`} />
                        <div>
                          <p className={`text-sm font-medium ${
                            service.featured ? 'text-cyan-400' : 'text-white'
                          }`}>
                            {service.name}
                          </p>
                          <p className="text-xs text-slate-400">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Contact Info */}
                <div className="border-t border-slate-700/50 pt-4 space-y-3">
                  <div className="flex items-center space-x-3 px-4 text-slate-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 px-4 text-slate-300">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 px-4 text-slate-300">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span className="text-sm">{contactInfo.address}</span>
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
