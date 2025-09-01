import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import MainNavigation from './MainNavigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800' 
        : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 sm:mb-0">
              <a href="tel:+13024640950" className="flex items-center hover:text-blue-100 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center hover:text-blue-100 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-zinc-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <span className="text-white font-bold text-xl">ZT</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>
                <p className="text-xs text-gray-400">Innovation • Technology • Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <MainNavigation />
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                to="/request-quote"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zinc-900/98 backdrop-blur-md border-t border-zinc-800">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              <Link
                to="/"
                className="block text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button className="flex items-center justify-between w-full text-white hover:text-blue-400 transition-colors py-2">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    to="/services"
                    className="block text-gray-300 hover:text-blue-400 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link
                    to="/services/ai-autonomous-code-review"
                    className="block text-gray-300 hover:text-blue-400 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI Code Review
                  </Link>
                  <Link
                    to="/services/ai-supply-chain-risk-management"
                    className="block text-gray-300 hover:text-blue-400 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Supply Chain Risk Management
                  </Link>
                  <Link
                    to="/services/quantum-financial-trading-platform"
                    className="block text-gray-300 hover:text-blue-400 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Quantum Trading Platform
                  </Link>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button className="flex items-center justify-between w-full text-white hover:text-blue-400 transition-colors py-2">
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    to="/solutions"
                    className="block text-gray-300 hover:text-blue-400 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Solutions
                  </Link>
                  <Link
                    to="/solutions/healthcare"
                    className="block text-gray-300 hover:text-blue-400 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Healthcare
                  </Link>
                  <Link
                    to="/solutions/financial"
                    className="block text-gray-300 hover:text-blue-400 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Financial Services
                  </Link>
                  <Link
                    to="/solutions/manufacturing"
                    className="block text-gray-300 hover:text-blue-400 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Manufacturing
                  </Link>
                </div>
              </div>

              <Link
                to="/about"
                className="block text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              
              <Link
                to="/pricing"
                className="block text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              
              <Link
                to="/contact"
                className="block text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-zinc-700">
              <Link
                to="/request-quote"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>

            {/* Contact Info */}
            <div className="pt-4 border-t border-zinc-700 space-y-2">
              <a
                href="tel:+13024640950"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
