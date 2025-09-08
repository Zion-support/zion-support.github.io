import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Rocket, Brain, Atom, Shield } from 'lucide-react';
=======
import { 
  Menu, X, ChevronDown, Search, User, 
  Brain, Rocket, Shield, Globe, Zap,
  Home, Briefcase, FileText, Phone, Info
} from 'lucide-react';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7f29

interface UltraFuturisticNavigationProps {
  className?: string;
}

<<<<<<< HEAD
export default function UltraFuturisticNavigation({ className = '' }: UltraFuturisticNavigationProps) {
=======
const UltraFuturisticNavigation: React.FC<UltraFuturisticNavigationProps> = ({ className = '' }) => {
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7f29
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

<<<<<<< HEAD
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
=======
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7f29
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI & Machine Learning', href: '/services/ai-ml', icon: Brain, color: 'from-purple-500 to-pink-600' },
        { name: 'Quantum Computing', href: '/services/quantum', icon: Atom, color: 'from-cyan-500 to-blue-600' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, color: 'from-red-500 to-pink-600' },
        { name: 'IT Solutions', href: '/services/it-solutions', icon: Rocket, color: 'from-green-500 to-emerald-600' },
        { name: 'View All Services', href: '/services', icon: Rocket, color: 'from-gray-500 to-gray-600' }
      ]
    },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400 -mt-1">Revolutionary Technology</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid gap-3">
                              {item.dropdownItems?.map((dropdownItem, idx) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item"
                                >
                                  <div className={`w-10 h-10 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                                    <dropdownItem.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <div className="text-white font-medium group-hover/item:text-cyan-300 transition-colors">
                                      {dropdownItem.name}
                                    </div>
                                    {dropdownItem.name === 'View All Services' && (
                                      <div className="text-xs text-gray-400">Explore our complete portfolio</div>
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
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
=======
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: <Home className="w-4 h-4" />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Briefcase className="w-4 h-4" />,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum Computing', href: '/services?category=quantum', icon: <Zap className="w-4 h-4" /> },
        { name: 'Cybersecurity', href: '/services?category=security', icon: <Shield className="w-4 h-4" /> },
        { name: 'Space Technology', href: '/services?category=space', icon: <Rocket className="w-4 h-4" /> },
        { name: 'IT Services', href: '/services?category=enterprise', icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: <FileText className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Info className="w-4 h-4" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Phone className="w-4 h-4" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      } ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Holographic background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            variants={itemVariants}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400">Revolutionary Technology Solutions</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center space-x-8"
            variants={itemVariants}
          >
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-cyan-500/10"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-cyan-500/10"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 p-3 rounded-lg group"
                        >
                          <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                            {dropdownItem.icon}
                          </div>
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Right side actions */}
          <motion.div
            className="hidden lg:flex items-center space-x-4"
            variants={itemVariants}
          >
            {/* Search Button */}
            <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300">
              <Search className="w-5 h-5" />
            </button>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            variants={itemVariants}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden mobile-menu"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7f29
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
<<<<<<< HEAD
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className={`w-8 h-8 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center`}>
                                <dropdownItem.icon className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-gray-300 hover:text-white transition-colors">
                                {dropdownItem.name}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-700/50 space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Rocket className="w-5 h-5 inline mr-2" />
                  Get Started
                </Link>
=======
          >
            <div className="bg-black/95 backdrop-blur-xl border-t border-cyan-500/20">
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-cyan-500/10"
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon}
                            <span>{item.name}</span>
                          </div>
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        {activeDropdown === item.name && (
                          <motion.div
                            className="ml-8 mt-2 space-y-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdownItem.icon}
                                <span>{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-cyan-500/10"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Contact Button */}
                <div className="pt-4 border-t border-cyan-500/20">
                  <Link
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-center py-3 px-6 rounded-lg font-medium transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7f29
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
<<<<<<< HEAD
    </nav>
  );
}
=======

      {/* Floating holographic elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 right-20 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-8 right-32 w-0.5 h-0.5 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000" />
        <div className="absolute top-12 right-16 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-50 animate-pulse delay-2000" />
      </div>
    </motion.nav>
  );
};

export default UltraFuturisticNavigation;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7f29
