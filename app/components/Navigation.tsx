import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions', icon: Zap },
    { name: 'IT Services', href: '/it-services', icon: Code },
    { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Web Development', href: '/web-development', icon: Globe },
    { name: 'Mobile Apps', href: '/mobile-apps', icon: Smartphone },
    { name: 'Database Management', href: '/database', icon: Database }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-slate-700 py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <service.icon className="w-4 h-4 mr-3" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center text-gray-400 hover:text-white transition-colors"
                        onClick={() => {
                          setIsOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        <service.icon className="w-4 h-4 mr-3" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/pricing"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;