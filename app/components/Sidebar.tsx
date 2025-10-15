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
              <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
              <button onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-white py-2 px-3 rounded transition-colors">Home</a>
              <a href="/about" className="block text-gray-300 hover:text-white py-2 px-3 rounded transition-colors">About</a>
              
              <div>
                <button onClick={() => toggleSection('services')}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-white py-2 px-3 rounded transition-colors"
                >
                  <span>Services</span>
                  {expandedSections.includes('services') ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {expandedSections.includes('services') && (
                  <div className="ml-4 space-y-1 mt-2">
                    <a href="/ai-services" className="block text-gray-400 hover:text-white py-1 px-3 rounded text-sm transition-colors">AI Services</a>
                    <a href="/it-services" className="block text-gray-400 hover:text-white py-1 px-3 rounded text-sm transition-colors">IT Services</a>
                    <a href="/micro-saas-solutions" className="block text-gray-400 hover:text-white py-1 px-3 rounded text-sm transition-colors">Micro SAAS</a>
                    <a href="/cloud-solutions" className="block text-gray-400 hover:text-white py-1 px-3 rounded text-sm transition-colors">Cloud Solutions</a>
                    <a href="/cybersecurity" className="block text-gray-400 hover:text-white py-1 px-3 rounded text-sm transition-colors">Cybersecurity</a>
                  </div>
                )}
              </div>

              <div>
                <button onClick={() => toggleSection('solutions')}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-white py-2 px-3 rounded transition-colors"
                >
                  <span>Solutions</span>
                  {expandedSections.includes('solutions') ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {expandedSections.includes('solutions') && (
                  <div className="ml-4 space-y-1 mt-2">
                    <a href="/ai-solutions" className="block text-gray-400 hover:text-white py-1 px-3 rounded text-sm transition-colors">AI Solutions</a>
                    <a href="/it-solutions" className="block text-gray-400 hover:text-white py-1 px-3 rounded text-sm transition-colors">IT Solutions</a>
                    <a href="/5g-solutions" className="block text-gray-400 hover:text-white py-1 px-3 rounded text-sm transition-colors">5G Solutions</a>
                    <a href="/digital-transformation" className="block text-gray-400 hover:text-white py-1 px-3 rounded text-sm transition-colors">Digital Transformation</a>
                  </div>
                )}
              </div>

              <a href="/pricing" className="block text-gray-300 hover:text-white py-2 px-3 rounded transition-colors">Pricing</a>
              <a href="/case-studies" className="block text-gray-300 hover:text-white py-2 px-3 rounded transition-colors">Case Studies</a>
              <a href="/blog" className="block text-gray-300 hover:text-white py-2 px-3 rounded transition-colors">Blog</a>
              <a href="/contact" className="block text-gray-300 hover:text-white py-2 px-3 rounded transition-colors">Contact</a>
            </nav>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="text-sm text-gray-300 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Phone:</span>
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Email:</span>
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-semibold">Address:</span>
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
