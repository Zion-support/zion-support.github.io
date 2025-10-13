<<<<<<< HEAD
import React, { Suspense, lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu, Home, Users, Settings, Brain, Cloud, Shield, Zap, Globe } from 'lucide-react';
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, Shield, Zap, Brain, Globe } from 'lucide-react';
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'AI Services', path: '/ai-services', icon: Brain },
    { name: 'Micro SAAS', path: '/micro-saas', icon: Zap },
    { name: '5G Solutions', path: '/5g-solutions', icon: Globe },
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity', path: '/cybersecurity-solutions', icon: Shield },
    { name: 'Contact', path: '/contact', icon: Users },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 w-64 bg-slate-900 shadow-xl">
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
          <span className="text-xl font-bold text-white">Zion Tech Group</span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-4">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-cyan-400 bg-cyan-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
                onClick={onClose}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;