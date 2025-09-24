import React from 'react';
import Link from 'next/link';

const UltimateContentPromotionBanner2025 = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-pink-400 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-8 py-3 mb-8 animate-bounce">
            <span className="text-lg font-bold">🚀 ULTIMATE CONTENT 2025 - LIMITED TIME</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Transform Your Business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              With Revolutionary AI
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Join the AI revolution and unlock unprecedented growth with our cutting-edge solutions that deliver 
            <span className="text-yellow-400 font-bold"> 50,000% ROI</span> and transform your business into an autonomous powerhouse.
          </p>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Neural AI</h3>
              <p className="text-gray-300 mb-4">Advanced neural networks that think and learn like humans</p>
              <div className="text-3xl font-bold text-yellow-400">50,000% ROI</div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
              <p className="text-gray-300 mb-4">Exponential processing power with quantum algorithms</p>
              <div className="text-3xl font-bold text-yellow-400">75,000% ROI</div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">Autonomous Systems</h3>
              <p className="text-gray-300 mb-4">Self-managing business operations 24/7</p>
              <div className="text-3xl font-bold text-yellow-400">40,000% ROI</div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-4">Future Predictions</h3>
              <p className="text-gray-300 mb-4">95% accurate forecasting and trend analysis</p>
              <div className="text-3xl font-bold text-yellow-400">60,000% ROI</div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-16 border border-white border-opacity-20">
            <h3 className="text-3xl font-bold mb-8 text-center">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">$2.5M</div>
                <div className="text-lg font-semibold mb-2">Revenue Increase</div>
                <div className="text-gray-300">Fortune 500 Company</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">340%</div>
                <div className="text-lg font-semibold mb-2">Efficiency Boost</div>
                <div className="text-gray-300">Manufacturing Firm</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-lg font-semibold mb-2">Cost Reduction</div>
                <div className="text-gray-300">Tech Startup</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-xl inline-block mb-8 animate-pulse">
              ⏰ Limited Time: 50% Off All Premium Solutions
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-6 rounded-2xl font-bold text-2xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                🚀 Start Your Transformation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>

            <div className="text-sm opacity-75">
              <p>Join 10,000+ businesses already transforming with our revolutionary AI technology</p>
              <p className="mt-2">✨ 30-day money-back guarantee • 24/7 expert support • Custom implementation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentPromotionBanner2025;