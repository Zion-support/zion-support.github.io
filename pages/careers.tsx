import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function CareersPage() {
	return (
		<MainLayout title="Careers - Zion Tech Group" description="Join our team.">
			<div className="min-h-screen bg-gray-50 py-20">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl font-bold mb-4">Careers</h1>
					<p className="text-gray-600">Open roles and details will be back shortly.</p>
				</div>
			</div>
		</MainLayout>
	);
}

