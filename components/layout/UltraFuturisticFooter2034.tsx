import React from 'react';
import Link from 'next/link';

const UltraFuturisticFooter2034: React.FC = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-zion-blue-dark border-t border-zion-blue-light py-12">
			<div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
				<div>
					<div className="text-white font-semibold mb-3">Zion Tech Group</div>
					<p className="text-zion-slate-light">Delaware, USA</p>
					<p className="text-zion-slate-light mt-1">+1 (302) 464-0950</p>
					<p className="text-zion-slate-light mt-1">info@ziontechgroup.com</p>
				</div>
				<div>
					<div className="text-white font-semibold mb-3">Company</div>
					<ul className="space-y-2 text-zion-slate-light">
						<li><Link href="/about" className="hover:text-white">About</Link></li>
						<li><Link href="/careers" className="hover:text-white">Careers</Link></li>
						<li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
						<li><Link href="/news" className="hover:text-white">News</Link></li>
					</ul>
				</div>
				<div>
					<div className="text-white font-semibold mb-3">Services</div>
					<ul className="space-y-2 text-zion-slate-light">
						<li><Link href="/services/ai" className="hover:text-white">AI</Link></li>
						<li><Link href="/services/cloud" className="hover:text-white">Cloud</Link></li>
						<li><Link href="/services/cybersecurity" className="hover:text-white">Cybersecurity</Link></li>
						<li><Link href="/services/infrastructure" className="hover:text-white">Infrastructure</Link></li>
					</ul>
				</div>
				<div>
					<div className="text-white font-semibold mb-3">Legal</div>
					<ul className="space-y-2 text-zion-slate-light">
						<li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
						<li><Link href="/terms" className="hover:text-white">Terms</Link></li>
						<li><Link href="/sitemap" className="hover:text-white">Sitemap</Link></li>
					</ul>
				</div>
			</div>
			<div className="container mx-auto px-4 mt-8 text-center text-zion-slate-light">
				© {year} Zion Tech Group. All rights reserved.
			</div>
		</footer>
	);
};

export default UltraFuturisticFooter2034;