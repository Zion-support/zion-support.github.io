import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Home, Brain, Shield, Zap, Globe, BarChart3, Users, Settings, ChevronDown, ChevronRight, Phone, Mail, MapPin, Star, Award, Clock } from 'lucide-react';

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

  const mainNavigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Portfolio', href: '/portfolio', icon: Award },
    { name: 'Blog', href: '/blog', icon: BarChart3 },
    { name: 'Contact', href: '/contact', icon: Settings },
  ];

  const serviceSections = [
    {
      title: 'AI Services',
      icon: Brain,
      href: '/ai-services',
      services: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Marketing Automation', href: '/ai-marketing-automation' },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' }
      ]
    },
    {
      title: 'IT Services',
      icon: Shield,
      href: '/services',
      services: [
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'DevOps Services', href: '/devops-services' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Network Security', href: '/network-security' },
        { name: 'Software Development', href: '/software-development' },
        { name: 'System Integration', href: '/system-integration' },
        { name: 'Web Development', href: '/web-development' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      href: '/micro-saas',
      services: [
        { name: 'Zion Content Studio', href: '/zion-content-studio' },
        { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro' },
        { name: 'Zion Inventory Smart', href: '/zion-inventory-smart' },
        { name: 'AI Financial Analytics', href: '/ai-financial-analytics-pro' },
        { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
        { name: 'Zion AI Marketing', href: '/zion-ai-marketing-automation' }
      ]
    },
    {
      title: '5G Solutions',
      icon: Globe,
      href: '/5g-solutions',
      services: [
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { name: '5G Private Networks', href: '/5g-private-networks' },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications' }
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
      <div className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-r border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 cyber-grid-advanced`}>
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <h2 className="text-xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 holographic-text">
              Zion Tech Group
            </span>
          </h2>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Main Navigation */}
          <nav className="p-4 space-y-2">
            <h3 className="text-sm font-semibold text-cyan-400 mb-3 px-3">Main Navigation</h3>
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={onClose}
                className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors duration-200 group"
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Service Sections */}
          <nav className="p-4 space-y-2">
            <h3 className="text-sm font-semibold text-cyan-400 mb-3 px-3">Our Services</h3>
            {serviceSections.map((section) => {
              const isExpanded = expandedSections.includes(section.title);
              const IconComponent = section.icon;
              
              return (
                <div key={section.title}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex items-center justify-between px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>{section.title}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {isExpanded && (
                    <div className="ml-6 mt-2 space-y-1">
                      <Link
                        to={section.href}
                        onClick={onClose}
                        className="block px-3 py-1 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 rounded transition-colors duration-200"
                      >
                        View All {section.title}
                      </Link>
                      {section.services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={onClose}
                          className="block px-3 py-1 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 rounded transition-colors duration-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Contact Information */}
          <div className="p-4 border-t border-cyan-500/20">
            <h3 className="text-sm font-semibold text-cyan-400 mb-3 px-3">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 px-3 py-2 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3 px-3 py-2 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-cyan-500/20">
          <Link
            to="/contact"
            className="w-full cyber-button text-center py-3 px-4 text-sm font-semibold flex items-center justify-center space-x-2"
            onClick={onClose}
          >
            <Star className="w-4 h-4" />
            <span>Get Started Today</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;