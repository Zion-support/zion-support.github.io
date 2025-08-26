import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Globe, Briefcase, BookOpen, Shield } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { 
      name: 'Services', 
      href: '/services', 
      current: false,
      dropdown: [
        { name: 'Overview', href: '/services/overview', icon: BookOpen },
        { name: 'Pricing Guide', href: '/services/pricing', icon: Briefcase },
        { name: 'Showcase', href: '/services/showcase', icon: Globe },
        { name: 'AI Services', href: '/services/ai-services', icon: Globe },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Globe },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Globe },
        { name: 'Green IT', href: '/green-it', icon: Globe },
        { name: '5G Solutions', href: '/services/five-g-solutions', icon: Globe },
        { name: 'IoT & Edge', href: '/services/iot-edge-computing', icon: Globe }
      ]
    },
    { 
      name: 'Marketplace', 
      href: '/marketplace', 
      current: false,
      dropdown: [
        { name: 'Products', href: '/marketplace', icon: Briefcase },
        { name: 'Talent', href: '/talent', icon: User },
        { name: 'Equipment', href: '/equipment', icon: Briefcase },
        { name: 'Categories', href: '/categories', icon: BookOpen }
      ]
    },
    { 
      name: 'Company', 
      href: '/about', 
      current: false,
      dropdown: [
        { name: 'About Us', href: '/about', icon: User },
        { name: 'Leadership', href: '/leadership', icon: User },
        { name: 'Partners', href: '/partners', icon: Briefcase },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Blog', href: '/blog', icon: BookOpen }
      ]
    },
    { 
      name: 'Resources', 
      href: '/help', 
      current: false,
      dropdown: [
        { name: 'Help Center', href: '/help', icon: BookOpen },
        { name: 'Documentation', href: '/docs', icon: BookOpen },
        { name: 'White Papers', href: '/white-papers', icon: BookOpen },
        { name: 'Webinars', href: '/webinars', icon: Globe },
        { name: 'Training', href: '/training', icon: BookOpen },
        { name: 'Research', href: '/research', icon: BookOpen }
      ]
    },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="bg-slate-900 shadow-lg border-b border-slate-700 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item, index) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                        item.current
                          ? 'text-cyan-400 bg-slate-800'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <dropdownItem.icon className="w-4 h-4" />
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.current
                        ? 'text-cyan-400 bg-slate-800'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>

            {/* User menu */}
            <button className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
              <User className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(navigation.indexOf(item))}
                        className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 transition-colors flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === navigation.indexOf(item) ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === navigation.indexOf(item) && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
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
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        item.current
                          ? 'text-cyan-400 bg-slate-700'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile Search */}
            <div className="px-2 pt-2 pb-3">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      
      {/* Click outside to close dropdowns */}
      {activeDropdown !== null && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
}
