<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Menu, X, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SearchModal from './SearchModal';
=======
import { Menu, X } from 'lucide-react';
=======
<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Menu, X, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SearchModal from './SearchModal';
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

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
    { name: "Pricing", href: "/pricing" },
  ];

=======
>>>>>>> main
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
<<<<<<< HEAD
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
=======
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
              <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
              <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
<<<<<<< HEAD
=======
              <Button variant="primary" size="small" className="w-full">
                Get Started
              </Button>
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

<<<<<<< HEAD
export default Header;
=======
<<<<<<< HEAD
export default Header;
=======
<<<<<<< HEAD
export default Header;
=======
<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
