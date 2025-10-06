import React from 'react';

const UnifiedContentPromotion: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-2xl text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">
          Unified Content Promotion
        </h2>
        <p className="text-xl mb-8">
          Discover our latest content and promotional offers.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Latest Updates</h3>
            <p className="text-gray-200">Stay updated with our newest features and improvements.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Special Offers</h3>
            <p className="text-gray-200">Exclusive deals and promotions for our valued customers.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">News & Insights</h3>
            <p className="text-gray-200">Industry insights and company news.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnifiedContentPromotion;