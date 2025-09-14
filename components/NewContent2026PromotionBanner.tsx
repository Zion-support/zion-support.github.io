import React from 'react';
import Link from 'next/link';

const NewContent2026PromotionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
      
      {/* Animated Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
      <div className="absolute bottom-10 right-10 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
            <span className="text-sm font-bold text-yellow-300">✨ NEW CONTENT ALERT</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent">
            Revolutionary AI Content 2026
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-100">
            Discover the most advanced AI technologiesinsightsand breakthroughs that are reshaping 
            the future of business and technology. Stay ahead of the curve with our cutting-edge content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/ai-2026-content"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-xl font-bold text-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 shadow-2xl"
            >
              Explore New Content →
            </Link>
            <Link
              href="/newsletter"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-110"
            >
              Get Notified
            </Link>
          </div>
          
          {/* Content Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">Neural AI Breakthroughs</h3>
              <p className="text-gray-200 text-sm">Advanced neural networks that think and learn like humans</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold mb-3">Quantum Computing</h3>
              <p className="text-gray-200 text-sm">Revolutionary quantum AI that processes data exponentially faster</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">Autonomous Systems</h3>
              <p className="text-gray-200 text-sm">Self-managing AI that runs your business operations</p>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
              <div className="text-gray-200 text-sm">New Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-300 mb-2">100K+</div>
              <div className="text-gray-200 text-sm">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-300 mb-2">95%</div>
              <div className="text-gray-200 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">24/7</div>
              <div className="text-gray-200 text-sm">Content Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026PromotionBanner;