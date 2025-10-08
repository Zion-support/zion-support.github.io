import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Zap, Menu, X } from 'lucide-react';
import '../styles/futuristic.css';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-dark-surface/90 backdrop-blur-md border-b border-dark-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold neon-text flex items-center group">
            <Zap className="w-8 h-8 mr-2 group-hover:animate-pulse" />
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white hover:neon-text transition-all font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white hover:neon-text transition-all font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center font-medium"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-dark-surface rounded-lg shadow-xl border border-dark-border py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-neon-blue mb-3">Micro SAAS</h3>
                      <Link to="/micro-saas" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-neon-blue/20 rounded transition-all">
                        All Micro SAAS Solutions
                      </Link>
                      <Link to="/micro-saas" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-neon-blue/20 rounded transition-all">
                        AI Code Review Assistant
                      </Link>
                      <Link to="/micro-saas" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-neon-blue/20 rounded transition-all">
                        Document Intelligence
                      </Link>
                      <Link to="/micro-saas" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-neon-blue/20 rounded transition-all">
                        API Testing Suite
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neon-purple mb-3">Professional</h3>
                      <Link to="/services" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-neon-purple/20 rounded transition-all">
                        All Professional Services
                      </Link>
                      <Link to="/ai-services" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-neon-purple/20 rounded transition-all">
                        AI & Machine Learning
                      </Link>
                      <Link to="/it-services" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-neon-purple/20 rounded transition-all">
                        IT Infrastructure
                      </Link>
                      <Link to="/quantum-computing" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-neon-purple/20 rounded transition-all">
                        Quantum Computing
                      </Link>
                      <Link to="/autonomous-systems" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-neon-purple/20 rounded transition-all">
                        Autonomous Systems
                      </Link>
                      <Link to="/blockchain-web3" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-neon-purple/20 rounded transition-all">
                        Blockchain & Web3
                      </Link>
                      <Link to="/cybersecurity" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-neon-purple/20 rounded transition-all">
                        Cybersecurity
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/case-studies" className="text-gray-300 hover:text-white hover:neon-text transition-all font-medium">
              Case Studies
            </Link>
            <Link to="/enterprise" className="text-gray-300 hover:text-white hover:neon-text transition-all font-medium">
              Enterprise
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-white hover:neon-text transition-all font-medium">
              Team
            </Link>
            <Link to="/contact" className="neon-button px-6 py-2 rounded-lg hover:bg-neon-blue hover:text-dark-bg transition-all font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-dark-border">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-white hover:neon-text transition-all font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white hover:neon-text transition-all font-medium">
                About
              </Link>
              
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">
                    All Professional Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-400 hover:text-white transition-colors">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block text-gray-400 hover:text-white transition-colors">
                    AI & Machine Learning
                  </Link>
                  <Link to="/it-services" className="block text-gray-400 hover:text-white transition-colors">
                    IT Infrastructure
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-400 hover:text-white transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/autonomous-systems" className="block text-gray-400 hover:text-white transition-colors">
                    Autonomous Systems
                  </Link>
                  <Link to="/blockchain-web3" className="block text-gray-400 hover:text-white transition-colors">
                    Blockchain & Web3
                  </Link>
                  <Link to="/cybersecurity" className="block text-gray-400 hover:text-white transition-colors">
                    Cybersecurity
                  </Link>
                </div>
              </div>
              
              <Link to="/case-studies" className="text-gray-300 hover:text-white hover:neon-text transition-all font-medium">
                Case Studies
              </Link>
              <Link to="/enterprise" className="text-gray-300 hover:text-white hover:neon-text transition-all font-medium">
                Enterprise
              </Link>
              <Link to="/team" className="text-gray-300 hover:text-white hover:neon-text transition-all font-medium">
                Team
              </Link>
              <Link to="/contact" className="neon-button px-6 py-2 rounded-lg hover:bg-neon-blue hover:text-dark-bg transition-all font-medium text-center">
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