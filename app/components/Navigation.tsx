import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onSidebarToggle}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="text-xl font-bold hover:text-blue-400 transition-colors">
            Zion Tech Group
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isServicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-slate-700 rounded-lg shadow-lg py-2 z-50"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link to="/services" className="block px-4 py-2 hover:bg-slate-600 transition-colors">All Services</Link>
                <Link to="/ai-services" className="block px-4 py-2 hover:bg-slate-600 transition-colors">AI Services</Link>
                <Link to="/it-services" className="block px-4 py-2 hover:bg-slate-600 transition-colors">IT Services</Link>
                <Link to="/cybersecurity" className="block px-4 py-2 hover:bg-slate-600 transition-colors">Cybersecurity</Link>
                <Link to="/cloud-solutions" className="block px-4 py-2 hover:bg-slate-600 transition-colors">Cloud Solutions</Link>
                <Link to="/digital-transformation" className="block px-4 py-2 hover:bg-slate-600 transition-colors">Digital Transformation</Link>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isSolutionsOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-slate-700 rounded-lg shadow-lg py-2 z-50"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <Link to="/ai-solutions" className="block px-4 py-2 hover:bg-slate-600 transition-colors">AI Solutions</Link>
                <Link to="/it-solutions" className="block px-4 py-2 hover:bg-slate-600 transition-colors">IT Solutions</Link>
                <Link to="/micro-saas-solutions" className="block px-4 py-2 hover:bg-slate-600 transition-colors">Micro SaaS</Link>
                <Link to="/5g-solutions" className="block px-4 py-2 hover:bg-slate-600 transition-colors">5G Solutions</Link>
                <Link to="/data-analytics" className="block px-4 py-2 hover:bg-slate-600 transition-colors">Data Analytics</Link>
              </div>
            )}
          </div>

          <Link to="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link>
          <Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
          <Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link>
          <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
