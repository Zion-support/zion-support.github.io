import React from 'react';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
	return (
		<nav className="bg-white shadow-lg">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					<Link href="/" className="text-xl font-bold text-gray-800">Zion Tech</Link>
					<div className="hidden md:flex space-x-8">
						<Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
						<Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
						<Link href="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
						<Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
						<Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
						<Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default EnhancedNavigation;
