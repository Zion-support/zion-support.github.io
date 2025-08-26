import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
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
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: false },
    { name: 'Company', href: '#', current: false, hasDropdown: true },
    { name: 'Resources', href: '#', current: false, hasDropdown: true },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const servicesDropdown = [
    { name: 'AI Solutions', href: '/services/ai' },
    { name: 'Cloud & DevOps', href: '/services/cloud' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'IT Infrastructure', href: '/services/infrastructure' },
    { name: 'Digital Transformation', href: '/services/transformation' },
    { name: 'Consulting', href: '/services/consulting' },
  ];

  const companyDropdown = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Partners', href: '/partners' },
  ];

  const resourcesDropdown = [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Training', href: '/training' },
    { name: 'Help Center', href: '/help' },
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
                  <div className="relative">
                    <button
                      onClick={() => {
                        if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                        if (item.name === 'Company') setCompanyDropdownOpen(!companyDropdownOpen);
                        if (item.name === 'Resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                      }}
                      className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {/* Services Dropdown */}
                    {item.name === 'Services' && servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-lg py-2 z-50">
                        {servicesDropdown.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-200"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    {/* Company Dropdown */}
                    {item.name === 'Company' && companyDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-lg py-2 z-50">
                        {companyDropdown.map((company) => (
                          <Link
                            key={company.name}
                            to={company.href}
                            className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-200"
                            onClick={() => setCompanyDropdownOpen(false)}
                          >
                            {company.name}
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    {/* Resources Dropdown */}
                    {item.name === 'Resources' && resourcesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-lg py-2 z-50">
                        {resourcesDropdown.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-200"
                            onClick={() => setResourcesDropdownOpen(false)}
                          >
                            {resource.name}
                          </Link>
                        ))}
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
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-2">
                      <div className="text-slate-400 px-3 py-2 text-sm font-medium">{item.name}</div>
                      {item.name === 'Services' && (
                        <div className="ml-4 space-y-1">
                          {servicesDropdown.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-sm transition-colors duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                      {item.name === 'Company' && (
                        <div className="ml-4 space-y-1">
                          {companyDropdown.map((company) => (
                            <Link
                              key={company.name}
                              to={company.href}
                              className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-sm transition-colors duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {company.name}
                            </Link>
                          ))}
                        </div>
                      )}
                      {item.name === 'Resources' && (
                        <div className="ml-4 space-y-1">
                          {resourcesDropdown.map((resource) => (
                            <Link
                              key={resource.name}
                              to={resource.href}
                              className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-sm transition-colors duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {resource.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
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
