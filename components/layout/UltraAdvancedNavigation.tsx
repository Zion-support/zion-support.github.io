import React from 'react';
import Link from 'next/link';

const UltraAdvancedNavigation: React.FC = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
			<div className="container mx-auto px-4 h-16 flex items-center justify-between">
				<Link href="/" className="text-white font-semibold">Zion Tech Group</Link>
				<div className="flex items-center gap-6 text-sm">
					<Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
					<Link href="/solutions" className="text-gray-300 hover:text-white">Solutions</Link>
					<Link href="/case-studies" className="text-gray-300 hover:text-white">Case Studies</Link>
					<Link href="/about" className="text-gray-300 hover:text-white">About</Link>
					<Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
				</div>
			</div>
		</nav>
	);
};

export default UltraAdvancedNavigation;
