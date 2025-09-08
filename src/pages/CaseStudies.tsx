import React from 'react';
import { SEO } from '../components/SEO';

const CaseStudies: React.FC = () => {
	return (
		<>
			<SEO title="Case Studies - Zion Tech Group" />
			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl font-bold text-white mb-6">Case Studies</h1>
					<p className="text-zion-slate-light">Content coming soon...</p>
				</div>
			</main>
		</>
	);
};

export default CaseStudies;
