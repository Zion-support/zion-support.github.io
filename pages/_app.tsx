import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useState } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import '../styles/globals.css';

function Header(): any {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

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
          display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center'
        }} className="hidden md:flex">
          <Link href="/" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>Home</Link>
          
          {/* Services Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              style={{
                background: 'none', border: 'none', color: 'white', padding: '8px 12px',
                borderRadius: 6, opacity: 0.9, cursor: 'pointer', display: 'flex',
                alignItems: 'center', gap: 4, transition: 'all 0.2s ease'
              }}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              Services ▼
            </button>
            {servicesDropdownOpen && (
              <div
                style={{
                  position: 'absolute', top: '100%', left: 0, background: 'rgba(11, 18, 32, 0.98)',
                  backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8, padding: '8px 0', minWidth: 200, zIndex: 1000
                }}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link href="/services" style={{ 
                  display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>All Services</Link>
                <Link href="/micro-saas" style={{ 
                  display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>Micro SaaS Products</Link>
                <Link href="/ai-services" style={{ 
                  display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>AI Services</Link>
                <Link href="/it-services" style={{ 
                  display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>IT Services</Link>
                <Link href="/services-catalog" style={{ 
                  display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>Services Catalog</Link>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              style={{
                background: 'none', border: 'none', color: 'white', padding: '8px 12px',
                borderRadius: 6, opacity: 0.9, cursor: 'pointer', display: 'flex',
                alignItems: 'center', gap: 4, transition: 'all 0.2s ease'
              }}
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              Solutions ▼
            </button>
            {solutionsDropdownOpen && (
              <div
                style={{
                  position: 'absolute', top: '100%', left: 0, background: 'rgba(11, 18, 32, 0.98)',
                  backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8, padding: '8px 0', minWidth: 200, zIndex: 1000
                }}
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
              >
                <Link href="/cloud-devops" style={{ 
                  display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>Cloud & DevOps</Link>
                <Link href="/cybersecurity" style={{ 
                  display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>Cybersecurity</Link>
                <Link href="/quantum-computing" style={{ 
                  display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>Quantum Computing</Link>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              style={{
                background: 'none', border: 'none', color: 'white', padding: '8px 12px',
                borderRadius: 6, opacity: 0.9, cursor: 'pointer', display: 'flex',
                alignItems: 'center', gap: 4, transition: 'all 0.2s ease'
              }}
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              Resources ▼
            </button>
            {resourcesDropdownOpen && (
              <div
                style={{
                  position: 'absolute', top: '100%', left: 0, background: 'rgba(11, 18, 32, 0.98)',
                  backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8, padding: '8px 0', minWidth: 200, zIndex: 1000
                }}
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                onMouseLeave={() => setResourcesDropdownOpen(false)}
              >
                <Link href="/docs" style={{ 
                  display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>Documentation</Link>
                <Link href="/docs/getting-started" style={{ 
                  display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>Getting Started</Link>
                <Link href="/docs/api-overview" style={{ 
                  display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>API Overview</Link>
                <Link href="/faq" style={{ 
                  display: 'block', padding: '8px 16px', color: 'white', textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>FAQ</Link>
              </div>
            )}
          </div>

          <Link href="/blog" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>Blog</Link>
          <Link href="/pricing" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>Pricing</Link>
          <Link href="/about" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>About</Link>
          <Link href="/careers" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>Careers</Link>
          <Link href="/contact" style={{ 
            fontWeight: 600, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
            color: 'white', padding: '8px 16px', borderRadius: 8,
            transition: 'all 0.2s ease', textDecoration: 'none'
          }}>Contact</Link>
        </div>

        {/* Mobile Navigation */}
        <div style={{
          display: 'flex', gap: 4, alignItems: 'center'
        }} className="md:hidden">
          <Link href="/contact" style={{ 
            fontWeight: 600, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
            color: 'white', padding: '6px 12px', borderRadius: 6,
            transition: 'all 0.2s ease', textDecoration: 'none', fontSize: '0.9rem'
          }}>Contact</Link>
          <button 
            style={{
              background: 'none', border: 'none', color: 'white', fontSize: '1.2rem',
              cursor: 'pointer', padding: '6px', borderRadius: 4
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            ☰
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, 
          background: 'rgba(11, 18, 32, 0.98)', backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px'
        }}>
          <Link href="/" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/services" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>All Services</Link>
          <Link href="/micro-saas" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Micro SaaS</Link>
          <Link href="/ai-services" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>AI Services</Link>
          <Link href="/it-services" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>IT Services</Link>
          <Link href="/services-catalog" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Catalog</Link>
          <Link href="/cloud-devops" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Cloud & DevOps</Link>
          <Link href="/cybersecurity" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Cybersecurity</Link>
          <Link href="/quantum-computing" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Quantum Computing</Link>
          <Link href="/docs" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Documentation</Link>
          <Link href="/blog" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link href="/pricing" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link href="/about" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/careers" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Careers</Link>
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
            Empowering businesses with cutting-edge technology and digital transformation.
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
            <Link href="/services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>All Services</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Micro SaaS Products</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>AI Services</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>IT Services</Link>
            <Link href="/services-catalog" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Services Catalog</Link>
            <Link href="/cloud-devops" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Cloud & DevOps</Link>
            <Link href="/cybersecurity" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Cybersecurity</Link>
            <Link href="/quantum-computing" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Quantum Computing</Link>
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
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Cloud Cost Optimization</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>AI Automation</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Digital Transformation</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Process Automation</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Predictive Analytics</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Cybersecurity</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Content Creation</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Customer Support</Link>
          </div>
        </div>

        {/* Resources */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Resources</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/docs" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Documentation</Link>
            <Link href="/docs/getting-started" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Getting Started</Link>
            <Link href="/docs/api-overview" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>API Overview</Link>
            <Link href="/docs/authentication" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Authentication</Link>
            <Link href="/blog" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Blog</Link>
            <Link href="/faq" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>FAQ</Link>
            <Link href="/sitemap" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Sitemap</Link>
            <Link href="/privacy" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Terms of Service</Link>
          </div>
        </div>

        {/* Company */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Company</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Home</Link>
            <Link href="/about" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>About Us</Link>
            <Link href="/careers" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Careers</Link>
            <Link href="/contact" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Contact Us</Link>
            <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Main Website</a>
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
            <a href="mailto:kleber@ziontechgroup.com" style={{ 
              background: 'rgba(255,255,255,0.1)', color: 'white', 
              padding: '10px 16px', borderRadius: 8,
              textAlign: 'center', textDecoration: 'none', fontWeight: 600
            }}>Email Us</a>
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
    <ErrorBoundary>
      <PerformanceMonitor />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ErrorBoundary>
  );
}
