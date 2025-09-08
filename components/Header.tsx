


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
import React, { useState, useEffect } from "react";
import Link from "next/link";

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



"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ChevronDown, 
  Menu, 

origin/automation-improvements-final
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
} from "lucide-react";

  CreditCard,;

  CreditCard,;
} from "lucide-react";

export default function Header() {;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

} from './lucide-react';
;
export default /**
 * Header - Function description
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState (false);
  const [isServicesOpen, setIsServicesOpen] = useState (false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState (false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState (false);
  const [is_scrolled, setIsScrolled] = useState (false);
;
  const toggle_menu = () =>: any setIsMenuOpen (!isMenuOpen);
  const close_menu = () =>: any setIsMenuOpen (false);
;
  useEffect (() => {
    const handle_scroll = () =>: any {
      setIsScrolled (window.scroll_y > 0);
    }
    window.addEventListener ("scroll", handle_scroll);
    return () => window.removeEventListener ("scroll", handle_scroll);

  }, []);
;
  const services_dropdown = [;
    {



ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">


            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
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


            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'Contact', href: '/contact' },
  ];

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
{/* Desktop Navigation */}

          </div>
{/* Desktop Navigation */}

          </div>
          {/* Desktop Navigation */}
<nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (

          <nav className="hidden md:flex space-x-8">

          <nav className="hidden lg:flex space-x-8">

origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
ursor/integrate-build-improve-and-re-verify-8f7d
          <nav className="hidden md:flex space-x-8">
          <nav className="hidden lg:flex space-x-8">
origin/main
            {navigation.map((item) => (
              </div>






          </div>
          {/* Desktop Navigation */}

  useEffect(() => {;
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
origin/automation-improvements-final
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
ursor/integrate-build-improve-and-re-verify-8f7d
          <nav className="hidden md:flex space-x-8">
          <nav className="hidden lg:flex space-x-8">
origin/main
            {navigation.map((item) => (
          <nav className="hidden lg:flex space-x-8">;
            {navigation && navigation.map((item) => (;

              <Link
                key={item && item.name}
                href={item && item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors">;
                {item && item.name}
              </Link>;
            ))}
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
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => item.dropdown && toggleDropdown(item.name)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  <Link href={item.href}>{item.name}</Link>
                  {item.dropdown && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

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
                key={item && item.name}
                href={item && item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors">;
                {item && item.name}
              </Link>;
            ))}
origin/automation-improvements-final
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  router.pathname === item.href
                    ? 'text-blue-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}

          </div>

          </nav>;



</div>
          </nav>;
          </div>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
          </div>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
          </nav>;



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
          <div className="hidden lg:flex items-center space-x-4">;
            <Link
              href="/contact"

              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"



            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">;
              Get Started;
            </Link>;
          </div>;






            >
              Get Started
            </Link>
          </div>

        </div>
      </nav>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final


          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-100">;
            {isMenuOpen ? (;
              <X className="h-6 w-6" />;
            ) : (;
              <Menu className="h-6 w-6" />;
            )}

          </button>;
        </div>;




        {/* Mobile Menu */}
        <AnimatePresence>;
          {isMenuOpen && (;
            <motion&& motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white shadow-lg">;
              <div className="px-4 py-6 space-y-4">;
                {navigation && navigation.map((item) => (;
                  <Link
                    key={item && item.name}
                    href={item && item.href}
                    onClick={closeMenu}
                    className="block text-gray-700 hover:text-blue-600 font-medium">;
                    {item && item.name}
                  </Link>;
                ))}
                <Link
                  href="/contact"
                  onClick={closeMenu}

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
;
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
;
  const industries_dropdown = [;
    { name: "Manufacturing", href: "/industries / manufacturing", icon: Factory },
    { name: "Logistics", href: "/industries / logistics", icon: Truck },
    { name: "Finance", href: "/industries / finance", icon: CreditCard },
    { name: "Healthcare", href: "/industries / healthcare", icon: Heart },
    { name: "Education", href: "/industries / education", icon: GraduationCap },
    { name: "Retail", href: "/industries / retail", icon: ShoppingCart },
  ];
;
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
;
  const handleServiceClick = (href: string) =>: any {
    close_menu ();
    window.location.href = href;
  }
;
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
            {navigation.map ((item) => (
              <Link;
                key={item.name}
                href={item.href}
                className="text - gray - 700 hover:text - blue - 600 font - medium transition - colors";
              >;
                {item.name}
              </Link>))}
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg - white shadow - lg";
            >;
              <div className="px - 4 py - 6 space - y-4">;
                {navigation.map ((item) => (
                  <Link;
                    key={item.name}
                    href={item.href}
                    on_click={close_menu}
                    className="block text - gray - 700 hover:text - blue - 600 font - medium";
                  >;
                    {item.name}
                  </Link>))}
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

}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200"

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
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-base font-medium text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
}

