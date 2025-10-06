import React from 'react';

const UnifiedContentPromotion: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-2xl text-center">
      <h2 className="text-3xl font-bold mb-4">Unified Content Promotion</h2>
      <p className="text-xl mb-8">Discover our latest content and insights</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors">
          Explore Content
        </button>
        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-lg transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default UnifiedContentPromotion;