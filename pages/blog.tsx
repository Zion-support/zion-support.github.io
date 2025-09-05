import React from 'react';
import Layout from '../components/Layout';

export default function BlogPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest insights, trends, and best practices in technology.
          </p>
        </div>
      </div>
    </Layout>
  );
}