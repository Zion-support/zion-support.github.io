import Link from 'next/link'
import React from 'react'
export default function SiteHeader() {
	return (
		<header className="w-full sticky top-0 z-50 border-b border-gray-200/20 bg-white/90 backdrop-blur-md">
			<div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2">
					<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold flex items-center justify-center">Z</div>
					<span className="font-semibold text-gray-900">Zion Tech Group</span>
				</Link>
				<nav className="hidden md:flex items-center gap-6 text-sm">
					<div className="group relative">
						<Link href="/services" className="text-gray-700 hover:text-cyan-600">Services</Link>
						<div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-64">
							<ul className="space-y-1 text-gray-700">
								<li><Link href="/services/ai" className="hover:text-cyan-600">AI</Link></li>
								<li><Link href="/services/cloud" className="hover:text-cyan-600">Cloud</Link></li>
								<li><Link href="/services/cybersecurity" className="hover:text-cyan-600">Cybersecurity</Link></li>
								<li><Link href="/services/infrastructure" className="hover:text-cyan-600">Infrastructure</Link></li>
								<li><Link href="/services/transformation" className="hover:text-cyan-600">Transformation</Link></li>
								<li><Link href="/services/consulting" className="hover:text-cyan-600">Consulting</Link></li>
							</ul>
						</div>
					</div>
					<Link href="/solutions" className="text-gray-700 hover:text-cyan-600">Solutions</Link>
					<Link href="/case-studies" className="text-gray-700 hover:text-cyan-600">Case Studies</Link>
					<Link href="/webinars" className="text-gray-700 hover:text-cyan-600">Webinars</Link>
					<Link href="/about" className="text-gray-700 hover:text-cyan-600">About</Link>
					<Link href="/contact" className="inline-flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1.5 text-white font-medium hover:opacity-90">Contact</Link>
				</nav>
			</div>
		</header>
	)
}