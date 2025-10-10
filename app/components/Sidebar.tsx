'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  X,
  Menu,
  Home,
  Users,
  Settings,
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['ai-services', 'micro-saas', 'it-services']));
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [onClose]);

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const aiServices = [
    { name: 'AI Chatbots', href: '/ai-chatbot-builder', icon: Brain },
    { name: 'Content Generation', href: '/ai-content-generation', icon: Code },
    { name: 'Data Analytics', href: '/ai-data-analytics', icon: BarChart },
    { name: 'Computer Vision', href: '/ai-computer-vision', icon: Settings },
    { name: 'Voice Solutions', href: '/ai-voice-solutions', icon: Phone }
  ];

  const itServices = [
    { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Software Development', href: '/software-development', icon: Code },
    { name: 'Data Management', href: '/data-management', icon: BarChart },
    { name: 'IT Consulting', href: '/it-consulting', icon: Settings }
  ];

  const microSaasServices = [
    { name: 'Analytics Tools', href: '/analytics-tools', icon: BarChart },
    { name: 'Productivity Apps', href: '/productivity-apps', icon: Settings },
    { name: 'Communication Tools', href: '/communication-tools', icon: Phone },
    { name: 'Project Management', href: '/project-management', icon: Clock },
    { name: 'Customer Support', href: '/customer-support', icon: Users }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Our Team', href: '/team', icon: Users },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Blog', href: '/blog', icon: Code },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          <Link to="/" className="flex items-center space-x-3 p-2 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={onClose}>
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>

          {/* AI Services */}
          <div>
            <button
              onClick={() => toggleSection('ai-services')}
              className="flex items-center justify-between w-full p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5" />
                <span>AI Services</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.has('ai-services') ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.has('ai-services') && (
              <div className="ml-8 mt-2 space-y-2">
                {aiServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="flex items-center space-x-3 p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                    onClick={onClose}
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* IT Services */}
          <div>
            <button
              onClick={() => toggleSection('it-services')}
              className="flex items-center justify-between w-full p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <Cloud className="w-5 h-5" />
                <span>IT Services</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.has('it-services') ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.has('it-services') && (
              <div className="ml-8 mt-2 space-y-2">
                {itServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="flex items-center space-x-3 p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                    onClick={onClose}
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Micro SaaS */}
          <div>
            <button
              onClick={() => toggleSection('micro-saas')}
              className="flex items-center justify-between w-full p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5" />
                <span>Micro SaaS</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.has('micro-saas') ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.has('micro-saas') && (
              <div className="ml-8 mt-2 space-y-2">
                {microSaasServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="flex items-center space-x-3 p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                    onClick={onClose}
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Company Links */}
          <div className="border-t pt-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Company</h3>
            {companyLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="flex items-center space-x-3 p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
