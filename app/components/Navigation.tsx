import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
    { name: 'IT Services', href: '/it-services', icon: Code },
    { name: 'Security', href: '/security', icon: Shield },
    { name: 'Analytics', href: '/analytics', icon: BarChart },
    { name: 'Consulting', href: '/consulting', icon: Users },
    { name: 'Automation', href: '/automation', icon: Zap }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20 py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            
            {/* CTA Button */}
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
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
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-gray-400 text-sm font-medium mb-2">Services</div>
                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <div className="px-3 py-2">
                <a
                  href="tel:+13024640950"
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-center hover:from-purple-700 hover:to-blue-700 transition-all"
                >
                  Call (302) 464-0950
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