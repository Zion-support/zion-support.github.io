import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const mainLinks = [
    { name: 'Home', href: '/', icon: null },
    { name: 'About', href: '/about', icon: null },
    { name: 'Services', href: '/services', icon: null },
    { name: 'Pricing', href: '/pricing', icon: null },
    { name: 'Blog', href: '/blog', icon: null },
    { name: 'Contact', href: '/contact', icon: null },
    { name: 'Demo', href: '/demo', icon: null },
    { name: 'Support', href: '/support', icon: null }
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: null },
    { name: 'AI Services', href: '/ai-services', icon: null },
    { name: 'AI Healthcare', href: '/ai-healthcare-diagnostics', icon: null },
    { name: 'AI Automation', href: '/ai-automation-platform', icon: null },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: null },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: null },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: null },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: null }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: null },
    { name: 'IT Services', href: '/it-services', icon: null },
    { name: 'Web Development', href: '/web-development', icon: null },
    { name: 'Mobile Development', href: '/mobile-development', icon: null },
    { name: 'Management', href: '/database-management', icon: null },
    { name: 'Custom Software', href: '/custom-software', icon: null },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: null },
    { name: 'System Integration', href: '/system-integration', icon: null }
  ];

  const businessSolutions = [
    { name: 'Micro SaaS', href: '/micro-saas', icon: null },
    { name: 'Cloud Services', href: '/cloud-services', icon: null },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: null },
    { name: 'Process Automation', href: '/process-automation', icon: null },
    { name: 'Data Migration', href: '/data-migration', icon: null },
    { name: 'Performance Optimization', href: '/performance-optimization', icon: null },
    { name: 'API Development', href: '/api-development', icon: null },
    { name: 'Legacy Modernization', href: '/legacy-modernization', icon: null }
  ];

  const additionalLinks = [
    { name: 'Privacy Policy', href: '/privacy', icon: null },
    { name: 'Terms of Service', href: '/terms', icon: null },
    { name: 'Cookie Policy', href: '/cookies', icon: null },
    { name: 'Sitemap', href: '/sitemap', icon: null },
    { name: 'Our Team', href: '/team', icon: null },
    { name: 'Documentation', href: '/docs', icon: null },
    { name: 'Careers', href: '/careers', icon: null },
    { name: 'Tutorials', href: '/tutorials', icon: null }
  ];

  const serviceSections = [
    { title: 'AI Services', links: aiServices, icon: null, key: 'ai' },
    { title: 'IT Services', links: itServices, icon: null, key: 'it' },
    { title: 'Business Solutions', links: businessSolutions, icon: null, key: 'business' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-900 to-slate-800 transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <div className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Main Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Main Navigation
              </h3>
              <ul className="space-y-2">
                {mainLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className={`
                        flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors
                        ${isActive(link.href) 
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
                          : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                        }
                      `}
                    >
                      <div className="w-6 h-6" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Sections */}
            {serviceSections.map((section) => (
              <div key={section.key}>
                <button
                  onClick={() => toggleSection(section.key)}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider hover:text-white transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6" />
                    <span>{section.title}</span>
                  </div>
                  <div className="w-6 h-6" />
                </button>
                {expandedSections.includes(section.key) && (
                  <ul className="mt-2 space-y-1 ml-8">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          onClick={onClose}
                          className={`
                            flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors
                            ${isActive(link.href) 
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
                              : 'text-gray-400 hover:bg-slate-700 hover:text-white'
                            }
                          `}
                        >
                          <div className="w-6 h-6" />
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Additional Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Additional
              </h3>
              <ul className="space-y-2">
                {additionalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className={`
                        flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors
                        ${isActive(link.href) 
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
                          : 'text-gray-400 hover:bg-slate-700 hover:text-white'
                        }
                      `}
                    >
                      <div className="w-6 h-6" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-slate-700">
            <div className="text-center">
              <p className="text-sm text-gray-400">
                © 2024 Zion Tech Group
              </p>
              <p className="text-xs text-gray-500 mt-1">
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;