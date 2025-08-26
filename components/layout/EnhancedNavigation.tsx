import React from 'react';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-cyan-500/20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				<Link href="/" className="text-white font-semibold">Zion Tech Group</Link>
				<div className="flex items-center gap-6 text-gray-300">
					<Link href="/services" className="hover:text-cyan-400">Services</Link>
					<Link href="/resources" className="hover:text-cyan-400">Resources</Link>
					<Link href="/contact" className="hover:text-cyan-400">Contact</Link>
				</div>
			</div>
		</nav>
	);
};

export default EnhancedNavigation;