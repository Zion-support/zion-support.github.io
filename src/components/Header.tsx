import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header style={{ padding: '16px', background: '#0b132b', color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700 }}>Zion Tech Group</Link>
        <nav style={{ display: 'flex', gap: 16 }}>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/micro-saas">Micro SAAS</Link>
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

