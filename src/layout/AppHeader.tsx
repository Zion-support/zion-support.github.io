import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, ChevronRight, Globe, Shield, Zap, Brain } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target) return;
      
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setServicesDropdownOpen(false);
        setResourcesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const services = [
    { 
      name: 'AI Solutions', 
      href: '/services/ai', 
      description: 'Machine Learning & NLP',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Tech Talent', 
      href: '/talent', 
      description: 'Expert Developers & Engineers',
      icon: User,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Equipment', 
      href: '/equipment', 
      description: 'Infrastructure & Hardware',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Consulting', 
      href: '/consulting', 
      description: 'Digital Transformation',
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Cybersecurity', 
      href: '/services/cybersecurity', 
      description: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'Cloud Services', 
      href: '/services/cloud', 
      description: 'DevOps & Infrastructure',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500'
    },
  ];

  const resources = [
    { name: 'Blog', href: '/blog', description: 'Latest insights & updates' },
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
    { name: 'Whitepapers', href: '/whitepapers', description: 'Industry research' },
    { name: 'Events', href: '/events', description: 'Webinars & conferences' },
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
          <nav className="hidden lg:flex ml-8 space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  item.current 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  servicesDropdownOpen 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 border border-slate-700/50 rounded-xl shadow-xl backdrop-blur-md"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-3">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} p-2 mr-4 group-hover:scale-110 transition-transform`}>
                            <service.icon className="w-full h-full text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {service.description}
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-700/50">
                      <Link
                        to="/services"
                        className="block text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors py-2 px-4 rounded-lg hover:bg-slate-700/50"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  resourcesDropdownOpen 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                }`}
              >
                Resources
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {resourcesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 border border-slate-700/50 rounded-xl shadow-xl backdrop-blur-md"
                  onMouseEnter={() => setResourcesDropdownOpen(true)}
                  onMouseLeave={() => setResourcesDropdownOpen(false)}
                >
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {resources.map((resource) => (
                        <Link
                          key={resource.name}
                          to={resource.href}
                          className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                        >
                          <div className="flex-1">
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {resource.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {resource.description}
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center ml-auto space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 text-sm bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </form>

            {/* Notifications */}
            <button className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors duration-200">
              <Bell className="w-5 h-5" />
            </button>

            {/* User menu */}
            <button className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 border-t border-slate-700/50">
              {/* Mobile search */}
              <form onSubmit={handleSearch} className="px-3 pb-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 text-sm bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </form>

              {/* Mobile navigation */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    item.current 
                      ? 'text-cyan-400 bg-cyan-500/10' 
                      : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile services */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-slate-400 mb-2">Services</div>
                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-3 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile resources */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-slate-400 mb-2">Resources</div>
                <div className="space-y-1">
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      to={resource.href}
                      className="block px-3 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
