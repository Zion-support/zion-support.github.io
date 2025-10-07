import React from 'react';

const CareersPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>
          Careers at Zion Tech
        </h1>

        <div className='grid md:grid-cols-2 gap-8'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-2xl font-semibold text-gray-800 mb-6'>
              Open Positions
            </h3>

            <div className='space-y-6'>
              <div className='border-l-4 border-blue-500 pl-4'>
                <h4 className='text-xl font-medium text-gray-900'>
                  Senior AI Engineer
                </h4>
                <p className='text-gray-600 mt-2'>
                  Join our AI team to develop cutting-edge machine learning
                  solutions.
                </p>
                <span className='inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full'>
                  Full-time • Remote
                </span>
              </div>

              <div className='border-l-4 border-purple-500 pl-4'>
                <h4 className='text-xl font-medium text-gray-900'>
                  DevOps Engineer
                </h4>
                <p className='text-gray-600 mt-2'>
                  Help us build and maintain our cloud infrastructure and
                  automation systems.
                </p>
                <span className='inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full'>
                  Full-time • Hybrid
                </span>
              </div>

              <div className='border-l-4 border-orange-500 pl-4'>
                <h4 className='text-xl font-medium text-gray-900'>
                  Frontend Developer
                </h4>
                <p className='text-gray-600 mt-2'>
                  Create beautiful and responsive user interfaces for our
                  products.
                </p>
                <span className='inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full'>
                  Full-time • Remote
                </span>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-2xl font-semibold text-gray-800 mb-6'>
              Why Work With Us?
            </h3>
            <ul className='space-y-3 text-gray-600'>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'>
                  Competitive salary and benefits
                </span>
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'>
                  Flexible work arrangements
                </span>
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'>
                  Opportunities for growth and learning
                </span>
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'>
                  Innovative and collaborative environment
                </span>
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'>
                  Cutting-edge technology stack
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  };

export default CareersPage;
