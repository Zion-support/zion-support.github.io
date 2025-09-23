"use client";

import React from 'react';

interface Props {
	url?: string;
	title?: string;
	description?: string;
}

export default function SocialShareButtons({ url, title }: Props) {
	return (
		<div className="flex gap-2">
			<a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url || '')}&text=${encodeURIComponent(title || '')}`} className="px-3 py-2 rounded bg-blue-600 text-white text-sm">Share</a>
			<button className="px-3 py-2 rounded border text-sm" onClick={() => navigator.clipboard?.writeText(url || window.location.href)}>Copy Link</button>
		</div>
	);
}

