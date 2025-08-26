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
  ShoppingCart,
  Phone,
  Mail,
  MapPin,
  Star,
  Sparkles,
  Lightbulb,
  Target,
  Award,
  Briefcase,
  BookOpen,
  HelpCircle,
  Settings,
  LogOut,
  ChevronRight,
  Package,
  Handshake
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
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
      description: 'Comprehensive IT & AI Solutions',
      dropdown: [
        { 
          name: 'AI & Analytics', 
          href: '/services/ai-analytics', 
          icon: Brain,
          description: 'Advanced AI and data analytics solutions',
          featured: true
        },
        { 
          name: 'Cybersecurity', 
          href: '/services/cybersecurity', 
          icon: Shield,
          description: 'Next-generation security and protection',
          featured: true
        },
        { 
          name: 'Cloud & DevOps', 
          href: '/services/cloud-devops', 
          icon: Cloud,
          description: 'Scalable cloud infrastructure and automation'
        },
        { 
          name: 'IoT & Edge', 
          href: '/services/iot-edge', 
          icon: Cpu,
          description: 'Internet of Things and edge computing'
        },
        { 
          name: 'Quantum Computing', 
          href: '/services/quantum-computing', 
          icon: Rocket,
          description: 'Revolutionary quantum computing solutions',
          featured: true
        },
        { 
          name: 'Blockchain', 
          href: '/services/blockchain', 
          icon: Lock,
          description: 'Secure blockchain and distributed systems'
        },
        { 
          name: 'Digital Twin', 
          href: '/services/digital-twin', 
          icon: Globe,
          description: 'Digital twin technology and simulation'
        },
        { 
          name: 'Sustainability', 
          href: '/services/sustainability', 
          icon: Heart,
          description: 'Green IT and sustainable technology'
        }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Code,
      description: 'Innovative Software Solutions',
      dropdown: [
        { 
          name: 'AI Business Intelligence', 
          href: '/micro-saas/ai-business-intelligence',
          icon: Brain,
          description: 'AI-powered business insights and analytics',
          featured: true
        },
        { 
          name: 'Customer Experience', 
          href: '/micro-saas/customer-experience',
          icon: Users,
          description: 'Enhanced customer engagement platforms'
        },
        { 
          name: 'Quantum Computing', 
          href: '/micro-saas/quantum-computing',
          icon: Rocket,
          description: 'Quantum computing applications and tools',
          featured: true
        },
        { 
          name: 'Supply Chain', 
          href: '/micro-saas/supply-chain',
          icon: Network,
          description: 'Intelligent supply chain management'
        },
        { 
          name: 'Cybersecurity', 
          href: '/micro-saas/cybersecurity',
          icon: Shield,
          description: 'Advanced cybersecurity solutions'
        },
        { 
          name: 'IoT Edge Computing', 
          href: '/micro-saas/iot-edge',
          icon: Cpu,
          description: 'IoT and edge computing platforms'
        },
        { 
          name: 'Content Creation', 
          href: '/micro-saas/content-creation',
          icon: FileText,
          description: 'AI-powered content creation tools'
        },
        { 
          name: 'HR Platform', 
          href: '/micro-saas/hr-platform',
          icon: Users,
          description: 'Modern HR management solutions'
        }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Network,
      description: 'Professional IT Consulting & Support',
      dropdown: [
        { 
          name: 'Infrastructure', 
          href: '/it-services/infrastructure',
          icon: Database,
          description: 'Enterprise infrastructure solutions'
        },
        { 
          name: 'Digital Transformation', 
          href: '/it-services/digital-transformation',
          icon: TrendingUp,
          description: 'Complete digital transformation services'
        },
        { 
          name: 'Consulting', 
          href: '/it-services/consulting',
          icon: Briefcase,
          description: 'Strategic IT consulting and advisory'
        },
        { 
          name: 'Onsite Support', 
          href: '/it-services/onsite-support',
          icon: Users,
          description: 'Professional onsite IT support'
        },
        { 
          name: 'Green IT', 
          href: '/it-services/green-it',
          icon: Heart,
          description: 'Sustainable and eco-friendly IT solutions'
        },
        { 
          name: '5G Solutions', 
          href: '/it-services/5g-solutions',
          icon: Network,
          description: 'Next-generation 5G network solutions'
        }
      ]
    },
    {
      name: 'Marketplace',
      href: '/marketplace',
      icon: ShoppingCart,
      description: 'Digital Products & Services',
      dropdown: [
        { 
          name: 'Products', 
          href: '/marketplace/products',
          icon: Package,
          description: 'Digital products and software'
        },
        { 
          name: 'Talent', 
          href: '/marketplace/talent',
          icon: Users,
          description: 'Expert IT professionals and consultants'
        },
        { 
          name: 'Equipment', 
          href: '/marketplace/equipment',
          icon: Cpu,
          description: 'IT hardware and equipment'
        },
        { 
          name: 'Services', 
          href: '/marketplace/services',
          icon: Settings,
          description: 'Professional IT services'
        }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Users,
      description: 'About Zion Tech Group',
      dropdown: [
        { 
          name: 'About Us', 
          href: '/about',
          icon: Users,
          description: 'Learn about our mission and values'
        },
        { 
          name: 'Team', 
          href: '/team',
          icon: Users,
          description: 'Meet our expert team members'
        },
        { 
          name: 'Careers', 
          href: '/careers',
          icon: Briefcase,
          description: 'Join our innovative team'
        },
        { 
          name: 'Partners', 
          href: '/partners',
          icon: Handshake,
          description: 'Strategic partnerships and alliances'
        },
        { 
          name: 'Blog', 
          href: '/blog',
          icon: BookOpen,
          description: 'Latest insights and updates'
        },
        { 
          name: 'Contact', 
          href: '/contact',
          icon: MessageCircle,
          description: 'Get in touch with us'
        }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
          : 'bg-transparent'
      }`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div 
              className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan/20 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue/20 rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.15, 0.35, 0.15]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            />
          </div>
        </div>

        <div className="container-responsive relative z-10">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">Z</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold text-gradient">ZION TECH GROUP</h1>
                  <p className="text-xs text-zion-slate-light font-medium">Innovation • Intelligence • Impact</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`nav-link flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeDropdown === item.name 
                        ? 'text-zion-cyan bg-zion-cyan/10' 
                        : 'hover:text-zion-cyan hover:bg-zion-cyan/5'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Enhanced Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light rounded-xl border border-zion-cyan/20 shadow-2xl shadow-black/50 backdrop-blur-xl"
                      >
                        <div className="p-4">
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                            <p className="text-sm text-zion-slate-light">{item.description}</p>
                          </div>
                          
                          <div className="space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-200"
                              >
                                <div className={`p-2 rounded-lg ${
                                  dropdownItem.featured 
                                    ? 'bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20' 
                                    : 'bg-zion-slate-light/10'
                                }`}>
                                  <dropdownItem.icon className={`w-4 h-4 ${
                                    dropdownItem.featured ? 'text-zion-cyan' : 'text-zion-slate-light'
                                  }`} />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2">
                                    <span className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-200">
                                      {dropdownItem.name}
                                    </span>
                                    {dropdownItem.featured && (
                                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-white">
                                        FEATURED
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-sm text-zion-slate-light mt-1">
                                    {dropdownItem.description}
                                  </p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan transition-colors duration-200" />
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

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button
                onClick={() => setShowSearchModal(true)}
                className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Contact Info */}
              <div className="hidden xl:flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </div>
              </div>

              {/* User Menu */}
              {user ? (
                <div className="relative">
                  <button className="flex items-center space-x-2 p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200">
                    <User className="w-5 h-5" />
                    <span className="hidden sm:block">{user.name}</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300"
                >
                  Sign In
                </Link>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
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
              className="lg:hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light border-t border-zion-cyan/20"
            >
              <div className="container-responsive py-6">
                <div className="space-y-6">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                        <item.icon className="w-5 h-5 text-zion-cyan" />
                        <span>{item.name}</span>
                      </h3>
                      <p className="text-sm text-zion-slate-light mb-4">{item.description}</p>
                      <div className="grid grid-cols-1 gap-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-200"
                          >
                            <dropdownItem.icon className="w-4 h-4 text-zion-slate-light" />
                            <span className="text-white">{dropdownItem.name}</span>
                            {dropdownItem.featured && (
                              <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-white">
                                FEATURED
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {/* Mobile Contact Info */}
                  <div className="pt-6 border-t border-zion-slate-light/20">
                    <h3 className="text-lg font-semibold text-white mb-3">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-zion-slate-light">
                        <Phone className="w-4 h-4" />
                        <span>{contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-zion-slate-light">
                        <Mail className="w-4 h-4" />
                        <span>{contactInfo.email}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-zion-slate-light">
                        <MapPin className="w-4 h-4" />
                        <span>{contactInfo.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search Modal */}
      <AnimatePresence>
        {showSearchModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4"
            onClick={() => setShowSearchModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light rounded-2xl p-8 max-w-2xl w-full mt-20 border border-zion-cyan/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Search Zion Tech Group</h2>
                <button
                  onClick={() => setShowSearchModal(false)}
                  className="p-2 hover:bg-zion-slate-light/20 rounded-lg transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search for services, solutions, or information..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 focus:ring-2 focus:ring-zion-cyan/20 text-lg"
                    autoFocus
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-zion-slate-light/20">
                <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/services"
                    className="p-3 bg-zion-slate-light/10 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-200 text-sm"
                  >
                    All Services
                  </Link>
                  <Link
                    to="/contact"
                    className="p-3 bg-zion-slate-light/10 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-200 text-sm"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/about"
                    className="p-3 bg-zion-slate-light/10 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-200 text-sm"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/blog"
                    className="p-3 bg-zion-slate-light/10 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-200 text-sm"
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
