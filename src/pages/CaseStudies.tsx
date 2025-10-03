import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudies: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Real-world success stories of AI transformation and quantum computing implementations." />"
      </Helmet>
      
      <div className="min-h-screen bg-slate-950">"
        <div className="container mx-auto px-4 py-16">"
          <h1 className="text-4xl font-bold mb-8 text-center">Case Studies</h1>"
          <p className="text-gray-400 text-center">Coming soon - Success stories and transformations</p>"
        </div>
      </div>
    </>
  );
};

export default CaseStudies;