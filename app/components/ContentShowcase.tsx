import React from 'react';


const ContentShowcase: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Content Showcase
          </h2>
          <p className="text-xl text-gray-600">
            Explore our latest content and insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder content cards */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Content Item {item}
              </h3>
              <p className="text-gray-600">
                Discover innovative solutions and insights from our team of experts.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;