import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  return (
<nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md: flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>{/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link href="/services/ai-services" className="block px-4 py-2 text-gray-700 hover: bg-gray-100">
                    AI Services
                  </Link>
                  <Link href="/services/micro-saas" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Micro SaaS
                  </Link>
                  <Link href="/services/it-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    IT Services
                  </Link>
                  <Link href="/services/cloud-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Cloud Services
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover: text-blue-600 transition-colors"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {solutionsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <Link href="/solutions/enterprise" className="block px-4 py-2 text-gray-700 hover: bg-gray-100">
                    Enterprise
                  </Link>
                  <Link href="/solutions/startups" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Startups
                  </Link>
                  <Link href="/solutions/small-business" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Small Business
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover: text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link href="/pricing" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>

{/* Mobile Menu Button */}<button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
<div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors">
                Solutions
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Link href="/pricing" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center">
                Get Started
              </Link></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
