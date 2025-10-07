import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisingBanner: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-y border-purple-500/20 py-16'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6'>
            <span className='text-purple-400 font-bold text-sm tracking-wider uppercase animate-pulse'>
              🚀 SPECIAL OFFER
            </span>
          </div>
          <h2 className='text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent'>
            Transform Your Business with AI
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