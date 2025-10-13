import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'Cybersecurity Suite', href: '/ai-cybersecurity-suite' },
        { name: 'Data Analytics', href: '/ai-data-analytics' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      submenu: [
        { name: 'Micro SAAS Solutions', href: '/micro-saas-solutions' },
        { name: 'AI Solutions', href: '/ai-solutions' },
        { name: 'IT Solutions', href: '/it-solutions' },
        { name: '5G Solutions', href: '/5g-solutions' },
        { name: 'Quantum Computing', href: '/ai-quantum-computing-simulator' },
        { name: 'Neural Interface', href: '/ai-neural-interface' },
        { name: 'Space Mission Optimizer', href: '/ai-space-mission-optimizer' },
        { name: 'Holographic Workspace', href: '/ai-holographic-workspace' },
        { name: 'Climate Prediction', href: '/ai-climate-prediction-engine' }
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-4 w-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Leading AI & IT Solutions Provider</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                Zion Tech Group
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                      onMouseEnter={() => {
                        if (item.submenu) {
                          if (item.name === 'Services') setIsServicesOpen(true);
                          if (item.name === 'Solutions') setIsSolutionsOpen(true);
                        }
                      }}
                      onMouseLeave={() => {
                        if (item.submenu) {
                          if (item.name === 'Services') setIsServicesOpen(false);
                          if (item.name === 'Solutions') setIsSolutionsOpen(false);
                        }
                      }}
                    >
                      {item.name}
                      {item.submenu && <ChevronDownIcon className="inline w-4 h-4 ml-1" />}
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {item.submenu && (
                      <div className={`absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-50 ${
                        (item.name === 'Services' && isServicesOpen) || 
                        (item.name === 'Solutions' && isSolutionsOpen) 
                          ? 'block' : 'hidden'
                      }`}>
                        <div className="px-4 py-2 border-b border-gray-200">
                          <h3 className="text-sm font-semibold text-gray-900">{item.name}</h3>
                        </div>
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Component;