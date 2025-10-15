import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Home, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Star,
  Award,
  Clock,
  ExternalLink
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

  const mainNavigation = [
    { name: 'Home', href: '/', icon: Home, color: 'from-blue-500 to-cyan-500' },
    { name: 'About', href: '/about', icon: Users, color: 'from-green-500 to-emerald-500' },
    { name: 'Contact', href: '/contact', icon: Phone, color: 'from-purple-500 to-pink-500' },
  ];

  const serviceSections = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
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
      color: 'from-green-500 to-emerald-500',
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
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Zion Content Studio', href: '/zion-content-studio' },
        { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro' },
        { name: 'Zion Inventory Smart', href: '/zion-inventory-smart' },
        { name: 'AI Financial Analytics Pro', href: '/ai-financial-analytics-pro' },
        { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
        { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation' }
      ]
    },
    {
      title: '5G Solutions',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
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

  const companyPages = [
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Support', href: '/support' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const isActive = (path: string) => location.pathname === path;

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
      <div className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-r border-cyan-500/30 z-50 transform transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 shadow-2xl shadow-cyan-500/10`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-cyan-500/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Zion Tech Group
              </h2>
              <p className="text-xs text-gray-400">Advanced AI & IT Solutions</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Main Navigation */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Main</h3>
            <div className="space-y-1">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                  }`}
                >
                  <div className={`w-5 h-5 bg-gradient-to-r ${item.color} rounded flex items-center justify-center`}>
                    <item.icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Service Sections */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Services</h3>
            <div className="space-y-1">
              {serviceSections.map((section) => (
                <div key={section.title}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex items-center justify-between px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-5 h-5 bg-gradient-to-r ${section.color} rounded flex items-center justify-center`}>
                        <section.icon className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-medium">{section.title}</span>
                    </div>
                    {expandedSections.includes(section.title) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {expandedSections.includes(section.title) && (
                    <div className="ml-8 mt-1 space-y-1">
                      {section.services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={onClose}
                          className={`block px-3 py-2 text-sm rounded-lg transition-all duration-300 ${
                            isActive(service.href)
                              ? 'text-cyan-400 bg-cyan-500/10'
                              : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                          }`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Company Pages */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Company</h3>
            <div className="space-y-1">
              {companyPages.map((page) => (
                <Link
                  key={page.name}
                  to={page.href}
                  onClick={onClose}
                  className={`block px-3 py-2 text-sm rounded-lg transition-all duration-300 ${
                    isActive(page.href)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                  }`}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="p-4 border-t border-cyan-500/30">
          <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Contact Info</h3>
          <div className="space-y-3">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">{contactInfo.phone}</span>
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">{contactInfo.email}</span>
            </a>
            <div className="flex items-start space-x-3 text-gray-300">
              <MapPin className="w-4 h-4 mt-0.5" />
              <span className="text-sm">{contactInfo.address}</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="p-4 border-t border-cyan-500/30">
          <Link
            to="/contact"
            onClick={onClose}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-cyan-500/25"
          >
            <span>Get Started Today</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;