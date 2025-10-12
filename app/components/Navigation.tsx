'use client';
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold">Z</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white group-hover:glow">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Home</a>
            <a href="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">AI Services</a>
            <a href="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">IT Services</a>
            <a href="/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Micro SAAS</a>
            <a href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">About</a>
            <a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
