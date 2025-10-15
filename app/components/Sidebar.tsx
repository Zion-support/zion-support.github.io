import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Home, 
  Users, 
  Code, 
  Brain, 
  Wifi, 
  Cloud, 
  Phone, 
  FileText, 
  BookOpen, 
  HelpCircle, 
  Shield, 
  Settings,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const location = useLocation();

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const navigationSections = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Users },
        { name: 'Services', href: '/services', icon: Code },
        { name: 'Contact', href: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI Solutions',
      icon: Brain,
      items: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro' },
        { name: 'AI Voice Assistant Enterprise', href: '/ai-voice-assistant-enterprise' },
        { name: 'AI Cybersecurity Platform', href: '/ai-cybersecurity-platform' },
        { name: 'AI E-commerce Platform', href: '/ai-ecommerce-platform' },
        { name: 'AI Healthcare Platform', href: '/ai-healthcare-platform' },
        { name: 'AI Financial Platform', href: '/ai-financial-platform' },
        { name: 'AI Education Platform', href: '/ai-education-platform' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { name: 'AI Automation Suite', href: '/ai-automation-suite' },
        { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise' },
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro' }
      ]
    },
    {
      title: '5G Technology',
      icon: Wifi,
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
      icon: Cloud,
      items: [
        { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant' },
        { name: 'AI Content Moderation Pro', href: '/ai-content-moderation-pro' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro' },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation' },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions' }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      items: [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Support', href: '/support' },
        { name: 'Documentation', href: '/documentation' },
        { name: 'Tutorials', href: '/tutorials' }
      ]
    },
    {
      title: 'Legal',
      icon: Shield,
      items: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookies Policy', href: '/cookies' }
      ]
    }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-r border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-6">
          <div className="px-4 space-y-2">
            {navigationSections.map((section) => (
              <div key={section.title}>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    {section.icon && <section.icon className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />}
                    <span className="font-medium">{section.title}</span>
                  </div>
                  {expandedSections.includes(section.title) ? (
                    <ChevronDown className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                  ) : (
                    <ChevronRight className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                  )}
                </button>
                
                {expandedSections.includes(section.title) && (
                  <div className="ml-6 mt-2 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={onClose}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors group ${
                          isActive(item.href)
                            ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                            : 'text-gray-400 hover:text-white hover:bg-slate-800/30'
                        }`}
                      >
                        <item.icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                        <span className="group-hover:text-cyan-300 transition-colors">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-700">
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Need help?</p>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
            >
              kleber@ziontechgroup.com
            </a>
            <p className="text-xs text-gray-500 mt-2">+1 302 464 0950</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;