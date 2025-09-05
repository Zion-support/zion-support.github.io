import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function PricingPage() {
	return (
		<MainLayout title="Pricing - Zion Tech Group" description="Plans and pricing.">
			<div className="min-h-screen bg-gray-50 py-20">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl font-bold mb-4">Pricing</h1>
					<p className="text-gray-600">We’re updating pricing details.</p>
				</div>
			</div>
		</MainLayout>
	);
}

