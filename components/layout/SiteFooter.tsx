import Link from 'next/link';
import React from 'react';

const columns = [
	{
		title: 'Company',
		links: [
			{ label: 'About', href: '/about' },
			{ label: 'Careers', href: '/careers' },
			{ label: 'Partners', href: '/partners' },
			{ label: 'Contact', href: '/contact' },
		],
	},
	{
		title: 'Services',
		links: [
			{ label: 'AI', href: '/services/ai' },
			{ label: 'Cloud', href: '/services/cloud' },
			{ label: 'Cybersecurity', href: '/services/cybersecurity' },
			{ label: 'Infrastructure', href: '/services/infrastructure' },
			{ label: 'Consulting', href: '/services/consulting' },
		],
	},
	{
		title: 'Resources',
		links: [
			{ label: 'Blog', href: '/blog' },
			{ label: 'Case Studies', href: '/case-studies' },
			{ label: 'Events', href: '/events' },
			{ label: 'News', href: '/news' },
		],
	},
	{
		title: 'Legal',
		links: [
			{ label: 'Privacy', href: '/privacy' },
			{ label: 'Terms', href: '/terms' },
			{ label: 'Cookies', href: '/cookies' },
			{ label: 'Accessibility', href: '/accessibility' },
		],
	},
];

const SiteFooter: React.FC = () => {
	return (
		<footer className="border-t border-gray-200 bg-gray-50">
			<div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
					{columns.map((col) => (
						<div key={col.title}>
							<h4 className="text-sm font-semibold text-gray-900 mb-3">{col.title}</h4>
							<ul className="space-y-2 text-sm text-gray-600">
								{col.links.map((l) => (
									<li key={l.href}><Link href={l.href} className="hover:text-gray-900">{l.label}</Link></li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} Zion Tech Group</div>
			</div>
		</footer>
	);
};

export default SiteFooter;