import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function APIPage() {
	return (
		<MainLayout title="API Reference - Zion Tech Group" description="API overview and status.">
			<div className="min-h-screen bg-gray-50 py-20">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl font-bold mb-4">API Reference</h1>
					<p className="text-gray-600">Documentation coming soon.</p>
				</div>
			</div>
		</MainLayout>
	);
}

