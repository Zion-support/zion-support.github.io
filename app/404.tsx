import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-gray-300 mb-8">Page Not Found</p>
          <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
