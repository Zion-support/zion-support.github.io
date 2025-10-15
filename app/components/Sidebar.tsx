import React from 'react';
import { X, ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = React.useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
          <div className="fixed top-0 left-0 h-full w-80 bg-slate-800 p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors">Home</a>
              <a href="/about" className="block text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors">About</a>
              
              {/* Services Section */}
              <div>
                <button
                  onClick={() => toggleSection('services')}
                  className="w-full flex items-center justify-between text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <span>Services</span>
                  {expandedSections.includes('services') ? 
                    <ChevronDown className="w-4 h-4" /> : 
                    <ChevronRight className="w-4 h-4" />
                  }
                </button>
                {expandedSections.includes('services') && (
                  <div className="ml-4 space-y-1 mt-2">
                    <a href="/services" className="block text-gray-400 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors text-sm">All Services</a>
                    <a href="/solutions" className="block text-gray-400 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors text-sm">Solutions</a>
                    <a href="/pricing" className="block text-gray-400 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors text-sm">Pricing</a>
                    <hr className="my-2 border-slate-600" />
                    <a href="/ai-solutions" className="block text-gray-400 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors text-sm">AI Solutions</a>
                    <a href="/it-solutions" className="block text-gray-400 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors text-sm">IT Solutions</a>
                    <a href="/cybersecurity" className="block text-gray-400 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors text-sm">Cybersecurity</a>
                    <a href="/cloud-solutions" className="block text-gray-400 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors text-sm">Cloud Solutions</a>
                    <a href="/micro-saas-solutions" className="block text-gray-400 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors text-sm">Micro SaaS</a>
                    <a href="/5g-solutions" className="block text-gray-400 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors text-sm">5G Solutions</a>
                  </div>
                )}
              </div>

              <a href="/blog" className="block text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors">Blog</a>
              <a href="/careers" className="block text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors">Careers</a>
              <a href="/contact" className="block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 text-center mt-4">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
