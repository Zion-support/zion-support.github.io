<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const services = [
    { name: 'AI Development', href: '/services/ai-model-development-chat' },
    { name: 'Web Development', href: '/services/web-application-development-chat' },
    { name: 'Mobile Apps', href: '/services/mobile-app-development-chat' },
    { name: 'Cloud Services', href: '/services/cloud-migration-services-chat' },
    { name: 'Data Analytics', href: '/services/business-intelligence-chat' },
    { name: 'Cybersecurity', href: '/services/network-security-chat' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design-chat' },
    { name: 'Quality Assurance', href: '/services/quality-assurance-testing-chat' }
  ];

  const products = [
    { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
    { name: 'IoT Platforms', href: '/iot-platforms' },
    { name: 'AI Models', href: '/products' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Zion Tech Group
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isProductsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/talent" className="text-gray-700 hover:text-blue-600 transition-colors">
              Talent
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
=======
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import {
  Menu,
  X,
  Phone,
  Mail,
  Brain,
  Cloud,
  Code,
  ChevronDown,
} from 'lucide-react';
=======
import { Brain, ChevronDown, Cloud, Code, Home, Info, Mail, Menu, Phone, X } from 'lucide-react';
>>>>>>> main

>>>>>>> main
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const services = [
    {'
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      description: 'Artificial Intelligence Solutions',
    },
    {'
      name: 'IT Services',
      href: '/it-services',
      icon: Cloud,
      description: 'Information Technology Services',
    },
    {'
      name: 'Micro SaaS',
      href: '/micro-saas',
      icon: Code,
      description: 'Custom Software Solutions',
    },
    {'
      name: 'All Services',
      href: '/services',
      icon: null,
      description: 'Complete Service Portfolio',
    },
  ];
  const navigation = ['
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Pricing', href: '/pricing-guide' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];
<<<<<<< HEAD
  return ('
    <header className="bg-white shadow-sm sticky top-0 z-50">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8">"
=======
=======
import React from 'react'
import Link  from 'next/link';const Header: React.FC = () => {
>>>>>>> main
  return (
<<<<<<< HEAD
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </Link>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>{' '}
=======
    <header className="bg-white shadow-sm sticky top-0 z-50">
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> main
>>>>>>> main
        <div className="flex justify-between items-center h-16">
          {/* Logo */}"
          <div className="flex-shrink-0">"
            <Link href="/" className="flex items-center space-x-2">"
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">"
                <Brain className="w-5 h-5 text-white" />
              </div>"
              <span className="text-xl font-bold text-gray-900">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}"
          <nav className="hidden lg:block">"
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map(item => ("
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div"
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
<<<<<<< HEAD
                    >"
                      <button className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                        {item.name}"
=======
                    >
<<<<<<< HEAD
                      <button className="text-gray-900 hover: text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
=======
                      <button className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
>>>>>>> main
                        {item.name}
>>>>>>> main
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {isServicesOpen && ("
                        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">"
                          <div className="px-4 py-2 border-b border-gray-100">"
                            <h3 className="text-sm font-semibold text-gray-900">
                              Our Services
                            </h3>
                          </div>
                          {services.map(service => (
                            <Link
                              key={service.name}
<<<<<<< HEAD
                              href={service.href}"
=======
                              href={service.href}
<<<<<<< HEAD
                              className="flex items-center px-4 py-3 hover: bg-gray-50 transition-colors"
=======
>>>>>>> main
                              className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
>>>>>>> main
                            >
                              {service.icon && ("
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 mr-3">"
                                  <service.icon className="h-4 w-4 text-blue-600" />
                                </div>
                              )}
                              <div>"
                                <div className="text-sm font-medium text-gray-900">
                                  {service.name}
                                </div>"
                                <div className="text-xs text-gray-500">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}"
                      className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
>>>>>>> main
            </div>
          </nav>

<<<<<<< HEAD
          {/* Contact Info & CTA */}"
          <div className="hidden lg: flex items-center space-x-4">"
            <div className="flex items-center space-x-2 text-sm text-gray-600">"
              <Phone className="h-4 w-4" />"
              <a href="tel:+13024640950" className="hove,
    r:text-blue-600">
=======
          {/* Contact Info & CTA */}
<<<<<<< HEAD
          <div className="hidden lg: flex items-center space-x-4">
=======
          <div className="hidden lg:flex items-center space-x-4">
>>>>>>> main
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <a href="tel:+13024640950" className="hover:text-blue-600">
>>>>>>> main
                +1 302 464 0950
              </a>
            </div>
            <Link"
              href="/contact""
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hove,
    r:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}"
          <div className="lg:hidden">
            <button
<<<<<<< HEAD
              onClick={() => setIsMenuOpen(!isMenuOpen)}"
=======
              onClick={() => setIsMenuOpen(!isMenuOpen)}
<<<<<<< HEAD
              className="text-gray-900 hover: text-blue-600 p-2"
=======
>>>>>>> main
              className="text-gray-900 hover:text-blue-600 p-2"
>>>>>>> main
            >
              {isMenuOpen ? ("
                <X className="h-6 w-6" />
              ) : ("
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
>>>>>>> main
        </div>

        {/* Mobile Navigation */}
<<<<<<< HEAD
        {isMenuOpen && ("
          <div className="lg:hidden border-t border-gray-200 py-4">"
=======
        {isMenuOpen && (
<<<<<<< HEAD
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              
              <div>
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isProductsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="block text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="/talent" className="text-gray-700 hover:text-blue-600 transition-colors">
                Talent
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>
=======
          <div className="lg:hidden border-t border-gray-200 py-4">
>>>>>>> main
            <div className="space-y-2">
              {navigation.map(item => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>"
                      <div className="text-gray-900 px-3 py-2 text-sm font-medium">
                        {item.name}
                      </div>"
                      <div className="ml-4 space-y-1">
                        {services.map(service => (
                          <Link
                            key={service.name}
<<<<<<< HEAD
                            href={service.href}"
=======
                            href={service.href}
<<<<<<< HEAD
                            className="flex items-center px-3 py-2 text-sm text-gray-600 hover: text-blue-600"
=======
>>>>>>> main
                            className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
>>>>>>> main
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.icon && ("
                              <service.icon className="h-4 w-4 mr-2 text-blue-600" />
                            )}
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}"
                      className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
<<<<<<< HEAD
            </div>"
            <div className="mt-4 pt-4 border-t border-gray-200">"
              <div className="flex items-center space-x-2 text-sm text-gray-600 px-3 py-2">"
                <Phone className="h-4 w-4" />"
                <a href="tel: +13024640950" className="hover:text-blue-600">
=======
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-600 px-3 py-2">
                <Phone className="h-4 w-4" />
<<<<<<< HEAD
                <a href="tel: +13024640950" className="hover:text-blue-600">
=======
                <a href="tel:+13024640950" className="hover:text-blue-600">
>>>>>>> main
>>>>>>> main
                  +1 302 464 0950
                </a>
              </div>"
              <div className="flex items-center space-x-2 text-sm text-gray-600 px-3 py-2">"
                <Mail className="h-4 w-4" />
                <a"
                  href="mailto:kleber@ziontechgroup.com""
                  className="hove,
    r:text-blue-600"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <Link"
                href="/contact""
                className="block bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hove,
    r:bg-blue-700 transition-colors mt-2 mx-3 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
>>>>>>> main
          </div>
        )}
      </div>
    </header>
  );
};

<<<<<<< HEAD
export default Header;
<<<<<<< HEAD
"
=======
=======
export default Header;
>>>>>>> main
>>>>>>> main
