import React from 'react';
import { Helmet } from 'react-helmet-async';
const MicroSaaSSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SaaS solutions from Zion Tech Group including development, deployment, and scaling services." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, software development, business scaling, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive micro SaaS solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>
      </div>
    </>
  );
};
export default MicroSaaSSolutionsPage;