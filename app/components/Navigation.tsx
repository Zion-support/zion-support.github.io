import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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
          
          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className="flex items-center hover:text-blue-400 transition-colors"
            >
              Solutions
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isSolutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-700 rounded-lg shadow-lg py-2 z-50">
                <a href="/ai-solutions" className="block px-4 py-2 hover:bg-slate-600 transition-colors">AI Solutions</a>
                <a href="/it-solutions" className="block px-4 py-2 hover:bg-slate-600 transition-colors">IT Solutions</a>
                <a href="/cybersecurity" className="block px-4 py-2 hover:bg-slate-600 transition-colors">Cybersecurity</a>
                <a href="/cloud-solutions" className="block px-4 py-2 hover:bg-slate-600 transition-colors">Cloud Solutions</a>
                <a href="/micro-saas-solutions" className="block px-4 py-2 hover:bg-slate-600 transition-colors">Micro SaaS</a>
                <a href="/5g-solutions" className="block px-4 py-2 hover:bg-slate-600 transition-colors">5G Solutions</a>
              </div>
            )}
          </div>
          
          <a href="/services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
          <a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a>
          <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
          
          {/* CTA Button */}
          <a 
            href="/contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
