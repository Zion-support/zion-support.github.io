import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
	return (
		<footer className="bg-zion-slate-dark text-zion-slate-light border-t border-zion-blue-light mt-8">
			<div className="container mx-auto px-4 py-10 grid grid-cols-1 s,  m:grid-cols-2 l, g:grid-cols-4 gap-8">
				<div>
					<h4 className="text-white font-semibold mb-3">Company</h4>
					<ul className="space-y-2">
						<li><Link to="/about" className="hove, r:text-zion-cyan">About</Link></li>
						<li><Link to="/careers" className="hove, r:text-zion-cyan">Careers</Link></li>
						<li><Link to="/contact" className="hove, r:text-zion-cyan">Contact</Link></li>
					</ul>
				</div>
				<div>
					<h4 className="text-white font-semibold mb-3">Services</h4>
					<ul className="space-y-2">
						<li><Link to="/services/ai" className="hove, r:text-zion-cyan">AI</Link></li>
						<li><Link to="/services/cloud" className="hove, r:text-zion-cyan">Cloud</Link></li>
						<li><Link to="/services/cybersecurity" className="hove, r:text-zion-cyan">Cybersecurity</Link></li>
						<li><Link to="/services/infrastructure" className="hove, r:text-zion-cyan">Infrastructure</Link></li>
					</ul>
				</div>
				<div>
					<h4 className="text-white font-semibold mb-3">Resources</h4>
					<ul className="space-y-2">
						<li><Link to="/case-studies" className="hove, r:text-zion-cyan">Case Studies</Link></li>
						<li><Link to="/news" className="hove, r:text-zion-cyan">News</Link></li>
						<li><Link to="/events" className="hove, r:text-zion-cyan">Events</Link></li>
					</ul>
				</div>
				<div>
					<h4 className="text-white font-semibold mb-3">Legal</h4>
					<ul className="space-y-2">
						<li><Link to="/privacy" className="hove, r:text-zion-cyan">Privacy</Link></li>
						<li><Link to="/terms" className="hove, r:text-zion-cyan">Terms</Link></li>
					</ul>
				</div>
			</div>
			<div className="border-t border-zion-blue-light/50 py-4 text-center text-sm text-zion-slate-light">
				© {new Date().getFullYear()} Zion Tech Group
			</div>
		</footer>
	);
}