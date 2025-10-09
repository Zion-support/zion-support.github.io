'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'navigation_phone',
      });
    }
  }, []);

  const aiServices = [
    { name: 'AI Services', url: '/ai-services' },
    { name: 'AI Marketing', url: '/ai-marketing' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare' },
    { name: 'AI Fintech', url: '/ai-fintech' },
    { name: 'AI Content Generation', url: '/ai-content-generation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services' },
    { name: 'IT Infrastructure', url: '/it-infrastructure' },
    { name: 'Micro SAAS', url: '/micro-saas' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure' },
    { name: 'E-commerce Solutions', url: '/ai-ecommerce-solutions' },
    { name: 'Mobile App Development', url: '/ai-mobile-app-development' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', url: '/quantum-computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Robotics', url: '/robotics' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' },
    { name: 'Careers', url: '/careers' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* AI Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('ai')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  AI Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'ai' && (
                  <div className="absolute left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg py-2 z-50 border border-gray-700">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.url}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                        onClick={closeMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('it')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  IT Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'it' && (
                  <div className="absolute left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg py-2 z-50 border border-gray-700">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.url}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                        onClick={closeMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Specialized Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('specialized')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  Specialized
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'specialized' && (
                  <div className="absolute left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg py-2 z-50 border border-gray-700">
                    {specializedServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.url}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                        onClick={closeMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('company')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  Company
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'company' && (
                  <div className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-2 z-50 border border-gray-700">
                    {companyLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                        onClick={closeMenu}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Phone className="w-4 h-4 text-cyan-400" />
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="hover:text-white transition-colors duration-200"
              >
                (302) 464-0950
              </a>
            </div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
              {/* AI Services */}
              <div>
                <button
                  onClick={() => toggleDropdown('ai-mobile')}
                  className="w-full text-left text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                >
                  AI Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'ai-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'ai-mobile' && (
                  <div className="pl-4 space-y-1">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.url}
                        className="block text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm"
                        onClick={closeMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* IT Services */}
              <div>
                <button
                  onClick={() => toggleDropdown('it-mobile')}
                  className="w-full text-left text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                >
                  IT Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'it-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'it-mobile' && (
                  <div className="pl-4 space-y-1">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.url}
                        className="block text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm"
                        onClick={closeMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Specialized Services */}
              <div>
                <button
                  onClick={() => toggleDropdown('specialized-mobile')}
                  className="w-full text-left text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                >
                  Specialized
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'specialized-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'specialized-mobile' && (
                  <div className="pl-4 space-y-1">
                    {specializedServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.url}
                        className="block text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm"
                        onClick={closeMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Company */}
              <div>
                <button
                  onClick={() => toggleDropdown('company-mobile')}
                  className="w-full text-left text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                >
                  Company
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'company-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'company-mobile' && (
                  <div className="pl-4 space-y-1">
                    {companyLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        className="block text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm"
                        onClick={closeMenu}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMenu}
              >
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-gray-300 mb-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a
                    href="tel:+13024640950"
                    onClick={handlePhoneClick}
                    className="hover:text-white transition-colors duration-200"
                  >
                    (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300 mb-4">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="hover:text-white transition-colors duration-200"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-md text-center font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
