import React from 'react';

const BreakthroughContent2026Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Breakthrough Content 2026
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Discover revolutionary AI technologies and breakthrough innovations
          that will shape the future of business and technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Explore Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreakthroughContent2026Banner;