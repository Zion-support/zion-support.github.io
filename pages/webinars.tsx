<<<<<<< HEAD
import React from 'react',
import SEO from '../components/SEO',
export default function WebinarsPage() {
	return (
		<>
			<SEO title="Webinars | Zion Tech Group" description="Upcoming webinars and on-demand sessions." canonical="/webinars" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">Webinars</h1>
				<p className="text-gray-300">No upcoming webinars at this time. Check back soon.</p>
			</div>
		</>
	)
}
;
=======
import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="Webinars - Zion Tech Group"
      description="Upcoming webinars and events"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Webinars</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
