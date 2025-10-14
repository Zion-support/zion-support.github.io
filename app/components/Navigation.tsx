import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    onSidebarToggle?.();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">
              Zion Tech Group
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </a>
              <a href="/case-studies" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Case Studies
              </a>
              <a href="/careers" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Careers
              </a>
              <a href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+13024640950" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">+1 302 464 0950</span>
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">kleber@ziontechgroup.com</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-lg rounded-lg mt-2">
              <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Services
              </a>
              <a href="/case-studies" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Case Studies
              </a>
              <a href="/careers" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Careers
              </a>
              <a href="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
              <div className="border-t border-white/10 pt-4 mt-4">
                <a href="tel:+13024640950" className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  <Mail className="w-4 h-4 mr-2" />
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;