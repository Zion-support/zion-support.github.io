import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, Users, Settings, BarChart3, Shield, Cloud, Code, Brain, Zap, Database, Star, ArrowRight, Phone, Mail, MapPin, ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: '5G Solutions', href: '/5g-solutions', icon: Zap },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Cloud },
    { name: 'Blog', href: '/blog', icon: Code },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart3 },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
    { name: 'AI Marketing Automation', href: '/ai-marketing-automation', icon: Zap }
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
    { name: 'DevOps Services', href: '/devops', icon: Settings },
    { name: 'IT Consulting', href: '/it-consulting', icon: Users },
    { name: 'Network Security', href: '/network-security', icon: Shield },
    { name: 'Software Development', href: '/custom-software', icon: Code },
    { name: 'Web Development', href: '/web-development', icon: Code }
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: Phone, text: '+1 (555) 012-3456', href: 'tel:+1-555-0123' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-6">
            <nav className="space-y-6">
              {/* Main Navigation */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Main Menu
                </h3>
                <ul className="space-y-2">
                  {navigationItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Services */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  AI Services
                </h3>
                <ul className="space-y-2">
                  {aiServices.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        onClick={onClose}
                        className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <service.icon className="w-4 h-4 mr-3" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IT Services */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  IT Services
                </h3>
                <ul className="space-y-2">
                  {itServices.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        onClick={onClose}
                        className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <service.icon className="w-4 h-4 mr-3" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="p-6 border-t border-gray-700">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Contact Us
            </h3>
            <div className="space-y-2">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <contact.icon className="w-4 h-4 mr-3" />
                  {contact.text}
                </a>
              ))}
            </div>
            
            <div className="mt-4">
              <Link
                to="/contact"
                onClick={onClose}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;