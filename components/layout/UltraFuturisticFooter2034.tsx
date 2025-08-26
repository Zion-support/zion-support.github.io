import React from 'react';

export default function UltraFuturisticFooter2034() {
	const year = new Date().getFullYear();
	return (
		<footer className="mt-16 border-t border-gray-800 text-gray-400 px-4 py-8">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
				<p>&copy; {year} Zion Tech Group. All rights reserved.</p>
				<nav className="flex items-center gap-6 text-sm">
					<a href="/privacy" className="hover:text-white">Privacy</a>
					<a href="/terms" className="hover:text-white">Terms</a>
				</nav>
			</div>
		</footer>
	);
}