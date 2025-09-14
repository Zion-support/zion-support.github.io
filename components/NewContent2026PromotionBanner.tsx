import React from 'react';
import Link from 'next/link';

const NewContent2026PromotionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-24 h-24 bg-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-purple-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-400 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-400 to-indigo-400 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold text-black">🎉 NEW CONTENT 2026 - EXCLUSIVE LAUNCH</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            Revolutionary Content Just Dropped
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most groundbreaking content covering AI 2026, quantum computing breakthroughs, 
            neural interface innovations, and the technologies that will reshape our future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/new-content-2026"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore New Content
            </Link>
            <Link
              href="/content-showcase"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              View All Content
            </Link>
          </div>
        </div>

        {/* Content Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">AI 2026 Breakthroughs</h3>
            <p className="text-gray-200 mb-4 text-center">
              Revolutionary AI technologies that will transform every industry and aspect of human life.
            </p>
            <div className="text-center">
              <Link href="/ai-2026" className="text-pink-300 font-semibold hover:text-pink-200">
                Read More →
              </Link>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
            <div className="text-5xl mb-4 text-center">⚛️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Supremacy</h3>
            <p className="text-gray-200 mb-4 text-center">
              Quantum computing achievements that solve impossible problems in seconds.
            </p>
            <div className="text-center">
              <Link href="/quantum-2026" className="text-purple-300 font-semibold hover:text-purple-200">
                Read More →
              </Link>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
            <div className="text-5xl mb-4 text-center">🔗</div>
            <h3 className="text-xl font-bold mb-3 text-center">Neural Interfaces</h3>
            <p className="text-gray-200 mb-4 text-center">
              Direct mind-machine communication that changes everything we know about interfaces.
            </p>
            <div className="text-center">
              <Link href="/neural-2026" className="text-indigo-300 font-semibold hover:text-indigo-200">
                Read More →
              </Link>
            </div>
          </div>
        </div>

        {/* Exclusive Features */}
        <div className="bg-gradient-to-r from-black/30 to-black/50 backdrop-blur-sm rounded-3xl p-12 border border-pink-400/20">
          <h3 className="text-3xl font-bold text-center mb-8 text-pink-300">Exclusive Content Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">📚</div>
              <div className="font-bold text-white mb-2">50+ New Articles</div>
              <div className="text-gray-300 text-sm">Fresh content weekly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎥</div>
              <div className="font-bold text-white mb-2">Video Content</div>
              <div className="text-gray-300 text-sm">Interactive demonstrations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔬</div>
              <div className="font-bold text-white mb-2">Research Papers</div>
              <div className="text-gray-300 text-sm">Peer-reviewed insights</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💡</div>
              <div className="font-bold text-white mb-2">Expert Analysis</div>
              <div className="text-gray-300 text-sm">Industry leader insights</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-200 mb-6">
            Don't miss out on the most important technological developments of 2026
          </p>
          <Link
            href="/subscribe"
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-4 rounded-xl font-bold text-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Get Exclusive Access
            <span className="ml-2">🚀</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026PromotionBanner;