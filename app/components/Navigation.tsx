import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Zap, Brain, Server, Shield } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
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
      {/* Top Contact Bar with Futuristic Design */}
      <div className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white py-3 text-sm overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center group">
                <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors duration-300">+1 302 464 0950</a>
              </div>
              <div className="flex items-center group">
                <Mail className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors duration-300">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center group">
                <MapPin className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
            <div className="text-xs flex items-center">
              <Zap className="w-4 h-4 mr-2 animate-pulse" />
              <span className="holographic font-bold">Leading AI & IT Solutions Provider</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation with Futuristic Design */}
      <nav className={`glass-effect sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo with Neon Effect */}
            <Link to="/" className="text-2xl font-bold text-white flex items-center group">
              <span className="text-3xl mr-2 group-hover:animate-spin transition-transform duration-300">⚡</span>
              <span className="holographic group-hover:neon-glow transition-all duration-300">Zion Tech Group</span>
            </Link>

            {/* Desktop Menu with Futuristic Styling */}
            <div className="hidden lg:flex space-x-8">
              <Link to="/" className="text-white hover:text-cyan-300 transition-all duration-300 font-medium relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/about" className="text-white hover:text-cyan-300 transition-all duration-300 font-medium relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Services Dropdown with Futuristic Design */}
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-white hover:text-cyan-300 transition-all duration-300 flex items-center font-medium relative group"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 glass-effect rounded-xl shadow-2xl border border-cyan-500/20 py-6 z-50 animate-fade-in">
                    <div className="grid grid-cols-2 gap-6 px-6">
                      <div>
                        <h3 className="font-semibold text-cyan-300 mb-4 flex items-center">
                          <Brain className="w-4 h-4 mr-2" />
                          Core Services
                        </h3>
                        <Link to="/services" className="block px-3 py-2 text-white hover:bg-cyan-500/20 hover:text-cyan-300 rounded-lg transition-all duration-300 group">
                          <span className="group-hover:ml-2 transition-all duration-300">All Services</span>
                        </Link>
                        <Link to="/micro-saas" className="block px-3 py-2 text-white hover:bg-cyan-500/20 hover:text-cyan-300 rounded-lg transition-all duration-300 group">
                          <span className="group-hover:ml-2 transition-all duration-300">Micro SAAS Solutions</span>
                        </Link>
                        <Link to="/ai-services" className="block px-3 py-2 text-white hover:bg-cyan-500/20 hover:text-cyan-300 rounded-lg transition-all duration-300 group">
                          <span className="group-hover:ml-2 transition-all duration-300">AI Services</span>
                        </Link>
                        <Link to="/it-services" className="block px-3 py-2 text-white hover:bg-cyan-500/20 hover:text-cyan-300 rounded-lg transition-all duration-300 group">
                          <span className="group-hover:ml-2 transition-all duration-300">IT Services</span>
                        </Link>
                      </div>
                      <div>
                        <h3 className="font-semibold text-purple-300 mb-4 flex items-center">
                          <Shield className="w-4 h-4 mr-2" />
                          Specialized
                        </h3>
                        <Link to="/quantum-computing" className="block px-3 py-2 text-white hover:bg-purple-500/20 hover:text-purple-300 rounded-lg transition-all duration-300 group">
                          <span className="group-hover:ml-2 transition-all duration-300">Quantum Computing</span>
                        </Link>
                        <Link to="/autonomous-systems" className="block px-3 py-2 text-white hover:bg-purple-500/20 hover:text-purple-300 rounded-lg transition-all duration-300 group">
                          <span className="group-hover:ml-2 transition-all duration-300">Autonomous Systems</span>
                        </Link>
                        <Link to="/blockchain-web3" className="block px-3 py-2 text-white hover:bg-purple-500/20 hover:text-purple-300 rounded-lg transition-all duration-300 group">
                          <span className="group-hover:ml-2 transition-all duration-300">Blockchain & Web3</span>
                        </Link>
                        <Link to="/cybersecurity" className="block px-3 py-2 text-white hover:bg-purple-500/20 hover:text-purple-300 rounded-lg transition-all duration-300 group">
                          <span className="group-hover:ml-2 transition-all duration-300">Cybersecurity</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/case-studies" className="text-white hover:text-cyan-300 transition-all duration-300 font-medium relative group">
                Case Studies
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/enterprise" className="text-white hover:text-cyan-300 transition-all duration-300 font-medium relative group">
                Enterprise
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/team" className="text-white hover:text-cyan-300 transition-all duration-300 font-medium relative group">
                Team
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 font-medium neon-pulse group">
                Contact
                <Zap className="w-4 h-4 ml-2 inline group-hover:animate-pulse" />
              </Link>
            </div>

            {/* Mobile Menu Button with Futuristic Design */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-cyan-300 transition-all duration-300 p-2 rounded-lg hover:bg-cyan-500/20"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu with Futuristic Design */}
          {isOpen && (
            <div className="lg:hidden py-6 border-t border-cyan-500/20 animate-fade-in">
              <div className="flex flex-col space-y-6">
                <Link to="/" className="text-white hover:text-cyan-300 transition-all duration-300 font-medium group flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:animate-pulse"></span>
                  Home
                </Link>
                <Link to="/about" className="text-white hover:text-cyan-300 transition-all duration-300 font-medium group flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:animate-pulse"></span>
                  About
                </Link>
                
                {/* Services Section */}
                <div className="space-y-3">
                  <div className="text-cyan-300 font-semibold text-lg flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    Services
                  </div>
                  <div className="ml-6 space-y-3">
                    <Link to="/services" className="block text-white hover:text-cyan-300 transition-all duration-300 group">
                      <span className="group-hover:ml-2 transition-all duration-300">All Services</span>
                    </Link>
                    <Link to="/micro-saas" className="block text-white hover:text-cyan-300 transition-all duration-300 group">
                      <span className="group-hover:ml-2 transition-all duration-300">Micro SAAS Solutions</span>
                    </Link>
                    <Link to="/ai-services" className="block text-white hover:text-cyan-300 transition-all duration-300 group">
                      <span className="group-hover:ml-2 transition-all duration-300">AI Services</span>
                    </Link>
                    <Link to="/it-services" className="block text-white hover:text-cyan-300 transition-all duration-300 group">
                      <span className="group-hover:ml-2 transition-all duration-300">IT Services</span>
                    </Link>
                    <Link to="/quantum-computing" className="block text-white hover:text-purple-300 transition-all duration-300 group">
                      <span className="group-hover:ml-2 transition-all duration-300">Quantum Computing</span>
                    </Link>
                    <Link to="/autonomous-systems" className="block text-white hover:text-purple-300 transition-all duration-300 group">
                      <span className="group-hover:ml-2 transition-all duration-300">Autonomous Systems</span>
                    </Link>
                    <Link to="/blockchain-web3" className="block text-white hover:text-purple-300 transition-all duration-300 group">
                      <span className="group-hover:ml-2 transition-all duration-300">Blockchain & Web3</span>
                    </Link>
                    <Link to="/cybersecurity" className="block text-white hover:text-purple-300 transition-all duration-300 group">
                      <span className="group-hover:ml-2 transition-all duration-300">Cybersecurity</span>
                    </Link>
                  </div>
                </div>
                
                <Link to="/case-studies" className="text-white hover:text-cyan-300 transition-all duration-300 font-medium group flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:animate-pulse"></span>
                  Case Studies
                </Link>
                <Link to="/enterprise" className="text-white hover:text-cyan-300 transition-all duration-300 font-medium group flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:animate-pulse"></span>
                  Enterprise
                </Link>
                <Link to="/team" className="text-white hover:text-cyan-300 transition-all duration-300 font-medium group flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:animate-pulse"></span>
                  Team
                </Link>
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 font-medium text-center neon-pulse group flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
