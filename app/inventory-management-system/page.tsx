import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page = (): React.JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Page Title - Zion Tech Group</title>
        <meta name="description" content="Page description" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Coming Soon</h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is under development
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
