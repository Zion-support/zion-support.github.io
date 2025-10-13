'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      submenu: [
        { title: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { title: 'AI Content Generation', href: '/ai-content-generation' },
        { title: 'AI Customer Support', href: '/ai-customer-support' },
        { title: 'AI Cybersecurity Suite', href: '/ai-cybersecurity-suite' },
        { title: 'AI Data Analytics', href: '/ai-data-analytics' },
        { title: 'AI Voice Assistant', href: '/ai-voice-assistant' },
        { title: 'AI Project Management', href: '/ai-project-management' },
        { title: 'AI Financial Services', href: '/ai-financial-services' },
      ]
    },
    {
      title: 'IT Solutions',
      href: '/it-solutions',
      submenu: [
        { title: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { title: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { title: 'Data Analytics', href: '/data-analytics' },
        { title: 'API Development', href: '/api-development' },
        { title: 'Mobile Development', href: '/mobile-development' },
        { title: 'Web Development', href: '/web-development' },
        { title: 'Database Services', href: '/database-services' },
        { title: 'DevOps Automation', href: '/devops-automation' },
      ]
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas',
      submenu: [
        { title: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { title: 'AI Content Studio', href: '/ai-content-studio' },
        { title: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { title: 'AI CRM Assistant', href: '/ai-crm-assistant' },
        { title: 'AI Project Manager', href: '/ai-project-manager' },
        { title: 'AI Voice Cloning Studio', href: '/ai-voice-cloning-studio' },
        { title: 'AI Website Builder', href: '/ai-website-builder' },
        { title: 'AI E-commerce Optimizer', href: '/ai-ecommerce-optimizer' },
      ]
    },
    {
      title: '5G Solutions',
      href: '/5g-solutions',
      submenu: [
        { title: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { title: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { title: '5G Edge Computing', href: '/5g-edge-computing' },
        { title: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { title: '5G Private Networks', href: '/5g-private-networks' },
        { title: '5G Mobile Applications', href: '/5g-mobile-applications' },
      ]
    }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {services.map((service) => (
              <div key={service.title} className="relative group">
                <button
                  className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => toggleDropdown(service.title)}
                >
                  {service.title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {activeDropdown === service.title && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    {service.submenu.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {services.map((service) => (
                <div key={service.title}>
                  <button
                    className="w-full text-left flex items-center justify-between text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
                    onClick={() => toggleDropdown(service.title)}
                  >
                    {service.title}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  
                  {activeDropdown === service.title && (
                    <div className="pl-4 space-y-1">
                      {service.submenu.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsMenuOpen(false);
                          }}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link
                href="/about"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;