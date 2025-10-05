import React from 'react';
import { Link } from 'react-router-dom';

const NewContentPromotionalBanner2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          🌟 Revolutionary Content 2026
        </h2>
        <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
          Discover groundbreaking insights into the future of AI, quantum computing, 
          and autonomous systems that will reshape our world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/blog"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Read Latest Articles
          </Link>
          <Link
            to="/newsletter"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
          >
            Subscribe to Updates
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionalBanner2026;