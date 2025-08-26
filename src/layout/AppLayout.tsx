import React from 'react';

export function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col bg-black text-white">
			<header className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-gray-800">
				<div className="max-w-7xl mx-auto px-4 py-3">Zion Tech Group</div>
			</header>
			<main className="flex-1 pt-16">{children}</main>
			<footer className="bg-black border-t border-gray-800">
				<div className="max-w-7xl mx-auto px-4 py-8 text-gray-400 text-sm">
					© {new Date().getFullYear()} Zion Tech Group. All rights reserved.
				</div>
			</footer>
		</div>
	);
}