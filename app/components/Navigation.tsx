'use client';'import React, { useState, useCallback } from 'react';'import { Link, useLocation } from 'react-router-dom';'import { Menu, Home, Shield, Zap, Brain, Globe } from 'lucide-react';'
interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    {
      name: 'Home','      path: '/','      icon: <Home className="w-4 h-4" />"    },
    {
      name: 'About','      path: '/about','      icon: <Brain className="w-4 h-4" />"    },
    {
      name: 'Services','      path: '/services','      icon: <Shield className="w-4 h-4" />"    },
    {
      name: 'AI Services','      path: '/ai-services','      icon: <Brain className="w-4 h-4" />"    },
    {
      name: 'Micro SAAS','      path: '/micro-saas','      icon: <Zap className="w-4 h-4" />"    },
    {
      name: '5G Solutions','      path: '/5g-solutions','      icon: <Globe className="w-4 h-4" />"    },
    {
      name: 'Contact','      path: '/contact','      icon: <Globe className="w-4 h-4" />"    }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  }

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <nav className="bg-slate-900/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">"      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"        <div className="flex justify-between items-center h-16">"          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">"            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">"              <Brain className="w-5 h-5 text-white" />"            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>"          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">"            <div className="ml-10 flex items-baseline space-x-4">"              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/20''                      : 'text-gray-300 hover:text-white hover:bg-white/10''                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">"            <button
              onClick={onSidebarToggle || toggleMenu}
              className="text-gray-300 hover:text-white p-2""              aria-label="Toggle menu""            >
              <Menu className="w-6 h-6" />"            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">"            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm border-t border-cyan-500/20">"              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-400/10''                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10''                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;