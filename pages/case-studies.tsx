import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function CaseStudiesPage() {
	return (
		<MainLayout title="Case Studies - Zion Tech Group" description="Customer success stories.">
			<div className="min-h-screen bg-gray-50 py-20">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl font-bold mb-4">Case Studies</h1>
					<p className="text-gray-600">Content temporarily simplified.</p>
				</div>
			</div>
		</MainLayout>
	);
}

