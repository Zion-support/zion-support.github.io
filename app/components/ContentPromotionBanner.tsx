import React from "react";
import { Helmet } from "react-helmet-async";

const ContentPromotionBanner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>ContentPromotionBanner - Zion Tech Group</title>
        <meta name="description" content="Professional contentpromotionbanner services by Zion Tech Group." />
        <meta name="keywords" content="contentpromotionbanner, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ContentPromotionBanner
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional contentpromotionbanner services designed to help your business grow and succeed.
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
