import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

// Add CSS for dropdown functionality
const dropdownStyles = `
  .services-dropdown:hover {
    display: block !important;
  }
  .services-dropdown-parent:hover .services-dropdown {
    display: block !important;
  }
  .services-dropdown-parent {
    position: relative;
  }
  @media (max-width: 768px) {
    .services-dropdown {
      position: static !important;
      display: none !important;
      background: rgba(11, 18, 32, 0.95) !important;
      border: none !important;
      border-radius: 0 !important;
      padding: 8px 0 !important;
      margin-top: 8px !important;
    }
  }
`;

function Header(): any {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="header">
      <nav className="header-nav">
        <Link href="/" className="header-logo" onClick={closeMobileMenu}>
          Zion Tech Group
        </Link>
        
        <div className="header-nav-links">
          <Link href="/" className="header-nav-link">Home</Link>
          
          {/* Services Dropdown */}
          <div className="dropdown-container">
            <button 
              className="header-nav-link dropdown-trigger"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            >
              Services ▼
            </button>
            <div className={`dropdown-menu ${servicesDropdownOpen ? 'open' : ''}`}>
              <Link href="/services" className="dropdown-item">All Services</Link>
              <Link href="/services-catalog" className="dropdown-item">Services Catalog</Link>
              <div className="dropdown-divider"></div>
              <Link href="/micro-saas" className="dropdown-item">Micro SaaS Products</Link>
              <Link href="/ai-services" className="dropdown-item">AI Services</Link>
              <Link href="/it-services" className="dropdown-item">IT Services</Link>
            </div>
          </div>

          <Link href="/about" className="header-nav-link">About</Link>
          <Link href="/blog" className="header-nav-link">Blog</Link>
          <Link href="/pricing" className="header-nav-link">Pricing</Link>
          <Link href="/faq" className="header-nav-link">FAQ</Link>
          <Link href="/contact" className="header-nav-cta">Contact</Link>
        </div>

        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </nav>
      
      <div 
        id="mobile-menu"
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu-content">
          <Link href="/" className="header-nav-link" onClick={closeMobileMenu}>Home</Link>
          <Link href="/services" className="header-nav-link" onClick={closeMobileMenu}>All Services</Link>
          <Link href="/services-catalog" className="header-nav-link" onClick={closeMobileMenu}>Catalog</Link>
          <Link href="/pricing" className="header-nav-link" onClick={closeMobileMenu}>Pricing</Link>
          <Link href="/contact" className="header-nav-cta" onClick={closeMobileMenu}>Contact</Link>
        </div>
      </div>
    </header>
    </>
  );
}

function Footer(): any {
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
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <a href="tel:+13024640950" className="contact-link">+1 302 464 0950</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:kleber@ziontechgroup.com" className="contact-link">kleber@ziontechgroup.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <div className="footer-links">
            <Link href="/services" className="footer-link">All Services</Link>
            <Link href="/services-catalog" className="footer-link">Services Catalog</Link>
            <Link href="/micro-saas" className="footer-link">Micro SaaS Products</Link>
            <Link href="/ai-services" className="footer-link">AI Services</Link>
            <Link href="/it-services" className="footer-link">IT Services</Link>
            <Link href="/pricing" className="footer-link">Pricing</Link>
          </div>
          <div className="service-stats">
            <div className="stat-item">• 120+ Micro SaaS Products</div>
            <div className="stat-item">• 80+ AI Services</div>
            <div className="stat-item">• 80+ IT Solutions</div>
          </div>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h3>Company</h3>
          <div className="footer-links">
            <Link href="/" className="footer-link">Home</Link>
            <Link href="/about" className="footer-link">About Us</Link>
            <Link href="/blog" className="footer-link">Blog</Link>
            <Link href="/contact" className="footer-link">Contact Us</Link>
            <Link href="/faq" className="footer-link">FAQ</Link>
            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-link">Terms of Service</Link>
          </div>
        </div>

        {/* Get Started */}
        <div className="footer-section">
          <h3>Get Started</h3>
          <p className="footer-description">
            Ready to transform your business with our innovative solutions? 
            Contact us today for a free consultation.
          </p>
          <div className="footer-cta">
            <Link href="/contact" className="footer-cta-button">Request Quote</Link>
            <a href="tel:+13024640950" className="footer-cta-secondary">Call Now</a>
          </div>
          <div className="social-links">
            <a href="https://ziontechgroup.com" className="social-link" target="_blank" rel="noopener noreferrer">
              🌐 Main Website
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <small>
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </small>
          <div className="footer-bottom-links">
            <Link href="/privacy" className="footer-bottom-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-bottom-link">Terms of Service</Link>
            <a href="https://ziontechgroup.com" className="footer-bottom-link">Main Website</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Register service worker
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GoogleAnalytics />
      <ErrorBoundary>
        <PerformanceMonitor />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ErrorBoundary>
    </>
  );
};