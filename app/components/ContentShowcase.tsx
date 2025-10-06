import React from 'react';

const ContentShowcase: React.FC = () => {
  const contentItems = [
    {
      title: 'AI-Powered Manufacturing',
      description: 'Revolutionize your production line with intelligent automation and predictive maintenance.',
      image: '/api/placeholder/400/300',
      category: 'Manufacturing',
    },
    {
      title: 'Smart Supply Chain',
      description: 'Optimize logistics and reduce costs with AI-driven supply chain management.',
      image: '/api/placeholder/400/300',
      category: 'Supply Chain',
    },
    {
      title: 'Predictive Analytics',
      description: 'Make data-driven decisions with advanced machine learning and forecasting.',
      image: '/api/placeholder/400/300',
      category: 'Analytics',
    },
  ];

  return (
    <div className="content-showcase py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">{item.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;