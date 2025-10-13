import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, Users, Award, Package, Code, Phone, Brain, Shield, Zap, Globe, ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
      icon: <Award className="w-5 h-5" />,
      hasSubmenu: true,
      submenu: [
        { name: 'AI Services', path: '/ai-services', icon: <Brain className="w-4 h-4" /> },
        { name: 'IT Services', path: '/services', icon: <Shield className="w-4 h-4" /> },
        { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Package className="w-5 h-5" />,
      hasSubmenu: true,
      submenu: [
        { name: 'AI-Powered Tools', path: '/ai-powered-email-analyzer', icon: <Brain className="w-4 h-4" /> },
        { name: 'Zion Pro Solutions', path: '/zion-ai-analytics-pro', icon: <Zap className="w-4 h-4" /> },
        { name: 'Business Tools', path: '/project-management-tool', icon: <Award className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: <Code className="w-5 h-5" />
    },
    {
      name: 'Demo',
      path: '/demo',
      icon: <Zap className="w-5 h-5" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-5 h-5" />
    }
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20">
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <h2 className="text-lg font-semibold text-white">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4 space-y-2">
          {navigationItems.map((item, index) => (
            <div key={index}>
              <Link
                to={item.path}
                onClick={onClose}
                className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
                {item.hasSubmenu && (
                  <ChevronRight className="w-4 h-4 ml-auto text-gray-400" />
                )}
              </Link>
              
              {item.hasSubmenu && item.submenu && (
                <div className="ml-6 mt-2 space-y-1">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      onClick={onClose}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group"
                    >
                      <span className="text-cyan-500/60 group-hover:text-cyan-400 transition-colors">
                        {subItem.icon}
                      </span>
                      <span>{subItem.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <Link
            to="/contact"
            onClick={onClose}
            className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;