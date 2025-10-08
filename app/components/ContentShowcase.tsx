import React from 'react';

const ContentShowcase: React.FC = () => {
  const features = [
    {
      title: 'Enterprise AI',
      description: 'Advanced AI solutions tailored for enterprise needs',
      icon: '🤖',
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions',
      icon: '☁️',
    },
    {
      title: 'Data Analytics',
      description: 'Powerful insights from your data',
      icon: '📊',
    },
    {
      title: 'Automation',
      description: 'Streamline your business processes',
      icon: '⚡',
    },
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Cutting-edge technology solutions for modern businesses
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;