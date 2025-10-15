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
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-slate-800/50 hover:text-white transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            onClick={onClose}
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-slate-800/50 hover:text-white transition-colors"
          >
            <Brain className="w-5 h-5" />
            <span>About</span>
          </Link>
          <Link
            to="/services"
            onClick={onClose}
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-slate-800/50 hover:text-white transition-colors"
          >
            <Shield className="w-5 h-5" />
            <span>Services</span>
          </Link>
          <Link
            to="/contact"
            onClick={onClose}
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-slate-800/50 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Contact</span>
          </Link>
          <Link
            to="/ai-services"
            onClick={onClose}
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-slate-800/50 hover:text-white transition-colors"
          >
            <Brain className="w-5 h-5" />
            <span>AI Services</span>
          </Link>
          <Link
            to="/micro-saas"
            onClick={onClose}
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-slate-800/50 hover:text-white transition-colors"
          >
            <Zap className="w-5 h-5" />
            <span>Micro SAAS</span>
          </Link>
          <Link
            to="/5g-solutions"
            onClick={onClose}
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-slate-800/50 hover:text-white transition-colors"
          >
            <Globe className="w-5 h-5" />
            <span>5G Solutions</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
