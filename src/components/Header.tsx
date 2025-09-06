import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </nav>

          {/* Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="hidden lg:flex items-center justify-center w-10 h-10 mr-4 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group relative"
            title="Search (Ctrl+K)"
          >
            <Search className="w-5 h-5" />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              Ctrl+K
            </div>
          </button>

          {/* Theme Toggle */}
          <div className="hidden lg:flex items-center mr-4">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              <Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
              <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            </nav>
          </div>
        )}
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;