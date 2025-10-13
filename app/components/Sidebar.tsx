import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Zap, Database, Settings, Monitor, Lock, Server, Cpu, Network, HardDrive, Phone, Laptop, Headphones, Package, Heart, Receipt, Calendar, Clock, Award, Sparkles } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationItems = [
    {
      name: 'Home',
      path: '/',
      icon: <Globe className="w-5 h-5" />
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
            { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'AI Content Generation', path: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
            { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Bot className="w-4 h-4" /> },
            { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
            { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
            { name: 'AI Marketing Automation', path: '/ai-marketing-automation', icon: <Target className="w-4 h-4" /> }
          ]
        },
        {
          name: 'IT Services',
          icon: <Monitor className="w-4 h-4" />,
          items: [
            { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
            { name: 'DevOps Services', path: '/devops-services', icon: <Code className="w-4 h-4" /> },
            { name: 'IT Consulting', path: '/it-consulting', icon: <Users className="w-4 h-4" /> },
            { name: 'Network Security', path: '/network-security', icon: <Shield className="w-4 h-4" /> },
            { name: 'Web Development', path: '/web-development', icon: <Globe className="w-4 h-4" /> }
          ]
        },
        {
          name: '5G Solutions',
          icon: <Wifi className="w-4 h-4" />,
          items: [
            { name: '5G Solutions', path: '/5g-solutions', icon: <Wifi className="w-4 h-4" /> },
            { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Network className="w-4 h-4" /> },
            { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cloud className="w-4 h-4" /> },
            { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Smartphone className="w-4 h-4" /> }
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
          name: 'AI-Powered Tools',
          icon: <Brain className="w-4 h-4" />,
          items: [
            { name: 'AI Email Analyzer', path: '/ai-powered-email-analyzer', icon: <Mail className="w-4 h-4" /> },
            { name: 'Customer Sentiment Tracker', path: '/ai-customer-sentiment-tracker', icon: <Heart className="w-4 h-4" /> },
            { name: 'Smart Expense Categorizer', path: '/smart-expense-categorizer', icon: <Receipt className="w-4 h-4" /> },
            { name: 'Smart Inventory Optimizer', path: '/smart-inventory-optimizer', icon: <Package className="w-4 h-4" /> }
          ]
        },
        {
          name: 'Zion Pro Solutions',
          icon: <Sparkles className="w-4 h-4" />,
          items: [
            { name: 'Zion AI Analytics Pro', path: '/zion-ai-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'Zion Security Shield Pro', path: '/zion-security-shield-pro', icon: <Shield className="w-4 h-4" /> },
            { name: 'Zion Cloud Vault Pro', path: '/zion-cloud-vault-pro', icon: <Cloud className="w-4 h-4" /> },
            { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro', icon: <Users className="w-4 h-4" /> }
          ]
        },
        {
          name: 'Business Tools',
          icon: <BarChart3 className="w-4 h-4" />,
          items: [
            { name: 'Project Management Tool', path: '/project-management-tool', icon: <Award className="w-4 h-4" /> },
            { name: 'Customer Relationship Manager', path: '/customer-relationship-manager', icon: <Users className="w-4 h-4" /> },
            { name: 'Inventory Management System', path: '/inventory-management-system', icon: <Package className="w-4 h-4" /> },
            { name: 'Financial Reporting Tool', path: '/financial-reporting-tool', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'Employee Time Tracker', path: '/employee-time-tracker', icon: <Clock className="w-4 h-4" /> },
            { name: 'Social Media Scheduler', path: '/social-media-scheduler', icon: <Globe className="w-4 h-4" /> },
            { name: 'Email Marketing Platform', path: '/email-marketing-platform', icon: <Mail className="w-4 h-4" /> },
            { name: 'Website Analytics Tool', path: '/website-analytics-tool', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'Task Automation Workflow', path: '/task-automation-workflow', icon: <Zap className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: <FileText className="w-5 h-5" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-5 h-5" />
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <h2 className="text-lg font-semibold text-white">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4 space-y-2">
          {navigationItems.map((item, index) => (
            <div key={index}>
              {item.hasSubmenu ? (
                <div>
                  <button
                    onClick={() => toggleSection(item.name)}
                    className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                    {expandedSections.includes(item.name) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {expandedSections.includes(item.name) && item.submenu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-4">
                          <div className="flex items-center space-x-2 text-cyan-400 text-sm font-medium mb-2">
                            <span>{section.icon}</span>
                            <span>{section.name}</span>
                          </div>
                          <div className="space-y-1">
                            {section.items.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.path}
                                onClick={onClose}
                                className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors"
                              >
                                <span>{subItem.icon}</span>
                                <span>{subItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              )}
            </div>
          ))}
          
          {/* Contact CTA */}
          <div className="pt-4 border-t border-cyan-500/20 mt-4">
            <Link
              to="/contact"
              onClick={onClose}
              className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;