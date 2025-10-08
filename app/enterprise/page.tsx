import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description: 'Enterprise-grade AI and IT solutions for large organizations',
};

export default function EnterprisePage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Enterprise Solutions
          </h1>
          <p className='text-xl text-gray-600'>
            Scalable AI and IT solutions for large organizations
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>
              Enterprise AI
            </h3>
            <p className='text-gray-600'>
              Custom AI solutions tailored for enterprise scale and security
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>
              Cloud Infrastructure
            </h3>
            <p className='text-gray-600'>
              Scalable cloud solutions with enterprise-grade security
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>
              Digital Transformation
            </h3>
            <p className='text-gray-600'>
              Complete modernization of enterprise systems and processes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
