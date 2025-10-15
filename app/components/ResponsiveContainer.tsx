import React from 'react';
import { Helmet } from 'react-helmet-async';

const ResponsiveContAInerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>ResponsiveContAIner | Zion Tech Group</title>
        <meta name="description" content="Advanced AI responsivecontainer solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">ResponsiveContAIner</h1>
          <p className="text-xl text-gray-300">Advanced AI responsivecontainer solutions and services.</p>
        </div>
      </div>
    </>
  );
};

export default ResponsiveContAInerPage;