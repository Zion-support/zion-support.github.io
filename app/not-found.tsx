import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-gray-300 text-lg mb-8">Page not found</p>
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
