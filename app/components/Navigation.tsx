'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Zap, Brain, Code, Cloud, BarChart, Users, Shield, Phone, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Project Management', url: '/ai-project-management', description: 'AI-powered project management' },
    { name: 'AI CRM Solutions', url: '/ai-crm-solutions', description: 'Intelligent customer relationship management' },
    { name: 'AI Supply Chain', url: '/ai-supply-chain', description: 'AI-powered supply chain management' },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', description: 'AI-powered human resources' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'Micro SAAS', url: '/micro-saas', description: '50+ ready-to-use apps' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', description: 'Cloud migration & setup' },
    { name: 'DevOps Automation', url: '/ai-devops-automation', description: 'AI-powered DevOps' },
    { name: 'E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce platforms' },
    { name: 'Mobile App Development', url: '/ai-mobile-app-development', description: 'Mobile applications' },
    { name: 'Database Services', url: '/database', description: 'Database management' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'Robotics', url: '/robotics', description: 'Robotic solutions' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              
              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('ai')}
                  className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  <Brain className="w-4 h-4 mr-1" />
                  AI Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'ai' && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <h3 className="text-sm font-semibold text-gray-900">AI Services</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {aiServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.url}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                          onClick={closeMenu}
                        >
                          <div className="font-medium">{service.name}</div>
                          <div className="text-xs text-gray-500">{service.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('it')}
                  className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  <Code className="w-4 h-4 mr-1" />
                  IT Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'it' && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <h3 className="text-sm font-semibold text-gray-900">IT Services</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {itServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.url}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                          onClick={closeMenu}
                        >
                          <div className="font-medium">{service.name}</div>
                          <div className="text-xs text-gray-500">{service.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Specialized Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('specialized')}
                  className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  <Cloud className="w-4 h-4 mr-1" />
                  Specialized
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'specialized' && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <h3 className="text-sm font-semibold text-gray-900">Specialized Services</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {specializedServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.url}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                          onClick={closeMenu}
                        >
                          <div className="font-medium">{service.name}</div>
                          <div className="text-xs text-gray-500">{service.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/about" 
                className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+13024640950"
              className="text-white hover:text-cyan-400 transition-colors flex items-center"
            >
              <Phone className="w-4 h-4 mr-1" />
              <span className="text-sm">+1 302 464 0950</span>
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="text-white hover:text-cyan-400 transition-colors flex items-center"
            >
              <Mail className="w-4 h-4 mr-1" />
              <span className="text-sm">kleber@ziontechgroup.com</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <div className="border-t border-gray-700 pt-2 mt-2">
                <div className="px-3 py-2 text-sm text-gray-300">AI Services</div>
                {aiServices.slice(0, 6).map((service, index) => (
                  <Link
                    key={index}
                    href={service.url}
                    className="block px-6 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                    onClick={closeMenu}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-2">
                <div className="px-3 py-2 text-sm text-gray-300">IT Services</div>
                {itServices.slice(0, 6).map((service, index) => (
                  <Link
                    key={index}
                    href={service.url}
                    className="block px-6 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                    onClick={closeMenu}
                  >
                    {service.name}
                  </Link>
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