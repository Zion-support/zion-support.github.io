import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Resources | Zion Tech Group',
  description: 'Guides, case studies, and helpful resources from Zion Tech Group.',
};

export default function ResourcesPage() {
  const sections = [
    {
      title: 'Getting Started',
      links: [
        { label: 'Solutions Overview', href: '/solutions' },
        { label: 'All Services', href: '/services' },
        { label: 'Contact Sales', href: '/contact' },
      ],
    },
    {
      title: 'Learn',
      links: [
        { label: 'Guides', href: '/guides' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Blog & Insights', href: '/blog' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Resources</h1>
          <p className="text-gray-600 text-lg">Helpful links and materials to explore Zion Tech Group.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {sections.map((section) => (
          <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-600 hover:text-blue-800">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

