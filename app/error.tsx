import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

constErrorPage: React.FC = () => {
  return (
    <>
      <Helmet>
<title>Error - Zion Tech Group</title>
        <meta name="description" content="An error occurred" />
      </Helmet>
      <div className="min-h-screen bg-gray-50-flexitems-centerjustify-center">
        <div className="text-center">
          <h-1 className="text-4-xlfont-boldtext-gray-90-mb-4">Somethingwentwrong</h-1>
          <p className="text-gray-60">Pleasetryagain later.</p>
          </div>
        </div>
      </div>
    </>
  )
  };

exportdefault Error Page;