import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ padding: '24px', background: '#1c2541', color: '#cbd5e1', marginTop: 40 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
        <div>
          <h4 style={{ marginTop: 0, color: '#fff' }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/partners">Partners</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginTop: 0, color: '#fff' }}>Resources</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/status">Status</Link></li>
            <li><Link to="/security">Security</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginTop: 0, color: '#fff' }}>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginTop: 0, color: '#fff' }}>Get in touch</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/request-quote">Request a Quote</Link></li>
          </ul>
        </div>
      </div>
      <div style={{ marginTop: 16, textAlign: 'center' }}>© {year} Zion Tech Group. All rights reserved.</div>
    </footer>
  );
}

export default Footer;

