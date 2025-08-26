import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <header className="bg-slate-900/95 backdrop-blur-lg border-b border-white/10 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="p-4 grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">AI Solutions</h3>
                      <ul className="space-y-2">
                        <li><Link to="/ai-autonomous-research-assistant" className="text-gray-300 hover:text-white text-sm block">Research Assistant</Link></li>
                        <li><Link to="/ai-autonomous-business-operations" className="text-gray-300 hover:text-white text-sm block">Business Operations</Link></li>
                        <li><Link to="/ai-powered-it-asset-management" className="text-gray-300 hover:text-white text-sm block">IT Asset Management</Link></li>
                        <li><Link to="/quantum-neural-network-platform" className="text-gray-300 hover:text-white text-sm block">Quantum Neural Networks</Link></li>
                        <li><Link to="/autonomous-business-operations-platform" className="text-gray-300 hover:text-white text-sm block">Autonomous Platform</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Specialized Services</h3>
                      <ul className="space-y-2">
                        <li><Link to="/accessibility-auditor" className="text-gray-300 hover:text-white text-sm block">Accessibility Auditor</Link></li>
                        <li><Link to="/advanced-cybersecurity-suite" className="text-gray-300 hover:text-white text-sm block">Cybersecurity Suite</Link></li>
                        <li><Link to="/affiliate-attribution-hub" className="text-gray-300 hover:text-white text-sm block">Affiliate Attribution</Link></li>
                        <li><Link to="/soc2-compliance-automation" className="text-gray-300 hover:text-white text-sm block">SOC2 Compliance</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                onMouseEnter={() => setIsCompanyOpen(true)}
                onMouseLeave={() => setIsCompanyOpen(false)}
              >
                Company
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCompanyOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl"
                  onMouseEnter={() => setIsCompanyOpen(true)}
                  onMouseLeave={() => setIsCompanyOpen(false)}
                >
                  <div className="p-4">
                    <ul className="space-y-2">
                      <li><Link to="/about" className="text-gray-300 hover:text-white text-sm block">About Us</Link></li>
                      <li><Link to="/team" className="text-gray-300 hover:text-white text-sm block">Our Team</Link></li>
                      <li><Link to="/leadership" className="text-gray-300 hover:text-white text-sm block">Leadership</Link></li>
                      <li><Link to="/careers" className="text-gray-300 hover:text-white text-sm block">Careers</Link></li>
                      <li><Link to="/partners" className="text-gray-300 hover:text-white text-sm block">Partners</Link></li>
                      <li><Link to="/case-studies" className="text-gray-300 hover:text-white text-sm block">Case Studies</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Blog
            </Link>
            
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services Section */}
              <div className="px-3 py-2">
                <div className="text-white font-semibold mb-2">Services</div>
                <div className="ml-4 space-y-1">
                  <Link
                    to="/ai-autonomous-research-assistant"
                    className="block text-gray-300 hover:text-white text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AI Research Assistant
                  </Link>
                  <Link
                    to="/ai-autonomous-business-operations"
                    className="block text-gray-300 hover:text-white text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Business Operations
                  </Link>
                  <Link
                    to="/ai-powered-it-asset-management"
                    className="block text-gray-300 hover:text-white text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    IT Asset Management
                  </Link>
                  <Link
                    to="/quantum-neural-network-platform"
                    className="block text-gray-300 hover:text-white text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Quantum Neural Networks
                  </Link>
                  <Link
                    to="/autonomous-business-operations-platform"
                    className="block text-gray-300 hover:text-white text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Autonomous Platform
                  </Link>
                </div>
              </div>

              {/* Mobile Company Section */}
              <div className="px-3 py-2">
                <div className="text-white font-semibold mb-2">Company</div>
                <div className="ml-4 space-y-1">
                  <Link
                    to="/about"
                    className="block text-gray-300 hover:text-white text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/team"
                    className="block text-gray-300 hover:text-white text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/leadership"
                    className="block text-gray-300 hover:text-white text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Leadership
                  </Link>
                  <Link
                    to="/careers"
                    className="block text-gray-300 hover:text-white text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Careers
                  </Link>
                  <Link
                    to="/partners"
                    className="block text-gray-300 hover:text-white text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Partners
                  </Link>
                  <Link
                    to="/case-studies"
                    className="block text-gray-300 hover:text-white text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Case Studies
                  </Link>
                </div>
              </div>

              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
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
