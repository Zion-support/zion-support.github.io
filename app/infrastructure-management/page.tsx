import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout';

export default function Page() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
          <p className="text-gray-300 text-lg mb-8">
            This page is under construction. Please check back later.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
