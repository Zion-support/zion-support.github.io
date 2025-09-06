<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Header = () => {
=======
<<<<<<< HEAD


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
import React, { useState, useEffect } from "react";
import Link from "next/link";
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

export default function Header() {;
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
<<<<<<< HEAD

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const servicesDropdown = [
    {
      title: 'AI Services',
      description: 'Advanced AI solutions for your business',
      href: '/ai-services',
      icon: () => <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">AI</div>
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions',
      href: '/it-services',
      icon: () => <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">IT</div>
    },
    {
      title: 'Micro SaaS',
      description: 'Innovative software solutions',
      href: '/micro-saas',
      icon: () => <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">SaaS</div>
    },
  ];

  const solutionsDropdown = [
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud transformation',
      href: '/solutions/cloud-migration',
      icon: () => <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">☁️</div>
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets',
      href: '/solutions/cybersecurity',
      icon: () => <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center">🔒</div>
    },
  ];

  const industriesDropdown = [
    { name: 'Healthcare', href: '/industries/healthcare', icon: () => <div className="w-5 h-5 bg-blue-100 rounded">🏥</div> },
    { name: 'Finance', href: '/industries/finance', icon: () => <div className="w-5 h-5 bg-green-100 rounded">💰</div> },
    { name: 'Manufacturing', href: '/industries/manufacturing', icon: () => <div className="w-5 h-5 bg-gray-100 rounded">🏭</div> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
=======
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  }, []);
;
  const services_dropdown = [;
    {
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



  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
<<<<<<< HEAD
=======



>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
<<<<<<< HEAD
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
=======
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
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
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
<<<<<<< HEAD
                              <service.icon />
=======
                              <service.icon className="w-6 h-6 text-blue-600 mt-1" />
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
                              <div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.description}</p>
                              </div>
                            </div>
<<<<<<< HEAD
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
                            <solution.icon />
                            <div>
                              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{solution.title}</h3>
                              <p className="text-sm text-gray-600">{solution.description}</p>
                            </div>
                          </div>
=======
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
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
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
<<<<<<< HEAD
                          <industry.icon />
=======
                          <industry.icon className="w-5 h-5 text-blue-600" />
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
                          <span className="text-gray-700 group-hover:text-blue-600">{industry.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Regular Navigation Items */}
<<<<<<< HEAD
            {navigation.map((item) => (
=======
            {navigation.slice(0, 2).map((item) => (
origin/automation-improvements-final
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
<<<<<<< HEAD

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
              className="lg:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
=======
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
        {/* Mobile Menu */}
        <AnimatePresence>;
          {isMenuOpen && (;
            <motion&& motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
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
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

<<<<<<< HEAD
export default Header;
=======
export default Header;
}
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Building2
} from 'lucide-react';

const navigation = {
  'Services': [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Consulting', href: '/consulting' }
  ],
  'Solutions': [
    { name: 'Enterprise', href: '/enterprise' },
    { name: 'Startup', href: '/startup' },
    { name: 'Industry', href: '/industries' }
  ],
  'Company': [
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ]
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {Object.entries(navigation).map(([key, items]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  {key}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                    >
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-2 space-y-1">
              {Object.entries(navigation).map(([key, items]) => (
                <div key={key} className="py-2">
                  <div className="text-sm font-medium text-gray-900 mb-2">{key}</div>
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
>>>>>>> main
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
