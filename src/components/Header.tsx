import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu, X, ChevronDown, Search, User, Phone, Sparkles, Brain, Shield, Cpu } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Enhanced navigation items with better descriptions
  const navigationItems = useMemo(() => [
    { 
      path: '/', 
      label: 'Home', 
      icon: '🏠',
      description: 'Welcome to Zion Tech Group'
    },
    { 
      path: '/services', 
      label: 'AI Services', 
      icon: '🤖',
      description: 'Explore our AI service offerings'
    },
    { 
      path: '/solutions/enterprise', 
      label: 'Solutions', 
      icon: '💼',
      description: 'Industry-specific solutions'
    },
    { 
      path: '/pricing', 
      label: 'Pricing', 
      icon: '💰',
      description: 'Transparent pricing plans'
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: 'ℹ️',
      description: 'Learn about our company'
    },
    { 
      path: '/careers', 
      label: 'Careers', 
      icon: '🚀',
      description: 'Join our team'
    },
    { 
      path: '/blog', 
      label: 'Blog', 
      icon: '📝',
      description: 'Latest insights and news'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with us'
    }
  ], []);

  // Enhanced service categories with better organization
  const serviceCategories = useMemo(() => [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600',
      services: [
        { name: 'AI Business Intelligence', path: '/services#ai-bi', description: 'Transform data into actionable insights' },
        { name: 'AI Marketing Automation', path: '/services#ai-marketing', description: 'Automate and optimize marketing campaigns' },
        { name: 'AI HR & Recruitment', path: '/services#ai-hr', description: 'Streamline HR processes with AI' },
        { name: 'AI Legal Tech', path: '/services#ai-legal', description: 'Legal document analysis and automation' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      services: [
        { name: 'Quantum-Safe Security', path: '/services#quantum-security', description: 'Future-proof security solutions' },
        { name: 'Security Assessment', path: '/services#security-assessment', description: 'Comprehensive security audits' },
        { name: 'Compliance & Audit', path: '/services#compliance', description: 'Meet industry standards and regulations' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      color: 'from-purple-500 to-pink-600',
      services: [
        { name: 'Cloud Migration', path: '/services#cloud-migration', description: 'Seamless cloud transition services' },
        { name: 'Network Infrastructure', path: '/services#network', description: 'Robust network solutions' },
        { name: 'Managed IT Services', path: '/services#managed-it', description: '24/7 IT management and support' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Sparkles,
      color: 'from-yellow-500 to-orange-600',
      services: [
        { name: 'Blockchain Solutions', path: '/services#blockchain', description: 'Decentralized technology solutions' },
        { name: 'IoT Integration', path: '/services#iot', description: 'Connected device ecosystems' },
        { name: 'Quantum Computing', path: '/services#quantum', description: 'Next-generation computational power' }
      ]
    }
  ], []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const isActiveRoute = useCallback((path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  }, [location.pathname]);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  }, [searchQuery]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl' 
            : 'bg-black/20 backdrop-blur-sm border-b border-transparent'
        }`}
        role="banner"
        aria-label="Main header"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Zion Tech Group - Home"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl scale-110"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors duration-300">
                  AI-Powered Innovation
                </p>
              </div>
            </Link>

            {/* Enhanced Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Search services, solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                  aria-label="Search services and solutions"
                />
              </form>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
              {navigationItems.map((item) => (
                <div key={item.path} className="relative group">
                  {item.path === '/services' ? (
                    <div className="relative dropdown-container">
                      <button
                        onClick={() => toggleDropdown('services')}
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${
                          isActiveRoute(item.path)
                            ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                            : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                        }`}
                        aria-expanded={activeDropdown === 'services'}
                        aria-haspopup="true"
                        aria-label={`${item.label} menu`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === 'services' ? 'rotate-180' : ''
                        }`} aria-hidden="true" />
                      </button>
                      
                      {/* Enhanced Services Dropdown */}
                      {activeDropdown === 'services' && (
                        <div className="absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl p-6 z-50">
                          <div className="grid grid-cols-2 gap-6">
                            {serviceCategories.map((category, index) => (
                              <div key={index} className="space-y-3">
                                <div className="flex items-center space-x-2 mb-3">
                                  <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                                    <category.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <h3 className="font-semibold text-white text-sm">{category.title}</h3>
                                </div>
                                <div className="space-y-2">
                                  {category.services.map((service, serviceIndex) => (
                                    <Link
                                      key={serviceIndex}
                                      to={service.path}
                                      className="block p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <div className="font-medium text-cyan-400 group-hover:text-cyan-300 text-sm">
                                        {service.name}
                                      </div>
                                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                                        {service.description}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-700/50">
                            <Link
                              to="/services"
                              className="block w-full text-center py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium"
                              onClick={() => setActiveDropdown(null)}
                            >
                              View All Services
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${
                        isActiveRoute(item.path)
                          ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                      }`}
                      aria-label={item.description}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Enhanced Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                aria-label="Contact us"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-700/50">
              <div className="space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                  <input
                    type="search"
                    placeholder="Search services, solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                    aria-label="Search services and solutions"
                  />
                </form>

                {/* Mobile Navigation Items */}
                <nav className="space-y-2" role="navigation" aria-label="Mobile navigation">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg transition-colors duration-300 ${
                        isActiveRoute(item.path)
                          ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      aria-label={item.description}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-700/50">
                  <Link
                    to="/contact"
                    className="block w-full text-center py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Contact us"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
