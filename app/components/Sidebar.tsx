import React from 'react';
import { Link } from 'react-router-dom';
import { X, Brain, Shield, Zap, Globe, BarChart3, Cloud, Users, Settings, Code, Database, Target, Calendar, Star } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const aiServices = [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Marketing Automation', path: '/ai-marketing-automation', icon: <Target className="w-4 h-4" /> },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Zap className="w-4 h-4" /> }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Cloud className="w-4 h-4" /> }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" />, featured: true },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" />, featured: true },
    { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro', icon: <Users className="w-4 h-4" />, featured: true },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Code className="w-4 h-4" />, featured: false },
    { name: 'Zion AI Marketing Pro', path: '/zion-ai-marketing-automation-pro', icon: <Target className="w-4 h-4" />, featured: false }
  ];

  const fiveGServices = [
    { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Zap className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Settings className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> }
  ];

  const mainPages = [
    { name: 'Home', path: '/', icon: <Globe className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Services', path: '/services', icon: <Settings className="w-4 h-4" /> },
    { name: 'Pricing', path: '/pricing', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Case Studies', path: '/case-studies', icon: <Database className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <Code className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Users className="w-4 h-4" /> }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-80 bg-slate-900/95 backdrop-blur-xl border-r border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
            <h2 className="text-xl font-bold text-white">Navigation</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Main Pages */}
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Main Pages</h3>
              <div className="space-y-1">
                {mainPages.map((page) => (
                  <Link
                    key={page.name}
                    to={page.path}
                    className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-300 group"
                    onClick={onClose}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      {page.icon}
                    </div>
                    <span className="font-medium">{page.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">AI Services</h3>
              <div className="space-y-1">
                {aiServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300 group"
                    onClick={onClose}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="font-medium">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-3">IT Services</h3>
              <div className="space-y-1">
                {itServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-all duration-300 group"
                    onClick={onClose}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="font-medium">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Micro SAAS Services */}
            <div>
              <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">Micro SAAS</h3>
              <div className="space-y-1">
                {microSaasServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className={`flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300 group ${
                      service.featured ? 'bg-gradient-to-r from-purple-500/5 to-cyan-500/5 border-l-2 border-purple-400' : ''
                    }`}
                    onClick={onClose}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <span className="font-medium">{service.name}</span>
                      {service.featured && (
                        <div className="flex items-center mt-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                          <span className="text-xs text-yellow-400">Featured</span>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 5G Services */}
            <div>
              <h3 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">5G Solutions</h3>
              <div className="space-y-1">
                {fiveGServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-all duration-300 group"
                    onClick={onClose}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="font-medium">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-cyan-500/20">
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-2">Need help?</p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                onClick={onClose}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;