'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Brain, Cloud, Cpu, Target, BarChart, Users, Globe, Shield, Zap, Code, Phone, Mail, MapPin } from 'lucide-react';

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

  const navigationSections = [
    {
      title: 'AI Services',
      icon: Brain,
      items: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'AI Marketing', href: '/ai-marketing' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Healthcare', href: '/ai-healthcare' },
        { name: 'AI Fintech', href: '/ai-fintech' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation' },
        { name: 'AI Data Visualization', href: '/ai-data-visualization' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      items: [
        { name: 'IT Services', href: '/it-services' },
        { name: 'IT Infrastructure', href: '/it-infrastructure' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'DevOps & CI/CD', href: '/devops' },
        { name: 'Database Services', href: '/database' },
        { name: 'Cloud Services', href: '/cloud-services' },
        { name: 'Networking', href: '/networking' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Cpu,
      items: [
        { name: 'Micro SAAS Solutions', href: '/micro-saas' },
        { name: 'Business Apps', href: '/business-apps' },
        { name: 'Productivity Tools', href: '/productivity' },
        { name: 'Marketing Tools', href: '/marketing-tools' },
        { name: 'Developer Tools', href: '/developer-tools' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Zap,
      items: [
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'Robotics', href: '/robotics' },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing' },
        { name: 'Blockchain & Web3', href: '/blockchain-web3' },
        { name: 'Business Intelligence', href: '/business-intelligence' }
      ]
    },
    {
      title: 'Company',
      icon: Users,
      items: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Careers', href: '/careers' },
        { name: 'News', href: '/news' }
      ]
    },
    {
      title: 'Resources',
      icon: BarChart,
      items: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api-docs' },
        { name: 'Support Center', href: '/support' },
        { name: 'System Status', href: '/status' },
        { name: 'Blog', href: '/blog' }
      ]
    }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-80 bg-slate-900 border-r border-cyan-500/20 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="space-y-2 px-4">
              {navigationSections.map((section) => (
                <div key={section.title}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <section.icon className="w-5 h-5" />
                      <span className="font-medium">{section.title}</span>
                    </div>
                    <ChevronRight 
                      className={`w-4 h-4 transition-transform ${
                        expandedSections.includes(section.title) ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                  
                  {expandedSections.includes(section.title) && (
                    <div className="ml-8 mt-2 space-y-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={onClose}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-cyan-500/20">
            <div className="space-y-4">
              <div className="text-sm text-gray-400">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-semibold text-center transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;