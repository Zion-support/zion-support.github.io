import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-development' },
    { name: 'Blockchain Solutions', href: '/services/blockchain' },
    { name: 'IoT Platforms', href: '/services/iot-platforms' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' }
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">Zion Tech Group</div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-4 space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;