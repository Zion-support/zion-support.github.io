import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.'
};

function Header() {
  return (
    <header style={{borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 50, background: '#fff'}}>
      <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', maxWidth: 1200, margin: '0 auto'}}>
        <Link href="/" style={{fontWeight: 700, fontSize: 18}}>Zion Tech Group</Link>
        <div style={{display: 'flex', gap: 16, flexWrap: 'wrap'}}>
          <Link href="/services">Services</Link>
          <Link href="/services/micro-saas">Micro SaaS</Link>
          <Link href="/services/ai-services">AI Services</Link>
          <Link href="/services/it-services">IT Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{borderTop: '1px solid #e5e7eb', marginTop: 40, padding: '24px 16px'}}>
      <div style={{maxWidth: 1200, margin: '0 auto', display: 'grid', gap: 16}}>
        <div style={{display: 'flex', gap: 16, flexWrap: 'wrap'}}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/services/micro-saas">Micro SaaS</Link>
          <Link href="/services/ai-services">AI Services</Link>
          <Link href="/services/it-services">IT Services</Link>
          <a href="https://ziontechgroup.com" rel="noopener noreferrer">Main Site</a>
        </div>
        <div style={{fontSize: 14, color: '#4b5563'}}>
          <div>Mobile: +1 302 464 0950</div>
          <div>Email: <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>
          <div>Address: 364 E Main St STE 1008 Middletown DE 19709</div>
        </div>
        <div style={{fontSize: 12, color: '#6b7280'}}>© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif', color: '#111827'}}>
        <Header />
        <main style={{maxWidth: 1200, margin: '0 auto', padding: '24px 16px'}}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

