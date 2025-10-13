import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Shield, Cloud, Cpu, Wifi, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'AI Solutions', href: '/services/ai', icon: Cpu },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
    { name: 'Cloud Services', href: '/services/cloud', icon: Cloud },
    { name: '5G Solutions', href: '/services/5g', icon: Wifi },
    { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Globe },
  ];

  const solutions = [
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Analytics', href: '/ai-analytics', icon: Cpu },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', icon: Wifi },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isSolutionsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  {solutions.map((solution) => {
                    const Icon = solution.icon;
                    return (
                      <Link
                        key={solution.name}
                        to={solution.href}
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{solution.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors ${
                isActive('/pricing') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Pricing
            </Link>
            
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/demo"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Demo
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-400 mb-2">Services</div>
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  );
                })}
              </div>
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-400 mb-2">Solutions</div>
                {solutions.map((solution) => {
                  const Icon = solution.icon;
                  return (
                    <Link
                      key={solution.name}
                      to={solution.href}
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{solution.name}</span>
                    </Link>
                  );
                })}
              </div>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-slate-700">
                <Link
                  to="/demo"
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Demo
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-base font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;