import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  Services
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute left-0 mt-2 w-80 glass-effect rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    <div className="px-4 py-2 text-cyan-400 text-sm font-semibold">AI & Machine Learning</div>
                    <Link to="/ai-services" className="block px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10">
                      AI Services
                    </Link>
                    <Link to="/ai-solutions" className="block px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10">
                      AI Solutions
                    </Link>
                    <Link to="/ai-content-generator" className="block px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10">
                      AI Content Generator
                    </Link>
                    <Link to="/data-analytics" className="block px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10">
                      Data Analytics
                    </Link>
                    
                    <div className="px-4 py-2 text-cyan-400 text-sm font-semibold mt-2">IT Services</div>
                    <Link to="/it-services" className="block px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10">
                      IT Services
                    </Link>
                    <Link to="/web-development" className="block px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10">
                      Web Development
                    </Link>
                    <Link to="/mobile-development" className="block px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10">
                      Mobile Development
                    </Link>
                    <Link to="/database-management" className="block px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10">
                      Database Management
                    </Link>
                    <Link to="/network-infrastructure" className="block px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10">
                      Network Infrastructure
                    </Link>
                    
                    <div className="px-4 py-2 text-cyan-400 text-sm font-semibold mt-2">Infrastructure</div>
                    <Link to="/cloud-infrastructure" className="block px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10">
                      Cloud Infrastructure
                    </Link>
                    <Link to="/5g-solutions" className="block px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10">
                      5G Solutions
                    </Link>
                    
                    <div className="px-4 py-2 text-cyan-400 text-sm font-semibold mt-2">Business Solutions</div>
                    <Link to="/digital-transformation" className="block px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10">
                      Digital Transformation
                    </Link>
                    <Link to="/micro-saas-solutions" className="block px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10">
                      Micro SaaS Solutions
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Pricing
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Blog
              </Link>
              <Link to="/team" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Team
              </Link>
              <Link to="/careers" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Careers
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-effect mx-4 mt-2 rounded-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenu}>
              About
            </Link>
            
            {/* Mobile Services Menu */}
            <div className="px-3 py-2">
              <div className="text-gray-300 text-base font-medium mb-2">Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/services" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors" onClick={closeMenu}>All Services</Link>
                <Link to="/ai-services" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors" onClick={closeMenu}>AI Services</Link>
                <Link to="/it-services" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors" onClick={closeMenu}>IT Services</Link>
                <Link to="/micro-saas-solutions" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors" onClick={closeMenu}>Micro SAAS Solutions</Link>
                <Link to="/cloud-infrastructure" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors" onClick={closeMenu}>Cloud Infrastructure</Link>
                <Link to="/5g-solutions" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors" onClick={closeMenu}>5G Solutions</Link>
                <Link to="/digital-transformation" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors" onClick={closeMenu}>Digital Transformation</Link>
              </div>
            </div>
            
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenu}>
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenu}>
              Blog
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenu}>
              Team
            </Link>
            <Link to="/careers" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenu}>
              Careers
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;