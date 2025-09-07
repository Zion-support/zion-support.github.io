import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function BlogSlug() {
  return (
    <Layout>
      <Head>
        <title>Blog Post - Zion Tech Group</title>
        <meta name="description" content="Blog post content." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog Post</h1>
          <p className="text-lg text-gray-600">
            Blog post content coming soon.
          </p>
        </div>
      </div>
    </Layout>
  );
}