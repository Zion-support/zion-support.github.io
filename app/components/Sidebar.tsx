import React from 'react';
import { Link } from 'react-router-dom';
import { X, Brain, Shield, Zap, Globe, Home, Users, Code, Mail, ChevronDown, ChevronRight, BarChart3, Settings, HelpCircle, BookOpen, Play, Phone } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const mainNavigation = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Users className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-5 h-5" /> },
  ];

  const serviceCategories = [
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-5 h-5" />,
      subItems: [
        { name: 'AI Analytics', path: '/ai-analytics' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Marketing Automation', path: '/ai-marketing-automation' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-5 h-5" />,
      subItems: [
        { name: 'Zion Analytics Pro', path: '/zion-analytics-pro' },
        { name: 'Zion Security Shield', path: '/zion-security-shield' },
        { name: 'Zion Cloud Vault', path: '/zion-cloud-vault' },
        { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro' },
        { name: 'Zion E-commerce Suite', path: '/zion-ecommerce-suite' },
        { name: 'Zion AI Video Generator', path: '/zion-ai-video-generator' },
        { name: 'Zion AI Marketing Automation', path: '/zion-ai-marketing-automation' },
        { name: 'Zion AI Project Manager Pro', path: '/zion-ai-project-manager-pro' }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-5 h-5" />,
      subItems: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
        { name: '5G Edge Computing', path: '/5g-edge-computing' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
        { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions' },
        { name: '5G Private Networks', path: '/5g-private-networks' },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
        { name: '5G Data Analytics', path: '/5g-data-analytics' },
        { name: '5G Implementation', path: '/5g-implementation' }
      ]
    },
    {
      name: 'IT Services',
      path: '/services',
      icon: <Shield className="w-5 h-5" />,
      subItems: [
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'Web Development', path: '/web-development' },
        { name: 'DevOps', path: '/devops' },
        { name: 'IT Consulting', path: '/it-consulting' },
        { name: 'Network Security', path: '/network-security' },
        { name: 'Custom Software', path: '/custom-software' },
        { name: 'System Integration', path: '/system-integration' }
      ]
    }
  ];

  const supportLinks = [
    { name: 'Demo', path: '/demo', icon: <Play className="w-5 h-5" /> },
    { name: 'Tutorials', path: '/tutorials', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Support', path: '/support', icon: <HelpCircle className="w-5 h-5" /> },
    { name: 'Consultation', path: '/consultation', icon: <Phone className="w-5 h-5" /> }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Accessibility', path: '/accessibility' }
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-96 bg-slate-900/95 backdrop-blur-sm border-l border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto">
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
        
        <div className="p-6 space-y-8">
          {/* Main Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-4">Main</h3>
            <ul className="space-y-2">
              {mainNavigation.map((item) => (
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
          </div>

          {/* Service Categories */}
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-4">Services</h3>
            <div className="space-y-2">
              {serviceCategories.map((category) => (
                <div key={category.name} className="space-y-1">
                  <Link
                    to={category.path}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                    onClick={onClose}
                  >
                    {category.icon}
                    <span className="font-medium flex-1">{category.name}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  
                  {/* Sub-items */}
                  <div className="ml-8 space-y-1">
                    {category.subItems.slice(0, 4).map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-lg transition-colors"
                        onClick={onClose}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                    {category.subItems.length > 4 && (
                      <Link
                        to={category.path}
                        className="block px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium"
                        onClick={onClose}
                      >
                        View All {category.name} →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((item) => (
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
          </div>

          {/* Contact Information */}
          <div className="pt-6 border-t border-cyan-500/20">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="pt-4 border-t border-cyan-500/20">
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;