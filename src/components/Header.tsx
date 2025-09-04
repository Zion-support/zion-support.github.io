import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header style={{ padding: '16px', background: '#0b132b', color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700 }}>Zion Tech Group</Link>
        <nav style={{ display: 'flex', gap: 16 }}>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/micro-saas">Micro SAAS</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

