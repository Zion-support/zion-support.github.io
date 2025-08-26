import React from 'react';

export function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen">
			{children}
		</div>
	);
}