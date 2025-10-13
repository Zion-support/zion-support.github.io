import React from 'react';
import { Link } from 'react-router-dom';
import { X, Brain, Shield, Zap, Globe, BarChart3, Cloud, Code, Users, Database, Smartphone, Monitor } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const aiServices = [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Monitor className="w-4 h-4" /> }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Code className="w-4 h-4" /> }
  ];

  const fiveGServices = [
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Zap className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> }
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
            <h2 className="text-lg font-semibold text-white">Navigation</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Main Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 mb-3">Main</h3>
              <div className="space-y-2">
                <Link
                  to="/"
                  className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  <span>Home</span>
                </Link>
                <Link
                  to="/about"
                  className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  <span>About</span>
                </Link>
                <Link
                  to="/services"
                  className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  <span>Services</span>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  <span>Contact</span>
                </Link>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 mb-3">AI Services</h3>
              <div className="space-y-1">
                {aiServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    {service.icon}
                    <span className="ml-3">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 mb-3">IT Services</h3>
              <div className="space-y-1">
                {itServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    {service.icon}
                    <span className="ml-3">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Micro SAAS */}
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 mb-3">Micro SAAS</h3>
              <div className="space-y-1">
                {microSaasServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    {service.icon}
                    <span className="ml-3">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* 5G Solutions */}
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 mb-3">5G Solutions</h3>
              <div className="space-y-1">
                {fiveGServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    {service.icon}
                    <span className="ml-3">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;