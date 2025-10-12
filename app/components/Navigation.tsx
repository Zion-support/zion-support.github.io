'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain, Code, Cpu, Wifi, ChevronDown } from 'lucide-react';

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
        { title: 'AI Automation', href: '/ai-automation' },
        { title: 'AI 3D Generation', href: '/ai-3d-generation' },
        { title: 'AI Drug Discovery Pro', href: '/ai-drug-discovery-pro' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Code className="w-4 h-4" />,
      description: 'Comprehensive IT solutions',
      submenu: [
        { title: 'Cloud Migration', href: '/cloud-migration' },
        { title: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { title: 'DevOps & CI/CD', href: '/devops-cicd' },
        { title: 'Data Analytics', href: '/data-analytics' },
        { title: 'Mobile Development', href: '/mobile-development' },
        { title: 'Web Development', href: '/web-development' },
        { title: 'Quantum Computing', href: '/quantum-computing-solutions' }
      ]
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: <Cpu className="w-4 h-4" />,
      description: 'Specialized micro services',
      submenu: [
        { title: 'AI Task Manager', href: '/ai-task-manager' },
        { title: 'AI Expense Tracker', href: '/ai-expense-tracker' },
        { title: 'AI Password Manager', href: '/ai-password-manager' },
        { title: 'AI Invoice Generator', href: '/ai-invoice-generator' },
        { title: 'AI Health Tracker', href: '/ai-health-tracker' },
        { title: 'AI Smart Calendar', href: '/ai-smart-calendar' },
        { title: 'AI Climate Solutions', href: '/ai-climate-solutions-pro' }
      ]
    },
    {
      title: '5G Solutions',
      href: '/5g-implementation',
      icon: <Wifi className="w-4 h-4" />,
      description: 'Next-gen connectivity',
      submenu: [
        { title: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { title: '5G Private Networks', href: '/5g-private-networks' },
        { title: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { title: '5G Edge Computing', href: '/5g-edge-computing' },
        { title: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { title: '5G Data Analytics', href: '/5g-data-analytics' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 fixed w-full top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" aria-label="Zion Tech Group - Home">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {services.map((service) => (
                <div key={service.title} className="relative group">
                  <button
                    onClick={() => toggleDropdown(service.title)}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
                  >
                    {service.icon}
                    <span className="ml-2">{service.title}</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  
                  {activeDropdown === service.title && (
                    <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-xs text-gray-500">{service.description}</p>
                      </div>
                      <div className="py-2">
                        {service.submenu.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              {services.map((service) => (
                <div key={service.title}>
                  <button
                    onClick={() => toggleDropdown(service.title)}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      {service.icon}
                      <span className="ml-2">{service.title}</span>
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {activeDropdown === service.title && (
                    <div className="pl-6 space-y-1">
                      {service.submenu.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm transition-colors"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;