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
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <h1 className="text-3xl font-bold gradient-text group-hover:neon-text-cyan transition-all duration-300">
                Zion Tech Group
              </h1>
              <div className="text-xs text-gray-400 mt-1 font-mono">
                AI & IT Solutions
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className="nav-link-futuristic group">
              <span className="group-hover:neon-text-cyan transition-colors">Home</span>
            </Link>
            <Link to="/about" className="nav-link-futuristic group">
              <span className="group-hover:neon-text-cyan transition-colors">About</span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="nav-link-futuristic flex items-center group"
              >
                <span className="group-hover:neon-text-cyan transition-colors">Services</span>
                <svg className="ml-1 h-4 w-4 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-2 w-80 glass-effect z-50 rounded-xl border border-cyan-500/20"
                >
                  <div className="py-4">
                    <div className="px-4 py-2 border-b border-gray-700/50">
                      <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Our Services</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-1 px-2 py-2">
                      <Link to="/services" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">
                        <span className="font-medium">All Services</span>
                        <div className="text-xs text-gray-500">Complete overview</div>
                      </Link>
                      <Link to="/ai-services" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">
                        <span className="font-medium">AI Services</span>
                        <div className="text-xs text-gray-500">Artificial Intelligence</div>
                      </Link>
                      <Link to="/it-services" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">
                        <span className="font-medium">IT Services</span>
                        <div className="text-xs text-gray-500">Technology Solutions</div>
                      </Link>
                      <Link to="/micro-saas-solutions" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">
                        <span className="font-medium">Micro SAAS</span>
                        <div className="text-xs text-gray-500">Software Solutions</div>
                      </Link>
                      <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">
                        <span className="font-medium">Cloud</span>
                        <div className="text-xs text-gray-500">Infrastructure</div>
                      </Link>
                      <Link to="/5g-solutions" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">
                        <span className="font-medium">5G Solutions</span>
                        <div className="text-xs text-gray-500">Next-gen Networks</div>
                      </Link>
                      <Link to="/digital-transformation" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">
                        <span className="font-medium">Digital Transform</span>
                        <div className="text-xs text-gray-500">Business Evolution</div>
                      </Link>
                      <Link to="/data-analytics" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">
                        <span className="font-medium">Data Analytics</span>
                        <div className="text-xs text-gray-500">Business Intelligence</div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="nav-link-futuristic group">
              <span className="group-hover:neon-text-cyan transition-colors">Pricing</span>
            </Link>
            <Link to="/blog" className="nav-link-futuristic group">
              <span className="group-hover:neon-text-cyan transition-colors">Blog</span>
            </Link>
            <Link to="/team" className="nav-link-futuristic group">
              <span className="group-hover:neon-text-cyan transition-colors">Team</span>
            </Link>
            <Link to="/careers" className="nav-link-futuristic group">
              <span className="group-hover:neon-text-cyan transition-colors">Careers</span>
            </Link>
            <Link to="/contact" className="nav-link-futuristic group">
              <span className="group-hover:neon-text-cyan transition-colors">Contact</span>
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
        <div className="lg:hidden glass-effect mx-4 mt-2 rounded-xl border border-cyan-500/20">
          <div className="px-4 pt-4 pb-4 space-y-2">
            <div className="border-b border-gray-700/50 pb-3 mb-3">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Navigation</h3>
            </div>
            
            <Link to="/" className="text-gray-300 hover:text-cyan-400 block px-3 py-3 rounded-lg text-base font-medium transition-colors hover:bg-cyan-500/10">
              <span className="flex items-center">
                <span className="mr-3">🏠</span>
                Home
              </span>
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 block px-3 py-3 rounded-lg text-base font-medium transition-colors hover:bg-cyan-500/10">
              <span className="flex items-center">
                <span className="mr-3">ℹ️</span>
                About
              </span>
            </Link>
            
            {/* Mobile Services Menu */}
            <div className="px-3 py-2">
              <div className="text-gray-300 text-base font-medium mb-3 flex items-center">
                <span className="mr-3">⚙️</span>
                Services
              </div>
              <div className="ml-6 space-y-2">
                <Link to="/services" className="text-gray-400 hover:text-cyan-400 block px-3 py-2 rounded-lg text-sm transition-colors hover:bg-cyan-500/10">
                  <span className="font-medium">All Services</span>
                  <div className="text-xs text-gray-500">Complete overview</div>
                </Link>
                <Link to="/ai-services" className="text-gray-400 hover:text-cyan-400 block px-3 py-2 rounded-lg text-sm transition-colors hover:bg-cyan-500/10">
                  <span className="font-medium">AI Services</span>
                  <div className="text-xs text-gray-500">Artificial Intelligence</div>
                </Link>
                <Link to="/it-services" className="text-gray-400 hover:text-cyan-400 block px-3 py-2 rounded-lg text-sm transition-colors hover:bg-cyan-500/10">
                  <span className="font-medium">IT Services</span>
                  <div className="text-xs text-gray-500">Technology Solutions</div>
                </Link>
                <Link to="/micro-saas-solutions" className="text-gray-400 hover:text-cyan-400 block px-3 py-2 rounded-lg text-sm transition-colors hover:bg-cyan-500/10">
                  <span className="font-medium">Micro SAAS</span>
                  <div className="text-xs text-gray-500">Software Solutions</div>
                </Link>
                <Link to="/cloud-infrastructure" className="text-gray-400 hover:text-cyan-400 block px-3 py-2 rounded-lg text-sm transition-colors hover:bg-cyan-500/10">
                  <span className="font-medium">Cloud Infrastructure</span>
                  <div className="text-xs text-gray-500">Scalable Solutions</div>
                </Link>
                <Link to="/5g-solutions" className="text-gray-400 hover:text-cyan-400 block px-3 py-2 rounded-lg text-sm transition-colors hover:bg-cyan-500/10">
                  <span className="font-medium">5G Solutions</span>
                  <div className="text-xs text-gray-500">Next-gen Networks</div>
                </Link>
                <Link to="/digital-transformation" className="text-gray-400 hover:text-cyan-400 block px-3 py-2 rounded-lg text-sm transition-colors hover:bg-cyan-500/10">
                  <span className="font-medium">Digital Transformation</span>
                  <div className="text-xs text-gray-500">Business Evolution</div>
                </Link>
              </div>
            </div>
            
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 block px-3 py-3 rounded-lg text-base font-medium transition-colors hover:bg-cyan-500/10">
              <span className="flex items-center">
                <span className="mr-3">💰</span>
                Pricing
              </span>
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 block px-3 py-3 rounded-lg text-base font-medium transition-colors hover:bg-cyan-500/10">
              <span className="flex items-center">
                <span className="mr-3">📝</span>
                Blog
              </span>
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 block px-3 py-3 rounded-lg text-base font-medium transition-colors hover:bg-cyan-500/10">
              <span className="flex items-center">
                <span className="mr-3">👥</span>
                Team
              </span>
            </Link>
            <Link to="/careers" className="text-gray-300 hover:text-cyan-400 block px-3 py-3 rounded-lg text-base font-medium transition-colors hover:bg-cyan-500/10">
              <span className="flex items-center">
                <span className="mr-3">💼</span>
                Careers
              </span>
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 block px-3 py-3 rounded-lg text-base font-medium transition-colors hover:bg-cyan-500/10">
              <span className="flex items-center">
                <span className="mr-3">📞</span>
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;