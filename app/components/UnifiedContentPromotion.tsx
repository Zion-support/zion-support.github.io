import React from 'react';

const UnifiedContentPromotion: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg shadow-md p-8 text-white">
      <h2 className="text-3xl font-bold mb-6">Unified Content Promotion</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Latest Updates</h3>
          <p className="text-green-100">Stay updated with our latest AI innovations</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Success Stories</h3>
          <p className="text-green-100">Read about our client success stories</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Expert Insights</h3>
          <p className="text-green-100">Get insights from our AI experts</p>
        </div>
      </div>
    </div>
  );
};

export default UnifiedContentPromotion;
