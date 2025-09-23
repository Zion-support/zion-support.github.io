'use client';

import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner = () => {
	return (
		<section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">Revolutionary AI Content Now Available</h2>
					<p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
						Discover cutting-edge AI insights and implementation guides for 2025.
					</p>
				</div>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link href="/blog" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
						Read the Blog
					</Link>
					<Link href="/resources" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700">
						View Resources
					</Link>
				</div>
			</div>
		</section>
	);
};

export default NewContent2025UltimateBanner;