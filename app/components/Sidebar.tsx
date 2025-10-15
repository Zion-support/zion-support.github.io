import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu, Brain, Code, Wifi, Cloud, Phone, Mail, MapPin, ChevronDown, ChevronRight } from 'lucide-react';

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

  const navigationSections = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: <Menu className="w-4 h-4" /> },
        { name: 'About', href: '/about', icon: <Menu className="w-4 h-4" /> },
        { name: 'Services', href: '/services', icon: <Menu className="w-4 h-4" /> },
        { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> },
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
        { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI Email Marketing Pro', href: '/ai-email-marketing-pro' },
        { name: 'AI Project Management Pro', href: '/ai-project-management-pro' },
      ]
    },
    {
      title: 'IT Services',
      icon: <Code className="w-5 h-5" />,
      items: [
        { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure' },
        { name: 'AI Cybersecurity Suite', href: '/ai-cybersecurity-suite' },
        { name: 'Advanced Security Suite', href: '/advanced-security-suite' },
        { name: 'Database Solutions', href: '/database-solutions' },
        { name: 'Performance Monitoring', href: '/performance-monitoring' },
        { name: 'DevOps Solutions', href: '/devops-solutions' },
        { name: 'API Management', href: '/ai-api-management' },
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
        { name: '5G Private Networks', href: '/5g-private-networks' },
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
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI Email Marketing Pro', href: '/ai-email-marketing-pro' },
        { name: 'AI Project Management Pro', href: '/ai-project-management-pro' },
      ]
    }
  ];

  const isActive = (href: string) => location.pathname === href;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
                <Brain className="w-5 h-5 text-white" />
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
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-4 space-y-2">
              {navigationSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-1">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex items-center justify-between p-3 text-left text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {section.icon}
                      <span className="font-semibold">{section.title}</span>
                    </div>
                    {expandedSections.includes(section.title) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {expandedSections.includes(section.title) && (
                    <div className="ml-6 space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.href}
                          onClick={onClose}
                          className={`block p-3 text-sm rounded-lg transition-colors ${
                            isActive(item.href)
                              ? 'bg-cyan-600/20 text-cyan-400 border-l-2 border-cyan-400'
                              : 'text-gray-300 hover:text-white hover:bg-slate-800/30'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon}
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-cyan-500/20">
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-4">
                Ready to transform your business?
              </p>
              <a
                href="tel:+13024640950"
                className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;