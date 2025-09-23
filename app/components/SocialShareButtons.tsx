"use client";

import React from 'react';
import Link from 'next/link';

type Props = {
	url: string;
	title: string;
	description?: string;
};

const SocialShareButtons: React.FC<Props> = ({ url, title }) => {
	const encodedUrl = encodeURIComponent(url);
	const encodedTitle = encodeURIComponent(title);
	return (
		<div className="flex gap-3 py-6 justify-center">
			<Link
				href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
				target="_blank"
				rel="noopener noreferrer"
				className="px-4 py-2 rounded bg-blue-600 text-white"
			>
				Share on X
			</Link>
			<Link
				href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
				target="_blank"
				rel="noopener noreferrer"
				className="px-4 py-2 rounded bg-blue-700 text-white"
			>
				Share on LinkedIn
			</Link>
		</div>
	);
};

export default SocialShareButtons;

