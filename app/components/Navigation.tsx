import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Sparkles, Zap, Brain, Cloud, Shield } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo with Neon Effect */}
          <Link to="/" className="group relative">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-black px-3 py-1 rounded-lg">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </div>
              </div>
              <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link 
              to="/" 
              className="relative group text-white hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>
            
            <Link 
              to="/about" 
              className="relative group text-white hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center text-white hover:text-cyan-400 transition-all duration-300 font-medium"
              >
                <span className="relative z-10">Services</span>
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md rounded-xl border border-cyan-500/30 py-4 z-50 shadow-2xl">
                  <div className="px-4 py-2 border-b border-cyan-500/20">
                    <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Solutions</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 p-4">
                    <Link to="/services" className="group flex items-center p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                      <Zap className="w-5 h-5 text-cyan-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">All Services</div>
                        <div className="text-gray-400 text-xs">Complete overview</div>
                      </div>
                    </Link>
                    
                    <Link to="/micro-saas" className="group flex items-center p-3 rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                      <Cloud className="w-5 h-5 text-purple-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">Micro SAAS</div>
                        <div className="text-gray-400 text-xs">50+ AI Tools</div>
                      </div>
                    </Link>
                    
                    <Link to="/ai-services" className="group flex items-center p-3 rounded-lg hover:bg-green-500/10 transition-all duration-300">
                      <Brain className="w-5 h-5 text-green-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">AI Services</div>
                        <div className="text-gray-400 text-xs">Machine Learning</div>
                      </div>
                    </Link>
                    
                    <Link to="/it-services" className="group flex items-center p-3 rounded-lg hover:bg-blue-500/10 transition-all duration-300">
                      <Shield className="w-5 h-5 text-blue-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">IT Services</div>
                        <div className="text-gray-400 text-xs">Infrastructure</div>
                      </div>
                    </Link>
                    
                    <Link to="/quantum-computing" className="group flex items-center p-3 rounded-lg hover:bg-yellow-500/10 transition-all duration-300">
                      <div className="w-5 h-5 text-yellow-400 mr-3 text-center">⚛️</div>
                      <div>
                        <div className="text-white font-medium">Quantum Computing</div>
                        <div className="text-gray-400 text-xs">Next-gen computing</div>
                      </div>
                    </Link>
                    
                    <Link to="/blockchain-web3" className="group flex items-center p-3 rounded-lg hover:bg-orange-500/10 transition-all duration-300">
                      <div className="w-5 h-5 text-orange-400 mr-3 text-center">⛓️</div>
                      <div>
                        <div className="text-white font-medium">Blockchain & Web3</div>
                        <div className="text-gray-400 text-xs">Decentralized solutions</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/case-studies" 
              className="relative group text-white hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              <span className="relative z-10">Case Studies</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>
            
            <Link 
              to="/enterprise" 
              className="relative group text-white hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              <span className="relative z-10">Enterprise</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>
            
            <Link 
              to="/team" 
              className="relative group text-white hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              <span className="relative z-10">Team</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>
            
            <Link 
              to="/contact" 
              className="relative group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20 bg-black/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white hover:text-cyan-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-cyan-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold px-4 py-2">Services</div>
                <div className="ml-4 space-y-2">
                  <Link 
                    to="/services" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                    onClick={() => setIsOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link 
                    to="/micro-saas" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                    onClick={() => setIsOpen(false)}
                  >
                    Micro SAAS Solutions
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Services
                  </Link>
                  <Link 
                    to="/it-services" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                    onClick={() => setIsOpen(false)}
                  >
                    IT Services
                  </Link>
                  <Link 
                    to="/quantum-computing" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                    onClick={() => setIsOpen(false)}
                  >
                    Quantum Computing
                  </Link>
                  <Link 
                    to="/blockchain-web3" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                    onClick={() => setIsOpen(false)}
                  >
                    Blockchain & Web3
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/case-studies" 
                className="text-white hover:text-cyan-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/enterprise" 
                className="text-white hover:text-cyan-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                onClick={() => setIsOpen(false)}
              >
                Enterprise
              </Link>
              <Link 
                to="/team" 
                className="text-white hover:text-cyan-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
