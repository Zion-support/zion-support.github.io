'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  }, [isOpen]);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'AI Marketing', href: '/ai-marketing' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Healthcare', href: '/ai-healthcare' },
    { name: 'AI Fintech', href: '/ai-fintech' },
    { name: 'Quantum Computing', href: '/quantum-computing' }
  ];

  const microSaas = [
    { name: 'AI CRM', href: '/ai-crm' },
    { name: 'AI Analytics', href: '/ai-analytics' },
    { name: 'AI Content Studio', href: '/ai-content-studio' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing' },
    { name: 'AI Mobile App Builder', href: '/ai-mobile-builder' }
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration' },
    { name: 'Cybersecurity Suite', href: '/cybersecurity-suite' },
    { name: 'DevOps & CI/CD', href: '/devops-cicd' },
    { name: 'Database Management', href: '/database-management' },
    { name: 'Network Solutions', href: '/network-solutions' },
    { name: 'Mobile App Development', href: '/mobile-app-development' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white font-bold text-xl hover:text-cyan-400 transition-colors"
            aria-label="Zion Tech Group - Home"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span>Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium"
                aria-expanded={activeDropdown === 'services'}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                  <div className="px-4 py-2 text-sm font-semibold text-cyan-400 border-b border-slate-700">
                    AI Solutions
                  </div>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('micro-saas')}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium"
                aria-expanded={activeDropdown === 'micro-saas'}
                aria-haspopup="true"
              >
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'micro-saas' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'micro-saas' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                  <div className="px-4 py-2 text-sm font-semibold text-purple-400 border-b border-slate-700">
                    Micro SAAS Solutions
                  </div>
                  {microSaas.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('it-services')}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium"
                aria-expanded={activeDropdown === 'it-services'}
                aria-haspopup="true"
              >
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'it-services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'it-services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                  <div className="px-4 py-2 text-sm font-semibold text-green-400 border-b border-slate-700">
                    IT Infrastructure
                  </div>
                  {itServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              aria-label="Call us at (302) 464-0950"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(302) 464-0950</span>
            </a>
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors font-medium"
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors font-medium"
              >
                About
              </Link>

              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-semibold text-sm mb-2">AI Services</div>
                <div className="space-y-1 ml-4">
                  {services.slice(0, 3).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-3 py-1 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="text-purple-400 font-semibold text-sm mb-2">Micro SAAS</div>
                <div className="space-y-1 ml-4">
                  {microSaas.slice(0, 3).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-3 py-1 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors font-medium"
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 px-3 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(302) 464-0950</span>
                </a>
                
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">kleber@ziontechgroup.com</span>
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