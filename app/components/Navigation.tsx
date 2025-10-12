'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Menu, X, Brain, Cloud, Code, Wifi, ChevronDown } from 'lucide-react';
=======
import { Menu, X, Brain, Code, Cpu, Wifi, ChevronDown } from 'lucide-react';
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

<<<<<<< HEAD
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
      path: '/micro-saas-services',
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
      path: '/5g-implementation',
      icon: Wifi,
      dropdown: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
        { name: '5G Edge Computing', path: '/5g-edge-computing' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
        { name: '5G Private Networks', path: '/5g-private-networks' },
        { name: '5G Data Analytics', path: '/5g-data-analytics' }
      ]
    }
  ];

  const simpleLinks = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                Zion Tech Group
              </span>
=======
=======
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

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
  ]

  const quickLinks = [
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' }
  ]

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
          
<<<<<<< HEAD
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    className="flex items-center text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-lg rounded-xl border border-white/20 shadow-2xl z-50">
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <item.icon className="w-5 h-5 mr-2" />
                          {item.name}
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdown.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={dropdownItem.path}
                              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 group"
                            >
                              <span className="group-hover:translate-x-2 transition-transform duration-300">
                                {dropdownItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <Link
                            to={item.path}
                            className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                          >
                            View All {item.name}
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {simpleLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
=======
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d
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
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-41ac
=======
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7720
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d
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
                            setActiveDropdown(null)
                            setIsOpen(false)
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
<<<<<<< HEAD

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-2 pb-6 space-y-1 bg-gray-900/95 backdrop-blur-lg border-t border-white/10">
            {navigationItems.map((item) => (
              <div key={item.name} className="space-y-1">
                <div className="flex items-center text-gray-300 px-3 py-2 text-base font-medium">
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </div>
                <div className="ml-8 space-y-1">
                  {item.dropdown.map((dropdownItem, index) => (
                    <Link
                      key={index}
                      to={dropdownItem.path}
                      className="block text-gray-400 hover:text-white px-3 py-2 rounded-lg text-sm transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                  <Link
                    to={item.path}
                    className="block text-purple-400 hover:text-purple-300 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    View All {item.name} →
                  </Link>
                </div>
              </div>
            ))}
            
            {simpleLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d
    </nav>
  );
};

export default Navigation;