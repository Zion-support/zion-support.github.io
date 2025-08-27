import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

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
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-white hover:text-zion-cyan transition-colors duration-300"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl py-4"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-2 text-sm uppercase tracking-wide">Core Services</h3>
                      <ul className="space-y-2">
                        <li><Link to="/ai-services" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">AI Services</Link></li>
                        <li><Link to="/services/cybersecurity" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Cybersecurity</Link></li>
                        <li><Link to="/services/cloud" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Cloud Services</Link></li>
                        <li><Link to="/services/blockchain" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Blockchain</Link></li>
                        <li><Link to="/services/quantum" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Quantum Computing</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-2 text-sm uppercase tracking-wide">Specialized</h3>
                      <ul className="space-y-2">
                        <li><Link to="/services/iot" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">IoT Services</Link></li>
                        <li><Link to="/services/digital-marketing" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Digital Marketing</Link></li>
                        <li><Link to="/it-onsite-services" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">IT Onsite</Link></li>
                        <li><Link to="/green-it" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Green IT</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-white hover:text-zion-cyan transition-colors duration-300"
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
              >
                Solutions <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {solutionsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl py-4"
                  onMouseEnter={() => setSolutionsDropdownOpen(true)}
                  onMouseLeave={() => setSolutionsDropdownOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-2 text-sm uppercase tracking-wide">Industry</h3>
                      <ul className="space-y-2">
                        <li><Link to="/solutions/enterprise" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Enterprise</Link></li>
                        <li><Link to="/solutions/healthcare" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Healthcare</Link></li>
                        <li><Link to="/solutions/government" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Government</Link></li>
                        <li><Link to="/solutions/retail" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Retail</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-2 text-sm uppercase tracking-wide">Business</h3>
                      <ul className="space-y-2">
                        <li><Link to="/enhanced-services" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Digital Transformation</Link></li>
                        <li><Link to="/it-services" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">IT Consulting</Link></li>
                        <li><Link to="/micro-saas-services" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Custom Development</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-white hover:text-zion-cyan transition-colors duration-300"
                onMouseEnter={() => setCompanyDropdownOpen(true)}
                onMouseLeave={() => setCompanyDropdownOpen(false)}
              >
                Company <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {companyDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl py-4"
                  onMouseEnter={() => setCompanyDropdownOpen(true)}
                  onMouseLeave={() => setCompanyDropdownOpen(false)}
                >
                  <div className="px-4 space-y-2">
                    <Link to="/about" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors py-2">About Us</Link>
                    <Link to="/careers" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors py-2">Careers</Link>
                    <Link to="/partners" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors py-2">Partners</Link>
                    <Link to="/blog" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors py-2">Blog</Link>
                    <Link to="/contact" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors py-2">Contact</Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/services" className="text-white hover:text-zion-cyan transition-colors duration-300">All Services</Link>
            <Link to="/marketplace" className="text-white hover:text-zion-cyan transition-colors duration-300">Marketplace</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-zion-cyan hover:text-white transition-colors duration-300"
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-zion-cyan transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-zion-cyan/20">
          <div className="px-4 py-6 space-y-4">
            <Link to="/" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2">Home</Link>
            <Link to="/services" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2">Services</Link>
            <Link to="/enhanced-services" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2">Solutions</Link>
            <Link to="/about" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2">About</Link>
            <Link to="/marketplace" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2">Marketplace</Link>
            <Link to="/blog" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2">Blog</Link>
            <Link to="/contact" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2">Contact</Link>
            
            <div className="pt-4 border-t border-zion-cyan/20 space-y-3">
              <Link 
                to="/login" 
                className="block text-zion-cyan hover:text-white transition-colors duration-300 py-2"
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="block px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg text-center hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
