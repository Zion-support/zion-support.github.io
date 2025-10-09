import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    } ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl neon-text">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-white hover:text-cyan-400 transition-colors duration-300"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700 p-6"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3">AI Services</h3>
                      <ul className="space-y-2">
                        <li><Link to="/ai-services" className="text-gray-300 hover:text-white text-sm">AI Solutions</Link></li>
                        <li><Link to="/ai-marketing" className="text-gray-300 hover:text-white text-sm">AI Marketing</Link></li>
                        <li><Link to="/ai-automation" className="text-gray-300 hover:text-white text-sm">AI Automation</Link></li>
                        <li><Link to="/ai-healthcare" className="text-gray-300 hover:text-white text-sm">AI Healthcare</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3">IT Solutions</h3>
                      <ul className="space-y-2">
                        <li><Link to="/it-infrastructure" className="text-gray-300 hover:text-white text-sm">IT Infrastructure</Link></li>
                        <li><Link to="/cloud-services" className="text-gray-300 hover:text-white text-sm">Cloud Services</Link></li>
                        <li><Link to="/cybersecurity" className="text-gray-300 hover:text-white text-sm">Cybersecurity</Link></li>
                        <li><Link to="/digital-transformation" className="text-gray-300 hover:text-white text-sm">Digital Transformation</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors duration-300">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Contact
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors duration-300"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-white hover:text-cyan-400 transition-colors duration-300"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-white hover:text-cyan-400 transition-colors duration-300"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                to="/blog"
                className="block text-white hover:text-cyan-400 transition-colors duration-300"
                onClick={closeMenu}
              >
                Blog
              </Link>
              
              {/* Mobile Services */}
              <div className="pt-4 border-t border-slate-700">
                <h3 className="text-cyan-400 font-semibold mb-3">Services</h3>
                <div className="space-y-2">
                  <Link to="/ai-services" className="block text-gray-300 hover:text-white text-sm" onClick={closeMenu}>
                    AI Solutions
                  </Link>
                  <Link to="/ai-marketing" className="block text-gray-300 hover:text-white text-sm" onClick={closeMenu}>
                    AI Marketing
                  </Link>
                  <Link to="/ai-automation" className="block text-gray-300 hover:text-white text-sm" onClick={closeMenu}>
                    AI Automation
                  </Link>
                  <Link to="/it-infrastructure" className="block text-gray-300 hover:text-white text-sm" onClick={closeMenu}>
                    IT Infrastructure
                  </Link>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-white hover:text-cyan-400 mb-3"
                >
                  <Phone className="h-4 w-4" />
                  <span>(302) 464-0950</span>
                </a>
                <Link
                  to="/contact"
                  className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}