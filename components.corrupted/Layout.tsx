import React from 'react';
import Link from 'next/link';
import SEOHead from './SEOHead';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children, 
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
  keywords = 'technology solutions, AI development, cloud services, blockchain, data analytics, web development, mobile development, IoT platforms, cybersecurity',
  ogImage = '/images/og-image.jpg'
}) => {
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
      />
      <div className="min-h-screen flex flex-col">
        <header style={{
          position: 'sticky', top: 0, zIndex: 50, background: '#0b1220', color: 'white',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <nav style={{
            maxWidth: 1200, margin: '0 auto', padding: '10px 16px', display: 'flex',
            alignItems: 'center', justifyContent: 'space-between', gap: 12
          }}>
            <Link href="/" style={{ fontWeight: 800, letterSpacing: 0.3 }}>Zion Tech Group</Link>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/" style={{ opacity: 0.9 }}>Home</Link>
              <Link href="/services" style={{ opacity: 0.9 }}>Services</Link>
              <Link href="/pricing" style={{ opacity: 0.9 }}>Pricing</Link>
              <Link href="/contact" style={{ fontWeight: 600, background: '#22d3ee', color: '#0b1220', padding: '6px 10px', borderRadius: 8 }}>Contact</Link>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer style={{ background: '#0b1220', color: 'white', marginTop: 40, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px', display: 'grid', gap: 16 }}>
            <div style={{ display: 'grid', gap: 8 }}>
              <strong>Zion Tech Group</strong>
              <span>Mobile: +1 302 464 0950</span>
              <span>Email: <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#93c5fd' }}>kleber@ziontechgroup.com</a></span>
              <span>Address: 364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/services" style={{ opacity: 0.9 }}>Services</Link>
              <Link href="/pricing" style={{ opacity: 0.9 }}>Pricing</Link>
              <Link href="/contact" style={{ opacity: 0.9 }}>Contact</Link>
            </div>
            <small style={{ opacity: 0.7 }}>© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</small>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
