import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Globe, Zap, Shield, Brain } from 'lucide-react';

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

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Talent', href: '/talent', current: false },
    { name: 'Equipment', href: '/equipment', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const servicesDropdown = [
    { name: 'AI Solutions', href: '/services/ai', icon: Brain, description: 'Machine Learning & AI Services' },
    { name: 'IT Infrastructure', href: '/services/infrastructure', icon: Shield, description: 'Enterprise IT Solutions' },
    { name: 'Cloud & DevOps', href: '/services/cloud', icon: Globe, description: 'Cloud Management & Automation' },
    { name: 'Micro SAAS', href: '/services/micro-saas', icon: Zap, description: 'Ready-to-use Business Solutions' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-8 space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button className="text-slate-300 hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1">
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 border border-slate-700/50 rounded-xl shadow-2xl backdrop-blur-md">
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-3">
                            {servicesDropdown.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                              >
                                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hover:from-zion-cyan/30 group-hover:to-zion-purple/30 transition-all duration-200">
                                  <service.icon className="w-5 h-5 text-zion-cyan" />
                                </div>
                                <div>
                                  <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                    {service.name}
                                  </div>
                                  <div className="text-sm text-slate-400">
                                    {service.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-slate-700/50">
                            <Link
                              to="/services"
                              className="block text-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                            >
                              View All Services →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-slate-300 hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-colors duration-200"
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
                className="w-full bg-slate-800/20 border border-slate-700/20 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-200"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-zion-cyan transition-colors"
              >
                <Search className="h-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right side actions */}
          <div className="ml-6 flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 text-slate-400 hover:text-zion-cyan transition-colors relative">
              <Bell className="h-5 w-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-zion-cyan rounded-full animate-pulse"></div>
            </button>

            {/* User menu */}
            <button className="p-2 text-slate-400 hover:text-zion-cyan transition-colors">
              <User className="h-5 w-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-zion-cyan transition-colors"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 border-t border-slate-700/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-slate-300 hover:text-zion-cyan block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services Submenu */}
              <div className="px-3 py-2">
                <div className="text-sm text-slate-400 mb-2">Services:</div>
                {servicesDropdown.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block px-3 py-2 text-sm text-slate-300 hover:text-zion-cyan transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="px-3 py-2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </form>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
