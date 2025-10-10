'use client';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Home, Users, Settings, Phone, BarChart, Brain, Cloud, Shield, Code, ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const navigationSections = [
    {
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Services', path: '/services', icon: Settings },
        { name: 'Contact', path: '/contact', icon: Phone },
        { name: 'Blog', path: '/blog', icon: BarChart },
        { name: 'Case Studies', path: '/case-studies', icon: BarChart }
      ]
    },
    {
      title: 'AI Services',
      items: [
        { name: 'AI Analytics', path: '/ai-analytics', icon: Brain },
        { name: 'AI Automation', path: '/ai-automation', icon: Brain },
        { name: 'AI Chatbot', path: '/ai-chatbot-builder', icon: Brain },
        { name: 'AI CRM', path: '/ai-crm', icon: Brain },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: Shield },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: BarChart },
        { name: 'AI Healthcare', path: '/ai-healthcare', icon: Brain },
        { name: 'AI Financial Services', path: '/ai-financial-services', icon: Brain }
      ]
    },
    {
      title: 'IT Services',
      items: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud },
        { name: 'API Development', path: '/api-development', icon: Code },
        { name: 'Cybersecurity', path: '/cybersecurity-solutions', icon: Shield },
        { name: 'Database Management', path: '/database-management', icon: Cloud },
        { name: 'Mobile Development', path: '/mobile-development', icon: Settings },
        { name: 'Web Development', path: '/web-development', icon: Code },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', icon: Settings },
        { name: 'IT Support', path: '/it-support', icon: Phone }
      ]
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="overflow-y-auto h-full pb-20">
          <nav className="p-4 space-y-2">
            {navigationSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <span>{section.title}</span>
                  {expandedSections.has(section.title) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                
                {expandedSections.has(section.title) && (
                  <div className="ml-4 mt-2 space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.path}
                        onClick={onClose}
                        className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                          location.pathname === item.path
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <item.icon className="w-4 h-4 mr-3" />
                        {item.name}
                      </Link>
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