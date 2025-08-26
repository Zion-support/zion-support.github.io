import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Comprehensive Services 2025', href: '/comprehensive-services-showcase-2025', description: '100+ Cutting-edge Technology Solutions' },
    { name: 'AI & Machine Learning', href: '/services/ai', description: 'Advanced AI Solutions & Platforms' },
    { name: 'Quantum Computing', href: '/services/quantum', description: 'Quantum AI & Research Platforms' },
    { name: 'IT Infrastructure', href: '/services/infrastructure', description: 'Enterprise Infrastructure Solutions' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Advanced Security & Zero-Trust' },
    { name: 'Edge Computing', href: '/services/edge', description: 'IoT & Edge AI Solutions' },
    { name: 'Emerging Technologies', href: '/innovative-services-2025', description: 'Space Tech, Green Tech & More' },
    { name: 'Industry Solutions', href: '/services/industry', description: 'Specialized Industry Platforms' }
  ];

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
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-lg rounded-xl border border-white/20 shadow-2xl"
                >
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-start p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                        >
                          <div className="flex-1">
                            <div className="text-white font-medium group-hover:text-blue-400 transition-colors duration-200">
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-400 mt-1">
                              {service.description}
                            </div>
                          </div>
                          <svg className="h-4 w-4 text-gray-500 group-hover:text-blue-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Featured Services */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Featured Platforms</h4>
                      <div className="space-y-2">
                        <Link
                          to="/quantum-neural-network-platform"
                          className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-sm text-gray-300 hover:text-blue-400"
                        >
                          <span>🧠 Quantum Neural Network Platform</span>
                        </Link>
                        <Link
                          to="/autonomous-business-operations-platform"
                          className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-sm text-gray-300 hover:text-blue-400"
                        >
                          <span>🤖 Autonomous Business Operations</span>
                        </Link>
                        <Link
                          to="/ai-powered-it-asset-management"
                          className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-sm text-gray-300 hover:text-blue-400"
                        >
                          <span>💻 AI-Powered IT Asset Management</span>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <Link
                        to="/services"
                        className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
              >
                Solutions
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/case-studies"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Case Studies
            </Link>
            <Link
              to="/comprehensive-pricing-2025"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              to="/news"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              News
            </Link>
            <Link
              to="/careers"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Careers
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

          {/* Sidebar toggle button */}
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none mr-2"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

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
              <Link
                to="/comprehensive-pricing-2025"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              
              {/* Mobile Services Section */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-400 mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="block px-3 py-2 text-sm text-blue-400 hover:text-blue-300 hover:bg-gray-700 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
              
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/case-studies"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to="/news"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link
                to="/careers"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
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
