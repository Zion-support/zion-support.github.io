import React from 'react';
import { Link } from 'react-router-dom';
import { X, Brain, Shield, Zap, Globe, Users, Award, BarChart3, Mail, FileText, ChevronDown } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navigationItems = [
    { name: 'Home', href: '/', icon: <Globe className="w-5 h-5" /> },
    { name: 'About', href: '/about', icon: <Users className="w-5 h-5" /> },
    { name: 'Services', href: '/services', icon: <Award className="w-5 h-5" /> },
    { name: 'Case Studies', href: '/case-studies', icon: <BarChart3 className="w-5 h-5" /> },
    { name: 'Blog', href: '/blog', icon: <FileText className="w-5 h-5" /> },
    { name: 'Contact', href: '/contact', icon: <Mail className="w-5 h-5" /> }
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics' },
    { name: 'AI Content Generation', href: '/ai-content-generation' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
    { name: 'AI Customer Support', href: '/ai-customer-support' },
    { name: 'AI Healthcare', href: '/ai-healthcare' },
    { name: 'AI Marketing', href: '/ai-marketing' }
  ];

  const fiveGServices = [
    { name: '5G Implementation', href: '/5g-implementation' },
    { name: '5G Data Analytics', href: '/5g-data-analytics' },
    { name: '5G Edge Computing', href: '/5g-edge-computing' },
    { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
    { name: '5G Mobile Apps', href: '/5g-mobile-applications' },
    { name: '5G Smart City', href: '/5g-smart-city-solutions' }
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20">
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">Zion Tech</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4 space-y-6">
          {/* Main Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
              Navigation
            </h3>
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              AI Solutions
            </h3>
            <nav className="space-y-1">
              {aiServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  onClick={onClose}
                  className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-lg transition-all duration-300"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* 5G Services */}
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              5G Technology
            </h3>
            <nav className="space-y-1">
              {fiveGServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  onClick={onClose}
                  className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-lg transition-all duration-300"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="pt-4 border-t border-slate-700/50">
            <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>info@ziontechgroup.com</p>
              <p>+1 (302) 464-0950</p>
              <p>24/7 Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;