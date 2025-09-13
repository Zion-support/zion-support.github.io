import React from 'react';
import { ArrowRightIcon, StarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const AI2025RevolutionaryContentBanner = () => {
  const benefits = [
    "10x Faster Content Creation",
    "95% Cost Reduction",
    "300% Higher Engagement",
    "24/7 Content Generation"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold mb-6">
              <StarIcon className="w-4 h-4 mr-2" />
              REVOLUTIONARY AI CONTENT 2025
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Future of Content
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                is Here
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Experience the most advanced AI content generation platform that creates, optimizes, and distributes content across all channels with unprecedented speed and quality.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-white">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="font-semibold">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 flex items-center justify-center">
                Get Started Now
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-200">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500K+</div>
              <div className="text-white font-semibold">Content Pieces Generated</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-white font-semibold">Uptime Guarantee</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-white font-semibold">Languages Supported</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-white font-semibold">AI Content Generation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025RevolutionaryContentBanner;