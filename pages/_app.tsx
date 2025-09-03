import type { AppProps } from 'next/app';
import Link from 'next/link';

function Header() {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: '#0b1220', color: 'white',
      borderBottom: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)'
    }}>
      <nav style={{
        maxWidth: 1200, margin: '0 auto', padding: '12px 16px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between', gap: 16
      }}>
        <Link href="/" style={{ 
          fontWeight: 800, letterSpacing: 0.3, fontSize: '1.25rem',
          textDecoration: 'none', color: 'white'
        }}>
          Zion Tech Group
        </Link>
        <div style={{ 
          display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center',
          '@media (max-width: 768px)': { display: 'none' }
        }}>
          <Link href="/" style={{ 
            opacity: 0.9, padding: '8px 12px', borderRadius: 6, 
            textDecoration: 'none', color: 'white', transition: 'all 0.2s',
            ':hover': { opacity: 1, background: 'rgba(255,255,255,0.1)' }
          }}>
            Home
          </Link>
          <Link href="/services" style={{ 
            opacity: 0.9, padding: '8px 12px', borderRadius: 6,
            textDecoration: 'none', color: 'white', transition: 'all 0.2s',
            ':hover': { opacity: 1, background: 'rgba(255,255,255,0.1)' }
          }}>
            Services
          </Link>
          <Link href="/services-catalog" style={{ 
            opacity: 0.9, padding: '8px 12px', borderRadius: 6,
            textDecoration: 'none', color: 'white', transition: 'all 0.2s',
            ':hover': { opacity: 1, background: 'rgba(255,255,255,0.1)' }
          }}>
            Catalog
          </Link>
          <Link href="/pricing" style={{ 
            opacity: 0.9, padding: '8px 12px', borderRadius: 6,
            textDecoration: 'none', color: 'white', transition: 'all 0.2s',
            ':hover': { opacity: 1, background: 'rgba(255,255,255,0.1)' }
          }}>
            Pricing
          </Link>
          <Link href="/contact" style={{ 
            fontWeight: 600, background: '#22d3ee', color: '#0b1220', 
            padding: '8px 16px', borderRadius: 8, textDecoration: 'none',
            transition: 'all 0.2s', ':hover': { background: '#06b6d4' }
          }}>
            Contact
          </Link>
        </div>
        {/* Mobile menu button */}
        <button style={{
          display: 'none', background: 'none', border: 'none', color: 'white',
          fontSize: '1.5rem', cursor: 'pointer', padding: '8px',
          '@media (max-width: 768px)': { display: 'block' }
        }}>
          ☰
        </button>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ 
      background: '#0b1220', color: 'white', marginTop: 60, 
      borderTop: '1px solid rgba(255,255,255,0.1)' 
    }}>
      <div style={{ 
        maxWidth: 1200, margin: '0 auto', padding: '40px 16px',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 32, alignItems: 'start'
      }}>
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 8 }}>
            Zion Tech Group
          </h3>
          <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
            Leading provider of AI services, Micro SaaS solutions, and IT consulting. 
            Transforming businesses with innovative technology solutions.
          </p>
        </div>
        
        <div style={{ display: 'grid', gap: 12 }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Services</h4>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/services" style={{ 
              opacity: 0.8, textDecoration: 'none', color: 'white',
              ':hover': { opacity: 1, color: '#22d3ee' }
            }}>
              All Services
            </Link>
            <Link href="/services-catalog" style={{ 
              opacity: 0.8, textDecoration: 'none', color: 'white',
              ':hover': { opacity: 1, color: '#22d3ee' }
            }}>
              Services Catalog
            </Link>
            <Link href="/pricing" style={{ 
              opacity: 0.8, textDecoration: 'none', color: 'white',
              ':hover': { opacity: 1, color: '#22d3ee' }
            }}>
              Pricing
            </Link>
          </div>
        </div>
        
        <div style={{ display: 'grid', gap: 12 }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Contact Info</h4>
          <div style={{ display: 'grid', gap: 8, fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>📱</span>
              <a href="tel:+13024640950" style={{ 
                color: '#22d3ee', textDecoration: 'none',
                ':hover': { textDecoration: 'underline' }
              }}>
                +1 302 464 0950
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>✉️</span>
              <a href="mailto:kleber@ziontechgroup.com" style={{ 
                color: '#22d3ee', textDecoration: 'none',
                ':hover': { textDecoration: 'underline' }
              }}>
                kleber@ziontechgroup.com
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <span>📍</span>
              <span style={{ opacity: 0.8 }}>
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ 
        borderTop: '1px solid rgba(255,255,255,0.1)', 
        marginTop: 32, padding: '20px 16px',
        textAlign: 'center', opacity: 0.7
      }}>
        <small>
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
          <Link href="/privacy" style={{ color: 'white', textDecoration: 'none', marginLeft: 8 }}>
            Privacy Policy
          </Link>
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
