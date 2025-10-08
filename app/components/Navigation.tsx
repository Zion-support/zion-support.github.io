import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-500/20' 
        : 'bg-slate-900/90 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-cyan-400 neon-text hover:text-cyan-300 transition-colors"
            aria-label="Zion Tech Group Home"
          >
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border py-4 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="grid grid-cols-3 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Core Services</h3>
                      <Link to="/services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        All Services
                      </Link>
                      <Link to="/micro-saas" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        Micro SAAS Solutions
                      </Link>
                      <Link to="/ai-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        AI Services
                      </Link>
                      <Link to="/it-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        IT Services
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">AI Solutions</h3>
                      <Link to="/ai-data-analytics" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        AI Data Analytics
                      </Link>
                      <Link to="/ai-cybersecurity" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        AI Cybersecurity
                      </Link>
                      <Link to="/ai-workflow-automation" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        AI Workflow Automation
                      </Link>
                      <Link to="/ai-cloud-infrastructure" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        AI Cloud Infrastructure
                      </Link>
                      <Link to="/ai-ecommerce-solutions" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        AI E-commerce Solutions
                      </Link>
                      <Link to="/ai-mobile-app-development" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        AI Mobile App Development
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Specialized</h3>
                      <Link to="/quantum-computing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        Quantum Computing
                      </Link>
                      <Link to="/autonomous-systems" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        Autonomous Systems
                      </Link>
                      <Link to="/blockchain-web3" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        Blockchain & Web3
                      </Link>
                      <Link to="/cybersecurity" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        Cybersecurity
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/case-studies" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Case Studies
            </Link>
            <Link 
              to="/enterprise" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Enterprise
            </Link>
            <Link 
              to="/team" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className="cyber-button"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors p-2"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  <Link 
                    to="/services" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link 
                    to="/micro-saas" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Micro SAAS Solutions
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Services
                  </Link>
                  <Link 
                    to="/it-services" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    IT Services
                  </Link>
                  <Link 
                    to="/ai-data-analytics" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Data Analytics
                  </Link>
                  <Link 
                    to="/ai-cybersecurity" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Cybersecurity
                  </Link>
                  <Link 
                    to="/ai-workflow-automation" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Workflow Automation
                  </Link>
                  <Link 
                    to="/ai-cloud-infrastructure" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Cloud Infrastructure
                  </Link>
                  <Link 
                    to="/ai-ecommerce-solutions" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    AI E-commerce Solutions
                  </Link>
                  <Link 
                    to="/ai-mobile-app-development" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Mobile App Development
                  </Link>
                  <Link 
                    to="/quantum-computing" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Quantum Computing
                  </Link>
                  <Link 
                    to="/autonomous-systems" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Autonomous Systems
                  </Link>
                  <Link 
                    to="/blockchain-web3" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Blockchain & Web3
                  </Link>
                  <Link 
                    to="/cybersecurity" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Cybersecurity
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/case-studies" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/enterprise" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Enterprise
              </Link>
              <Link 
                to="/team" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className="cyber-button text-center"
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
