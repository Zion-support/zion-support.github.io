<<<<<<< HEAD
import React from 'react',
import SEO from '../components/SEO',
export default function TeamPage() {
	return (
		<>
			<SEO title="Our Team | Zion Tech Group" description="Meet the leadership team at Zion Tech Group." canonical="/team" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">Our Team</h1>
				<p className="text-gray-300 mb-8">Profiles coming soon. For inquiries, contact us.</p>
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
      title="Team - Zion Tech Group"
      description="Meet our team"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Team</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
