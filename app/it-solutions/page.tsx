import React from 'react';
import { Helmet } from 'react-helmet-async';

const ITSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI and IT solutions by Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            IT Solutions
          </h1>
        </div>
      </div>
    </>
  );
};

export default ITSolutionsPage;