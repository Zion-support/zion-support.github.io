<<<<<<< HEAD
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}


"use client";
"use client";

"use client";
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
  Menu,

'use client';

origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 

"use client";
;
import React, { useState, useEffect } from './react';
import Link from './next / link';
import {
>>>>>>> origin/cursor/delete-old-data-records-6bba
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
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
=======
import { 
Phone,
  Mail, 
MapPin,
  MapPin,
  Brain,
  Network,
  Cloud,
  ArrowRight
} from 'lucide-react';
origin/main

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Facebook, 
  Twitter, 
  Linkedin, 
Instagram,
  ChevronDown, 
  Menu, 

origin/automation-improvements-final
  X,
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Zap,
  Building,
  ShoppingCart,
  Heart,
  GraduationCap,
  Factory,
  Truck,
  CreditCard
} from 'lucide-react';
  Menu
  X
  ChevronDown
  Code
  Smartphone
  Cloud
  Database
  Shield
  Zap
  Building
  ShoppingCart
  Heart
  GraduationCap
  Factory
  Truck
  CreditCard
import {;
  Menu,;
  X,;
  ChevronDown,;
  Code,;
  Smartphone,;
  Cloud,;
  Database,;
  Shield,;
  Zap,;
  Building,;
  ShoppingCart,;
  Heart,;
  GraduationCap,;
  Factory,;
  Truck,;
  CreditCard,;
} from "lucide-react";

  CreditCard,;

  CreditCard,;
} from "lucide-react";

const Header: React.FC = () => {
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap } from 'lucide-react';
import { useRouter } from 'next/router';

ursor/automate-test-improve-and-merge-code-646c;
'use client';'use client';import React, { useState } from 'react';'
import Link from 'next/link';'
import { motion, AnimatePresence  } from 'framer-motion';'
import { Menu, X, ChevronDown, Phone, Mail, MapPin  } from 'lucide-react';'


import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
<<<<<<< HEAD
                
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
=======
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};



export default Header;
>>>>>>> origin/cursor/delete-old-data-records-6bba
