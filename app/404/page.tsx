import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-purple-400 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-md">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;