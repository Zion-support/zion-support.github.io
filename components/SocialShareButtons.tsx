import React from 'react';

export default function SocialShareButtons() {
	return (
		<div className="flex gap-2">
			<button className="px-3 py-1 rounded bg-gray-200 text-gray-800 text-sm">Share</button>
			<button className="px-3 py-1 rounded bg-gray-200 text-gray-800 text-sm">Tweet</button>
			<button className="px-3 py-1 rounded bg-gray-200 text-gray-800 text-sm">LinkedIn</button>
		</div>
	);
}