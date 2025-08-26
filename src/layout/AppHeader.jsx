import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [marketplaceDropdownOpen, setMarketplaceDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  const closeAllDropdowns = () => {
    setServicesDropdownOpen(false);
    setMarketplaceDropdownOpen(false);
    setCompanyDropdownOpen(false);
  };

  return (
    <header className="bg-black/90 backdrop-blur-md border-b border-zion-cyan/20 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={closeAllDropdowns}>
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
            <Link to="/" className="text-white hover:text-zion-cyan transition-colors duration-300" onClick={closeAllDropdowns}>
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-white hover:text-zion-cyan transition-colors duration-300"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-zinc-900/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl py-4"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wide">Core Services</h3>
                      <div className="space-y-2">
                        <Link to="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">AI & Analytics</Link>
                        <Link to="/cybersecurity-services" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Cybersecurity</Link>
                        <Link to="/cloud-infrastructure" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Cloud Solutions</Link>
                        <Link to="/quantum-technology" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Quantum Computing</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wide">Specialized</h3>
                      <div className="space-y-2">
                        <Link to="/blockchain-services" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Blockchain</Link>
                        <Link to="/iot-services" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">IoT & Edge</Link>
                        <Link to="/digital-marketing-services" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Digital Marketing</Link>
                        <Link to="/manufacturing-solutions" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Manufacturing</Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zion-cyan/20 px-4">
                    <Link to="/services" className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors">
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Marketplace Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-white hover:text-zion-cyan transition-colors duration-300"
                onMouseEnter={() => setMarketplaceDropdownOpen(true)}
                onMouseLeave={() => setMarketplaceDropdownOpen(false)}
              >
                Marketplace
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {marketplaceDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-zinc-900/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl py-4"
                  onMouseEnter={() => setMarketplaceDropdownOpen(true)}
                  onMouseLeave={() => setMarketplaceDropdownOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wide">Products</h3>
                      <div className="space-y-2">
                        <Link to="/products" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">All Products</Link>
                        <Link to="/new-products" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">New Arrivals</Link>
                        <Link to="/featured" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Featured</Link>
                        <Link to="/categories" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Categories</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wide">Services</h3>
                      <div className="space-y-2">
                        <Link to="/talent" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Talent</Link>
                        <Link to="/equipment" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Equipment</Link>
                        <Link to="/green-it" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Green IT</Link>
                        <Link to="/it-onsite-services" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Onsite Services</Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zion-cyan/20 px-4">
                    <Link to="/marketplace" className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors">
                      Explore Marketplace →
                    </Link>
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
                Company
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {companyDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-zinc-900/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl py-4"
                  onMouseEnter={() => setCompanyDropdownOpen(true)}
                  onMouseLeave={() => setCompanyDropdownOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wide">About</h3>
                      <div className="space-y-2">
                        <Link to="/about" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">About Us</Link>
                        <Link to="/partners" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Partners</Link>
                        <Link to="/careers" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Careers</Link>
                        <Link to="/blog" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Blog</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wide">Support</h3>
                      <div className="space-y-2">
                        <Link to="/help" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Help Center</Link>
                        <Link to="/faq" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">FAQ</Link>
                        <Link to="/support" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Contact Support</Link>
                        <Link to="/status" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">System Status</Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zion-cyan/20 px-4">
                    <Link to="/contact" className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors">
                      Get in Touch →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-white hover:text-zion-cyan transition-colors duration-300" onClick={closeAllDropdowns}>
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login" className="text-white hover:text-zion-cyan transition-colors duration-300 font-medium" onClick={closeAllDropdowns}>
              Login
            </Link>
            <Link to="/contact" className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform" onClick={closeAllDropdowns}>
              Get Started
            </Link>
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
              <Link to="/" className="text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              
              {/* Mobile Services Section */}
              <div className="border-l-2 border-zion-cyan/30 pl-4">
                <h3 className="text-zion-cyan font-semibold mb-2 text-sm uppercase tracking-wide">Services</h3>
                <div className="space-y-2 ml-4">
                  <Link to="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>AI & Analytics</Link>
                  <Link to="/cybersecurity-services" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Cybersecurity</Link>
                  <Link to="/cloud-infrastructure" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Cloud Solutions</Link>
                  <Link to="/quantum-technology" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Quantum Computing</Link>
                  <Link to="/services" className="block text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>View All Services →</Link>
                </div>
              </div>

              {/* Mobile Marketplace Section */}
              <div className="border-l-2 border-zion-cyan/30 pl-4">
                <h3 className="text-zion-cyan font-semibold mb-2 text-sm uppercase tracking-wide">Marketplace</h3>
                <div className="space-y-2 ml-4">
                  <Link to="/products" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Products</Link>
                  <Link to="/talent" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Talent</Link>
                  <Link to="/equipment" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Equipment</Link>
                  <Link to="/marketplace" className="block text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Explore Marketplace →</Link>
                </div>
              </div>

              {/* Mobile Company Section */}
              <div className="border-l-2 border-zion-cyan/30 pl-4">
                <h3 className="text-zion-cyan font-semibold mb-2 text-sm uppercase tracking-wide">Company</h3>
                <div className="space-y-2 ml-4">
                  <Link to="/about" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                  <Link to="/partners" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Partners</Link>
                  <Link to="/careers" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
                  <Link to="/blog" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                  <Link to="/help" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Help Center</Link>
                  <Link to="/faq" className="block text-zion-slate-light hover:text-zion-cyan text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
                </div>
              </div>

              <Link to="/contact" className="text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              
              <div className="pt-4 border-t border-zion-cyan/20">
                <Link to="/login" className="block text-white hover:text-zion-cyan transition-colors duration-300 font-medium mb-2" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/contact" className="block px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium text-center" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
