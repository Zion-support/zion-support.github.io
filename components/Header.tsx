
"use client";

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 

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

  CreditCard,;

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
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
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
        {/* Mobile Menu */}

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services', 
      dropdown: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'Cloud Solutions', href: '/solutions/cloud-migration' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Data Analytics', href: '/services/data-analytics' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      dropdown: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Finance', href: '/solutions/finance' },
        { name: 'Government', href: '/solutions/government' },
        { name: 'Retail', href: '/solutions/retail' },
        { name: 'Education', href: '/solutions/education' }
      ]
    },
    { 
      name: 'Industries', 
      href: '/industries', 
      dropdown: [
        { name: 'Financial Services', href: '/industries/financial' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Manufacturing', href: '/industries/manufacturing' },
        { name: 'Retail', href: '/industries/retail' },
        { name: 'Government', href: '/industries/government' }
      ]
    },
    { 
      name: 'Company', 
      href: '/about', 
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    },
    { 
      name: 'Resources', 
      href: '/resources', 
      dropdown: [
        { name: 'Blog', href: '/blog' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'API Documentation', href: '/api-docs' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">

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

          {/* Desktop Navigation */}

          </div>
          {/* Desktop Navigation */}

          <nav className="hidden md:flex space-x-8">

          <nav className="hidden lg:flex space-x-8">

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

                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}

              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
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

              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}

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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>

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

                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  onClick={() => setIsMenuOpen(false)}

                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

