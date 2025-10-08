'use client';

import React from 'react';

const ContentShowcase: React.FC = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Featured Content
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Explore our latest insights, case studies, and industry-leading expertise
          </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {[1, 2, 3].map((item) => (
            <div key={item} className='bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow'>
              <div className='text-4xl mb-4'>��</div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Content {item}
              </h3>
              <p className='text-gray-600'>
                Discover insights and innovations from our experts.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;
