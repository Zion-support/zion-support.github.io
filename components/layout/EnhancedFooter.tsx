import React from 'react';
import Link from 'next/link';

const EnhancedFooter: React.FC = () => {
	return (
		<footer className="bg-gray-900 text-white py-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">About Us</h3>
						<p className="text-gray-300">
							Leading technology solutions for modern businesses.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Services</h3>
						<ul className="text-gray-300 space-y-2">
							<li><Link href="/services" className="hover:text-white">All Services</Link></li>
							<li><Link href="/services/cloud" className="hover:text-white">Cloud Solutions</Link></li>
							<li><Link href="/services/ai" className="hover:text-white">AI Services</Link></li>
							<li><Link href="/services/cybersecurity" className="hover:text-white">Cybersecurity</Link></li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Company</h3>
						<ul className="text-gray-300 space-y-2">
							<li><Link href="/about" className="hover:text-white">About</Link></li>
							<li><Link href="/blog" className="hover:text-white">Blog</Link></li>
							<li><Link href="/contact" className="hover:text-white">Contact</Link></li>
							<li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
							<li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
							<li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Follow Us</h3>
						<div className="flex space-x-4">
							<a href="https://www.linkedin.com/company/zion-marketplace" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">LinkedIn</a>
							<a href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">GitHub</a>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
					<p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default EnhancedFooter;
