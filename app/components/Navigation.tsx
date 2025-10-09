import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold neon-text">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wide">AI Solutions</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/ai-services" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                            <Brain className="w-4 h-4" />
                            <span>AI Services</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-marketing" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                            <BarChart className="w-4 h-4" />
                            <span>AI Marketing</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-automation" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                            <Zap className="w-4 h-4" />
                            <span>AI Automation</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-content-generation" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                            <Code className="w-4 h-4" />
                            <span>Content Generation</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wide">Enterprise</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/quantum-computing" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                            <Cloud className="w-4 h-4" />
                            <span>Quantum Computing</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/autonomous-systems" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                            <Shield className="w-4 h-4" />
                            <span>Autonomous Systems</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/it-infrastructure" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                            <Users className="w-4 h-4" />
                            <span>IT Infrastructure</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/micro-saas" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                            <Code className="w-4 h-4" />
                            <span>Micro SAAS</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Contact
            </Link>

            {/* CTA Button */}
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300 p-2"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-cyan-500/20">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                  aria-expanded={servicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="pl-6 space-y-1 mt-2">
                    <Link
                      to="/ai-services"
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      onClick={closeMobileMenu}
                    >
                      AI Services
                    </Link>
                    <Link
                      to="/ai-marketing"
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      onClick={closeMobileMenu}
                    >
                      AI Marketing
                    </Link>
                    <Link
                      to="/ai-automation"
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      onClick={closeMobileMenu}
                    >
                      AI Automation
                    </Link>
                    <Link
                      to="/quantum-computing"
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      onClick={closeMobileMenu}
                    >
                      Quantum Computing
                    </Link>
                    <Link
                      to="/micro-saas"
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      onClick={closeMobileMenu}
                    >
                      Micro SAAS
                    </Link>
                  </div>
                )}
              </div>
              
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <a
                href="tel:+13024640950"
                className="block mx-3 mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                onClick={closeMobileMenu}
              >
                📞 Call (302) 464-0950
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;