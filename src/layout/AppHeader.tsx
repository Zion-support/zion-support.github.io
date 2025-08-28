import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, Eye, FileText, Globe, Handshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target) return;
      
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setServicesDropdownOpen(false);
        setSolutionsDropdownOpen(false);
        setResourcesDropdownOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate search
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: false, hasDropdown: true },
    { name: 'Resources', href: '/resources', current: false, hasDropdown: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { 
      name: 'AI & Analytics', 
      href: '/services', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    { 
      name: 'AI & Legal Tech', 
      href: '/services', 
      icon: Scale, 
      description: 'Document Analysis & Compliance',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI & Healthcare', 
      href: '/services', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI & Research', 
      href: '/services', 
      icon: Eye, 
      description: 'Scientific Research & Discovery',
      featured: true,
      color: 'from-purple-500 to-violet-500'
    },
    { 
      name: 'AI & Green Tech', 
      href: '/services', 
      icon: Leaf, 
      description: 'Sustainability Solutions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'AI & Metaverse', 
      href: '/services', 
      icon: Globe, 
      description: 'Virtual Reality & Gaming',
      featured: true,
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      name: 'AI & Blockchain', 
      href: '/services', 
      icon: Lock, 
      description: 'DeFi & Smart Contracts',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const solutions = [
    { 
      name: 'Enterprise AI', 
      href: '/solutions', 
      icon: Building, 
      description: 'Large-scale AI implementation',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'SMB Solutions', 
      href: '/solutions', 
      icon: Building2, 
      description: 'AI for small businesses',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Startup Accelerator', 
      href: '/solutions', 
      icon: Rocket, 
      description: 'AI startup support',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const resources = [
    { 
      name: 'Documentation', 
      href: '/resources', 
      icon: FileText, 
      description: 'Technical guides & APIs',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Blog & Insights', 
      href: '/blog', 
      icon: BookOpen, 
      description: 'Latest AI trends & news',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    { 
      name: 'Case Studies', 
      href: '/resources', 
      icon: Target, 
      description: 'Success stories & results',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setServicesDropdownOpen(dropdown === 'services' ? !servicesDropdownOpen : false);
    setSolutionsDropdownOpen(dropdown === 'solutions' ? !solutionsDropdownOpen : false);
    setResourcesDropdownOpen(dropdown === 'resources' ? !resourcesDropdownOpen : false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-2xl' 
          : 'bg-transparent'
      }`}
      role="banner"
      aria-label="Main navigation"
    >
      <nav className="container-responsive py-4" aria-label="Primary navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            aria-label="Zion Tech Group - Home"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-slate-400">AI-Powered Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative dropdown-container">
                {item.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name.toLowerCase())}
                    onKeyDown={(e) => handleKeyDown(e, () => toggleDropdown(item.name.toLowerCase()))}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800/50 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                      activeDropdown === item.name.toLowerCase() ? 'text-cyan-400 bg-slate-800/50' : 'text-slate-300'
                    }`}
                    aria-expanded={activeDropdown === item.name.toLowerCase()}
                    aria-haspopup="true"
                    aria-label={`${item.name} menu`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name.toLowerCase() ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="px-3 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800/50 hover:text-cyan-400 text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                    aria-label={item.name}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menus */}
                {item.name === 'Services' && servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-2xl p-4 animate-fade-in">
                    <div className="grid grid-cols-1 gap-3">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="group p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                          aria-label={`${service.name} - ${service.description}`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <service.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors duration-300">
                                {service.name}
                              </h3>
                              <p className="text-sm text-slate-400">{service.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {item.name === 'Solutions' && solutionsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-2xl p-4 animate-fade-in">
                    <div className="grid grid-cols-1 gap-3">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.name}
                          to={solution.href}
                          className="group p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                          aria-label={`${solution.name} - ${solution.description}`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <solution.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors duration-300">
                                {solution.name}
                              </h3>
                              <p className="text-sm text-slate-400">{solution.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {item.name === 'Resources' && resourcesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-2xl p-4 animate-fade-in">
                    <div className="grid grid-cols-1 gap-3">
                      {resources.map((resource) => (
                        <Link
                          key={resource.name}
                          to={resource.href}
                          className="group p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                          aria-label={`${resource.name} - ${resource.description}`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${resource.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <resource.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors duration-300">
                                {resource.name}
                              </h3>
                              <p className="text-sm text-slate-400">{resource.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:block relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  aria-label="Search the website"
                />
                {isSearching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Get in touch"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              onKeyDown={(e) => handleKeyDown(e, () => setMobileMenuOpen(!mobileMenuOpen))}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800/50 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-slate-800/95 backdrop-blur-md rounded-xl border border-slate-700/50 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  aria-label="Search the website"
                />
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name.toLowerCase())}
                          onKeyDown={(e) => handleKeyDown(e, () => toggleDropdown(item.name.toLowerCase()))}
                          className="w-full flex items-center justify-between px-4 py-3 text-left text-slate-300 hover:bg-slate-700/50 hover:text-cyan-400 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                          aria-expanded={activeDropdown === item.name.toLowerCase()}
                          aria-haspopup="true"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.name.toLowerCase() ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {/* Mobile Dropdown */}
                        {activeDropdown === item.name.toLowerCase() && (
                          <div className="mt-2 ml-4 space-y-2 animate-fade-in">
                            {item.name === 'Services' && services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all duration-300"
                                aria-label={`${service.name} - ${service.description}`}
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                                    <service.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <div>
                                    <div className="font-medium text-slate-200">{service.name}</div>
                                    <div className="text-sm text-slate-500">{service.description}</div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                            
                            {item.name === 'Solutions' && solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all duration-300"
                                aria-label={`${solution.name} - ${solution.description}`}
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center`}>
                                    <solution.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <div>
                                    <div className="font-medium text-slate-200">{solution.name}</div>
                                    <div className="text-sm text-slate-500">{solution.description}</div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                            
                            {item.name === 'Resources' && resources.map((resource) => (
                              <Link
                                key={resource.name}
                                to={resource.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all duration-300"
                                aria-label={`${resource.name} - ${resource.description}`}
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                                    <resource.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <div>
                                    <div className="font-medium text-slate-200">{resource.name}</div>
                                    <div className="text-sm text-slate-500">{resource.description}</div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-3 text-slate-300 hover:bg-slate-700/50 hover:text-cyan-400 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                        aria-label={item.name}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-700/50">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  aria-label="Get in touch"
                >
                  Get Started
                  <ArrowRight className="inline ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
