import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, ChevronRight } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const services = [
    {
      name: 'AI & Machine Learning',
      href: '/services/ai',
      description: 'Cutting-edge AI solutions'
    },
    {
      name: 'Cloud & DevOps',
      href: '/services/cloud',
      description: 'Scalable cloud infrastructure'
    },
    {
      name: 'Cybersecurity',
      href: '/services/cybersecurity',
      description: 'Advanced security solutions'
    },
    {
      name: 'IT Infrastructure',
      href: '/services/infrastructure',
      description: 'Robust IT foundations'
    },
    {
      name: 'Digital Transformation',
      href: '/services/transformation',
      description: 'Business modernization'
    },
    {
      name: 'Data Analytics',
      href: '/services/data-analytics',
      description: 'Business intelligence'
    },
    {
      name: 'IoT & Edge Computing',
      href: '/services/iot-edge-computing',
      description: 'Connected ecosystems'
    },
    {
      name: 'Quantum Technology',
      href: '/services/quantum-technology',
      description: 'Next-gen computing'
    },
    {
      name: 'Space Technology',
      href: '/services/space-tech',
      description: 'Aerospace innovation'
    },
    {
      name: 'Green IT',
      href: '/services/green-it',
      description: 'Sustainable technology'
    },
    {
      name: 'Micro SAAS',
      href: '/services/micro-saas',
      description: 'Scalable software solutions'
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Case Studies', href: '/case-studies' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support Portal', href: '/support' },
    { name: 'Contact', href: '/contact' }
  ];

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Company', href: '#', current: false, hasDropdown: true },
    { name: 'Support', href: '#', current: false, hasDropdown: true },
    { name: 'Contact', href: '/contact', current: false },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex ml-8 space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <button className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {/* Services Dropdown */}
                    {item.name === 'Services' && (
                      <div className="absolute left-0 mt-2 w-80 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-white mb-3">Our Services</h3>
                          <div className="grid grid-cols-1 gap-2">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="flex items-center p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                              >
                                <div>
                                  <div className="text-cyan-400 font-medium">{service.name}</div>
                                  <div className="text-slate-400 text-sm">{service.description}</div>
                                </div>
                                <ChevronRight className="ml-auto h-4 w-4 text-slate-500" />
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-3 border-t border-slate-700">
                            <Link
                              to="/services"
                              className="block text-center text-cyan-400 hover:text-cyan-300 font-medium"
                            >
                              View All Services →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Company Dropdown */}
                    {item.name === 'Company' && (
                      <div className="absolute left-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
                          <div className="space-y-2">
                            {companyLinks.map((link) => (
                              <Link
                                key={link.name}
                                to={link.href}
                                className="block p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-slate-300 hover:text-cyan-400"
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Support Dropdown */}
                    {item.name === 'Support' && (
                      <div className="absolute left-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
                          <div className="space-y-2">
                            {supportLinks.map((link) => (
                              <Link
                                key={link.name}
                                to={link.href}
                                className="block p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-slate-300 hover:text-cyan-400"
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex ml-6 flex-1 max-w-md">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search services, talent, equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800/20 border border-slate-700/20 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Search className="h-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right side actions */}
          <div className="ml-6 flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Bell className="h-5 w-5" />
            </button>

            {/* User menu */}
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <User className="h-5 w-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors"
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
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 border-t border-slate-700/20">
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
                <div className="space-y-2">
                  {services.slice(0, 6).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-slate-300 hover:text-cyan-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-slate-400">{service.description}</div>
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="block p-3 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 transition-colors duration-200 text-cyan-400 font-medium text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All Services
                  </Link>
                </div>
              </div>
              
              {/* Mobile Company Links */}
              <div className="px-3 py-2">
                <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
                <div className="space-y-2">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-slate-300 hover:text-cyan-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Mobile Support Links */}
              <div className="px-3 py-2">
                <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
                <div className="space-y-2">
                  {supportLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-slate-300 hover:text-cyan-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
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
      </header>
    </>
  );
}
