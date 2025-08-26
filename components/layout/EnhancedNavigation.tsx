import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavItem {
	name: string;
	href: string;
	children?: { name: string; href: string }[];
}

const navItems: NavItem[] = [
	{ name: 'Home', href: '/' },
	{ name: 'Services', href: '/services' },
	{ name: 'Products', href: '/products' },
	{ name: 'Resources', href: '/resources' },
	{ name: 'Pricing', href: '/pricing' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'Contact', href: '/contact' }
];

const EnhancedNavigation: React.FC<{ className?: string }> = ({ className = '' }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 10);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-white/90 backdrop-blur border-b border-gray-200' : 'bg-white/80 backdrop-blur'} ${className}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<Link href="/" className="text-gray-900 font-semibold">Zion Tech Group</Link>

					<div className="hidden md:flex items-center space-x-6">
						{navItems.map((item) => (
							<div key={item.name} className="relative">
								<Link href={item.href} className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
									<span>{item.name}</span>
									{item.children && <ChevronDown className="w-4 h-4" />}
								</Link>
								{activeDropdown === item.name && item.children && (
									<div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow">
										<div className="p-2">
											{item.children.map((child) => (
												<Link key={child.name} href={child.href} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
													{child.name}
												</Link>
											))}
										</div>
									</div>
								)}
							</div>
						))}
					</div>

					<button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-700">
						{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden bg-white border-t border-gray-200">
					<div className="px-4 py-3 space-y-2">
						{navItems.map((item) => (
							<Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block py-2 text-gray-700">
								{item.name}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default EnhancedNavigation;