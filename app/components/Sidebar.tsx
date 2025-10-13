import React from 'react';
import { Link } from 'react-router-dom';
import { X, Brain, Shield, Zap, Globe, Home, Mail, Phone } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20">
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          <Link
            to="/"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
            onClick={onClose}
          >
            <Home className="w-5 h-5 text-cyan-400" />
            <span className="text-white">Home</span>
          </Link>
          
          <Link
            to="/ai-services"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
            onClick={onClose}
          >
            <Brain className="w-5 h-5 text-blue-400" />
            <span className="text-white">AI Services</span>
          </Link>
          
          <Link
            to="/services"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
            onClick={onClose}
          >
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-white">IT Services</span>
          </Link>
          
          <Link
            to="/micro-saas"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
            onClick={onClose}
          >
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-white">Micro SAAS</span>
          </Link>
          
          <Link
            to="/5g-solutions"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
            onClick={onClose}
          >
            <Globe className="w-5 h-5 text-orange-400" />
            <span className="text-white">5G Solutions</span>
          </Link>
          
          <Link
            to="/about"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
            onClick={onClose}
          >
            <Brain className="w-5 h-5 text-cyan-400" />
            <span className="text-white">About</span>
          </Link>
          
          <Link
            to="/contact"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
            onClick={onClose}
          >
            <Mail className="w-5 h-5 text-cyan-400" />
            <span className="text-white">Contact</span>
          </Link>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className="text-white text-sm">+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="text-white text-sm">kleber@ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
