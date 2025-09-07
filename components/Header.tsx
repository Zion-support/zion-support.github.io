<<<<<<< HEAD
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
"use client";
=======
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

"use client";
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

"use client";
;
import React, { useState, useEffect } from './react';
import Link from './next / link';
<<<<<<< HEAD
import {
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
=======

import {


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  CreditCard
} from 'lucide-react';
=======

<<<<<<< HEAD


CreditCard,

  CreditCard,
=======
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const Header: React.FC = () => {
=======
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap } from 'lucide-react';
import { useRouter } from 'next/router';


'use client';
"use client";

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
=======
'use client';
<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
=======

>>>>>>> origin/chore/fix-lint-and-merge
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
<<<<<<< HEAD

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    {
      name: 'Home',
      href: '/'
    },
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
    {
      name: 'Contact',
      href: '/contact'
    }
  ];

const servicesDropdown = [
  {
    title: 'AI & Machine Learning,
    description: Custom AI solutions and ML models',
    href: '/services/ai-ml,
    icon: Brain
  },
  {
    title: Cloud Solutions',
    description: 'Scalable cloud infrastructure,
    href: /services/cloud',
    icon: Cloud
  },
  {
    title: 'Cybersecurity,
    description: Advanced security solutions',
    href: '/services/cybersecurity,
    icon: Shield
  },
  {
    title: Data Analytics',
    description: 'Business intelligence and insights,
    href: /services/analytics',
    icon: BarChart3
  },
  {
    title: 'Web Development,
    description: Modern web applications',
    href: '/services/web-development,
    icon: Code
  },
  {
    title: Database Solutions',
    description: 'Database design and optimization,
    href: /services/database',
    icon: Database
  }
];

const solutionsDropdown = [
  {
    title: 'Digital Transformation,
    description: Complete business modernization',
    href: '/solutions/digital-transformation,
    icon: Zap
  },
  {
    title: Enterprise Solutions',
    description: 'Large-scale business systems,
    href: /solutions/enterprise',
    icon: Building
  },
  {
    title: 'Startup Acceleration,
    description: Rapid growth and scaling',
    href: '/solutions/startup,
    icon: Rocket
  }
  return (<header className="bg-white shadow-lg sticky top-0 z-50">;"
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">;"
        <div className="container mx-auto px-4">;"
          <div className="flex flex-col "md":flex-row justify-between items-center text-sm">;"
            <div className="flex items-center space-x-6 mb-2 "md":mb-0">;"
              <div className="flex items-center space-x-2">;"
                <Phone className="w-4 h-4" />;"
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center space-x-2">;"
                <Mail className="w-4 h-4" />;"
                <span>kleber@ziontechgroup.com</span>;
              </div>;
            </div>;
            <div className="flex items-center space-x-2">;"
              <MapPin className="w-4 h-4" />;"
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">;"
        <div className="flex justify-between items-center">;"
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">;"
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;"
              <span className="text-white font-bold text-xl">Z</span>;"
            </div>;
            <div>;
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>;"
              <p className="text-sm text-gray-600">AI & Technology Solutions</p>;"
            </div>;
          </Link>;
          {/* Desktop Navigation */}

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => item.dropdown && toggleDropdown(item.name)}
                  className="flex items-center space-x-1 text-gray-700 "hover": text-blue-600 transition-colors duration-200 font-medium">"

const industriesDropdown = [
  { name: Healthcare', href: '/industries/healthcare, icon: Stethoscope },
  { name: Finance', href: '/industries/finance, icon: Landmark },
  { name: Education', href: '/industries/education, icon: GraduationCap },
  { name: Manufacturing', href: '/industries/manufacturing, icon: Factory },
  { name: Retail', href: '/industries/retail, icon: ShoppingCart },
  { name: Government', href: '/industries/government, icon: Building }
];

                        {item.dropdown.map((subItem) => (<Link;
                            }
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 "hover":bg-blue-50 "hover":text-blue-600 transition-colors duration-200";"
                            onClick={() => setActiveDropdown(null)}
                          >;
                            {subItem.name}
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

      { "name": 'IT Services', "href": '/it-services','
},

      { "name": 'Micro SaaS', "href": '/micro-saas','
},

    { "name": 'Consulting', "href": '/consulting','
}
  ],
  'Solutions': ['
      { "name": 'Enterprise', "href": '/enterprise','
},

      { "name": 'Startup', "href": '/startup','
},

    { "name": 'Industry', "href": '/industries','
}
  ],
  'Company': ['
      { "name": 'About', "href": '/about','
},

      { "name": 'Team', "href": '/team','
},

      { "name": 'Careers', "href": '/careers','
},

    { "name": 'Contact', "href": '/contact' }'
  ]
};

export default function Header() {
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
<<<<<<< HEAD

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
<<<<<<< HEAD

  const servicesDropdown = [
=======
  const closeMenu = () => setIsMenuOpen(false);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }, []);
;
  const services_dropdown = [;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    {
      title: 'Web Development',
      description: 'Custom websites and web applications',
      href: '/services/web-development',
      icon: Code
    },
    {
      title: 'Mobile Development',
      description: 'iOS and Android applications',
      href: '/services/mobile-development',
      icon: Smartphone
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure',
      href: '/services/cloud-solutions',
      icon: Cloud
    },
    {
      title: 'Database Management',
      description: 'Database design and optimization',
      href: '/services/database-management',
      icon: Database
    },
    {
      title: 'Security Services',
      description: 'Cybersecurity and data protection',
      href: '/services/security',
      icon: Shield
    },
    {
      title: 'Performance Optimization',
      description: 'Speed and efficiency improvements',
      href: '/services/performance',
      icon: Zap
    }
  ];

<<<<<<< HEAD
  const solutionsDropdown = [
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive business technology solutions',
      href: '/solutions/enterprise',
      icon: Building
    },
    {
      title: 'E-commerce Platforms',
      description: 'Online store development and management',
      href: '/solutions/ecommerce',
      icon: ShoppingCart
    },
    {
      title: 'Healthcare Technology',
      description: 'Specialized healthcare IT solutions',
      href: '/solutions/healthcare',
      icon: Heart
    },
    {
      title: 'Educational Platforms',
      description: 'Learning management systems',
      href: '/solutions/education',
      icon: GraduationCap
    }
  ];

  const industriesDropdown = [
    { name: 'Manufacturing', href: '/industries/manufacturing', icon: Factory },
    { name: 'Logistics', href: '/industries/logistics', icon: Truck },
    { name: 'Finance', href: '/industries/finance', icon: CreditCard },
    { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
    { name: 'Education', href: '/industries/education', icon: GraduationCap },
    { name: 'Retail', href: '/industries/retail', icon: ShoppingCart }
  ];
=======
<<<<<<< HEAD
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


ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
<<<<<<< HEAD
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </Link>
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
<Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </Link>

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' }
  ];

<<<<<<< HEAD
  return (
    <header className="bg-white shadow-lg">
=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>



<<<<<<< HEAD

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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
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

=======
<<<<<<< HEAD
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
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>
              <p className="text-sm text-gray-600">AI & Technology Solutions</p>
            </div>
          </Link>

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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36






  useEffect(() => {;
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
=======
<<<<<<< HEAD
=======

export default function Header() {
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
>>>>>>> origin/chore/fix-lint-and-merge

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
<<<<<<< HEAD
    { name: 'Contact', href: '/contact' }
  ];

<<<<<<< HEAD
const router = useRouter();

  useEffect(() => {

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
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
<<<<<<< HEAD
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
            {navigation.slice(0, 2).map((item) => (
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
=======
                  )}
                </div>
              ))}
            </div>
          </nav>



                    <div className="p-6>
                      <div className=grid grid-cols-2 gap-4">
                        {servicesDropdown.map((service) => (
                          <Link key={service.title} href={service.href} className="group>
                            <div className=flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <service.icon className="w-6 h-6 text-blue-600 mt-1 />
                              <div>
                                <h3 className=font-semibold text-gray-900 group-hover:text-blue-600">{service.title}</h3>
                                <p className="text-sm text-gray-600>{service.description}</p>
                              </div>
                            </div>

                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
<<<<<<< HEAD
=======
<<<<<<< HEAD
origin/automation-improvements-final
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </div>
          

<<<<<<< HEAD
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className=lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6 /> : <Menu className=w-6 h-6" />}
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
                        className="p-1
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                    )}
                  </div>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className=ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link

                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>

=======
          </nav>;


<<<<<<< HEAD

</div>
          </nav>;
          </div>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
          </nav>
          </div>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">;
            <Link
              href="/contact"
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
origin/main
            >
              Get Started
            </Link>
          </div>

        </div>

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
<<<<<<< HEAD
      </nav>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
=======

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
<<<<<<< HEAD
      </nav>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>

          </button>;
</button>;
=======

          </button>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>;




        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>

        {/* Mobile Menu */}
        <AnimatePresence>;
          {isMenuOpen && (;
            <motion&& motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white shadow-lg">;
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
origin/main
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
<<<<<<< HEAD
className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200">;
                  Get Started;
                </Link>;
              </div>;
            </motion && motion.div>;
          )}
        </AnimatePresence>;
      </div>;
    </header>;

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200"

                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                >
                  Get Started
                </Link>
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
=======
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">Zion Tech Group</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
              >
                {item.name}
              </Link>
            ))}
<<<<<<< HEAD
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
              className="p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
=======
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24}    /> : <Menu size={24}    />}
            </button>
          </div>
        </div>
      </div>

>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
<<<<<<< HEAD
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
=======
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
=======
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
>>>>>>> origin/chore/fix-lint-and-merge

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
<<<<<<< HEAD
=======
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
<<<<<<< HEAD
                  className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
=======
<<<<<<< HEAD
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
=======
                  className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
                >
                  {item.name}
                </Link>
              ))}
            </div>
<<<<<<< HEAD
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
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
<<<<<<< HEAD
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
=======
                ))}
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
=======
<<<<<<< HEAD
          </motion.div>
        )}
      </AnimatePresence>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
    </header>
  );
};

<<<<<<< HEAD
export default Header;
=======
export default Header;
<<<<<<< HEAD
}
export default Header;

    </header>
  );
}
}
=======
=======
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
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
>>>>>>> origin/chore/fix-lint-and-merge
              </div>
            </motion.div>
          )}
        </AnimatePresence>
<<<<<<< HEAD
=======

      </div>
    </header>
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </nav>
    </header>
  );
<<<<<<< HEAD
};

export default Header;
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
  }
];

const Header: React.FC<{ onMenuClick?: () => void }> = ({ onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-left">
                  Sign In
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
}
<<<<<<< HEAD
export default Header;

    </header>
  );
}
}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
}
}
}
export default Header;
=======
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
=======

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
