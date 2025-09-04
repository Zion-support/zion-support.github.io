import React from 'react';
import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ padding: '24px', background: '#1c2541', color: '#cbd5e1', marginTop: 40 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
        <div>
          <h4 style={{ marginTop: 0, color: '#fff' }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/partners">Partners</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginTop: 0, color: '#fff' }}>Resources</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link href="/help">Help Center</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/status">Status</Link></li>
            <li><Link href="/security">Security</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginTop: 0, color: '#fff' }}>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/cookies">Cookies</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginTop: 0, color: '#fff' }}>Get in touch</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/request-quote">Request a Quote</Link></li>
          </ul>
        </div>
      </div>
      <div style={{ marginTop: 16, textAlign: 'center' }}>© {year} Zion Tech Group. All rights reserved.</div>
    </footer>
  );
}

export default Footer;

