import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu, ChevronDown, ChevronUp } from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const serviceCategories = [
    {
      title: 'Micro SAAS',
      services: [
        { name: 'AI Project Manager Pro', path: '/ai-project-manager' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot' },
        { name: 'AI Content Studio', path: '/ai-content-studio' },
      ]
    },
    {
      title: 'AI Services',
      services: [
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare' },
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing' },
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'IT Infrastructure', path: '/it-infrastructure' },
        { name: '24/7 IT Support', path: '/it-support' },
      ]
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Navigation Panel */}
      <div className="relative bg-slate-900 h-full w-80 max-w-[85vw] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-2" role="navigation" aria-label="Mobile navigation">
          <Link
            to="/"
            className="block px-4 py-3 text-white hover:bg-cyan-500/20 rounded-lg transition-colors"
            onClick={onClose}
          >
            Home
          </Link>
          
          <Link
            to="/about"
            className="block px-4 py-3 text-white hover:bg-cyan-500/20 rounded-lg transition-colors"
            onClick={onClose}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div>
            <button
              onClick={() => toggleSection('services')}
              className="flex items-center justify-between w-full px-4 py-3 text-white hover:bg-cyan-500/20 rounded-lg transition-colors"
              aria-expanded={expandedSections.has('services')}
              aria-controls="services-menu"
            >
              <span>Services</span>
              {expandedSections.has('services') ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            
            {expandedSections.has('services') && (
              <div id="services-menu" className="ml-4 mt-2 space-y-1">
                {serviceCategories.map((category, index) => (
                  <div key={index}>
                    <button
                      onClick={() => toggleSection(category.title)}
                      className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded transition-colors"
                      aria-expanded={expandedSections.has(category.title)}
                    >
                      <span>{category.title}</span>
                      {expandedSections.has(category.title) ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedSections.has(category.title) && (
                      <div className="ml-4 space-y-1">
                        {category.services.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            to={service.path}
                            className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                            onClick={onClose}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/pricing"
            className="block px-4 py-3 text-white hover:bg-cyan-500/20 rounded-lg transition-colors"
            onClick={onClose}
          >
            Pricing
          </Link>
          
          <Link
            to="/case-studies"
            className="block px-4 py-3 text-white hover:bg-cyan-500/20 rounded-lg transition-colors"
            onClick={onClose}
          >
            Case Studies
          </Link>
          
          <Link
            to="/blog"
            className="block px-4 py-3 text-white hover:bg-cyan-500/20 rounded-lg transition-colors"
            onClick={onClose}
          >
            Blog
          </Link>
          
          <Link
            to="/contact"
            className="block px-4 py-3 text-white hover:bg-cyan-500/20 rounded-lg transition-colors"
            onClick={onClose}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="p-4 border-t border-gray-700">
          <Link
            to="/contact"
            className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-cyan-600 hover:to-purple-700 transition-all"
            onClick={onClose}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;