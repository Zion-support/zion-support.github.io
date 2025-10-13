import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, Shield, Zap, Brain, Globe } from 'lucide-react';
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
    {
      name: 'Home',
      path: '/',
      icon: <Home className="w-5 h-5" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Brain className="w-5 h-5" />
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Shield className="w-5 h-5" />
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-5 h-5" />
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-5 h-5" />
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-5 h-5" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Globe className="w-5 h-5" />
    }
  ];
  return (
    <>
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
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-4">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              onClick={onClose}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};
export default Sidebar;