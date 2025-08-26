import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Briefcase, FileText, Users, Building } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

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
    { 
      name: 'Services', 
      href: '/services', 
      current: false,
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Solutions', href: '/services/ai', icon: '🤖' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: '🔒' },
        { name: 'Cloud & DevOps', href: '/services/cloud', icon: '☁️' },
        { name: 'IT Infrastructure', href: '/services/infrastructure', icon: '🏗️' },
        { name: 'Digital Transformation', href: '/services/transformation', icon: '🚀' },
        { name: 'Consulting', href: '/services/consulting', icon: '💼' }
      ]
    },
    { 
      name: 'Resources', 
      href: '/resources', 
      current: false,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Blog', href: '/blog', icon: '📝' },
        { name: 'Case Studies', href: '/case-studies', icon: '📊' },
        { name: 'White Papers', href: '/white-papers', icon: '📄' },
        { name: 'Webinars', href: '/webinars', icon: '🎥' },
        { name: 'Documentation', href: '/docs', icon: '📚' },
        { name: 'Research', href: '/research', icon: '🔬' }
      ]
    },
    { name: 'Careers', href: '/careers', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Partners', href: '/partners' }
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
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      if (item.name === 'Services') setServicesDropdownOpen(true);
                      if (item.name === 'Resources') setResourcesDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (item.name === 'Services') setServicesDropdownOpen(false);
                      if (item.name === 'Resources') setResourcesDropdownOpen(false);
                    }}
                  >
                    <button className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {/* Services Dropdown */}
                    {item.name === 'Services' && servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50">
                        <div className="p-4">
                          <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
                            <Briefcase className="h-4 w-4 mr-2" />
                            Our Services
                          </h3>
                          <div className="grid grid-cols-1 gap-2">
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                              >
                                <span className="text-lg mr-3">{dropdownItem.icon}</span>
                                <span className="text-slate-300 hover:text-cyan-400">{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Resources Dropdown */}
                    {item.name === 'Resources' && resourcesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50">
                        <div className="p-4">
                          <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            Resources & Insights
                          </h3>
                          <div className="grid grid-cols-1 gap-2">
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                              >
                                <span className="text-lg mr-3">{dropdownItem.icon}</span>
                                <span className="text-slate-300 hover:text-cyan-400">{dropdownItem.name}</span>
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
            {/* Company dropdown */}
            <div className="relative hidden md:block">
              <button className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors p-2">
                <Building className="h-5 w-5" />
              </button>
            </div>

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
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="text-slate-400 hover:text-cyan-400 block px-3 py-1 text-sm transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropdownItem.icon} {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
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
