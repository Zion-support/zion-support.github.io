'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain, Code, Shield, Zap } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI solutions',
      submenu: [
        { title: 'AI Content Generator', href: '/ai-content-generator' },
        { title: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { title: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { title: 'AI Email Assistant', href: '/ai-email-assistant' },
        { title: 'AI Voice Assistant', href: '/ai-voice-assistant' },
        { title: 'AI Automation', href: '/ai-automation' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Code className="w-4 h-4" />,
      description: 'Comprehensive IT solutions',
      submenu: [
        { title: 'Web Development', href: '/web-development' },
        { title: 'Mobile Development', href: '/mobile-development' },
        { title: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { title: 'DevOps & CI/CD', href: '/devops-cicd' },
        { title: 'Database Management', href: '/database' }
      ]
    },
    {
      title: 'Security',
      href: '/security',
      icon: <Shield className="w-4 h-4" />,
      description: 'Cybersecurity solutions',
      submenu: [
        { title: 'Cybersecurity Audit', href: '/cybersecurity-audit' },
        { title: 'Penetration Testing', href: '/penetration-testing' },
        { title: 'Security Monitoring', href: '/security-monitoring' },
        { title: 'Compliance', href: '/compliance' }
      ]
    }
  ];

  const mainNavItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Services', href: '/services' },
    { title: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-gray-900/90 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.title}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Services
                <Zap className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg z-50">
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-6">
                      {services.map((service) => (
                        <div key={service.title} className="group">
                          <Link
                            to={service.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-shrink-0 text-blue-600">
                              {service.icon}
                            </div>
                            <div>
                              <h3 className="text-sm font-semibold text-gray-900">
                                {service.title}
                              </h3>
                              <p className="text-xs text-gray-500 mt-1">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                          <div className="ml-8 mt-2 space-y-1">
                            {service.submenu.slice(0, 3).map((subItem) => (
                              <Link
                                key={subItem.title}
                                to={subItem.href}
                                className="block text-xs text-gray-600 hover:text-blue-600 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="pt-4">
                <h3 className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-2 px-3">
                  Services
                </h3>
                {services.map((service) => (
                  <div key={service.title} className="mb-4">
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                    <div className="ml-4 space-y-1">
                      {service.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          className="text-gray-400 hover:text-white block px-3 py-1 rounded-md text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
