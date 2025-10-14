import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaaSSolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Custom micro SaaS applications for your business." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Custom micro SaaS applications tailored to your business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

const page = React.lazy(() => import('./page'));
export default page;