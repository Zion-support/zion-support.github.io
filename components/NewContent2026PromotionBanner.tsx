import React from 'react';
import Link from 'next/link';

const NewContent2026PromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 py-12 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Headline */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              🚀 <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                NEW CONTENT 2026
              </span> 🚀
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-4xl mx-auto">
              Discover Revolutionary AI Insights, Quantum Breakthroughs & Neural Interface Technologies
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold text-white mb-2">AI Automation</h3>
              <p className="text-blue-100 text-sm">
                Latest strategies for business transformation and maximum ROI
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold text-white mb-2">Quantum Computing</h3>
              <p className="text-blue-100 text-sm">
                Enterprise breakthroughs in data processing and optimization
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-white mb-2">Neural Interfaces</h3>
              <p className="text-blue-100 text-sm">
                Bridging human cognition with artificial intelligence
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-1">6+</div>
              <div className="text-blue-100 text-sm">New Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-1">3</div>
              <div className="text-blue-100 text-sm">Featured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-1">15+</div>
              <div className="text-blue-100 text-sm">Topics Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-1">2026</div>
              <div className="text-blue-100 text-sm">Future Ready</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/content-showcase"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              📖 Explore New Content
            </Link>
            <Link 
              href="/newsletter"
              className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white border-opacity-30 hover:bg-opacity-30 transform hover:scale-105 transition-all duration-300"
            >
              📧 Get Notifications
            </Link>
          </div>

          {/* Bottom Text */}
          <div className="mt-8">
            <p className="text-blue-200 text-sm">
              ⚡ Updated Weekly • 🔥 Trending Topics • 🎯 Expert Insights
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-yellow-300 bg-opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 bg-orange-300 bg-opacity-20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-8 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-bounce delay-500"></div>
      <div className="absolute top-1/3 right-8 w-14 h-14 bg-purple-300 bg-opacity-20 rounded-full animate-bounce delay-700"></div>
    </div>
  );
};

export default NewContent2026PromotionBanner;