import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  return (
    <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50 cyber-grid-enhanced">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 holographic-text">
              Zion Tech Group
            </span>
          </Link>
          
          <nav className="hidden lg:flex space-x-6">
            <div className="relative group">
              <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors relative group flex items-center space-x-1 neon-border rounded-lg px-3 py-2">
                <span>AI Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 neon-glow-advanced">
                <div className="p-6">
                  <h3 className="text-cyan-400 font-semibold mb-4 text-sm uppercase tracking-wider">AI Services</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/ai-analytics" className="block text-gray-300 hover:text-cyan-400 py-2 px-3 rounded transition-colors hover:bg-cyan-500/10">AI Analytics</Link>
                    <Link to="/ai-content-generation" className="block text-gray-300 hover:text-cyan-400 py-2 px-3 rounded transition-colors hover:bg-cyan-500/10">Content Generation</Link>
                    <Link to="/ai-customer-support" className="block text-gray-300 hover:text-cyan-400 py-2 px-3 rounded transition-colors hover:bg-cyan-500/10">Customer Support</Link>
                    <Link to="/ai-cybersecurity" className="block text-gray-300 hover:text-cyan-400 py-2 px-3 rounded transition-colors hover:bg-cyan-500/10">AI Cybersecurity</Link>
                    <Link to="/ai-voice-assistant" className="block text-gray-300 hover:text-cyan-400 py-2 px-3 rounded transition-colors hover:bg-cyan-500/10">Voice Assistant</Link>
                    <Link to="/ai-code-assistant" className="block text-gray-300 hover:text-cyan-400 py-2 px-3 rounded transition-colors hover:bg-cyan-500/10">Code Assistant</Link>
                    <Link to="/ai-customer-insights" className="block text-gray-300 hover:text-cyan-400 py-2 px-3 rounded transition-colors hover:bg-cyan-500/10">Customer Insights</Link>
                    <Link to="/ai-workflow-automation" className="block text-gray-300 hover:text-cyan-400 py-2 px-3 rounded transition-colors hover:bg-cyan-500/10">Workflow Automation</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors relative group flex items-center space-x-1 neon-border rounded-lg px-3 py-2">
                <span>IT Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm border border-green-500/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 neon-glow-advanced">
                <div className="p-6">
                  <h3 className="text-green-400 font-semibold mb-4 text-sm uppercase tracking-wider">IT Services</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/cloud-migration" className="block text-gray-300 hover:text-green-400 py-2 px-3 rounded transition-colors hover:bg-green-500/10">Cloud Migration</Link>
                    <Link to="/devops-services" className="block text-gray-300 hover:text-green-400 py-2 px-3 rounded transition-colors hover:bg-green-500/10">DevOps Services</Link>
                    <Link to="/network-security" className="block text-gray-300 hover:text-green-400 py-2 px-3 rounded transition-colors hover:bg-green-500/10">Network Security</Link>
                    <Link to="/web-development" className="block text-gray-300 hover:text-green-400 py-2 px-3 rounded transition-colors hover:bg-green-500/10">Web Development</Link>
                    <Link to="/it-consulting" className="block text-gray-300 hover:text-green-400 py-2 px-3 rounded transition-colors hover:bg-green-500/10">IT Consulting</Link>
                    <Link to="/system-integration" className="block text-gray-300 hover:text-green-400 py-2 px-3 rounded transition-colors hover:bg-green-500/10">System Integration</Link>
                    <Link to="/data-center-solutions" className="block text-gray-300 hover:text-green-400 py-2 px-3 rounded transition-colors hover:bg-green-500/10">Data Center Solutions</Link>
                    <Link to="/managed-services" className="block text-gray-300 hover:text-green-400 py-2 px-3 rounded transition-colors hover:bg-green-500/10">Managed Services</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <Link to="/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-colors relative group flex items-center space-x-1 neon-border rounded-lg px-3 py-2">
                <span>Micro SAAS</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm border border-purple-500/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 neon-glow-advanced">
                <div className="p-6">
                  <h3 className="text-purple-400 font-semibold mb-4 text-sm uppercase tracking-wider">Micro SAAS Solutions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/zion-ai-video-generator" className="block text-gray-300 hover:text-purple-400 py-2 px-3 rounded transition-colors hover:bg-purple-500/10">AI Video Generator</Link>
                    <Link to="/zion-ai-invoice-generator" className="block text-gray-300 hover:text-purple-400 py-2 px-3 rounded transition-colors hover:bg-purple-500/10">AI Invoice Generator</Link>
                    <Link to="/zion-ai-customer-insights" className="block text-gray-300 hover:text-purple-400 py-2 px-3 rounded transition-colors hover:bg-purple-500/10">AI Customer Insights</Link>
                    <Link to="/ai-code-assistant" className="block text-gray-300 hover:text-purple-400 py-2 px-3 rounded transition-colors hover:bg-purple-500/10">AI Code Assistant</Link>
                    <Link to="/zion-ai-crm-pro" className="block text-gray-300 hover:text-purple-400 py-2 px-3 rounded transition-colors hover:bg-purple-500/10">AI CRM Pro</Link>
                    <Link to="/zion-ai-marketing-automation" className="block text-gray-300 hover:text-purple-400 py-2 px-3 rounded transition-colors hover:bg-purple-500/10">Marketing Automation</Link>
                    <Link to="/zion-ai-social-media-manager" className="block text-gray-300 hover:text-purple-400 py-2 px-3 rounded transition-colors hover:bg-purple-500/10">Social Media Manager</Link>
                    <Link to="/zion-ai-meeting-assistant" className="block text-gray-300 hover:text-purple-400 py-2 px-3 rounded transition-colors hover:bg-purple-500/10">Meeting Assistant</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <Link to="/5g-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors relative group flex items-center space-x-1 neon-border rounded-lg px-3 py-2">
                <span>5G Solutions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm border border-orange-500/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 neon-glow-advanced">
                <div className="p-6">
                  <h3 className="text-orange-400 font-semibold mb-4 text-sm uppercase tracking-wider">5G Solutions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/5g-network-infrastructure" className="block text-gray-300 hover:text-orange-400 py-2 px-3 rounded transition-colors hover:bg-orange-500/10">Network Infrastructure</Link>
                    <Link to="/5g-edge-computing" className="block text-gray-300 hover:text-orange-400 py-2 px-3 rounded transition-colors hover:bg-orange-500/10">Edge Computing</Link>
                    <Link to="/5g-iot-solutions" className="block text-gray-300 hover:text-orange-400 py-2 px-3 rounded transition-colors hover:bg-orange-500/10">IoT Solutions</Link>
                    <Link to="/5g-smart-city-solutions" className="block text-gray-300 hover:text-orange-400 py-2 px-3 rounded transition-colors hover:bg-orange-500/10">Smart City Solutions</Link>
                    <Link to="/5g-private-networks" className="block text-gray-300 hover:text-orange-400 py-2 px-3 rounded transition-colors hover:bg-orange-500/10">Private Networks</Link>
                    <Link to="/5g-mobile-applications" className="block text-gray-300 hover:text-orange-400 py-2 px-3 rounded transition-colors hover:bg-orange-500/10">Mobile Applications</Link>
                    <Link to="/5g-data-analytics" className="block text-gray-300 hover:text-orange-400 py-2 px-3 rounded transition-colors hover:bg-orange-500/10">Data Analytics</Link>
                    <Link to="/5g-implementation" className="block text-gray-300 hover:text-orange-400 py-2 px-3 rounded transition-colors hover:bg-orange-500/10">Implementation</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors relative group neon-border rounded-lg px-3 py-2">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-cyan-400 transition-colors relative group neon-border rounded-lg px-3 py-2">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors relative group neon-border rounded-lg px-3 py-2">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all cyber-button-advanced">
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={onSidebarToggle}
            className="md:hidden text-gray-300 hover:text-white transition-colors p-2 neon-border rounded-lg"
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