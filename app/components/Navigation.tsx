import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'Cloud Solutions', href: '/cloud-services', icon: Cloud },
    { name: 'Cybersecurity', href: '/security', icon: Shield },
    { name: 'Development', href: '/developer-tools', icon: Code },
    { name: 'Analytics', href: '/business-intelligence', icon: BarChart },
    { name: 'Consulting', href: '/it-services', icon: Users },
    { name: 'DevOps', href: '/devops', icon: Zap }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setServicesOpen(false)}
                        >
                          <service.icon className="mr-3 h-4 w-4" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md">
            <Link
              to="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="px-3 py-2">
              <div className="text-gray-300 text-base font-medium mb-2">Services</div>
              <div className="space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="flex items-center text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <service.icon className="mr-3 h-4 w-4" />
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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