import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="AI solutions from Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">AI Solutions</h1>
          <p className="text-lg text-gray-300">
            Discover our AI solutions and services.
          </p>
=======
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced AI and IT solutions by Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Page</h1>
          <p className="text-gray-300 text-center">Coming soon...</p>
>>>>>>> cursor/analyze-improve-and-merge-code-b7b5
        </div>
      </div>
    </>
  );
};

export default Page;