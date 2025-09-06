<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Layout from '../components/layout/Layout',
export default function CaseStudiesPage() {
	return (
		<Layout>
			<Head>
				<title>Case Studies | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/case-studies" />
				<meta name="description" content="Proven outcomes across AI, IT, and micro SaaS deployments." />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md: text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Case Studies</h1>
				<p className="text-gray-300">Proven outcomes and detailed success stories. Coming soon.</p>
			</section>
		</Layout>
	)
import React from 'react',;
import Head from 'next/head',;
import Layout from '../components/layout/Layout';
export default function CaseStudiesPage() {;
	return (;
		<Layout>;
			<Head>;
				<title>Case Studies | Zion Tech Group</title>;
				<link rel="canonical" href="https://ziontechgroup.com/case-studies" />;
				<meta name="description" content="Proven outcomes across AI, IT, and micro SaaS deployments." />;
			</Head>;
			<section className="container mx-auto px-4 py-24">;
				<h1 className="text-4xl md: text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Case Studies</h1>;
				<p className="text-gray-300">Proven outcomes and detailed success stories. Coming soon.</p>;
			</section>;
		</Layout>;
	);
}
;
=======
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Success stories and case studies from our clients"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
