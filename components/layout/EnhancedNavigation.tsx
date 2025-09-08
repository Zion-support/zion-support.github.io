import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  return (
<nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"><Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </div>
                <div className="text-xs text-cyan-400">
                  Revolutionary Technology
                </div>
              </div>
            </Link>
          </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden md: flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>{/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {item.hasDropdown ? (
                  <div className="relative">
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2">
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"><div className="p-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300">{dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2">{item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"><Search className="w-5 h-5" />
            </motion.button>
            {/* Notifications */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 relative"><Bell className="w-5 h-5" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </motion.button>
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}><Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {solutionsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <Link href="/solutions/enterprise" className="block px-4 py-2 text-gray-700 hover: bg-gray-100">
                    Enterprise
                  </Link>
                  <Link href="/solutions/startups" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Startups
                  </Link>
                  <Link href="/solutions/small-business" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Small Business
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover: text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link href="/pricing" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>

{/* Mobile Menu Button */}<button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300">{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"><div className="px-4 py-6 space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
              </div>
              {/* Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2">{item.name}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1 text-sm">{dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20">
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>{contactInfo.website}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                </div>
              </div>
              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
