import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Home, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Mail, 
  BarChart3, 
  Cloud, 
  Code, 
  Database, 
  ChevronDown,
  Package
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Users className="w-5 h-5" /> },
    { name: 'Services', path: '/services', icon: <Code className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-5 h-5" /> }
  ], []);

  const serviceCategories = useMemo(() => [
    {
      name: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      items: [
        { name: 'AI Analytics', path: '/ai-analytics' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Customer Service', path: '/ai-customer-service' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' }
      ]
    },
    {
      name: 'IT Services',
      icon: <Shield className="w-5 h-5" />,
      items: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
        { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions' },
        { name: 'Web Development', path: '/web-development' },
        { name: 'Mobile Development', path: '/mobile-development' },
        { name: 'Database Management', path: '/database-management' },
        { name: 'Custom Software', path: '/custom-software' }
      ]
    },
    {
      name: 'Micro SAAS',
      icon: <Package className="w-5 h-5" />,
      items: [
        { name: 'Zion Analytics Pro', path: '/zion-analytics-pro' },
        { name: 'Zion Security Shield', path: '/zion-security-shield' },
        { name: 'Zion Cloud Vault', path: '/zion-cloud-vault' },
        { name: 'Zion Content Studio', path: '/zion-content-studio' },
        { name: 'Zion AI Video Generator', path: '/zion-ai-video-generator' },
        { name: 'Zion AI Invoice Generator', path: '/zion-ai-invoice-generator' }
      ]
    },
    {
      name: '5G Solutions',
      icon: <Globe className="w-5 h-5" />,
      items: [
        { name: '5G Data Analytics', path: '/5g-data-analytics' },
        { name: '5G Edge Computing', path: '/5g-edge-computing' },
        { name: '5G Implementation', path: '/5g-implementation' },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
        { name: '5G Private Networks', path: '/5g-private-networks' }
      ]
    }
  ], []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 right-0 w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Main Navigation */}
            <div className="space-y-2 mb-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={onClose}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Service Categories */}
            <div className="space-y-6">
              {serviceCategories.map((category) => (
                <div key={category.name}>
                  <div className="flex items-center space-x-3 px-4 py-3 text-cyan-400 font-semibold border-b border-white/10 mb-3">
                    {category.icon}
                    <span>{category.name}</span>
                  </div>
                  <div className="space-y-1 ml-6">
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                          isActive(item.path)
                            ? 'text-cyan-400 bg-cyan-500/10'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                        onClick={onClose}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/10">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">
                Ready to transform your business?
              </p>
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
                onClick={onClose}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
