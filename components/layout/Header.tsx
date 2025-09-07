'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="bg-white shadow-sm border-b sticky top-0 z-50">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<Link href="/" className="text-2xl font-bold text-gray-900">
							Zion Tech Group
						</Link>
					</div>
					
					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-8">
						<Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
							Services
						</Link>
						<Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
							About
						</Link>
						<Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
							Contact
						</Link>
					</nav>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-gray-700 hover:text-blue-600 transition-colors"
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden py-4 border-t">
						<nav className="flex flex-col space-y-4">
							<Link 
								href="/services" 
								className="text-gray-700 hover:text-blue-600 transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Services
							</Link>
							<Link 
								href="/about" 
								className="text-gray-700 hover:text-blue-600 transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								About
							</Link>
							<Link 
								href="/contact" 
								className="text-gray-700 hover:text-blue-600 transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Contact
							</Link>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;