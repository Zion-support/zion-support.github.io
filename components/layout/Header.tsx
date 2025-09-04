import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'Micro SAAS', href: '/micro-saas-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Blockchain', href: '/blockchain-solutions' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center text-gray-600 hover:text-blue-600 text-sm"
            >
              <Phone className="w-4 h-4 mr-1" />
              +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center text-gray-600 hover:text-blue-600 text-sm"
            >
              <Mail className="w-4 h-4 mr-1" />
              kleber@ziontechgroup.com
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:+13024640950"
                  className="flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 text-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 text-sm"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;