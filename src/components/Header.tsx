import React, { useState } from 'react';
<<<<<<< HEAD
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca
import ThemeToggle from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
<<<<<<< HEAD
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Components', href: '/components' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-foreground">Zion Tech Group</span>
=======

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg fixed w-full top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold">Zion Tech Group</span>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca
          </Link>
          
          {/* Desktop Navigation */}
<<<<<<< HEAD
          <nav className="hidden md:flex space-x-6 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors ${
                  location.pathname === item.href
                    ? 'text-primary font-medium'
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
=======
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <ThemeToggle />
            <Button variant="outline" size="small">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
<<<<<<< HEAD
          <div className="md:hidden mt-4 pb-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground/80 hover:bg-muted'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
=======
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <div className="flex items-center justify-center space-x-4">
                <ThemeToggle />
                <Button variant="outline" size="small" className="flex-1">
                  Get Started
                </Button>
              </div>
            </nav>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca
          </div>
        )}
      </div>
    </header>
  );
}