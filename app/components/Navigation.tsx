import React from 'react';
import { Menu } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 fixed w-full top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={onSidebarToggle}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;