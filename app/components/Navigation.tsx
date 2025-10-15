import React from 'react';
import { Menu, ChevronDown } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = React.useState(false);

  return (
    <nav className="bg-slate-800 text-white p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onSidebarToggle}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Zion Tech Group
          </a>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          <a href="/" className="hover:text-purple-400 transition-colors">Home</a>
          <a href="/about" className="hover:text-purple-400 transition-colors">About</a>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center hover:text-purple-400 transition-colors"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              Services
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isServicesOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-64 bg-slate-700 rounded-lg shadow-lg py-2 z-50"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <a href="/services" className="block px-4 py-2 hover:bg-slate-600">All Services</a>
                <a href="/ai-solutions" className="block px-4 py-2 hover:bg-slate-600">AI Solutions</a>
                <a href="/micro-saas-solutions" className="block px-4 py-2 hover:bg-slate-600">Micro-SaaS Development</a>
                <a href="/it-solutions" className="block px-4 py-2 hover:bg-slate-600">IT Services</a>
                <a href="/cloud-solutions" className="block px-4 py-2 hover:bg-slate-600">Cloud Infrastructure</a>
                <a href="/cybersecurity" className="block px-4 py-2 hover:bg-slate-600">Cybersecurity</a>
                <a href="/digital-transformation" className="block px-4 py-2 hover:bg-slate-600">Digital Transformation</a>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center hover:text-purple-400 transition-colors"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              Solutions
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isSolutionsOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-64 bg-slate-700 rounded-lg shadow-lg py-2 z-50"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <a href="/solutions" className="block px-4 py-2 hover:bg-slate-600">All Solutions</a>
                <a href="/ai-services" className="block px-4 py-2 hover:bg-slate-600">AI Services</a>
                <a href="/it-services" className="block px-4 py-2 hover:bg-slate-600">IT Services</a>
                <a href="/case-studies" className="block px-4 py-2 hover:bg-slate-600">Case Studies</a>
                <a href="/pricing" className="block px-4 py-2 hover:bg-slate-600">Pricing</a>
              </div>
            )}
          </div>

          <a href="/blog" className="hover:text-purple-400 transition-colors">Blog</a>
          <a href="/careers" className="hover:text-purple-400 transition-colors">Careers</a>
          <a href="/contact" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
