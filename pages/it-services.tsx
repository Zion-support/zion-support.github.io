import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function ITServicesPage() {
	return (
		<MainLayout title="IT Services - Zion Tech Group" description="Comprehensive IT solutions.">
			<div className="min-h-screen bg-gray-50 py-20">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl font-bold mb-4">IT Services</h1>
					<p className="text-gray-600">Page simplified to restore build health.</p>
				</div>
			</div>
		</MainLayout>
	);
}

