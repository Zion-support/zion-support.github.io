import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Bell, 
  ChevronDown,
  Brain,
  Shield,
  Cloud,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  TrendingUp,
  MessageCircle,
  Video,
  FileText,
  Heart,
  PanelLeft,
  Phone,
  Mail,
  MapPin,
  Building
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      dropdown: [
        { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'Advanced AI solutions' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Enterprise security' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Cloud infrastructure' },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Edge computing' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Quantum solutions' },
        { name: 'Blockchain', href: '/services/blockchain', icon: Lock, description: 'Web3 & DeFi' },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, description: 'Virtual replicas' },
        { name: 'Sustainability', href: '/services/sustainability', icon: Heart, description: 'Green IT' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Code,
      dropdown: [
        { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', description: 'Smart analytics' },
        { name: 'Customer Experience', href: '/micro-saas/customer-experience', description: 'CX optimization' },
        { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', description: 'Quantum advantage' },
        { name: 'Supply Chain', href: '/micro-saas/supply-chain', description: 'Chain optimization' },
        { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', description: 'Security solutions' },
        { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', description: 'Edge intelligence' },
        { name: 'Content Creation', href: '/micro-saas/content-creation', description: 'AI content' },
        { name: 'HR Platform', href: '/micro-saas/hr-platform', description: 'Talent management' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Network,
      dropdown: [
        { name: 'Infrastructure', href: '/it-services/infrastructure', description: 'IT infrastructure' },
        { name: 'Consulting', href: '/it-services/consulting', description: 'Strategic guidance' },
        { name: 'Support', href: '/it-services/support', description: '24/7 support' },
        { name: 'Migration', href: '/it-services/migration', description: 'Cloud migration' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Rocket,
      dropdown: [
        { name: 'Enterprise', href: '/solutions/enterprise', description: 'Large scale solutions' },
        { name: 'SMB', href: '/solutions/smb', description: 'Small business solutions' },
        { name: 'Startup', href: '/solutions/startup', description: 'Startup acceleration' },
        { name: 'Government', href: '/solutions/government', description: 'Public sector' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Users,
      dropdown: [
        { name: 'About Us', href: '/about', description: 'Our story' },
        { name: 'Team', href: '/team', description: 'Meet our team' },
        { name: 'Careers', href: '/careers', description: 'Join us' },
        { name: 'Partners', href: '/partners', description: 'Partnerships' },
        { name: 'News', href: '/news', description: 'Latest updates' }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zion-slate/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border-b border-zion-cyan/10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6 text-zion-cyan">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/contact" className="text-zion-cyan hover:text-white transition-colors">
                Get Quote
              </Link>
              <Link to="/login" className="text-zion-cyan hover:text-white transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold gradient-text">ZION TECH GROUP</h1>
              <p className="text-xs text-zion-cyan/70">Innovation • Technology • Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 text-white hover:text-zion-cyan transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-zion-slate/50"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-zion-slate/95 backdrop-blur-md border border-zion-cyan/20 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors duration-200 group"
                            >
                              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                <subItem.icon className="w-5 h-5 text-zion-cyan" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                  {subItem.name}
                                </h3>
                                <p className="text-sm text-zion-cyan/70 mt-1">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-cyan/50" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300 backdrop-blur-sm"
                />
              </div>
            </form>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-2 px-6 rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/25"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors"
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
            className="lg:hidden bg-zion-slate/95 backdrop-blur-md border-t border-zion-cyan/20"
          >
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-cyan/50" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                  />
                </div>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full text-left text-white hover:text-zion-cyan transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-zion-cyan/10"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-8 mt-2 space-y-2"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors duration-200"
                            >
                              <subItem.icon className="w-4 h-4 text-zion-cyan" />
                              <span className="text-zion-cyan/90">{subItem.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-zion-cyan/20">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-3 px-6 rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
