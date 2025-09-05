import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function FAQPage() {
	return (
		<MainLayout title="FAQ - Zion Tech Group" description="Frequently asked questions.">
			<div className="min-h-screen bg-gray-50 py-20">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl font-bold mb-4">FAQ</h1>
					<p className="text-gray-600">We are updating this page. Contact us if you need help.</p>
				</div>
			</div>
		</MainLayout>
	);
}

