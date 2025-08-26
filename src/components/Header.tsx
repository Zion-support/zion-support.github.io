import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
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
    setIsServicesOpen(false);
    setIsCompanyOpen(false);
    setIsResourcesOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { path: '/', label: 'Home' },
    { 
      path: '/services', 
      label: 'Services',
      children: [
        { path: '/services/ai-solutions', label: 'AI Solutions' },
        { path: '/services/quantum-computing', label: 'Quantum Computing' },
        { path: '/services/cybersecurity', label: 'Cybersecurity' },
        { path: '/services/cloud-devops', label: 'Cloud & DevOps' },
        { path: '/services/blockchain-web3', label: 'Blockchain & Web3' },
        { path: '/services/enterprise-it', label: 'Enterprise IT' },
        { path: '/services/green-it', label: 'Green IT' },
        { path: '/services/space-tech', label: 'Space Technology' },
        { path: '/services/micro-saas', label: 'Micro SaaS' }
      ]
    },
    { 
      path: '/solutions', 
      label: 'Solutions',
      children: [
        { path: '/solutions/ai-autonomous-business', label: 'AI Autonomous Business' },
        { path: '/solutions/ai-autonomous-research', label: 'AI Autonomous Research' },
        { path: '/solutions/ai-autonomous-ecosystem', label: 'AI Autonomous Ecosystem' },
        { path: '/solutions/quantum-neural-network', label: 'Quantum Neural Network' },
        { path: '/solutions/quantum-edge-computing', label: 'Quantum Edge Computing' },
        { path: '/solutions/ai-powered-security', label: 'AI-Powered Security' },
        { path: '/solutions/ai-content-generation', label: 'AI Content Generation' },
        { path: '/solutions/ai-business-intelligence', label: 'AI Business Intelligence' }
      ]
    },
    { 
      path: '/company', 
      label: 'Company',
      children: [
        { path: '/about', label: 'About Us' },
        { path: '/team', label: 'Our Team' },
        { path: '/careers', label: 'Careers' },
        { path: '/partners', label: 'Partners' },
        { path: '/news', label: 'News & Updates' },
        { path: '/case-studies', label: 'Case Studies' }
      ]
    },
    { 
      path: '/resources', 
      label: 'Resources',
      children: [
        { path: '/blog', label: 'Blog' },
        { path: '/white-papers', label: 'White Papers' },
        { path: '/webinars', label: 'Webinars' },
        { path: '/events', label: 'Events' },
        { path: '/research-development', label: 'Research & Development' },
        { path: '/tutorials', label: 'Tutorials' },
        { path: '/documentation', label: 'Documentation' }
      ]
    },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10 shadow-lg' 
        : 'bg-slate-900/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={closeMenu}>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative group">
                {item.children ? (
                  <div className="relative">
                    <button
                      className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                        isActive(item.path)
                          ? 'text-white bg-blue-600/20'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                      onMouseEnter={() => {
                        if (item.label === 'Services') setIsServicesOpen(true);
                        if (item.label === 'Company') setIsCompanyOpen(true);
                        if (item.label === 'Resources') setIsResourcesOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (item.label === 'Services') setIsServicesOpen(false);
                        if (item.label === 'Company') setIsCompanyOpen(false);
                        if (item.label === 'Resources') setIsResourcesOpen(false);
                      }}
                    >
                      {item.label}
                      <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-1 w-64 bg-slate-800 border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2`}>
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                            onClick={closeMenu}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-white bg-blue-600/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div key={item.path}>
                {item.children ? (
                  <div>
                    <div className="px-3 py-2 text-sm font-medium text-gray-300">
                      {item.label}
                    </div>
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
                          onClick={closeMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-white/10">
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg"
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
