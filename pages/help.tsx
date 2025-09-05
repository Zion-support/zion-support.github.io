import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function HelpPage() {
	return (
		<MainLayout title="Help Center - Zion Tech Group" description="Guides and support resources.">
			<div className="min-h-screen bg-gray-50 py-20">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl font-bold mb-4">Help Center</h1>
					<p className="text-gray-600">We are refreshing our help content.</p>
				</div>
			</div>
		</MainLayout>
	);
}

