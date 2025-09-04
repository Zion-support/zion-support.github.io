import Link from 'next/link';
import React from 'react';

const navLinks: Array<{ href: string; label: string }> = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/micro-saas', label: 'Micro SAAS' },
  { href: '/it-services', label: 'IT Services' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' }
];

export function Header(): JSX.Element {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: 'white', borderBottom: '1px solid #eee'
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 20px', maxWidth: 1200, margin: '0 auto'
      }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: 18, textDecoration: 'none', color: '#111' }}>
          Zion Tech Group
        </Link>
        <nav style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{ color: '#111', textDecoration: 'none' }}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
