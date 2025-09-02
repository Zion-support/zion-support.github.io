import React from 'react';

export const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Services', href: '/services/ai' },
        { name: 'Cloud Services', href: '/services/cloud' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Infrastructure', href: '/services/infrastructure' },
        { name: 'Digital Transformation', href: '/services/transformation' },
        { name: 'Consulting', href: '/services/consulting' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'News', href: '/news' },
        { name: 'Privacy', href: '/privacy' },
        { name: 'Terms', href: '/terms' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Webinars', href: '/webinars' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Documentation', href: '/documentation' },
        { name: 'Support', href: '/support' }
      ]
    }
  ];

  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Zion Tech Group</h3>
            <p className="mt-4 text-sm text-gray-600">
              Transforming businesses with AI, cloud, cybersecurity, and micro SaaS solutions.
            </p>
            <div className="mt-4 space-y-1 text-sm text-gray-700">
              <p>
                <span className="font-medium">Mobile:</span> <a className="hover:underline" href="tel:+13024640950">+1 302 464 0950</a>
              </p>
              <p>
                <span className="font-medium">E-mail:</span> <a className="hover:underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>
              </p>
              <p>
                <span className="font-medium">Address:</span> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-gray-700 hover:text-blue-600">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {currentYear} Zion Tech Group. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="https://ziontechgroup.com" className="text-gray-700 hover:text-blue-600">Website</a>
            <a href="/sitemap" className="text-gray-700 hover:text-blue-600">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;