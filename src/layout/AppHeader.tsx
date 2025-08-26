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
        { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'AI-powered business intelligence and analytics' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Advanced threat detection and security' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Cloud infrastructure and automation' },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Edge computing and IoT solutions' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Quantum algorithms and computing' },
        { name: 'Blockchain', href: '/services/blockchain', icon: Lock, description: 'Distributed ledger and smart contracts' },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, description: 'Virtual replicas and simulation' },
        { name: 'Sustainability', href: '/services/sustainability', icon: Heart, description: 'Green IT and ESG solutions' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Code,
      dropdown: [
        { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', description: 'AI-powered analytics platform' },
        { name: 'Customer Experience', href: '/micro-saas/customer-experience', description: 'Personalized customer journey optimization' },
        { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', description: 'Quantum algorithms as a service' },
        { name: 'Supply Chain', href: '/micro-saas/supply-chain', description: 'Blockchain supply chain transparency' },
        { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', description: 'AI-powered threat detection' },
        { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', description: 'Distributed edge processing' },
        { name: 'Content Creation', href: '/micro-saas/content-creation', description: 'AI-generated content platform' },
        { name: 'HR Platform', href: '/micro-saas/hr-platform', description: 'Intelligent HR management' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Network,
      dropdown: [
        { name: 'Infrastructure', href: '/it-services/infrastructure', description: 'Cloud and on-premise infrastructure' },
        { name: 'Digital Transformation', href: '/it-services/digital-transformation', description: 'End-to-end digital transformation' },
        { name: 'Consulting', href: '/it-services/consulting', description: 'Strategic technology consulting' },
        { name: 'Onsite Support', href: '/it-services/onsite-support', description: 'Local IT support and maintenance' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Rocket,
      dropdown: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Large-scale enterprise deployments' },
        { name: 'SMB Solutions', href: '/solutions/smb', description: 'Small and medium business solutions' },
        { name: 'Industry Solutions', href: '/solutions/industries', description: 'Industry-specific technology solutions' },
        { name: 'Custom Development', href: '/solutions/custom', description: 'Bespoke software development' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Building,
      dropdown: [
        { name: 'About Us', href: '/about', description: 'Our story and mission' },
        { name: 'Team', href: '/team', description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
        { name: 'News', href: '/news', description: 'Latest updates and insights' }
      ]
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-zion-cyan/20 shadow-lg shadow-zion-cyan/10' 
        : 'bg-transparent'
    }`}>
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg lg:text-xl font-cyber">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl lg:text-2xl font-bold text-white font-cyber">ZION TECH GROUP</div>
              <div className="text-xs text-zion-cyan font-medium">INNOVATION • TECHNOLOGY • FUTURE</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-white hover:text-zion-cyan transition-colors duration-300 font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Enhanced Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 hover:border-zion-cyan/30 border border-transparent transition-all duration-300 group/item"
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                                <dropdownItem.icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-white font-medium group-hover/item:text-zion-cyan transition-colors duration-300">
                                  {dropdownItem.name}
                                </div>
                                <div className="text-sm text-zion-slate-light mt-1">
                                  {dropdownItem.description}
                                </div>
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

          {/* Search and Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
              />
            </form>

            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg text-white hover:bg-zion-cyan/20 transition-all duration-300">
                  <User className="w-4 h-4" />
                  <span className="hidden xl:block">{user.name}</span>
                </button>
                {/* User dropdown would go here */}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-white hover:text-zion-cyan transition-colors duration-300 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/contact"
                  className="btn-futuristic"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors duration-300"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-zion-cyan/20"
            >
              <div className="py-6 space-y-6">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="px-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    />
                  </div>
                </form>

                {/* Mobile Navigation */}
                <nav className="px-4 space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-white hover:bg-zion-cyan/10 rounded-lg transition-colors duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="mt-2 ml-8 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Actions */}
                <div className="px-4 space-y-3">
                  {user ? (
                    <button className="w-full px-4 py-3 bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg text-white hover:bg-zion-cyan/20 transition-all duration-300">
                      Welcome, {user.name}
                    </button>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="block w-full px-4 py-3 text-center text-white hover:bg-zion-cyan/10 rounded-lg transition-colors duration-300"
                      >
                        Login
                      </Link>
                      <Link
                        to="/contact"
                        className="block w-full px-4 py-3 text-center btn-futuristic"
                      >
                        Get Started
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

// Missing icon component
const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

const Server = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);
