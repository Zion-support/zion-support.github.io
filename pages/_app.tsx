import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import '../styles/globals.css';
import Sidebar from '../components/Sidebar';

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
        <div className="hidden md:flex" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Link href="/" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Home</Link>
          <div style={{ position: 'relative' }}>
            <details>
              <summary style={{ listStyle: 'none', cursor: 'pointer', color: 'white', padding: '8px 12px', borderRadius: 6, fontSize: '0.9rem' }}>Solutions</summary>
              <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', color: '#0b1220', borderRadius: 8, padding: 16, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))', gap: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.2)', minWidth: 420 }}>
                <div style={{ display: 'grid', gap: 8 }}>
                  <strong>By Business Type</strong>
                  <Link href="/solutions" style={{ color: '#0b1220', textDecoration: 'none' }}>All Solutions</Link>
                  <Link href="/solutions/enterprise" style={{ color: '#0b1220', textDecoration: 'none' }}>Enterprise</Link>
                </div>
                <div style={{ display: 'grid', gap: 8 }}>
                  <strong>Featured</strong>
                  <Link href="/green-it" style={{ color: '#0b1220', textDecoration: 'none' }}>Green IT</Link>
                  <Link href="/quantum-computing" style={{ color: '#0b1220', textDecoration: 'none' }}>Quantum Computing</Link>
                </div>
              </div>
            </details>
          </div>
          <div style={{ position: 'relative' }}>
            <details>
              <summary style={{ listStyle: 'none', cursor: 'pointer', color: 'white', padding: '8px 12px', borderRadius: 6, fontSize: '0.9rem' }}>Services</summary>
              <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', color: '#0b1220', borderRadius: 8, padding: 16, display: 'grid', gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))', gap: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.2)', minWidth: 640 }}>
                <div style={{ display: 'grid', gap: 8 }}>
                  <strong>AI</strong>
                  <Link href="/ai-services" style={{ color: '#0b1220', textDecoration: 'none' }}>AI Services</Link>
                  <Link href="/services/ai-analytics" style={{ color: '#0b1220', textDecoration: 'none' }}>AI & Analytics</Link>
                  <Link href="/services/nlp-chatbots" style={{ color: '#0b1220', textDecoration: 'none' }}>NLP & Chatbots</Link>
                  <Link href="/services/predictive-analytics" style={{ color: '#0b1220', textDecoration: 'none' }}>Predictive Analytics</Link>
                </div>
                <div style={{ display: 'grid', gap: 8 }}>
                  <strong>IT & Cloud</strong>
                  <Link href="/it-services" style={{ color: '#0b1220', textDecoration: 'none' }}>IT Services</Link>
                  <Link href="/cloud-devops" style={{ color: '#0b1220', textDecoration: 'none' }}>Cloud & DevOps</Link>
                  <Link href="/services/cloud-migration" style={{ color: '#0b1220', textDecoration: 'none' }}>Cloud Migration</Link>
                  <Link href="/services/managed-it" style={{ color: '#0b1220', textDecoration: 'none' }}>Managed IT</Link>
                </div>
                <div style={{ display: 'grid', gap: 8 }}>
                  <strong>Security</strong>
                  <Link href="/cybersecurity" style={{ color: '#0b1220', textDecoration: 'none' }}>Cybersecurity</Link>
                  <Link href="/services/network-security-assessment" style={{ color: '#0b1220', textDecoration: 'none' }}>Security Assessment</Link>
                </div>
              </div>
            </details>
          </div>
          <Link href="/micro-saas" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Micro SaaS</Link>
          <Link href="/marketplace" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Marketplace</Link>
          <Link href="/about" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>About</Link>
          <Link href="/blog" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Blog</Link>
          <Link href="/pricing" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Pricing</Link>
          <Link href="/contact" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: 'white', padding: '8px 16px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem', fontWeight: 600 }}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
                    className="md:hidden"
                    style={{
            background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer'
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
          background: 'rgba(11, 18, 32, 0.98)', 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '20px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 1400, margin: '0 auto' }}>
            <Link href="/" style={{ color: 'white', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/solutions" style={{ color: 'white', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
            <Link href="/services" style={{ color: 'white', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>All Services</Link>
            <Link href="/services-catalog" style={{ color: 'white', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>Catalog</Link>
            <Link href="/micro-saas" style={{ color: 'white', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>Micro SaaS</Link>
            <Link href="/ai-services" style={{ color: 'white', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>AI Services</Link>
            <Link href="/it-services" style={{ color: 'white', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>IT Services</Link>
            <Link href="/about" style={{ color: 'white', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/careers" style={{ color: 'white', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>Careers</Link>
            <Link href="/docs" style={{ color: 'white', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>Docs</Link>
            <Link href="/blog" style={{ color: 'white', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/pricing" style={{ color: 'white', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link href="/contact" style={{ 
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white', padding: '12px 16px', textDecoration: 'none', borderRadius: 6, textAlign: 'center', fontWeight: 600, marginTop: 8
            }} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
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

        {/* Solutions & Services */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Solutions & Services</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/solutions" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>All Solutions</Link>
            <Link href="/solutions/enterprise" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Enterprise Solutions</Link>
            <Link href="/services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>All Services</Link>
            <Link href="/services-catalog" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Services Catalog</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Micro SaaS Products</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>AI Services</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>IT Services</Link>
            <Link href="/cloud-devops" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Cloud DevOps</Link>
            <Link href="/cybersecurity" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Cybersecurity</Link>
            <Link href="/quantum-computing" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Quantum Computing</Link>
          </div>
        </div>

        {/* Company */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Company</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/about" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>About Us</Link>
            <Link href="/careers" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Careers</Link>
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
        <div style={{ marginTop: 12, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <a href="https://www.linkedin.com/company/zion-tech-group" target="_blank" rel="noopener noreferrer" style={{ color: '#93c5fd', textDecoration: 'none' }}>LinkedIn</a>
          <a href="https://x.com/ziontechgroup" target="_blank" rel="noopener noreferrer" style={{ color: '#93c5fd', textDecoration: 'none' }}>X</a>
          <a href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer" style={{ color: '#93c5fd', textDecoration: 'none' }}>GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <Header />
      <Breadcrumbs />
      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: '60vh' }}>
        <div style={{ background: 'white' }}>
          <Sidebar />
        </div>
        <main style={{ padding: 24 }}>
          <Component {...pageProps} />
        </main>
      </div>
      <Footer />
    </ErrorBoundary>
  );
}