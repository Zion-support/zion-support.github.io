import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Globe, 
  Zap, 
  Shield, 
  Phone, 
  Menu, 
  X, 
  ChevronDown,
  Home,
  Building,
  Users,
  Settings,
  BarChart3,
  Cloud,
  Database,
  Network,
  Code,
  Smartphone,
  Mail,
  MapPin
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Zap },
    { name: 'IT Services', href: '/it-services', icon: Shield },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      services: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'Computer Vision', href: '/ai-services#computer-vision' },
        { name: 'Natural Language Processing', href: '/ai-services#nlp' },
        { name: 'Predictive Analytics', href: '/ai-services#predictive-analytics' }
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      services: [
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'Email Automation', href: '/micro-saas#email-automation' },
        { name: 'Survey Platform', href: '/micro-saas#survey-platform' },
        { name: 'Analytics Dashboard', href: '/micro-saas#analytics' }
      ]
    },
    {
      name: 'IT Services',
      services: [
        { name: 'IT Services', href: '/it-services' },
        { name: 'Cloud Infrastructure', href: '/it-services#cloud' },
        { name: 'Cybersecurity', href: '/it-services#cybersecurity' },
        { name: 'DevOps', href: '/it-services#devops' }
      ]
    }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-2xl z-50">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-4">
                      {serviceCategories.map((category) => (
                        <div key={category.name} className="space-y-2">
                          <h3 className="text-sm font-semibold text-blue-600">{category.name}</h3>
                          <div className="space-y-1">
                            {category.services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            {/* Mobile Services */}
            <div className="px-3 py-2">
              <h3 className="text-sm font-semibold text-blue-600 mb-2">Service Categories</h3>
              <div className="space-y-2">
                {serviceCategories.map((category) => (
                  <div key={category.name} className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-1">{category.name}</h4>
                    <div className="space-y-1">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-3 py-1 text-sm text-gray-700 hover:text-blue-600 rounded transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Contact */}
            <div className="px-3 py-2 border-t border-gray-200">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>Call +1 302 464 0950</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;