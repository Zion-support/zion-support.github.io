'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Brain, Cloud, Shield, Code, Users, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navigationItems = [
    { name: 'Home', href: '/', icon: Brain },
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Cloud },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Code },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Pricing', href: '/pricing', icon: Shield },
    { name: 'Blog', href: '/blog', icon: Code },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-80 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700 z-50 transform transition-transform duration-300 ease-in-out lg:hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200 group"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="p-6 border-t border-slate-700">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;