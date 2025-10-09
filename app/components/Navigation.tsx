'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Shield, Code, Zap, ArrowRight, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Services', path: '/ai-services' },
        { name: 'AI Marketing', path: '/ai-marketing' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare' },
        { name: 'AI Fintech', path: '/ai-fintech' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'IT Infrastructure', path: '/it-infrastructure' },
        { name: 'IT Services', path: '/it-services' },
        { name: 'Cloud Services', path: '/cloud-services' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'DevOps', path: '/devops' },
        { name: 'Database Services', path: '/database' },
        { name: 'Networking', path: '/networking' },
        { name: 'Business Intelligence', path: '/business-intelligence' },
        { name: 'System Administration', path: '/it-services' },
        { name: 'Technical Support', path: '/support' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas' },
        { name: 'Developer Tools', path: '/micro-saas' },
        { name: 'Business Apps', path: '/business-apps' },
        { name: 'Marketing Tools', path: '/marketing-tools' },
        { name: 'Productivity Tools', path: '/productivity' },
        { name: 'Analytics Tools', path: '/micro-saas' },
        { name: 'API Services', path: '/api' },
        { name: 'Developer Tools', path: '/developer-tools' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing' },
        { name: 'Blockchain Solutions', path: '/blockchain' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'IoT Edge Computing', path: '/iot-edge-computing' },
        { name: 'Robotics', path: '/robotics' },
        { name: 'Enterprise Solutions', path: '/enterprise' },
        { name: 'API Documentation', path: '/api-docs' },
        { name: 'Case Studies', path: '/case-studies' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-blue-400 transition-colors font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors font-medium"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                          </div>
                          <h3 className="font-semibold text-gray-900 text-sm">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.path}
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-purple-600 rounded-lg transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Section */}
                  <div className="mt-6 pt-6 border-t border-gray-200 px-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Need Custom Solutions?</h4>
                        <p className="text-xs text-gray-600">Get a free consultation for your specific needs</p>
                      </div>
                      <Link
                        href="/contact"
                        className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 text-sm font-medium"
                        onClick={closeAllMenus}
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-white hover:text-blue-400 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-400 transition-colors font-medium">
              Contact
            </Link>
            
            {/* Contact Info */}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-600">
              <a 
                href="tel:+13024640950" 
                className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">(302) 464-0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors rounded-md"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors rounded-md"
                onClick={closeAllMenus}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-white font-medium mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="space-y-1">
                      <div className="text-blue-400 text-sm font-medium">{category.title}</div>
                      <div className="space-y-1 ml-4">
                        {category.services.slice(0, 4).map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.path}
                            className="block text-gray-300 hover:text-blue-400 text-sm transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/blog"
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors rounded-md"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors rounded-md"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="px-3 py-2 border-t border-gray-700 mt-4">
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors py-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors py-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;