'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain, Cloud, Code, Wifi, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: Brain,
      dropdown: [
        { name: 'AI Content Generator', path: '/ai-content-generator' },
        { name: 'AI Chatbot Enterprise', path: '/ai-chatbot-enterprise' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation' },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' },
        { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite' }
      ]
    },
    {
      name: 'IT Services',
      path: '/it-services',
      icon: Cloud,
      dropdown: [
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'DevOps Solutions', path: '/devops-solutions' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'Mobile Development', path: '/mobile-development' },
        { name: 'API Development', path: '/api-development' },
        { name: 'Database Management', path: '/database-management' }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: Code,
      dropdown: [
        { name: 'AI-Powered CRM', path: '/ai-crm' },
        { name: 'Smart Analytics', path: '/smart-analytics' },
        { name: 'Automated Testing', path: '/ai-automated-testing' },
        { name: 'Content Management', path: '/ai-content-management' },
        { name: 'Email Marketing', path: '/ai-email-marketing' },
        { name: 'Social Media Manager', path: '/ai-social-media-manager' }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: Wifi,
      dropdown: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
        { name: '5G Edge Computing', path: '/5g-edge-computing' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions' }
      ]
    }
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-gray-900/95 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center text-white hover:text-purple-300 transition-colors duration-200 py-2"
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  {item.name}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-300 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center w-full text-left text-white hover:text-purple-300 transition-colors duration-200 py-2 px-3"
                  >
                    <item.icon className="w-5 h-5 mr-2" />
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-auto" />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="pl-8 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block text-gray-300 hover:text-purple-300 transition-colors duration-200 py-1 px-3"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link
                to="/contact"
                className="block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
