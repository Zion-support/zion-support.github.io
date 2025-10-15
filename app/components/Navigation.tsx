import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-effect backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <h1 className="text-3xl font-bold gradient-text group-hover:neon-text transition-all duration-300">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:neon-glow">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:neon-glow">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-300 hover:bg-cyan-500/10 hover:neon-glow"
              >
                Services
                <svg className="ml-1 h-4 w-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-2 w-64 glass-effect rounded-xl shadow-2xl z-50 border border-cyan-500/20"
                >
                  <div className="py-2">
                    <Link to="/services" className="block px-4 py-3 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">All Services</Link>
                    <Link to="/ai-services" className="block px-4 py-3 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">AI Services</Link>
                    <Link to="/micro-saas-solutions" className="block px-4 py-3 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">Micro SAAS</Link>
                    <Link to="/it-services" className="block px-4 py-3 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">IT Services</Link>
                    <Link to="/cloud-infrastructure" className="block px-4 py-3 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">Cloud Infrastructure</Link>
                    <Link to="/5g-solutions" className="block px-4 py-3 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">5G Solutions</Link>
                    <Link to="/digital-transformation" className="block px-4 py-3 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">Digital Transformation</Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:neon-glow">
              Pricing
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:neon-glow">
              Blog
            </Link>
            <Link to="/team" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:neon-glow">
              Team
            </Link>
            <Link to="/careers" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:neon-glow">
              Careers
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:neon-glow">
              Contact
            </Link>
            
            {/* CTA Button */}
            <a
              href="tel:+13024640950"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-sm hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Call Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 focus:outline-none focus:text-cyan-400 p-2 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-effect backdrop-blur-md border-t border-cyan-500/20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              About
            </Link>
            <div className="px-4 py-2">
              <div className="text-white text-base font-medium mb-3">Services</div>
              <div className="space-y-1">
                <Link to="/services" className="text-gray-300 hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">All Services</Link>
                <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">AI Services</Link>
                <Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">Micro SAAS</Link>
                <Link to="/it-services" className="text-gray-300 hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">IT Services</Link>
                <Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">Cloud Infrastructure</Link>
                <Link to="/5g-solutions" className="text-gray-300 hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">5G Solutions</Link>
                <Link to="/digital-transformation" className="text-gray-300 hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">Digital Transformation</Link>
              </div>
            </div>
            <Link to="/pricing" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              Pricing
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              Blog
            </Link>
            <Link to="/team" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              Team
            </Link>
            <Link to="/careers" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              Careers
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              Contact
            </Link>
            <div className="pt-4 border-t border-cyan-500/20">
              <a
                href="tel:+13024640950"
                className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                📞 Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;