<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone;
  Mail;
  Facebook;
  Twitter;
  Linkedin;
  Instagram;
  ChevronDown;
  Menu;
  X;
  Code;
  Smartphone;
  Cloud;
  Database;
  Shield;
  Zap;
  Building;
  ShoppingCart;
  Heart;
  GraduationCap;
  Factory;
  Truck;
  CreditCard
} from 'lucide-react';

=======
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
<<<<<<< HEAD

  const servicesDropdown = null;
      icon: Zap
    }
  ];

  const solutionsDropdown = null;
      icon: GraduationCap
    }
  ];

  const industriesDropdown = null;
    { name: 'Retail', href: '/industries/retail', icon: ShoppingCart }
  ];

  const navigation = null;
    { name: 'Contact', href: '/contact' }
=======
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors">{item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
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
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

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
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  Home
                </Link>
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium"
                  >
                    <span>Services</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 ml-4 space-y-2"
                      >
                        {servicesDropdown.map((service, index) => (
                          <button
                            key={index}
                            onClick={() => handleServiceClick(service.href)}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left w-full"
                          >
                            <service.icon className="h-5 w-5 text-blue-600" />
                            <div>
                              <h3 className="font-medium text-gray-900 text-sm">
                                {service.title}
                              </h3>
                              <p className="text-gray-600 text-xs">
                                {service.description}
                              </p>
                            </div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Contact
                </Link>
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}