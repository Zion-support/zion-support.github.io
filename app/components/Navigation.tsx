'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Shield, Code, Zap, ArrowRight } from 'lucide-react';

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
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd' },
        { name: 'Microservices Architecture', path: '/microservices' },
        { name: 'Container Orchestration', path: '/container-orchestration' },
        { name: 'Serverless Computing', path: '/serverless' },
        { name: 'Database Optimization', path: '/database-optimization' }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'Penetration Testing', path: '/penetration-testing' },
        { name: 'Security Audits', path: '/security-audits' },
        { name: 'Compliance Management', path: '/compliance' },
        { name: 'Data Protection', path: '/data-protection' },
        { name: 'Identity Management', path: '/identity-management' }
      ]
    },
    {
      title: 'Development & Integration',
      icon: Code,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { name: 'Custom Software Development', path: '/custom-development' },
        { name: 'API Development', path: '/api-development' },
        { name: 'System Integration', path: '/system-integration' },
        { name: 'Legacy Modernization', path: '/legacy-modernization' },
        { name: 'Mobile App Development', path: '/mobile-development' },
        { name: 'Web Application Development', path: '/web-development' }
      ]
    },
    {
      title: 'Business Solutions',
      icon: Zap,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      services: [
        { name: 'Digital Transformation', path: '/digital-transformation' },
        { name: 'Process Automation', path: '/process-automation' },
        { name: 'Business Intelligence', path: '/business-intelligence' },
        { name: 'Data Analytics', path: '/data-analytics' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'Business Intelligence', path: '/business-intelligence' }
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
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-400'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-400'
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-400'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  servicesOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className={`p-2 rounded-lg ${category.bgColor}`}>
                            <category.icon className={`w-5 h-5 ${category.color}`} />
                          </div>
                          <h3 className="font-semibold text-gray-900 text-sm">
                            {category.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link
                                href={service.path}
                                className="text-gray-600 hover:text-blue-600 text-sm transition-colors flex items-center group"
                                onClick={closeAllMenus}
                              >
                                <span>{service.name}</span>
                                <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/contact" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-400'
              }`}
            >
              Contact
            </Link>
            <Link 
              href="/blog" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-400'
              }`}
            >
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>(302) 464-0950</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="font-medium text-gray-700 mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="space-y-1">
                      <div className="font-medium text-gray-600 text-sm">{category.title}</div>
                      <ul className="pl-4 space-y-1">
                        {category.services.slice(0, 3).map((service, serviceIndex) => (
                          <li key={serviceIndex}>
                            <Link
                              href={service.path}
                              className="text-gray-500 hover:text-blue-600 text-sm"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>(302) 464-0950</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;