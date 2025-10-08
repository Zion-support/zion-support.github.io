import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Zap, Brain, Shield, Cloud, Cpu, Database, Lock, Globe } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20' 
        : 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-2 rounded-lg">
                <Zap className="w-6 h-6" />
              </div>
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-cyan-600' 
                  : 'text-white/90 hover:text-cyan-300'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-cyan-600' 
                  : 'text-white/90 hover:text-cyan-300'
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-1 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-cyan-600' 
                    : 'text-white/90 hover:text-cyan-300'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-4 w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-cyan-500/20 py-6 z-50 animate-fade-in">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider text-cyan-600">Core Services</h3>
                      <div className="space-y-3">
                        <Link to="/services" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-all duration-300 group">
                          <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span>All Services</span>
                        </Link>
                        <Link to="/micro-saas" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-all duration-300 group">
                          <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span>Micro SAAS</span>
                        </Link>
                        <Link to="/ai-services" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-all duration-300 group">
                          <Brain className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span>AI Services</span>
                        </Link>
                        <Link to="/it-services" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-all duration-300 group">
                          <Cpu className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span>IT Services</span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider text-purple-600">Specialized</h3>
                      <div className="space-y-3">
                        <Link to="/quantum-computing" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-all duration-300 group">
                          <Database className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span>Quantum Computing</span>
                        </Link>
                        <Link to="/autonomous-systems" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-all duration-300 group">
                          <Cpu className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span>Autonomous Systems</span>
                        </Link>
                        <Link to="/blockchain-web3" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-all duration-300 group">
                          <Shield className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span>Blockchain & Web3</span>
                        </Link>
                        <Link to="/cybersecurity" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-all duration-300 group">
                          <Lock className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span>Cybersecurity</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/case-studies" 
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-cyan-600' 
                  : 'text-white/90 hover:text-cyan-300'
              }`}
            >
              Case Studies
            </Link>
            <Link 
              to="/enterprise" 
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-cyan-600' 
                  : 'text-white/90 hover:text-cyan-300'
              }`}
            >
              Enterprise
            </Link>
            <Link 
              to="/team" 
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-cyan-600' 
                  : 'text-white/90 hover:text-cyan-300'
              }`}
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className="relative group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-cyan-600 hover:bg-cyan-50' 
                : 'text-white hover:text-cyan-300 hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-cyan-600' 
                    : 'text-white/90 hover:text-cyan-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-cyan-600' 
                    : 'text-white/90 hover:text-cyan-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Services Section */}
              <div className="space-y-3">
                <div className={`font-semibold text-lg ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Services
                </div>
                <div className="ml-4 space-y-3">
                  <Link 
                    to="/services" 
                    className={`block transition-all duration-300 ${
                      isScrolled 
                        ? 'text-gray-600 hover:text-cyan-600' 
                        : 'text-white/70 hover:text-cyan-300'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link 
                    to="/micro-saas" 
                    className={`block transition-all duration-300 ${
                      isScrolled 
                        ? 'text-gray-600 hover:text-cyan-600' 
                        : 'text-white/70 hover:text-cyan-300'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Micro SAAS Solutions
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className={`block transition-all duration-300 ${
                      isScrolled 
                        ? 'text-gray-600 hover:text-cyan-600' 
                        : 'text-white/70 hover:text-cyan-300'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    AI Services
                  </Link>
                  <Link 
                    to="/it-services" 
                    className={`block transition-all duration-300 ${
                      isScrolled 
                        ? 'text-gray-600 hover:text-cyan-600' 
                        : 'text-white/70 hover:text-cyan-300'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    IT Services
                  </Link>
                  <Link 
                    to="/quantum-computing" 
                    className={`block transition-all duration-300 ${
                      isScrolled 
                        ? 'text-gray-600 hover:text-cyan-600' 
                        : 'text-white/70 hover:text-cyan-300'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Quantum Computing
                  </Link>
                  <Link 
                    to="/autonomous-systems" 
                    className={`block transition-all duration-300 ${
                      isScrolled 
                        ? 'text-gray-600 hover:text-cyan-600' 
                        : 'text-white/70 hover:text-cyan-300'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Autonomous Systems
                  </Link>
                  <Link 
                    to="/blockchain-web3" 
                    className={`block transition-all duration-300 ${
                      isScrolled 
                        ? 'text-gray-600 hover:text-cyan-600' 
                        : 'text-white/70 hover:text-cyan-300'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Blockchain & Web3
                  </Link>
                  <Link 
                    to="/cybersecurity" 
                    className={`block transition-all duration-300 ${
                      isScrolled 
                        ? 'text-gray-600 hover:text-cyan-600' 
                        : 'text-white/70 hover:text-cyan-300'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Cybersecurity
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/case-studies" 
                className={`font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-cyan-600' 
                    : 'text-white/90 hover:text-cyan-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/enterprise" 
                className={`font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-cyan-600' 
                    : 'text-white/90 hover:text-cyan-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Enterprise
              </Link>
              <Link 
                to="/team" 
                className={`font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-cyan-600' 
                    : 'text-white/90 hover:text-cyan-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
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
