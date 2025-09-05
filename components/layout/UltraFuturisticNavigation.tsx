import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Rocket, Brain, Atom, Shield } from 'lucide-react';

interface UltraFuturisticNavigationProps {
  className?: string;
}

export default function UltraFuturisticNavigation({ className = '' }: UltraFuturisticNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;flex items-center justify-between h-20&quot;>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className=&quot;flex items-center space-x-3&quot;
          >
            <div className=&quot;w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl&quot;>
              <Rocket className=&quot;w-7 h-7 text-white&quot; />
            </div>
            <div>
              <div className=&quot;text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent&quot;>
                Zion Tech Group
              </div>
              <div className=&quot;text-xs text-gray-400 -mt-1&quot;>Revolutionary Technology</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
            {navigationItems.map((item, index) => (
              <div key={item.name} className=&quot;relative group&quot;>
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className=&quot;flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50&quot;>
                      <span>{item.name}</span>
                      <ChevronDown className=&quot;w-4 h-4 transition-transform duration-300 group-hover:rotate-180&quot; />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className=&quot;absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden&quot;
                        >
                          <div className=&quot;p-4&quot;>
                            <div className=&quot;grid gap-3&quot;>
                              {item.dropdownItems?.map((dropdownItem, idx) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className=&quot;flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item&quot;
                                >
                                  <div className={`w-10 h-10 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                                    <dropdownItem.icon className=&quot;w-5 h-5 text-white&quot; />
                                  </div>
                                  <div>
                                    <div className=&quot;text-white font-medium group-hover/item:text-cyan-300 transition-colors&quot;>
                                      {dropdownItem.name}
                                    </div>
                                    {dropdownItem.name === 'View All Services' && (
                                      <div className=&quot;text-xs text-gray-400&quot;>Explore our complete portfolio</div>
                                    )}
                                  </div>
                                </a>
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
                    className=&quot;text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50&quot;
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className=&quot;hidden lg:flex items-center space-x-6&quot;>
            {/* Contact Info */}
            <div className=&quot;flex items-center space-x-4 text-sm text-gray-300&quot;>
              <div className=&quot;flex items-center space-x-2&quot;>
                <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                <span>{contactInfo.mobile}</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href=&quot;/contact&quot;
                className=&quot;inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30&quot;
              >
                <Rocket className=&quot;w-4 h-4 mr-2&quot; />
                Get Started
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className=&quot;lg:hidden&quot;>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=&quot;text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50&quot;
            >
              {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className=&quot;lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden&quot;
          >
            <div className=&quot;px-4 py-6 space-y-4&quot;>
              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className=&quot;flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50&quot;
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
                          className=&quot;ml-4 mt-2 space-y-2&quot;
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className=&quot;flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300&quot;
                              onClick={() => setIsOpen(false)}
                            >
                              <div className={`w-8 h-8 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center`}>
                                <dropdownItem.icon className=&quot;w-4 h-4 text-white&quot; />
                              </div>
                              <span className=&quot;text-gray-300 hover:text-white transition-colors&quot;>
                                {dropdownItem.name}
                              </span>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className=&quot;block text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50&quot;
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}

              {/* Mobile Contact Info */}
              <div className=&quot;pt-6 border-t border-gray-700/50 space-y-3&quot;>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <Mail className=&quot;w-4 h-4 text-purple-400&quot; />
                  <span>{contactInfo.email}</span>
                </div>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <MapPin className=&quot;w-4 h-4 text-green-400&quot; />
                  <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className=&quot;pt-4&quot;>
                <Link
                  href=&quot;/contact&quot;
                  className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300&quot;
                  onClick={() => setIsOpen(false)}
                >
                  <Rocket className=&quot;w-5 h-5 inline mr-2&quot; />
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}