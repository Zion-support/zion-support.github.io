import React from "react";
import { Helmet } from 'react-helmet-async';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Content Promotion Banner - Zion Tech Group</title>
        <meta name="description" content="Professional content promotion services by Zion Tech Group." />
        <meta name="keywords" content="content promotion, digital marketing, content marketing, SEO" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Content Promotion
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional content promotion services designed to help your business grow and succeed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">SEO Optimization</h3>
            <p className="text-gray-300">
              Our team of experts provides cutting-edge SEO solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Social Media Marketing</h3>
            <p className="text-gray-300">
              Round-the-clock social media management to ensure your content reaches the right audience.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Content Strategy</h3>
            <p className="text-gray-300">
              Track record of delivering successful content strategies and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;