import React from 'react';
import { Menu, ChevronDown } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  return (
    <nav className="bg-slate-800 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onSidebarToggle}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <a href="/" className="text-xl font-bold hover:text-blue-400 transition-colors">
            Zion Tech Group
          </a>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center hover:text-blue-400 transition-colors">
              Services
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <a href="/services" className="block px-4 py-2 hover:bg-slate-600 transition-colors">All Services</a>
                <a href="/solutions" className="block px-4 py-2 hover:bg-slate-600 transition-colors">Solutions</a>
                <a href="/pricing" className="block px-4 py-2 hover:bg-slate-600 transition-colors">Pricing</a>
                <hr className="my-2 border-slate-600" />
                <a href="/ai-solutions" className="block px-4 py-2 hover:bg-slate-600 transition-colors">AI Solutions</a>
                <a href="/it-solutions" className="block px-4 py-2 hover:bg-slate-600 transition-colors">IT Solutions</a>
                <a href="/cybersecurity" className="block px-4 py-2 hover:bg-slate-600 transition-colors">Cybersecurity</a>
                <a href="/cloud-solutions" className="block px-4 py-2 hover:bg-slate-600 transition-colors">Cloud Solutions</a>
                <a href="/micro-saas-solutions" className="block px-4 py-2 hover:bg-slate-600 transition-colors">Micro SaaS</a>
                <a href="/5g-solutions" className="block px-4 py-2 hover:bg-slate-600 transition-colors">5G Solutions</a>
              </div>
            </div>
          </div>

          <a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a>
          <a href="/careers" className="hover:text-blue-400 transition-colors">Careers</a>
          <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
