import React from 'react';

const ContentShowcase: React.FC = () => {
  return (
    <section className='bg-gradient-to-br from-gray-50 to-blue-50 py-16 rounded-2xl'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-gray-900 mb-12'>
          Our Services
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
            <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6'>
              <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
              </svg>
            </div>
            <h3 className='text-xl font-semibold mb-4'>AI Strategy</h3>
            <p className='text-gray-600 mb-4'>
              Comprehensive AI strategy development and implementation planning.
            </p>
            <div className='text-blue-600 font-semibold'>Learn More →</div>
          </div>
          
          <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
            <div className='w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6'>
              <svg className='w-8 h-8 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
            </div>
            <h3 className='text-xl font-semibold mb-4'>Machine Learning</h3>
            <p className='text-gray-600 mb-4'>
              Custom ML models and algorithms tailored to your business needs.
            </p>
            <div className='text-green-600 font-semibold'>Learn More →</div>
          </div>
          
          <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
            <div className='w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6'>
              <svg className='w-8 h-8 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' />
              </svg>
            </div>
            <h3 className='text-xl font-semibold mb-4'>Data Analytics</h3>
            <p className='text-gray-600 mb-4'>
              Advanced data analytics and business intelligence solutions.
            </p>
            <div className='text-purple-600 font-semibold'>Learn More →</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;