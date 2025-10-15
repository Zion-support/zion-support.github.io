import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="futuristic-bg"></div>
      <div className="animated-grid"></div>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="relative">
                  <h1 className="text-3xl font-bold holographic group-hover:scale-110 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className="relative text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <div className="relative group">
                <button className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center">
                  Services
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Services Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      <Link to="/ai-services" className="block px-4 py-3 text-white hover:bg-cyan-500/20 rounded-lg transition-colors duration-200">
                        <div className="font-semibold text-cyan-400">AI Services</div>
                        <div className="text-sm text-gray-300">Artificial Intelligence Solutions</div>
                      </Link>
                      <Link to="/micro-saas-solutions" className="block px-4 py-3 text-white hover:bg-purple-500/20 rounded-lg transition-colors duration-200">
                        <div className="font-semibold text-purple-400">Micro SAAS</div>
                        <div className="text-sm text-gray-300">Software as a Service Solutions</div>
                      </Link>
                      <Link to="/it-services" className="block px-4 py-3 text-white hover:bg-pink-500/20 rounded-lg transition-colors duration-200">
                        <div className="font-semibold text-pink-400">IT Services</div>
                        <div className="text-sm text-gray-300">Information Technology Solutions</div>
                      </Link>
                      <Link to="/cloud-infrastructure" className="block px-4 py-3 text-white hover:bg-green-500/20 rounded-lg transition-colors duration-200">
                        <div className="font-semibold text-green-400">Cloud Infrastructure</div>
                        <div className="text-sm text-gray-300">Cloud Computing Solutions</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="relative text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                to="/contact" 
                className="relative text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                to="/pricing" 
                className="neon-button neon-button-purple"
              >
                Pricing
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-cyan-400 focus:outline-none focus:text-cyan-400 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/30">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-white hover:bg-cyan-500/20 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-1">
                <div className="px-3 py-2 text-cyan-400 text-sm font-semibold uppercase tracking-wider">Services</div>
                <Link 
                  to="/ai-services" 
                  className="block px-6 py-2 text-gray-300 hover:text-white hover:bg-cyan-500/20 rounded-md text-sm transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  AI Services
                </Link>
                <Link 
                  to="/micro-saas-solutions" 
                  className="block px-6 py-2 text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-md text-sm transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Micro SAAS Solutions
                </Link>
                <Link 
                  to="/it-services" 
                  className="block px-6 py-2 text-gray-300 hover:text-white hover:bg-pink-500/20 rounded-md text-sm transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  IT Services
                </Link>
                <Link 
                  to="/cloud-infrastructure" 
                  className="block px-6 py-2 text-gray-300 hover:text-white hover:bg-green-500/20 rounded-md text-sm transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Cloud Infrastructure
                </Link>
              </div>
              
              <Link 
                to="/about" 
                className="block px-3 py-2 text-white hover:bg-cyan-500/20 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-white hover:bg-cyan-500/20 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <Link 
                to="/pricing" 
                className="block px-3 py-2 text-center neon-button neon-button-purple mt-4"
                onClick={() => setIsOpen(false)}
              >
                View Pricing
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;