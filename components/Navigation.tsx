import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Brain, Globe, Zap, Building, Phone, Shield } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'Micro SAAS Services', href: '/micro-saas', icon: Zap },
    { name: 'Comprehensive Services', href: '/services', icon: Brain },
    { name: 'Pricing', href: '/pricing', icon: Building }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      services: [
        { name: 'AI-Powered CRM', href: '/services/ai-services#ai-powered-crm' },
        { name: 'Quantum Computing', href: '/services/ai-services#quantum-computing' },
        { name: 'Edge AI Computing', href: '/services/ai-services#edge-ai-computing' }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      services: [
        { name: 'Cloud Migration', href: '/services/it-services#cloud-migration' },
        { name: 'DevOps Solutions', href: '/services/it-services#devops' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' }
      ]
    },
    {
      name: 'Development',
      services: [
        { name: 'Web Development', href: '/services/it-services#web-development' },
        { name: 'Mobile Apps', href: '/services/it-services#mobile-development' },
        { name: 'API Development', href: '/services/it-services#api-development' }
      ]
    }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Services
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute right-0 mt-2 w-96 bg-white rounded-md shadow-lg py-1 z-50 border">
                    <div className="grid grid-cols-3 gap-4 p-4">
                      {serviceCategories.map((category) => (
                        <div key={category.name}>
                          <h3 className="text-sm font-semibold text-gray-900 mb-2">{category.name}</h3>
                          <ul className="space-y-1">
                            {category.services.map((service) => (
                              <li key={service.name}>
                                <Link
                                  href={service.href}
                                  className="text-sm text-gray-600 hover:text-blue-600 block py-1"
                                  onClick={() => setIsServicesOpen(false)}
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
                )}
              </div>

              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.name}
                </Link>
              ))}
              
              <Link
                href="/contact"
                className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;