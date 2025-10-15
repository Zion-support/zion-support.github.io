import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced AI and IT solutions by Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Page</h1>
          <p className="text-gray-300 text-center">Coming soon...</p>
        </div>
      </div>    </>
  );
};

export default Page;