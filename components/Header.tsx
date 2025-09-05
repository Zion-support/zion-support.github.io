import React, { useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { 
  Menu, 
  X, 
  Brain, 
  Server, 
  Zap,
  ChevronDown
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2">
                  <Link href="/ai-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    AI Services
                  </Link>
                  <Link href="/it-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    IT Services
                  </Link>
                  <Link href="/micro-saas" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Micro SaaS
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
=======
import { Menu, X, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-300">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200">24/7 Support Available</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-blue-300">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-900">Zion Tech Group</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
              Blog
            </Link>
          </div>
          
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
                Blog
              </Link>
            </div>
          </div>
        )}
<<<<<<< HEAD
      </div>
=======
      </nav>
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
    </header>
  );
};

export default Header;