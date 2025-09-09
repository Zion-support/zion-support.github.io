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
        
        {/* Desktop Navigation */}
        <div style={{ 
          display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'center',
          '@media (max-width: 768px)': { display: 'none' } as any
        }}>
          <Link href="/" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Home</Link>
          <Link href="/services" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>All Services</Link>
          <Link href="/micro-saas" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Micro SaaS</Link>
          <Link href="/ai-services" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>AI Services</Link>
          <Link href="/it-services" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>IT Services</Link>
          <Link href="/cloud-devops" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Cloud DevOps</Link>
          <Link href="/cybersecurity" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Cybersecurity</Link>
          <Link href="/quantum-computing" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Quantum</Link>
          <Link href="/pricing" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Pricing</Link>
          <Link href="/contact" style={{ 
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            color: 'white', padding: '8px 16px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem', fontWeight: 600
          }}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          style={{ 
            background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer',
            display: 'none',
            '@media (max-width: 768px)': { display: 'block' } as any
          }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          ☰
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, background: 'rgba(11, 18, 32, 0.98)',
          backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '20px', display: 'flex', flexDirection: 'column', gap: 12
        }}>
          <Link href="/" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Home</Link>
          <Link href="/services" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>All Services</Link>
          <Link href="/micro-saas" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Micro SaaS</Link>
          <Link href="/ai-services" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>AI Services</Link>
          <Link href="/it-services" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>IT Services</Link>
          <Link href="/cloud-devops" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Cloud DevOps</Link>
          <Link href="/cybersecurity" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Cybersecurity</Link>
          <Link href="/quantum-computing" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Quantum</Link>
          <Link href="/pricing" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Pricing</Link>
          <Link href="/contact" style={{ 
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            color: 'white', padding: '8px 16px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem', fontWeight: 600
          }}>Contact</Link>
        </div>
      )}
    </header>
  );
}

function Footer(): any {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1e293b, #334155)', color: 'white',
      padding: '40px 20px', marginTop: 'auto'
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ marginBottom: 20 }}>
          <h3 style={{ 
            fontSize: '1.5rem', fontWeight: 700, marginBottom: 10,
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Zion Tech Group</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            Innovative IT Solutions & AI Services
          </p>
        </div>
        
        <div style={{ 
          display: 'flex', justifyContent: 'center', gap: 30, flexWrap: 'wrap',
          marginBottom: 20
        }}>
          <Link href="/services" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Services</Link>
          <Link href="/pricing" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Pricing</Link>
          <Link href="/contact" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</Link>
          <Link href="/privacy" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy</Link>
          <Link href="/terms" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Terms</Link>
        </div>
        
        <div style={{ 
          borderTop: '1px solid #334155', paddingTop: 20, color: '#64748b', fontSize: '0.8rem'
        }}>
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}