import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-white">Zion Tech Group</div>
              <div className="text-xs text-zion-cyan">Innovating Tomorrow</div>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-zion-slate-light hover:text-white transition-colors">
              Home
            </Link>
          </nav>
          <MainNavigation       />
        </div>
      </div>
    </header>
  );
}