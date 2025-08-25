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
      label: 'Services', 
      icon: '🤖',
      description: 'Explore our comprehensive service offerings'
    },
    { 
      path: '/solutions/enterprise', 
      label: 'Solutions', 
      icon: '💼',
      description: 'Industry-specific solutions and use cases'
    },
    { 
      path: '/pricing', 
      label: 'Pricing', 
      icon: '💰',
      description: 'Transparent pricing plans and packages'
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: 'ℹ️',
      description: 'Learn about our company and mission'
    },
    { 
      path: '/careers', 
      label: 'Careers', 
      icon: '🚀',
      description: 'Join our innovative team'
    },
    { 
      path: '/blog', 
      label: 'Blog', 
      icon: '📝',
      description: 'Latest insights and industry news'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with our team'
    }
  ], []);

  const serviceCategories = useMemo(() => [
    {
      title: 'AI & Machine Learning',
      services: [
        { name: 'AI Business Intelligence', path: '/services#ai-bi' },
        { name: 'AI Marketing Automation', path: '/services#ai-marketing' },
        { name: 'AI HR & Recruitment', path: '/services#ai-hr' },
        { name: 'AI Legal Tech', path: '/services#ai-legal' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant' },
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems' }
      ]
    },
    {
      title: 'Quantum Technology',
      services: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform' },
        { name: 'Quantum-Safe Security', path: '/services#quantum-security' },
        { name: 'Quantum Computing Solutions', path: '/services/quantum-technology' },
        { name: 'Quantum Financial Trading', path: '/quantum-financial-trading' }
      ]
    },
    {
      title: 'Cybersecurity',
      services: [
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation' },
        { name: 'Security Assessment', path: '/services#security-assessment' },
        { name: 'Compliance & Audit', path: '/services#compliance' },
        { name: 'AI-Powered Security', path: '/services#ai-security' }
      ]
    },
    {
      title: 'Infrastructure & Cloud',
      services: [
        { name: 'Cloud Migration', path: '/services#cloud-migration' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions' },
        { name: 'Network Infrastructure', path: '/services#network' },
        { name: 'Managed IT Services', path: '/services#managed-it' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management' }
      ]
    },
    {
      title: 'Emerging Tech',
      services: [
        { name: 'Blockchain Solutions', path: '/services#blockchain' },
        { name: 'IoT Integration', path: '/services#iot' },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform' },
        { name: 'Space Technology', path: '/space-tech' }
      ]
    }
  ], []);

  const companyLinks = useMemo(() => [
    { name: 'About Us', path: '/about', description: 'Our story and mission' },
    { name: 'Our Team', path: '/team', description: 'Meet our leadership' },
    { name: 'Careers', path: '/careers', description: 'Join our team' },
    { name: 'Partners', path: '/partners', description: 'Strategic partnerships' },
    { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
    { name: 'News', path: '/news', description: 'Company updates' }
  ], []);

  const resourceLinks = useMemo(() => [
    { name: 'Blog', path: '/blog', description: 'Industry insights' },
    { name: 'Webinars', path: '/webinars', description: 'Educational content' },
    { name: 'White Papers', path: '/white-papers', description: 'Research reports' },
    { name: 'Help Center', path: '/help', description: 'Support & documentation' },
    { name: 'FAQ', path: '/faq', description: 'Common questions' },
    { name: 'Contact Support', path: '/contact', description: 'Get help' }
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
                        <div className="absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl p-6 z-50">
                          <div className="grid grid-cols-1 gap-4">
                            {serviceCategories.map((category, index) => (
                              <div key={index}>
                                <h3 className="text-sm font-semibold text-cyan-400 mb-2">{category.title}</h3>
                                <div className="space-y-1">
                                  {category.services.map((service, serviceIndex) => (
                                    <Link
                                      key={serviceIndex}
                                      to={service.path}
                                      className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-700">
                            <Link
                              to="/services"
                              className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                              onClick={() => setActiveDropdown(null)}
                            >
                              View All Services
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : item.path === '/solutions/enterprise' ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown('solutions')}
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${
                          isActiveRoute(item.path)
                            ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                            : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                        }`}
                        aria-expanded={activeDropdown === 'solutions'}
                        aria-haspopup="true"
                        aria-label={`${item.label} menu`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === 'solutions' ? 'rotate-180' : ''
                        }`} aria-hidden="true" />
                      </button>
                      
                      {/* Solutions Dropdown */}
                      {activeDropdown === 'solutions' && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl p-6 z-50">
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-sm font-semibold text-cyan-400 mb-2">Industry Solutions</h3>
                              <div className="space-y-1">
                                <Link
                                  to="/solutions/enterprise"
                                  className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  Enterprise Solutions
                                </Link>
                                <Link
                                  to="/solutions/healthcare"
                                  className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  Healthcare Solutions
                                </Link>
                                <Link
                                  to="/industry-solutions"
                                  className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  Industry Solutions
                                </Link>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-semibold text-cyan-400 mb-2">Technology Solutions</h3>
                              <div className="space-y-1">
                                <Link
                                  to="/quantum-neural-network-platform"
                                  className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  Quantum Neural Networks
                                </Link>
                                <Link
                                  to="/autonomous-business-operations-platform"
                                  className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  Autonomous Business Platform
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : item.path === '/about' ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown('company')}
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${
                          isActiveRoute(item.path)
                            ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                            : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                        }`}
                        aria-expanded={activeDropdown === 'company'}
                        aria-haspopup="true"
                        aria-label={`${item.label} menu`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === 'company' ? 'rotate-180' : ''
                        }`} aria-hidden="true" />
                      </button>
                      
                      {/* Company Dropdown */}
                      {activeDropdown === 'company' && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl p-6 z-50">
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-sm font-semibold text-cyan-400 mb-2">Company</h3>
                              <div className="space-y-1">
                                {companyLinks.map((link, index) => (
                                  <Link
                                    key={index}
                                    to={link.path}
                                    className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {link.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-semibold text-cyan-400 mb-2">Resources</h3>
                              <div className="space-y-1">
                                {resourceLinks.map((link, index) => (
                                  <Link
                                    key={index}
                                    to={link.path}
                                    className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {link.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
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
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button
                className="p-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Contact Button */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Sidebar Toggle */}
              <button
                onClick={toggleSidebar}
                className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="Toggle sidebar"
              >
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-4" role="navigation" aria-label="Mobile navigation">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </nav>
              
              <div className="mt-6 pt-6 border-t border-cyan-500/20">
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
