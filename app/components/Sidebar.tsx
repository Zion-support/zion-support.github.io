import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu, Home, Brain, Shield, Zap, Globe, BarChart3, Users, Settings, ChevronDown, ChevronRight, Mail, Phone, MapPin, Star, Award, BookOpen, HelpCircle, Play, DollarSign } from 'lucide-react';

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
      name: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Portfolio', href: '/portfolio', icon: BarChart3 },
        { name: 'Blog', href: '/blog', icon: BookOpen },
        { name: 'Case Studies', href: '/case-studies', icon: Award },
      ]
    },
    {
      name: 'AI Services',
      items: [
        { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart3 },
        { name: 'AI Content Generation', href: '/ai-content-generation', icon: Brain },
        { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
        { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart3 },
        { name: 'AI Marketing Automation', href: '/ai-marketing-automation', icon: Zap },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Brain },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap },
      ]
    },
    {
      name: 'IT Services',
      items: [
        { name: 'Cloud Migration', href: '/cloud-migration', icon: Globe },
        { name: 'DevOps Services', href: '/devops-services', icon: Settings },
        { name: 'IT Consulting', href: '/it-consulting', icon: Users },
        { name: 'Network Security', href: '/network-security', icon: Shield },
        { name: 'Software Development', href: '/software-development', icon: Settings },
        { name: 'System Integration', href: '/system-integration', icon: Settings },
        { name: 'Web Development', href: '/web-development', icon: Globe },
        { name: 'Managed Services', href: '/managed-services', icon: Settings },
      ]
    },
    {
      name: 'Micro SAAS',
      items: [
        { name: 'Zion Content Studio', href: '/zion-content-studio', icon: Brain },
        { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro', icon: Users },
        { name: 'Zion Inventory Smart', href: '/zion-inventory-smart', icon: BarChart3 },
        { name: 'AI Financial Analytics', href: '/ai-financial-analytics-pro', icon: BarChart3 },
        { name: 'Zion Performance Monitor', href: '/zion-performance-monitor', icon: Users },
        { name: 'AI Marketing Automation', href: '/zion-ai-marketing-automation', icon: Zap },
        { name: 'Zion AI Video Generator', href: '/zion-ai-video-generator', icon: Brain },
        { name: 'Zion AI Invoice Generator', href: '/zion-ai-invoice-generator', icon: Settings },
      ]
    },
    {
      name: '5G Solutions',
      items: [
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', icon: Globe },
        { name: '5G Edge Computing', href: '/5g-edge-computing', icon: Globe },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: Globe },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', icon: Globe },
        { name: '5G Private Networks', href: '/5g-private-networks', icon: Globe },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications', icon: Globe },
        { name: '5G Data Analytics', href: '/5g-data-analytics', icon: BarChart3 },
        { name: '5G Implementation', href: '/5g-implementation', icon: Settings },
      ]
    },
    {
      name: 'Resources',
      items: [
        { name: 'Support', href: '/support', icon: HelpCircle },
        { name: 'Documentation', href: '/docs', icon: BookOpen },
        { name: 'Tutorials', href: '/tutorials', icon: BookOpen },
        { name: 'FAQ', href: '/faq', icon: HelpCircle },
        { name: 'Demo', href: '/demo', icon: Play },
        { name: 'Pricing', href: '/pricing', icon: DollarSign },
      ]
    }
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
      <div className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 overflow-y-auto`}>
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

        <nav className="p-4 space-y-4">
          {navigationSections.map((section) => (
            <div key={section.name} className="space-y-2">
              <button
                onClick={() => toggleSection(section.name)}
                className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                <span className="font-semibold text-sm uppercase tracking-wide">{section.name}</span>
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
                      key={item.name}
                      to={item.href}
                      onClick={onClose}
                      className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-colors duration-200"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Information */}
        <div className="p-4 border-t border-white/10 mt-auto">
          <div className="space-y-3 mb-4">
            <div className="flex items-center space-x-3 text-gray-300">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">+1 302 464 0950</span>
            </div>
            <div className="flex items-start space-x-3 text-gray-300">
              <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
              <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
          
          <Link
            to="/contact"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Star className="w-4 h-4" />
            <span>Get Started</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;