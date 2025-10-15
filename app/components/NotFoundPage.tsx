import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        noIndex={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. 
              It might have been moved, deleted, or doesn't exist.
            </p>
          </div>
          <div className="space-y-4">
            <Link 
              to="/" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Go Back Home
            </Link>
            <div className="text-sm text-gray-500">
              <Link to="/contact" className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                Contact Support
              </Link>
              {' • '}
              <Link to="/services" className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                Browse Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;