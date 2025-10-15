import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions', icon: Zap },
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Web Development', href: '/web-development', icon: Globe },
    { name: 'Database Solutions', href: '/database-solutions', icon: Database },
    { name: 'Mobile Apps', href: '/mobile-apps', icon: Smartphone },
    { name: 'Custom Software', href: '/custom-software', icon: Code }
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-purple-400">
            Zion Tech Group
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-purple-400 transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServicesMenu}
                className="flex items-center hover:text-purple-400 transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center px-4 py-2 hover:bg-slate-700 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <service.icon className="mr-3 h-4 w-4" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/contact" className="hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="space-y-2">
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-slate-800 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 hover:bg-slate-800 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 hover:bg-slate-800 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Services */}
              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-gray-400 mb-2">Services</div>
                <div className="space-y-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center px-2 py-1 hover:bg-slate-800 rounded transition-colors text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <service.icon className="mr-2 h-3 w-3" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;