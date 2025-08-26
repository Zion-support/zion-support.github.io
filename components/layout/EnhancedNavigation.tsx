import React from 'react';
import Link from 'next/link';

export default function EnhancedNavigation() {
	return (
		<nav className="w-full border-b bg-white">
			<div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
				<Link href="/" className="font-semibold">Zion Tech Group</Link>
				<Link href="/services" className="text-gray-600 hover:text-black">Services</Link>
				<Link href="/pricing" className="text-gray-600 hover:text-black">Pricing</Link>
				<Link href="/blog" className="text-gray-600 hover:text-black">Blog</Link>
				<Link href="/contact" className="text-gray-600 hover:text-black">Contact</Link>
			</div>
		</nav>
	);
}