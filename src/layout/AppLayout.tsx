import React from 'react';

export function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-black text-white">
			<main className="pt-20">
				{children}
			</main>
		</div>
	);
}