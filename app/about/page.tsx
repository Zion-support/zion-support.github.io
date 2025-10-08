import React from 'react';

export default function AboutPage() {
  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              About Zion Tech Group
            </h1>
            <p className='text-xl text-gray-600'>
              Leading the future of AI and IT solutions
            </p>
          </div>

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
                <p className='text-gray-600'>
                  We combine deep technical expertise with innovative thinking
                  to deliver solutions that drive real business value.
                </p>
              </div>

              <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Our Expertise
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      AI Solutions
                    </h3>
                    <p className='text-gray-600'>
                      Advanced machine learning, natural language processing,
                      and computer vision solutions.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      Quantum Computing
                    </h3>
                    <p className='text-gray-600'>
                      Next-generation quantum algorithms and quantum security
                      implementations.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      Autonomous Systems
                    </h3>
                    <p className='text-gray-600'>
                      Self-managing and self-optimizing systems for enterprise
                      operations.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      Business Intelligence
                    </h3>
                    <p className='text-gray-600'>
                      Data-driven insights and analytics for strategic decision
                      making.
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg p-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Why Choose Us
                </h2>
                <ul className='space-y-3 text-gray-600'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                    <span>
                      Proven track record of successful AI implementations
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                    <span>Expert team with deep technical knowledge</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                    <span>
                      Cutting-edge technology and innovative approaches
                    </span>
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
    </>
  );
}
