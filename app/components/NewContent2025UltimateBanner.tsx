"use client";

import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner: React.FC = () => {
	return (
		<section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8">
					<span className="inline-block text-sm font-medium bg-white/20 rounded-full px-4 py-1 mb-4">🚀 NEW CONTENT 2025</span>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">Revolutionary AI Content</h2>
					<p className="text-lg md:text-xl opacity-90">Discover cutting-edge AI insights, enterprise solutions, and transformative technologies for 2025.</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link href="/blog" className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold">Explore Content</Link>
					<Link href="/contact" className="border-2 border-white px-6 py-3 rounded-lg font-semibold">Talk to Us</Link>
				</div>
			</div>
		</section>
	);
};

export default NewContent2025UltimateBanner;