import React, { useState } from 'react';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
          <div className="fixed top-0 left-0 h-full w-80 bg-slate-800 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white py-2 transition-colors" onClick={onClose}>Home</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white py-2 transition-colors" onClick={onClose}>About</Link>
              
              {/* Services Section */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-white py-2 transition-colors"
                >
                  <span>Services</span>
                  {isServicesOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {isServicesOpen && (
                  <div className="ml-4 space-y-1 mt-2">
                    <Link to="/services" className="block text-gray-400 hover:text-white text-sm py-1 transition-colors" onClick={onClose}>All Services</Link>
                    <Link to="/ai-services" className="block text-gray-400 hover:text-white text-sm py-1 transition-colors" onClick={onClose}>AI Services</Link>
                    <Link to="/it-services" className="block text-gray-400 hover:text-white text-sm py-1 transition-colors" onClick={onClose}>IT Services</Link>
                    <Link to="/cybersecurity" className="block text-gray-400 hover:text-white text-sm py-1 transition-colors" onClick={onClose}>Cybersecurity</Link>
                    <Link to="/cloud-solutions" className="block text-gray-400 hover:text-white text-sm py-1 transition-colors" onClick={onClose}>Cloud Solutions</Link>
                    <Link to="/digital-transformation" className="block text-gray-400 hover:text-white text-sm py-1 transition-colors" onClick={onClose}>Digital Transformation</Link>
                  </div>
                )}
              </div>

              {/* Solutions Section */}
              <div>
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-white py-2 transition-colors"
                >
                  <span>Solutions</span>
                  {isSolutionsOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {isSolutionsOpen && (
                  <div className="ml-4 space-y-1 mt-2">
                    <Link to="/ai-solutions" className="block text-gray-400 hover:text-white text-sm py-1 transition-colors" onClick={onClose}>AI Solutions</Link>
                    <Link to="/it-solutions" className="block text-gray-400 hover:text-white text-sm py-1 transition-colors" onClick={onClose}>IT Solutions</Link>
                    <Link to="/micro-saas-solutions" className="block text-gray-400 hover:text-white text-sm py-1 transition-colors" onClick={onClose}>Micro SaaS</Link>
                    <Link to="/5g-solutions" className="block text-gray-400 hover:text-white text-sm py-1 transition-colors" onClick={onClose}>5G Solutions</Link>
                    <Link to="/data-analytics" className="block text-gray-400 hover:text-white text-sm py-1 transition-colors" onClick={onClose}>Data Analytics</Link>
                  </div>
                )}
              </div>

              <Link to="/case-studies" className="block text-gray-300 hover:text-white py-2 transition-colors" onClick={onClose}>Case Studies</Link>
              <Link to="/blog" className="block text-gray-300 hover:text-white py-2 transition-colors" onClick={onClose}>Blog</Link>
              <Link to="/careers" className="block text-gray-300 hover:text-white py-2 transition-colors" onClick={onClose}>Careers</Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-white py-2 transition-colors" onClick={onClose}>Pricing</Link>
              <Link to="/contact" className="block bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 mt-4" onClick={onClose}>
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
