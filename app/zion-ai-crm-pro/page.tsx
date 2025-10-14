import React from 'react';
import { Helmet } from 'react-helmet-async';
const PagePage = () => {

  return (
    <>
      <Helmet>
        <title>PagePage - Zion Tech Group</title>
        <meta name="description" content="PagePage - Zion Tech Group" />
      </Helmet>
      
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">PagePage</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>

        </div>
      </div>
    </>
  );
};

export default PagePage;