'use client';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu, Home, Users, Settings, Brain, Cloud, Shield, Code, BarChart, ChevronDown, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

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
      name: 'AI Solutions',
      path: '/ai-services',
      icon: <Brain className="w-5 h-5" />
    },
    {
      name: 'Cloud Infrastructure',
      path: '/cloud-infrastructure',
      icon: <Cloud className="w-5 h-5" />
    },
    {
      name: 'Cybersecurity',
      path: '/cybersecurity',
      icon: <Shield className="w-5 h-5" />
    },
    {
      name: 'Data Analytics',
      path: '/data-analytics',
      icon: <BarChart className="w-5 h-5" />
    },
    {
      name: 'Custom Development',
      path: '/custom-software',
      icon: <Code className="w-5 h-5" />
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
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-purple-500/20 transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between h-16 px-4 border-b border-purple-500/20">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white p-2"
            aria-label="Close sidebar"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-purple-400 bg-purple-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-purple-500/20">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <Mail className="w-4 h-4" />
              <span>info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Global Services</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;