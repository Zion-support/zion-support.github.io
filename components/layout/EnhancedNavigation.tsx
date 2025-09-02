import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-10"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link href="/services/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    AI Services
                  </Link>
                  <Link href="/services/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    IT Services
                  </Link>
                  <Link href="/services/micro-saas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Micro SaaS
                  </Link>
                  <Link href="/services/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Cloud Infrastructure
                  </Link>
                  <Link href="/services/cybersecurity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Cybersecurity
                  </Link>
                </div>
              )}
            </div>

            <Link href="/pricing-guide" className="text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>

            {/* Contact Info */}
            <div className="flex items-center space-x-4 border-l border-gray-200 pl-4">
              <a href="tel:+13024640950" className="flex items-center text-sm text-blue-600 hover:text-blue-700">
                <Phone className="w-4 h-4 mr-1" />
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center text-sm text-blue-600 hover:text-blue-700">
                <Mail className="w-4 h-4 mr-1" />
                Email
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            <div className="space-y-1">
              <div className="px-3 py-2 text-gray-700 font-medium">Services</div>
              <Link href="/services/ai-services" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600">
                AI Services
              </Link>
              <Link href="/services/it-services" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600">
                IT Services
              </Link>
              <Link href="/services/micro-saas" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600">
                Micro SaaS
              </Link>
              <Link href="/services/cloud-infrastructure" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600">
                Cloud Infrastructure
              </Link>
              <Link href="/services/cybersecurity" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600">
                Cybersecurity
              </Link>
            </div>
            
            <Link href="/pricing-guide" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>

            {/* Mobile Contact Info */}
            <div className="border-t border-gray-200 pt-4 pb-2">
              <a href="tel:+13024640950" className="block px-3 py-2 text-sm text-blue-600">
                <Phone className="w-4 h-4 inline mr-2" />
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="block px-3 py-2 text-sm text-blue-600">
                <Mail className="w-4 h-4 inline mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default EnhancedNavigation;