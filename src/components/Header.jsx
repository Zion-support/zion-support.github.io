import React from 'react';
import { Link } from 'react-router-dom';
import { MainNavigation } from '../layout/MainNavigation';

export function Header() {
  return (
    <header 
      className="bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20"
      role="banner"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-slate-dark rounded-lg"
            aria-label="Zion Tech Group - Go to homepage"
          >
            <div 
              className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-white">Zion Tech Group</div>
              <div className="text-xs text-zion-cyan">Innovating Tomorrow</div>
            </div>
          </Link>
          
          <nav 
            className="hidden md:flex items-center space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <Link 
              to="/" 
              className="text-zion-slate-light hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-slate-dark rounded px-2 py-1"
              aria-current="page"
            >
              Home
            </Link>
          </nav>
          <MainNavigation />
        </div>
      </div>
    </header>
  );
}