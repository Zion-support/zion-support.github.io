import React from "react";
import { Helmet } from 'react-helmet-async';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 rounded-lg p-6 mb-8">
      <Helmet>
        <title>Content Promotion Banner - Zion Tech Group</title>
        <meta name="description" content="Promote your content with our AI-powered content promotion solutions." />
        <meta name="keywords" content="content promotion, AI marketing, content strategy, digital marketing" />
      </Helmet>
      
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">
            Boost Your Content Reach
          </h3>
          <p className="text-gray-300 mb-4">
            Use our AI-powered content promotion tools to maximize your reach and engagement.
          </p>
          <div className="flex space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-2xl">📈</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPromotionBanner;
