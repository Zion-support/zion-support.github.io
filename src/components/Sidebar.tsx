import React from 'react';
import Link from 'next/link';
import { X, Home, Brain, Cloud, Shield, Code, Rocket, Users, FileText, Phone, Mail, MapPin, Globe } from 'lucide-react';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  if (!isOpen) return null;
  
  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Brain },
    { name: 'Micro SaaS', href: '/innovative-micro-saas', icon: Rocket },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const serviceItems = [
    { name: 'AI Services', href: '/services#ai', icon: Brain },
    { name: 'Cloud Platforms', href: '/services#cloud', icon: Cloud },
    { name: 'Cybersecurity', href: '/services#cybersecurity', icon: Shield },
    { name: 'Micro SaaS', href: '/services#saas', icon: Code },
  ];

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg grid place-items-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-900">Zion Tech Group</span>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-6">
          <div className="space-y-1 mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Navigation</h3>
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            ))}
          </div>

          <div className="space-y-1 mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Services</h3>
            {serviceItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-blue-600" />
                <a href="tel:+13024640950" className="hover:text-blue-600 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-blue-600" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-blue-600 mt-0.5" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Globe className="w-4 h-4 text-blue-600" />
                <a href="https://ziontechgroup.com" className="hover:text-blue-600 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
