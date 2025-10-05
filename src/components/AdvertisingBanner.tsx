import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisingBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Discover Our Latest AI Solutions
          </h2>
          <p className="text-lg mb-6">
            Explore cutting-edge AI technologies and enterprise solutions
          </p>
          <div className="space-x-4">
            <Link 
              to="/services" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Services
            </Link>
            <Link 
              to="/blog" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingBanner;