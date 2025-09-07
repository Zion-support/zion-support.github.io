import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="border-t bg-white mt-16">
			<div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-3 text-sm">
				<div>
					<h3 className="font-semibold mb-3">Zion Tech Group</h3>
					<p className="text-gray-600">Building practical AI and modern web solutions.</p>
				</div>
				<div>
					<h4 className="font-semibold mb-3">Company</h4>
					<ul className="space-y-2 text-gray-700">
						<li><Link href="/about" className="hover:text-blue-600">About</Link></li>
						<li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
						<li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
					</ul>
				</div>
				<div>
					<h4 className="font-semibold mb-3">Resources</h4>
					<ul className="space-y-2 text-gray-700">
						<li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
						<li><Link href="/docs" className="hover:text-blue-600">Documentation</Link></li>
						<li><Link href="/support" className="hover:text-blue-600">Support</Link></li>
					</ul>
				</div>
			</div>
			<div className="border-t py-6">
				<div className="mx-auto max-w-7xl px-4 text-center text-gray-600">
					<p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;