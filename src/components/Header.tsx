import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Brain, Users, BarChart3, Code, Palette, Target, Shield, Heart, Database, Building, Cpu, Network, Cloud, Clock, Rocket, Globe, Lock, ArrowRight, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'AI Solutions', href: '/services/ai', description: 'Advanced AI and machine learning services' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Comprehensive security solutions' },
        { name: 'Cloud & DevOps', href: '/services/cloud', description: 'Scalable cloud infrastructure' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Transform data into insights' },
        { name: 'Quantum Technology', href: '/quantum-technology', description: 'Next-generation computing' },
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Large-scale business solutions' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { name: 'Healthcare', href: '/solutions/healthcare', description: 'AI-powered healthcare solutions' },
        { name: 'Finance', href: '/solutions/financial', description: 'Financial technology innovations' },
        { name: 'Manufacturing', href: '/solutions/manufacturing', description: 'Smart manufacturing systems' },
        { name: 'Retail', href: '/solutions/retail', description: 'Digital retail transformation' }
      ]
    },
    { 
      name: 'Company', 
      href: '/about',
      dropdown: [
        { name: 'About Us', href: '/about', description: 'Learn about our mission and values' },
        { name: 'Our Team', href: '/team', description: 'Meet our expert team' },
        { name: 'Careers', href: '/careers', description: 'Join our growing team' },
        { name: 'News', href: '/news', description: 'Latest company updates' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories and results' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching for:', searchQuery);
    }
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zion-slate-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                ZION
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={closeDropdowns}
                    >
                      <button className="flex items-center space-x-1 text-white hover:text-zion-cyan transition-colors py-2">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-blue-light/30 rounded-lg shadow-xl backdrop-blur-md">
                          <div className="p-4 space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="block p-3 rounded-lg hover:bg-zion-slate-light/20 transition-colors group"
                              >
                                <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                  {dropdownItem.name}
                                </div>
                                <div className="text-sm text-zion-slate-light mt-1">
                                  {dropdownItem.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-white hover:text-zion-cyan transition-colors py-2 ${
                        location.pathname === item.href ? 'text-zion-cyan' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 bg-zion-slate-light/20 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              </form>
              
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-zion-slate-dark border-t border-zion-blue-light/30">
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full text-left text-white hover:text-zion-cyan transition-colors py-2"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-1"
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
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-white hover:text-zion-cyan transition-colors py-2"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mt-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 bg-zion-slate-light/20 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                </div>
              </form>

              {/* Mobile CTA */}
              <div className="mt-6">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
