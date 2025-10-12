'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Brain, Server, Cloud, Zap, Users, FileText } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    {
      title: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      submenu: [
        { title: 'AI Content Generator', path: '/ai-content-generator' },
        { title: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
        { title: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { title: 'AI Email Assistant', path: '/ai-email-assistant' },
        { title: 'AI Voice Solutions', path: '/ai-voice-assistant' },
        { title: 'AI Automation Suite', path: '/ai-automation' }
      ]
    },
    {
      title: 'IT Services',
      path: '/it-services',
      icon: <Server className="w-4 h-4" />,
      submenu: [
        { title: 'Cloud Migration', path: '/cloud-migration' },
        { title: 'Cybersecurity', path: '/cybersecurity' },
        { title: 'DevOps Solutions', path: '/devops' },
        { title: 'Data Analytics', path: '/data-analytics' },
        { title: 'Mobile Development', path: '/mobile-development' },
        { title: 'Infrastructure Management', path: '/it-infrastructure' }
      ]
    },
    {
      title: 'Cloud Services',
      path: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      submenu: [
        { title: 'Cloud Migration', path: '/cloud-migration' },
        { title: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
        { title: 'Cloud Security', path: '/cloud-security' },
        { title: 'Cloud Optimization', path: '/cloud-cost-optimization' },
        { title: 'Multi-Cloud Solutions', path: '/multi-cloud-solutions' }
      ]
    },
    {
      title: '5G Solutions',
      path: '/5g-implementation',
      icon: <Zap className="w-4 h-4" />,
      submenu: [
        { title: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
        { title: '5G Mobile Applications', path: '/5g-mobile-applications' },
        { title: '5G IoT Solutions', path: '/5g-iot-solutions' },
        { title: '5G Edge Computing', path: '/5g-edge-computing' }
      ]
    }
  ];

  const company = [
    { title: 'About Us', path: '/about' },
    { title: 'Careers', path: '/careers' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' }
  ];

  const resources = [
    { title: 'Privacy Policy', path: '/privacy-policy' },
    { title: 'Terms of Service', path: '/terms-of-service' },
    { title: 'Accessibility', path: '/accessibility' }
  ];

  return (
    <nav className="bg-gray-900/90 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
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
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-lg rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {services.map((service, index) => (
                        <div key={index}>
                          <Link
                            to={service.path}
                            className="flex items-center text-white font-semibold mb-3 hover:text-purple-400 transition-colors"
                          >
                            {service.icon}
                            <span className="ml-2">{service.title}</span>
                          </Link>
                          <ul className="space-y-2">
                            {service.submenu.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  to={item.path}
                                  className="text-gray-300 hover:text-white text-sm block py-1 transition-colors"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Links */}
              <div className="relative group">
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  Company
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-lg rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4">
                    <ul className="space-y-2">
                      {company.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.path}
                            className="text-gray-300 hover:text-white block py-2 text-sm transition-colors"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Resources Links */}
              <div className="relative group">
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  Resources
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-lg rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4">
                    <ul className="space-y-2">
                      {resources.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.path}
                            className="text-gray-300 hover:text-white block py-2 text-sm transition-colors"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 ml-4"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-lg">
            {/* Services Section */}
            <div className="space-y-2">
              <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider px-3 py-2">
                Services
              </div>
              {services.map((service, index) => (
                <div key={index}>
                  <Link
                    to={service.path}
                    className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.icon}
                    <span className="ml-2">{service.title}</span>
                  </Link>
                  <div className="ml-6 space-y-1">
                    {service.submenu.slice(0, 3).map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.path}
                        className="text-gray-400 hover:text-white block px-3 py-1 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Company Section */}
            <div className="space-y-2">
              <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider px-3 py-2">
                Company
              </div>
              {company.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Resources Section */}
            <div className="space-y-2">
              <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider px-3 py-2">
                Resources
              </div>
              {resources.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-700">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 block text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;