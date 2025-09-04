import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useState } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
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
        }}>Zion Tech Group        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 flex-wrap items-center">
          <Link href="/" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Home</Link>
          <Link href="/services" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Services</Link>
          <Link href="/services-overview" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Overview</Link>
          <Link href="/services-catalog" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Catalog</Link>
          <Link href="/services-comparison" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Compare</Link>
          <Link href="/enterprise" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Enterprise</Link>
          <Link href="/docs" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Docs</Link>
          <Link href="/pricing" style={{ color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem' }}>Pricing</Link>
          <Link href="/contact" style={{ 
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            color: 'white', padding: '8px 16px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem', fontWeight: 600
          }}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden bg-none border-none text-white text-2xl cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          ☰
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 border-t border-white/10 p-5">
          <div className="flex flex-col gap-3 max-w-7xl mx-auto">
            <Link href="/" className="text-white py-3 text-decoration-none border-b border-white/10 hover:text-blue-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/services" className="text-white py-3 text-decoration-none border-b border-white/10 hover:text-blue-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/services-overview" className="text-white py-3 text-decoration-none border-b border-white/10 hover:text-blue-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Overview</Link>
            <Link href="/services-catalog" className="text-white py-3 text-decoration-none border-b border-white/10 hover:text-blue-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Catalog</Link>
            <Link href="/services-comparison" className="text-white py-3 text-decoration-none border-b border-white/10 hover:text-blue-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Compare</Link>
            <Link href="/enterprise" className="text-white py-3 text-decoration-none border-b border-white/10 hover:text-blue-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Enterprise</Link>
            <Link href="/docs" className="text-white py-3 text-decoration-none border-b border-white/10 hover:text-blue-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Docs</Link>
            <Link href="/pricing" className="text-white py-3 text-decoration-none border-b border-white/10 hover:text-blue-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 text-decoration-none rounded text-center font-semibold mt-2 hover:from-blue-600 hover:to-purple-600 transition-all" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
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

        {/* Services */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Our Services</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/solutions" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Solutions</Link>
            <Link href="/services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>All Services</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Micro SaaS Products</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>AI Services</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>IT Services</Link>
            <Link href="/services-catalog" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Services Catalog</Link>
            <Link href="/pricing" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Pricing</Link>
            <div style={{ opacity: 0.8, fontSize: '0.9rem', marginTop: 8 }}>
              <div>• 150+ Micro SaaS Products</div>
              <div>• 100+ AI Services</div>
              <div>• 100+ IT Solutions</div>
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Solutions</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/solutions" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Digital Transformation</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>AI & Machine Learning</Link>
            <Link href="/cybersecurity" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Cybersecurity</Link>
            <Link href="/cloud-devops" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Cloud & DevOps</Link>
            <Link href="/quantum-computing" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Quantum Computing</Link>
            <Link href="/green-it" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Green IT</Link>
            <Link href="/research-development" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Research & Development</Link>
            <Link href="/request-quote" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Request Quote</Link>
          </div>
        </div>

        {/* Company */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Company</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Home</Link>
            <Link href="/about" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>About Us</Link>
            <Link href="/careers" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Careers</Link>
            <Link href="/partners" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Partners</Link>
            <Link href="/news" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>News</Link>
            <Link href="/blog" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Blog</Link>
            <Link href="/contact" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Contact Us</Link>
            <Link href="/faq" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>FAQ</Link>
            <Link href="/privacy" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Terms of Service</Link>
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
      <PerformanceOptimizer>
        <PerformanceMonitor />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PerformanceOptimizer>
    </ErrorBoundary>
  );
}