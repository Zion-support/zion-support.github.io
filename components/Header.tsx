import React from 'react'

export default function Header() {
	return (
		<header className="w-full bg-white shadow-sm">
			<div className="container mx-auto px-4 h-16 flex items-center justify-between">
				<a href="/" className="text-2xl font-bold">Zion Tech Group</a>
				<nav className="flex items-center gap-6">
					<a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
					<a href="/ai-services" className="text-gray-700 hover:text-blue-600">AI Services</a>
					<a href="/blog" className="text-gray-700 hover:text-blue-600">Blog</a>
					<a href="/contact" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Contact</a>
				</nav>
			</div>
		</header>
	)
}