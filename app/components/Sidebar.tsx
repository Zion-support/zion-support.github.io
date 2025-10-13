import React from 'react';
import { X, Home, Users, Brain, Settings, Wifi, BarChart3, Globe, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const mainLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/about', label: 'About', icon: Users },
    { to: '/blog', label: 'Blog', icon: Globe },
    { to: '/contact', label: 'Contact', icon: Phone },
  ];

  const aiServices = [
    { to: '/ai-services', label: 'All AI Services' },
    { to: '/ai-analytics', label: 'AI Analytics' },
    { to: '/ai-content-generation', label: 'Content Generation' },
    { to: '/ai-customer-support', label: 'Customer Support' },
    { to: '/ai-cybersecurity', label: 'AI Cybersecurity' },
    { to: '/zion-ai-video-generator', label: 'AI Video Generator' },
    { to: '/zion-ai-invoice-generator', label: 'AI Invoice Generator' },
    { to: '/zion-ai-voice-assistant-pro', label: 'Voice Assistant Pro' },
  ];

  const itServices = [
    { to: '/services', label: 'All Services' },
    { to: '/cloud-migration', label: 'Cloud Migration' },
    { to: '/web-development', label: 'Web Development' },
    { to: '/devops-services', label: 'DevOps Services' },
    { to: '/network-security', label: 'Network Security' },
    { to: '/software-development', label: 'Software Development' },
    { to: '/it-support', label: 'IT Support' },
    { to: '/managed-services', label: 'Managed Services' },
  ];

  const fiveGServices = [
    { to: '/5g-solutions', label: 'All 5G Solutions' },
    { to: '/5g-network-infrastructure', label: 'Network Infrastructure' },
    { to: '/5g-edge-computing', label: 'Edge Computing' },
    { to: '/5g-iot-solutions', label: 'IoT Solutions' },
    { to: '/5g-smart-city-solutions', label: 'Smart City Solutions' },
    { to: '/5g-mobile-applications', label: 'Mobile Applications' },
  ];

  const microSaas = [
    { to: '/micro-saas', label: 'All Micro SAAS' },
    { to: '/project-management-tool', label: 'Project Management' },
    { to: '/customer-relationship-manager', label: 'CRM System' },
    { to: '/inventory-management-system', label: 'Inventory Management' },
    { to: '/social-media-scheduler', label: 'Social Media Scheduler' },
    { to: '/email-marketing-platform', label: 'Email Marketing' },
    { to: '/website-analytics-tool', label: 'Website Analytics' },
  ];

  const additionalLinks = [
    { to: '/tutorials', label: 'Tutorials' },
    { to: '/demo', label: 'Demo' },
    { to: '/support', label: 'Support' },
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/terms', label: 'Terms of Service' },
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 right-0 w-80 bg-black/90 backdrop-blur-md border-l border-white/10 z-50 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-white font-bold text-lg">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4 space-y-6">
          {/* Main Navigation */}
          <div>
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Main</h3>
            <div className="space-y-1">
              {mainLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors py-2 px-3 rounded-lg"
                    onClick={onClose}
                  >
                    <Icon className="h-4 w-4 mr-3" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center">
              <Brain className="h-4 w-4 mr-2 text-blue-400" />
              AI Services
            </h3>
            <div className="space-y-1">
              {aiServices.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors py-2 px-3 rounded-lg text-sm"
                  onClick={onClose}
                >
                  <ChevronRight className="h-3 w-3 mr-2" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center">
              <Settings className="h-4 w-4 mr-2 text-blue-400" />
              IT Services
            </h3>
            <div className="space-y-1">
              {itServices.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors py-2 px-3 rounded-lg text-sm"
                  onClick={onClose}
                >
                  <ChevronRight className="h-3 w-3 mr-2" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 5G Solutions */}
          <div>
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center">
              <Wifi className="h-4 w-4 mr-2 text-blue-400" />
              5G Solutions
            </h3>
            <div className="space-y-1">
              {fiveGServices.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors py-2 px-3 rounded-lg text-sm"
                  onClick={onClose}
                >
                  <ChevronRight className="h-3 w-3 mr-2" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center">
              <BarChart3 className="h-4 w-4 mr-2 text-blue-400" />
              Micro SAAS
            </h3>
            <div className="space-y-1">
              {microSaas.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors py-2 px-3 rounded-lg text-sm"
                  onClick={onClose}
                >
                  <ChevronRight className="h-3 w-3 mr-2" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">More</h3>
            <div className="space-y-1">
              {additionalLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors py-2 px-3 rounded-lg text-sm"
                  onClick={onClose}
                >
                  <ChevronRight className="h-3 w-3 mr-2" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;