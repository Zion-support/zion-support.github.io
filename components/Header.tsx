use client";

use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
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
 from "lucide-react";

export default function Header() {;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  useEffect() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services_dropdown = [;
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
            {navigation.map(item) => (
          <nav className="hidden md:flex space-x-8">
            {navigation.map(item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.submenu.map(subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                        >
                          <subItem.icon className="h-4 w-4 mr-2" />
                          {subItem.name}
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </nav>

  useEffect() => {;
    const handleScroll = () => {;
      setIsScrolled(window && window.scrollY > 0);
    };
    window && window.addEventListener("scroll", handleScroll);
    return () => window && window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesDropdown = [;
    {;
      title: "Web Development",;
      description: "Custom websites and web applications",;
      href: "/services/web-development",;
      icon: Code,;
    },;
    {;
      title: "Mobile Development",;
      description: "iOS and Android applications",;
      href: "/services/mobile-development",;
      icon: Smartphone,;
    },;
    {;
      title: "Cloud Solutions",;
      description: "Scalable cloud infrastructure",;
      href: "/services/cloud-solutions",;
      icon: Cloud,;
    },;
    {;
      title: "Database Management",;
      description: "Database design and optimization",;
      href: "/services/database-management",;
      icon: Database,;
    },;
    {;
      title: "Security Services",;
      description: "Cybersecurity and data protection",;
      href: "/services/security",;
      icon: Shield,;
    },;
    {;
      title: "Performance Optimization",;
      description: "Speed and efficiency improvements",;
      href: "/services/performance",;
      icon: Zap,;
    },;
  ];

  const solutionsDropdown = [;
    {;
      title: "Enterprise Solutions",;
      description: "Comprehensive business technology solutions",;
      href: "/solutions/enterprise",;
      icon: Building,;
    },;
    {;
      title: "E-commerce Platforms",;
      description: "Online store development and management",;
      href: "/solutions/ecommerce",;
      icon: ShoppingCart,;
    },;
    {;
      title: "Healthcare Technology",;
      description: "Specialized healthcare IT solutions",;
      href: "/solutions/healthcare",;
      icon: Heart,;
    },;
    {;
      title: "Educational Platforms",;
      description: "Learning management systems",;
      href: "/solutions/education",;
      icon: GraduationCap,;
    },;
  ];

  const industriesDropdown = [;
    { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory },;
    { name: "Logistics", href: "/industries/logistics", icon: Truck },;
    { name: "Finance", href: "/industries/finance", icon: CreditCard },;
    { name: "Healthcare", href: "/industries/healthcare", icon: Heart },;
    { name: "Education", href: "/industries/education", icon: GraduationCap },;
    { name: "Retail", href: "/industries/retail", icon: ShoppingCart },;
  ];

  const navigation = [;
    { name: "Home", href: "/" },;
    {;
      name: "Services",;
      href: "/services",;
      submenu: [;
        { name: "AI Services", href: "/ai-services", icon: Brain },;
        { name: "IT Services", href: "/it-services", icon: Network },;
        { name: "Micro SAAS", href: "/micro-saas", icon: Cloud },;
      ],;
    },;
    { name: "About", href: "/about" },;
    { name: "Services", href: "/services" },;
    { name: "Solutions", href: "/solutions" },;
    { name: "Industries", href: "/industries" },;
    { name: "Contact", href: "/contact" },;
  ];

  const handleServiceClick = (href: string) => {;
    closeMenu();
    window && window.location.href = href;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex justify-between items-center h-16">;
          {/* Logo */}
          <div className="flex-shrink-0">;
            <Link href="/" className="text-2xl font-bold text-blue-600">;
              Zion Tech Group;
            </Link>;
          </div>;

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">;
            {navigation && navigation.map(item) => (;
              <Link
                key={item && item.name}
                href={item && item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors">;
                {item && item.name}
              </Link>;
            )}
          </nav>
          </nav>;

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">;
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">;
              Get Started;
            </Link>;
          </div>;

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-100">;
            {isMenuOpen ? (;
              <X className="h-6 w-6" />;
            ) : (;
              <Menu className="h-6 w-6" />;
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>;
          {isMenuOpen && (;
            <motion&& motion.div
              initial={ opacity: 0, height: 0 }
              animate={ opacity: 1, height: "auto" }
              exit={ opacity: 0, height: 0 }
              className="lg:hidden bg-white shadow-lg">;
              <div className="px-4 py-6 space-y-4">;
                {navigation && navigation.map(item) => (;
                  <Link
                    key={item && item.name}
                    href={item && item.href}
                    onClick={closeMenu}
                    className="block text-gray-700 hover:text-blue-600 font-medium">;
                    {item && item.name}
                  </Link>;
                )}
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200">;
                  Get Started;
                </Link>;
              </div>;
            </motion && motion.div>;
          )}
        </AnimatePresence>;
      </div>;
    </header>;
  );
      title: "Web Development",
      description: "Custom websites and web applications",
      href: "/services / web - development",
      icon: Code,
    },
    {
      title: "Mobile Development",
      description: "iOS and Android applications",
      href: "/services / mobile - development",
      icon: Smartphone,
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure",
      href: "/services / cloud - solutions",
      icon: Cloud,
    },
    {
      title: "Database Management",
      description: "Database design and optimization",
      href: "/services / database - management",
      icon: Database,
    },
    {
      title: "Security Services",
      description: "Cybersecurity and data protection",
      href: "/services / security",
      icon: Shield,
    },
    {
      title: "Performance Optimization",
      description: "Speed and efficiency improvements",
      href: "/services / performance",
      icon: Zap,
    },
  ];

  const solutions_dropdown = [;
    {
      title: "Enterprise Solutions",
      description: "Comprehensive business technology solutions",
      href: "/solutions / enterprise",
      icon: Building,
    },
    {
      title: "E - commerce Platforms",
      description: "Online store development and management",
      href: "/solutions / ecommerce",
      icon: ShoppingCart,
    },
    {
      title: "Healthcare Technology",
      description: "Specialized healthcare IT solutions",
      href: "/solutions / healthcare",
      icon: Heart,
    },
    {
      title: "Educational Platforms",
      description: "Learning management systems",
      href: "/solutions / education",
      icon: GraduationCap,
    },
  ];

  const industries_dropdown = [;
    { name: "Manufacturing", href: "/industries / manufacturing", icon: Factory },
    { name: "Logistics", href: "/industries / logistics", icon: Truck },
    { name: "Finance", href: "/industries / finance", icon: CreditCard },
    { name: "Healthcare", href: "/industries / healthcare", icon: Heart },
    { name: "Education", href: "/industries / education", icon: GraduationCap },
    { name: "Retail", href: "/industries / retail", icon: ShoppingCart },
  ];

  const navigation = [;
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      submenu: [;
        { name: "AI Services", href: "/ai - services", icon: Brain },
        { name: "IT Services", href: "/it - services", icon: Network },
        { name: "Micro SAAS", href: "/micro - saas", icon: Cloud },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  const handleServiceClick = (href: string) =>: any {
    close_menu ();
    window.location.href = href;
  }

  return (
    <header className="bg - white shadow - lg sticky top - 0 z - 50">;
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="flex justify - between items - center h - 16">;
          {/* Logo */}
          <div className="flex - shrink - 0">;
            <Link href="/" className="text - 2xl font - bold text - blue - 600">;
              Zion Tech Group;
            </Link>;
          </div>;
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space - x-8">;
            {navigation.map (item) => (
              <Link;
                key={item.name}
                href={item.href}
                className="text - gray - 700 hover:text - blue - 600 font - medium transition - colors";
              >;
                {item.name}
              </Link>)}
          </nav>;
          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items - center space - x-4">;
            <Link;
              href="/contact";
              className="bg - blue - 600 hover:bg - blue - 700 text - white px - 6 py - 2 rounded - lg font - medium transition - colors duration - 200";
            >;
              Get Started;
            </Link>;
          </div>;
          {/* Mobile Menu Button */}
          <button;
            on_click={toggle_menu}
            className="lg:hidden p - 2 rounded - lg transition - colors duration - 200 text - gray - 700 hover:bg - gray - 100";
          >;
            {isMenuOpen ? (
              <X className="h - 6 w - 6" />) : (
              <Menu className="h - 6 w - 6" />)}
          </button>;
        </div>;
        {/* Mobile Menu */}
        <AnimatePresence>;
          {isMenuOpen && (
            <motion.div;
              initial={ opacity: 0, height: 0 }
              animate={ opacity: 1, height: "auto" }
              exit={ opacity: 0, height: 0 }
              className="lg:hidden bg - white shadow - lg";
            >;
              <div className="px - 4 py - 6 space - y-4">;
                {navigation.map (item) => (
                  <Link;
                    key={item.name}
                    href={item.href}
                    on_click={close_menu}
                    className="block text - gray - 700 hover:text - blue - 600 font - medium";
                  >;
                    {item.name}
                  </Link>)}
                <Link;
                  href="/contact";
                  on_click={close_menu}
                  className="block w - full bg - blue - 600 hover:bg - blue - 700 text - white text - center px - 6 py - 3 rounded - lg font - medium transition - colors duration - 200";
                >;
                  Get Started;
                </Link>;
              </div>;
            </motion.div>)}
        </AnimatePresence>;
      </div>;
    </header>);
