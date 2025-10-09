import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X, Brain } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">Zion Tech Group</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border py-2 z-50">
                  <div className="px-4 py-2 text-sm font-semibold text-gray-500 border-b">Core Services</div>
                  <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    IT Services
                  </Link>
                  <Link to="/services-advertising" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Advertising Services
                  </Link>
                  
                  <div className="px-4 py-2 text-sm font-semibold text-gray-500 border-b mt-2">Specialized Services</div>
                  <Link to="/business-intelligence" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Business Intelligence
                  </Link>
                  <Link to="/quantum-computing" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Quantum Computing
                  </Link>
                  <Link to="/autonomous-systems" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Autonomous Systems
                  </Link>
                  <Link to="/blockchain-web3" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Blockchain & Web3
                  </Link>
                  <Link to="/iot-edge-computing" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    IoT & Edge Computing
                  </Link>
                  <Link to="/cybersecurity" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Cybersecurity
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">Case Studies</Link>
            <Link to="/enterprise" className="text-gray-700 hover:text-blue-600 transition-colors">Enterprise</Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors">Team</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <div className="space-y-2">
                <div className="text-gray-700 font-semibold">Core Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/services-advertising" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Advertising Services
                  </Link>
                </div>
                
                <div className="text-gray-700 font-semibold mt-4">Specialized Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/business-intelligence" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Business Intelligence
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/autonomous-systems" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Autonomous Systems
                  </Link>
                  <Link to="/blockchain-web3" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Blockchain & Web3
                  </Link>
                  <Link to="/iot-edge-computing" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    IoT & Edge Computing
                  </Link>
                  <Link to="/cybersecurity" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Cybersecurity
                  </Link>
                </div>
              </div>
              <Link to="/case-studies" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Case Studies
              </Link>
              <Link to="/enterprise" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Enterprise
              </Link>
              <Link to="/team" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Team
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
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