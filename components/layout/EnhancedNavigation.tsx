import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`}>
                <Link href="/services/ai-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  AI & Machine Learning
                </Link>
                <Link href="/services/cloud-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Cloud Solutions
                </Link>
                <Link href="/services/web-development" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Web Development
                </Link>
                <Link href="/services/mobile-development" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Mobile Development
                </Link>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`}>
                <Link href="/solutions/enterprise" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Enterprise Solutions
                </Link>
                <Link href="/solutions/startup" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Startup Solutions
                </Link>
                <Link href="/solutions/consulting" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Consulting
                </Link>
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link href="/pricing" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/services" className="block py-2 text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link href="/solutions" className="block py-2 text-gray-700 hover:text-blue-600">
                Solutions
              </Link>
              <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <Link href="/pricing" className="block py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;