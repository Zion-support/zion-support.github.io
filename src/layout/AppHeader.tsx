import React from 'react'
import { Link } from 'react-router-dom'

export function AppHeader() {
	return (
		<header className="bg-white/5 backdrop-blur border-b border-white/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				<Link to="/" className="text-2xl font-bold text-cyan-300">Zion Tech Group</Link>
				<nav className="flex items-center gap-6 text-sm text-slate-200">
					<Link to="/about" className="hover:text-cyan-300">About</Link>
					<Link to="/blog" className="hover:text-cyan-300">Blog</Link>
					<Link to="/contact" className="hover:text-cyan-300">Contact</Link>
				</nav>
			</div>
		</header>
	)
}
