import React from 'react';

const NewContentPromoBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">New Content Available</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Discover our latest AI breakthroughs and innovative solutions.
        </p>
        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default React.memo(NewContentPromoBanner);