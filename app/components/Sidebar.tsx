import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronRight, Brain, Shield, Zap, Globe, Home, User, Phone, FileText } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navigationItems = useMemo(() => [
    {
      name: 'Home',
      href: '/',
      icon: <Home className="w-5 h-5" />
    },
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-5 h-5" />,
      children: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Customer Service', href: '/ai-customer-service' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Email Automation', href: '/ai-email-automation' },
        { name: 'AI Fraud Detection', href: '/ai-fraud-detection' },
        { name: 'AI Healthcare', href: '/ai-healthcare' },
        { name: 'AI Marketing', href: '/ai-marketing' },
        { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics' },
        { name: 'AI Supply Chain', href: '/ai-supply-chain' },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-5 h-5" />,
      children: [
        { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { name: 'Zion Security Shield', href: '/zion-security-shield' },
        { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
        { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro' },
        { name: 'Zion AI Marketing Automation Pro', href: '/zion-ai-marketing-automation-pro' },
        { name: 'Zion AI Project Manager Pro', href: '/zion-ai-project-manager-pro' },
        { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro' },
        { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner' },
        { name: 'Zion AI Fraud Detector', href: '/zion-ai-fraud-detector' }
      ]
    },
    {
      name: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-5 h-5" />,
      children: [
        { name: '5G Data Analytics', href: '/5g-data-analytics' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' },
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: '5G Private Networks', href: '/5g-private-networks' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions' }
      ]
    },
    {
      name: 'IT Services',
      href: '/services',
      icon: <Shield className="w-5 h-5" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <User className="w-5 h-5" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Phone className="w-5 h-5" />
    }
  ], []);

  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = useCallback((itemName: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemName)) {
        newSet.delete(itemName);
      } else {
        newSet.add(itemName);
      }
      return newSet;
    });
  }, []);

  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-80 bg-slate-900/95 backdrop-blur-md border-r border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out lg:hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="px-6 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleExpanded(item.name)}
                        className="w-full flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <ChevronRight 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            expandedItems.has(item.name) ? 'rotate-90' : ''
                          }`} 
                        />
                      </button>
                      
                      {expandedItems.has(item.name) && (
                        <div className="ml-8 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              onClick={handleLinkClick}
                              className={`block p-2 rounded-lg text-sm transition-colors duration-300 ${
                                location.pathname === child.href
                                  ? 'text-cyan-400 bg-cyan-500/10'
                                  : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5'
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={handleLinkClick}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-300 ${
                        location.pathname === item.href
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-gray-700/50">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">
                Ready to transform your business?
              </p>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;