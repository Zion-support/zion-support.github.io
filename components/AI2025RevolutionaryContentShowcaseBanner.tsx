import React from 'react';
import Link from 'next/link';

const AI2025RevolutionaryContentShowcaseBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 BREAKTHROUGH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            AI 2025 Revolutionary Content Showcase
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced AI solutions, automation breakthroughs, and business transformation strategies that are revolutionizing industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Neural Superintelligence</h3>
            <p className="text-gray-200 mb-6">
              Advanced AI consciousness systems that think, learn, and adapt like human intelligence but with superhuman capabilities.
            </p>
            <div className="bg-gradient-to-r from-green-400 to-blue-400 text-black px-4 py-2 rounded-full text-sm font-bold inline-block">
              +2,400% ROI
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum AI Revolution</h3>
            <p className="text-gray-200 mb-6">
              Next-generation quantum computing integrated with AI for unprecedented processing power and breakthrough discoveries.
            </p>
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-black px-4 py-2 rounded-full text-sm font-bold inline-block">
              +5,000% ROI
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold mb-4">Autonomous Operations</h3>
            <p className="text-gray-200 mb-6">
              Fully autonomous business ecosystems that operate independently while continuously optimizing and improving performance.
            </p>
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold inline-block">
              +10,000% ROI
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/ai-2025-revolutionary-breakthrough"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105"
            >
              Explore Revolutionary Content
            </Link>
            <Link
              href="/ai-2025-neural-superintelligence"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">🔥 Limited Time Offer</h4>
            <p className="text-lg mb-4">
              Get exclusive access to our complete AI 2025 Revolutionary Content Library with proven ROI strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full">✓ Neural AI Systems</span>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full">✓ Quantum Computing</span>
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full">✓ Autonomous Operations</span>
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full">✓ Business Transformation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025RevolutionaryContentShowcaseBanner;