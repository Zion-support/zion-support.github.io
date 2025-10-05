import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const sections = [
    {
      title: 'Explore',
      links: [
        { label: 'Home', path: '/' },
        { label: 'Solutions', path: '/solutions' },
        { label: 'Services', path: '/services' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', path: '/blog' },
        { label: 'Documentation', path: '/docs' },
        { label: 'Case Studies', path: '/case-studies' },
        { label: 'White Papers', path: '/white-papers' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', path: '/help' },
        { label: 'Community', path: '/community' },
        { label: 'Status', path: '/status' },
        { label: 'API Reference', path: '/api' }
      ]
    }
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="p-6">
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Z</span>
          </div>
          <span className="ml-3 text-xl font-bold text-gray-900">Zion Tech</span>
        </div>

        <nav className="space-y-6">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(link.path)
                          ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;