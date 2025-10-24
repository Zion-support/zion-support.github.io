"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "AI Services", href: "/ai-services" },
    { name: "IT Services", href: "/it-services" },
    { name: "Micro SaaS", href: "/micro-saas-solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const aiServices = [
    { name: "AI Analytics", href: "/ai-analytics" },
    { name: "AI Cloud Infrastructure", href: "/ai-cloud-infrastructure" },
    { name: "AI Cybersecurity", href: "/ai-cybersecurity" },
    { name: "AI Data Analytics", href: "/ai-data-analytics" },
    { name: "AI E-commerce Solutions", href: "/ai-ecommerce-solutions" },
    { name: "AI Mobile App Development", href: "/ai-mobile-app-development" },
    { name: "AI Workflow Automation", href: "/ai-workflow-automation" }
  ];

  const itServices = [
    { name: "Autonomous Systems", href: "/autonomous-systems" },
    { name: "Blockchain Solutions", href: "/blockchain" },
    { name: "Blockchain Web3", href: "/blockchain-web3" },
    { name: "Business Intelligence", href: "/business-intelligence" }
  ];

  const microSaaSServices = [
    { name: "E-commerce Analytics Pro", href: "/ecommerce-analytics-pro" },
    { name: "Legal Document Manager", href: "/legal-document-manager" },
    { name: "Medical Records Manager", href: "/medical-records-manager" },
    { name: "Online Learning Platform", href: "/online-learning-platform" },
    { name: "Property Management AI", href: "/property-management-ai" },
    { name: "Supply Chain Optimizer", href: "/supply-chain-optimizer" }
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative dropdown-container">
                {item.name === "AI Services" ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle('ai')}
                      className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === 'ai' && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {aiServices.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                            onClick={handleDropdownClose}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.name === "IT Services" ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle('it')}
                      className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === 'it' && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {itServices.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                            onClick={handleDropdownClose}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.name === "Micro SaaS" ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle('saas')}
                      className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === 'saas' && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {microSaaSServices.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                            onClick={handleDropdownClose}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  {item.name === "AI Services" ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle('ai-mobile')}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {activeDropdown === 'ai-mobile' && (
                        <div className="pl-4 space-y-1">
                          {aiServices.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                handleDropdownClose();
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.name === "IT Services" ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle('it-mobile')}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {activeDropdown === 'it-mobile' && (
                        <div className="pl-4 space-y-1">
                          {itServices.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                handleDropdownClose();
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.name === "Micro SaaS" ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle('saas-mobile')}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {activeDropdown === 'saas-mobile' && (
                        <div className="pl-4 space-y-1">
                          {microSaaSServices.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                handleDropdownClose();
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium text-center"
                  onClick={() => setIsOpen(false)}
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