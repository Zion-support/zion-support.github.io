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
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link href="/services/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">AI Services</Link>
                  <Link href="/services/micro-saas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Micro SaaS</Link>
                  <Link href="/services/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">IT Services</Link>
                  <Link href="/services/cybersecurity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Cybersecurity</Link>
                </div>
              )}
            </div>

            <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors">Solutions</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
              <div className="py-2">
                <div className="text-gray-700 font-medium mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  <Link href="/services/ai-services" className="block py-1 text-sm text-gray-600 hover:text-blue-600">AI Services</Link>
                  <Link href="/services/micro-saas" className="block py-1 text-sm text-gray-600 hover:text-blue-600">Micro SaaS</Link>
                  <Link href="/services/it-services" className="block py-1 text-sm text-gray-600 hover:text-blue-600">IT Services</Link>
                  <Link href="/services/cybersecurity" className="block py-1 text-sm text-gray-600 hover:text-blue-600">Cybersecurity</Link>
                </div>
              </div>
              <Link href="/solutions" className="block py-2 text-gray-700 hover:text-blue-600">Solutions</Link>
              <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600">About</Link>
              <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</Link>
              <Link
                href="/contact"
                className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center mt-4"
              >
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