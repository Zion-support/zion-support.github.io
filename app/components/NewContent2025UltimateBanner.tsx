import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner: React.FC = () => {
	return (
		<section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8">
					<span className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4 text-sm font-medium">🚀 NEW CONTENT 2025</span>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">Revolutionary AI Content</h2>
					<p className="text-lg opacity-90">Explore our latest enterprise AI guides and resources.</p>
				</div>
				<div className="text-center">
					<Link href="/whats-new" className="inline-block bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
						See what's new →
					</Link>
				</div>
			</div>
		</section>
	);
};

export default NewContent2025UltimateBanner;