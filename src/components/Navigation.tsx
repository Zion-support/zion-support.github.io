import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
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
import React, { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl cyber-text neon-text">
                Zion Tech Group
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200 neon-glow"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="cyber-button px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 p-2"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md border-t border-cyan-400/20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="cyber-button block px-3 py-2 text-base font-medium text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
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
};
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-2xl transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {/* AI Services */}
                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wide">AI Services</h4>
                        <div className="space-y-2">
                          <Link to="/ai-services" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>
                            AI Services
                          </Link>
                          <Link to="/ai-analytics" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>
                            AI Analytics
                          </Link>
                          <Link to="/ai-automation" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>
                            AI Automation
                          </Link>
                          <Link to="/ai-content-generation" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>
                            AI Content Generation
                          </Link>
                          <Link to="/ai-customer-support" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>
                            AI Customer Support
                          </Link>
                        </div>
                      </div>
                      
                      {/* IT Services */}
                      <div>
                        <h4 className="text-blue-400 font-semibold mb-3 text-sm uppercase tracking-wide">IT Services</h4>
                        <div className="space-y-2">
                          <Link to="/it-services" className="block text-white hover:text-blue-400 transition-colors text-sm py-1" onClick={closeAllMenus}>
                            IT Services
                          </Link>
                          <Link to="/cloud-migration" className="block text-white hover:text-blue-400 transition-colors text-sm py-1" onClick={closeAllMenus}>
                            Cloud Migration
                          </Link>
                          <Link to="/devops" className="block text-white hover:text-blue-400 transition-colors text-sm py-1" onClick={closeAllMenus}>
                            DevOps
                          </Link>
                          <Link to="/cybersecurity" className="block text-white hover:text-blue-400 transition-colors text-sm py-1" onClick={closeAllMenus}>
                            Cybersecurity
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-700 mt-6 pt-4">
                      <Link 
                        to="/services" 
                        className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                        onClick={closeAllMenus}
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/case-studies" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Case Studies
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
            
            {/* CTA Button */}
            <Link to="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>
                <Link to="/" className="block text-white hover:text-cyan-400 transition-colors py-2" onClick={closeAllMenus}>
                  Home
                </Link>
                <Link to="/about" className="block text-white hover:text-cyan-400 transition-colors py-2" onClick={closeAllMenus}>
                  About
                </Link>
                <Link to="/services" className="block text-white hover:text-cyan-400 transition-colors py-2" onClick={closeAllMenus}>
                  Services
                </Link>
                <Link to="/case-studies" className="block text-white hover:text-cyan-400 transition-colors py-2" onClick={closeAllMenus}>
                  Case Studies
                </Link>
                <Link to="/blog" className="block text-white hover:text-cyan-400 transition-colors py-2" onClick={closeAllMenus}>
                  Blog
                </Link>
                <Link to="/contact" className="block text-white hover:text-cyan-400 transition-colors py-2" onClick={closeAllMenus}>
                  Contact
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
                <a href="tel:+13024640950" className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>(302) 464-0950</span>
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors">
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;