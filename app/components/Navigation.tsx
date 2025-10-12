import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Smartphone, Brain, Cpu, Wifi } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const services = [
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI solutions'
    },
    {
      name: 'IT Services',
      path: '/it-services',
      icon: <Cpu className="w-4 h-4" />,
      description: 'Complete IT solutions'
    },
    {
      name: 'Cloud Services',
      path: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud infrastructure'
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      description: 'Micro SAAS solutions'
    }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-white/10 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-white/10 py-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {service.icon}
                      <div className="ml-3">
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-gray-400">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center px-3 py-2 text-gray-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.icon}
                      <span className="ml-2">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
