import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function AccessibilityPage() {
	return (
		<MainLayout title="Accessibility - Zion Tech Group" description="Our accessibility commitment and standards.">
			<div className="min-h-screen bg-gray-50 py-20">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl font-bold mb-4">Accessibility</h1>
					<p className="text-gray-600 max-w-2xl mx-auto">
						This page is temporarily simplified while we complete fixes. We are committed to
						WCAG 2.1 AA and inclusive user experiences.
					</p>
				</div>
			</div>
		</MainLayout>
	);
}

