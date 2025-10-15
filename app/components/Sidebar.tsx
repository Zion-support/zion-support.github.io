import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Brain, Shield, Zap, Globe, Home, Mail, Phone, ChevronDown, ChevronRight, BarChart3, Code, Users, Database, Settings, Package, Network, Cpu, Building, Smartphone } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationSections = [
    {
      name: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Users },
        { name: 'Contact', href: '/contact', icon: Mail },
        { name: 'Blog', href: '/blog', icon: BarChart3 },
        { name: 'Support', href: '/support', icon: Phone },
        { name: 'Demo', href: '/demo', icon: Globe },
        { name: 'Tutorials', href: '/tutorials', icon: Code },
      ]
    },
    {
      name: 'AI Services',
      items: [
        { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart3 },
        { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code },
        { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
        { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
        { name: 'AI Marketing Automation', href: '/ai-marketing-automation', icon: Zap },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Phone },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings },
      ]
    },
    {
      name: 'IT Services',
      items: [
        { name: 'Cloud Migration', href: '/cloud-migration', icon: Globe },
        { name: 'DevOps Services', href: '/devops-services', icon: Code },
        { name: 'IT Consulting', href: '/it-consulting', icon: Users },
        { name: 'Network Security', href: '/network-security', icon: Shield },
        { name: 'Software Development', href: '/software-development', icon: Code },
        { name: 'System Integration', href: '/system-integration', icon: Settings },
        { name: 'Web Development', href: '/web-development', icon: Globe },
      ]
    },
    {
      name: 'Micro SAAS',
      items: [
        { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro', icon: Users },
        { name: 'Zion AI Video Generator', href: '/zion-ai-video-generator', icon: Package },
        { name: 'Zion AI Financial Analytics Pro', href: '/zion-ai-financial-analytics-pro', icon: BarChart3 },
        { name: 'Zion AI Cybersecurity Pro', href: '/zion-ai-cybersecurity-pro', icon: Shield },
        { name: 'Zion AI Marketing Automation Pro', href: '/zion-ai-marketing-automation-pro', icon: Zap },
        { name: 'Zion AI Project Manager Pro', href: '/zion-ai-project-manager-pro', icon: Settings },
      ]
    },
    {
      name: '5G Solutions',
      items: [
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', icon: Network },
        { name: '5G Edge Computing', href: '/5g-edge-computing', icon: Cpu },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: Globe },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', icon: Building },
        { name: '5G Private Networks', href: '/5g-private-networks', icon: Shield },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications', icon: Smartphone },
        { name: '5G Data Analytics', href: '/5g-data-analytics', icon: BarChart3 },
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 space-y-2">
          {navigationSections.map((section) => (
            <div key={section.name}>
              <button
                onClick={() => toggleSection(section.name)}
                className="w-full flex items-center justify-between p-3 rounded-lg text-gray-300 hover:bg-slate-800/50 hover:text-white transition-colors"
              >
                <span className="font-semibold">{section.name}</span>
                {expandedSections.includes(section.name) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {expandedSections.includes(section.name) && (
                <div className="ml-4 space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={onClose}
                      className="flex items-center space-x-3 p-2 rounded-lg text-gray-400 hover:bg-slate-800/50 hover:text-white transition-colors"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
