import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'AI Solutions', href: '/services/ai' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'Cloud Services', href: '/services/cloud' },
    { name: 'Blockchain', href: '/services/blockchain' },
    { name: 'Micro SaaS', href: '/services/micro-saas' }];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-blue-light/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl group-hover:text-zion-cyan transition-colors duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 font-medium">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-48 bg-zion-slate-dark/95 backdrop-blur-md rounded-lg shadow-xl border border-zion-blue-light/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue/20 transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              to="/about" 
              className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
            
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple-light text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-zion-slate-dark/95 backdrop-blur-md rounded-lg mt-2 border border-zion-blue-light/20">
            <div className="px-4 py-2 space-y-2">
              <Link 
                to="/" 
                className="block text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="py-2">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 font-medium"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/about" 
                className="block text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple-light text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;