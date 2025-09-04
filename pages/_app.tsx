import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useState } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import '../styles/globals.css';

function Header(): any {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Link href="/about" className="header-nav-link">About</Link>
          <Link href="/services" className="header-nav-link">All Services</Link>
          <Link href="/services-catalog" className="header-nav-link">Catalog</Link>
          <Link href="/micro-saas" className="header-nav-link">Micro SaaS</Link>
          <Link href="/ai-services" className="header-nav-link">AI Services</Link>
          <Link href="/it-services" className="header-nav-link">IT Services</Link>
          <Link href="/cloud-devops" className="header-nav-link">Cloud DevOps</Link>
          <Link href="/cybersecurity" className="header-nav-link">Cybersecurity</Link>
          <Link href="/quantum-computing" className="header-nav-link">Quantum</Link>
          <Link href="/docs" className="header-nav-link">Docs</Link>
          <Link href="/pricing" className="header-nav-link">Pricing</Link>
          <Link href="/contact" className="header-nav-cta">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          style={{ 
            background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer',
            display: 'none',
            '@media (max-width: 768px)': { display: 'block' } as any
          }
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          ☰
        </button>
      </nav>
      
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link href="/" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link href="/about" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
        <Link href="/services" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>All Services</Link>
        <Link href="/services-catalog" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Catalog</Link>
        <Link href="/micro-saas" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Micro SaaS</Link>
        <Link href="/ai-services" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>AI Services</Link>
        <Link href="/it-services" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>IT Services</Link>
        <Link href="/cloud-devops" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Cloud DevOps</Link>
        <Link href="/cybersecurity" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Cybersecurity</Link>
        <Link href="/quantum-computing" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Quantum</Link>
        <Link href="/docs" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Docs</Link>
        <Link href="/pricing" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
        <Link href="/contact" className="header-nav-cta" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
      </div>
    </header>
  );
}

function Footer(): any {
  return (
    <footer style={{ 
      background: 'linear-gradient(135deg, #0b1220, #1e293b)', 
      color: 'white', 
      marginTop: 60, 
      borderTop: '1px solid rgba(255,255,255,0.1)' 
    }}>
      <div style={{ 
        maxWidth: 1400, 
        margin: '0 auto', 
        padding: '40px 20px',
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: 32 
      }}>
        {/* Company Info */}
        <div style={{ display: 'grid', gap: 12 }}>
          <div style={{ 
            fontWeight: 800, 
            fontSize: '1.25rem',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Zion Tech Group</div>
          <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
            Transforming businesses through innovative AI, quantum computing, and cutting-edge technology solutions.
          </p>
          <div style={{ display: 'grid', gap: 6, fontSize: '0.9rem' }}>
            <div>📞 <a href="tel:+13024640950" style={{ color: '#93c5fd', textDecoration: 'none' }}>+1 302 464 0950</a></div>
            <div>✉️ <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#93c5fd', textDecoration: 'none' }}>kleber@ziontechgroup.com</a></div>
            <div>📍 364 E Main St STE 1008, Middletown DE 19709</div>
            <div>🌐 <a href="https://ziontechgroup.com" style={{ color: '#93c5fd', textDecoration: 'none' }}>ziontechgroup.com</a></div>
          </div>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <Link href="/services">All Services</Link>
          <Link href="/micro-saas">Micro SaaS Products</Link>
          <Link href="/ai-services">AI Services</Link>
          <Link href="/it-services">IT Services</Link>
          <Link href="/cloud-devops">Cloud DevOps</Link>
          <Link href="/cybersecurity">Cybersecurity</Link>
          <Link href="/quantum-computing">Quantum Computing</Link>
          <Link href="/services-catalog">Services Catalog</Link>
          <Link href="/docs">Documentation</Link>
          <Link href="/pricing">Pricing</Link>
          <div className="text-sm mt-2 space-y-1">
            <div>• 120+ Micro SaaS Products</div>
            <div>• 80+ AI Services</div>
            <div>• 80+ IT Solutions</div>
          </div>
        </div>

        {/* Company */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Company</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/about" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>About Us</Link>
            <Link href="/docs" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Documentation</Link>
            <Link href="/pricing" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Pricing</Link>
            <Link href="/faq" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>FAQ</Link>
            <Link href="/contact" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Contact</Link>
          </div>
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
              color: 'white', 
              padding: '10px 16px', 
              borderRadius: 8,
              textAlign: 'center', 
              textDecoration: 'none', 
              fontWeight: 600
            }}>Request Quote</Link>
            <a href="tel:+13024640950" style={{ 
              background: 'rgba(255,255,255,0.1)', 
              color: 'white', 
              padding: '10px 16px', 
              borderRadius: 8,
              textAlign: 'center', 
              textDecoration: 'none', 
              fontWeight: 600
            }}>Call Now</a>
            <a href="mailto:kleber@ziontechgroup.com" style={{ 
              background: 'rgba(255,255,255,0.1)', 
              color: 'white', 
              padding: '10px 16px', 
              borderRadius: 8,
              textAlign: 'center', 
              textDecoration: 'none', 
              fontWeight: 600
            }}>Email Us</a>
          </div>
        </div>
      </div>
      
      <div style={{ 
        borderTop: '1px solid rgba(255,255,255,0.1)', 
        padding: '20px', 
        textAlign: 'center' 
      }}>
        <small style={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
          <Link href="/privacy" style={{ color: '#93c5fd', marginLeft: 8, textDecoration: 'none' }}>Privacy Policy</Link> | 
          <Link href="/terms" style={{ color: '#93c5fd', marginLeft: 8, textDecoration: 'none' }}>Terms of Service</Link>
        </small>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ErrorBoundary>
  );
}