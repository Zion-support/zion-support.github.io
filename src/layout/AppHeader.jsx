import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [marketplaceDropdownOpen, setMarketplaceDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  const toggleDropdown = (dropdownType) => {
    if (dropdownType === 'services') {
      setServicesDropdownOpen(!servicesDropdownOpen);
      setMarketplaceDropdownOpen(false);
      setCompanyDropdownOpen(false);
    } else if (dropdownType === 'marketplace') {
      setMarketplaceDropdownOpen(!marketplaceDropdownOpen);
      setServicesDropdownOpen(false);
      setCompanyDropdownOpen(false);
    } else if (dropdownType === 'company') {
      setCompanyDropdownOpen(!companyDropdownOpen);
      setServicesDropdownOpen(false);
      setMarketplaceDropdownOpen(false);
    }
  };

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
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-1 text-white hover:text-zion-cyan transition-colors duration-300"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-zinc-900/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl py-4">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wide">Core Services</h3>
                      <ul className="space-y-2">
                        <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">All Services</Link></li>
                        <li><Link to="/ai-business-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">AI Solutions</Link></li>
                        <li><Link to="/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Cybersecurity</Link></li>
                        <li><Link to="/cloud-migration" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Cloud Migration</Link></li>
                        <li><Link to="/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Digital Transformation</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wide">Specialized</h3>
                      <ul className="space-y-2">
                        <li><Link to="/blockchain-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Blockchain</Link></li>
                        <li><Link to="/quantum-technology" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Quantum Tech</Link></li>
                        <li><Link to="/5g-enterprise-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">5G Solutions</Link></li>
                        <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Green IT</Link></li>
                        <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Onsite Services</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zion-cyan/20 px-4">
                    <Link to="/services-pricing" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium block">View Pricing →</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Marketplace Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('marketplace')}
                className="flex items-center space-x-1 text-white hover:text-zion-cyan transition-colors duration-300"
              >
                <span>Marketplace</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${marketplaceDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {marketplaceDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-zinc-900/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl py-4">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wide">Products</h3>
                      <ul className="space-y-2">
                        <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">All Products</Link></li>
                        <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Equipment</Link></li>
                        <li><Link to="/software" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Software</Link></li>
                        <li><Link to="/hardware" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Hardware</Link></li>
                        <li><Link to="/publish-product" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm block py-1 font-medium">Sell Product →</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wide">Talent</h3>
                      <ul className="space-y-2">
                        <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Find Talent</Link></li>
                        <li><Link to="/post-job" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Post Job</Link></li>
                        <li><Link to="/portfolio-builder" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Portfolio Builder</Link></li>
                        <li><Link to="/hiring-tracker" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Hiring Tracker</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center space-x-1 text-white hover:text-zion-cyan transition-colors duration-300"
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${companyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {companyDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-zinc-900/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl py-4">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wide">About</h3>
                      <ul className="space-y-2">
                        <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">About Us</Link></li>
                        <li><Link to="/mission" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Mission</Link></li>
                        <li><Link to="/how-it-works" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">How It Works</Link></li>
                        <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Partners</Link></li>
                        <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Careers</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wide">Resources</h3>
                      <ul className="space-y-2">
                        <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Blog</Link></li>
                        <li><Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Events</Link></li>
                        <li><Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Webinars</Link></li>
                        <li><Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">Case Studies</Link></li>
                        <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1">FAQ</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/enterprise" className="text-white hover:text-zion-cyan transition-colors duration-300" onClick={closeAllDropdowns}>
              Enterprise
            </Link>
            
            <Link to="/developer" className="text-white hover:text-zion-cyan transition-colors duration-300" onClick={closeAllDropdowns}>
              Developer
            </Link>
            
            <Link to="/pricing" className="text-white hover:text-zion-cyan transition-colors duration-300" onClick={closeAllDropdowns}>
              Pricing
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact" className="text-white hover:text-zion-cyan transition-colors duration-300" onClick={closeAllDropdowns}>
              Contact
            </Link>
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
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              <div>
                <div className="text-zion-cyan font-medium mb-2">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="text-white hover:text-zion-cyan transition-colors duration-300 block" onClick={() => setMobileMenuOpen(false)}>All Services</Link>
                  <Link to="/ai-business-solutions" className="text-white hover:text-zion-cyan transition-colors duration-300 block" onClick={() => setMobileMenuOpen(false)}>AI Solutions</Link>
                  <Link to="/cybersecurity" className="text-white hover:text-zion-cyan transition-colors duration-300 block" onClick={() => setMobileMenuOpen(false)}>Cybersecurity</Link>
                  <Link to="/cloud-migration" className="text-white hover:text-zion-cyan transition-colors duration-300 block" onClick={() => setMobileMenuOpen(false)}>Cloud Migration</Link>
                  <Link to="/blockchain-services" className="text-white hover:text-zion-cyan transition-colors duration-300 block" onClick={() => setMobileMenuOpen(false)}>Blockchain</Link>
                </div>
              </div>

              {/* Mobile Marketplace Section */}
              <div>
                <div className="text-zion-cyan font-medium mb-2">Marketplace</div>
                <div className="ml-4 space-y-2">
                  <Link to="/marketplace" className="text-white hover:text-zion-cyan transition-colors duration-300 block" onClick={() => setMobileMenuOpen(false)}>Products</Link>
                  <Link to="/talent" className="text-white hover:text-zion-cyan transition-colors duration-300 block" onClick={() => setMobileMenuOpen(false)}>Talent</Link>
                  <Link to="/equipment" className="text-white hover:text-zion-cyan transition-colors duration-300 block" onClick={() => setMobileMenuOpen(false)}>Equipment</Link>
                </div>
              </div>

              {/* Mobile Company Section */}
              <div>
                <div className="text-zion-cyan font-medium mb-2">Company</div>
                <div className="ml-4 space-y-2">
                  <Link to="/about" className="text-white hover:text-zion-cyan transition-colors duration-300 block" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                  <Link to="/partners" className="text-white hover:text-zion-cyan transition-colors duration-300 block" onClick={() => setMobileMenuOpen(false)}>Partners</Link>
                  <Link to="/careers" className="text-white hover:text-zion-cyan transition-colors duration-300 block" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
                  <Link to="/blog" className="text-white hover:text-zion-cyan transition-colors duration-300 block" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                </div>
              </div>

              <Link to="/enterprise" className="text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                Enterprise
              </Link>
              
              <Link to="/developer" className="text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                Developer
              </Link>
              
              <Link to="/pricing" className="text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                Pricing
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

      {/* Click outside to close dropdowns */}
      {(servicesDropdownOpen || marketplaceDropdownOpen || companyDropdownOpen) && (
        <div className="fixed inset-0 z-40" onClick={closeAllDropdowns} />
      )}
    </header>
  );
}
