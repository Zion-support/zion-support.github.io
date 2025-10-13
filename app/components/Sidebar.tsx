import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Brain, Shield, Zap, Globe, Home, User, Mail } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About', href: '/about', icon: <User className="w-5 h-5" /> },
    { name: 'AI Solutions', href: '/ai-services', icon: <Brain className="w-5 h-5" /> },
    { name: 'IT Services', href: '/services', icon: <Shield className="w-5 h-5" /> },
    { name: 'Micro SAAS', href: '/micro-saas', icon: <Zap className="w-5 h-5" /> },
    { name: '5G Solutions', href: '/5g-solutions', icon: <Globe className="w-5 h-5" /> },
    { name: 'Contact', href: '/contact', icon: <Mail className="w-5 h-5" /> },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-slate-900/95 backdrop-blur-md border-r border-cyan-500/20 transform transition-transform duration-300 ease-in-out lg:hidden">
        <div className="flex items-center justify-between h-16 px-4 border-b border-cyan-500/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  onClick={onClose}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
