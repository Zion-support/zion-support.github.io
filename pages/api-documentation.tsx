import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Api Documentation - Zion Tech Group',
  description: 'Professional api documentation services to help your business grow and succeed.',
  keywords: 'api documentation, business solutions, professional services'
};

export default function ApiDocumentationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Api Documentation
        </h1>
        <p className='text-gray-300'>REST and SDK references. Coming soon.</p>
      </section>
    </Layout>
  );
import Head from 'next/head',
import Layout from '../components/layout/Layout',
export default function APIDocumentationPage() {
	return (
		<Layout>
			<Head>
				<title>API Documentation | Zion Tech Group</title>
				<link rel="canonical" href="https: //ziontechgroup.com/api-documentation" />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">API Documentation</h1>
				<p className="text-gray-300">REST and SDK references. Coming soon.</p>
			</section>
		</Layout>
	)
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
export default function APIDocumentationPage(req, res) {
  try {
	return (;
		<Layout>;
			<Head>;
				<title>API Documentation | Zion Tech Group</title>;
				<link rel="canonical" href="https: //ziontechgroup.com/api-documentation" />;
			</Head>;
			<section className="container mx-auto px-4 py-24">;
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">API Documentation</h1>;
				<p className="text-gray-300">REST and SDK references. Coming soon.</p>;
			</section>;
		</Layout>;
	);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
