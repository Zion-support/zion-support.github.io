import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu, X, ChevronDown, Search, User, Phone } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

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

  const serviceCategories = useMemo(() => [
    {
      title: 'AI & Machine Learning',
      services: [
        { name: 'AI Business Intelligence', path: '/services#ai-bi' },
        { name: 'AI Marketing Automation', path: '/services#ai-marketing' },
        { name: 'AI HR & Recruitment', path: '/services#ai-hr' },
        { name: 'AI Legal Tech', path: '/services#ai-legal' }
      ]
    },
    {
      title: 'Cybersecurity',
      services: [
        { name: 'Quantum-Safe Security', path: '/services#quantum-security' },
        { name: 'Security Assessment', path: '/services#security-assessment' },
        { name: 'Compliance & Audit', path: '/services#compliance' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      services: [
        { name: 'Cloud Migration', path: '/services#cloud-migration' },
        { name: 'Network Infrastructure', path: '/services#network' },
        { name: 'Managed IT Services', path: '/services#managed-it' }
      ]
    },
    {
      title: 'Emerging Tech',
      services: [
        { name: 'Blockchain Solutions', path: '/services#blockchain' },
        { name: 'IoT Integration', path: '/services#iot' },
        { name: 'Quantum Computing', path: '/services#quantum' }
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

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl' 
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Zion Tech Group - Home"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              {navigationItems.map((item) => (
                <div key={item.path} className="relative group">
                  {item.path === '/services' ? (
                    <div className="relative">
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
                      
                      {/* Services Dropdown */}
                      {activeDropdown === 'services' && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-cyan-500/30 rounded-xl shadow-2xl p-4 z-50">
                          <div className="grid grid-cols-2 gap-4">
                            {serviceCategories.map((category) => (
                              <div key={category.title} className="space-y-2">
                                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                                  {category.title}
                                </h3>
                                <ul className="space-y-1">
                                  {category.services.map((service) => (
                                    <li key={service.name}>
                                      <Link
                                        to={service.path}
                                        className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                                      >
                                        {service.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-cyan-500/30">
                            <Link
                              to="/comprehensive-services-overview"
                              className="block px-3 py-2 text-sm font-medium text-cyan-400 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                            >
                              View All Services Overview →
                            </Link>
                            <Link
                              to="/innovative-micro-saas-services"
                              className="block px-3 py-2 text-sm font-medium text-cyan-400 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                            >
                              Innovative Micro SAAS Services →
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

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Button */}
              <button
                className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="Search"
              >
                <Search className="w-5 h-5" aria-hidden="true" />
              </button>

              {/* Contact Button */}
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Contact us"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Contact</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-700/50">
              <nav className="space-y-4" role="navigation" aria-label="Mobile navigation">
                {navigationItems.map((item) => (
                  <div key={item.path}>
                    {item.path === '/services' ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown('mobile-services')}
                          className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${
                            isActiveRoute(item.path)
                              ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                              : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                          }`}
                          aria-expanded={activeDropdown === 'mobile-services'}
                          aria-haspopup="true"
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === 'mobile-services' ? 'rotate-180' : ''
                          }`} aria-hidden="true" />
                        </button>
                        
                        {activeDropdown === 'mobile-services' && (
                          <div className="mt-2 ml-4 space-y-2">
                            {serviceCategories.map((category) => (
                              <div key={category.title} className="space-y-2">
                                <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide px-4">
                                  {category.title}
                                </h4>
                                <ul className="space-y-1">
                                  {category.services.map((service) => (
                                    <li key={service.name}>
                                      <Link
                                        to={service.path}
                                        className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                                      >
                                        {service.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                            <div className="pt-4 border-t border-cyan-500/30 mt-4">
                              <Link
                                to="/comprehensive-services-overview"
                                className="block px-4 py-2 text-sm font-medium text-cyan-400 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                              >
                                View All Services Overview →
                              </Link>
                              <Link
                                to="/innovative-micro-saas-services"
                                className="block px-4 py-2 text-sm font-medium text-cyan-400 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                              >
                                Innovative Micro SAAS Services →
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${
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
                
                {/* Mobile Contact Button */}
                <div className="pt-4 border-t border-gray-700/50">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                    aria-label="Contact us"
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
}
