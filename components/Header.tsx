<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

'use client';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
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
=======
>>>>>>> origin/main

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
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

export default function Header() {
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </Link>
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
          </div>
          {/* Desktop Navigation */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
          <nav className="hidden md:flex space-x-8">
=======
          <nav className="hidden lg:flex space-x-8">
>>>>>>> origin/main
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
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
                          </Link>
                        ))}
                      </div>
                    </div>
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d

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
=======
          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
>>>>>>> origin/main
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      </nav>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
=======
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
>>>>>>> origin/main
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-gray-700 hover:text-blue-600 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}