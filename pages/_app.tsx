import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import '../styles/globals.css';

function Header(): any {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <nav className="header-nav" role="navigation" aria-label="Main navigation">
        <Link href="/" className="header-logo" aria-label="Zion Tech Group - Home">
          Zion Tech Group
        </Link>
        
        <div className="header-nav-links" role="menubar">
          <Link href="/" className="header-nav-link" role="menuitem">Home</Link>
          <Link href="/services" className="header-nav-link" role="menuitem">All Services</Link>
          <Link href="/services-catalog" className="header-nav-link" role="menuitem">Catalog</Link>
          <Link href="/pricing" className="header-nav-link" role="menuitem">Pricing</Link>
          <Link href="/contact" className="header-nav-cta" role="menuitem">Contact</Link>
        </div>

        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          <span className="sr-only">Menu</span>
          <svg className="hamburger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>
      
      <div 
        id="mobile-menu"
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        role="menu"
        aria-hidden={!mobileMenuOpen}
      >
        <Link href="/" className="header-nav-link" onClick={closeMobileMenu} role="menuitem">Home</Link>
        <Link href="/services" className="header-nav-link" onClick={closeMobileMenu} role="menuitem">All Services</Link>
        <Link href="/services-catalog" className="header-nav-link" onClick={closeMobileMenu} role="menuitem">Catalog</Link>
        <Link href="/pricing" className="header-nav-link" onClick={closeMobileMenu} role="menuitem">Pricing</Link>
        <Link href="/contact" className="header-nav-cta" onClick={closeMobileMenu} role="menuitem">Contact</Link>
      </div>
    </header>
  );
}

function Footer(): any {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section">
          <div className="footer-logo">Zion Tech Group</div>
          <p>
            Leading provider of innovative micro SaaS products, AI services, and IT solutions. 
            Empowering businesses with cutting-edge technology.
          </p>
          <address className="text-sm space-y-2 not-italic">
            <div>
              <span className="sr-only">Phone:</span>
              <a href="tel:+13024640950" className="text-blue-300 hover:text-blue-200 transition-colors" aria-label="Call us at +1 302 464 0950">
                📞 +1 302 464 0950
              </a>
            </div>
            <div>
              <span className="sr-only">Email:</span>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-300 hover:text-blue-200 transition-colors" aria-label="Email us at kleber@ziontechgroup.com">
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <span className="sr-only">Address:</span>
              📍 364 E Main St STE 1008, Middletown DE 19709
            </div>
          </address>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <nav aria-label="Services navigation">
            <Link href="/services" className="footer-link">All Services</Link>
            <Link href="/services-catalog" className="footer-link">Services Catalog</Link>
            <Link href="/pricing" className="footer-link">Pricing</Link>
          </nav>
          <div className="text-sm mt-2 space-y-1" role="list" aria-label="Service counts">
            <div role="listitem">• 39+ Micro SaaS Products</div>
            <div role="listitem">• 28+ AI Services</div>
            <div role="listitem">• 35+ IT Solutions</div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <nav aria-label="Quick links navigation">
            <Link href="/" className="footer-link">Home</Link>
            <Link href="/contact" className="footer-link">Contact Us</Link>
            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-link">Terms of Service</Link>
            <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              Main Website
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </nav>
        </div>

        {/* Contact CTA */}
        <div className="footer-section">
          <h3>Get Started</h3>
          <p className="text-sm">
            Ready to transform your business with our innovative solutions?
          </p>
          <div className="space-y-2">
            <Link href="/contact" className="footer-cta-button" aria-label="Request a quote">
              Request Quote
            </Link>
            <a href="tel:+13024640950" className="footer-cta-secondary" aria-label="Call us now">
              Call Now
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <small>
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </small>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://ziontechgroup.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
      </Head>
      <ErrorBoundary>
        <PerformanceMonitor />
        <PerformanceOptimizer />
        <Header />
        <main role="main" id="main-content">
          <Component {...pageProps} />
        </main>
        <Footer />
      </ErrorBoundary>
    </>
  );
}
