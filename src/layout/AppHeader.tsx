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
  Building,
  Phone,
  Mail,
  MapPin,
  Star,
  Sparkles
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
        { 
          name: 'AI & Analytics', 
          href: '/services/ai-analytics', 
          icon: Brain, 
          description: 'AI-powered business intelligence and analytics',
          price: 'From $199/month',
          badge: 'Popular'
        },
        { 
          name: 'Cybersecurity', 
          href: '/services/cybersecurity', 
          icon: Shield, 
          description: 'Advanced threat detection and security',
          price: 'From $99/month',
          badge: 'Featured'
        },
        { 
          name: 'Cloud & DevOps', 
          href: '/services/cloud-devops', 
          icon: Cloud, 
          description: 'Cloud infrastructure and automation',
          price: 'From $299/month'
        },
        { 
          name: 'IoT & Edge', 
          href: '/services/iot-edge', 
          icon: Cpu, 
          description: 'Edge computing and IoT solutions',
          price: 'From $399/month'
        },
        { 
          name: 'Quantum Computing', 
          href: '/services/quantum-computing', 
          icon: Rocket, 
          description: 'Quantum algorithms and computing',
          price: 'From $8,500/month',
          badge: 'Premium'
        },
        { 
          name: 'Blockchain', 
          href: '/services/blockchain', 
          icon: Lock, 
          description: 'Distributed ledger and smart contracts',
          price: 'From $599/month'
        },
        { 
          name: 'Digital Twin', 
          href: '/services/digital-twin', 
          icon: Globe, 
          description: 'Virtual replicas and simulation',
          price: 'From $4,500/month'
        },
        { 
          name: 'Sustainability', 
          href: '/services/sustainability', 
          icon: Heart, 
          description: 'Green IT and ESG solutions',
          price: 'From $2,800/month'
        }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Code,
      dropdown: [
        { 
          name: 'AI Business Intelligence', 
          href: '/micro-saas/ai-business-intelligence', 
          description: 'AI-powered analytics platform',
          price: 'From $199/month',
          badge: 'Best Seller'
        },
        { 
          name: 'Customer Experience', 
          href: '/micro-saas/customer-experience', 
          description: 'Personalized customer journey optimization',
          price: 'From $149/month'
        },
        { 
          name: 'Quantum Computing', 
          href: '/micro-saas/quantum-computing', 
          description: 'Quantum algorithms as a service',
          price: 'From $8,500/month',
          badge: 'Premium'
        },
        { 
          name: 'Supply Chain', 
          href: '/micro-saas/supply-chain', 
          description: 'Blockchain supply chain transparency',
          price: 'From $599/month'
        },
        { 
          name: 'Cybersecurity', 
          href: '/micro-saas/cybersecurity', 
          description: 'AI-powered threat detection',
          price: 'From $99/month'
        },
        { 
          name: 'IoT Edge Computing', 
          href: '/micro-saas/iot-edge', 
          description: 'Distributed edge processing',
          price: 'From $399/month'
        },
        { 
          name: 'Content Creation', 
          href: '/micro-saas/content-creation', 
          description: 'AI-generated content platform',
          price: 'From $120/month'
        },
        { 
          name: 'HR Platform', 
          href: '/micro-saas/hr-platform', 
          description: 'Intelligent HR management',
          price: 'From $180/month'
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Building,
      dropdown: [
        { 
          name: 'Enterprise', 
          href: '/solutions/enterprise', 
          description: 'Large-scale enterprise solutions',
          price: 'Custom Pricing'
        },
        { 
          name: 'Startups', 
          href: '/solutions/startups', 
          description: 'Scalable startup solutions',
          price: 'From $99/month'
        },
        { 
          name: 'Healthcare', 
          href: '/solutions/healthcare', 
          description: 'HIPAA-compliant healthcare solutions',
          price: 'From $299/month'
        },
        { 
          name: 'Finance', 
          href: '/solutions/finance', 
          description: 'Financial services solutions',
          price: 'From $499/month'
        },
        { 
          name: 'Manufacturing', 
          href: '/solutions/manufacturing', 
          description: 'Industry 4.0 solutions',
          price: 'From $399/month'
        }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Users,
      dropdown: [
        { name: 'About Us', href: '/about', description: 'Our story and mission' },
        { name: 'Leadership', href: '/leadership', description: 'Meet our team' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'News', href: '/news', description: 'Latest updates' },
        { name: 'Contact', href: '/contact', description: 'Get in touch' }
      ]
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zion-slate-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
        : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-zion-cyan to-zion-purple py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-white text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-300" />
                Leading AI Innovation 2025
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-7 h-7 text-white" />
              <div className="absolute inset-0 bg-gradient-to-r from-zion-purple to-zion-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-zion-slate-light">AI Innovation Lab</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center gap-2 px-4 py-2 text-white hover:text-zion-cyan transition-colors duration-200 font-medium"
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid gap-3">
                          {item.dropdown?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-all duration-200"
                            >
                              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                <dropdownItem.icon className="w-5 h-5 text-zion-cyan" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-semibold text-white group-hover:text-zion-cyan transition-colors">
                                    {dropdownItem.name}
                                  </h3>
                                  {dropdownItem.badge && (
                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                      dropdownItem.badge === 'Popular' ? 'bg-green-500/20 text-green-400' :
                                      dropdownItem.badge === 'Featured' ? 'bg-blue-500/20 text-blue-400' :
                                      dropdownItem.badge === 'Premium' ? 'bg-purple-500/20 text-purple-400' :
                                      dropdownItem.badge === 'Best Seller' ? 'bg-orange-500/20 text-orange-400' :
                                      'bg-zion-cyan/20 text-zion-cyan'
                                    }`}>
                                      {dropdownItem.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-zion-slate-light mb-2">
                                  {dropdownItem.description}
                                </p>
                                {dropdownItem.price && (
                                  <p className="text-xs text-zion-cyan font-medium">
                                    {dropdownItem.price}
                                  </p>
                                )}
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
          <div className="flex items-center gap-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-200"
                />
              </div>
            </form>

            {/* User Actions */}
            <div className="flex items-center gap-3">
              {user ? (
                <>
                  <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                    <Bell className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-sm hidden sm:block">{user.name}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="px-4 py-2 text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors duration-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="px-4 py-2 text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors duration-200">
                      Login
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-zion-cyan/25">
                      Get Started
                    </button>
                  </Link>
                </>
              )}
            </div>

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
            className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-md border-t border-zion-cyan/20"
          >
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                  />
                </div>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full p-3 text-white hover:bg-zion-cyan/10 rounded-lg transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 mt-2 space-y-2"
                      >
                        {item.dropdown?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block p-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors duration-200"
                          >
                            <div className="flex items-center gap-3">
                              <dropdownItem.icon className="w-4 h-4" />
                              <div>
                                <div className="font-medium text-white">{dropdownItem.name}</div>
                                <div className="text-sm text-zion-slate-light">{dropdownItem.description}</div>
                                {dropdownItem.price && (
                                  <div className="text-xs text-zion-cyan">{dropdownItem.price}</div>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-8 pt-6 border-t border-zion-cyan/20">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-zion-slate-light">
                    <Phone className="w-4 h-4 text-zion-cyan" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-slate-light">
                    <Mail className="w-4 h-4 text-zion-cyan" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-slate-light">
                    <MapPin className="w-4 h-4 text-zion-cyan" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
