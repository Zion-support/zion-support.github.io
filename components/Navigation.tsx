<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
=======
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const navigationItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'All Services', href: '/services' },
      ],
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        { name: 'AI Content Creation', href: '/solutions/ai-content-creation' },
        { name: 'Email Automation', href: '/solutions/email-automation' },
        {
          name: 'Customer Support Platform',
          href: '/solutions/customer-support',
        },
        { name: 'Event Management', href: '/solutions/event-management' },
        { name: 'Project Management', href: '/solutions/project-management' },
        { name: 'Workflow Automation', href: '/solutions/workflow-automation' },
      ],
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-white text-2xl font-bold hover:text-blue-300 transition-colors"
            >
              Zion Tech Group
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map(item => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="text-white hover: text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                          {item.dropdown.map(dropdownItem => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover: bg-blue-50 hover:text-blue-600 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Search and Contact */}
          <div className="hidden md: flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-white bg-opacity-10 text-white placeholder-gray-300 px-4 py-2 rounded-md text-sm focus: outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-300" />
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <a
                href="tel:+13024640950"
                className="text-white hover:text-blue-300 flex items-center"
              >
                <Phone className="h-4 w-4 mr-1" />
                <span className="hidden lg:inline">+1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-white hover:text-blue-300 flex items-center"
              >
                <Mail className="h-4 w-4 mr-1" />
                <span className="hidden lg:inline">Contact</span>
              </a>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover: text-blue-300 p-2 rounded-md transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
=======
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
>>>>>>> main

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
<<<<<<< HEAD
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">
              Products
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
=======
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href="/ai-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Services
                </Link>
                <Link href="/it-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  IT Services
                </Link>
                <Link href="/micro-saas" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Micro SaaS
                </Link>
                <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  All Services
                </Link>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <Link href="/solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Solutions Overview
                </Link>
                <Link href="/solutions/ai-content-creation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Content Creation
                </Link>
                <Link href="/solutions/customer-support" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Customer Support
                </Link>
                <Link href="/solutions/email-automation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Email Automation
                </Link>
                <Link href="/solutions/workflow-automation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Workflow Automation
                </Link>
                <Link href="/case-studies" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Case Studies
                </Link>
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-blue-600 transition-colors">
              Team
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
>>>>>>> main
              Contact
            </Link>
          </div>

<<<<<<< HEAD
          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
=======
          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Get Started
            </Link>
>>>>>>> main
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> main
          </button>
        </div>
<<<<<<< HEAD
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800 bg-opacity-95">
            {navigationItems.map(item => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="text-white hover: text-blue-300 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map(dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-sm"
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
=======

        {/* Mobile Navigation */}
<<<<<<< HEAD
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">
                Products
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
=======
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <Link href="/" className="block py-2 text-gray-600 hover:text-blue-600">
                Home
              </Link>
              
              <div className="py-2">
                <div className="text-gray-600 font-semibold mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  <Link href="/ai-services" className="block py-1 text-gray-500 hover:text-blue-600">
                    AI Services
>>>>>>> main
                  </Link>
                  <Link href="/it-services" className="block py-1 text-gray-500 hover:text-blue-600">
                    IT Services
                  </Link>
                  <Link href="/micro-saas" className="block py-1 text-gray-500 hover:text-blue-600">
                    Micro SaaS
                  </Link>
                  <Link href="/services" className="block py-1 text-gray-500 hover:text-blue-600">
                    All Services
                  </Link>
                </div>
              </div>

              <div className="py-2">
                <div className="text-gray-600 font-semibold mb-2">Solutions</div>
                <div className="pl-4 space-y-2">
                  <Link href="/solutions" className="block py-1 text-gray-500 hover:text-blue-600">
                    Solutions Overview
                  </Link>
                  <Link href="/solutions/ai-content-creation" className="block py-1 text-gray-500 hover:text-blue-600">
                    AI Content Creation
                  </Link>
                  <Link href="/solutions/customer-support" className="block py-1 text-gray-500 hover:text-blue-600">
                    Customer Support
                  </Link>
                  <Link href="/solutions/email-automation" className="block py-1 text-gray-500 hover:text-blue-600">
                    Email Automation
                  </Link>
                  <Link href="/solutions/workflow-automation" className="block py-1 text-gray-500 hover:text-blue-600">
                    Workflow Automation
                  </Link>
                </div>
              </div>

              <Link href="/about" className="block py-2 text-gray-600 hover:text-blue-600">
                About
              </Link>
              <Link href="/team" className="block py-2 text-gray-600 hover:text-blue-600">
                Team
              </Link>
              <Link href="/case-studies" className="block py-2 text-gray-600 hover:text-blue-600">
                Case Studies
              </Link>
              <Link href="/contact" className="block py-2 text-gray-600 hover:text-blue-600">
                Contact
              </Link>

              <div className="pt-4">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full text-center block">
                  Get Started
                </Link>
              </div>
>>>>>>> main
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
