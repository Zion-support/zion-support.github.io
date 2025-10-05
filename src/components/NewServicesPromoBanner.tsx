import React from 'react';
import { Link } from 'react-router-dom';

const NewServicesPromoBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          🚀 Revolutionary AI Services Now Available
        </h2>
        <p className="text-xl mb-6 opacity-90">
          Transform your business with cutting-edge AI, quantum computing, and autonomous systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewServicesPromoBanner;