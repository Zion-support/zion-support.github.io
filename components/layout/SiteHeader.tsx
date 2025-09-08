import Link from 'next/link';
import React from 'react';

const SiteHeader: React.FC = () => {
	const nav = [
		{ label: 'Home', href: '/' },
		{ label: 'Services', href: '/services' },
		{ label: 'Solutions', href: '/solutions' },
		{ label: 'Case Studies', href: '/case-studies' },
		{ label: 'News', href: '/news' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' },
	];
	return (
		<header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
			<div className="container mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
				<Link href="/" className="font-semibold text-gray-900">Zion Tech Group</Link>
				<nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
					{nav.map(item => (
						<Link key={item.href} href={item.href} className="hover:text-black">
							{item.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
};

export default SiteHeader;