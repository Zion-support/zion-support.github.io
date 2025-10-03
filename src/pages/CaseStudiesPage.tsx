import React from 'react';
import { Helmet ' from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore real-world examples of how we've helped businesses achieve their goals." />
      </Helmet>
      
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Case Studies - Zion Tech Group</h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is currently under development. Please check back soon for updates.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-600">
              We're working on bringing you detailed case studies showcasing our successful AI implementations 
              and their impact on various businesses. Stay tuned for our upcoming case study releases!
            </p>
          </div>
        </div>
      </div>
    </>
  );
';

export default CaseStudiesPage;