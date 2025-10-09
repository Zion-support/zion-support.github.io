import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 mr-2" />
            <h2 className="text-3xl font-bold">Latest AI Innovations</h2>
          </div>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Discover cutting-edge AI solutions that are transforming businesses worldwide. 
            Stay ahead with our latest technology insights and implementations.
          </p>
          <a
            href="/ai-services"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Explore AI Solutions
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;