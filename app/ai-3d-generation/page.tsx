'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Advanced solutions powered by artificial intelligence." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Page</h1>
          <p className="text-xl text-gray-300">Advanced solutions powered by artificial intelligence.</p>
        </div>
      </div>
    </>
  );
};

export default Page;
