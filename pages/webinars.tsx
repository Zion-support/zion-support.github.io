import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function WebinarsPage() {
	return (
		<MainLayout title="Webinars - Zion Tech Group" description="Upcoming webinars and recordings.">
			<div className="min-h-screen bg-gray-50 py-20">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl font-bold mb-4">Webinars</h1>
					<p className="text-gray-600">New webinar content will be published soon.</p>
				</div>
			</div>
		</MainLayout>
	);
}

