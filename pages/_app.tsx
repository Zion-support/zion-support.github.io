import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import ThemeToggle from '../components/ThemeToggle';
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-slate-900/90 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
              Home
            </Link>
            <Link href="/services" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
              All Services
            </Link>
            <Link href="/micro-saas" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
              Micro SaaS
            </Link>
            <Link href="/ai-services" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
              AI Services
            </Link>
            <Link href="/it-services" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
              IT Services
            </Link>
            <Link href="/services-catalog" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
              Catalog
            </Link>
            <Link href="/pricing" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
              About
            </Link>
            <div className="ml-4 flex items-center space-x-2">
              <ThemeToggle />
              <Link href="/contact" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Link href="/contact" className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
              Contact
            </Link>
            <button 
              className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-md border-t border-gray-700 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
                All Services
              </Link>
              <Link href="/micro-saas" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Micro SaaS
              </Link>
              <Link href="/ai-services" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
                AI Services
              </Link>
              <Link href="/it-services" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
                IT Services
              </Link>
              <Link href="/services-catalog" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Catalog
              </Link>
              <Link href="/pricing" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
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

        {/* Company */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Company</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Home</Link>
            <Link href="/about" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>About Us</Link>
            <Link href="/contact" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Contact Us</Link>
            <Link href="/faq" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>FAQ</Link>
            <Link href="/privacy" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Terms of Service</Link>
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
      <main className="pt-16">
        <Component {...pageProps} />
      </main>
      <Footer />
    </ErrorBoundary>
  );
}
