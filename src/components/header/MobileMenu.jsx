import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, MessageSquare, Home, Store, Users, Settings } from 'lucide-react';

export function MobileMenu({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navigationItems = [
    { href: '/', label: 'Home', icon: Home, matches: (path) => path === '/' },
    { href: '/services', label: 'Services', icon: Store, matches: (path) => path.startsWith('/services') },
    { href: '/about', label: 'About', icon: Users, matches: (path) => path.startsWith('/about') },
    { href: '/contact', label: 'Contact', icon: MessageSquare, matches: (path) => path.startsWith('/contact') },
  ];
  
  return (
    <div className={`md:hidden ${className || ''}`}>
      {/* Mobile menu button */}
      <button 
        onClick={toggleMenu} 
        className="p-2 text-white hover:bg-purple-500/20 rounded-lg transition-colors" 
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-80 bg-slate-800 border-l border-purple-500/20">
            <div className="flex items-center justify-between p-4 border-b border-purple-500/20">
              <h2 className="text-lg font-semibold text-white">Menu</h2>
              <button 
                onClick={toggleMenu} 
                className="p-2 text-white hover:bg-purple-500/20 rounded-lg transition-colors"
              >
                <X className="h-5 w-5"/>
              </button>
            </div>

            {/* Navigation items */}
            <nav className="p-4 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.matches(location.pathname);
                return (
                  <Link 
                    key={item.href} 
                    to={item.href} 
                    onClick={toggleMenu} 
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-white transition-colors ${
                      isActive
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                        : "hover:bg-purple-500/10 hover:text-purple-300"
                    }`}
                  >
                    <Icon className="w-5 h-5"/>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Contact section */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-purple-500/20">
              <div className="space-y-3">
                <Link 
                  to="/contact" 
                  onClick={toggleMenu} 
                  className="block w-full px-4 py-2 text-center bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  to="/contact" 
                  onClick={toggleMenu} 
                  className="block w-full px-4 py-2 text-center border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
