import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {

  const currentYear = new Date().getFullYear();

  const navSections = [
    {

      title: 'Company',
      links: [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Partners', to: '/partners' },
        { label: 'Careers', to: '/careers' },
        { label: 'Contact', to: '/contact' },
      ]},
    {

      title: 'Services',
      links: [
        { label: 'All Services', to: '/services' },
        { label: 'Pricing', to: '/pricing' },
        { label: 'FAQ', to: '/faq' },
        { label: 'Blog', to: '/blog' },
      ]},
    {

      title: 'Legal',
      links: [
        { label: 'Privacy Policy', to: '/privacy' },
        { label: 'Terms of Service', to: '/terms' },
        { label: 'Sitemap', to: '/sitemap' },
      ]},
  ];

  const social = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ziontechgroup' },
    { label: 'Twitter', href: 'https://twitter.com/ziontechgroup' },
    { label: 'GitHub', href: 'https://github.com/Zion-Holdings' },
    { label: 'YouTube', href: 'https://www.youtube.com/@ziontechgroup' },
  ];

  return (
    <footer className="bg-black border-t border-cyan-900/30 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-3 text-xl font-bold">
              Zion Tech Group
            </Link>
            <p className="text-sm text-gray-300">
              AI, cybersecurity, cloud, and digital transformation solutions.
            </p>
            <div className="flex gap-4 mt-4">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 text-sm"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {navSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-cyan-300 font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link className="text-gray-300 hover:text-cyan-400" to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-cyan-900/30 text-sm text-gray-400 flex items-center justify-between">
          <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
          <span>
            <a className="hover:text-cyan-400" href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer">
              https://ziontechgroup.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

