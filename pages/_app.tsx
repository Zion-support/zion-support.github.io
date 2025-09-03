import type { AppProps } from 'next/app';
import Link from 'next/link';

function Header(): any {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: '#0b1220', color: 'white',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    }}>
      <nav style={{
        maxWidth: 1200, margin: '0 auto', padding: '10px 16px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between', gap: 12}}>
        <Link href="/" style={{ fontWeight: 800, letterSpacing: 0.3 }}>Zion Tech Group</Link>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', }}>
          <Link href="/" style={{ opacity: 0.9 }}>Home</Link>
          <Link href="/about" style={{ opacity: 0.9 }}>About</Link>
          <Link href="/services" style={{ opacity: 0.9 }}>Services</Link>
          <Link href="/micro-saas" style={{ opacity: 0.9 }}>Micro SaaS</Link>
          <Link href="/ai-services" style={{ opacity: 0.9 }}>AI Services</Link>
          <Link href="/it-services" style={{ opacity: 0.9 }}>IT Services</Link>
          <Link href="/faq" style={{ opacity: 0.9 }}>FAQ</Link>
          <Link href="/contact" style={{ fontWeight: 600, background: '#22d3ee', color: '#0b1220', padding: '6px 10px', borderRadius: 8 }}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}

function Footer(): any {
  return (
    <footer style={{ background: '#0b1220', color: 'white', marginTop: 40, borderTop: '1px solid rgba(255,255,255,0.1)', }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px', display: 'grid', gap: 16 }}>
        <div style={{ display: 'grid', gap: 8 }}>
          <strong>Zion Tech Group</strong>
          <span>Mobile: +1 302 464 0950</span>
          <span>Email: <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#93c5fd', }}>kleber@ziontechgroup.com</a></span>
          <span>Address: 364 E Main St STE 1008 Middletown DE 19709</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: 8 }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Link href="/about" style={{ opacity: 0.9, fontSize: '14px' }}>About Us</Link>
              <Link href="/contact" style={{ opacity: 0.9, fontSize: '14px' }}>Contact</Link>
              <Link href="/faq" style={{ opacity: 0.9, fontSize: '14px' }}>FAQ</Link>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: 8 }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Link href="/services" style={{ opacity: 0.9, fontSize: '14px' }}>All Services</Link>
              <Link href="/micro-saas" style={{ opacity: 0.9, fontSize: '14px' }}>Micro SaaS</Link>
              <Link href="/ai-services" style={{ opacity: 0.9, fontSize: '14px' }}>AI Services</Link>
              <Link href="/it-services" style={{ opacity: 0.9, fontSize: '14px' }}>IT Services</Link>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: 8 }}>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Link href="/privacy" style={{ opacity: 0.9, fontSize: '14px' }}>Privacy Policy</Link>
              <Link href="/terms" style={{ opacity: 0.9, fontSize: '14px' }}>Terms of Service</Link>
            </div>
          </div>
        </div>
        <small style={{ opacity: 0.7 }}>© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</small>
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
