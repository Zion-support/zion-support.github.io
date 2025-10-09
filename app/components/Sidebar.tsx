'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Brain, 
  Cloud, 
  Code, 
  Zap, 
  Users, 
  BookOpen, 
  HelpCircle,
  Star,
  ArrowRight
} from 'lucide-react';

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

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-500',
      services: [
        { name: 'AI Services', path: '/ai-services', featured: true },
        { name: 'AI Marketing', path: '/ai-marketing', featured: true },
        { name: 'AI Automation', path: '/ai-automation', featured: true },
        { name: 'AI Healthcare', path: '/ai-healthcare' },
        { name: 'AI Fintech', path: '/ai-fintech' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-500',
      services: [
        { name: 'IT Services', path: '/it-services', featured: true },
        { name: 'IT Infrastructure', path: '/it-infrastructure', featured: true },
        { name: 'Cloud Services', path: '/cloud-services', featured: true },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'DevOps', path: '/devops' },
        { name: 'Database Services', path: '/database' },
        { name: 'Network Services', path: '/networking' },
        { name: 'Compliance', path: '/compliance' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-500',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas', featured: true },
        { name: 'Business Apps', path: '/business-apps' },
        { name: 'Developer Tools', path: '/developer-tools' },
        { name: 'Marketing Tools', path: '/marketing-tools' },
        { name: 'Productivity', path: '/productivity' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Zap,
      color: 'text-orange-500',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', featured: true },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'Business Intelligence', path: '/business-intelligence' },
        { name: 'Robotics', path: '/robotics' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about', icon: Users },
    { name: 'Case Studies', path: '/case-studies', icon: BookOpen },
    { name: 'Blog', path: '/blog', icon: BookOpen },
    { name: 'Contact', path: '/contact', icon: HelpCircle }
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
      <div className="fixed left-0 top-0 h-full w-80 bg-slate-900 text-white z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Quick Links */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    onClick={onClose}
                  >
                    <link.icon className="w-4 h-4 text-cyan-400" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Services
              </h3>
              <div className="space-y-2">
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <button
                      onClick={() => toggleSection(category.title)}
                      className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <category.icon className={`w-4 h-4 ${category.color}`} />
                        <span className="font-medium">{category.title}</span>
                      </div>
                      <ChevronRight 
                        className={`w-4 h-4 transition-transform ${
                          expandedSections.includes(category.title) ? 'rotate-90' : ''
                        }`} 
                      />
                    </button>
                    
                    {expandedSections.includes(category.title) && (
                      <div className="ml-6 mt-2 space-y-1">
                        {category.services.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.path}
                            className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors group"
                            onClick={onClose}
                          >
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="flex items-center">
                              {service.name}
                              {service.featured && <Star className="w-3 h-3 ml-1 text-yellow-400" />}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 p-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg">
              <h4 className="font-semibold mb-2">Ready to Transform Your Business?</h4>
              <p className="text-sm text-cyan-100 mb-4">
                Get started with our AI solutions today
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-cyan-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                onClick={onClose}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-700">
            <div className="text-sm text-gray-400">
              <p>© 2024 Zion Tech Group</p>
              <p className="mt-1">Empowering businesses with AI innovation</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;