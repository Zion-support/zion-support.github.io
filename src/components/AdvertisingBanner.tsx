import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisingBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Discover Our Latest AI Solutions
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          Explore cutting-edge artificial intelligence technologies and 
          innovative solutions that can transform your business.
        </p>
        <Link 
          to='/blog/ai-2025-oct-01-vector-database-optimization-enterprise'
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default AdvertisingBanner;