import React from 'react';
import { Link } from 'react-router-dom';

export default function SimplePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Welcome to our innovative technology services
          </p>
          
          <div className="text-center">
            <Link 
              to="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}