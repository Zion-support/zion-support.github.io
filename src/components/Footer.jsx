import React from 'react';

export function Footer() {
	return (
		<footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-6">
			<div className="container mx-auto px-4 text-center">
				<span className="text-sm">© {new Date().getFullYear()} Zion Tech Group</span>
			</div>
		</footer>
	);
}

export default Footer;
