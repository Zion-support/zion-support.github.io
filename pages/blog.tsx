import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';

export default function BlogPage() {
	return (
		<MainLayout title="Blog - Zion Tech Group" description="Technology insights and updates.">
			<div className="min-h-screen bg-gray-50 py-20">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl font-bold mb-6 text-center">Blog</h1>
					<p className="text-gray-600 text-center mb-8">Content is being refreshed. Check back soon.</p>
					<div className="text-center">
						<Link href="/" className="text-blue-600 hover:underline">Go back home</Link>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}

