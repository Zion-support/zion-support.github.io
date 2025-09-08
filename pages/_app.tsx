import type { AppProps } from 'next/app';
import Link from 'next/link';

function Header() {
  return (
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
          <Link href="/services/micro-saas" style={{ opacity: 0.9 }}>Micro SaaS</Link>
          <Link href="/services/ai-services" style={{ opacity: 0.9 }}>AI Services</Link>
          <Link href="/services/it-services" style={{ opacity: 0.9 }}>IT Services</Link>
          <Link href="/about" style={{ opacity: 0.9 }}>About</Link>
          <Link href="/pricing" style={{ opacity: 0.9 }}>Pricing</Link>
          <Link href="/contact" style={{ fontWeight: 600, background: '#22d3ee', color: '#0b1220', padding: '6px 10px', borderRadius: 8 }}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#0b1220', color: 'white', marginTop: 40, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px', display: 'grid', gap: 16 }}>
        <div style={{ display: 'grid', gap: 8 }}>
          <strong>Zion Tech Group</strong>
          <span>Mobile: +1 302 464 0950</span>
          <span>Email: <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#93c5fd' }}>kleber@ziontechgroup.com</a></span>
          <span>Address: 364 E Main St STE 1008 Middletown DE 19709</span>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/services" style={{ opacity: 0.9 }}>All Services</Link>
          <Link href="/services/micro-saas" style={{ opacity: 0.9 }}>Micro SaaS</Link>
          <Link href="/services/ai-services" style={{ opacity: 0.9 }}>AI Services</Link>
          <Link href="/services/it-services" style={{ opacity: 0.9 }}>IT Services</Link>
          <Link href="/about" style={{ opacity: 0.9 }}>About</Link>
          <Link href="/pricing" style={{ opacity: 0.9 }}>Pricing</Link>
          <Link href="/contact" style={{ opacity: 0.9 }}>Contact</Link>
        </div>
        <small style={{ opacity: 0.7 }}>© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
	const renderedRef = useRef(false);
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#111827" />
				<link rel="canonical" href={canonicalUrl} />
				<meta name="robots" content="index,follow" />
				<meta property="og:site_name" content="Zion Tech Group" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@ZionTechGroup" />
			</Head>
			<header style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 20px',borderBottom:'1px solid #e5e7eb',position:'sticky',top:0,background:'#fff',zIndex:50}}>
				<div style={{fontWeight:700}}>
					<Link href="/" style={{textDecoration:'none',color:'#111827'}}>Zion Tech Group</Link>
				</div>
				<nav style={{display:'flex',gap:16}} aria-label="Primary">
					<Link href="/services" style={{color:'#2563eb'}}>Services</Link>
					<Link href="/about" style={{color:'#2563eb'}}>About</Link>
					<Link href="/careers" style={{color:'#2563eb'}}>Careers</Link>
					<Link href="/contact" style={{color:'#2563eb'}}>Contact</Link>
				</nav>
			</header>
			<main id="main">
				<Component {...pageProps} />
			</main>
			<footer style={{padding:'20px',borderTop:'1px solid #e5e7eb',marginTop:24,color:'#6b7280'}}>
				<div style={{display:'flex',justifyContent:'space-between',gap:16,flexWrap:'wrap'}}>
					<div>&copy; {new Date().getFullYear()} Zion Tech Group</div>
					<nav aria-label="Footer" style={{display:'flex',gap:12}}>
						<Link href="/privacy" style={{color:'#6b7280'}}>Privacy</Link>
						<Link href="/terms" style={{color:'#6b7280'}}>Terms</Link>
						<Link href="/contact" style={{color:'#6b7280'}}>Contact</Link>
					</nav>
				</div>
			</footer>
		</>
	)
}
