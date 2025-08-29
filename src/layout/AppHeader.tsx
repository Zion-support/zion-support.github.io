import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  User, 
  ShoppingCart, 
  Rocket, 
  Brain, 
  Heart, 
  PenTool, 
  Shield, 
  Atom, 
  Cpu, 
  Globe, 
  Cloud, 
  Building,
  Handshake,
  Play
} from 'lucide-react';

// Animation variants
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

export const AppHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAccessibilityMode, setIsAccessibilityMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const mainNavItems = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Services', href: '/services', current: location.pathname === '/services', hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: location.pathname === '/solutions', hasDropdown: true },
    { name: 'Resources', href: '/resources', current: location.pathname === '/resources', hasDropdown: true },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const utilityNavItems = [
    { name: 'Dashboard', href: '/dashboard', icon: User },
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Demo', href: '/demo', icon: Play },
  ];

  const services = [
    { 
      name: 'Comprehensive Services 2026', 
      href: '/comprehensive-services-showcase-2026', 
      icon: Rocket, 
      description: 'All Services & Pricing',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'Innovative Micro SAAS 2025', 
      href: '/innovative-micro-saas-services-2025', 
      icon: Rocket, 
      description: 'Cutting-edge AI Services',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    { 
      name: 'AI Healthcare Platform', 
      href: '/services/ai-healthcare-platform', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI Content Creation', 
      href: '/services/ai-content-creation', 
      icon: PenTool, 
      description: 'Content Generation & Optimization',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI Cybersecurity', 
      href: '/services/ai-cybersecurity', 
      icon: Shield, 
      description: 'AI-Powered Security',
      featured: true,
      color: 'from-purple-500 to-green-500'
    },
    { 
      name: 'Quantum Computing', 
      href: '/services/quantum-computing', 
      icon: Atom, 
      description: 'Quantum AI & Optimization',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'IoT Edge Computing', 
      href: '/services/iot-edge-computing', 
      icon: Cpu, 
      description: 'IoT & Real-time Processing',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Digital Twin Platform', 
      href: '/services/digital-twin', 
      icon: Globe, 
      description: 'Virtual Replicas & Simulation',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Cloud DevOps', 
      href: '/services/cloud-devops', 
      icon: Cloud, 
      description: 'DevOps & Infrastructure',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Micro SaaS Products', 
      href: '/services/micro-saas', 
      icon: ShoppingCart, 
      description: 'AI automations with transparent pricing',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Revolutionary Services 2030', 
      href: '/revolutionary-services-2030', 
      icon: Rocket, 
      description: 'Future Technology Solutions',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const solutions = [
    { 
      name: 'Enterprise Solutions', 
      href: '/solutions/enterprise', 
      icon: Building, 
      description: 'Large-scale business transformation',
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Startup Solutions', 
      href: '/solutions/startup', 
      icon: Rocket, 
      description: 'Rapid growth and scaling',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Healthcare Solutions', 
      href: '/solutions/healthcare', 
      icon: Heart, 
      description: 'Medical technology innovation',
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'Financial Solutions', 
      href: '/solutions/financial', 
      icon: Shield, 
      description: 'Secure financial technology',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const resources = [
    { 
      name: 'Documentation', 
      href: '/docs', 
      icon: PenTool, 
      description: 'Technical guides and API docs',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Case Studies', 
      href: '/case-studies', 
      icon: Building, 
      description: 'Success stories and implementations',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Blog', 
      href: '/blog', 
      icon: PenTool, 
      description: 'Latest insights and trends',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Webinars', 
      href: '/webinars', 
      icon: Play, 
      description: 'Educational content and demos',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add theme toggle logic here
  };

  const toggleAccessibility = () => {
    setIsAccessibilityMode(!isAccessibilityMode);
    // Add accessibility toggle logic here
  };

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    // Add language change logic here
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zion-slate-dark/95 backdrop-blur-md border-b border-zion-cyan/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow-blue-lg transition-all duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold font-orbitron gradient-text-neon">Zion Tech Group</h1>
                <p className="text-xs text-zion-gray-light">Innovating Tomorrow</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative" ref={(el) => dropdownRefs.current[item.name] = el}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        item.current 
                          ? 'text-zion-cyan bg-zion-cyan/10' 
                          : 'text-zion-gray-light hover:text-white hover:bg-zion-slate-light/20'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-2xl shadow-xl overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.name === 'Services' && services.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-zion-slate-light/20 transition-all duration-200"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                    <service.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-sm font-semibold text-white group-hover:text-zion-cyan transition-colors duration-200">
                                        {service.name}
                                      </span>
                                      {service.featured && (
                                        <span className="px-2 py-1 text-xs font-medium bg-zion-cyan/20 text-zion-cyan rounded-full">
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-xs text-zion-gray-light mt-1 line-clamp-2">
                                      {service.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}

                              {item.name === 'Solutions' && solutions.map((solution) => (
                                <Link
                                  key={solution.name}
                                  to={solution.href}
                                  className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-zion-slate-light/20 transition-all duration-200"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className={`w-10 h-10 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                    <solution.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <span className="text-sm font-semibold text-white group-hover:text-zion-cyan transition-colors duration-200">
                                      {solution.name}
                                    </span>
                                    <p className="text-xs text-zion-gray-light mt-1 line-clamp-2">
                                      {solution.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}

                              {item.name === 'Resources' && resources.map((resource) => (
                                <Link
                                  key={resource.name}
                                  to={resource.href}
                                  className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-zion-slate-light/20 transition-all duration-200"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className={`w-10 h-10 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                    <resource.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <span className="text-sm font-semibold text-white group-hover:text-zion-cyan transition-colors duration-200">
                                      {resource.name}
                                    </span>
                                    <p className="text-xs text-zion-gray-light mt-1 line-clamp-2">
                                      {resource.description}
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
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      item.current 
                        ? 'text-zion-cyan bg-zion-cyan/10' 
                        : 'text-zion-gray-light hover:text-white hover:bg-zion-slate-light/20'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Search, User, Cart */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-zion-gray-light hover:text-white hover:bg-zion-slate-light/20 rounded-lg transition-all duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Utility Navigation */}
            {utilityNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="p-2 text-zion-gray-light hover:text-white hover:bg-zion-slate-light/20 rounded-lg transition-all duration-200"
                title={item.name}
              >
                <item.icon className="w-5 h-5" />
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-zion-gray-light hover:text-white hover:bg-zion-slate-light/20 rounded-lg transition-all duration-200"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <div className="w-5 h-5">
                {isDarkMode ? '🌞' : '🌙'}
              </div>
            </button>

            {/* Accessibility Toggle */}
            <button
              onClick={toggleAccessibility}
              className="p-2 text-zion-gray-light hover:text-white hover:bg-zion-slate-light/20 rounded-lg transition-all duration-200"
              title={isAccessibilityMode ? 'Disable Accessibility' : 'Enable Accessibility'}
            >
              <div className="w-5 h-5">
                {isAccessibilityMode ? '♿' : '♿'}
              </div>
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('language')}
                className="p-2 text-zion-gray-light hover:text-white hover:bg-zion-slate-light/20 rounded-lg transition-all duration-200"
                title="Change Language"
              >
                <span className="text-sm font-medium">{currentLanguage.toUpperCase()}</span>
              </button>

              <AnimatePresence>
                {activeDropdown === 'language' && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute top-full right-0 mt-2 w-32 bg-zion-slate-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-xl shadow-xl overflow-hidden"
                  >
                    <div className="p-2">
                      {['en', 'es', 'fr', 'de'].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            changeLanguage(lang);
                            setActiveDropdown(null);
                          }}
                          className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                            currentLanguage === lang
                              ? 'text-zion-cyan bg-zion-cyan/10'
                              : 'text-zion-gray-light hover:text-white hover:bg-zion-slate-light/20'
                          }`}
                        >
                          {lang === 'en' ? 'English' : lang === 'es' ? 'Español' : lang === 'fr' ? 'Français' : 'Deutsch'}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              to="/request-quote"
              className="glass-button bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-glow-blue-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-zion-gray-light hover:text-white hover:bg-zion-slate-light/20 rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-md border-t border-zion-cyan/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Items */}
              {mainNavItems.map((item) => (
                <motion.div key={item.name} variants={menuItemVariants}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full flex items-center justify-between px-3 py-2 text-left text-zion-gray-light hover:text-white hover:bg-zion-slate-light/20 rounded-lg transition-all duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.name === 'Services' && services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block px-3 py-2 text-sm text-zion-gray-light hover:text-white hover:bg-zion-slate-light/20 rounded-lg transition-all duration-200"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setIsMenuOpen(false);
                                }}
                              >
                                {service.name}
                              </Link>
                            ))}

                            {item.name === 'Solutions' && solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                className="block px-3 py-2 text-sm text-zion-gray-light hover:text-white hover:bg-zion-slate-light/20 rounded-lg transition-all duration-200"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setIsMenuOpen(false);
                                }}
                              >
                                {solution.name}
                              </Link>
                            ))}

                            {item.name === 'Resources' && resources.map((resource) => (
                              <Link
                                key={resource.name}
                                to={resource.href}
                                className="block px-3 py-2 text-sm text-zion-gray-light hover:text-white hover:bg-zion-slate-light/20 rounded-lg transition-all duration-200"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setIsMenuOpen(false);
                                }}
                              >
                                {resource.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-zion-gray-light hover:text-white hover:bg-zion-slate-light/20 rounded-lg transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile Utility Items */}
              <div className="pt-4 border-t border-zion-cyan/20">
                {utilityNavItems.map((item) => (
                  <motion.div key={item.name} variants={menuItemVariants}>
                    <Link
                      to={item.href}
                      className="flex items-center space-x-3 px-3 py-2 text-zion-gray-light hover:text-white hover:bg-zion-slate-light/20 rounded-lg transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div variants={menuItemVariants} className="pt-4">
                <Link
                  to="/request-quote"
                  className="block w-full text-center glass-button bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-glow-blue-lg transform hover:scale-105 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
