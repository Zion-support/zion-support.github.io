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
      ],
    },
    {
      title: 'AI Services',
      links: [
        { label: 'AI Solutions', path: '/services/ai-services' },
        { label: 'Micro SaaS', path: '/services/micro-saas' },
        { label: 'Data Analytics', path: '/services/analytics' },
        { label: 'Workflow Automation', path: '/services/automation' },
      ],
    },
    {
      title: 'IT Services',
      links: [
        { label: 'IT Services', path: '/services/it-services' },
        { label: 'Cloud & DevOps', path: '/services/cloud' },
        { label: 'Cybersecurity', path: '/services/security' },
        {
          label: 'Compliance Monitor',
          path: '/services/ai-compliance-monitor',
        },
      ],
    },
    {
      title: 'Tools',
      links: [
        { label: 'SEO Split Testing', path: '/services/seo-split-testing' },
        { label: 'Image CDN Optimizer', path: '/services/image-cdn-optimizer' },
      ],
    },
  ];

  return (
    <aside className='bg-gray-50 rounded-lg p-6 h-fit sticky top-24'>
      <div className='space-y-6'>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3'>
              {section.title}
            </h3>
            <nav className='space-y-1'>
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to={link.path}
                  className={`block px-3 py-2 text-sm rounded-md transition-colors ${
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
        <div className='pt-4 border-t border-gray-200'>
          <Link
            to='/contact'
            className='block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium'
          >
            Get Started
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
