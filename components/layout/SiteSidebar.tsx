import Link from 'next/link';
import React from 'react';

const groups = [
	{
		title: 'Services',
		links: [
			{ label: 'Overview', href: '/services' },
			{ label: 'AI', href: '/services/ai' },
			{ label: 'Cloud', href: '/services/cloud' },
			{ label: 'Cybersecurity', href: '/services/cybersecurity' },
			{ label: 'Infrastructure', href: '/services/infrastructure' },
			{ label: 'Consulting', href: '/services/consulting' },
		],
	},
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
		title: 'More',
		links: [
			{ label: 'Case Studies', href: '/case-studies' },
			{ label: 'News', href: '/news' },
			{ label: 'Events', href: '/events' },
			{ label: 'Blog', href: '/blog' },
			{ label: 'Pricing', href: '/pricing' },
		],
	},
];

const SiteSidebar: React.FC = () => {
	return (
		<nav className="sticky top-20 space-y-6">
			{groups.map((g) => (
				<div key={g.title}>
					<h5 className="text-xs font-semibold uppercase text-gray-500 mb-2">{g.title}</h5>
					<ul className="space-y-1 text-sm text-gray-700">
						{g.links.map((l) => (
							<li key={l.href}><Link href={l.href} className="hover:text-black">{l.label}</Link></li>
						))}
					</ul>
				</div>
			))}
		</nav>
	);
};

export default SiteSidebar;