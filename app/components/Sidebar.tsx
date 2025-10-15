import React from 'react';
import { Link } from 'react-router-dom';
import { X, Menu, Home, Brain, Shield, Zap, Globe, BarChart3, Users, Settings } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { 
      name: 'AI Services', 
      href: '/ai-services', 
      icon: Brain,
      submenu: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'Content Generation', href: '/ai-content-generation' },
        { name: 'Customer Support', href: '/ai-customer-support' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'Marketing Automation', href: '/ai-marketing-automation' },
        { name: 'Data Analytics', href: '/ai-data-analytics' },
        { name: 'Voice Assistant', href: '/ai-voice-assistant' },
        { name: 'Workflow Automation', href: '/ai-workflow-automation' }
      ]
    },
    { 
      name: 'IT Services', 
      href: '/services', 
      icon: Shield,
      submenu: [
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'DevOps Services', href: '/devops-services' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Network Security', href: '/network-security' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'System Integration', href: '/system-integration' },
        { name: 'Software Development', href: '/software-development' }
      ]
    },
    { 
      name: 'Micro SAAS', 
      href: '/micro-saas', 
      icon: Zap,
      submenu: [
        { name: 'Content Studio', href: '/zion-content-studio' },
        { name: 'AI CRM Pro', href: '/zion-ai-crm-pro' },
        { name: 'Inventory Smart', href: '/zion-inventory-smart' },
        { name: 'Financial Analytics', href: '/ai-financial-analytics-pro' },
        { name: 'Performance Monitor', href: '/zion-performance-monitor' },
        { name: 'Marketing Automation', href: '/zion-ai-marketing-automation' },
        { name: 'Email Automation', href: '/zion-email-automation' },
        { name: 'Data Analytics', href: '/data-analytics' }
      ]
    },
    { 
      name: '5G Solutions', 
      href: '/5g-solutions', 
      icon: Globe,
      submenu: [
        { name: 'Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: 'Edge Computing', href: '/5g-edge-computing' },
        { name: 'IoT Solutions', href: '/5g-iot-solutions' },
        { name: 'Smart City Solutions', href: '/5g-smart-city-solutions' },
        { name: 'Private Networks', href: '/5g-private-networks' },
        { name: 'Mobile Applications', href: '/5g-mobile-applications' },
        { name: 'Data Analytics', href: '/5g-data-analytics' },
        { name: 'Implementation', href: '/5g-implementation' }
      ]
    },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Portfolio', href: '/portfolio', icon: BarChart3 },
    { name: 'Blog', href: '/blog', icon: Globe },
    { name: 'Tutorials', href: '/tutorials', icon: Settings },
    { name: 'Demo', href: '/demo', icon: Settings },
    { name: 'Support', href: '/support', icon: Settings },
    { name: 'FAQ', href: '/faq', icon: Settings },
    { name: 'Contact', href: '/contact', icon: Settings },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-slate-900/95 backdrop-blur-sm border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Zion Tech Group
            </span>
          </h2>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => (
            <div key={item.name}>
              <Link
                to={item.href}
                onClick={onClose}
                className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
              {item.submenu && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      onClick={onClose}
                      className="block px-3 py-1 text-sm text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded transition-colors duration-200"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Link
            to="/contact"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;