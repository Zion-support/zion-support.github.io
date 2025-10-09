'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Zap, Brain, Code, Shield, Users, Phone } from 'lucide-react';

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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'navigation_phone',
      });
    }
  };

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', icon: Brain },
    { name: 'AI Marketing', url: '/ai-marketing', icon: Brain },
    { name: 'AI Automation', url: '/ai-automation', icon: Brain },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Brain },
    { name: 'AI Fintech', url: '/ai-fintech', icon: Brain },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: Brain },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: Brain },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Brain },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', icon: Brain }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', icon: Code },
    { name: 'IT Infrastructure', url: '/it-infrastructure', icon: Code },
    { name: 'Micro SAAS', url: '/micro-saas', icon: Code },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', icon: Code },
    { name: 'E-commerce Solutions', url: '/ai-ecommerce-solutions', icon: Code },
    { name: 'Mobile App Development', url: '/ai-mobile-app-development', icon: Code },
    { name: 'Database Services', url: '/ai-data-analytics', icon: Code }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', url: '/quantum-computing', icon: Zap },
    { name: 'Autonomous Systems', url: '/autonomous-systems', icon: Zap },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', icon: Zap },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', icon: Zap },
    { name: 'Business Intelligence', url: '/business-intelligence', icon: Zap },
    { name: 'Robotics', url: '/robotics', icon: Zap }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
                onMouseEnter={() => setActiveDropdown('ai')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-4 z-50"
                     onMouseEnter={() => setActiveDropdown('ai')}
                     onMouseLeave={() => setActiveDropdown(null)}>
                  <div className="grid grid-cols-1 gap-2 px-4">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.url}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <service.icon className="w-4 h-4 text-cyan-400" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
                onMouseEnter={() => setActiveDropdown('it')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Code className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-4 z-50"
                     onMouseEnter={() => setActiveDropdown('it')}
                     onMouseLeave={() => setActiveDropdown(null)}>
                  <div className="grid grid-cols-1 gap-2 px-4">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.url}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <service.icon className="w-4 h-4 text-blue-400" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Specialized Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
                onMouseEnter={() => setActiveDropdown('specialized')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Zap className="w-4 h-4" />
                <span>Specialized</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'specialized' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-4 z-50"
                     onMouseEnter={() => setActiveDropdown('specialized')}
                     onMouseLeave={() => setActiveDropdown(null)}>
                  <div className="grid grid-cols-1 gap-2 px-4">
                    {specializedServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.url}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <service.icon className="w-4 h-4 text-orange-400" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company Links */}
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-white hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>

            {/* Phone Number */}
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              onClick={handlePhoneClick}
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+1 302 464 0950</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900 rounded-lg mt-2 p-4">
            <div className="space-y-4">
              {/* AI Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-cyan-400" />
                  AI Services
                </h3>
                <div className="grid grid-cols-1 gap-2 ml-4">
                  {aiServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      href={service.url}
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                      onClick={closeMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* IT Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-blue-400" />
                  IT Services
                </h3>
                <div className="grid grid-cols-1 gap-2 ml-4">
                  {itServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      href={service.url}
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                      onClick={closeMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company Links */}
              <div className="border-t border-gray-700 pt-4">
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
              </div>

              {/* Phone Number */}
              <div className="border-t border-gray-700 pt-4">
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  onClick={handlePhoneClick}
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">+1 302 464 0950</span>
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

