<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Globe, Zap, Brain, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown } from 'lucide-react';
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
<<<<<<< HEAD
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
=======
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigation = [
<<<<<<< HEAD
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { 
      name: 'Services', 
      href: '/services', 
      current: location.pathname.startsWith('/services'),
      dropdown: [
        { name: 'AI Solutions', href: '/ai-services', icon: Brain, description: 'Cutting-edge AI services' },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Advanced security solutions' },
        { name: 'Cloud & DevOps', href: '/cloud-devops', icon: Globe, description: 'Scalable infrastructure' },
        { name: 'Quantum Computing', href: '/quantum-computing', icon: Zap, description: 'Next-gen computing' },
        { name: 'IoT Services', href: '/iot-services', icon: Globe, description: 'Connected solutions' },
        { name: 'Blockchain', href: '/blockchain-services', icon: Shield, description: 'Decentralized tech' }
      ]
    },
    { name: 'Solutions', href: '/business-solutions', current: location.pathname.startsWith('/business-solutions') },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };
=======
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { name: 'AI Solutions', href: '/services/ai', description: 'Machine Learning & NLP' },
    { name: 'Tech Talent', href: '/talent', description: 'Expert Developers & Engineers' },
    { name: 'Equipment', href: '/equipment', description: 'Infrastructure & Hardware' },
    { name: 'Consulting', href: '/consulting', description: 'Digital Transformation' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & Compliance' },
    { name: 'Cloud Services', href: '/services/cloud', description: 'DevOps & Infrastructure' },
  ];
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/30 shadow-2xl shadow-black/20' 
          : 'bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/20'
      }`}>
        <div className="container flex h-16 items-center px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-400 group-hover:to-purple-500 transition-all duration-300">
                  Zion Tech Group
                </h1>
              </motion.div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex ml-8 space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        item.current
                          ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                          : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
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
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
                                >
                                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-200">
                                    <dropdownItem.icon className="w-4 h-4 text-cyan-400" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                      {dropdownItem.name}
                                    </div>
                                    <div className="text-sm text-slate-400">
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
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      item.current
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                        : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 border border-slate-700/50 rounded-lg shadow-xl backdrop-blur-md"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                        >
                          <div className="flex-1">
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700/50">
                      <Link
                        to="/services"
                        className="block text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex ml-6 flex-1 max-w-md">
            <form onSubmit={handleSearch} className="relative w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services, solutions, insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-800/30 border border-slate-700/30 rounded-lg px-4 py-2 pl-10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              </div>
            </form>
          </div>

          {/* Right side actions */}
          <div className="ml-6 flex items-center space-x-2">
            {/* Notifications */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
            >
              <Bell className="h-5 w-5" />
            </motion.button>

            {/* User menu */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
            >
              <User className="h-5 w-5" />
            </motion.button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
<<<<<<< HEAD
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md border-t border-slate-700/30">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all duration-200 flex items-center justify-between"
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {activeDropdown === item.name && (
                          <div className="ml-4 mt-2 space-y-1">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                                className="block px-3 py-2 text-sm text-slate-400 hover:text-cyan-400 hover:bg-slate-700/30 rounded-lg transition-all duration-200"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="px-3 py-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                  />
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
=======
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 border-t border-slate-700/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-slate-400 text-sm font-medium mb-2">Services</div>
                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="px-3 py-2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </form>
            </div>
          </div>
        )}
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
      </header>
    </>
  );
}
