'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const servicesDropdown = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions for business automation',
    href: '/ai-services',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security and threat protection',
    href: '/it-services',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions and migration',
    href: '/it-services',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored applications to meet your specific business needs',
    href: '/services',
  },
  {
    icon: Network,
    title: 'System Integration',
    description: 'Seamless integration of existing systems',
    href: '/services',
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleServiceClick = (href: string) => {
    router.push(href);
    closeMenu();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-300">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200">24/7 Support Available</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-blue-300"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Instagram className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Zion Tech Group</div>
              <div className="text-xs text-gray-500">Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {servicesDropdown.map((service, index) => (
                        <button
                          key={index}
                          onClick={() => handleServiceClick(service.href)}
                          className="flex items-start p-4 hover:bg-gray-50 transition-colors text-left"
                        >
                          <service.icon className="h-5 w-5 mr-3 text-blue-600 mt-0.5" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {service.description}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/solutions" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Solutions
            </Link>
            <Link href="/research" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Research
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/solutions"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Solutions
                </Link>
                <Link
                  href="/research"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Research
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 mx-4"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;