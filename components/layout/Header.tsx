import React, { useState } from 'react';
import Link from 'next/link';

const nav = [
	{ name: 'Home', href: '/' },
	{ name: 'Services', href: '/services' },
	{ name: 'About', href: '/about' },
	{ name: 'Contact', href: '/contact' },
];

export default function Header() {
	const [open, setOpen] = useState(false);
	return (
		<header className="border-b bg-white">
			<div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
				<Link href="/" className="font-semibold">Zion Tech Group</Link>
				<nav className="hidden md:flex gap-6 text-sm">
					{nav.map((i) => (
						<Link key={i.name} href={i.href} className="hover:text-blue-600">
							{i.name}
						</Link>
					))}
				</nav>
				<button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
					{open ? 'Close' : 'Menu'}
				</button>
			</div>
			{open && (
				<div className="md:hidden px-4 pb-3 space-y-2">
					{nav.map((i) => (
						<Link key={i.name} href={i.href} className="block py-2 border-b">
							{i.name}
						</Link>
					))}
				</div>
			)}
		</header>
	);
}
