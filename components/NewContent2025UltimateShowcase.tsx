import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ultimate Content Showcase
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced AI solutions, breakthrough technologies, and revolutionary business transformations that will reshape your future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Neural Superintelligence</h3>
            <p className="text-gray-300 mb-6">
              Advanced AI systems that think, learn, and adapt at unprecedented speeds, delivering 50,000% ROI improvements.
            </p>
            <Link 
              href="/ai-2025/neural-superintelligence" 
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              Explore Now →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum AI Revolution</h3>
            <p className="text-gray-300 mb-6">
              Breakthrough quantum computing meets artificial intelligence for exponential processing power and capabilities.
            </p>
            <Link 
              href="/quantum-ai-2026" 
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              Discover More →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Autonomous Business</h3>
            <p className="text-gray-300 mb-6">
              Self-managing business ecosystems that operate independently, optimizing every aspect of your operations.
            </p>
            <Link 
              href="/autonomous-business-systems-2026" 
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold mb-4">Future Predictions</h3>
            <p className="text-gray-300 mb-6">
              AI-powered forecasting that predicts market trends, customer behavior, and business opportunities with 95% accuracy.
            </p>
            <Link 
              href="/ai-2026-future-predictions" 
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              See Predictions →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold mb-4">Cybersecurity Revolution</h3>
            <p className="text-gray-300 mb-6">
              Next-generation security systems that protect against advanced threats using AI and quantum encryption.
            </p>
            <Link 
              href="/ai-2025-cybersecurity" 
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              Secure Now →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">Business Intelligence</h3>
            <p className="text-gray-300 mb-6">
              Advanced analytics and insights that transform raw data into actionable business strategies and decisions.
            </p>
            <Link 
              href="/ai-2025-business-intelligence" 
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              Get Insights →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg inline-block mb-6">
            🎯 Limited Time: Get 50% Off All Premium Content
          </div>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of businesses already transforming with our AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;