import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const sections: Array<{ title: string; links: Array<{ label: string; path: string }> }> = [
    {
      title: 'Solutions',
      links: [
        { label: 'Enterprise', path: '/solutions/enterprise' },
        { label: 'SMB', path: '/solutions/smb' },
        { label: 'Startup', path: '/solutions/startup' },
        { label: 'Healthcare', path: '/solutions/healthcare' },
        { label: 'Financial', path: '/solutions/financial' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Workflow Automation', path: '/services/ai-workflow-automation' },
        { label: 'Virtual Assistant', path: '/services/ai-virtual-assistant' },
        { label: 'Data Analytics', path: '/services/ai-data-analytics' },
        { label: 'Cybersecurity AI', path: '/services/advanced-cybersecurity-ai' },
        { label: 'Cloud & DevOps', path: '/cloud-devops' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', path: '/about' },
        { label: 'Partners', path: '/partners' },
        { label: 'Team', path: '/team' },
        { label: 'Careers', path: '/careers' },
        { label: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', path: '/case-studies' },
        { label: 'Blog', path: '/blog' },
        { label: 'Docs', path: '/docs' },
        { label: 'Developer Tools', path: '/developer-tools' },
        { label: 'Training', path: '/training' },
      ],
    },
  ];

  return (
    <aside className="hidden xl:block w-64 shrink-0 border-r border-slate-200 bg-white/50 backdrop-blur-sm">
      <nav className="p-4 space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                      location.pathname === link.path
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-700 hover:text-blue-700 hover:bg-slate-100'
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
    </aside>
  );
};

export default Sidebar;

