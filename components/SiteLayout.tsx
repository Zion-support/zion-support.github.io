import React, { ReactNode } from 'react'

interface SiteLayoutProps {
	children: ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
			<header className="border-b border-white/10 backdrop-blur bg-white/5">
				<div className="container mx-auto px-6 py-4 flex items-center justify-between">
					<a href="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Zion Tech Group</a>
					<nav className="flex items-center gap-4 text-sm">
						<a href="/about" className="hover:text-cyan-300 transition-colors">About</a>
						<a href="/services" className="hover:text-cyan-300 transition-colors">Services</a>
						<a href="/resources" className="hover:text-cyan-300 transition-colors">Resources</a>
						<a href="/contact" className="hover:text-cyan-300 transition-colors">Contact</a>
					</nav>
				</div>
			</header>

			<main className="flex-1">{children}</main>

			<footer className="mt-12 border-t border-white/10 bg-white/5">
				<div className="container mx-auto px-6 py-8 text-sm text-white/70">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						<p>© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
						<div className="flex items-center gap-4">
							<a href="/privacy" className="hover:text-cyan-300 transition-colors">Privacy</a>
							<a href="/terms" className="hover:text-cyan-300 transition-colors">Terms</a>
							<a href="/sitemap" className="hover:text-cyan-300 transition-colors">Sitemap</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}