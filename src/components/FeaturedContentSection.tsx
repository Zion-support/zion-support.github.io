import React from 'react';

const FeaturedContentSection: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular and impactful content carefully curated to help you stay ahead 
            in the rapidly evolving world of AI and technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Latest Articles</h3>
            <p className="text-gray-600 mb-6">
              Stay updated with the latest AI trends, breakthroughs, and industry insights.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
            <p className="text-gray-600 mb-6">
              Real-world case studies showcasing remarkable AI transformation results.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tutorials</h3>
            <p className="text-gray-600 mb-6">
              Step-by-step guides to help you implement AI solutions successfully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContentSection;