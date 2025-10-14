import React from 'react';
import { Helmet } from 'react-helmet-async';

const AISolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions for your business." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced artificial intelligence solutions for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

const page = React.lazy(() => import('./page'));
export default page;