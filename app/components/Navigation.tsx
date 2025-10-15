import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  return (
    <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Zion Tech Group
            </span>
          </Link>
          
          <nav className="hidden lg:flex space-x-8">
            <div className="relative group">
              <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center space-x-1">
                <span>AI Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 space-y-2">
                  <Link to="/ai-analytics" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">AI Analytics</Link>
                  <Link to="/ai-content-generation" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">Content Generation</Link>
                  <Link to="/ai-customer-support" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">Customer Support</Link>
                  <Link to="/ai-cybersecurity" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">AI Cybersecurity</Link>
                  <Link to="/ai-marketing-automation" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">Marketing Automation</Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center space-x-1">
                <span>IT Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 space-y-2">
                  <Link to="/cloud-migration" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">Cloud Migration</Link>
                  <Link to="/devops-services" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">DevOps Services</Link>
                  <Link to="/it-consulting" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">IT Consulting</Link>
                  <Link to="/network-security" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">Network Security</Link>
                  <Link to="/web-development" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">Web Development</Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <Link to="/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center space-x-1">
                <span>Micro SAAS</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 space-y-2">
                  <Link to="/zion-content-studio" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">Content Studio</Link>
                  <Link to="/zion-ai-crm-pro" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">AI CRM Pro</Link>
                  <Link to="/zion-inventory-smart" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">Inventory Smart</Link>
                  <Link to="/ai-financial-analytics-pro" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">Financial Analytics</Link>
                  <Link to="/zion-performance-monitor" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">Performance Monitor</Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <Link to="/5g-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center space-x-1">
                <span>5G Solutions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 space-y-2">
                  <Link to="/5g-network-infrastructure" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">Network Infrastructure</Link>
                  <Link to="/5g-edge-computing" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">Edge Computing</Link>
                  <Link to="/5g-iot-solutions" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">IoT Solutions</Link>
                  <Link to="/5g-smart-city-solutions" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">Smart City Solutions</Link>
                  <Link to="/5g-private-networks" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded transition-colors">Private Networks</Link>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Portfolio
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all">
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={onSidebarToggle}
            className="lg:hidden text-gray-300 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;