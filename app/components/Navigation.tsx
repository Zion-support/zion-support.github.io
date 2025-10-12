import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Brain, Cloud, Shield, Code, Network } from 'lucide-react';

export default function Navigation() {
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
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'AI-powered solutions for your business'
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Comprehensive IT solutions'
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas',
      icon: <Code className="w-4 h-4" />,
      description: 'Ready-to-use SaaS applications'
    },
    {
      name: '5G Solutions',
      href: '/5g-implementation',
      icon: <Network className="w-4 h-4" />,
      description: '5G network implementation'
    },
    {
      name: 'Cybersecurity',
      href: '/cybersecurity',
      icon: <Shield className="w-4 h-4" />,
      description: 'Protect your business data'
    }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="text-blue-400 mt-1">
                          {service.icon}
                        </div>
                        <div>
                          <div className="text-white font-semibold">
                            {service.name}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4">
                  {company.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-sm border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div>
                <div className="text-gray-300 font-semibold mb-2">Services</div>
                <div className="space-y-2 ml-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="text-gray-300 font-semibold mb-2">Company</div>
                <div className="space-y-2 ml-4">
                  {company.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="block text-gray-400 hover:text-white transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                to="/contact"
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
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
}
