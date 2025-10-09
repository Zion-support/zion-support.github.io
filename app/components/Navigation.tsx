import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      description: 'Advanced AI Solutions'
    },
    {
      title: 'Cloud Solutions',
      href: '/cloud-solutions',
      icon: Cloud,
      description: 'Scalable Cloud Infrastructure'
    },
    {
      title: 'Security',
      href: '/security',
      icon: Shield,
      description: 'Cybersecurity Solutions'
    },
    {
      title: 'Development',
      href: '/development',
      icon: Code,
      description: 'Custom Software Development'
    },
    {
      title: 'Analytics',
      href: '/analytics',
      icon: BarChart,
      description: 'Business Intelligence'
    },
    {
      title: 'Consulting',
      href: '/consulting',
      icon: Users,
      description: 'IT Consulting Services'
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={service.href}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setServicesOpen(false)}
                      >
                        <service.icon className="h-4 w-4 mr-3 text-blue-600" />
                        <div>
                          <div className="font-medium">{service.title}</div>
                          <div className="text-xs text-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-blue-600 p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              to="/"
              className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Services */}
            <div>
              <button
                onClick={toggleServices}
                className="text-gray-900 hover:text-blue-600 w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {servicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      to={service.href}
                      className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm"
                      onClick={() => {
                        setIsOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      <service.icon className="h-4 w-4 mr-3 text-blue-600" />
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;