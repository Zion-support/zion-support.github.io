'use client';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Home, Users, Settings, Brain, Cloud, Shield, Code, BarChart, ChevronDown, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Home',
      path: '/',
      icon: <Home className="w-5 h-5" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-5 h-5" />
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Settings className="w-5 h-5" />
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-5 h-5" />
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Cloud className="w-5 h-5" />
    },
    {
      name: 'Micro SaaS',
      path: '/micro-saas',
      icon: <Code className="w-5 h-5" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-5 h-5" />
    }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-slate-900 border-r border-purple-500/20 z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={onClose}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            <div className="text-center text-gray-400 text-sm">
              <p>© 2024 Zion Tech Group</p>
              <div className="flex items-center justify-center space-x-4 mt-2">
                <a href="mailto:contact@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="tel:+1-555-0123" className="hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;