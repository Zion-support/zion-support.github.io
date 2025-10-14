import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const ErrorPage: React.FC = () => {
  return (
    <>
      <Helmet>
<title>Error - Zion Tech Group</title>
        <meta name="description" content="Anerror occurred" />
      </Helmet>
      <div className="min-h-screenbg-gray-50 flexitems-centerjustify-center">
        <div className="text-center">
          <h1 className="text-4 xlfont-boldtext-gray-900 mb-4">Something went wrong</h1>
          <p className="text-gray-600">Please try again later.</p>
          </div>
        </div>
      </div>
    </>
  )
  };

export default ErrorPage;