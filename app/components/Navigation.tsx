import React, { useState } from 'react';
import { Menu, ChevronDown, X } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white p-4 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onSidebarToggle}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
          <a href="/" className="text-xl font-bold hover:text-blue-400 transition-colors">
            Zion Tech Group
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
          
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
                className="absolute top-full left-0 mt-2 w-64 bg-slate-700 rounded-lg shadow-xl z-50"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-sm font-semibold text-blue-400 mb-2">Core Services</h3>
                    <div className="space-y-2">
                      <a href="/services" className="block text-sm hover:text-blue-400 transition-colors">All Services</a>
                      <a href="/ai-services" className="block text-sm hover:text-blue-400 transition-colors">AI Services</a>
                      <a href="/it-services" className="block text-sm hover:text-blue-400 transition-colors">IT Services</a>
                      <a href="/cloud-infrastructure" className="block text-sm hover:text-blue-400 transition-colors">Cloud Infrastructure</a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-blue-400 mb-2">Specialized Services</h3>
                    <div className="space-y-2">
                      <a href="/cybersecurity" className="block text-sm hover:text-blue-400 transition-colors">Cybersecurity</a>
                      <a href="/digital-transformation" className="block text-sm hover:text-blue-400 transition-colors">Digital Transformation</a>
                      <a href="/case-studies" className="block text-sm hover:text-blue-400 transition-colors">Case Studies</a>
                    </div>
                  </div>
                </div>
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
                className="absolute top-full left-0 mt-2 w-64 bg-slate-700 rounded-lg shadow-xl z-50"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-sm font-semibold text-blue-400 mb-2">AI Solutions</h3>
                    <div className="space-y-2">
                      <a href="/ai-solutions" className="block text-sm hover:text-blue-400 transition-colors">AI Solutions</a>
                      <a href="/ai-content-generator" className="block text-sm hover:text-blue-400 transition-colors">AI Content Generator</a>
                      <a href="/ai-analytics-dashboard" className="block text-sm hover:text-blue-400 transition-colors">AI Analytics Dashboard</a>
                      <a href="/ai-customer-support" className="block text-sm hover:text-blue-400 transition-colors">AI Customer Support</a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-blue-400 mb-2">IT Solutions</h3>
                    <div className="space-y-2">
                      <a href="/it-solutions" className="block text-sm hover:text-blue-400 transition-colors">IT Solutions</a>
                      <a href="/cloud-solutions" className="block text-sm hover:text-blue-400 transition-colors">Cloud Solutions</a>
                      <a href="/5g-solutions" className="block text-sm hover:text-blue-400 transition-colors">5G Solutions</a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-blue-400 mb-2">Micro SaaS</h3>
                    <div className="space-y-2">
                      <a href="/micro-saas-solutions" className="block text-sm hover:text-blue-400 transition-colors">Micro SaaS Solutions</a>
                      <a href="/micro-saas" className="block text-sm hover:text-blue-400 transition-colors">Micro SaaS Development</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
          <a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a>
          <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
