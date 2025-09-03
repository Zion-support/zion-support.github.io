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
          <Link href="/services" style={{ opacity: 0.9 }}>Services</Link>
          <a href="https://ziontechgroup.com/micro-saas" style={{ opacity: 0.9 }}>Micro SaaS</a>
          <a href="https://ziontechgroup.com/ai-services" style={{ opacity: 0.9 }}>AI Services</a>
          <a href="https://ziontechgroup.com/it-services" style={{ opacity: 0.9 }}>IT Services</a>
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
          <span>Mobile: +1 302 464 0950</span>,
          <span>Email: <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#93c5fd', }}>kleber@ziontechgroup.com</a></span>
          <span>Address: 364 E Main St STE 1008 Middletown DE 19709</span>,
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', }}>
          <a href="https://ziontechgroup.com/services" style={{ opacity: 0.9 }}>All Services</a>
          <a href="https://ziontechgroup.com/micro-saas" style={{ opacity: 0.9 }}>Micro SaaS</a>
          <a href="https://ziontechgroup.com/ai-services" style={{ opacity: 0.9 }}>AI Services</a>
          <a href="https://ziontechgroup.com/it-services" style={{ opacity: 0.9 }}>IT Services</a>
          <a href="https://ziontechgroup.com/contact" style={{ opacity: 0.9 }}>Contact</a>
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
