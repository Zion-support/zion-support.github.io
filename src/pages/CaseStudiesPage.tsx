import React from 'react';
import { Helmet } from 'react-helmet-async';
import SuccessStoriesShowcase from '../components/SuccessStoriesShowcase';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta
          name='description'
          content='Real-world case studies showcasing our AI solutions and their impact.'
        />
      </Helmet>

      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='container mx-auto px-4 py-16'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl font-bold text-gray-900 mb-6'>
              Case Studies
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Real-world case studies showcasing our AI solutions and their
              transformative impact.
            </p>
          </div>

          <SuccessStoriesShowcase />
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;
