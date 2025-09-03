import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useState } from 'react';
import '../styles/globals.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
<<<<<<< HEAD
    <header className="sticky top-0 z-50 bg-gray-900 text-white border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
            Zion Tech Group
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
=======
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: '#0b1220', color: 'white',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      <nav style={{
        maxWidth: 1200, margin: '0 auto', padding: '10px 16px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between', gap: 12
      }}>
        <Link href="/" style={{ fontWeight: 800, letterSpacing: 0.3 }}>Zion Tech Group</Link>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/" style={{ opacity: 0.9 }}>Home</Link>
          <Link href="/services" style={{ opacity: 0.9 }}>Services</Link>
          <Link href="/pricing" style={{ opacity: 0.9 }}>Pricing</Link>
          <Link href="/micro-saas" style={{ opacity: 0.9 }}>Micro SaaS</Link>
          <Link href="/ai-services" style={{ opacity: 0.9 }}>AI Services</Link>
          <Link href="/it-services" style={{ opacity: 0.9 }}>IT Services</Link>
          <Link href="/contact" style={{ fontWeight: 600, background: '#22d3ee', color: '#0b1220', padding: '6px 10px', borderRadius: 8 }}>Contact</Link>
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI services, IT solutions, and Micro SaaS platforms. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📞 +1 302 464 0950</p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
              <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services" className="hover:text-white transition-colors">AI Services</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">IT Services</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Micro SaaS</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
<<<<<<< HEAD
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
=======
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/services" style={{ opacity: 0.9 }}>All Services</Link>
          <Link href="/pricing" style={{ opacity: 0.9 }}>Pricing</Link>
          <Link href="/micro-saas" style={{ opacity: 0.9 }}>Micro SaaS</Link>
          <Link href="/ai-services" style={{ opacity: 0.9 }}>AI Services</Link>
          <Link href="/it-services" style={{ opacity: 0.9 }}>IT Services</Link>
          <Link href="/contact" style={{ opacity: 0.9 }}>Contact</Link>
          <Link href="/privacy" style={{ opacity: 0.9 }}>Privacy Policy</Link>
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
        </div>
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
