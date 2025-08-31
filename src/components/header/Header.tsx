import React from 'react';
import { Link } from 'react-router-dom';
import { MainNavigation } from './MainNavigation';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zion-purple/30 bg-zion-blue-dark/95 backdrop-blur supports-[backdrop-filter]:bg-zion-blue-dark/75 shadow-lg shadow-zion-purple/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Logo />
                <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <MainNavigation className="hidden lg:flex" />

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-zion-cyan hover:text-white transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              to="/comprehensive-services-showcase-2025"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light rounded-lg shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}