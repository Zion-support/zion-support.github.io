'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ChevronDown, 
  Menu, 
  X 
} from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'AI Services', href: '/services', description: 'Machine Learning, Computer Vision, NLP' },
    { name: 'IT Solutions', href: '/services', description: 'Cloud, DevOps, Security' },
    { name: 'Micro SaaS', href: '/services', description: 'Custom Software Solutions' },
    { name: 'Consulting', href: '/services', description: 'Technology Strategy & Planning' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Contact
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Blog
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-4">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  >
                    <span>Services</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isServicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block text-gray-600 hover:text-gray-900 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  className="block text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="block text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                
                <Link
                  href="/contact"
                  className="block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
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
}