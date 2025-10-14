import React from 'react';
import { Helmet } from 'react-helmet-async';

function MicroSaaSSolutionsPage() {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Innovative micro SaaS solutions for your business" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-center mb-8">Micro SaaS Solutions</h1>
          <p className="text-xl text-center text-gray-300">Coming Soon</p>
        </div>
      </div>
    </>
  );
}

const page = React.lazy(() => import('./page'));
export default page;



