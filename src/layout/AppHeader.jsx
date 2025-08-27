import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell } from 'lucide-react';
export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black/90 backdrop-blur-md border-b border-zion-cyan/20 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg lg:text-xl">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl lg:text-2xl font-bold text-white">ZION TECH GROUP</div>
              <div className="text-xs text-zion-cyan font-medium">INNOVATION • TECHNOLOGY • FUTURE</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-zion-cyan transition-colors duration-300">Home</Link>
            <Link to="/about" className="text-white hover:text-zion-cyan transition-colors duration-300">About</Link>
            <Link to="/services" className="text-white hover:text-zion-cyan transition-colors duration-300">Services</Link>
            <Link to="/comprehensive-services" className="text-white hover:text-zion-cyan transition-colors duration-300">All Services</Link>
            <Link to="/comprehensive-pricing" className="text-white hover:text-zion-cyan transition-colors duration-300">Pricing</Link>
            <Link to="/contact" className="text-white hover:text-zion-cyan transition-colors duration-300">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login" className="text-white hover:text-zion-cyan transition-colors duration-300 font-medium">Login</Link>
            <Link to="/contact" className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform">Get Started</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-zion-cyan/20">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-zion-cyan transition-colors duration-300">Home</Link>
              <Link to="/about" className="text-white hover:text-zion-cyan transition-colors duration-300">About</Link>
              <Link to="/services" className="text-white hover:text-zion-cyan transition-colors duration-300">Services</Link>
              <Link to="/comprehensive-services" className="text-white hover:text-zion-cyan transition-colors duration-300">All Services</Link>
              <Link to="/comprehensive-pricing" className="text-white hover:text-zion-cyan transition-colors duration-300">Pricing</Link>
              <Link to="/contact" className="text-white hover:text-zion-cyan transition-colors duration-300">Contact</Link>
              <div className="pt-4 border-t border-zion-cyan/20">
                <Link to="/login" className="block text-white hover:text-zion-cyan transition-colors duration-300 font-medium mb-2">Login</Link>
                <Link to="/contact" className="block px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium text-center">Get Started</Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
