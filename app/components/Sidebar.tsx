import React, { useState } from 'react';
import { X, ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const solutions = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Micro SaaS', href: '/micro-saas-solutions' },
    { name: '5G Solutions', href: '/5g-solutions' }
  ];

  const mainPages = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
          <div className="fixed top-0 left-0 h-full w-80 bg-slate-800 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">Navigation</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="space-y-2">
              {mainPages.map((page) => (
                <a
                  key={page.name}
                  href={page.href}
                  className="block text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors"
                  onClick={onClose}
                >
                  {page.name}
                </a>
              ))}
              
              {/* Solutions Section */}
              <div className="pt-4">
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <span>Solutions</span>
                  {isSolutionsOpen ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                
                {isSolutionsOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {solutions.map((solution) => (
                      <a
                        key={solution.name}
                        href={solution.href}
                        className="block text-gray-400 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors text-sm"
                        onClick={onClose}
                      >
                        {solution.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Additional Links */}
              <div className="pt-4 border-t border-slate-700">
                <a
                  href="/tutorials"
                  className="block text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors"
                  onClick={onClose}
                >
                  Tutorials
                </a>
                <a
                  href="/demo"
                  className="block text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors"
                  onClick={onClose}
                >
                  Demo
                </a>
                <a
                  href="/support"
                  className="block text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors"
                  onClick={onClose}
                >
                  Support
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
