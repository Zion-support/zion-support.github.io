import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="glass-dark backdrop-blur-md sticky top-0 z-50 border-b border-cyan-400/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gradient neon-text">
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-white hover:text-cyan-400 transition-colors flex items-center font-medium"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 glass-dark rounded-lg shadow-2xl border border-cyan-400/20 py-2 z-50">
                  <Link to="/services" className="block px-4 py-2 text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block px-4 py-2 text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block px-4 py-2 text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block px-4 py-2 text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/services-advertising" className="block px-4 py-2 text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                    Advertising Services
                  </Link>
                  <Link to="/quantum-computing" className="block px-4 py-2 text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/blockchain" className="block px-4 py-2 text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                    Blockchain
                  </Link>
                  <Link to="/iot" className="block px-4 py-2 text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                    IoT Solutions
                  </Link>
                </div>
              )}
            </div>
            <Link to="/case-studies" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Case Studies
            </Link>
            <Link to="/enterprise" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Enterprise
            </Link>
            <Link to="/team" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Team
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyan-400"
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
          <div className="md:hidden py-4 border-t border-cyan-400/20">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
                About
              </Link>
              <div className="space-y-2">
                <div className="text-white font-semibold">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/services-advertising" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Advertising Services
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/blockchain" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Blockchain
                  </Link>
                  <Link to="/iot" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    IoT Solutions
                  </Link>
                </div>
              </div>
              <Link to="/case-studies" className="text-white hover:text-cyan-400 transition-colors font-medium">
                Case Studies
              </Link>
              <Link to="/enterprise" className="text-white hover:text-cyan-400 transition-colors font-medium">
                Enterprise
              </Link>
              <Link to="/team" className="text-white hover:text-cyan-400 transition-colors font-medium">
                Team
              </Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
