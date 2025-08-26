import React from 'react';

export default function UltraFuturisticFooter2029V2() {
	return (
		<footer className="border-t bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 py-8 text-sm text-gray-600">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<p>&copy; {new Date().getFullYear()} Zion Tech Group</p>
					<nav className="flex items-center gap-4">
						<a href="/privacy" className="hover:text-black">Privacy</a>
						<a href="/terms" className="hover:text-black">Terms</a>
					</nav>
				</div>
			</div>
		</footer>
	);
}