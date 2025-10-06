import React from 'react';

export default function AboutPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='text-center max-w-4xl mx-auto px-4'>
        <h1 className='text-4xl font-bold text-gray-900 mb-6'>About Zion Tech Group</h1>
        <p className='text-xl text-gray-600 mb-8'>
          Leading provider of AI-powered enterprise solutions and digital transformation services.
        </p>
        <div className='grid md:grid-cols-2 gap-8 mt-12'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold mb-4'>Our Mission</h2>
            <p className='text-gray-600'>
              To revolutionize enterprise operations through cutting-edge AI solutions that deliver measurable ROI and sustainable growth.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold mb-4'>Our Vision</h2>
            <p className='text-gray-600'>
              To be the global leader in AI-driven business transformation, empowering organizations to achieve unprecedented efficiency and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}