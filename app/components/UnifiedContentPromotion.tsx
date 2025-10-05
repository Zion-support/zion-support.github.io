import React from 'react';

const UnifiedContentPromotion: React.FC = () => {
  return (
    <section className='bg-gradient-to-r from-blue-50 to-purple-50 py-16 rounded-2xl'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-4xl font-bold text-gray-900 mb-6'>
          Latest AI Innovations
        </h2>
        <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
          Discover our cutting-edge AI solutions and enterprise transformation
          services.
        </p>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl font-semibold mb-4'>AI Consulting</h3>
            <p className='text-gray-600'>
              Expert guidance for your AI transformation journey.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl font-semibold mb-4'>Autonomous Systems</h3>
            <p className='text-gray-600'>
              Self-managing AI systems for maximum efficiency.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl font-semibold mb-4'>
              Digital Transformation
            </h3>
            <p className='text-gray-600'>
              Complete enterprise modernization with AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedContentPromotion;
