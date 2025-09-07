'use client';
<<<<<<< HEAD
=======
"use client";
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Network,
  Cloud,
  ArrowRight
} from 'lucide-react';

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  ChevronDown,
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
  CreditCard,
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
} from "lucide-react";

export default function Header() {;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesDropdown = [
    {
      title: "Web Development"
      description: "Custom websites and web applications"
      href: "/services/web-development"
      icon: Code
    }
    {
      title: "Mobile Development"
      description: "iOS and Android applications"
      href: "/services/mobile-development"
      icon: Smartphone
    }
    {
      title: "Cloud Solutions"
      description: "Scalable cloud infrastructure"
      href: "/services/cloud-solutions"
      icon: Cloud
    }
    {
      title: "Database Management"
      description: "Database design and optimization"
      href: "/services/database-management"
      icon: Database
    }
    {
      title: "Security Services"
      description: "Cybersecurity and data protection"
      href: "/services/security"
      icon: Shield
    }
    {
      title: "Performance Optimization"
      description: "Speed and efficiency improvements"
      href: "/services/performance"
      icon: Zap
    }
  ];
  const solutionsDropdown = [
    {
      title: "Enterprise Solutions"
      description: "Comprehensive business technology solutions"
      href: "/solutions/enterprise"
      icon: Building
    }
    {
      title: "E-commerce Platforms"
      description: "Online store development and management"
      href: "/solutions/ecommerce"
      icon: ShoppingCart
    }
    {
      title: "Healthcare Technology"
      description: "Specialized healthcare IT solutions"
      href: "/solutions/healthcare"
      icon: Heart
    }
    {
      title: "Educational Platforms"
      description: "Learning management systems"
      href: "/solutions/education"
      icon: GraduationCap
    }
  ];
  const industriesDropdown = [
    { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory }
    { name: "Logistics", href: "/industries/logistics", icon: Truck }
    { name: "Finance", href: "/industries/finance", icon: CreditCard }
    { name: "Healthcare", href: "/industries/healthcare", icon: Heart }
    { name: "Education", href: "/industries/education", icon: GraduationCap }
    { name: "Retail", href: "/industries/retail", icon: ShoppingCart }
  ];
  const navigation = [
    { name: "Home", href: "/" }
    {
      name: "Services"
      href: "/services"
      submenu: [
        { name: "AI Services", href: "/ai-services", icon: Brain }
        { name: "IT Services", href: "/it-services", icon: Network }
        { name: "Micro SAAS", href: "/micro-saas", icon: Cloud }
      ]
    }
    { name: "About", href: "/about" }
    { name: "Services", href: "/services" }
    { name: "Solutions", href: "/solutions" }
    { name: "Industries", href: "/industries" }
    { name: "Contact", href: "/contact" }

  ];
  const handleServiceClick = (href: string) => {
    closeMenu();
    window.location.href = href;
  }
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </Link>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
            </div>
          </div>
          {/* Desktop Navigation */}
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
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
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
<<<<<<< HEAD
                    {item.name}
                    {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>
                  
                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {dropdownItem.name}
=======
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
  X,
  Code,
  Cloud,
  Shield,
  Brain,
  Database,
  Globe,
  Building,
  Heart,
  Zap,
  Users,
  BarChart3,
  Briefcase,
  Factory,
  ShoppingCart,
  GraduationCap,
  Stethoscope,
  Landmark
} from 'lucide-react';
=======

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

const servicesDropdown = [
  {
    title: 'AI & Machine Learning',
    description: 'Custom AI solutions and ML models',
    href: '/services/ai-ml',
    icon: Brain
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure',
    href: '/services/cloud',
    icon: Cloud
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions',
    href: '/services/cybersecurity',
    icon: Shield
  },
  {
    title: 'Data Analytics',
    description: 'Business intelligence and insights',
    href: '/services/analytics',
    icon: BarChart3
  },
  {
    title: 'Web Development',
    description: 'Modern web applications',
    href: '/services/web-development',
    icon: Code
  },
  {
    title: 'Database Solutions',
    description: 'Database design and optimization',
    href: '/services/database',
    icon: Database
  }
];

const solutionsDropdown = [
  {
    title: 'Digital Transformation',
    description: 'Complete business modernization',
    href: '/solutions/digital-transformation',
    icon: Zap
  },
  {
    title: 'Enterprise Solutions',
    description: 'Large-scale business systems',
    href: '/solutions/enterprise',
    icon: Building
  },
  {
    title: 'Startup Acceleration',
    description: 'Rapid growth and scaling',
    href: '/solutions/startup',
    icon: Rocket
  }
];

const industriesDropdown = [
  { name: 'Healthcare', href: '/industries/healthcare', icon: Stethoscope },
  { name: 'Finance', href: '/industries/finance', icon: Landmark },
  { name: 'Education', href: '/industries/education', icon: GraduationCap },
  { name: 'Manufacturing', href: '/industries/manufacturing', icon: Factory },
  { name: 'Retail', href: '/industries/retail', icon: ShoppingCart },
  { name: 'Government', href: '/industries/government', icon: Building }
];

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
<<<<<<< HEAD
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
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
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {servicesDropdown.map((service) => (
                          <Link key={service.title} href={service.href} className="group">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <service.icon className="w-6 h-6 text-blue-600 mt-1" />
                              <div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.description}</p>
                              </div>
                            </div>
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
                          </Link>
                        ))}
                      </div>
                    </div>
<<<<<<< HEAD
                  )}
                </div>
              ))}
            </div>
          </nav>
=======
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
=======
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
              className="lg:hidden mt-4 border-t border-gray-200 pt-4"
            >
              {navigation.map((item) => (
                <div key={item.name} className="mb-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="p-1"
                      >
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    )}
                  </div>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                Industries <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <AnimatePresence>
                {isIndustriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-50"
                    onMouseEnter={() => setIsIndustriesOpen(true)}
                    onMouseLeave={() => setIsIndustriesOpen(false)}
                  >
                    <div className="p-4">
                      {industriesDropdown.map((industry) => (
                        <Link key={industry.name} href={industry.href} className="group flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                          <industry.icon className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-700 group-hover:text-blue-600">{industry.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Regular Navigation Items */}
            {navigation.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-gray-700 hover:text-blue-600 font-medium"
=======
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  >
                    {item.name}
                  </Link>
                ))}
<<<<<<< HEAD
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
<<<<<<< HEAD
};

export default Header;
=======
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                Solutions <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <div className="p-6">
                      {solutionsDropdown.map((solution) => (
                        <Link key={solution.title} href={solution.href} className="group block mb-4 last:mb-0">
                          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <solution.icon className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{solution.title}</h3>
                              <p className="text-sm text-gray-600">{solution.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                Industries <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <AnimatePresence>
                {isIndustriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-50"
                    onMouseEnter={() => setIsIndustriesOpen(true)}
                    onMouseLeave={() => setIsIndustriesOpen(false)}
                  >
                    <div className="p-4">
                      {industriesDropdown.map((industry) => (
                        <Link key={industry.name} href={industry.href} className="group flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                          <industry.icon className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-700 group-hover:text-blue-600">{industry.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Navigation Links */}
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                    {item.name}
                  </Link>
                ))}
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
<<<<<<< HEAD
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
=======
}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
