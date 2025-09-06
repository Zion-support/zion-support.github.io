
ursor/automate-test-improve-and-merge-code-646c
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Menu, X, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SearchModal from './SearchModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Keyboard shortcut for search (Ctrl+K)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" }
  ];

>>>>>>> main
import Button from './Button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
ursor/integrate-build-improve-and-re-verify-9d47

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuClick?.();
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

<<<<<<< HEAD
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      children: [
        { name: 'AI Services', href: '/services/ai-services' },
        { name: 'IT Services', href: '/services/it-services' },
        { name: 'Micro SaaS', href: '/services/micro-saas' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
        { name: 'Mobile Development', href: '/services/mobile-development' }
      ]
    },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<<<<<<< HEAD
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">

            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>

            </div>
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>
ursor/automate-test-improve-and-merge-code-646c
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
=======
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">Z</span>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

<<<<<<< HEAD
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >

            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}

          </button>
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
ursor/automate-test-improve-and-merge-code-646c
            className="md:hidden text-gray-300 hover:text-white"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
=======
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
          </button>
        </div>

        {isMenuOpen && (
<<<<<<< HEAD
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
=======
          <div className="md:hidden py-4 border-t border-gray-700/50">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
            </nav>
          </div>
        )}

      </div>
    </header>
  );
};


export default Header;

export default Header;
export default Header;
export default Header;
export default Header;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
export default Header;
