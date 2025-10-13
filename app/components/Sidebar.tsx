import React from 'react';
import { Link } from 'react-router-dom';
import { X, Brain, Shield, Zap, Globe, Home, Users, Code, Mail, BarChart3, Cloud, Settings, Video, FileText, Target } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navigationItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Users className="w-5 h-5" /> },
    { name: 'Services', path: '/services', icon: <Shield className="w-5 h-5" /> },
    { name: 'AI Services', path: '/ai-services', icon: <Brain className="w-5 h-5" /> },
    { name: 'Micro SAAS', path: '/micro-saas', icon: <Zap className="w-5 h-5" /> },
    { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-5 h-5" /> },
  ];

  const microSaasItems = [
    { name: 'AI Video Generator', path: '/zion-ai-video-generator', icon: <Video className="w-4 h-4" /> },
    { name: 'AI Invoice Generator', path: '/zion-ai-invoice-generator', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Customer Insights', path: '/zion-ai-customer-insights', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  const aiServiceItems = [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Blockchain', path: '/ai-blockchain-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI DevOps', path: '/ai-devops-automation', icon: <Settings className="w-4 h-4" /> },
    { name: 'AI Cloud', path: '/ai-cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-l border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="p-6">
          <ul className="space-y-4">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                  onClick={onClose}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Micro SAAS Section */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">Micro SAAS Solutions</h3>
            <ul className="space-y-2">
              {microSaasItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors text-sm"
                    onClick={onClose}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services Section */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServiceItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors text-sm"
                    onClick={onClose}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;