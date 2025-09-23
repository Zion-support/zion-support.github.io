
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ padding: 24, borderTop: '1px solid #e5e7eb', textAlign: 'center', fontSize: 14 }}>
      <nav style={{ marginBottom: 8 }}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/services" style={{ marginRight: 12 }}>Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div>
        © {new Date().getFullYear()} Zion Tech Group
      </div>
    </footer>
  );
}
