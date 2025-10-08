import React from 'react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          🚀 Latest AI Innovations 2024
        </h2>
        <p className="text-xl md:text-2xl mb-6">
          Discover cutting-edge AI solutions that are transforming businesses worldwide
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/ai-services"
            className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore AI Services
          </a>
          <a
            href="/case-studies"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
          >
            View Case Studies
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;