import React from 'react';

export default function UltraFuturisticFooter2034() {
	const year = new Date().getFullYear();
	return (
		<footer className="border-t bg-gray-50 text-gray-700">
			<div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
				<div>© {year} Zion Tech Group</div>
				<nav className="flex gap-4">
					<a href="/privacy" className="hover:underline">Privacy</a>
					<a href="/terms" className="hover:underline">Terms</a>
				</nav>
			</div>
		</footer>
	);
}