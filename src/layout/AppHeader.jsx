import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Database, 
  Users, 
  Code, 
  Lock, 
  Rocket,
  Cpu,
  Network,
  Link as LinkIcon,
  Settings,
  BarChart3,
  FileText,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Building2,
  Briefcase,
  UserCheck,
  Server,
  Leaf,
  Handshake
} from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

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

  const navigationItems = [
    { name: 'Home', path: '/', icon: null },
    { 
      name: 'Services', 
      path: '/services', 
      icon: null,
      dropdown: [
        // AI Services
        { name: 'AI & Machine Learning', path: '/services?category=ai-ml', icon: Brain, color: 'from-purple-500 to-pink-500', submenu: [
          { name: 'Customer Success Automation', path: '/ai-customer-success-automation' },
          { name: 'Content Marketing Automation', path: '/ai-content-marketing-automation' },
          { name: 'Business Process Automation', path: '/ai-autonomous-business-process-automation' },
          { name: 'Financial Fraud Detection', path: '/ai-financial-fraud-detection' },
          { name: 'Customer Intelligence Platform', path: '/ai-customer-intelligence-platform' },
          { name: 'Autonomous Vehicle AI', path: '/autonomous-vehicle-ai' }
        ]},
        { name: 'Quantum Computing', path: '/services?category=quantum', icon: Zap, color: 'from-blue-500 to-cyan-500', submenu: [
          { name: 'Encryption Gateway', path: '/quantum-encryption-gateway' },
          { name: 'Threat Detection', path: '/quantum-threat-detection' },
          { name: 'Network Security', path: '/quantum-network-security' },
          { name: 'Data Center', path: '/quantum-data-center' },
          { name: 'Materials Discovery', path: '/quantum-materials-discovery' }
        ]},
        { name: 'Blockchain & Web3', path: '/services?category=blockchain', icon: LinkIcon, color: 'from-green-500 to-emerald-500', submenu: [
          { name: 'Enterprise Platform', path: '/blockchain-enterprise-platform' }
        ]},
        { name: 'Autonomous IT', path: '/services?category=autonomous', icon: Settings, color: 'from-orange-500 to-red-500', submenu: [
          { name: 'IT Operations', path: '/autonomous-it-operations' }
        ]},
        { name: 'IoT & Edge Computing', path: '/services?category=iot', icon: Cloud, color: 'from-indigo-500 to-purple-500' },
        { name: 'AR/VR Development', path: '/services?category=ar-vr', icon: Users, color: 'from-pink-500 to-rose-500' },
        { name: 'FinTech Solutions', path: '/services?category=fintech', icon: Database, color: 'from-yellow-500 to-orange-500' },
        { name: 'Green Technology', path: '/services?category=green-tech', icon: Leaf, color: 'from-green-400 to-teal-500' },
        { name: 'Cybersecurity', path: '/services?category=cybersecurity', icon: Shield, color: 'from-red-500 to-pink-500' },
      ]
    },
    { 
      name: 'Marketplace', 
      path: '/marketplace', 
      icon: null,
      dropdown: [
        { name: 'Talent', path: '/talent', icon: UserCheck, color: 'from-blue-500 to-cyan-500' },
        { name: 'Equipment', path: '/equipment', icon: Server, color: 'from-green-500 to-emerald-500' },
        { name: 'Services', path: '/services', icon: Code, color: 'from-purple-500 to-pink-500' },
        { name: 'Green IT Solutions', path: '/green-it', icon: Leaf, color: 'from-green-400 to-teal-500' }
      ]
    },
    { 
      name: 'Company', 
      path: '/about', 
      icon: null,
      dropdown: [
        { name: 'About Us', path: '/about', icon: Building2, color: 'from-blue-500 to-cyan-500' },
        { name: 'Partners', path: '/partners', icon: Briefcase, color: 'from-green-500 to-emerald-500' },
        { name: 'Careers', path: '/careers', icon: Briefcase, color: 'from-purple-500 to-pink-500' },
        { name: 'Blog', path: '/blog', icon: FileText, color: 'from-orange-500 to-red-500' }
      ]
    },
    { 
      name: 'Support', 
      path: '/help', 
      icon: null,
      dropdown: [
        { name: 'Help Center', path: '/help', icon: HelpCircle, color: 'from-blue-500 to-cyan-500' },
        { name: 'FAQ', path: '/faq', icon: FileText, color: 'from-green-500 to-emerald-500' },
        { name: 'System Status', path: '/status', icon: BarChart3, color: 'from-purple-500 to-pink-500' },
        { name: 'Contact Support', path: '/contact', icon: Users, color: 'from-orange-500 to-red-500' }
      ]
    },
    { name: 'Contact', path: '/contact', icon: null },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-zion-cyan/30 shadow-2xl shadow-zion-cyan/10' 
          : 'bg-black/80 backdrop-blur-md border-b border-zion-cyan/20'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <span className="text-white font-bold text-lg lg:text-xl relative z-10">Z</span>
                <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </motion.div>
            <div className="hidden sm:block">
              <div className="text-xl lg:text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                ZION TECH GROUP
              </div>
              <div className="text-xs text-zion-cyan font-medium group-hover:text-zion-purple transition-colors duration-300">
                INNOVATION • TECHNOLOGY • FUTURE
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-white hover:text-zion-cyan transition-colors duration-300 group">
                      <span className={isActive(item.path) ? 'text-zion-cyan' : ''}>
                        {item.name}
                      </span>
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-zion-cyan/30 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem) => {
                                const Icon = dropdownItem.icon;
                                return (
                                  <div key={dropdownItem.name}>
                                    <Link
                                      to={dropdownItem.path}
                                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-200 group"
                                    >
                                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center flex-shrink-0`}>
                                        <Icon className="w-4 h-4 text-white" />
                                      </div>
                                      <span className="text-white group-hover:text-zion-cyan transition-colors duration-200">
                                        {dropdownItem.name}
                                      </span>
                                    </Link>
                                    {dropdownItem.submenu && (
                                      <div className="ml-8 mt-2 space-y-1">
                                        {dropdownItem.submenu.map((subItem) => (
                                          <Link
                                            key={subItem.name}
                                            to={subItem.path}
                                            className="block text-sm text-zinc-400 hover:text-zion-cyan transition-colors duration-200 py-1 px-3 rounded hover:bg-zion-cyan/5"
                                          >
                                            {subItem.name}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    className={`text-white hover:text-zion-cyan transition-colors duration-300 relative group ${
                      isActive(item.path) ? 'text-zion-cyan' : ''
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-white hover:text-zion-cyan transition-colors duration-300 font-medium hover:scale-105 transition-transform"
            >
              Login
            </Link>
            <Link to="/contact">
              <motion.button 
                className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform shadow-lg shadow-zion-cyan/25 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Rocket className="w-4 h-4" />
                  <span>Get Started</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-zion-purple to-zion-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors duration-300 relative"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="lg:hidden py-6 border-t border-zion-cyan/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full text-white hover:text-zion-cyan transition-colors duration-300 py-2"
                        >
                          <span className={isActive(item.path) ? 'text-zion-cyan' : ''}>
                            {item.name}
                          </span>
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="ml-4 mt-2 space-y-2"
                            >
                              {item.dropdown.map((dropdownItem) => {
                                const Icon = dropdownItem.icon;
                                return (
                                  <div key={dropdownItem.name}>
                                    <Link
                                      to={dropdownItem.path}
                                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zion-cyan/10 transition-all duration-200 group"
                                    >
                                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center`}>
                                        <Icon className="w-3 h-3 text-white" />
                                      </div>
                                      <span className="text-zion-slate-light group-hover:text-zion-cyan transition-colors duration-200 text-sm">
                                        {dropdownItem.name}
                                      </span>
                                    </Link>
                                    {dropdownItem.submenu && (
                                      <div className="ml-6 mt-1 space-y-1">
                                        {dropdownItem.submenu.map((subItem) => (
                                          <Link
                                            key={subItem.name}
                                            to={subItem.path}
                                            className="block text-xs text-zinc-500 hover:text-zion-cyan transition-colors duration-200 py-1 px-3 rounded hover:bg-zion-cyan/5"
                                          >
                                            {subItem.name}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link 
                        to={item.path}
                        className={`block text-white hover:text-zion-cyan transition-colors duration-300 py-2 ${
                          isActive(item.path) ? 'text-zion-cyan' : ''
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-zion-cyan/20 space-y-3">
                  <Link 
                    to="/login" 
                    className="block text-white hover:text-zion-cyan transition-colors duration-300 font-medium py-2"
                  >
                    Login
                  </Link>
                  <Link to="/contact">
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium text-center hover:scale-105 transition-transform shadow-lg shadow-zion-cyan/25">
                      <span className="flex items-center justify-center space-x-2">
                        <Rocket className="w-4 h-4" />
                        <span>Get Started</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
