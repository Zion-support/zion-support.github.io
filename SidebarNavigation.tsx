import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, User, Settings, HelpCircle, Phone, Mail } from 'lucide-react';

interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Help', href: '/help', icon: HelpCircle },
  ];

  return (
    <React.Fragment>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <h2 className="text-white font-bold text-xl">Navigation</h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-cyan-400 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-cyan-500/10"
                  onClick={onClose}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Contact Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-cyan-500/20">
          <div className="space-y-2">
            <a
              href="tel:+1-555-0123"
              className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>+1-555-0123</span>
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>info@ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SidebarNavigation;