import React from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Next-Gen AI',
      description:
        'Cutting-edge artificial intelligence solutions for 2026 and beyond.',
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second response times.',
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security for your most sensitive data.',
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description:
        'Live insights and predictive analytics for better decisions.',
    },
  ];

  return (
    <section className='bg-gray-50 py-16 rounded-2xl'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Future-Ready Solutions
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Prepare your enterprise for the next generation of AI technology
            with our advanced solutions.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
            >
              <div className='text-4xl mb-4'>{feature.icon}</div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                {feature.title}
              </h3>
              <p className='text-gray-600 text-sm'>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <button className='bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'>
            Explore 2026 Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentShowcase2026;
