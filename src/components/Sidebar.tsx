import React from 'react';
import Link from 'next/link';

export function Sidebar() {
  return (
    <aside style={{ padding: 16, borderRight: '1px solid #e2e8f0', minWidth: 220 }}>
      <nav>
        <h4 style={{ marginTop: 0 }}>Explore</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
          <li><Link href="/solutions">Solutions</Link></li>
          <li><Link href="/ai-services">AI & Analytics</Link></li>
          <li><Link href="/cybersecurity">Cybersecurity</Link></li>
          <li><Link href="/cloud-devops">Cloud & DevOps</Link></li>
          <li><Link href="/micro-saas">Micro SaaS</Link></li>
          <li><Link href="/marketplace">Marketplace</Link></li>
          <li><Link href="/green-it">Green IT</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

