import React, { useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD

const EnhancedNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

=======
import { Menu, X, ChevronDown } from 'lucide-react';
const "EnhancedNavigation": React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const services = [{ name: 'All Services', href: '/services' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
  ];
>>>>>>> main
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
<<<<<<< HEAD
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>
              <div className="text-xs text-gray-500">Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)}>
                  <span className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
                    {item.name}
                  </span>
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <span className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
=======
<div className="text-xl font-bold text-gray-800">Logo</div>
          <div className="hidden md:flex space-x-8>
            <Link href="/"><span className="text-gray-600 hover:text-gray-900">Home</span></Link>
            <Link href="/services"><span className="text-gray-600 hover:text-gray-900">Services</span></Link>
            <Link href="/about"><span className="text-gray-600 hover:text-gray-900">About</span></Link>
            <Link href="/contact"><span className="text-gray-600 hover:text-gray-900">Contact</span></Link>
          </div>
          <div className="hidden lg:block">
            <Link href="/contact">
              <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Get Started
              </span>
            </Link>
          </div>
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200>
            <div className="space-y-2">
              <Link href="/">
                <span className="block py-2 text-gray-600 hover:text-blue-600">Home</span>
              </Link>
              <div className="space-y-2">
                <div className="font-semibold text-gray-800 py-2">Services</div>
                {services.map((service) => (
                  <Link key={service.name} href={service.href}>
                    <span className="block py-2 pl-4 text-gray-600 hover:text-blue-600> {service.name}
                    </span"
                  </Link>
                ))}
              </div>
              <Link href="/about">
                <span className="block py-2 text-gray-600 hover:text-blue-600>About</span> </Link"
              <Link href="/contact">
                <span className="block py-2 text-gray-600 hover:text-blue-600">Contact</span>
              </Link>
              <Link href="/contact">
                <span className="block py-2 bg-blue-600 text-white text-center rounded-lg font-semibold">
>>>>>>> main
                  Get Started
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