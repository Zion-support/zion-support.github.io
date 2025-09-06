		<Layout>
			<Head>
				<title>Documentation | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/docs" />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Documentation</h1>
				<p className="text-gray-300">Guides, API docs, and best practices. Coming soon.</p>
			</section>
		</Layout>
	)
}
;
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
