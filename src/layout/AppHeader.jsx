import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <header className="bg-black/90 backdrop-blur-md border-b border-zion-cyan/20 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg lg:text-xl">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl lg:text-2xl font-bold text-white">ZION TECH GROUP</div>
              <div className="text-xs text-zion-cyan font-medium">INNOVATION • TECHNOLOGY • FUTURE</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-zion-cyan transition-colors duration-300">Home</Link>
            <Link to="/about" className="text-white hover:text-zion-cyan transition-colors duration-300">About</Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServicesDropdown}
                className="flex items-center text-white hover:text-zion-cyan transition-colors duration-300"
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl">
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-zion-cyan font-semibold mb-2 text-sm uppercase tracking-wide">Core Services</h3>
                        <div className="space-y-2">
                          <Link to="/services" className="block text-white hover:text-zion-cyan text-sm transition-colors">All Services</Link>
                          <Link to="/ai-services" className="block text-white hover:text-zion-cyan text-sm transition-colors">AI Services</Link>
                          <Link to="/it-services" className="block text-white hover:text-zion-cyan text-sm transition-colors">IT Services</Link>
                          <Link to="/cybersecurity" className="block text-white hover:text-zion-cyan text-sm transition-colors">Cybersecurity</Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-zion-cyan font-semibold mb-2 text-sm uppercase tracking-wide">Specialized</h3>
                        <div className="space-y-2">
                          <Link to="/green-it" className="block text-white hover:text-zion-cyan text-sm transition-colors">Green IT</Link>
                          <Link to="/micro-saas-services" className="block text-white hover:text-zion-cyan text-sm transition-colors">Micro SaaS</Link>
                          <Link to="/comprehensive-services" className="block text-white hover:text-zion-cyan text-sm transition-colors">Enterprise</Link>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-zion-cyan/20">
                      <Link to="/pricing" className="block text-zion-cyan hover:text-zion-blue text-sm font-medium transition-colors">
                        View Pricing →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/marketplace" className="text-white hover:text-zion-cyan transition-colors duration-300">Marketplace</Link>
            <Link to="/pricing" className="text-white hover:text-zion-cyan transition-colors duration-300">Pricing</Link>
            <Link to="/contact" className="text-white hover:text-zion-cyan transition-colors duration-300">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/help" className="text-white hover:text-zion-cyan transition-colors duration-300 font-medium">Help</Link>
            <Link to="/login" className="text-white hover:text-zion-cyan transition-colors duration-300 font-medium">Login</Link>
            <Link to="/contact" className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform">Get Started</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors duration-300"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-zion-cyan/20">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-zion-cyan transition-colors duration-300">Home</Link>
              <Link to="/about" className="text-white hover:text-zion-cyan transition-colors duration-300">About</Link>
              
              {/* Mobile Services Section */}
              <div className="border-l-2 border-zion-cyan/30 pl-4">
                <div className="text-zion-cyan font-medium mb-2">Services</div>
                <div className="space-y-2 ml-4">
                  <Link to="/services" className="block text-white hover:text-zion-cyan text-sm transition-colors">All Services</Link>
                  <Link to="/ai-services" className="block text-white hover:text-zion-cyan text-sm transition-colors">AI Services</Link>
                  <Link to="/it-services" className="block text-white hover:text-zion-cyan text-sm transition-colors">IT Services</Link>
                  <Link to="/cybersecurity" className="block text-white hover:text-zion-cyan text-sm transition-colors">Cybersecurity</Link>
                  <Link to="/green-it" className="block text-white hover:text-zion-cyan text-sm transition-colors">Green IT</Link>
                  <Link to="/micro-saas-services" className="block text-white hover:text-zion-cyan text-sm transition-colors">Micro SaaS</Link>
                  <Link to="/comprehensive-services" className="block text-white hover:text-zion-cyan text-sm transition-colors">Enterprise</Link>
                </div>
              </div>
              
              <Link to="/marketplace" className="text-white hover:text-zion-cyan transition-colors duration-300">Marketplace</Link>
              <Link to="/pricing" className="text-white hover:text-zion-cyan transition-colors duration-300">Pricing</Link>
              <Link to="/help" className="text-white hover:text-zion-cyan transition-colors duration-300">Help</Link>
              <Link to="/contact" className="text-white hover:text-zion-cyan transition-colors duration-300">Contact</Link>
              
              <div className="pt-4 border-t border-zion-cyan/20">
                <Link to="/login" className="block text-white hover:text-zion-cyan transition-colors duration-300 font-medium mb-2">Login</Link>
                <Link to="/contact" className="block px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium text-center">Get Started</Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
