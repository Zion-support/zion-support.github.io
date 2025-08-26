import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
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