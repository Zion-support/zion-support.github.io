import React, { useState } from 'react';
import { X, ChevronDown, ChevronRight, Home, Users, Settings, Shield, Cloud, Zap, Globe, Phone, Mail, MapPin } from 'lucide-react';

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
    { href: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { href: '/about', label: 'About', icon: <Users className="w-5 h-5" /> },
    { 
      label: 'Services', 
      icon: <Settings className="w-5 h-5" />,
      children: [
        { href: '/services', label: 'All Services' },
        { href: '/ai-services', label: 'AI Services' },
        { href: '/it-services', label: 'IT Services' },
        { href: '/cloud-infrastructure', label: 'Cloud Infrastructure' },
        { href: '/cybersecurity', label: 'Cybersecurity' },
        { href: '/digital-transformation', label: 'Digital Transformation' },
      ]
    },
    { 
      label: 'AI Solutions', 
      icon: <Zap className="w-5 h-5" />,
      children: [
        { href: '/ai-solutions', label: 'All AI Solutions' },
        { href: '/ai-content-generator', label: 'AI Content Generator' },
        { href: '/ai-analytics-dashboard', label: 'AI Analytics Dashboard' },
        { href: '/ai-customer-support', label: 'AI Customer Support' },
        { href: '/ai-cybersecurity-monitor', label: 'AI Cybersecurity Monitor' },
        { href: '/ai-automation-platform', label: 'AI Workflow Automation' },
        { href: '/ai-business-intelligence', label: 'AI Business Intelligence' },
      ]
    },
    { 
      label: 'IT Solutions', 
      icon: <Settings className="w-5 h-5" />,
      children: [
        { href: '/it-solutions', label: 'All IT Solutions' },
        { href: '/cloud-solutions', label: 'Cloud Solutions' },
        { href: '/5g-solutions', label: '5G Solutions' },
        { href: '/network-security', label: 'Network Security' },
        { href: '/data-management', label: 'Data Management' },
        { href: '/helpdesk-support', label: 'Helpdesk Support' },
      ]
    },
    { 
      label: 'Micro SaaS', 
      icon: <Cloud className="w-5 h-5" />,
      children: [
        { href: '/micro-saas-solutions', label: 'All Micro SaaS' },
        { href: '/micro-saas', label: 'Micro SaaS Development' },
      ]
    },
    { href: '/pricing', label: 'Pricing', icon: <Globe className="w-5 h-5" /> },
    { href: '/blog', label: 'Blog', icon: <Globe className="w-5 h-5" /> },
    { href: '/careers', label: 'Careers', icon: <Users className="w-5 h-5" /> },
    { href: '/contact', label: 'Contact', icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
          <div className="fixed top-0 left-0 h-full w-80 bg-slate-800 overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Contact Info */}
              <div className="mb-8 p-4 bg-slate-700 rounded-lg">
                <h3 className="text-sm font-semibold text-blue-400 mb-3">Contact Information</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-blue-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-blue-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                    <span>Middletown DE 19709</span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-slate-700 p-3 rounded-lg transition-colors"
                        onClick={onClose}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </a>
                    ) : (
                      <div>
                        <button
                          onClick={() => toggleSection(item.label)}
                          className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-slate-700 p-3 rounded-lg transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon}
                            <span>{item.label}</span>
                          </div>
                          {expandedSections.includes(item.label) ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>
                        {expandedSections.includes(item.label) && item.children && (
                          <div className="ml-6 mt-2 space-y-1">
                            {item.children.map((child, childIndex) => (
                              <a
                                key={childIndex}
                                href={child.href}
                                className="block text-gray-400 hover:text-white hover:bg-slate-700 p-2 rounded transition-colors"
                                onClick={onClose}
                              >
                                {child.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center block"
                  onClick={onClose}
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
