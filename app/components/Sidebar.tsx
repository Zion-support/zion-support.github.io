import React from 'react';
import { X, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const mainPages = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const solutions = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Micro SaaS', href: '/micro-saas-solutions' },
    { name: '5G Solutions', href: '/5g-solutions' }
  ];

  const additionalPages = [
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Demos', href: '/demo' },
    { name: 'Support', href: '/support' },
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
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
            
            <nav className="space-y-6">
              {/* Main Pages */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Main Pages</h3>
                <div className="space-y-2">
                  {mainPages.map((page) => (
                    <a 
                      key={page.name}
                      href={page.href} 
                      className="flex items-center text-gray-300 hover:text-white transition-colors py-2"
                      onClick={onClose}
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {page.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Solutions</h3>
                <div className="space-y-2">
                  {solutions.map((solution) => (
                    <a 
                      key={solution.name}
                      href={solution.href} 
                      className="flex items-center text-gray-300 hover:text-white transition-colors py-2"
                      onClick={onClose}
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {solution.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Additional Pages */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Resources</h3>
                <div className="space-y-2">
                  {additionalPages.map((page) => (
                    <a 
                      key={page.name}
                      href={page.href} 
                      className="flex items-center text-gray-300 hover:text-white transition-colors py-2"
                      onClick={onClose}
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {page.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6 border-t border-gray-700">
                <a 
                  href="/contact" 
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  onClick={onClose}
                >
                  Get Started
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
