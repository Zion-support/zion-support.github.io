import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout';

export default function PagePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center p-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under construction. Please check back later.
          </p>
          <Link
            to="/"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
