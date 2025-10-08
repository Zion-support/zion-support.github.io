import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesOpen && !(event.target as Element).closest('.services-dropdown')) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [servicesOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setServicesOpen(!servicesOpen);
  }, [servicesOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-cyan-400 neon-text flex items-center focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
            aria-label="Zion Tech Group - Home"
          >
            <span className="text-3xl mr-2" aria-hidden="true">⚡</span>
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative services-dropdown">
              <button
                onClick={toggleServices}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleServices();
                  }
                }}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <ChevronDown 
                  className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} 
                  aria-hidden="true"
                />
              </button>
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border py-4 z-50"
                  role="menu"
                  aria-label="Services submenu"
                >
                  <div className="grid grid-cols-3 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Core Services</h3>
                      <Link 
                        to="/services" 
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={closeMobileMenu}
                        role="menuitem"
                      >
                        All Services
                      </Link>
                      <Link 
                        to="/micro-saas" 
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={closeMobileMenu}
                        role="menuitem"
                      >
                        Micro SAAS Solutions
                      </Link>
                      <Link 
                        to="/ai-services" 
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={closeMobileMenu}
                        role="menuitem"
                      >
                        AI Services
                      </Link>
                      <Link 
                        to="/it-services" 
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={closeMobileMenu}
                        role="menuitem"
                      >
                        IT Services
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">AI Solutions</h3>
                      <Link 
                        to="/ai-data-analytics" 
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={closeMobileMenu}
                        role="menuitem"
                      >
                        AI Data Analytics
                      </Link>
                      <Link 
                        to="/ai-cybersecurity" 
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={closeMobileMenu}
                        role="menuitem"
                      >
                        AI Cybersecurity
                      </Link>
                      <Link 
                        to="/ai-workflow-automation" 
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={closeMobileMenu}
                        role="menuitem"
                      >
                        AI Workflow Automation
                      </Link>
                      <Link 
                        to="/ai-cloud-infrastructure" 
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={closeMobileMenu}
                        role="menuitem"
                      >
                        AI Cloud Infrastructure
                      </Link>
                      <Link 
                        to="/ai-ecommerce-solutions" 
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={closeMobileMenu}
                        role="menuitem"
                      >
                        AI E-commerce Solutions
                      </Link>
                      <Link 
                        to="/ai-mobile-app-development" 
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={closeMobileMenu}
                        role="menuitem"
                      >
                        AI Mobile App Development
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Specialized</h3>
                      <Link 
                        to="/quantum-computing" 
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={closeMobileMenu}
                        role="menuitem"
                      >
                        Quantum Computing
                      </Link>
                      <Link 
                        to="/autonomous-systems" 
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={closeMobileMenu}
                        role="menuitem"
                      >
                        Autonomous Systems
                      </Link>
                      <Link 
                        to="/blockchain-web3" 
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={closeMobileMenu}
                        role="menuitem"
                      >
                        Blockchain & Web3
                      </Link>
                      <Link 
                        to="/cybersecurity" 
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={closeMobileMenu}
                        role="menuitem"
                      >
                        Cybersecurity
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/case-studies" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
            >
              Case Studies
            </Link>
            <Link 
              to="/enterprise" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
            >
              Enterprise
            </Link>
            <Link 
              to="/team" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 transform hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md p-2"
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  <Link 
                    to="/services" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                    onClick={closeMobileMenu}
                  >
                    All Services
                  </Link>
                  <Link 
                    to="/micro-saas" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                    onClick={closeMobileMenu}
                  >
                    Micro SAAS Solutions
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                    onClick={closeMobileMenu}
                  >
                    AI Services
                  </Link>
                  <Link 
                    to="/it-services" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                    onClick={closeMobileMenu}
                  >
                    IT Services
                  </Link>
                  <Link 
                    to="/ai-data-analytics" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                    onClick={closeMobileMenu}
                  >
                    AI Data Analytics
                  </Link>
                  <Link 
                    to="/ai-cybersecurity" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                    onClick={closeMobileMenu}
                  >
                    AI Cybersecurity
                  </Link>
                  <Link 
                    to="/ai-workflow-automation" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                    onClick={closeMobileMenu}
                  >
                    AI Workflow Automation
                  </Link>
                  <Link 
                    to="/ai-cloud-infrastructure" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                    onClick={closeMobileMenu}
                  >
                    AI Cloud Infrastructure
                  </Link>
                  <Link 
                    to="/ai-ecommerce-solutions" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                    onClick={closeMobileMenu}
                  >
                    AI E-commerce Solutions
                  </Link>
                  <Link 
                    to="/ai-mobile-app-development" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                    onClick={closeMobileMenu}
                  >
                    AI Mobile App Development
                  </Link>
                  <Link 
                    to="/quantum-computing" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                    onClick={closeMobileMenu}
                  >
                    Quantum Computing
                  </Link>
                  <Link 
                    to="/autonomous-systems" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                    onClick={closeMobileMenu}
                  >
                    Autonomous Systems
                  </Link>
                  <Link 
                    to="/blockchain-web3" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                    onClick={closeMobileMenu}
                  >
                    Blockchain & Web3
                  </Link>
                  <Link 
                    to="/cybersecurity" 
                    className="block text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                    onClick={closeMobileMenu}
                  >
                    Cybersecurity
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/case-studies" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                onClick={closeMobileMenu}
              >
                Case Studies
              </Link>
              <Link 
                to="/enterprise" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                onClick={closeMobileMenu}
              >
                Enterprise
              </Link>
              <Link 
                to="/team" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                onClick={closeMobileMenu}
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium text-center focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 transform hover:scale-105"
                onClick={closeMobileMenu}
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
