<<<<<<< HEAD


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap, Building, Phone, Mail, MapPin } from 'lucide-react';
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
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Complete digital overhaul of your business processes',
    href: '/services',
  },
];

const Header: React.FC<{ onMenuClick?: () => void }> = ({ onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (onMenuClick) {
      onMenuClick();
    }
  };

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
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
            >
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`} />
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
            <Link
              href="/about"
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
            >
              Contact
            </Link>
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
"use client";
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

"use client";
;
import React, { useState, useEffect } from './react';
import Link from './next / link';

import {
<<<<<<< HEAD


=======
  Menu,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
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

  CreditCard,
=======
==============



  CreditCard,;

  CreditCard,;
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from "lucide-react";

export default function Header() {;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
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


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  const solutionsDropdown = [
    {
      title: "Enterprise Solutions",
      description: "Comprehensive business technology solutions",
      href: "/solutions/enterprise",
      icon: Building,
    },
    {
      title: "E-commerce Platforms",
      description: "Online store development and management",
      href: "/solutions/ecommerce",
      icon: ShoppingCart,
    },
    {
      title: "Healthcare Technology",
      description: "Specialized healthcare IT solutions",
      href: "/solutions/healthcare",
      icon: Heart,
    },
    {
title: "Educational Platforms",
      description: "Learning management systems",
      href: "/solutions/education",
      icon: GraduationCap,
    },
  ];

  const industriesDropdown = [
    { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory },
    { name: "Logistics", href: "/industries/logistics", icon: Truck },
    { name: "Finance", href: "/industries/finance", icon: CreditCard },
    { name: "Healthcare", href: "/industries/healthcare", icon: Heart },
    { name: "Education", href: "/industries/education", icon: GraduationCap },
    { name: "Retail", href: "/industries/retail", icon: ShoppingCart },
  ];

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      submenu: [
        { name: "AI Services", href: "/ai-services", icon: Brain },
        { name: "IT Services", href: "/it-services", icon: Network },
        { name: "Micro SAAS", href: "/micro-saas", icon: Cloud },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  const handleServiceClick = (href: string) => {
    closeMenu();
    window.location.href = href;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">


=======

=======
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
<<<<<<< HEAD


=======
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
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
          </div>
        </div>
      </div>






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





  useEffect(() => {;
=======              <Link
                key={item && item.name}
                href={item && item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors">;
                {item && item.name}
              </Link>;
            ))}
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
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                        >
                          <subItem.icon className="h-4 w-4 mr-2" />
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
=======                )}
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
=======
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
            {navigation && navigation.map((item) => (;

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
              <Link
                key={item && item.name}
                href={item && item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors">;
                {item && item.name}
              </Link>;
            ))}
<<<<<<< HEAD
=======
>>>>>>> origin/main
          </nav>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20

          </div>

          </nav>;


>>>>>>> origin/automation-improvements-final
=======
          </nav>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

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
==============
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
origin/main
            >
              Get Started
            </Link>
          </div>

        </div>
      </nav>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final

=======
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">;
              Get Started;
            </Link>;
          </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

            >
              Get Started
            </Link>
          </div>

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
      </nav>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d

          </button>;
        </div>;
=======




</div>
      </nav>
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">;
              Get Started;
            </Link>;
          </div>;




            >
              Get Started
            </Link>
          </div>

        </div>
=======
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">;
              Get Started;
            </Link>;
          </div>;=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

            >
              Get Started
            </Link>
          </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-100">;
            {isMenuOpen ? (;
              <X className="h-6 w-6" />;
            ) : (;
              <Menu className="h-6 w-6" />;
            )}
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>

          </button>;        </div>;




        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>

=======        {/* Mobile Menu */}
        <AnimatePresence>;
          {isMenuOpen && (;
            <motion&& motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
              className="lg:hidden bg-white shadow-lg">;
              <div className="px-4 py-6 space-y-4">;
                {navigation && navigation.map((item) => (;
=======
              className="lg:hidden bg-white shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
<<<<<<< HEAD
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
                  className="block text-gray-700 hover:text-blue-600 font-medium"
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
=======
                {navigation.map((item) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
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
=======
=======
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
=======                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200"

=======

}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  onClick={() => setIsMenuOpen(false)}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
export default Header;
