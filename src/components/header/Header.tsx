import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200' : 'bg-white'}`}>
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:+13024640950" className="flex items-center space-x-2 hover:text-cyan-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 hover:text-cyan-200 transition-colors">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </a>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://ziontechgroup.com" className="hover:text-cyan-200 transition-colors">Visit Website</a>
            <span className="text-cyan-200">|</span>
            <span className="text-cyan-200">24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">Zion Tech Group</h1>
                <p className="text-xs text-gray-600">Innovation • Technology • Solutions</p>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            {nav.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-700 hover:text-cyan-600 px-2 py-2 text-sm font-medium transition-colors">
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-500 hover:text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {nav.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-cyan-600 py-2 text-base font-medium">
                {item.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-lg text-center font-medium mt-2">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;