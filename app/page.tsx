import React from 'react';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold text-gray-900 mb-6'>
            Welcome to Zion Tech Group
          </h1>
          <p className='text-xl text-gray-600 mb-8'>
            Leading provider of AI-powered enterprise solutions and digital transformation services
          </p>
          <div className='flex justify-center gap-4'>
            <a
              href='/contact'
              className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
            >
              Get Started
            </a>
            <a
              href='/about'
              className='bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors'
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
