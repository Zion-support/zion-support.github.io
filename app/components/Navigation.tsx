'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Brain, Cloud, Shield, Code, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setServicesOpen(!servicesOpen);
  }, [servicesOpen]);

  const isActive = (path: string) => location.pathname === path;

  const services = [
    {
      title: 'AI Solutions',
      href: '/ai-services',
      icon: Brain,
      description: 'Artificial Intelligence & Machine Learning'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Code,
      description: 'Custom Software Development'
    },
    {
      title: 'Cloud Computing',
      href: '/cloud-services',
      icon: Cloud,
      description: 'Scalable Cloud Infrastructure'
    },
    {
      title: 'Cybersecurity',
      href: '/cybersecurity',
      icon: Shield,
      description: 'Advanced Security Solutions'
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors duration-300 ${
                isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors duration-300 ${
                isActive('/about') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-cyan-500/20 rounded-xl shadow-xl p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 group"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <service.icon className="w-4 h-4 text-cyan-400" />
                          </div>
                          <div>
                            <div className="text-white font-semibold text-sm">{service.title}</div>
                            <div className="text-gray-400 text-xs">{service.description}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className={`transition-colors duration-300 ${
                isActive('/contact') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Contact
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20 mobile-menu">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className={`block transition-colors duration-300 ${
                  isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`block transition-colors duration-300 ${
                  isActive('/about') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold">Services</div>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="block pl-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
              
              <Link 
                to="/contact" 
                className={`block transition-colors duration-300 ${
                  isActive('/contact') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;