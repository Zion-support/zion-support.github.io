import React from 'react';
import { Helmet } from 'react-helmet-async';

const FiveGSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group 5G solutions page" />
      </Helmet>

      <div className="min-h-screen pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-300">
              This page is under construction. Please check back later.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;
