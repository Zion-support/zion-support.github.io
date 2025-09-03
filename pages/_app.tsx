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
        
        {/* Desktop Navigation */}
        <div style={{ 
          display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center',
          '@media (max-width: 768px)': { display: 'none' }
        }}>
          {navigationItems.map((item) => (
            <div key={item.href} style={{ position: 'relative' }}>
              <Link href={item.href} style={{ 
                padding: '8px 12px', borderRadius: 6, opacity: 0.9,
                transition: 'all 0.2s ease', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: 4
              }}>
                {item.label}
                {item.submenu && <span style={{ fontSize: '0.8rem' }}>▼</span>}
              </Link>
              {item.submenu && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0, 
                  background: 'rgba(11, 18, 32, 0.98)', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8, padding: '8px 0', minWidth: 200,
                  display: 'none', zIndex: 1000
                }}>
                  {item.submenu.map((subItem) => (
                    <Link key={subItem.href} href={subItem.href} style={{
                      display: 'block', padding: '8px 16px', 
                      textDecoration: 'none', opacity: 0.9,
                      transition: 'all 0.2s ease'
                    }}>
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
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

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div style={{
          display: 'block',
          '@media (min-width: 769px)': { display: 'none' },
          background: 'rgba(11, 18, 32, 0.98)', 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '16px 20px'
        }}>
          {navigationItems.map((item) => (
            <div key={item.href}>
              <Link href={item.href} style={{
                display: 'block', padding: '12px 0', 
                textDecoration: 'none', opacity: 0.9,
                borderBottom: '1px solid rgba(255,255,255,0.1)'
              }}>
                {item.label}
              </Link>
              {item.submenu && (
                <div style={{ paddingLeft: '16px' }}>
                  {item.submenu.map((subItem) => (
                    <Link key={subItem.href} href={subItem.href} style={{
                      display: 'block', padding: '8px 0', 
                      textDecoration: 'none', opacity: 0.7,
                      fontSize: '0.9rem'
                    }}>
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
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
            Empowering businesses with cutting-edge technology.
          </p>
          <div style={{ display: 'grid', gap: 6, fontSize: '0.9rem' }}>
            <div>📞 <a href="tel:+13024640950" style={{ color: '#93c5fd' }}>+1 302 464 0950</a></div>
            <div>✉️ <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#93c5fd' }}>kleber@ziontechgroup.com</a></div>
            <div>📍 364 E Main St STE 1008, Middletown DE 19709</div>
            <div>🌐 <a href="https://ziontechgroup.com" style={{ color: '#93c5fd' }}>ziontechgroup.com</a></div>
          </div>
        </div>

        {/* Services */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Services</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/services" style={{ opacity: 0.8, textDecoration: 'none' }}>All Services</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none' }}>Micro SaaS Products</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none' }}>AI Services</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none' }}>IT Services</Link>
            <Link href="/services-catalog" style={{ opacity: 0.8, textDecoration: 'none' }}>Services Catalog</Link>
            <Link href="/pricing" style={{ opacity: 0.8, textDecoration: 'none' }}>Pricing</Link>
          </div>
        </div>

        {/* Company */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Company</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/" style={{ opacity: 0.8, textDecoration: 'none' }}>Home</Link>
            <Link href="/about" style={{ opacity: 0.8, textDecoration: 'none' }}>About Us</Link>
            <Link href="/contact" style={{ opacity: 0.8, textDecoration: 'none' }}>Contact Us</Link>
            <Link href="/faq" style={{ opacity: 0.8, textDecoration: 'none' }}>FAQ</Link>
            <div style={{ opacity: 0.8, fontSize: '0.9rem', marginTop: 8 }}>
              <div>• 60+ Micro SaaS Products</div>
              <div>• 40+ AI Services</div>
              <div>• 40+ IT Solutions</div>
            </div>
          </div>
        </div>

        {/* Legal & Support */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Legal & Support</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/privacy" style={{ opacity: 0.8, textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ opacity: 0.8, textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="/faq" style={{ opacity: 0.8, textDecoration: 'none' }}>Support</Link>
            <a href="mailto:kleber@ziontechgroup.com" style={{ opacity: 0.8, textDecoration: 'none' }}>Support Email</a>
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
          <Link href="/privacy" style={{ color: '#93c5fd', marginLeft: 8, textDecoration: 'none' }}>Privacy Policy</Link> | 
          <Link href="/terms" style={{ color: '#93c5fd', marginLeft: 8, textDecoration: 'none' }}>Terms of Service</Link>
        </small>
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
