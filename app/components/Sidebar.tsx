import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, Users, Award, Package, Code, Phone, Brain, Shield, Cloud, BarChart3, Target, Calendar, Zap, Globe, Network, Mail, Settings, ChevronDown } from 'lucide-react';

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
        {
          name: 'AI Services',
          icon: <Brain className="w-4 h-4" />,
          items: [
            { name: 'AI Analytics', path: '/ai-analytics' },
            { name: 'AI Content Generation', path: '/ai-content-generation' },
            { name: 'AI Customer Support', path: '/ai-customer-support' },
            { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
            { name: 'AI Data Analytics', path: '/ai-data-analytics' },
            { name: 'AI Document Processing', path: '/ai-document-processing' },
            { name: 'AI Marketing Automation', path: '/ai-marketing-automation' },
            { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics' },
            { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
            { name: 'AI Workflow Automation', path: '/ai-workflow-automation' }
          ]
        },
        {
          name: 'IT Services',
          icon: <Settings className="w-4 h-4" />,
          items: [
            { name: 'Cloud Migration', path: '/cloud-migration' },
            { name: 'DevOps Services', path: '/devops-services' },
            { name: 'IT Consulting', path: '/it-consulting' },
            { name: 'Network Security', path: '/network-security' },
            { name: 'Software Development', path: '/software-development' },
            { name: 'System Integration', path: '/system-integration' },
            { name: 'Web Development', path: '/web-development' }
          ]
        },
        {
          name: '5G Solutions',
          icon: <Network className="w-4 h-4" />,
          items: [
            { name: '5G Solutions', path: '/5g-solutions' },
            { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
            { name: '5G Edge Computing', path: '/5g-edge-computing' },
            { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
            { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions' },
            { name: '5G Private Networks', path: '/5g-private-networks' },
            { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
            { name: '5G Data Analytics', path: '/5g-data-analytics' },
            { name: '5G Implementation', path: '/5g-implementation' }
          ]
        }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas-services',
      icon: <Package className="w-5 h-5" />,
      hasSubmenu: true,
      submenu: [
        {
          name: 'Zion Pro Solutions',
          icon: <Zap className="w-4 h-4" />,
          items: [
            { name: 'Zion AI Analytics Pro', path: '/zion-ai-analytics-pro' },
            { name: 'Zion Security Shield Pro', path: '/zion-security-shield-pro' },
            { name: 'Zion Cloud Vault Pro', path: '/zion-cloud-vault-pro' },
            { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro' },
            { name: 'Zion AI Marketing Pro', path: '/zion-ai-marketing-automation-pro' },
            { name: 'Zion AI Project Manager Pro', path: '/zion-ai-project-manager-pro' }
          ]
        },
        {
          name: 'AI-Powered Tools',
          icon: <Brain className="w-4 h-4" />,
          items: [
            { name: 'AI Email Analyzer', path: '/ai-powered-email-analyzer' },
            { name: 'Customer Sentiment Tracker', path: '/ai-customer-sentiment-tracker' },
            { name: 'Smart Expense Categorizer', path: '/smart-expense-categorizer' },
            { name: 'Smart Inventory Optimizer', path: '/smart-inventory-optimizer' }
          ]
        }
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
      icon: <Globe className="w-5 h-5" />
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
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-full pb-20">
          <nav className="space-y-2">
            {navigationItems.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.path}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                  onClick={onClose}
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
                
                {item.hasSubmenu && item.submenu && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.submenu.map((submenu, subIndex) => (
                      <div key={subIndex} className="mb-3">
                        <div className="flex items-center space-x-2 px-3 py-2 text-cyan-400 font-semibold text-sm">
                          <span>{submenu.icon}</span>
                          <span>{submenu.name}</span>
                        </div>
                        <div className="ml-4 space-y-1">
                          {submenu.items.map((subItem, subItemIndex) => (
                            <Link
                              key={subItemIndex}
                              to={subItem.path}
                              className="block px-3 py-1 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded transition-all duration-300"
                              onClick={onClose}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;