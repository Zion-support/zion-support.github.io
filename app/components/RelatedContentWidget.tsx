"use client";

import React from 'react';
import Link from 'next/link';

type RelatedItem = { title: string; href: string };

type Props = {
	items?: RelatedItem[];
	title?: string;
	posts?: { title: string; slug: string }[];
};

const RelatedContentWidget: React.FC<Props> = ({ items = [], title = 'Related Content', posts }) => {
	const normalizedItems: RelatedItem[] = items.length > 0
		? items
		: (posts || []).map(p => ({ title: p.title, href: p.slug }));
	return (
		<aside className="p-4 rounded-lg border border-gray-200 bg-white">
			<h3 className="font-semibold mb-3 text-gray-900">{title}</h3>
			{normalizedItems.length === 0 ? (
				<p className="text-sm text-gray-600">No related items.</p>
			) : (
				<ul className="space-y-2">
					{normalizedItems.map((it) => (
						<li key={it.href}>
							<Link href={it.href} className="text-purple-700 hover:text-purple-900">
								{it.title}
							</Link>
						</li>
					))}
				</ul>
			)}
		</aside>
	);
};

export default RelatedContentWidget;

