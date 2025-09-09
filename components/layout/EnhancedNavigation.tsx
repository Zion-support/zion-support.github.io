import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'AI & Machine Learning', href: '/services#ai-services' },
    { name: 'Cloud & Infrastructure', href: '/services#cloud-services' },
    { name: 'Cybersecurity', href: '/services#cybersecurity' },
    { name: 'Web Development', href: '/services#web-development' },
    { name: 'Data & Analytics', href: '/services#data-services' },
    { name: 'Mobile Development', href: '/services#mobile-development' },
    { name: 'Blockchain & Web3', href: '/services#blockchain' },
    { name: 'Technology Consulting', href: '/services#consulting' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Zion Tech Group</div>
                <div className="text-xs text-gray-500">Technology Solutions</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/">
              <span className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Home
              </span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  {services.map((service) => (
                    <Link key={service.name} href={service.href}>
                      <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer">
                        {service.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about">
              <span className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                About
              </span>
            </Link>
            
            <Link href="/blog">
              <span className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Blog
              </span>
            </Link>
            
            <Link href="/contact">
              <span className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Contact
              </span>
            </Link>

            {/* CTA Button */}
            <Link href="/contact">
              <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer">
                Get Quote
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <Link href="/">
                <span className="block text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                  Home
                </span>
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => (
                      <Link key={service.name} href={service.href}>
                        <span className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about">
                <span className="block text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                  About
                </span>
              </Link>
              
              <Link href="/blog">
                <span className="block text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                  Blog
                </span>
              </Link>
              
              <Link href="/contact">
                <span className="block text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                  Contact
                </span>
              </Link>

              {/* Mobile CTA Button */}
              <Link href="/contact">
                <span className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors cursor-pointer">
                  Get Quote
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            {...getAnimationProps('fadeIn')}
            className="absolute inset-0 bg-black/95 backdrop-blur-md z-50"
          >
            <div className="max-w-2xl mx-auto px-4 pt-20">
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services, solutions, or insights..."
                  className="w-full px-6 py-4 text-white bg-white/10 border border-white/20 rounded-2xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  aria-label="Search query"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  aria-label="Submit search"
                >
                  <Search className="w-6 h-6" />
                </button>
              </form>
              <button
                onClick={toggleSearch}
                className="absolute top-4 right-4 p-2 text-white hover:text-cyan-400 transition-colors"
                aria-label="Close search"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-4 py-3 text-white bg-white/10 border border-white/20 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  aria-label="Search query"
                />
              </div>

              {/* Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </Link>
                  
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1 text-sm"
                        >
                          {dropdownItem.name}
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
                  <Search className="w-5 h-5" />
                </button>
              </form>

              {/* Mobile Navigation Items */}
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="w-full flex items-center justify-between px-4 py-3 text-white hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/10"
                          aria-expanded={activeDropdown === item.label}
                        >
                          <span className="flex items-center space-x-3">
                            {item.icon}
                            <span>{item.label}</span>
                          </span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {activeDropdown === item.label && (
                          <motion.div
                            {...getAnimationProps('fadeIn')}
                            className="ml-8 mt-2 space-y-1"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/10"
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveDropdown(null);
                                }}
                                aria-label={child.description || child.label}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-white hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/10"
                        onClick={() => setIsOpen(false)}
                        aria-label={item.description || item.label}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/20">
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                  aria-label="Contact us"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-white/20">
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-white hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/10"
                      aria-label={social.description}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default EnhancedNavigation;