import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Zap, Shield, Brain, Cloud, Lock, Globe } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.dropdown-container')) {
        setServicesOpen(false);
        setAiServicesOpen(false);
        setItServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-cyan-500/30 cyber-grid">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center group">
            <span className="text-3xl mr-2 group-hover:animate-pulse">⚡</span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium hover:scale-105">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium hover:scale-105">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center font-medium hover:scale-105 group"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-cyan-500/30 py-6 z-50 hologram-card">
                  <div className="grid grid-cols-4 gap-6 px-6">
                    {/* Core Services */}
                    <div>
                      <h3 className="font-bold text-cyan-400 mb-4 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Core Services
                      </h3>
                      <div className="space-y-2">
                        <Link to="/services" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300">
                          All Services
                        </Link>
                        <Link to="/micro-saas" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300">
                          Micro SAAS Solutions
                        </Link>
                        <Link to="/ai-services" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300">
                          AI Services
                        </Link>
                        <Link to="/it-services" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300">
                          IT Services
                        </Link>
                        <Link to="/quantum-computing" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300">
                          Quantum Computing
                        </Link>
                      </div>
                    </div>

                    {/* AI Solutions */}
                    <div>
                      <h3 className="font-bold text-purple-400 mb-4 flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Solutions
                      </h3>
                      <div className="space-y-2">
                        <Link to="/ai-data-analytics" className="block px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300">
                          AI Data Analytics
                        </Link>
                        <Link to="/ai-cybersecurity" className="block px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300">
                          AI Cybersecurity
                        </Link>
                        <Link to="/ai-workflow-automation" className="block px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300">
                          AI Workflow Automation
                        </Link>
                        <Link to="/ai-cloud-infrastructure" className="block px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300">
                          AI Cloud Infrastructure
                        </Link>
                        <Link to="/ai-ecommerce-solutions" className="block px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300">
                          AI E-commerce Solutions
                        </Link>
                        <Link to="/ai-mobile-app-development" className="block px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300">
                          AI Mobile Apps
                        </Link>
                      </div>
                    </div>

                    {/* Specialized Services */}
                    <div>
                      <h3 className="font-bold text-green-400 mb-4 flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        Specialized
                      </h3>
                      <div className="space-y-2">
                        <Link to="/autonomous-systems" className="block px-3 py-2 text-gray-300 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-all duration-300">
                          Autonomous Systems
                        </Link>
                        <Link to="/blockchain-web3" className="block px-3 py-2 text-gray-300 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-all duration-300">
                          Blockchain & Web3
                        </Link>
                        <Link to="/cybersecurity" className="block px-3 py-2 text-gray-300 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-all duration-300">
                          Cybersecurity
                        </Link>
                        <Link to="/iot-edge-computing" className="block px-3 py-2 text-gray-300 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-all duration-300">
                          IoT & Edge Computing
                        </Link>
                        <Link to="/business-intelligence" className="block px-3 py-2 text-gray-300 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-all duration-300">
                          Business Intelligence
                        </Link>
                      </div>
                    </div>

                    {/* Industry Solutions */}
                    <div>
                      <h3 className="font-bold text-pink-400 mb-4 flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        Industries
                      </h3>
                      <div className="space-y-2">
                        <Link to="/ai-healthcare" className="block px-3 py-2 text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 rounded-lg transition-all duration-300">
                          AI Healthcare
                        </Link>
                        <Link to="/ai-fintech" className="block px-3 py-2 text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 rounded-lg transition-all duration-300">
                          AI Fintech
                        </Link>
                        <Link to="/ai-marketing" className="block px-3 py-2 text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 rounded-lg transition-all duration-300">
                          AI Marketing
                        </Link>
                        <Link to="/ai-automation" className="block px-3 py-2 text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 rounded-lg transition-all duration-300">
                          AI Automation
                        </Link>
                        <Link to="/services-advertising" className="block px-3 py-2 text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 rounded-lg transition-all duration-300">
                          Advertising Services
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium hover:scale-105">
              Case Studies
            </Link>
            <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium hover:scale-105">
              Enterprise
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium hover:scale-105">
              Team
            </Link>
            <Link to="/contact" className="cyber-button text-sm px-6 py-2">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors p-2"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-cyan-500/30">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2">
                About
              </Link>
              
              {/* Services Section */}
              <div className="space-y-3">
                <div className="text-cyan-400 font-bold text-lg flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Services
                </div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    IT Services
                  </Link>
                  <Link to="/ai-data-analytics" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    AI Data Analytics
                  </Link>
                  <Link to="/ai-cybersecurity" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    AI Cybersecurity
                  </Link>
                  <Link to="/ai-workflow-automation" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    AI Workflow Automation
                  </Link>
                  <Link to="/ai-cloud-infrastructure" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    AI Cloud Infrastructure
                  </Link>
                  <Link to="/ai-ecommerce-solutions" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    AI E-commerce Solutions
                  </Link>
                  <Link to="/ai-mobile-app-development" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    AI Mobile App Development
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    Quantum Computing
                  </Link>
                  <Link to="/autonomous-systems" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    Autonomous Systems
                  </Link>
                  <Link to="/blockchain-web3" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    Blockchain & Web3
                  </Link>
                  <Link to="/cybersecurity" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    Cybersecurity
                  </Link>
                </div>
              </div>
              
              <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2">
                Case Studies
              </Link>
              <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2">
                Enterprise
              </Link>
              <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2">
                Team
              </Link>
              <Link to="/contact" className="cyber-button text-center mt-4">
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
