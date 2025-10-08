'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-white py-16'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-5xl font-bold text-gray-900 mb-8 text-center'>
            About Zion Tech Group
          </h1>

          <div className='prose prose-lg max-w-none'>
            <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                Our Mission
              </h2>
              <p className='text-gray-600 mb-4'>
                At Zion Tech Group, we are dedicated to transforming
                businesses through cutting-edge AI and IT solutions. Our
                mission is to empower organizations with the technology they
                need to thrive in the digital age.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                Our Vision
              </h2>
              <p className='text-gray-600 mb-4'>
                We envision a future where every business, regardless of size,
                has access to enterprise-grade AI and IT solutions that drive
                innovation and growth.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                Our Values
              </h2>
              <ul className='space-y-3'>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                  <span>Innovation and excellence in everything we do</span>
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                  <span>Client success as our primary measure of success</span>
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                  <span>Cutting-edge technology and innovative approaches</span>
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                  <span>Comprehensive support and maintenance services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};