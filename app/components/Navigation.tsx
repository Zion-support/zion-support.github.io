import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/40 backdrop-blur-md border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10' 
        : 'bg-black/20 backdrop-blur-sm border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 group-hover:from-pink-400 group-hover:via-cyan-400 group-hover:to-purple-400 transition-all duration-500">
              Zion Tech Group
            </span>
          </Link>
          
          <nav className="hidden lg:flex space-x-8">
            <div className="relative group">
              <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center space-x-1">
                <span>AI Services</span>
                <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">New</span>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-2">
                  <Link to="/ai-analytics" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded">AI Analytics</Link>
                  <Link to="/ai-content-generation" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded">Content Generation</Link>
                  <Link to="/ai-customer-support" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded">Customer Support</Link>
                  <Link to="/ai-cybersecurity" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded">AI Cybersecurity</Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center space-x-1">
                <span>IT Services</span>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-2">
                  <Link to="/cloud-migration" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded">Cloud Migration</Link>
                  <Link to="/devops-services" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded">DevOps</Link>
                  <Link to="/web-development" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded">Web Development</Link>
                  <Link to="/it-consulting" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded">IT Consulting</Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <Link to="/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center space-x-1">
                <span>Micro SAAS</span>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Popular</span>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-2">
                  <Link to="/zion-ai-video-generator" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded">AI Video Generator</Link>
                  <Link to="/zion-ai-crm-pro" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded">AI CRM Pro</Link>
                  <Link to="/zion-ai-invoice-generator" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded">Invoice Generator</Link>
                  <Link to="/zion-ai-voice-assistant-pro" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded">Voice Assistant</Link>
                </div>
              </div>
            </div>
            
            <Link to="/5g-solutions" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">
              5G Solutions
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">
              About
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={onSidebarToggle}
            className="lg:hidden text-gray-300 hover:text-white transition-colors p-2 hover:bg-cyan-500/10 rounded-lg"
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