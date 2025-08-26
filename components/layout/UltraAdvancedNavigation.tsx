import React from 'react';

export default function UltraAdvancedNavigation() {
	return (
		<nav className="w-full border-b bg-white/80 backdrop-blur">
			<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
				<a href="/" className="font-semibold">Zion Tech Group</a>
				<div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
					<a href="/services" className="hover:text-black">Services</a>
					<a href="/pricing" className="hover:text-black">Pricing</a>
					<a href="/about" className="hover:text-black">About</a>
					<a href="/contact" className="hover:text-black">Contact</a>
				</div>
			</div>
		</nav>
	);
}
