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
                        <li><Link to="/cybersecurity" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Cybersecurity</Link></li>
                        <li><Link to="/cloud-services" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Cloud Services</Link></li>
                        <li><Link to="/blockchain-services" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Blockchain</Link></li>
                        <li><Link to="/quantum-services" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Quantum Computing</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-2 text-sm uppercase tracking-wide">Specialized</h3>
                      <ul className="space-y-2">
                        <li><Link to="/iot-services" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">IoT Services</Link></li>
                        <li><Link to="/digital-marketing-services" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Digital Marketing</Link></li>
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
                        <li><Link to="/enterprise-solutions" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Enterprise</Link></li>
                        <li><Link to="/healthcare-solutions" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Healthcare</Link></li>
                        <li><Link to="/government-solutions" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Government</Link></li>
                        <li><Link to="/retail-solutions" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Retail</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-2 text-sm uppercase tracking-wide">Business</h3>
                      <ul className="space-y-2">
                        <li><Link to="/financial-solutions" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Financial</Link></li>
                        <li><Link to="/manufacturing-solutions" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Manufacturing</Link></li>
                        <li><Link to="/digital-transformation" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Digital Transformation</Link></li>
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
                  <ul className="space-y-2 px-4">
                    <li><Link to="/about" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">About Us</Link></li>
                    <li><Link to="/careers" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Careers</Link></li>
                    <li><Link to="/partners" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Partners</Link></li>
                    <li><Link to="/blog" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Blog</Link></li>
                    <li><Link to="/events" className="text-white/80 hover:text-zion-cyan text-sm transition-colors">Events</Link></li>
                  </ul>
                </div>
              )}
            </div>

            <Link to="/marketplace" className="text-white hover:text-zion-cyan transition-colors duration-300">Marketplace</Link>
            <Link to="/contact" className="text-white hover:text-zion-cyan transition-colors duration-300">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login" className="text-white hover:text-zion-cyan transition-colors duration-300 font-medium">Login</Link>
            <Link to="/contact" className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform">Get Started</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors duration-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-zion-cyan/20">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-zion-cyan transition-colors duration-300">Home</Link>
              
              {/* Mobile Services Section */}
              <div className="border-l-2 border-zion-cyan/30 pl-4">
                <h3 className="text-zion-cyan font-semibold mb-2">Services</h3>
                <div className="space-y-2 ml-4">
                  <Link to="/ai-services" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">AI Services</Link>
                  <Link to="/cybersecurity" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">Cybersecurity</Link>
                  <Link to="/cloud-services" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">Cloud Services</Link>
                  <Link to="/blockchain-services" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">Blockchain</Link>
                  <Link to="/quantum-services" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">Quantum Computing</Link>
                </div>
              </div>

              {/* Mobile Solutions Section */}
              <div className="border-l-2 border-zion-cyan/30 pl-4">
                <h3 className="text-zion-cyan font-semibold mb-2">Solutions</h3>
                <div className="space-y-2 ml-4">
                  <Link to="/enterprise-solutions" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">Enterprise</Link>
                  <Link to="/healthcare-solutions" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">Healthcare</Link>
                  <Link to="/government-solutions" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">Government</Link>
                  <Link to="/retail-solutions" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">Retail</Link>
                </div>
              </div>

              <Link to="/marketplace" className="text-white hover:text-zion-cyan transition-colors duration-300">Marketplace</Link>
              <Link to="/about" className="text-white hover:text-zion-cyan transition-colors duration-300">About</Link>
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
