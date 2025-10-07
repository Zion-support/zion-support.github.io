import React from 'react';
import { Helmet } from 'react-helmet-async';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      description: 'Leading technology partner for enterprise AI solutions.',
      logo: 'Microsoft',
      category: 'Technology',
    },
    {
      name: 'Google Cloud',
      description: 'Cloud infrastructure and AI services partner.',
      logo: 'Google',
      category: 'Cloud',
    },
    {
      name: 'Amazon Web Services',
      description: 'Scalable cloud computing and AI platform partner.',
      logo: 'AWS',
      category: 'Cloud',
    },
    {
      name: 'IBM',
      description: 'Enterprise AI and data analytics partner.',
      logo: 'IBM',
      category: 'Enterprise',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta
          name='description'
          content='Our trusted partners and strategic alliances in AI technology.'
        />
      </Helmet>

      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='container mx-auto px-4 py-16'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl font-bold text-gray-900 mb-6'>Partners</h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Our trusted partners and strategic alliances in AI technology.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <h3 className='text-xl font-semibold mb-4'>
                Technology Partners
              </h3>
              <p className='text-gray-600 mb-4'>
                Strategic partnerships with leading technology companies to
                deliver cutting-edge AI solutions.
              </p>
              <div className='text-sm text-blue-600 font-medium'>
                Learn More →
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <h3 className='text-xl font-semibold mb-4'>
                Enterprise Partners
              </h3>
              <p className='text-gray-600 mb-4'>
                Collaborating with Fortune 500 companies to implement AI
                solutions at scale.
              </p>
              <div className='text-sm text-blue-600 font-medium'>
                Learn More →
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <h3 className='text-xl font-semibold mb-4'>Research Partners</h3>
              <p className='text-gray-600 mb-4'>
                Working with leading research institutions to advance AI
                technology.
              </p>
              <div className='text-sm text-blue-600 font-medium'>
                Learn More →
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
