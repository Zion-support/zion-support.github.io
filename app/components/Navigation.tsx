import React from 'react';
import { Menu, Phone, Mail, MapPin } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  return (
    <nav className="bg-slate-800 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onSidebarToggle}
              className="lg:hidden text-gray-400 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <a href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
            <div className="relative group">
              <a href="/services" className="hover:text-blue-400 transition-colors">Services</a>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 space-y-2">
                  <a href="/ai-services" className="block text-sm hover:text-blue-400 transition-colors">AI Services</a>
                  <a href="/it-services" className="block text-sm hover:text-blue-400 transition-colors">IT Services</a>
                  <a href="/micro-saas-solutions" className="block text-sm hover:text-blue-400 transition-colors">Micro SAAS</a>
                  <a href="/cloud-solutions" className="block text-sm hover:text-blue-400 transition-colors">Cloud Solutions</a>
                  <a href="/cybersecurity" className="block text-sm hover:text-blue-400 transition-colors">Cybersecurity</a>
                </div>
              </div>
            </div>
            <a href="/solutions" className="hover:text-blue-400 transition-colors">Solutions</a>
            <a href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
            <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-gray-300">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-300">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;