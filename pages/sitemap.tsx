import React from 'react';
import { Link } from 'react-router-dom';

const routes = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Docs', href: '/docs' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
  { name: 'Cookies', href: '/cookies' },
];

export default function SitemapPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <ul className="space-y-3">
        {routes.map((r) => (
          <li key={r.href}>
            <Link to={r.href} className="text-blue-600 hover:underline">{r.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

