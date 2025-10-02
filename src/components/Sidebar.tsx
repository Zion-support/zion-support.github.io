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
        { label: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Popular Services',
      links: [
        { label: 'AI Workflow Automation', path: '/services/ai-workflow-automation' },
        { label: 'AI Virtual Assistant', path: '/services/ai-virtual-assistant' },
        { label: 'AI Data Analytics', path: '/services/ai-data-analytics' },
        { label: 'Advanced Cybersecurity AI', path: '/services/advanced-cybersecurity-ai' },
      ],
    },
  ];

  return (
    <aside className="hidden xl:block w-72 shrink-0" aria-label="Sidebar navigation">
      <nav className="sticky top-24 space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.links.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                      isActive(item.path)
                        ? 'bg-slate-800 text-blue-400'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

