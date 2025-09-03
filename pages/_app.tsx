import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useState } from 'react';

function Header(): any {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: '#0b1220', color: 'white',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    }}>
      <nav style={{
        maxWidth: 1200, margin: '0 auto', padding: '12px 16px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between', gap: 12}}>
        <Link href="/" style={{ fontWeight: 800, letterSpacing: 0.3, fontSize: '1.25rem' }}>
          Zion Tech Group
        </Link>
        
        {/* Desktop Navigation */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }} className="hidden md:flex">
          <Link href="/" style={{ opacity: 0.9, padding: '8px 12px', borderRadius: '6px', transition: 'all 0.2s' }}>
            Home
          </Link>
          <div style={{ position: 'relative' }}>
            <Link href="/services" style={{ opacity: 0.9, padding: '8px 12px', borderRadius: '6px', transition: 'all 0.2s' }}>
              Services
            </Link>
          </div>
          <Link href="/micro-saas" style={{ opacity: 0.9, padding: '8px 12px', borderRadius: '6px', transition: 'all 0.2s' }}>
            Micro SaaS
          </Link>
          <Link href="/ai-services" style={{ opacity: 0.9, padding: '8px 12px', borderRadius: '6px', transition: 'all 0.2s' }}>
            AI Services
          </Link>
          <Link href="/it-services" style={{ opacity: 0.9, padding: '8px 12px', borderRadius: '6px', transition: 'all 0.2s' }}>
            IT Services
          </Link>
          <Link href="/pricing" style={{ opacity: 0.9, padding: '8px 12px', borderRadius: '6px', transition: 'all 0.2s' }}>
            Pricing
          </Link>
          <Link href="/contact" style={{ 
            fontWeight: 600, background: '#22d3ee', color: '#0b1220', 
            padding: '8px 16px', borderRadius: '8px', transition: 'all 0.2s',
            marginLeft: '8px'
          }}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'block',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '8px'
          }}
          className="md:hidden"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div style={{
          background: '#0b1220',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '16px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link href="/" style={{ opacity: 0.9, padding: '8px 0' }}>Home</Link>
            <Link href="/services" style={{ opacity: 0.9, padding: '8px 0' }}>Services</Link>
            <Link href="/micro-saas" style={{ opacity: 0.9, padding: '8px 0' }}>Micro SaaS</Link>
            <Link href="/ai-services" style={{ opacity: 0.9, padding: '8px 0' }}>AI Services</Link>
            <Link href="/it-services" style={{ opacity: 0.9, padding: '8px 0' }}>IT Services</Link>
            <Link href="/pricing" style={{ opacity: 0.9, padding: '8px 0' }}>Pricing</Link>
            <Link href="/contact" style={{ 
              fontWeight: 600, background: '#22d3ee', color: '#0b1220', 
              padding: '8px 16px', borderRadius: '8px', textAlign: 'center', marginTop: '8px'
            }}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer(): any {
  return (
    <footer style={{ 
      background: '#0b1220', 
      color: 'white', 
      marginTop: 60, 
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '40px 0 20px 0'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
        {/* Main Footer Content */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '32px',
          marginBottom: '32px'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px', color: '#22d3ee' }}>
              Zion Tech Group
            </h3>
            <p style={{ marginBottom: '12px', opacity: 0.9 }}>
              Leading provider of micro SaaS products, AI services, and IT solutions. 
              We help businesses scale efficiently and securely with innovative technology.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
              <span>📞 <a href="tel:+13024640950" style={{ color: '#93c5fd' }}>+1 302 464 0950</a></span>
              <span>✉️ <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#93c5fd' }}>kleber@ziontechgroup.com</a></span>
              <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '16px', color: '#22d3ee' }}>
              Services
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/services" style={{ opacity: 0.8, fontSize: '0.9rem' }}>All Services</Link>
              <Link href="/micro-saas" style={{ opacity: 0.8, fontSize: '0.9rem' }}>Micro SaaS Products</Link>
              <Link href="/ai-services" style={{ opacity: 0.8, fontSize: '0.9rem' }}>AI Services</Link>
              <Link href="/it-services" style={{ opacity: 0.8, fontSize: '0.9rem' }}>IT Services</Link>
              <Link href="/services-catalog" style={{ opacity: 0.8, fontSize: '0.9rem' }}>Services Catalog</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '16px', color: '#22d3ee' }}>
              Company
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/" style={{ opacity: 0.8, fontSize: '0.9rem' }}>Home</Link>
              <Link href="/pricing" style={{ opacity: 0.8, fontSize: '0.9rem' }}>Pricing</Link>
              <Link href="/contact" style={{ opacity: 0.8, fontSize: '0.9rem' }}>Contact</Link>
              <Link href="/privacy" style={{ opacity: 0.8, fontSize: '0.9rem' }}>Privacy Policy</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '16px', color: '#22d3ee' }}>
              Quick Links
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="https://ziontechgroup.com" style={{ opacity: 0.8, fontSize: '0.9rem' }}>Website</a>
              <a href="mailto:kleber@ziontechgroup.com" style={{ opacity: 0.8, fontSize: '0.9rem' }}>Get Quote</a>
              <a href="tel:+13024640950" style={{ opacity: 0.8, fontSize: '0.9rem' }}>Call Now</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/" style={{ opacity: 0.7, fontSize: '0.85rem' }}>Home</Link>
            <Link href="/services" style={{ opacity: 0.7, fontSize: '0.85rem' }}>Services</Link>
            <Link href="/micro-saas" style={{ opacity: 0.7, fontSize: '0.85rem' }}>Micro SaaS</Link>
            <Link href="/ai-services" style={{ opacity: 0.7, fontSize: '0.85rem' }}>AI Services</Link>
            <Link href="/it-services" style={{ opacity: 0.7, fontSize: '0.85rem' }}>IT Services</Link>
            <Link href="/pricing" style={{ opacity: 0.7, fontSize: '0.85rem' }}>Pricing</Link>
            <Link href="/contact" style={{ opacity: 0.7, fontSize: '0.85rem' }}>Contact</Link>
            <Link href="/privacy" style={{ opacity: 0.7, fontSize: '0.85rem' }}>Privacy</Link>
          </div>
          <small style={{ opacity: 0.6, fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
            Innovative Micro SaaS, AI Services & IT Solutions
          </small>
        </div>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
