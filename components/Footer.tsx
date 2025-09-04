import Link from 'next/link';
import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer style={{ marginTop: 40, borderTop: '1px solid #eee', background: '#fafafa' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px', display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))' }}>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Company</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/partners">Partners</Link></li>
          </ul>
        </div>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Resources</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/help">Help</Link></li>
            <li><Link href="/status">Status</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Legal</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/cookies">Cookies</Link></li>
            <li><Link href="/security">Security</Link></li>
          </ul>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #eee', padding: '12px 20px', textAlign: 'center', color: '#666' }}>
        © {new Date().getFullYear()} Zion Tech Group
      </div>
    </footer>
  );
}
