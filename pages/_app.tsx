import type { AppProps } from 'next/app';
import Link from 'next/link';

function Header(): any {
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
          backgroundClip: 'text'
        }}>Zion Tech Group</Link>
        
        {/* Desktop Navigation */}
        <div style={{ 
          display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'center',
          '@media (max-width: 1024px)': { display: 'none' }
        }}>
          <Link href="/" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', fontSize: '0.9rem'
          }}>Home</Link>
          
          {/* Services Dropdown */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button style={{
              padding: '8px 12px', borderRadius: 6, opacity: 0.9,
              transition: 'all 0.2s ease', fontSize: '0.9rem',
              background: 'none', border: 'none', color: 'white', cursor: 'pointer'
            }}>
              Services ▼
            </button>
            <div style={{
              position: 'absolute', top: '100%', left: 0, background: 'rgba(11, 18, 32, 0.98)',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '8px 0',
              minWidth: 200, display: 'none', zIndex: 1000
            }}>
              <Link href="/services" style={{ 
                display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                fontSize: '0.85rem', opacity: 0.9
              }}>All Services</Link>
              <Link href="/micro-saas" style={{ 
                display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                fontSize: '0.85rem', opacity: 0.9
              }}>Micro SaaS (120+ Products)</Link>
              <Link href="/ai-services" style={{ 
                display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                fontSize: '0.85rem', opacity: 0.9
              }}>AI Services (80+ Solutions)</Link>
              <Link href="/it-services" style={{ 
                display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                fontSize: '0.85rem', opacity: 0.9
              }}>IT Services (80+ Solutions)</Link>
              <Link href="/services-catalog" style={{ 
                display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                fontSize: '0.85rem', opacity: 0.9
              }}>Services Catalog</Link>
            </div>
          </div>
          
          <Link href="/pricing" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', fontSize: '0.9rem'
          }}>Pricing</Link>
          <Link href="/about" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', fontSize: '0.9rem'
          }}>About</Link>
          <Link href="/faq" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', fontSize: '0.9rem'
          }}>FAQ</Link>
          <Link href="/contact" style={{ 
            fontWeight: 600, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
            color: 'white', padding: '8px 16px', borderRadius: 8,
            transition: 'all 0.2s ease', fontSize: '0.9rem'
          }}>Get Quote</Link>
        </div>

        {/* Tablet Navigation */}
        <div style={{ 
          display: 'none', gap: 4, alignItems: 'center',
          '@media (max-width: 1024px) and (min-width: 769px)': { display: 'flex' }
        }}>
          <Link href="/services" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', fontSize: '0.85rem'
          }}>Services</Link>
          <Link href="/pricing" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', fontSize: '0.85rem'
          }}>Pricing</Link>
          <Link href="/contact" style={{ 
            fontWeight: 600, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
            color: 'white', padding: '8px 12px', borderRadius: 8,
            transition: 'all 0.2s ease', fontSize: '0.85rem'
          }}>Contact</Link>
        </div>

        {/* Mobile menu button */}
        <button 
          id="mobile-menu-button"
          style={{
            display: 'none',
            '@media (max-width: 768px)': { display: 'block' },
            background: 'none', border: 'none', color: 'white', fontSize: '1.5rem',
            cursor: 'pointer', padding: '8px'
          }}
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            if (menu) {
              menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            }
          }}
        >
          ☰
        </button>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div 
        id="mobile-menu"
        style={{
          display: 'none',
          background: 'rgba(11, 18, 32, 0.98)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '20px',
          '@media (min-width: 769px)': { display: 'none !important' }
        }}
      >
        <div style={{ display: 'grid', gap: 16 }}>
          <Link href="/" style={{ 
            color: 'white', textDecoration: 'none', padding: '12px 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>Home</Link>
          <Link href="/services" style={{ 
            color: 'white', textDecoration: 'none', padding: '12px 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>All Services</Link>
          <Link href="/micro-saas" style={{ 
            color: 'white', textDecoration: 'none', padding: '12px 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>Micro SaaS (140+ Products)</Link>
          <Link href="/ai-services" style={{ 
            color: 'white', textDecoration: 'none', padding: '12px 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>AI Services (95+ Solutions)</Link>
          <Link href="/it-services" style={{ 
            color: 'white', textDecoration: 'none', padding: '12px 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>IT Services (95+ Solutions)</Link>
          <Link href="/services-catalog" style={{ 
            color: 'white', textDecoration: 'none', padding: '12px 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>Services Catalog</Link>
          <Link href="/pricing" style={{ 
            color: 'white', textDecoration: 'none', padding: '12px 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>Pricing</Link>
          <Link href="/about" style={{ 
            color: 'white', textDecoration: 'none', padding: '12px 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>About</Link>
          <Link href="/faq" style={{ 
            color: 'white', textDecoration: 'none', padding: '12px 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>FAQ</Link>
          <Link href="/contact" style={{ 
            color: 'white', textDecoration: 'none', padding: '12px 0',
            fontWeight: 600, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            borderRadius: 8, textAlign: 'center', marginTop: 8
          }}>Get Quote</Link>
        </div>
      </div>
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
          </div>
        </div>

        {/* Services */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Our Services</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/services" style={{ opacity: 0.8, textDecoration: 'none' }}>All Services</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none' }}>Micro SaaS Products</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none' }}>AI Services</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none' }}>IT Services</Link>
            <Link href="/services-catalog" style={{ opacity: 0.8, textDecoration: 'none' }}>Services Catalog</Link>
            <Link href="/pricing" style={{ opacity: 0.8, textDecoration: 'none' }}>Pricing</Link>
            <div style={{ opacity: 0.8, fontSize: '0.9rem', marginTop: 8 }}>
              <div>• 140+ Micro SaaS Products</div>
              <div>• 95+ AI Services</div>
              <div>• 95+ IT Solutions</div>
            </div>
          </div>
        </div>

        {/* Technology Solutions */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Technology Solutions</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>Cloud Computing</div>
            <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>AI & Machine Learning</div>
            <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>Cybersecurity</div>
            <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>Blockchain & Web3</div>
            <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>IoT & Edge Computing</div>
            <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>Quantum Computing</div>
            <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>5G & Networking</div>
            <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>Data Analytics</div>
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Quick Links</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/" style={{ opacity: 0.8, textDecoration: 'none' }}>Home</Link>
            <Link href="/about" style={{ opacity: 0.8, textDecoration: 'none' }}>About Us</Link>
            <Link href="/contact" style={{ opacity: 0.8, textDecoration: 'none' }}>Contact Us</Link>
            <Link href="/faq" style={{ opacity: 0.8, textDecoration: 'none' }}>FAQ</Link>
            <Link href="/privacy" style={{ opacity: 0.8, textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ opacity: 0.8, textDecoration: 'none' }}>Terms of Service</Link>
            <a href="https://ziontechgroup.com" style={{ opacity: 0.8, textDecoration: 'none' }}>Main Website</a>
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
          </div>
        </div>
      </div>
      
      <div style={{ 
        borderTop: '1px solid rgba(255,255,255,0.1)', 
        padding: '20px', textAlign: 'center' 
      }}>
        <small style={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
          <a href="/privacy" style={{ color: '#93c5fd', marginLeft: 8 }}>Privacy Policy</a>
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
