import React from 'react';

import { Helmet } from 'react-helmet-async';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-gray-300 mb-8">Page not found</p>
          <a 
            href="/" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
}

