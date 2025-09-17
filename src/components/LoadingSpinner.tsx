import React from 'react';

export default function LoadingSpinner(): JSX.Element {
	return (
		<div role="status" aria-live="polite" className="flex items-center justify-center p-4">
			<svg className="animate-spin h-5 w-5 text-gray-600" viewBox="0 0 24 24">
				<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
				<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
			</svg>
		</div>
	);
	}

