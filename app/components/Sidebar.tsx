import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Brain, 
  Code, 
  Cloud, 
  Wifi, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight,
  Home,
  Users,
  Settings,
  BarChart3,
  Zap
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navigationSections = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
        { name: 'About', href: '/about', icon: <Users className="w-5 h-5" /> },
        { name: 'Services', href: '/services', icon: <Settings className="w-5 h-5" /> },
        { name: 'Contact', href: '/contact', icon: <Phone className="w-5 h-5" /> }
      ]
    },
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      items: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { name: 'AI Automation Suite', href: '/ai-automation-suite' },
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro' },
        { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Code className="w-5 h-5" />,
      items: [
        { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure' },
        { name: 'API Management', href: '/ai-api-management' },
        { name: 'Database Solutions', href: '/database-solutions' },
        { name: 'Advanced Security Suite', href: '/advanced-security-suite' },
        { name: 'Performance Monitoring', href: '/performance-monitoring' },
        { name: 'DevOps Solutions', href: '/devops-solutions' }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Wifi className="w-5 h-5" />,
      items: [
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' },
        { name: '5G Private Networks', href: '/5g-private-networks' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Cloud className="w-5 h-5" />,
      items: [
        { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant' },
        { name: 'AI Content Moderation Pro', href: '/ai-content-moderation-pro' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro' },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation' },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions' },
        { name: 'AI Customer Insights Pro', href: '/ai-customer-insights-pro' },
        { name: 'AI Project Management Pro', href: '/ai-project-management-pro' },
        { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager-pro' },
        { name: 'AI Email Marketing Pro', href: '/ai-email-marketing-pro' },
        { name: 'AI Inventory Management Pro', href: '/ai-inventory-management-pro' }
      ]
    }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-r border-cyan-500/20 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Contact Info */}
          <div className="p-6 border-b border-cyan-500/20">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="space-y-8">
              {navigationSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <div className="flex items-center space-x-2 px-6 mb-4">
                    {section.icon && <div className="text-cyan-400">{section.icon}</div>}
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                      {section.title}
                    </h3>
                  </div>
                  <div className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.href}
                        className={`flex items-center space-x-3 px-6 py-3 text-sm transition-colors duration-200 ${
                          isActive(item.href)
                            ? 'bg-cyan-600/20 text-cyan-400 border-r-2 border-cyan-400'
                            : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                        }`}
                        onClick={onClose}
                      >
                        {item.icon && <div className="text-gray-400">{item.icon}</div>}
                        <span className="flex-1">{item.name}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-cyan-500/20">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs text-gray-400">
                © 2024 Zion Tech Group<br />
                Advanced AI & IT Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;