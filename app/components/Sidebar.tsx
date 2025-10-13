import React from 'react';
import { Link } from 'react-router-dom';
import { X, Brain, Shield, Zap, Cloud, BarChart3, Globe } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-gray-700">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="p-4">
          <div className="space-y-2">
            <Link to="/" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors p-2 rounded">
              <Globe className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors p-2 rounded">
              <Globe className="w-5 h-5" />
              <span>About</span>
            </Link>
            <Link to="/services" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors p-2 rounded">
              <Shield className="w-5 h-5" />
              <span>IT Services</span>
            </Link>
            <Link to="/ai-services" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors p-2 rounded">
              <Brain className="w-5 h-5" />
              <span>AI Services</span>
            </Link>
            <Link to="/5g-solutions" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors p-2 rounded">
              <Zap className="w-5 h-5" />
              <span>5G Solutions</span>
            </Link>
            <Link to="/micro-saas" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors p-2 rounded">
              <Cloud className="w-5 h-5" />
              <span>Micro SAAS</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors p-2 rounded">
              <Globe className="w-5 h-5" />
              <span>Contact</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
