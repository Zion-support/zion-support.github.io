import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const ErrorPage: React.FC = () => {
  return (
    <>
      <Helmet>
<title>Error - Zion Tech Group</title>
        <meta name="description" content="An error occurred" />
      </Helmet>
      <div className="min-h-screenbg-gray-50flexitems-centerjustify-center">
        <div className="text-center">
          <h1 className="text-4xlfont-boldtext-gray-90 0mb-4">Something went wrong</h1>
          <p className="text-gray-60 0">Please try again later.</p>
          </div>
        </div>
      </div>
    </>
  )
  };

export default ErrorPage;