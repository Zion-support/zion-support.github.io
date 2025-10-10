'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, Users, Settings, DollarSign, FileText, MessageCircle, Brain } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-r border-cyan-500/20 z-50 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center space-x-3 group" onClick={onClose}>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </Link>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-lg">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-2">
            <Link to="/" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors duration-300" onClick={onClose}>
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors duration-300" onClick={onClose}>
              <Users className="w-5 h-5" />
              <span>About</span>
            </Link>
            <Link to="/services" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors duration-300" onClick={onClose}>
              <Settings className="w-5 h-5" />
              <span>Services</span>
            </Link>
            <Link to="/pricing" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors duration-300" onClick={onClose}>
              <DollarSign className="w-5 h-5" />
              <span>Pricing</span>
            </Link>
            <Link to="/blog" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors duration-300" onClick={onClose}>
              <FileText className="w-5 h-5" />
              <span>Blog</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors duration-300" onClick={onClose}>
              <MessageCircle className="w-5 h-5" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
