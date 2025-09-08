import Link from 'next/link'
import { ReactNode } from 'react'

interface LayoutProps {
	children: ReactNode
	title?: string
}

export default function Layout({ children, title = 'Zion Tech Group' }: LayoutProps) {
	return (
		<div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif', color: '#111827' }}>
			<aside style={{ width: 240, background: '#0f172a', color: '#e5e7eb', padding: '20px 16px' }}>
				<div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Zion Tech Group</div>
				<nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
					<Link href="/" style={{ color: '#93c5fd' }}>Home</Link>
					<Link href="/services" style={{ color: '#93c5fd' }}>Services</Link>
					<Link href="/contact" style={{ color: '#93c5fd' }}>Contact</Link>
				</nav>
				<div style={{ marginTop: 24, fontSize: 12, color: '#9ca3af' }}>
					<strong>Quick links</strong>
					<ul style={{ listStyle: 'none', padding: 0, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
						<li><a href="https://ziontechgroup.com/services#ai-services" style={{ color: '#c7d2fe' }}>AI Services</a></li>
						<li><a href="https://ziontechgroup.com/services#it-services" style={{ color: '#c7d2fe' }}>IT Services</a></li>
						<li><a href="https://ziontechgroup.com/services#micro-saas" style={{ color: '#c7d2fe' }}>Micro SaaS</a></li>
					</ul>
				</div>
			</aside>
			<div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
				<header style={{ background: '#111827', color: '#e5e7eb', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<div style={{ fontWeight: 700 }}>{title}</div>
					<nav style={{ display: 'flex', gap: 16 }}>
						<Link href="/" style={{ color: '#93c5fd' }}>Home</Link>
						<Link href="/services" style={{ color: '#93c5fd' }}>Services</Link>
						<Link href="/contact" style={{ color: '#93c5fd' }}>Contact</Link>
					</nav>
				</header>
				<main style={{ padding: 20, flex: 1, background: '#f9fafb' }}>
					{children}
				</main>
				<footer style={{ background: '#111827', color: '#9ca3af', padding: '16px 20px' }}>
					<div style={{ display: 'flex', gap: 24, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
						<div>© {new Date().getFullYear()} Zion Tech Group</div>
						<div style={{ display: 'flex', gap: 16 }}>
							<a href="tel:+13024640950" style={{ color: '#93c5fd' }}>+1 302 464 0950</a>
							<a href="mailto:kleber@ziontechgroup.com" style={{ color: '#93c5fd' }}>Email</a>
							<a href="https://ziontechgroup.com" style={{ color: '#93c5fd' }}>ziontechgroup.com</a>
						</div>
					</div>
				</footer>
			</div>
		</div>
	)
}
