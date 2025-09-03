import React, { useState, useEffect } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { Menu, X, Home, Info, Phone, Brain, Code, Network, Rocket, ShoppingCart, BarChart3 } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
=======
<<<<<<< HEAD
import { Menu, X, ChevronDown, Globe, Brain, Cloud, Shield, Zap, Users } from 'lucide-react';

export default function Navigation() {
=======
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, 
  ChevronDown, Globe, 
  Brain, Cloud, 
  Shield, Zap, 
  Users, Phone, 
  Mail, MapPin,
  Code, Network,
  Rocket, ShoppingCart,
  BarChart3, Info
} from 'lucide-react';

const Navigation = () => {
>>>>>>> main
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

>>>>>>> main
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
<<<<<<< HEAD
    { name: 'Home', href: '/', icon: Home },
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Code },
    { name: 'IT Services', href: '/it-services', icon: Network },
    { name: 'Services', href: '/services', icon: BarChart3 },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl shadow-blue-500/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  ZION
                </div>
                <div className="text-xs text-blue-400 font-medium">TECH GROUP</div>
              </div>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-800/30"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-3">
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Get Started
=======
    { name: 'Home', href: '/' },
<<<<<<< HEAD
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Cutting-edge AI solutions' },
        { name: 'IT Services', href: '/it-services', icon: Cloud, description: 'Comprehensive IT solutions' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Zap, description: 'Scalable SaaS applications' },
        { name: 'All Services', href: '/services', icon: Users, description: 'Complete service portfolio' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
=======
    { 
      name: 'Services', href: '/services', 
      dropdown: [
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Cutting-edge AI solutions' },
        { name: 'IT Services', href: '/it-services', icon: Network, description: 'Comprehensive IT solutions' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, description: 'Scalable SaaS solutions' },
        { name: 'All Services', href: '/services', icon: Settings, description: 'Complete service overview' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { name: 'AI Solutions', href: '/solutions/ai', icon: Brain, description: 'AI-powered business solutions' },
        { name: 'Cloud Solutions', href: '/solutions/cloud', icon: Cloud, description: 'Cloud infrastructure solutions' },
        { name: 'Security Solutions', href: '/solutions/security', icon: Shield, description: 'Cybersecurity solutions' },
        { name: 'Digital Transformation', href: '/solutions/digital', icon: Zap, description: 'Digital transformation services' }
      ]
<<<<<<< HEAD
    }, { name: 'Solutions', href: '/solutions' }, { name: 'About', href: '/about' }, { name: 'Contact', href: '/contact' }, { name: 'Blog', href: '/blog' }, { name: 'Careers', href: '/careers' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' }, { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
=======
    },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' }
  ];

  const contactInfo = [
  { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
>>>>>>> main
    { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
>>>>>>> main
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

<<<<<<< HEAD
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-blue-400/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
=======
  return (<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
>>>>>>> main
              Zion Tech Group
            </span>
          </Link>

<<<<<<< HEAD
=======
          {/* Desktop Navigation */}
>>>>>>> main
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
<<<<<<< HEAD
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-blue-300 transition-colors duration-200 py-2"
=======
<<<<<<< HEAD
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-300 hover: text-cyan-300 transition-colors duration-200 py-2"
=======
                    <button onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-cyan-300 transition-colors duration-200 py-2"
>>>>>>> main
>>>>>>> main
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
<<<<<<< HEAD
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-blue-400/20 rounded-xl shadow-2xl shadow-blue-400/10 overflow-hidden">
                        <div className="p-4">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:from-blue-400/30 group-hover:to-blue-500/30 transition-all duration-200">
                                <dropdownItem.icon className="w-5 h-5 text-blue-400" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                                  {dropdownItem.name}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  {dropdownItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
=======
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-400/10 overflow-hidden'
                        >
                          <div className="p-4">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-start space-x-3 p-3 rounded-lg hover: bg-gray-800/50 transition-colors duration-200 group"
                              >
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all duration-200">
                                  <dropdownItem.icon className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                                    {dropdownItem.name}
                                  </p>
                                  <p className="text-xs text-gray-400 mt-1">
                                    {dropdownItem.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
>>>>>>> main
                  </div>
                ) : (
                  <Link
                    href={item.href}
<<<<<<< HEAD
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-200 py-2"
=======
                    className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 py-2"
>>>>>>> main
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

<<<<<<< HEAD
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
=======
          {/* CTA Button */}
          <div className="hidden lg: block">
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
>>>>>>> main
            >
              Get Started
            </Link>
          </div>

<<<<<<< HEAD
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-blue-300 hover:bg-gray-800/50 transition-colors duration-200"
=======
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg: hidden p-2 rounded-lg text-gray-300 hover:text-cyan-300 hover:bg-gray-800/50 transition-colors duration-200"
>>>>>>> main
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

<<<<<<< HEAD
      {isOpen && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-blue-400/20">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left px-3 py-2 text-gray-300 hover:text-blue-300 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={closeMobileMenu}
                              className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-400 hover:text-blue-300 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                            >
                              <dropdownItem.icon className="w-4 h-4 text-blue-400" />
                              <span>{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block px-3 py-2 rounded-lg transition-colors duration-200 text-gray-300 hover:text-blue-300 hover:bg-gray-800/50"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-700">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-center rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started Today
>>>>>>> main
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50">
        <div className={`transition-all duration-500 ${
          scrolled ? 'bg-gray-900/95 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl shadow-blue-500/10' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    ZION
                  </div>
                  <div className="text-xs text-blue-400 font-medium">TECH GROUP</div>
                </div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/30 rounded-lg transition-all duration-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-gray-900/95 backdrop-blur-xl border-b border-blue-500/20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-6">
              {/* Navigation Items */}
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 rounded-lg font-medium transition-all duration-300 text-gray-300 hover:text-white hover:bg-gray-800/30"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-blue-500/20">
                <div className="text-center">
                  <div className="text-blue-400 font-semibold mb-2">Contact Us</div>
                  <div className="text-sm text-gray-400 space-y-1">
                    <div>+1 302 464 0950</div>
                    <div>kleber@ziontechgroup.com</div>
                    <div>364 E Main St STE 1008</div>
                    <div>Middletown DE 19709</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}
=======
      )}
    </nav>
  );
}
=======
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-cyan-400/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Contact Information */}
              <div className="pb-4 border-b border-gray-700">
                <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
                  Contact Information
                </h3>
                <div className="space-y-2">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-sm text-gray-300 hover: text-cyan-300 transition-colors"
                    >
                      <contact.icon className="w-4 h-4 text-cyan-400" />
                      <span>{contact.text}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              <div className="space-y-2">
                {navigationItems.map((item) => (<div key={item.name}>
                    {item.dropdown ? (
                      <div>
<<<<<<< HEAD
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full text-left px-3 py-2 text-gray-300 hover: text-cyan-300 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
=======
                        <button onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-300 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
>>>>>>> main
                        >
                          <span>{item.name}</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 mt-2 space-y-1"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  onClick={closeMobileMenu}
                                  className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-400 hover: text-cyan-300 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                                >
                                  <dropdownItem.icon className="w-4 h-4 text-cyan-400" />
                                  <span>{dropdownItem.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block px-3 py-2 rounded-lg transition-colors duration-200 text-gray-300 hover:text-cyan-300 hover:bg-gray-800/50"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
>>>>>>> main
>>>>>>> main
