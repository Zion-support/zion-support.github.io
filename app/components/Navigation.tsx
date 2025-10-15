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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                ZION TECH
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className="relative px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <div className="relative group">
              <button className="px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300 flex items-center">
                Services
                <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link to="/ai-services" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 transition-colors duration-200">
                    <div className="flex items-center">
                      <span className="text-xl mr-3">🤖</span>
                      <div>
                        <div className="font-medium">AI Services</div>
                        <div className="text-sm text-white/60">Machine Learning & AI</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/micro-saas-solutions" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 transition-colors duration-200">
                    <div className="flex items-center">
                      <span className="text-xl mr-3">⚡</span>
                      <div>
                        <div className="font-medium">Micro SAAS</div>
                        <div className="text-sm text-white/60">Software Solutions</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/it-services" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 transition-colors duration-200">
                    <div className="flex items-center">
                      <span className="text-xl mr-3">☁️</span>
                      <div>
                        <div className="font-medium">IT Solutions</div>
                        <div className="text-sm text-white/60">Cloud & Infrastructure</div>
                      </div>
                    </div>
                  </Link>
                  <div className="border-t border-white/10 my-2"></div>
                  <Link to="/web-development" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 transition-colors duration-200">
                    <div className="flex items-center">
                      <span className="text-xl mr-3">🌐</span>
                      <div>
                        <div className="font-medium">Web Development</div>
                        <div className="text-sm text-white/60">Custom Websites</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/mobile-development" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 transition-colors duration-200">
                    <div className="flex items-center">
                      <span className="text-xl mr-3">📱</span>
                      <div>
                        <div className="font-medium">Mobile Apps</div>
                        <div className="text-sm text-white/60">iOS & Android</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="relative px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              to="/contact" 
              className="relative px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 focus:outline-none focus:text-blue-400 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10">
          <div className="px-4 py-6 space-y-4">
            <Link 
              to="/" 
              className="block text-white/90 hover:text-white font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <div className="space-y-2">
              <div className="text-white/60 font-medium text-sm uppercase tracking-wider">Services</div>
              <Link 
                to="/ai-services" 
                className="block pl-4 text-white/90 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                🤖 AI Services
              </Link>
              <Link 
                to="/micro-saas-solutions" 
                className="block pl-4 text-white/90 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                ⚡ Micro SAAS
              </Link>
              <Link 
                to="/it-services" 
                className="block pl-4 text-white/90 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                ☁️ IT Solutions
              </Link>
              <Link 
                to="/web-development" 
                className="block pl-4 text-white/90 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                🌐 Web Development
              </Link>
              <Link 
                to="/mobile-development" 
                className="block pl-4 text-white/90 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                📱 Mobile Apps
              </Link>
            </div>
            
            <Link 
              to="/about" 
              className="block text-white/90 hover:text-white font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;