import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
	return (
		<div className="container mx-auto px-4 py-10">
			<h1 className="text-3xl font-bold mb-6 text-white">Services</h1>
			<p className="text-zion-slate-light mb-6">Explore our core service offerings.</p>
			<ul className="list-disc list-inside space-y-2 text-zion-slate-light">
				<li><Link className="text-zion-cyan" to="/services/ai">AI</Link></li>
				<li><Link className="text-zion-cyan" to="/services/cloud">Cloud</Link></li>
				<li><Link className="text-zion-cyan" to="/services/cybersecurity">Cybersecurity</Link></li>
				<li><Link className="text-zion-cyan" to="/services/infrastructure">Infrastructure</Link></li>
			</ul>
		</div>
	);
}