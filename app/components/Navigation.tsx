import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const closeDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                Home
              </Link>
              
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/ai-services"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700"
                      onClick={closeDropdowns}
                    >
                      AI Services
                    </Link>
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700"
                      onClick={closeDropdowns}
                    >
                      IT Services
                    </Link>
                    <Link
                      to="/micro-saas"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700"
                      onClick={closeDropdowns}
                    >
                      Micro SAAS
                    </Link>
                    <Link
                      to="/5g-solutions"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700"
                      onClick={closeDropdowns}
                    >
                      5G Solutions
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                About
              </Link>
              
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/50 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                onClick={toggleMenu}
              >
                AI Services
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                onClick={toggleMenu}
              >
                IT Services
              </Link>
              <Link
                to="/micro-saas"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                onClick={toggleMenu}
              >
                Micro SAAS
              </Link>
              <Link
                to="/5g-solutions"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                onClick={toggleMenu}
              >
                5G Solutions
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;