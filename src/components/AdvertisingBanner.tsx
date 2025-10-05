import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisingBanner: React.FC = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8245
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
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
      </div>
    </div>
  );
};

export default AdvertisingBanner;