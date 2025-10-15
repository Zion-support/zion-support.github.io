import React from 'react';
import { X, ChevronRight } from 'lucide-react';

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

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      children: [
        { name: 'All Services', href: '/services' },
        { name: 'AI Solutions', href: '/ai-solutions' },
        { name: 'Micro-SaaS Development', href: '/micro-saas-solutions' },
        { name: 'IT Services', href: '/it-solutions' },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Digital Transformation', href: '/digital-transformation' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      children: [
        { name: 'All Solutions', href: '/solutions' },
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Pricing', href: '/pricing' }
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

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
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="space-y-2">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSection(item.name)}
                        className="w-full flex items-center justify-between text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronRight 
                          className={`w-4 h-4 transition-transform ${
                            expandedSections.includes(item.name) ? 'rotate-90' : ''
                          }`} 
                        />
                      </button>
                      {expandedSections.includes(item.name) && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.children.map((child, childIndex) => (
                            <a
                              key={childIndex}
                              href={child.href}
                              className="block text-gray-400 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors"
                              onClick={onClose}
                            >
                              {child.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors"
                      onClick={onClose}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <a
                href="/contact"
                className="block w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-all duration-300"
                onClick={onClose}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
