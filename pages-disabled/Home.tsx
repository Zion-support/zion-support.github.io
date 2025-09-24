import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Welcome to Zion Tech Group</h1>
        
        <div className="bg-white rounded-lg p-8">
          <p className="text-lg text-gray-600 mb-6">
            Your trusted partner for AI solutions, cybersecurity, and digital transformation.
          </p>
          
          <div className="flex space-x-4">
            <Link href="/services">
              <button className="bg-zion-blue text-white px-6 py-3 rounded-lg hover:bg-zion-blue-dark">
                Our Services
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white text-zion-blue border border-zion-blue px-6 py-3 rounded-lg hover:bg-gray-50">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;