import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import SearchBar from '../components/SearchBar';
import '../styles/globals.css';

function Header(): any {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="header-nav">
        <Link href="/" className="header-logo">
          Zion Tech Group
        </Link>
        
        <div className="header-nav-links">
          <Link href="/" className="header-nav-link">Home</Link>
          <div className="header-nav-dropdown">
            <span className="header-nav-link">Services</span>
            <div className="header-nav-dropdown-content">
              <Link href="/services" className="header-nav-dropdown-link">All Services</Link>
              <Link href="/micro-saas" className="header-nav-dropdown-link">Micro SaaS</Link>
              <Link href="/ai-services" className="header-nav-dropdown-link">AI Services</Link>
              <Link href="/it-services" className="header-nav-dropdown-link">IT Services</Link>
              <Link href="/services-catalog" className="header-nav-dropdown-link">Catalog</Link>
            </div>
          </div>
          <div className="header-nav-dropdown">
            <span className="header-nav-link">Solutions</span>
            <div className="header-nav-dropdown-content">
              <Link href="/cloud-devops" className="header-nav-dropdown-link">Cloud DevOps</Link>
              <Link href="/cybersecurity" className="header-nav-dropdown-link">Cybersecurity</Link>
              <Link href="/quantum-computing" className="header-nav-dropdown-link">Quantum Computing</Link>
            </div>
          </div>
          <div className="header-nav-dropdown">
            <span className="header-nav-link">Resources</span>
            <div className="header-nav-dropdown-content">
              <Link href="/docs" className="header-nav-dropdown-link">Documentation</Link>
              <Link href="/docs/getting-started" className="header-nav-dropdown-link">Getting Started</Link>
              <Link href="/docs/api-quick-start" className="header-nav-dropdown-link">API Guide</Link>
              <Link href="/faq" className="header-nav-dropdown-link">FAQ</Link>
            </div>
          </div>
          <Link href="/about" className="header-nav-link">About</Link>
          <Link href="/pricing" className="header-nav-link">Pricing</Link>
          <div className="hidden md:block">
            <SearchBar />
          </div>
          <Link href="/contact" className="header-nav-cta">Contact</Link>
        </div>

        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          ☰
        </button>
      </nav>
      
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="md:hidden mb-4">
          <SearchBar />
        </div>
        <Link href="/" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        
        <div className="mobile-menu-section">
          <h4 className="mobile-menu-section-title">Services</h4>
          <Link href="/services" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>All Services</Link>
          <Link href="/micro-saas" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Micro SaaS</Link>
          <Link href="/ai-services" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>AI Services</Link>
          <Link href="/it-services" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>IT Services</Link>
          <Link href="/services-catalog" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Catalog</Link>
        </div>
        
        <div className="mobile-menu-section">
          <h4 className="mobile-menu-section-title">Solutions</h4>
          <Link href="/cloud-devops" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Cloud DevOps</Link>
          <Link href="/cybersecurity" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Cybersecurity</Link>
          <Link href="/quantum-computing" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Quantum Computing</Link>
        </div>
        
        <div className="mobile-menu-section">
          <h4 className="mobile-menu-section-title">Resources</h4>
          <Link href="/docs" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Documentation</Link>
          <Link href="/docs/getting-started" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Getting Started</Link>
          <Link href="/docs/api-quick-start" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>API Guide</Link>
          <Link href="/faq" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
        </div>
        
        <Link href="/about" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
        <Link href="/pricing" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
        <Link href="/contact" className="header-nav-cta" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
      </div>
    </header>
  );
}

function Footer(): any {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section">
          <div className="footer-logo">Zion Tech Group</div>
          <p>
            Leading provider of innovative micro SaaS products, AI services, and IT solutions. 
            Empowering businesses with cutting-edge technology.
          </p>
          <div className="text-sm space-y-2">
            <div>📞 <a href="tel:+13024640950" className="text-blue-300">+1 302 464 0950</a></div>
            <div>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-blue-300">kleber@ziontechgroup.com</a></div>
            <div>📍 364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <Link href="/services">All Services</Link>
          <Link href="/micro-saas">Micro SaaS Products</Link>
          <Link href="/ai-services">AI Services</Link>
          <Link href="/it-services">IT Services</Link>
          <Link href="/services-catalog">Services Catalog</Link>
          <Link href="/pricing">Pricing</Link>
          <div className="text-sm mt-2 space-y-1">
            <div>• 120+ Micro SaaS Products</div>
            <div>• 80+ AI Services</div>
            <div>• 80+ IT Solutions</div>
          </div>
        </div>

        {/* Solutions */}
        <div className="footer-section">
          <h3>Solutions</h3>
          <Link href="/cloud-devops">Cloud DevOps</Link>
          <Link href="/cybersecurity">Cybersecurity</Link>
          <Link href="/quantum-computing">Quantum Computing</Link>
          <Link href="/docs">Documentation</Link>
          <Link href="/docs/getting-started">Getting Started</Link>
          <Link href="/docs/api-quick-start">API Guide</Link>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer">Main Website</a>
        </div>

        {/* Contact CTA */}
        <div className="footer-section">
          <h3>Get Started</h3>
          <p className="text-sm">
            Ready to transform your business with our innovative solutions?
          </p>
          <div className="space-y-2">
            <Link href="/contact" className="footer-cta-button">Request Quote</Link>
            <a href="tel:+13024640950" className="footer-cta-secondary">Call Now</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <small>
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
          <a href="/privacy">Privacy Policy</a>
        </small>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ErrorBoundary>
  );
}
