<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function NotFoundPage() { return (
    <>
      <Helmet>
        <title>404 - Zion Tech Group</title>
        <meta name="description" content="Page not found - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            404 - Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you are looking for does not exist.
          </p>
          <a 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </>
  ); }
=======
import React from "react";

export default function NotFound() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-white">404</h2>
      <p className="text-gray-300">This is the 404 component.</p>
    </div>
  );
}
>>>>>>> origin/main
