import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'AI & Machine Learning', href: '/services#ai-services' },
    { name: 'Cloud & Infrastructure', href: '/services#cloud-services' },
    { name: 'Cybersecurity', href: '/services#cybersecurity' },
    { name: 'Web Development', href: '/services#web-development' },
    { name: 'Data & Analytics', href: '/services#data-services' },
    { name: 'Mobile Development', href: '/services#mobile-development' },
    { name: 'Blockchain & Web3', href: '/services#blockchain' },
    { name: 'Technology Consulting', href: '/services#consulting' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Zion Tech Group</div>
                <div className="text-xs text-gray-500">Technology Solutions</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/">
              <span className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Home
              </span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  {services.map((service) => (
                    <Link key={service.name} href={service.href}>
                      <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer">
                        {service.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about">
              <span className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                About
              </span>
            </Link>
            
            <Link href="/blog">
              <span className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Blog
              </span>
            </Link>
            
            <Link href="/contact">
              <span className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Contact
              </span>
            </Link>

            {/* CTA Button */}
            <Link href="/contact">
              <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer">
                Get Quote
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <Link href="/">
                <span className="block text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                  Home
                </span>
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => (
                      <Link key={service.name} href={service.href}>
                        <span className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about">
                <span className="block text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                  About
                </span>
              </Link>
              
              <Link href="/blog">
                <span className="block text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                  Blog
                </span>
              </Link>
              
              <Link href="/contact">
                <span className="block text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                  Contact
                </span>
              </Link>

              {/* Mobile CTA Button */}
              <Link href="/contact">
                <span className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors cursor-pointer">
                  Get Quote
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
