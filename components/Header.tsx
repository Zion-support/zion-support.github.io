import React from 'react';
import NextLink from 'next/link';

const navLinks: { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/micro-saas', label: 'Micro SaaS' },
  { href: '/it-services', label: 'IT Services' },
  { href: '/ai-services', label: 'AI Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">
            <NextLink href="/">
              Zion Tech Group
            </NextLink>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NextLink
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </NextLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}