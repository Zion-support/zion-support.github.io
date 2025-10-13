import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Home, Users, Settings, Brain, Shield, Zap, Globe } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      <div className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl z-50 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-2 mb-8">
            <Link
              to="/"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/')
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-l-2 border-cyan-400'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
              onClick={onClose}
            >
              <Home className="w-4 h-4" />
              <span className="font-medium">Home</span>
            </Link>
            <Link
              to="/about"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/about')
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-l-2 border-cyan-400'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
              onClick={onClose}
            >
              <Users className="w-4 h-4" />
              <span className="font-medium">About</span>
            </Link>
            <Link
              to="/services"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/services')
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-l-2 border-cyan-400'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
              onClick={onClose}
            >
              <Settings className="w-4 h-4" />
              <span className="font-medium">Services</span>
            </Link>
            <Link
              to="/contact"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/contact')
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-l-2 border-cyan-400'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
              onClick={onClose}
            >
              <Brain className="w-4 h-4" />
              <span className="font-medium">Contact</span>
            </Link>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <div className="w-5 h-5 text-cyan-400">📧</div>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <div className="w-5 h-5 text-cyan-400">📞</div>
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <div className="w-5 h-5 text-cyan-400">📍</div>
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
