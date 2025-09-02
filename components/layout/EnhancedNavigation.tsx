import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleSolutions = () => setSolutionsOpen(!solutionsOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link href="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Services
                    </Link>
                    <Link href="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      IT Services
                    </Link>
                    <Link href="/micro-saas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Micro SaaS
                    </Link>
                    <Link href="/cloud-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Cloud Services
                    </Link>
                  </div>
                )}
=======
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

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  All Services
                </Link>
                <Link href="/services/ai-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Services
                </Link>
                <Link href="/services/it-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  IT Services
                </Link>
                <Link href="/services/micro-saas" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Micro SaaS
                </Link>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                Solutions
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <Link href="/solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  All Solutions
                </Link>
                <Link href="/solutions/enterprise" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Enterprise
                </Link>
                <Link href="/solutions/small-business" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Small Business
                </Link>
                <Link href="/solutions/startups" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Startups
                </Link>
>>>>>>> main
              </div>

              <Link href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              
              <Link href="/case-studies" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Case Studies
              </Link>
              
              <Link href="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
              
              <Link href="/pricing" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Get Quote
              </Link>
            </div>
<<<<<<< HEAD
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
=======

            <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/careers" className="text-gray-600 hover:text-blue-600 transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
>>>>>>> main
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
<<<<<<< HEAD
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              
              <div>
                <button
                  onClick={toggleServices}
                  className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  Services
                  <ChevronDown size={16} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-1">
                    <Link href="/ai-services" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">
                      AI Services
                    </Link>
                    <Link href="/it-services" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">
                      IT Services
                    </Link>
                    <Link href="/micro-saas" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">
                      Micro SaaS
                    </Link>
                    <Link href="/cloud-services" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">
                      Cloud Services
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              
              <Link href="/case-studies" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Case Studies
              </Link>
              
              <Link href="/contact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
              
              <Link href="/pricing" className="bg-blue-600 text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">
                Get Quote
              </Link>
=======
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <Link href="/" className="block py-2 text-gray-600 hover:text-blue-600">
                Home
              </Link>
              <div className="py-2">
                <div className="text-gray-600 font-semibold mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  <Link href="/services" className="block py-1 text-gray-500 hover:text-blue-600">
                    All Services
                  </Link>
                  <Link href="/services/ai-services" className="block py-1 text-gray-500 hover:text-blue-600">
                    AI Services
                  </Link>
                  <Link href="/services/it-services" className="block py-1 text-gray-500 hover:text-blue-600">
                    IT Services
                  </Link>
                  <Link href="/services/micro-saas" className="block py-1 text-gray-500 hover:text-blue-600">
                    Micro SaaS
                  </Link>
                </div>
              </div>
              <div className="py-2">
                <div className="text-gray-600 font-semibold mb-2">Solutions</div>
                <div className="pl-4 space-y-2">
                  <Link href="/solutions" className="block py-1 text-gray-500 hover:text-blue-600">
                    All Solutions
                  </Link>
                  <Link href="/solutions/enterprise" className="block py-1 text-gray-500 hover:text-blue-600">
                    Enterprise
                  </Link>
                  <Link href="/solutions/small-business" className="block py-1 text-gray-500 hover:text-blue-600">
                    Small Business
                  </Link>
                  <Link href="/solutions/startups" className="block py-1 text-gray-500 hover:text-blue-600">
                    Startups
                  </Link>
                </div>
              </div>
              <Link href="/products" className="block py-2 text-gray-600 hover:text-blue-600">
                Products
              </Link>
              <Link href="/about" className="block py-2 text-gray-600 hover:text-blue-600">
                About
              </Link>
              <Link href="/blog" className="block py-2 text-gray-600 hover:text-blue-600">
                Blog
              </Link>
              <Link href="/careers" className="block py-2 text-gray-600 hover:text-blue-600">
                Careers
              </Link>
              <Link href="/contact" className="block py-2 text-gray-600 hover:text-blue-600">
                Contact
              </Link>
              <div className="pt-4">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center">
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

export default EnhancedNavigation;