import React, { useState, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleServicesMouseEnter = useCallback(() => {
    setServicesOpen(true);
  }, []);

  const handleServicesMouseLeave = useCallback(() => {
    setServicesOpen(false);
  }, []);

  return (
    <nav className="nav-futuristic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">Zion Tech Group</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link-futuristic">
              Home
            </Link>
            <Link to="/about" className="nav-link-futuristic">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="nav-link-futuristic flex items-center"
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-2 w-64 glass-effect z-50"
                >
                  <div className="py-2">
                    <Link to="/services" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">All Services</Link>
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">AI Services</Link>
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">IT Services</Link>
                    <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Micro SAAS Solutions</Link>
                    <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Cloud Infrastructure</Link>
                    <Link to="/5g-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">5G Solutions</Link>
                    <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Digital Transformation</Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="nav-link-futuristic">
              Pricing
            </Link>
            <Link to="/blog" className="nav-link-futuristic">
              Blog
            </Link>
            <Link to="/team" className="nav-link-futuristic">
              Team
            </Link>
            <Link to="/careers" className="nav-link-futuristic">
              Careers
            </Link>
            <Link to="/contact" className="nav-link-futuristic">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={handleMenuToggle}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-effect mx-4 mt-2 rounded-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              About
            </Link>
            
            {/* Mobile Services Menu */}
            <div className="px-3 py-2">
              <div className="text-gray-300 text-base font-medium mb-2">Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/services" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">All Services</Link>
                <Link to="/ai-services" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">AI Services</Link>
                <Link to="/it-services" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">IT Services</Link>
                <Link to="/micro-saas-solutions" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Micro SAAS Solutions</Link>
                <Link to="/cloud-infrastructure" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Cloud Infrastructure</Link>
                <Link to="/5g-solutions" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">5G Solutions</Link>
                <Link to="/digital-transformation" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Digital Transformation</Link>
              </div>
            </div>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Blog
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Team
            </Link>
            <Link to="/careers" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;