import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
	return (
		<aside className="hidden md:block w-64 shrink-0 border-r border-gray-200 bg-white">
			<nav className="p-4 space-y-6">
				<div>
					<h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Explore</h3>
					<ul className="space-y-2">
						<li>
							<Link href="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
						</li>
						<li>
							<Link href="/services" className="text-gray-700 hover:text-indigo-600">Services</Link>
						</li>
						<li>
							<Link href="/case-studies" className="text-gray-700 hover:text-indigo-600">Case Studies</Link>
						</li>
						<li>
							<Link href="/blog" className="text-gray-700 hover:text-indigo-600">Blog</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Solutions</h3>
					<ul className="space-y-2">
						<li>
							<Link href="/services#devops" className="text-gray-700 hover:text-indigo-600">Cloud & DevOps</Link>
						</li>
						<li>
							<Link href="/services#data" className="text-gray-700 hover:text-indigo-600">Data Engineering</Link>
						</li>
						<li>
							<Link href="/services#ai-services" className="text-gray-700 hover:text-indigo-600">Applied AI</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Company</h3>
					<ul className="space-y-2">
						<li>
							<Link href="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
						</li>
						<li>
							<Link href="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
						</li>
						<li>
							<Link href="/privacy" className="text-gray-700 hover:text-indigo-600">Privacy Policy</Link>
						</li>
						<li>
							<Link href="/terms" className="text-gray-700 hover:text-indigo-600">Terms of Service</Link>
						</li>
					</ul>
				</div>
			</nav>
		</aside>
	);
};

export default Sidebar;