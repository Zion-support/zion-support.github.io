import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Menu,
  X
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors ${
                isActive('/services') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/ai-services" 
              className={`text-sm font-medium transition-colors ${
                isActive('/ai-services') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              AI Services
            </Link>
            <Link 
              to="/micro-saas" 
              className={`text-sm font-medium transition-colors ${
                isActive('/micro-saas') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Micro SAAS
            </Link>
            <Link 
              to="/5g-solutions" 
              className={`text-sm font-medium transition-colors ${
                isActive('/5g-solutions') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              5G Solutions
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onSidebarToggle}
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
