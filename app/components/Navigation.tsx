'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, Brain, Code, BarChart, Shield, Cloud, Users, Phone, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navigationItems = [
    { name: 'Home', href: '/', icon: <Zap className="w-4 h-4" /> },
    { name: 'Services', href: '/services', icon: <Code className="w-4 h-4" /> },
    { name: 'Micro SAAS', href: '/micro-saas', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Services', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
    { name: 'IT Services', href: '/it-services', icon: <Code className="w-4 h-4" /> },
    { name: 'About', href: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Blog', href: '/blog', icon: <BarChart className="w-4 h-4" /> },
    { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg cyber-glow' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-200">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-gray-800/50"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 302 464 0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Contact</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 text-white hover:text-cyan-400 transition-colors rounded-lg hover:bg-gray-800/50"
                  onClick={closeMenu}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="border-t border-gray-700 pt-2 mt-2">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 px-3 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  onClick={closeMenu}
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 px-3 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  onClick={closeMenu}
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
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

