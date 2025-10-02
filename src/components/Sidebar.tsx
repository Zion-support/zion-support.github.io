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
        { label: 'Resources', path: '/resources' },
        { label: 'Case Studies', path: '/case-studies' },
        { label: 'Blog', path: '/blog' },
        { label: 'About', path: '/about' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Enterprise', path: '/solutions/enterprise' },
        { label: 'SMB', path: '/solutions/smb' },
        { label: 'Startup', path: '/solutions/startup' },
        { label: 'Healthcare', path: '/solutions/healthcare' },
        { label: 'Financial', path: '/solutions/financial' },
        { label: 'Retail', path: '/solutions/retail' },
        { label: 'Manufacturing', path: '/solutions/manufacturing' },
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'AI Services', path: '/services' },
        { label: 'IT Services', path: '/services' },
        { label: 'Micro SaaS', path: '/services' },
        { label: 'Cloud Solutions', path: '/services' },
        { label: 'Data Analytics', path: '/services' },
        { label: 'Cybersecurity', path: '/services' },
        { label: 'Automation', path: '/services' },
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', path: '/contact' },
        { label: 'Support', path: '/support' },
        { label: 'Documentation', path: '/docs' },
        { label: 'Pricing', path: '/pricing' },
        { label: 'Partners', path: '/partners' },
      ]
    }
  ];

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 h-full overflow-y-auto hidden xl:block">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Navigation</h2>
        {sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <nav className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive(link.path)
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;