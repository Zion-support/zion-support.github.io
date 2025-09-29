import React from 'react';
import Link from 'next/link';

export default function NewContent2027ShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl p-8 text-white mb-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-0 w-24 h-24 bg-yellow-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-0 left-1/3 w-16 h-16 bg-green-300 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              ✨ NEW 2027 CONTENT
            </span>
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              JUST RELEASED
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            Revolutionary 2027 Content Hub
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              — Future-Ready Knowledge
            </span>
          </h2>
          
          <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto">
            Discover the latest AI insights, breakthrough technologies, and success stories. 
            From neural interfaces to space AI operations, explore comprehensive content that drives innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link 
            href="/blog/ai-2027-future-predictions"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-center">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🔮</div>
              <h3 className="text-lg font-bold mb-2">AI 2027 Predictions</h3>
              <p className="text-sm text-gray-300 mb-4">
                Explore groundbreaking AI predictions for 2027. From quantum AI to neural interfaces.
              </p>
              <div className="text-xs text-yellow-400 font-semibold">NEW BLOG POST</div>
            </div>
          </Link>
          
          <Link 
            href="/case-studies/fortune-500-ai-transformation-2027"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-center">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">💰</div>
              <h3 className="text-lg font-bold mb-2">$75M ROI Success</h3>
              <p className="text-sm text-gray-300 mb-4">
                Fortune 500 company achieves unprecedented ROI through comprehensive AI transformation.
              </p>
              <div className="text-xs text-green-400 font-semibold">NEW CASE STUDY</div>
            </div>
          </Link>
          
          <Link 
            href="/services/ai-2027-revolutionary-solutions"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-center">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🚀</div>
              <h3 className="text-lg font-bold mb-2">AI 2027 Solutions</h3>
              <p className="text-sm text-gray-300 mb-4">
                Revolutionary AI solutions with neural interfaces, quantum computing, and autonomous operations.
              </p>
              <div className="text-xs text-blue-400 font-semibold">NEW SERVICE</div>
            </div>
          </Link>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">150+</div>
              <div className="text-sm text-gray-300">Total Articles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">30</div>
              <div className="text-sm text-gray-300">New 2027 Content</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">$500M+</div>
              <div className="text-sm text-gray-300">Proven ROI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">95%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <Link 
            href="/content-hub"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Explore All Content →
          </Link>
        </div>
      </div>
    </div>
  );
}