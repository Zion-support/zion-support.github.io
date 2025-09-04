import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useState } from 'react';

function Header(): any {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { 
      href: '/services', 
      label: 'Services',
      submenu: [
        { href: '/services', label: 'All Services' },
        { href: '/micro-saas', label: 'Micro SaaS' },
        { href: '/ai-services', label: 'AI Services' },
        { href: '/it-services', label: 'IT Services' },
        { href: '/services-catalog', label: 'Services Catalog' }
      ]
    },
    { href: '/pricing', label: 'Pricing' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: 'rgba(11, 18, 32, 0.95)', 
      backdropFilter: 'blur(10px)', color: 'white',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    }}>
      <nav style={{
        maxWidth: 1400, margin: '0 auto', padding: '12px 20px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between', gap: 16}}>
        <Link href="/" style={{ 
          fontWeight: 800, letterSpacing: 0.3, fontSize: '1.25rem',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textDecoration: 'none'
        }}>Zion Tech Group</Link>
        
        <div className="header-nav-links">
          <Link href="/" className="header-nav-link">Home</Link>
          <Link href="/solutions" className="header-nav-link">Solutions</Link>
          <Link href="/services" className="header-nav-link">Services</Link>
          <Link href="/about" className="header-nav-link">About</Link>
          <Link href="/careers" className="header-nav-link">Careers</Link>
          <Link href="/contact" className="header-nav-cta">Contact</Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            '@media (max-width: 768px)': { display: 'block' },
            background: 'none', border: 'none', color: 'white', fontSize: '1.5rem',
            cursor: 'pointer', padding: '8px'
          }}
        >
          ☰
        </button>
      </nav>
      
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link href="/" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link href="/solutions" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
        <Link href="/services" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
        <Link href="/about" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
        <Link href="/careers" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
        <Link href="/contact" className="header-nav-cta" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
      </div>
    </header>
  );
}

function Footer(): JSX.Element {
  return (
    <footer style={{ 
      background: 'linear-gradient(135deg, #0b1220, #1e293b)', 
      color: 'white', marginTop: 60, 
      borderTop: '1px solid rgba(255,255,255,0.1)' 
    }}>
      <div style={{ 
        maxWidth: 1400, margin: '0 auto', padding: '40px 20px',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: 32 
      }}>
        {/* Company Info */}
        <div style={{ display: 'grid', gap: 12 }}>
          <div style={{ 
            fontWeight: 800, fontSize: '1.25rem',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Zion Tech Group</div>
          <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
            Leading provider of innovative micro SaaS products, AI services, and IT solutions. 
            Empowering businesses with cutting-edge technology and digital transformation.
          </p>
          <div style={{ display: 'grid', gap: 6, fontSize: '0.9rem' }}>
            <div>📞 <a href="tel:+13024640950" style={{ color: '#93c5fd', textDecoration: 'none' }}>+1 302 464 0950</a></div>
            <div>✉️ <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#93c5fd', textDecoration: 'none' }}>kleber@ziontechgroup.com</a></div>
            <div>📍 364 E Main St STE 1008, Middletown DE 19709</div>
            <div>🌐 <a href="https://ziontechgroup.com" style={{ color: '#93c5fd' }}>ziontechgroup.com</a></div>
          </div>
        </div>

        {/* Solutions */}
        <div className="footer-section">
          <h3>Solutions</h3>
          <Link href="/solutions">All Solutions</Link>
          <Link href="/micro-saas">Micro SaaS</Link>
          <Link href="/ai-services">AI Services</Link>
          <Link href="/it-services">IT Services</Link>
          <Link href="/enterprise">Enterprise</Link>
          <div className="text-sm mt-2 space-y-1">
            <div>• 120+ Micro SaaS Products</div>
            <div>• 80+ AI Services</div>
            <div>• 80+ IT Solutions</div>
          </div>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <Link href="/services">All Services</Link>
          <Link href="/services-catalog">Services Catalog</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
          <div className="text-sm mt-2 space-y-1">
            <div>• Custom Development</div>
            <div>• Consulting Services</div>
            <div>• 24/7 Support</div>
          </div>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h3>Company</h3>
          <Link href="/about">About Us</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>

        {/* Contact CTA */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Get Started</h3>
          <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
            Ready to transform your business with our innovative solutions?
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link href="/contact" style={{ 
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white', padding: '10px 16px', borderRadius: 8,
              textAlign: 'center', textDecoration: 'none', fontWeight: 600
            }}>Request Quote</Link>
            <a href="tel:+13024640950" style={{ 
              background: 'rgba(255,255,255,0.1)', color: 'white', 
              padding: '10px 16px', borderRadius: 8,
              textAlign: 'center', textDecoration: 'none', fontWeight: 600
            }}>Call Now</a>
            <Link href="/services-catalog" style={{ 
              background: 'rgba(255,255,255,0.05)', color: 'white', 
              padding: '10px 16px', borderRadius: 8,
              textAlign: 'center', textDecoration: 'none', fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.1)'
            }}>View Catalog</Link>
          </div>
        </div>
      </div>
      
      <div style={{ 
        borderTop: '1px solid rgba(255,255,255,0.1)', 
        padding: '20px', textAlign: 'center' 
      }}>
        <small style={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
          <Link href="/privacy">Privacy Policy</Link> | 
          <Link href="/terms">Terms of Service</Link>
        </small>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ErrorBoundary>
      <PerformanceOptimizer />
      <PerformanceMonitor />
      <Navigation />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Component {...pageProps} />
      <Footer />
    </ErrorBoundary>
  );
};