"use client";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap,
  Star,
  Globe,
  Settings
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      closeAllMenus();
    }
  };

  const services = [
    { name: 'All Services', href: '/services', icon: Settings },
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Settings },
    { name: 'Micro SAAS', href: '/micro-saas', icon: BarChart },
    { name: 'AI Marketing', href: '/ai-marketing', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', icon: Settings },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Brain },
    { name: 'AI Fintech', href: '/ai-fintech', icon: BarChart },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Brain },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Settings },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Settings },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Settings },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2" 
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-cyan-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-cyan-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Core Services</h3>
                      {services.slice(0, 4).map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                          onClick={closeAllMenus}
                        >
                          <service.icon className="w-4 h-4" />
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Specialized</h3>
                      {services.slice(4, 8).map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                          onClick={closeAllMenus}
                        >
                          <service.icon className="w-4 h-4" />
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="border-t mt-4 pt-4 px-4">
                    <div className="grid grid-cols-2 gap-2">
                      {services.slice(8).map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                          onClick={closeAllMenus}
                        >
                          <service.icon className="w-4 h-4" />
                          <span className="text-sm">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/case-studies"
              className={`font-medium transition-colors hover:text-cyan-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>
            
            <Link
              to="/enterprise"
              className={`font-medium transition-colors hover:text-cyan-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Enterprise
            </Link>
            
            <Link
              to="/team"
              className={`font-medium transition-colors hover:text-cyan-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Team
            </Link>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-gray-700 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-colors"
                      onClick={closeAllMenus}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/case-studies" 
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              
              <Link 
                to="/enterprise" 
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Enterprise
              </Link>
              
              <Link 
                to="/team" 
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Team
              </Link>
              
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium text-center"
                onClick={closeAllMenus}
              >
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