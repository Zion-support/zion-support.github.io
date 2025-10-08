import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center">
            <span className="text-3xl mr-2">⚡</span>
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl border border-cyan-500/20 py-4 z-50">
                  <div className="grid grid-cols-3 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-cyan-400 mb-2">Core Services</h3>
                      <Link to="/services" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        All Services
                      </Link>
                      <Link to="/micro-saas" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        Micro SAAS Solutions
                      </Link>
                      <Link to="/ai-services" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        AI Services
                      </Link>
                      <Link to="/it-services" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        IT Services
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cyan-400 mb-2">AI Solutions</h3>
                      <Link to="/ai-marketing" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        AI Marketing
                      </Link>
                      <Link to="/ai-automation" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        AI Automation
                      </Link>
                      <Link to="/ai-healthcare" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        AI Healthcare
                      </Link>
                      <Link to="/ai-fintech" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        AI Fintech
                      </Link>
                      <Link to="/ai-data-analytics" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        AI Data Analytics
                      </Link>
                      <Link to="/ai-cybersecurity" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        AI Cybersecurity
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cyan-400 mb-2">Specialized</h3>
                      <Link to="/quantum-computing" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        Quantum Computing
                      </Link>
                      <Link to="/autonomous-systems" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        Autonomous Systems
                      </Link>
                      <Link to="/blockchain-web3" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        Blockchain & Web3
                      </Link>
                      <Link to="/cybersecurity" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        Cybersecurity
                      </Link>
                      <Link to="/business-intelligence" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        Business Intelligence
                      </Link>
                    </div>
                  </div>
                </div>
              )}
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
            <Link to="/contact" className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20">
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
                  <Link to="/it-services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/ai-marketing" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    AI Marketing
                  </Link>
                  <Link to="/ai-automation" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    AI Automation
                  </Link>
                  <Link to="/ai-healthcare" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    AI Healthcare
                  </Link>
                  <Link to="/ai-fintech" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    AI Fintech
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
              <Link to="/contact" className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors font-medium text-center">
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
