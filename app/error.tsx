import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const ErrorPage: React.FC = () => {
  return (
    <>
      <Helmet>
<title>Error - Zion Tech Group</title>
        <meta name="description" content="An error occurred" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
</>
  );
};
export default ErrorPage;