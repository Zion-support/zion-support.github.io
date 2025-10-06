import React from 'react';

const ContentShowcase: React.FC = () => {
  const contentItems = [
    {
      title: 'AI-Powered Manufacturing',
      description:
        'Revolutionize your production line with intelligent automation and predictive maintenance.',
      image: '/api/placeholder/400/300',
      category: 'Manufacturing',
    },
    {
      title: 'Enterprise AI Strategy',
      description:
        'Comprehensive AI implementation roadmap tailored to your business needs.',
      image: '/api/placeholder/400/300',
      category: 'Strategy',
    },
    {
      title: 'Autonomous Operations',
      description:
        'Self-managing systems that optimize performance and reduce operational costs.',
      image: '/api/placeholder/400/300',
      category: 'Operations',
    },
  ];

  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-gray-900 mb-12'>
          Featured Solutions
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {contentItems.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
            >
              <div className='h-48 bg-gray-200 flex items-center justify-center'>
                <span className='text-gray-500'>Image Placeholder</span>
              </div>
              <div className='p-6'>
                <div className='text-sm text-blue-600 font-semibold mb-2'>
                  {item.category}
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {item.title}
                </h3>
                <p className='text-gray-600 mb-4'>{item.description}</p>
                <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300'>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;