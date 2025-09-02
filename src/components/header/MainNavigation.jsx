import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp } from 'lucide-react';

export function MainNavigation({ className }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <nav className={`hidden md:flex items-center space-x-6 ${className || ''}`}>
      <Link to="/" className="text-sm font-medium transition-colors hover:text-cyan-400 text-gray-300">
        Home
      </Link>

      <Link to="/about" className="text-sm font-medium transition-colors hover:text-cyan-400 text-gray-300">
        About
      </Link>

      <Link to="/partners" className="text-sm font-medium transition-colors hover:text-cyan-400 text-gray-300">
        Partners
      </Link>

      <Link to="/contact" className="text-sm font-medium transition-colors hover:text-cyan-400 text-gray-300">
        Contact
      </Link>

      {/* Services Dropdown */}
      <div className="relative group">
        <button 
          onMouseEnter={() => setIsServicesOpen(true)} 
          onMouseLeave={() => setIsServicesOpen(false)} 
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-cyan-400 text-gray-300"
        >
          <Zap className="w-4 h-4"/>
          <span>Services</span>
          <ChevronDown className="w-3 h-3"/>
        </button>

        {isServicesOpen && (
          <div 
            onMouseEnter={() => setIsServicesOpen(true)} 
            onMouseLeave={() => setIsServicesOpen(false)} 
            className="absolute top-full left-0 mt-2 w-80 bg-gray-800 border border-gray-600 rounded-lg shadow-2xl z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2"/>
                    Micro SAAS
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Micro CRM Platform</Link></li>
                    <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Helpdesk Platform</Link></li>
                    <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Website Analytics</Link></li>
                    <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI-Powered SEO</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2"/>
                    IT Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud DevOps Automation</Link></li>
                    <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Infrastructure Management</Link></li>
                    <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">FinOps Advisor Platform</Link></li>
                    <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Zero Trust Network Access</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-600">
                <Link to="/services" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center justify-center">
                  View All Services
                  <TrendingUp className="w-4 h-4 ml-2"/>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Solutions Dropdown */}
      <div className="relative group">
        <button 
          onMouseEnter={() => setIsSolutionsOpen(true)} 
          onMouseLeave={() => setIsSolutionsOpen(false)} 
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-cyan-400 text-gray-300"
        >
          <Brain className="w-4 h-4"/>
          <span>Solutions</span>
          <ChevronDown className="w-3 h-3"/>
        </button>

        {isSolutionsOpen && (
          <div 
            onMouseEnter={() => setIsSolutionsOpen(true)} 
            onMouseLeave={() => setIsSolutionsOpen(false)} 
            className="absolute top-full left-0 mt-2 w-80 bg-gray-800 border border-gray-600 rounded-lg shadow-2xl z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2"/>
                    AI Solutions
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Content Creation Suite</Link></li>
                    <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Customer Experience Analytics</Link></li>
                    <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Financial Trading Platform</Link></li>
                    <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Healthcare Analytics</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-3 flex items-center">
                    <HardDrive className="w-4 h-4 mr-2"/>
                    Enterprise
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Digital Transformation</Link></li>
                    <li><Link to="/solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Data Analytics</Link></li>
                    <li><Link to="/solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Process Automation</Link></li>
                    <li><Link to="/solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Legacy Modernization</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-600">
                <Link to="/solutions" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center justify-center">
                  View All Solutions
                  <TrendingUp className="w-4 h-4 ml-2"/>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
