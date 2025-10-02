import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Success stories and case studies from Zion Tech Group clients. See how we've helped businesses achieve 1000x performance gains." />
      </Helmet>
      
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600 mb-8">
            Success stories from our clients
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-600">
              Our case studies are currently being updated. Check back soon for detailed success stories.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;