import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/30 cyber-grid">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center group">
            <span className="text-3xl mr-2 group-hover:animate-spin">⚡</span>
            <span className="group-hover:text-white transition-colors">Zion Tech Group</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center relative group"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 cyber-card hologram-card py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-white mb-3 text-cyan-400">Core Services</h3>
                      <Link to="/services" className="block px-3 py-2 text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 rounded transition-colors">
                        All Services
                      </Link>
                      <Link to="/micro-saas" className="block px-3 py-2 text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 rounded transition-colors">
                        Micro SAAS Solutions
                      </Link>
                      <Link to="/ai-services" className="block px-3 py-2 text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 rounded transition-colors">
                        AI Services
                      </Link>
                      <Link to="/ai-chatbot-pro" className="block px-3 py-2 text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 rounded transition-colors">
                        AI Chatbot Pro
                      </Link>
                      <Link to="/url-shortener-pro" className="block px-3 py-2 text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 rounded transition-colors">
                        URL Shortener Pro
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-3 text-cyan-400">Specialized</h3>
                      <Link to="/quantum-computing" className="block px-3 py-2 text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 rounded transition-colors">
                        Quantum Computing
                      </Link>
                      <Link to="/autonomous-systems" className="block px-3 py-2 text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 rounded transition-colors">
                        Autonomous Systems
                      </Link>
                      <Link to="/blockchain-web3" className="block px-3 py-2 text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 rounded transition-colors">
                        Blockchain & Web3
                      </Link>
                      <Link to="/cybersecurity" className="block px-3 py-2 text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 rounded transition-colors">
                        Cybersecurity
                      </Link>
                      <Link to="/iot-edge-computing" className="block px-3 py-2 text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 rounded transition-colors">
                        IoT & Edge Computing
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors relative group">
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors relative group">
              Enterprise
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors relative group">
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="cyber-button px-6 py-2 text-sm">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/30">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                About
              </Link>
              
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/ai-chatbot-pro" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    AI Chatbot Pro
                  </Link>
                  <Link to="/url-shortener-pro" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    URL Shortener Pro
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/autonomous-systems" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Autonomous Systems
                  </Link>
                  <Link to="/blockchain-web3" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Blockchain & Web3
                  </Link>
                  <Link to="/cybersecurity" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Cybersecurity
                  </Link>
                </div>
              </div>
              
              <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Case Studies
              </Link>
              <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Enterprise
              </Link>
              <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Team
              </Link>
              <Link to="/contact" className="cyber-button text-center">
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
