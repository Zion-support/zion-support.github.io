import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu, Zap, Home, Settings, User, HelpCircle } from 'lucide-react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'AI Services', href: '/ai-services', icon: Zap },
    { name: 'IT Services', href: '/it-services', icon: Settings },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Zap },
    { name: 'Solutions', href: '/solutions', icon: Settings },
    { name: 'About', href: '/about', icon: User },
    { name: 'Contact', href: '/contact', icon: HelpCircle }
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-800">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-1 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-6 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Bottom section */}
          <div className="p-6 border-t border-gray-800">
            <div className="text-xs text-gray-400 mb-4">
              <p>© 2025 Zion Tech Group</p>
              <p>All rights reserved</p>
            </div>
            <div className="space-y-2">
              <Link
                to="/help"
                className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Help & Support
              </Link>
              <Link
                to="/privacy"
                className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}