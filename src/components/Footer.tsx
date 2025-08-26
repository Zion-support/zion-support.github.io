import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className="border-t border-white/10 bg-black/20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm text-slate-300">
				<div>© {year} Zion Tech Group</div>
				<nav className="flex items-center gap-4">
					<Link to="/privacy" className="hover:text-cyan-300">Privacy</Link>
					<Link to="/terms" className="hover:text-cyan-300">Terms</Link>
					<Link to="/sitemap" className="hover:text-cyan-300">Sitemap</Link>
				</nav>
			</div>
		</footer>
	)
}
