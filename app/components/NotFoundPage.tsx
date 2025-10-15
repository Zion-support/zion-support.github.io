import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';

const NotFoundPage: React.FC = memo(() => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "404 - Page Not Found",
    "description": "The page you are looking for could not be found.",
    "url": "https://ziontechgroup.com/404"
  };

  return (
    <>
      <SEOHead
        title="404 - Page Not Found"
        description="The page you are looking for could not be found. Please check the URL or return to our homepage."
        noIndex={true}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              to="/"
              className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Go Home
            </Link>
            <Link
              to="/contact"
              className="block w-full border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Contact Support
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Need help? <Link to="/help" className="text-blue-600 hover:text-blue-800">Visit our help center</Link></p>
          </div>
        </div>
      </div>
    </>
  );
});

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;