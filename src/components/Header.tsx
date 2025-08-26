import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path: string) => location.pathname === path;

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    {
      name: 'Home',
      path: '/',
      hasDropdown: false
    },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Solutions', path: '/services/ai-solutions' },
        { name: 'Cybersecurity', path: '/services/cybersecurity' },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure' },
        { name: 'Digital Transformation', path: '/services/digital-transformation' },
        { name: 'Green IT', path: '/green-it' },
        { name: 'Quantum Technology', path: '/quantum-technology' },
        { name: 'Space Tech', path: '/space-tech' },
        { name: 'Mobile Solutions', path: '/mobile' },
        { name: 'Financial Solutions', path: '/financial-solutions' },
        { name: 'Micro SaaS Services', path: '/micro-saas-services' }
      ]
    },
    {
      name: 'Company',
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/team' },
        { name: 'Careers', path: '/careers' },
        { name: 'Partners', path: '/partners' },
        { name: 'Research & Development', path: '/research-development' }
      ]
    },
    {
      name: 'Resources',
      path: '/resources',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Blog & Insights', path: '/blog' },
        { name: 'Tutorials', path: '/tutorials' },
        { name: 'Webinars', path: '/webinars' },
        { name: 'White Papers', path: '/white-papers' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Documentation', path: '/documentation' },
        { name: 'API Reference', path: '/api' },
        { name: 'Developer Portal', path: '/developer' }
      ]
    },
    {
      name: 'Support',
      path: '/support',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Help Center', path: '/help-center' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact Support', path: '/contact' },
        { name: 'Request Quote', path: '/request-quote' },
        { name: 'Service Comparison', path: '/service-comparison' }
      ]
    },
    {
      name: 'Enterprise',
      path: '/enterprise',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Enterprise Solutions', path: '/enterprise' },
        { name: 'Custom Solutions', path: '/solutions' },
        { name: 'Community', path: '/community' },
        { name: 'Marketplace', path: '/marketplace' }
      ]
    },
    {
      name: 'Talent',
      path: '/talent',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Browse Talents', path: '/talents' },
        { name: 'Talent Directory', path: '/talent-directory' },
        { name: 'Hire Now', path: '/talent' }
      ]
    }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10 shadow-lg' 
        : 'bg-slate-900/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={closeMenu}>
            <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
                        isActive(item.path) || activeDropdown === item.name
                          ? 'text-blue-400 font-semibold' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.name}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 border border-white/10 rounded-lg shadow-xl backdrop-blur-lg">
                        <div className="py-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                      isActive(item.path)
                        ? 'text-blue-400 font-semibold' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 rounded-lg mt-2 border border-white/10">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                        isActive(item.path) || activeDropdown === item.name
                          ? 'text-blue-400 bg-blue-600/20 font-semibold'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        {item.name}
                        <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
                            onClick={closeMenu}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                      isActive(item.path)
                        ? 'text-blue-400 bg-blue-600/20 font-semibold'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-700 space-y-2">
              <Link
                to="/pricing"
                className="block w-full text-center px-6 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                onClick={closeMenu}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
