import React from 'react';
import Link from 'next/link';

const UnifiedContentPromotion: React.FC = () => {
  return (
    <section className='bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Latest AI Innovations for Enterprise
          </h2>
          <p className='text-xl mb-8 max-w-3xl mx-auto'>
            Discover how our cutting-edge AI solutions can transform your business operations
            and drive unprecedented growth in 2025 and beyond.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/blog'
              className='bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-300'
            >
              Explore Our Blog
            </Link>
            <Link
              href='/services'
              className='border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors duration-300'
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedContentPromotion;
